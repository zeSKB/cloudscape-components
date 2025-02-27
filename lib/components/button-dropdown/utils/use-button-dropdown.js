import { __rest } from "tslib";
import { useOpenState } from '../../internal/components/options-list/utils/use-open-state';
import { fireCancelableEvent, isPlainLeftClick } from '../../internal/events';
import { KeyCode } from '../../internal/keycode';
import { getItemTarget, isItemGroup, isLinkItem } from './utils';
import useHighlightedMenu from './use-highlighted-menu';
export function useButtonDropdown({ items, onItemClick, onItemFollow, onReturnFocus, hasExpandableGroups, isInRestrictedView = false, expandToViewport = false, }) {
    const { targetItem, isHighlighted, isKeyboardHighlight, isExpanded, highlightItem, moveHighlight, expandGroup, collapseGroup, reset, setIsUsingMouse, } = useHighlightedMenu({
        items,
        hasExpandableGroups,
        isInRestrictedView,
    });
    const _a = useOpenState({ onClose: reset }), { isOpen, closeDropdown } = _a, openStateProps = __rest(_a, ["isOpen", "closeDropdown"]);
    const toggleDropdown = (options = {}) => {
        var _a;
        const moveHighlightOnOpen = (_a = options.moveHighlightOnOpen) !== null && _a !== void 0 ? _a : true;
        if (!isOpen && moveHighlightOnOpen) {
            moveHighlight(1);
        }
        openStateProps.toggleDropdown();
    };
    const onGroupToggle = item => (!isExpanded(item) ? expandGroup(item) : collapseGroup());
    const onItemActivate = (item, event) => {
        const details = {
            id: item.id || 'undefined',
            href: item.href,
            external: item.external,
            target: getItemTarget(item),
        };
        if (onItemFollow && item.href && isPlainLeftClick(event)) {
            fireCancelableEvent(onItemFollow, details, event);
        }
        if (onItemClick) {
            fireCancelableEvent(onItemClick, details, event);
        }
        onReturnFocus();
        closeDropdown();
    };
    const doVerticalNavigation = (direction) => {
        if (isOpen) {
            moveHighlight(direction);
        }
    };
    const openAndSelectFirst = (event) => {
        toggleDropdown();
        event.preventDefault();
    };
    const actOnParentDropdown = (event) => {
        // if there is no highlighted item we act on the trigger by opening or closing dropdown
        if (!targetItem) {
            if (isOpen && !isInRestrictedView) {
                toggleDropdown();
            }
            else {
                openAndSelectFirst(event);
            }
        }
        else {
            if (isItemGroup(targetItem)) {
                onGroupToggle(targetItem, event);
            }
            else {
                onItemActivate(targetItem, event);
            }
        }
    };
    const activate = (event, isEnter) => {
        setIsUsingMouse(false);
        // if item is a link we rely on default behavior of an anchor, no need to prevent
        if (targetItem && isLinkItem(targetItem) && isEnter) {
            return;
        }
        event.preventDefault();
        actOnParentDropdown(event);
    };
    const onKeyDown = (event) => {
        setIsUsingMouse(false);
        switch (event.keyCode) {
            case KeyCode.down: {
                doVerticalNavigation(1);
                event.preventDefault();
                break;
            }
            case KeyCode.up: {
                doVerticalNavigation(-1);
                event.preventDefault();
                break;
            }
            case KeyCode.space: {
                // Prevent scrolling the list of items and highlighting the trigger
                event.preventDefault();
                break;
            }
            case KeyCode.enter: {
                if (!(targetItem === null || targetItem === void 0 ? void 0 : targetItem.disabled)) {
                    activate(event, true);
                }
                break;
            }
            case KeyCode.left:
            case KeyCode.right: {
                if (targetItem && !targetItem.disabled && isItemGroup(targetItem) && !isExpanded(targetItem)) {
                    expandGroup();
                }
                else if (hasExpandableGroups) {
                    collapseGroup();
                }
                event.preventDefault();
                break;
            }
            case KeyCode.escape: {
                onReturnFocus();
                closeDropdown();
                event.preventDefault();
                break;
            }
            case KeyCode.tab: {
                // When expanded to viewport the focus can't move naturally to the next element.
                // Returning the focus to the trigger instead.
                if (expandToViewport) {
                    onReturnFocus();
                }
                closeDropdown();
                break;
            }
        }
    };
    const onKeyUp = (event) => {
        // We need to handle activating items with Space separately because there is a bug
        // in Firefox where changing the focus during a Space keydown event it will trigger
        // unexpected click events on the new element: https://bugzilla.mozilla.org/show_bug.cgi?id=1220143
        if (event.keyCode === KeyCode.space && !(targetItem === null || targetItem === void 0 ? void 0 : targetItem.disabled)) {
            activate(event);
        }
    };
    return {
        isOpen,
        targetItem,
        isHighlighted,
        isKeyboardHighlight,
        isExpanded,
        highlightItem,
        onKeyDown,
        onKeyUp,
        onItemActivate,
        onGroupToggle,
        toggleDropdown,
        setIsUsingMouse,
    };
}
//# sourceMappingURL=use-button-dropdown.js.map