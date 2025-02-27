// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect, useRef } from 'react';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
import clsx from 'clsx';

import { getBaseProps } from '../internal/base-component';
import { InternalBaseComponentProps } from '../internal/hooks/use-base-component';
import { fireNonCancelableEvent } from '../internal/events';
import { KeyCode } from '../internal/keycode';
import { useUniqueId } from '../internal/hooks/use-unique-id';
import { InternalButton } from '../button/internal';
import InternalHeader from '../header/internal';
import Portal from '../internal/components/portal';
import { useContainerBreakpoints, useContainerQuery } from '../internal/hooks/container-queries';
import { useVisualRefresh } from '../internal/hooks/use-visual-mode';
import { FormFieldContext } from '../internal/context/form-field-context';

import { disableBodyScrolling, enableBodyScrolling } from './body-scroll';
import { ModalProps } from './interfaces';
import styles from './styles.css.js';
import { SomeRequired } from '../internal/types';
import FocusLock from '../internal/components/focus-lock';
import { useInternalI18n } from '../internal/i18n/context';
import { useIntersectionObserver } from '../internal/hooks/use-intersection-observer';

type InternalModalProps = SomeRequired<ModalProps, 'size'> & InternalBaseComponentProps;

export default function InternalModal({ modalRoot, ...rest }: InternalModalProps) {
  return (
    <Portal container={modalRoot}>
      <InnerModal {...rest} />
    </Portal>
  );
}

// Separate component to prevent the Portal from getting in the way of refs, as it needs extra cycles to render the inner components.
// useContainerQuery needs its targeted element to exist on the first render in order to work properly.
function InnerModal({
  size,
  visible,
  header,
  children,
  footer,
  disableContentPaddings,
  onDismiss,
  __internalRootRef = null,
  ...rest
}: InternalModalProps) {
  const instanceUniqueId = useUniqueId();
  const headerId = `${rest.id || instanceUniqueId}-header`;
  const lastMouseDownElementRef = useRef<HTMLElement | null>(null);
  const [breakpoint, breakpointsRef] = useContainerBreakpoints(['xs']);

  const i18n = useInternalI18n('modal');
  const closeAriaLabel = i18n('closeAriaLabel', rest.closeAriaLabel);

  const refObject = useRef<HTMLDivElement>(null);
  const mergedRef = useMergeRefs(breakpointsRef, refObject, __internalRootRef);

  const isRefresh = useVisualRefresh();

  const baseProps = getBaseProps(rest);

  // enable body scroll and restore focus if unmounting while visible
  useEffect(() => {
    return () => {
      enableBodyScrolling();
    };
  }, []);

  // enable / disable body scroll
  useEffect(() => {
    if (visible) {
      disableBodyScrolling();
    } else {
      enableBodyScrolling();
    }
  }, [visible]);

  // Because we hide the element with styles (and not actually detach it from DOM), we need to scroll to top
  useEffect(() => {
    if (visible && refObject.current) {
      refObject.current.scrollTop = 0;
    }
  }, [visible]);

  const dismiss = (reason: string) => fireNonCancelableEvent(onDismiss, { reason });

  const onOverlayMouseDown = (event: React.MouseEvent) => {
    lastMouseDownElementRef.current = event.target as HTMLElement;
  };
  const onOverlayClick = (event: React.MouseEvent) => {
    const overlay = refObject.current;
    const lastClicked = lastMouseDownElementRef.current;

    if (event.target === overlay && lastClicked === overlay) {
      dismiss('overlay');
    }
  };
  const onCloseButtonClick = () => dismiss('closeButton');
  const escKeyHandler = (event: React.KeyboardEvent) => {
    if (event.keyCode === KeyCode.escape) {
      dismiss('keyboard');
    }
  };

  // We use an empty div element at the end of the content slot as a sentinel
  // to detect when the user has scrolled to the bottom.
  const { ref: stickySentinelRef, isIntersecting: footerStuck } = useIntersectionObserver();

  // Add extra scroll padding to account for the height of the sticky footer,
  // to prevent it from covering focused elements.
  const [footerHeight, footerRef] = useContainerQuery(rect => rect.borderBoxHeight);

  return (
    <FormFieldContext.Provider value={{}}>
      <div
        {...baseProps}
        className={clsx(styles.root, { [styles.hidden]: !visible }, baseProps.className, isRefresh && styles.refresh)}
        role="dialog"
        aria-modal={true}
        aria-labelledby={headerId}
        onMouseDown={onOverlayMouseDown}
        onClick={onOverlayClick}
        ref={mergedRef}
        style={footerHeight ? { scrollPaddingBottom: footerHeight } : undefined}
      >
        <FocusLock disabled={!visible} autoFocus={true} restoreFocus={true} className={styles['focus-lock']}>
          <div
            className={clsx(
              styles.dialog,
              styles[size],
              styles[`breakpoint-${breakpoint}`],
              isRefresh && styles.refresh
            )}
            onKeyDown={escKeyHandler}
          >
            <div className={styles.container}>
              <div className={styles.header}>
                <InternalHeader
                  variant="h2"
                  __disableActionsWrapping={true}
                  actions={
                    <InternalButton
                      ariaLabel={closeAriaLabel}
                      className={styles['dismiss-control']}
                      variant="modal-dismiss"
                      iconName="close"
                      formAction="none"
                      onClick={onCloseButtonClick}
                    />
                  }
                >
                  <span id={headerId} className={styles['header--text']}>
                    {header}
                  </span>
                </InternalHeader>
              </div>
              <div className={clsx(styles.content, { [styles['no-paddings']]: disableContentPaddings })}>
                {children}
                <div ref={stickySentinelRef} />
              </div>
              {footer && (
                <div ref={footerRef} className={clsx(styles.footer, footerStuck && styles['footer--stuck'])}>
                  {footer}
                </div>
              )}
            </div>
          </div>
        </FocusLock>
      </div>
    </FormFieldContext.Provider>
  );
}
