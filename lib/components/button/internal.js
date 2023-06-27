import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React, { useRef } from 'react';
import { fireCancelableEvent, isPlainLeftClick } from '../internal/events';
import useForwardFocus from '../internal/hooks/forward-focus';
import styles from './styles.css.js';
import { LeftIcon, RightIcon } from './icon-helper';
import { checkSafeUrl } from '../internal/utils/check-safe-url';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
import LiveRegion from '../internal/components/live-region';
import { useButtonContext } from '../internal/context/button-context';
export const InternalButton = React.forwardRef((_a, ref) => {
    var { children, iconName, __iconClass, onClick, onFollow, iconAlign = 'left', iconUrl, iconSvg, iconAlt, variant = 'normal', loading = false, loadingText, disabled = false, wrapText = true, href, target, rel, download, formAction = 'submit', ariaLabel, ariaDescribedby, ariaExpanded, fullWidth, __nativeAttributes, __internalRootRef = null, __activated = false } = _a, props = __rest(_a, ["children", "iconName", "__iconClass", "onClick", "onFollow", "iconAlign", "iconUrl", "iconSvg", "iconAlt", "variant", "loading", "loadingText", "disabled", "wrapText", "href", "target", "rel", "download", "formAction", "ariaLabel", "ariaDescribedby", "ariaExpanded", "fullWidth", "__nativeAttributes", "__internalRootRef", "__activated"]);
    checkSafeUrl('Button', href);
    const isAnchor = Boolean(href);
    const isNotInteractive = loading || disabled;
    const shouldHaveContent = children && ['icon', 'inline-icon', 'flashbar-icon', 'modal-dismiss'].indexOf(variant) === -1;
    const buttonRef = useRef(null);
    useForwardFocus(ref, buttonRef);
    const buttonContext = useButtonContext();
    const handleClick = (event) => {
        if (isNotInteractive) {
            return event.preventDefault();
        }
        if (isAnchor && isPlainLeftClick(event)) {
            fireCancelableEvent(onFollow, { href, target }, event);
        }
        const { altKey, button, ctrlKey, metaKey, shiftKey } = event;
        fireCancelableEvent(onClick, { altKey, button, ctrlKey, metaKey, shiftKey }, event);
        buttonContext.onClick({ variant });
    };
    const buttonClass = clsx(props.className, styles.button, styles[`variant-${variant}`], {
        [styles.disabled]: isNotInteractive,
        [styles['button-no-wrap']]: !wrapText,
        [styles['button-no-text']]: !shouldHaveContent,
        [styles['is-activated']]: __activated,
        [styles['full-width']]: shouldHaveContent && fullWidth,
    });
    const buttonProps = Object.assign(Object.assign(Object.assign({}, props), __nativeAttributes), { 
        // https://github.com/microsoft/TypeScript/issues/36659
        ref: useMergeRefs(buttonRef, __internalRootRef), 'aria-label': ariaLabel, 'aria-describedby': ariaDescribedby, 'aria-expanded': ariaExpanded, 
        // add ariaLabel as `title` as visible hint text
        title: ariaLabel, className: buttonClass, onClick: handleClick });
    const iconProps = {
        loading,
        iconName,
        iconAlign,
        iconUrl,
        iconSvg,
        iconAlt,
        variant,
        iconClass: __iconClass,
        iconSize: variant === 'modal-dismiss' ? 'medium' : 'normal',
    };
    const buttonContent = (React.createElement(React.Fragment, null,
        React.createElement(LeftIcon, Object.assign({}, iconProps)),
        shouldHaveContent && React.createElement("span", { className: styles.content }, children),
        React.createElement(RightIcon, Object.assign({}, iconProps))));
    if (isAnchor) {
        return (
        // https://github.com/yannickcr/eslint-plugin-react/issues/2962
        // eslint-disable-next-line react/jsx-no-target-blank
        React.createElement(React.Fragment, null,
            React.createElement("a", Object.assign({}, buttonProps, { href: href, target: target, 
                // security recommendation: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target
                rel: rel !== null && rel !== void 0 ? rel : (target === '_blank' ? 'noopener noreferrer' : undefined), tabIndex: isNotInteractive ? -1 : undefined, "aria-disabled": isNotInteractive ? true : undefined, download: download }), buttonContent),
            loading && loadingText && React.createElement(LiveRegion, null, loadingText)));
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("button", Object.assign({}, buttonProps, { type: formAction === 'none' ? 'button' : 'submit', disabled: disabled, "aria-disabled": loading && !disabled ? true : undefined }), buttonContent),
        loading && loadingText && React.createElement(LiveRegion, null, loadingText)));
});
export default InternalButton;
//# sourceMappingURL=internal.js.map