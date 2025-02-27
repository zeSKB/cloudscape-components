import React from 'react';
import InternalIcon from '../icon/internal';
import clsx from 'clsx';
import styles from './styles.css.js';
import InternalHeader, { Description as HeaderDescription } from '../header/internal';
import { isDevelopment } from '../internal/is-development';
import { warnOnce } from '@cloudscape-design/component-toolkit/internal';
import { variantSupportsDescription } from './utils';
export const componentName = 'ExpandableSection';
const ExpandableDeprecatedHeader = ({ id, className, onClick, ariaLabel, ariaControls, expanded, children, icon, onKeyUp, onKeyDown, variant, }) => {
    return (React.createElement("div", { id: id, role: "button", className: clsx(className, styles['expand-button'], styles['click-target'], styles['header-deprecated']), tabIndex: 0, onKeyUp: onKeyUp, onKeyDown: onKeyDown, onClick: onClick, "aria-label": ariaLabel, "aria-controls": ariaControls, "aria-expanded": expanded },
        React.createElement("div", { className: clsx(styles['icon-container'], styles[`icon-container-${variant}`]) }, icon),
        children));
};
const ExpandableNavigationHeader = ({ id, className, onClick, ariaLabelledBy, ariaLabel, ariaControls, expanded, children, icon, }) => {
    return (React.createElement("div", { id: id, className: clsx(className, styles['click-target']), onClick: onClick },
        React.createElement("button", { className: clsx(styles['icon-container'], styles['expand-button']), "aria-labelledby": ariaLabelledBy, "aria-label": ariaLabel, "aria-controls": ariaControls, "aria-expanded": expanded, type: "button" }, icon),
        children));
};
const ExpandableHeaderTextWrapper = ({ id, descriptionId, className, onClick, ariaLabel, ariaControls, expanded, children, icon, headerDescription, headerCounter, headerInfo, headerActions, variant, headingTagOverride, onKeyUp, onKeyDown, }) => {
    const isContainer = variant === 'container';
    const HeadingTag = headingTagOverride || 'div';
    const hasInteractiveElements = isContainer && (headerInfo || headerActions);
    const listeners = { onClick, onKeyDown, onKeyUp };
    const description = variantSupportsDescription(variant) && headerDescription && (React.createElement("span", { id: descriptionId, className: styles[`description-${variant}`] }, headerDescription));
    // If interactive elements are present, constrain the clickable area to only the icon and the header text
    // to prevent nesting interactive elements.
    const headerButtonListeners = hasInteractiveElements ? listeners : undefined;
    // For the default and footer variants with description,
    // include also the immediate wrapper around it to include the entire row for backwards compatibility,
    // but exclude the description.
    const headingTagListeners = !headerButtonListeners && !isContainer && description ? listeners : undefined;
    // For all other cases, make the entire header clickable for backwards compatibility.
    const wrapperListeners = !headerButtonListeners && !headingTagListeners ? listeners : undefined;
    const headerButton = (React.createElement("span", Object.assign({ className: clsx(styles['expand-button'], isContainer ? styles['header-container-button'] : styles['header-button'], headerButtonListeners && styles['click-target']), role: "button", tabIndex: 0, "aria-label": ariaLabel, "aria-labelledby": !ariaLabel && description ? id : undefined, "aria-describedby": description ? descriptionId : undefined, "aria-controls": ariaControls, "aria-expanded": expanded }, headerButtonListeners),
        React.createElement("span", { className: clsx(styles['icon-container'], styles[`icon-container-${variant}`]) }, icon),
        React.createElement("span", { id: id }, children)));
    return (React.createElement("div", Object.assign({ className: clsx(className, wrapperListeners && styles['click-target']) }, wrapperListeners), isContainer ? (React.createElement(InternalHeader, { variant: "h2", description: description, counter: headerCounter, info: headerInfo, actions: headerActions, headingTagOverride: headingTagOverride }, headerButton)) : (React.createElement(React.Fragment, null,
        React.createElement(HeadingTag, Object.assign({ className: clsx(styles['header-wrapper'], headingTagListeners && styles['click-target']) }, headingTagListeners), headerButton),
        description && React.createElement(HeaderDescription, { variantOverride: "h3" }, description)))));
};
export const ExpandableSectionHeader = ({ id, descriptionId, className, variant, header, headerText, headerDescription, headerCounter, headerInfo, headerActions, headingTagOverride, expanded, ariaControls, ariaLabel, ariaLabelledBy, onKeyUp, onKeyDown, onClick, }) => {
    const icon = (React.createElement(InternalIcon, { size: variant === 'container' ? 'medium' : 'normal', className: clsx(styles.icon, expanded && styles.expanded), name: "caret-down-filled" }));
    const defaultHeaderProps = {
        id: id,
        icon: icon,
        expanded: expanded,
        ariaControls: ariaControls,
        ariaLabel: ariaLabel,
        onClick: onClick,
        variant,
    };
    if ((headerCounter || headerInfo || headerActions) && variant !== 'container' && isDevelopment) {
        warnOnce(componentName, 'The `headerCounter`, `headerInfo` and `headerActions` props are only supported for the "container" variant.');
    }
    if (headerDescription && !variantSupportsDescription(variant) && isDevelopment) {
        warnOnce(componentName, `The \`headerDescription\` prop is not supported for the ${variant} variant.`);
    }
    const wrapperClassName = clsx(styles.wrapper, styles[`wrapper-${variant}`], expanded && styles['wrapper-expanded']);
    if (variant === 'navigation') {
        return (React.createElement(ExpandableNavigationHeader, Object.assign({ className: clsx(className, wrapperClassName), ariaLabelledBy: ariaLabelledBy }, defaultHeaderProps), headerText !== null && headerText !== void 0 ? headerText : header));
    }
    if (headerText) {
        return (React.createElement(ExpandableHeaderTextWrapper, Object.assign({ className: clsx(className, wrapperClassName, expanded && styles.expanded), descriptionId: descriptionId, headerDescription: headerDescription, headerCounter: headerCounter, headerInfo: headerInfo, headerActions: headerActions, headingTagOverride: headingTagOverride, onKeyUp: onKeyUp, onKeyDown: onKeyDown }, defaultHeaderProps), headerText));
    }
    if (variant === 'container' && header && isDevelopment) {
        warnOnce(componentName, 'Use `headerText` instead of `header` to provide the button within the heading for a11y.');
    }
    return (React.createElement(ExpandableDeprecatedHeader, Object.assign({ className: clsx(className, wrapperClassName, styles.focusable, expanded && styles.expanded), onKeyUp: onKeyUp, onKeyDown: onKeyDown }, defaultHeaderProps), header));
};
//# sourceMappingURL=expandable-section-header.js.map