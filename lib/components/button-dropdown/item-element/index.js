// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { isLinkItem } from '../utils/utils';
import styles from './styles.css.js';
import Tooltip from '../tooltip';
import { getItemTarget } from '../utils/utils';
import useHiddenDescription from '../utils/use-hidden-description';
import InternalIcon from '../../icon/internal';
import { useDropdownContext } from '../../internal/components/dropdown/context';
import { getMenuItemProps } from '../utils/menu-item';
const ItemElement = ({ item, disabled, onItemActivate, highlighted, highlightItem, first = false, last, hasCategoryHeader, isKeyboardHighlighted = false, variant = 'normal', }) => {
    const isLink = isLinkItem(item);
    const onClick = (event) => {
        // Stop propagation to parent node and handle event exclusively in here. This ensures
        // that no group will interfere with the default behavior of links
        event.stopPropagation();
        if (!isLink) {
            event.preventDefault();
        }
        if (!disabled) {
            onItemActivate(item, event);
        }
    };
    const onHover = (event) => {
        event.preventDefault();
        highlightItem(item);
    };
    return (React.createElement("li", { className: clsx(styles['item-element'], styles[`variant-${variant}`], {
            [styles.highlighted]: highlighted,
            [styles.disabled]: disabled,
            [styles.first]: first,
            [styles.last]: last,
            [styles['has-category-header']]: hasCategoryHeader,
            [styles['is-focused']]: isKeyboardHighlighted,
        }), role: "presentation", "data-testid": item.id, "data-description": item.description, onClick: onClick, onMouseEnter: onHover, onTouchStart: onHover },
        React.createElement(MenuItem, { item: item, disabled: disabled, highlighted: highlighted })));
};
function MenuItem({ item, disabled, highlighted }) {
    const menuItemRef = useRef(null);
    useEffect(() => {
        if (highlighted && menuItemRef.current) {
            menuItemRef.current.focus();
        }
    }, [highlighted]);
    const isDisabledWithReason = disabled && item.disabledReason;
    const { targetProps, descriptionEl } = useHiddenDescription(item.disabledReason);
    const menuItemProps = Object.assign(Object.assign({ className: styles['menu-item'], lang: item.lang, ref: menuItemRef, 
        // We are using the roving tabindex technique to manage the focus state of the dropdown.
        // The current element will always have tabindex=0 which means that it can be tabbed to,
        // while all other items have tabindex=-1 so we can focus them when necessary.
        tabIndex: highlighted ? 0 : -1 }, getMenuItemProps({ disabled })), (isDisabledWithReason ? targetProps : {}));
    const menuItem = isLinkItem(item) ? (React.createElement("a", Object.assign({}, menuItemProps, { href: !disabled ? item.href : undefined, target: getItemTarget(item), rel: item.external ? 'noopener noreferrer' : undefined }),
        React.createElement(MenuItemContent, { item: item, disabled: disabled }))) : (React.createElement("span", Object.assign({}, menuItemProps),
        React.createElement(MenuItemContent, { item: item, disabled: disabled })));
    const { position } = useDropdownContext();
    const tooltipPosition = position === 'bottom-left' || position === 'top-left' ? 'left' : 'right';
    return isDisabledWithReason ? (React.createElement(Tooltip, { content: item.disabledReason, position: tooltipPosition },
        menuItem,
        descriptionEl)) : (menuItem);
}
const MenuItemContent = ({ item, disabled }) => {
    const hasIcon = !!(item.iconName || item.iconUrl || item.iconSvg);
    const hasExternal = isLinkItem(item) && item.external;
    return (React.createElement(React.Fragment, null,
        hasIcon && React.createElement(MenuItemIcon, { name: item.iconName, url: item.iconUrl, svg: item.iconSvg, alt: item.iconAlt }),
        ' ',
        item.text,
        " ",
        hasExternal && React.createElement(ExternalIcon, { disabled: disabled, ariaLabel: item.externalIconAriaLabel })));
};
const MenuItemIcon = (props) => (React.createElement("span", { className: styles.icon },
    React.createElement(InternalIcon, Object.assign({}, props))));
const ExternalIcon = ({ disabled, ariaLabel }) => {
    const icon = React.createElement(InternalIcon, { variant: disabled ? 'disabled' : 'normal', name: "external" });
    return (React.createElement("span", { className: styles['external-icon'], role: ariaLabel ? 'img' : undefined, "aria-label": ariaLabel }, icon));
};
export default ItemElement;
//# sourceMappingURL=index.js.map