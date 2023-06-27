import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect, useRef } from 'react';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
import clsx from 'clsx';
import { getBaseProps } from '../internal/base-component';
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
import styles from './styles.css.js';
import FocusLock from '../internal/components/focus-lock';
import { useInternalI18n } from '../internal/i18n/context';
import { useIntersectionObserver } from '../internal/hooks/use-intersection-observer';
export default function InternalModal(_a) {
    var { modalRoot } = _a, rest = __rest(_a, ["modalRoot"]);
    return (React.createElement(Portal, { container: modalRoot },
        React.createElement(InnerModal, Object.assign({}, rest))));
}
// Separate component to prevent the Portal from getting in the way of refs, as it needs extra cycles to render the inner components.
// useContainerQuery needs its targeted element to exist on the first render in order to work properly.
function InnerModal(_a) {
    var { size, visible, header, children, footer, disableContentPaddings, onDismiss, __internalRootRef = null } = _a, rest = __rest(_a, ["size", "visible", "header", "children", "footer", "disableContentPaddings", "onDismiss", "__internalRootRef"]);
    const instanceUniqueId = useUniqueId();
    const headerId = `${rest.id || instanceUniqueId}-header`;
    const lastMouseDownElementRef = useRef(null);
    const [breakpoint, breakpointsRef] = useContainerBreakpoints(['xs']);
    const i18n = useInternalI18n('modal');
    const closeAriaLabel = i18n('closeAriaLabel', rest.closeAriaLabel);
    const refObject = useRef(null);
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
        }
        else {
            enableBodyScrolling();
        }
    }, [visible]);
    // Because we hide the element with styles (and not actually detach it from DOM), we need to scroll to top
    useEffect(() => {
        if (visible && refObject.current) {
            refObject.current.scrollTop = 0;
        }
    }, [visible]);
    const dismiss = (reason) => fireNonCancelableEvent(onDismiss, { reason });
    const onOverlayMouseDown = (event) => {
        lastMouseDownElementRef.current = event.target;
    };
    const onOverlayClick = (event) => {
        const overlay = refObject.current;
        const lastClicked = lastMouseDownElementRef.current;
        if (event.target === overlay && lastClicked === overlay) {
            dismiss('overlay');
        }
    };
    const onCloseButtonClick = () => dismiss('closeButton');
    const escKeyHandler = (event) => {
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
    return (React.createElement(FormFieldContext.Provider, { value: {} },
        React.createElement("div", Object.assign({}, baseProps, { className: clsx(styles.root, { [styles.hidden]: !visible }, baseProps.className, isRefresh && styles.refresh), role: "dialog", "aria-modal": true, "aria-labelledby": headerId, onMouseDown: onOverlayMouseDown, onClick: onOverlayClick, ref: mergedRef, style: footerHeight ? { scrollPaddingBottom: footerHeight } : undefined }),
            React.createElement(FocusLock, { disabled: !visible, autoFocus: true, restoreFocus: true, className: styles['focus-lock'] },
                React.createElement("div", { className: clsx(styles.dialog, styles[size], styles[`breakpoint-${breakpoint}`], isRefresh && styles.refresh), onKeyDown: escKeyHandler },
                    React.createElement("div", { className: styles.container },
                        React.createElement("div", { className: styles.header },
                            React.createElement(InternalHeader, { variant: "h2", __disableActionsWrapping: true, actions: React.createElement(InternalButton, { ariaLabel: closeAriaLabel, className: styles['dismiss-control'], variant: "modal-dismiss", iconName: "close", formAction: "none", onClick: onCloseButtonClick }) },
                                React.createElement("span", { id: headerId, className: styles['header--text'] }, header))),
                        React.createElement("div", { className: clsx(styles.content, { [styles['no-paddings']]: disableContentPaddings }) },
                            children,
                            React.createElement("div", { ref: stickySentinelRef })),
                        footer && (React.createElement("div", { ref: footerRef, className: clsx(styles.footer, footerStuck && styles['footer--stuck']) }, footer))))))));
}
//# sourceMappingURL=internal.js.map