import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React, { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';
import customCssProps from '../internal/generated/custom-css-properties';
import { Flash, focusFlashById } from './flash';
import InternalIcon from '../icon/internal';
import { TransitionGroup } from 'react-transition-group';
import { Transition } from '../internal/components/transition';
import { getVisualContextClassname } from '../internal/components/visual-context';
import styles from './styles.css.js';
import { counterTypes, getFlashTypeCount, getVisibleCollapsedItems } from './utils';
import { animate, getDOMRects } from '../internal/animate';
import { useUniqueId } from '../internal/hooks/use-unique-id';
import { sendToggleMetric } from './internal/analytics';
import { useFlashbar } from './common';
import { throttle } from '../internal/utils/throttle';
import { scrollElementIntoView } from '../internal/utils/scrollable-containers';
import { findUpUntil } from '../internal/utils/dom';
import { useInternalI18n } from '../internal/i18n/context';
// If the number of items is equal or less than this value,
// the toggle element will not be displayed and the Flashbar will look like a regular single-item Flashbar.
const maxNonCollapsibleItems = 1;
const resizeListenerThrottleDelay = 100;
export default function CollapsibleFlashbar(_a) {
    var { items } = _a, restProps = __rest(_a, ["items"]);
    const [enteringItems, setEnteringItems] = useState([]);
    const [exitingItems, setExitingItems] = useState([]);
    const [isFlashbarStackExpanded, setIsFlashbarStackExpanded] = useState(false);
    const getElementsToAnimate = useCallback(() => {
        const flashElements = isFlashbarStackExpanded ? expandedItemRefs.current : collapsedItemRefs.current;
        return Object.assign(Object.assign({}, flashElements), { notificationBar: notificationBarRef.current });
    }, [isFlashbarStackExpanded]);
    const prepareAnimations = useCallback(() => {
        const rects = getDOMRects(getElementsToAnimate());
        setInitialAnimationState(rects);
    }, [getElementsToAnimate]);
    const { baseProps, breakpoint, isReducedMotion, isVisualRefresh, mergedRef, ref } = useFlashbar(Object.assign(Object.assign({ items }, restProps), { onItemsAdded: newItems => {
            setEnteringItems([...enteringItems, ...newItems]);
        }, onItemsChanged: options => {
            // If not all items have ID, we can still animate collapse/expand transitions
            // because we can rely on each item's index in the original array,
            // but we can't do that when elements are added or removed, since the index changes.
            if ((options === null || options === void 0 ? void 0 : options.allItemsHaveId) && !(options === null || options === void 0 ? void 0 : options.isReducedMotion)) {
                prepareAnimations();
            }
        }, onItemsRemoved: removedItems => {
            setExitingItems([...exitingItems, ...removedItems]);
        } }));
    const collapsedItemRefs = useRef({});
    const expandedItemRefs = useRef({});
    const [initialAnimationState, setInitialAnimationState] = useState(null);
    const listElementRef = useRef(null);
    const notificationBarRef = useRef(null);
    const [transitioning, setTransitioning] = useState(false);
    const flashbarElementId = useUniqueId('flashbar');
    const itemCountElementId = useUniqueId('item-count');
    if (items.length <= maxNonCollapsibleItems && isFlashbarStackExpanded) {
        setIsFlashbarStackExpanded(false);
    }
    const animateFlash = !isReducedMotion;
    function toggleCollapseExpand() {
        sendToggleMetric(items.length, !isFlashbarStackExpanded);
        if (!isReducedMotion) {
            prepareAnimations();
        }
        setIsFlashbarStackExpanded(prev => !prev);
    }
    useLayoutEffect(() => {
        if (isFlashbarStackExpanded && (items === null || items === void 0 ? void 0 : items.length)) {
            const mostRecentItem = items[0];
            if (mostRecentItem.id !== undefined) {
                focusFlashById(ref.current, mostRecentItem.id);
            }
        }
        // Run this after expanding, but not every time the items change.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFlashbarStackExpanded]);
    const updateBottomSpacing = useMemo(() => throttle(() => {
        // Allow vertical space between Flashbar and page bottom only when the Flashbar is reaching the end of the page,
        // otherwise avoid spacing with eventual sticky elements below.
        const listElement = listElementRef === null || listElementRef === void 0 ? void 0 : listElementRef.current;
        const flashbar = listElement === null || listElement === void 0 ? void 0 : listElement.parentElement;
        if (listElement && flashbar) {
            // Make sure the bottom padding is present when we make the calculations,
            // then we might decide to remove it or not.
            flashbar.classList.remove(styles.floating);
            const windowHeight = window.innerHeight;
            // Take the parent region into account if using the App Layout, because it might have additional margins.
            // Otherwise we use the Flashbar component for this calculation.
            const outerElement = findUpUntil(flashbar, element => element.getAttribute('role') === 'region') || flashbar;
            const applySpacing = isFlashbarStackExpanded && Math.ceil(outerElement.getBoundingClientRect().bottom) >= windowHeight;
            if (!applySpacing) {
                flashbar.classList.add(styles.floating);
            }
        }
    }, resizeListenerThrottleDelay), [isFlashbarStackExpanded]);
    useLayoutEffect(() => {
        window.addEventListener('resize', updateBottomSpacing);
        return () => {
            window.removeEventListener('resize', updateBottomSpacing);
            updateBottomSpacing.cancel();
        };
    }, [updateBottomSpacing]);
    const { i18nStrings } = restProps;
    const i18n = useInternalI18n('flashbar');
    const ariaLabel = i18n('i18nStrings.ariaLabel', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.ariaLabel);
    const notificationBarText = i18n('i18nStrings.notificationBarText', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.notificationBarText);
    const notificationBarAriaLabel = i18n('i18nStrings.notificationBarAriaLabel', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.notificationBarAriaLabel);
    const iconAriaLabels = {
        errorIconAriaLabel: i18n('i18nStrings.errorIconAriaLabel', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.errorIconAriaLabel),
        inProgressIconAriaLabel: i18n('i18nStrings.inProgressIconAriaLabel', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.inProgressIconAriaLabel),
        infoIconAriaLabel: i18n('i18nStrings.infoIconAriaLabel', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.infoIconAriaLabel),
        successIconAriaLabel: i18n('i18nStrings.successIconAriaLabel', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.successIconAriaLabel),
        warningIconAriaLabel: i18n('i18nStrings.warningIconAriaLabel', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.warningIconAriaLabel),
    };
    useLayoutEffect(() => {
        // When `useLayoutEffect` is called, the DOM is updated but has not been painted yet,
        // so it's a good moment to trigger animations that will make calculations based on old and new DOM state.
        // The old state is kept in `initialAnimationState`
        // and the new state can be retrieved from the current DOM elements.
        if (initialAnimationState) {
            updateBottomSpacing();
            animate({
                elements: getElementsToAnimate(),
                oldState: initialAnimationState,
                newElementInitialState: ({ top }) => ({ scale: 0.9, y: -0.2 * top }),
                onTransitionsEnd: () => setTransitioning(false),
            });
            // When collapsing, scroll up if necessary to avoid losing track of the focused button
            if (!isFlashbarStackExpanded && notificationBarRef.current) {
                scrollElementIntoView(notificationBarRef.current);
            }
            setTransitioning(true);
            setInitialAnimationState(null);
        }
    }, [updateBottomSpacing, getElementsToAnimate, initialAnimationState, isFlashbarStackExpanded]);
    const isCollapsible = items.length > maxNonCollapsibleItems;
    const countByType = getFlashTypeCount(items);
    const stackDepth = Math.min(3, items.length);
    const itemsToShow = isFlashbarStackExpanded
        ? items.map((item, index) => (Object.assign(Object.assign({}, item), { expandedIndex: index })))
        : getVisibleCollapsedItems(items, stackDepth).map((item, index) => (Object.assign(Object.assign({}, item), { collapsedIndex: index })));
    const getItemId = (item) => { var _a, _b; return (_b = (_a = item.id) !== null && _a !== void 0 ? _a : item.expandedIndex) !== null && _b !== void 0 ? _b : 0; };
    // This check allows us to use the standard "enter" Transition only when the notification was not existing before.
    // If instead it was moved to the top of the stack but was already present in the array
    // (e.g, after dismissing another notification),
    // we need to use different, more custom and more controlled animations.
    const hasEntered = (item) => enteringItems.some(_item => _item.id && _item.id === item.id);
    const hasLeft = (item) => !('expandedIndex' in item);
    const hasEnteredOrLeft = (item) => hasEntered(item) || hasLeft(item);
    const showInnerContent = (item) => isFlashbarStackExpanded || hasLeft(item) || ('expandedIndex' in item && item.expandedIndex === 0);
    const shouldUseStandardAnimation = (item, index) => index === 0 && hasEnteredOrLeft(item);
    const getAnimationElementId = (item) => `flash-${getItemId(item)}`;
    const renderList = () => (React.createElement("ul", { ref: listElementRef, className: clsx(styles['flash-list'], isFlashbarStackExpanded ? styles.expanded : styles.collapsed, transitioning && styles['animation-running'], initialAnimationState && styles['animation-ready'], isVisualRefresh && styles['visual-refresh']), id: flashbarElementId, "aria-label": ariaLabel, "aria-describedby": isCollapsible ? itemCountElementId : undefined, style: !isFlashbarStackExpanded || transitioning
            ? {
                [customCssProps.flashbarStackDepth]: stackDepth,
            }
            : undefined },
        React.createElement(TransitionGroup, { component: null }, itemsToShow.map((item, index) => (React.createElement(Transition, { key: getItemId(item), in: !hasLeft(item), onStatusChange: status => {
                if (status === 'entered') {
                    setEnteringItems([]);
                }
                else if (status === 'exited') {
                    setExitingItems([]);
                }
            } }, (state, transitionRootElement) => {
            var _a, _b, _c;
            return (React.createElement("li", { "aria-hidden": !showInnerContent(item), className: showInnerContent(item)
                    ? clsx(styles['flash-list-item'], !isFlashbarStackExpanded && styles.item, !collapsedItemRefs.current[getAnimationElementId(item)] && styles['expanded-only'])
                    : clsx(styles.flash, styles[`flash-type-${(_a = item.type) !== null && _a !== void 0 ? _a : 'info'}`], styles.item), ref: element => {
                    if (isFlashbarStackExpanded) {
                        expandedItemRefs.current[getAnimationElementId(item)] = element;
                    }
                    else {
                        collapsedItemRefs.current[getAnimationElementId(item)] = element;
                    }
                }, style: !isFlashbarStackExpanded || transitioning
                    ? {
                        [customCssProps.flashbarStackIndex]: (_c = (_b = item.collapsedIndex) !== null && _b !== void 0 ? _b : item.expandedIndex) !== null && _c !== void 0 ? _c : index,
                    }
                    : undefined, key: getItemId(item) }, showInnerContent(item) && (React.createElement(Flash
            // eslint-disable-next-line react/forbid-component-props
            , Object.assign({ 
                // eslint-disable-next-line react/forbid-component-props
                className: clsx(animateFlash && styles['flash-with-motion'], isVisualRefresh && styles['flash-refresh']), key: getItemId(item), ref: shouldUseStandardAnimation(item, index) ? transitionRootElement : undefined, transitionState: shouldUseStandardAnimation(item, index) ? state : undefined }, item)))));
        }))))));
    return (React.createElement("div", Object.assign({}, baseProps, { className: clsx(baseProps.className, styles.flashbar, styles[`breakpoint-${breakpoint}`], styles.stack, isCollapsible && styles.collapsible, items.length === 2 && styles['short-list'], isFlashbarStackExpanded && styles.expanded, isVisualRefresh && styles['visual-refresh'], getVisualContextClassname('flashbar')), ref: mergedRef }),
        React.createElement(React.Fragment, null,
            isFlashbarStackExpanded && renderList(),
            isCollapsible && (React.createElement("div", { className: clsx(styles['notification-bar'], isVisualRefresh && styles['visual-refresh'], isFlashbarStackExpanded ? styles.expanded : styles.collapsed, transitioning && styles['animation-running'], items.length === 2 && styles['short-list']), onClick: toggleCollapseExpand, ref: notificationBarRef },
                React.createElement("span", { "aria-live": "polite", className: styles.status, role: "status", id: itemCountElementId },
                    notificationBarText && React.createElement("h2", { className: styles.header }, notificationBarText),
                    React.createElement("span", { className: styles['item-count'] }, counterTypes.map(({ type, labelName, iconName }) => (React.createElement(NotificationTypeCount, { key: type, iconName: iconName, label: iconAriaLabels[labelName], count: countByType[type] }))))),
                React.createElement("button", { "aria-controls": flashbarElementId, "aria-describedby": itemCountElementId, "aria-expanded": isFlashbarStackExpanded, "aria-label": notificationBarAriaLabel, className: clsx(styles.button, isFlashbarStackExpanded && styles.expanded) },
                    React.createElement(InternalIcon, { className: styles.icon, size: "normal", name: "angle-down" })))),
            !isFlashbarStackExpanded && renderList())));
}
const NotificationTypeCount = ({ iconName, label, count, }) => {
    return (React.createElement("span", { className: styles['type-count'] },
        React.createElement("span", { "aria-label": label, role: "img" },
            React.createElement("span", { title: label, "aria-hidden": "true" },
                React.createElement(InternalIcon, { name: iconName }))),
        React.createElement("span", { className: styles['count-number'] }, count)));
};
//# sourceMappingURL=collapsible-flashbar.js.map