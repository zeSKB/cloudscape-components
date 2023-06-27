import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useRef } from 'react';
import clsx from 'clsx';
import styles from './styles.css.js';
import { getBaseProps } from '../internal/base-component';
import { useUniqueId } from '../internal/hooks/use-unique-id';
import Dropdown from '../internal/components/dropdown';
import ItemsList from './items-list';
import { useButtonDropdown } from './utils/use-button-dropdown';
import OptionsList from '../internal/components/options-list';
import { InternalButton } from '../button/internal';
import { useMobile } from '../internal/hooks/use-mobile';
import useForwardFocus from '../internal/hooks/forward-focus';
import InternalBox from '../box/internal';
import { checkSafeUrl } from '../internal/utils/check-safe-url';
const InternalButtonDropdown = React.forwardRef((_a, ref) => {
    var { items, variant = 'normal', loading = false, loadingText, disabled = false, expandableGroups = false, children, onItemClick, onItemFollow, customTriggerBuilder, expandToViewport, ariaLabel, title, description, preferCenter, __internalRootRef } = _a, props = __rest(_a, ["items", "variant", "loading", "loadingText", "disabled", "expandableGroups", "children", "onItemClick", "onItemFollow", "customTriggerBuilder", "expandToViewport", "ariaLabel", "title", "description", "preferCenter", "__internalRootRef"]);
    const isInRestrictedView = useMobile();
    const dropdownId = useUniqueId('dropdown');
    for (const item of items) {
        checkSafeUrl('ButtonDropdown', item.href);
    }
    const { isOpen, targetItem, isHighlighted, isKeyboardHighlight, isExpanded, highlightItem, onKeyDown, onKeyUp, onItemActivate, onGroupToggle, toggleDropdown, setIsUsingMouse, } = useButtonDropdown({
        items,
        onItemClick,
        onItemFollow,
        onReturnFocus: () => { var _a; return (_a = dropdownRef.current) === null || _a === void 0 ? void 0 : _a.focus(); },
        expandToViewport,
        hasExpandableGroups: expandableGroups,
        isInRestrictedView,
    });
    const handleMouseEvent = () => {
        setIsUsingMouse(true);
    };
    const baseProps = getBaseProps(props);
    const dropdownRef = useRef(null);
    useForwardFocus(ref, dropdownRef);
    const clickHandler = () => {
        if (!loading && !disabled) {
            // Prevent moving highlight on mobiles to avoid disabled state reason popup if defined.
            toggleDropdown({ moveHighlightOnOpen: !isInRestrictedView });
        }
    };
    const canBeOpened = !loading && !disabled;
    const triggerVariant = variant === 'navigation' ? undefined : variant;
    const iconProps = variant === 'icon'
        ? {
            iconName: 'ellipsis',
        }
        : {
            iconName: 'caret-down-filled',
            iconAlign: 'right',
            __iconClass: canBeOpened && isOpen ? styles['rotate-up'] : styles['rotate-down'],
        };
    const trigger = customTriggerBuilder ? (customTriggerBuilder(clickHandler, dropdownRef, disabled, isOpen, ariaLabel)) : (React.createElement(InternalButton, Object.assign({ ref: dropdownRef }, iconProps, { variant: triggerVariant, loading: loading, loadingText: loadingText, disabled: disabled, onClick: (event) => {
            event.preventDefault();
            clickHandler();
        }, ariaLabel: ariaLabel, "aria-haspopup": true, ariaExpanded: canBeOpened && isOpen, formAction: "none" }), children));
    const hasHeader = title || description;
    const headerId = useUniqueId('awsui-button-dropdown__header');
    return (React.createElement("div", Object.assign({}, baseProps, { onKeyDown: onKeyDown, onKeyUp: onKeyUp, onMouseDown: handleMouseEvent, onMouseMove: handleMouseEvent, className: clsx(styles['button-dropdown'], styles[`variant-${variant}`], baseProps.className), "aria-owns": expandToViewport && isOpen ? dropdownId : undefined, ref: __internalRootRef }),
        React.createElement(Dropdown, { open: canBeOpened && isOpen, stretchWidth: false, stretchTriggerHeight: variant === 'navigation', expandToViewport: expandToViewport, preferCenter: preferCenter, onDropdownClose: () => toggleDropdown(), trigger: trigger, dropdownId: dropdownId },
            hasHeader && (React.createElement("div", { className: styles.header, id: headerId },
                title && (React.createElement("div", { className: styles.title },
                    React.createElement(InternalBox, { fontSize: "heading-s", fontWeight: "bold", color: "inherit", tagOverride: "h2", margin: { vertical: 'n', horizontal: 'n' } }, title))),
                description && (React.createElement(InternalBox, { fontSize: "body-s" },
                    React.createElement("span", { className: styles.description }, description))))),
            React.createElement(OptionsList, { open: canBeOpened && isOpen, position: "static", role: "menu", decreaseTopMargin: true, ariaLabelledby: hasHeader ? headerId : undefined, statusType: "finished" },
                React.createElement(ItemsList, { items: items, onItemActivate: onItemActivate, onGroupToggle: onGroupToggle, hasExpandableGroups: expandableGroups, targetItem: targetItem, isHighlighted: isHighlighted, isKeyboardHighlight: isKeyboardHighlight, isExpanded: isExpanded, highlightItem: highlightItem, expandToViewport: expandToViewport, variant: variant })))));
});
export default InternalButtonDropdown;
//# sourceMappingURL=internal.js.map