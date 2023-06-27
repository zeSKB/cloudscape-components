import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useContext, useRef } from 'react';
import clsx from 'clsx';
import InternalIcon from '../icon/internal';
import styles from './styles.css.js';
import { getBaseProps } from '../internal/base-component';
import { fireCancelableEvent, isPlainLeftClick } from '../internal/events';
import useForwardFocus from '../internal/hooks/forward-focus';
import { KeyCode } from '../internal/keycode';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
import { useVisualRefresh } from '../internal/hooks/use-visual-mode';
import { checkSafeUrl } from '../internal/utils/check-safe-url';
import { useInternalI18n } from '../internal/i18n/context';
import { InfoLinkLabelContext } from '../internal/context/info-link-label-context';
import { useFunnel, useFunnelSubStep } from '../internal/analytics/hooks/use-funnel';
import { FunnelMetrics } from '../internal/analytics';
import { useUniqueId } from '../internal/hooks/use-unique-id';
import { DATA_ATTR_FUNNEL_VALUE, getFunnelValueSelector, getSubStepAllSelector } from '../internal/analytics/selectors';
const InternalLink = React.forwardRef((_a, ref) => {
    var { variant = 'secondary', fontSize = 'body-m', color = 'normal', external = false, target, href, rel, ariaLabel, externalIconAriaLabel, onFollow, children, __internalRootRef = null } = _a, props = __rest(_a, ["variant", "fontSize", "color", "external", "target", "href", "rel", "ariaLabel", "externalIconAriaLabel", "onFollow", "children", "__internalRootRef"]);
    checkSafeUrl('Link', href);
    const isButton = !href;
    const specialStyles = ['top-navigation', 'link', 'recovery'];
    const hasSpecialStyle = specialStyles.indexOf(variant) > -1;
    const i18n = useInternalI18n('link');
    const baseProps = getBaseProps(props);
    const anchorTarget = target !== null && target !== void 0 ? target : (external ? '_blank' : undefined);
    const anchorRel = rel !== null && rel !== void 0 ? rel : (anchorTarget === '_blank' ? 'noopener noreferrer' : undefined);
    const uniqueId = useUniqueId('link');
    const linkId = useUniqueId('link-self');
    const infoId = useUniqueId('link-info');
    const infoLinkLabelFromContext = useContext(InfoLinkLabelContext);
    const { funnelInteractionId } = useFunnel();
    const { stepNumber, stepNameSelector, subStepSelector, subStepNameSelector } = useFunnelSubStep();
    const fireFunnelEvent = (funnelInteractionId) => {
        if (variant === 'info') {
            FunnelMetrics.helpPanelInteracted({
                funnelInteractionId,
                stepNumber,
                stepNameSelector,
                subStepSelector,
                subStepNameSelector,
                elementSelector: getFunnelValueSelector(uniqueId),
                subStepAllSelector: getSubStepAllSelector(),
            });
        }
        else if (external) {
            FunnelMetrics.externalLinkInteracted({
                funnelInteractionId,
                stepNumber,
                stepNameSelector,
                subStepSelector,
                subStepNameSelector,
                elementSelector: getFunnelValueSelector(uniqueId),
                subStepAllSelector: getSubStepAllSelector(),
            });
        }
    };
    const fireFollowEvent = (event) => {
        if (funnelInteractionId) {
            fireFunnelEvent(funnelInteractionId);
        }
        fireCancelableEvent(onFollow, { href, external, target: anchorTarget }, event);
    };
    const handleLinkClick = (event) => {
        if (isPlainLeftClick(event)) {
            fireFollowEvent(event);
        }
    };
    const handleButtonClick = (event) => {
        fireFollowEvent(event);
    };
    const handleButtonKeyDown = (event) => {
        if (event.keyCode === KeyCode.space || event.keyCode === KeyCode.enter) {
            event.preventDefault();
            fireFollowEvent(event);
        }
    };
    const linkRef = useRef(null);
    const isVisualRefresh = useVisualRefresh();
    useForwardFocus(ref, linkRef);
    // Visual refresh should only add styles to buttons that don't already have unique styles (e.g. primary/secondary variants)
    const applyButtonStyles = isButton && isVisualRefresh && !hasSpecialStyle;
    const sharedProps = Object.assign(Object.assign({ id: linkId }, baseProps), { 
        // https://github.com/microsoft/TypeScript/issues/36659
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref: useMergeRefs(linkRef, __internalRootRef), className: clsx(styles.link, baseProps.className, applyButtonStyles ? styles.button : null, styles[getVariantStyle(variant)], styles[getFontSizeStyle(variant, fontSize)], styles[getColorStyle(variant, color)]), 'aria-label': ariaLabel, 'aria-labelledby': '', [DATA_ATTR_FUNNEL_VALUE]: uniqueId });
    if (variant === 'info' && infoLinkLabelFromContext && !ariaLabel) {
        sharedProps['aria-labelledby'] = `${sharedProps.id} ${infoId} ${infoLinkLabelFromContext}`;
    }
    const renderedExternalIconAriaLabel = i18n('externalIconAriaLabel', externalIconAriaLabel);
    const content = (React.createElement(React.Fragment, null,
        children,
        external && (React.createElement("span", { className: styles['icon-wrapper'] },
            "\u00A0",
            React.createElement("span", { className: styles.icon, "aria-label": renderedExternalIconAriaLabel, role: renderedExternalIconAriaLabel ? 'img' : undefined },
                React.createElement(InternalIcon, { name: "external", size: "inherit" })))),
        variant === 'info' && (React.createElement("span", { hidden: true, id: infoId }, ":"))));
    if (isButton) {
        return (React.createElement("a", Object.assign({}, sharedProps, { role: "button", tabIndex: 0, onKeyDown: handleButtonKeyDown, onClick: handleButtonClick }), content));
    }
    return (
    // we dynamically set proper rel in the code above
    // eslint-disable-next-line react/jsx-no-target-blank
    React.createElement("a", Object.assign({}, sharedProps, { target: anchorTarget, rel: anchorRel, href: href, onClick: handleLinkClick }), content));
});
function getVariantStyle(variant) {
    return `variant-${variant.replace(/^awsui-/, '')}`;
}
function getFontSizeStyle(variant, fontSize) {
    switch (variant) {
        case 'info':
            return 'font-size-body-s';
        case 'awsui-value-large':
            return 'font-size-display-l';
        default:
            return `font-size-${fontSize}`;
    }
}
function getColorStyle(variant, color) {
    return `color-${variant === 'info' ? 'normal' : color}`;
}
export default InternalLink;
//# sourceMappingURL=internal.js.map