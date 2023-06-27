import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useCallback, useEffect, useRef, useState, useImperativeHandle } from 'react';
import clsx from 'clsx';
import { KeyCode } from '../internal/keycode';
import { getBaseProps } from '../internal/base-component';
import { FormFieldContext } from '../internal/context/form-field-context';
import Arrow from './arrow';
import Portal from '../internal/components/portal';
import PopoverContainer from './container';
import PopoverBody from './body';
import styles from './styles.css.js';
import { fireNonCancelableEvent } from '../internal/events/index';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
import { usePortalModeClasses } from '../internal/hooks/use-portal-mode-classes';
import { useInternalI18n } from '../internal/i18n/context';
export default React.forwardRef(InternalPopover);
function InternalPopover(_a, ref) {
    var { position = 'right', size = 'medium', fixedWidth = false, triggerType = 'text', dismissButton = true, children, header, content, renderWithPortal = false, __onOpen, __internalRootRef = null } = _a, restProps = __rest(_a, ["position", "size", "fixedWidth", "triggerType", "dismissButton", "children", "header", "content", "renderWithPortal", "__onOpen", "__internalRootRef"]);
    const baseProps = getBaseProps(restProps);
    const triggerRef = useRef(null);
    const popoverRef = useRef(null);
    const clickFrameId = useRef(null);
    const i18n = useInternalI18n('popover');
    const dismissAriaLabel = i18n('dismissAriaLabel', restProps.dismissAriaLabel);
    const [visible, setVisible] = useState(false);
    const focusTrigger = useCallback(() => {
        var _a;
        (_a = triggerRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, []);
    const onTriggerClick = useCallback(() => {
        fireNonCancelableEvent(__onOpen);
        setVisible(true);
    }, [__onOpen]);
    const onDismiss = useCallback(() => {
        setVisible(false);
        focusTrigger();
    }, [focusTrigger]);
    const onTriggerKeyDown = useCallback((event) => {
        if (event.keyCode === KeyCode.tab || event.keyCode === KeyCode.escape) {
            setVisible(false);
        }
    }, []);
    useImperativeHandle(ref, () => ({
        dismissPopover: onDismiss,
    }));
    useEffect(() => {
        if (!triggerRef.current) {
            return;
        }
        const document = triggerRef.current.ownerDocument;
        const onDocumentClick = () => {
            // Dismiss popover unless there was a click inside within the last animation frame.
            if (clickFrameId.current === null) {
                setVisible(false);
            }
        };
        // useCapture=false makes sure this listener is called after the one attached to the element.
        // the options.capture notation is unsupported by IE.
        document.addEventListener('mousedown', onDocumentClick, false);
        return () => {
            document.removeEventListener('mousedown', onDocumentClick, false);
        };
    }, []);
    const popoverClasses = usePortalModeClasses(triggerRef);
    const triggerProps = {
        // https://github.com/microsoft/TypeScript/issues/36659
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref: triggerRef,
        onClick: onTriggerClick,
        onKeyDown: onTriggerKeyDown,
        className: clsx(styles.trigger, styles[`trigger-type-${triggerType}`]),
    };
    const popoverContent = (React.createElement("div", { "aria-live": dismissButton ? undefined : 'polite', "aria-atomic": dismissButton ? undefined : true, className: clsx(popoverClasses, styles['popover-content']) }, visible && (React.createElement(PopoverContainer, { size: size, fixedWidth: fixedWidth, position: position, trackRef: triggerRef, arrow: position => React.createElement(Arrow, { position: position }), renderWithPortal: renderWithPortal, zIndex: renderWithPortal ? 7000 : undefined },
        React.createElement(PopoverBody, { dismissButton: dismissButton, dismissAriaLabel: dismissAriaLabel, header: header, onDismiss: onDismiss, overflowVisible: "both" }, content)))));
    const mergedRef = useMergeRefs(popoverRef, __internalRootRef);
    return (React.createElement("span", Object.assign({}, baseProps, { className: clsx(styles.root, baseProps.className), ref: mergedRef, onMouseDown: () => {
            // Indicate there was a click inside popover recently, including nested portals.
            clickFrameId.current = requestAnimationFrame(() => {
                clickFrameId.current = null;
            });
        } }),
        triggerType === 'text' ? (React.createElement("button", Object.assign({}, triggerProps, { type: "button", "aria-haspopup": "dialog" }),
            React.createElement("span", { className: styles['trigger-inner-text'] }, children))) : (React.createElement("span", Object.assign({}, triggerProps), children)),
        React.createElement(FormFieldContext.Provider, { value: {} }, renderWithPortal ? React.createElement(Portal, null, popoverContent) : popoverContent)));
}
//# sourceMappingURL=internal.js.map