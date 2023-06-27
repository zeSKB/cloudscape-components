import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React, { useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { getBaseProps } from '../internal/base-component';
import { useControllable } from '../internal/hooks/use-controllable';
import { useMobile } from '../internal/hooks/use-mobile';
import { fireNonCancelableEvent } from '../internal/events';
import { applyDefaults } from './defaults';
import { Notifications } from './notifications';
import { MobileToolbar } from './mobile-toolbar';
import { useFocusControl } from './utils/use-focus-control';
import useWindowWidth from './utils/use-window-width';
import useContentHeight from './utils/use-content-height';
import styles from './styles.css.js';
import testutilStyles from './test-classes/styles.css.js';
import { findUpUntil } from '../internal/utils/dom';
import { AppLayoutContext } from '../internal/context/app-layout-context';
import { useContainerQuery } from '../internal/hooks/container-queries';
import { useStableEventHandler } from '../internal/hooks/use-stable-event-handler';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import { SplitPanelContextProvider, } from '../internal/context/split-panel-context';
import { CONSTRAINED_MAIN_PANEL_MIN_HEIGHT, CONSTRAINED_PAGE_HEIGHT, getSplitPanelDefaultSize, MAIN_PANEL_MIN_HEIGHT, } from '../split-panel/utils/size-utils';
import useBaseComponent from '../internal/hooks/use-base-component';
import { useVisualRefresh } from '../internal/hooks/use-visual-mode';
import ContentWrapper from './content-wrapper';
import { Drawer, DrawerTriggersBar } from './drawer';
import { ResizableDrawer } from './drawer/resizable-drawer';
import { togglesConfig } from './toggles';
import { SideSplitPanelDrawer } from './split-panel-drawer';
import useAppLayoutOffsets from './utils/use-content-width';
import { isDevelopment } from '../internal/is-development';
import { warnOnce } from '@cloudscape-design/component-toolkit/internal';
import RefreshedAppLayout from './visual-refresh';
import { useInternalI18n } from '../internal/i18n/context';
import { useSplitPanelFocusControl } from './utils/use-split-panel-focus-control';
import { useDrawerFocusControl } from './utils/use-drawer-focus-control';
import { awsuiPluginsInternal } from '../internal/plugins/api';
import { convertRuntimeDrawers } from './runtime-api';
const AppLayout = React.forwardRef((_a, ref) => {
    var _b, _c, _d, _e, _f, _g, _h, _j;
    var { contentType = 'default', headerSelector = '#b #h', footerSelector = '#b #f' } = _a, rest = __rest(_a, ["contentType", "headerSelector", "footerSelector"]);
    const { __internalRootRef } = useBaseComponent('AppLayout');
    const [runtimeDrawers, setRuntimeDrawers] = useState({ before: [], after: [] });
    const isRefresh = useVisualRefresh();
    const i18n = useInternalI18n('app-layout');
    const ariaLabels = {
        navigation: i18n('ariaLabels.navigation', (_b = rest.ariaLabels) === null || _b === void 0 ? void 0 : _b.navigation),
        navigationClose: i18n('ariaLabels.navigationClose', (_c = rest.ariaLabels) === null || _c === void 0 ? void 0 : _c.navigationClose),
        navigationToggle: i18n('ariaLabels.navigationToggle', (_d = rest.ariaLabels) === null || _d === void 0 ? void 0 : _d.navigationToggle),
        notifications: i18n('ariaLabels.notifications', (_e = rest.ariaLabels) === null || _e === void 0 ? void 0 : _e.notifications),
        tools: i18n('ariaLabels.tools', (_f = rest.ariaLabels) === null || _f === void 0 ? void 0 : _f.tools),
        toolsClose: i18n('ariaLabels.toolsClose', (_g = rest.ariaLabels) === null || _g === void 0 ? void 0 : _g.toolsClose),
        toolsToggle: i18n('ariaLabels.toolsToggle', (_h = rest.ariaLabels) === null || _h === void 0 ? void 0 : _h.toolsToggle),
    };
    // This re-builds the props including the default values
    const props = Object.assign(Object.assign({ contentType, headerSelector, footerSelector }, rest), { ariaLabels });
    const baseProps = getBaseProps(rest);
    const ownDrawers = props.drawers;
    const disableRuntimeDrawers = props.__disableRuntimeDrawers;
    const combinedDrawers = [...runtimeDrawers.before, ...((_j = ownDrawers === null || ownDrawers === void 0 ? void 0 : ownDrawers.items) !== null && _j !== void 0 ? _j : []), ...runtimeDrawers.after];
    const finalDrawers = combinedDrawers.length > 0 ? Object.assign(Object.assign({}, ownDrawers), { items: combinedDrawers }) : ownDrawers;
    useEffect(() => {
        if (disableRuntimeDrawers) {
            return;
        }
        const unsubscribe = awsuiPluginsInternal.appLayout.onDrawersRegistered(drawers => setRuntimeDrawers(convertRuntimeDrawers(drawers)));
        return () => {
            unsubscribe();
            setRuntimeDrawers({ before: [], after: [] });
        };
    }, [disableRuntimeDrawers]);
    return (React.createElement("div", Object.assign({ ref: __internalRootRef }, baseProps), isRefresh ? (React.createElement(RefreshedAppLayout, Object.assign({}, props, { drawers: finalDrawers }, { ref: ref }))) : (React.createElement(OldAppLayout, Object.assign({}, props, { drawers: finalDrawers }, { ref: ref })))));
});
const OldAppLayout = React.forwardRef((_a, ref) => {
    var _b, _c;
    var { navigation, navigationWidth = 280, navigationHide, navigationOpen: controlledNavigationOpen, tools, toolsWidth = 290, toolsHide, toolsOpen: controlledToolsOpen, breadcrumbs, notifications, stickyNotifications, contentHeader, disableContentHeaderOverlap, content, contentType = 'default', disableContentPaddings, disableBodyScroll, maxContentWidth, minContentWidth, headerSelector = '#b #h', footerSelector = '#b #f', ariaLabels, splitPanel, splitPanelSize: controlledSplitPanelSize, splitPanelOpen: controlledSplitPanelOpen, splitPanelPreferences: controlledSplitPanelPreferences, onSplitPanelPreferencesChange, onSplitPanelResize, onSplitPanelToggle, onNavigationChange, onToolsChange } = _a, props = __rest(_a, ["navigation", "navigationWidth", "navigationHide", "navigationOpen", "tools", "toolsWidth", "toolsHide", "toolsOpen", "breadcrumbs", "notifications", "stickyNotifications", "contentHeader", "disableContentHeaderOverlap", "content", "contentType", "disableContentPaddings", "disableBodyScroll", "maxContentWidth", "minContentWidth", "headerSelector", "footerSelector", "ariaLabels", "splitPanel", "splitPanelSize", "splitPanelOpen", "splitPanelPreferences", "onSplitPanelPreferencesChange", "onSplitPanelResize", "onSplitPanelToggle", "onNavigationChange", "onToolsChange"]);
    if (isDevelopment) {
        if (controlledToolsOpen && toolsHide) {
            warnOnce('AppLayout', `You have enabled both the \`toolsOpen\` prop and the \`toolsHide\` prop. This is not supported. Set \`toolsOpen\` to \`false\` when you set \`toolsHide\` to \`true\`.`);
        }
    }
    const drawers = props.drawers;
    const hasDrawers = drawers && drawers.items.length > 0;
    const rootRef = useRef(null);
    const isMobile = useMobile();
    const defaults = applyDefaults(contentType, { maxContentWidth, minContentWidth }, false);
    const [navigationOpen = false, setNavigationOpen] = useControllable(controlledNavigationOpen, onNavigationChange, isMobile ? false : defaults.navigationOpen, { componentName: 'AppLayout', controlledProp: 'navigationOpen', changeHandler: 'onNavigationChange' });
    const [toolsOpen = false, setToolsOpen] = useControllable(controlledToolsOpen, onToolsChange, isMobile ? false : defaults.toolsOpen, { componentName: 'AppLayout', controlledProp: 'toolsOpen', changeHandler: 'onToolsChange' });
    const [activeDrawerId, setActiveDrawerId] = useControllable(drawers === null || drawers === void 0 ? void 0 : drawers.activeDrawerId, drawers === null || drawers === void 0 ? void 0 : drawers.onChange, isMobile ? false : tools ? defaults.toolsOpen : '', {
        componentName: 'AppLayout',
        controlledProp: 'activeDrawerId',
        changeHandler: 'onChange',
    });
    const { iconName, getLabels } = togglesConfig.tools;
    const { mainLabel, closeLabel, openLabel } = getLabels(ariaLabels);
    const toolsItem = {
        id: 'tools',
        content: tools,
        resizable: false,
        ariaLabels: {
            triggerButton: openLabel,
            closeButton: closeLabel,
            content: mainLabel,
        },
        trigger: {
            iconName: iconName,
        },
    };
    const getAllDrawerItems = () => {
        if (!hasDrawers) {
            return;
        }
        return tools ? [toolsItem, ...drawers.items] : drawers.items;
    };
    const selectedDrawer = tools && toolsOpen
        ? toolsItem
        : hasDrawers
            ? (_b = getAllDrawerItems()) === null || _b === void 0 ? void 0 : _b.filter((drawerItem) => drawerItem.id === activeDrawerId)[0]
            : undefined;
    const { refs: navigationRefs, setFocus: focusNavButtons } = useFocusControl(navigationOpen);
    const { refs: toolsRefs, setFocus: focusToolsButtons, loseFocus: loseToolsFocus, } = useFocusControl(toolsOpen || selectedDrawer !== undefined, true);
    const { refs: drawerRefs, setFocus: focusDrawersButtons, loseFocus: loseDrawersFocus, setLastInteraction: setDrawerLastInteraction, } = useDrawerFocusControl([selectedDrawer === null || selectedDrawer === void 0 ? void 0 : selectedDrawer.resizable], toolsOpen || selectedDrawer !== undefined, true);
    const onNavigationToggle = useCallback((open) => {
        setNavigationOpen(open);
        focusNavButtons();
        fireNonCancelableEvent(onNavigationChange, { open });
    }, [setNavigationOpen, onNavigationChange, focusNavButtons]);
    const onToolsToggle = useCallback((open) => {
        setToolsOpen(open);
        focusToolsButtons();
        fireNonCancelableEvent(onToolsChange, { open });
    }, [setToolsOpen, onToolsChange, focusToolsButtons]);
    const onNavigationClick = (event) => {
        const hasLink = findUpUntil(event.target, node => node.tagName === 'A' && !!node.href);
        if (hasLink) {
            onNavigationToggle(false);
        }
    };
    const navigationVisible = !navigationHide && navigationOpen;
    const toolsVisible = !toolsHide && toolsOpen;
    const { contentHeightStyle, headerHeight, footerHeight } = useContentHeight(headerSelector, footerSelector, disableBodyScroll);
    const [isSplitpanelForcedPosition, setIsSplitpanelForcedPosition] = useState(false);
    const [isResizeInvalid, setIsResizeInvalid] = useState(false);
    const [notificationsHeight, notificationsRef] = useContainerQuery(rect => rect.height);
    const anyPanelOpen = navigationVisible || toolsVisible;
    const hasRenderedNotifications = notificationsHeight ? notificationsHeight > 0 : false;
    const stickyNotificationsHeight = stickyNotifications ? notificationsHeight : null;
    const [splitPanelPreferences, setSplitPanelPreferences] = useControllable(controlledSplitPanelPreferences, onSplitPanelPreferencesChange, undefined, {
        componentName: 'AppLayout',
        controlledProp: 'splitPanelPreferences',
        changeHandler: 'onSplitPanelPreferencesChange',
    });
    const [splitPanelOpen = false, setSplitPanelOpen] = useControllable(controlledSplitPanelOpen, onSplitPanelToggle, false, {
        componentName: 'AppLayout',
        controlledProp: 'splitPanelOpen',
        changeHandler: 'onSplitPanelToggle',
    });
    const drawerItems = useMemo(() => (drawers === null || drawers === void 0 ? void 0 : drawers.items) || [], [drawers === null || drawers === void 0 ? void 0 : drawers.items]);
    const getDrawerItemSizes = useCallback(() => {
        const sizes = {};
        if (!drawerItems) {
            return {};
        }
        for (const item of drawerItems) {
            if (item.defaultSize) {
                sizes[item.id] = item.defaultSize || toolsWidth;
            }
        }
        return sizes;
    }, [drawerItems, toolsWidth]);
    const [drawerSizes, setDrawerSizes] = useState(() => getDrawerItemSizes());
    useEffect(() => {
        // Ensure we only set new drawer items by performing a shallow merge
        // of the latest drawer item sizes, and previous drawer item sizes.
        setDrawerSizes(prev => (Object.assign(Object.assign({}, getDrawerItemSizes()), prev)));
    }, [getDrawerItemSizes]);
    const drawerSize = (selectedDrawer === null || selectedDrawer === void 0 ? void 0 : selectedDrawer.id) && drawerSizes[selectedDrawer === null || selectedDrawer === void 0 ? void 0 : selectedDrawer.id] ? drawerSizes[selectedDrawer === null || selectedDrawer === void 0 ? void 0 : selectedDrawer.id] : toolsWidth;
    const splitPanelPosition = (splitPanelPreferences === null || splitPanelPreferences === void 0 ? void 0 : splitPanelPreferences.position) || 'bottom';
    const [splitPanelReportedToggle, setSplitPanelReportedToggle] = useState({
        displayed: false,
        ariaLabel: undefined,
    });
    const splitPanelDisplayed = !!(splitPanel && (splitPanelReportedToggle.displayed || splitPanelOpen));
    const closedDrawerWidth = 40;
    const effectiveNavigationWidth = navigationHide ? 0 : navigationOpen ? navigationWidth : closedDrawerWidth;
    const getEffectiveToolsWidth = () => {
        if (toolsHide && (!splitPanelDisplayed || (splitPanelPreferences === null || splitPanelPreferences === void 0 ? void 0 : splitPanelPreferences.position) !== 'side') && !drawers) {
            return 0;
        }
        if (selectedDrawer === null || selectedDrawer === void 0 ? void 0 : selectedDrawer.resizable) {
            return drawerSize;
        }
        if (toolsOpen || activeDrawerId) {
            return toolsWidth;
        }
        return closedDrawerWidth;
    };
    const effectiveToolsWidth = getEffectiveToolsWidth();
    const defaultSplitPanelSize = getSplitPanelDefaultSize(splitPanelPosition);
    const [splitPanelSize = defaultSplitPanelSize, setSplitPanelSize] = useControllable(controlledSplitPanelSize, onSplitPanelResize, defaultSplitPanelSize, {
        componentName: 'AppLayout',
        controlledProp: 'splitPanelSize',
        changeHandler: 'onSplitPanelResize',
    });
    const mainContentRef = useRef(null);
    const legacyScrollRootRef = useRef(null);
    const { refs: splitPanelRefs, setLastInteraction: setSplitPanelLastInteraction } = useSplitPanelFocusControl([
        splitPanelPreferences,
        splitPanelOpen,
    ]);
    const onSplitPanelPreferencesSet = useCallback((detail) => {
        setSplitPanelPreferences(detail);
        setSplitPanelLastInteraction({ type: 'position' });
        fireNonCancelableEvent(onSplitPanelPreferencesChange, detail);
    }, [setSplitPanelPreferences, onSplitPanelPreferencesChange, setSplitPanelLastInteraction]);
    const onSplitPanelSizeSet = useCallback((detail) => {
        setSplitPanelSize(detail.size);
        fireNonCancelableEvent(onSplitPanelResize, detail);
    }, [setSplitPanelSize, onSplitPanelResize]);
    const onSplitPanelToggleHandler = useCallback(() => {
        setSplitPanelOpen(!splitPanelOpen);
        setSplitPanelLastInteraction({ type: splitPanelOpen ? 'close' : 'open' });
        fireNonCancelableEvent(onSplitPanelToggle, { open: !splitPanelOpen });
    }, [setSplitPanelOpen, splitPanelOpen, onSplitPanelToggle, setSplitPanelLastInteraction]);
    const getSplitPanelMaxWidth = useStableEventHandler(() => {
        if (!mainContentRef.current || !defaults.minContentWidth) {
            return NaN;
        }
        const width = parseInt(getComputedStyle(mainContentRef.current).width);
        // when disableContentPaddings is true there is less available space,
        // so we subtract space-scaled-2x-xxxl * 2 for left and right padding
        const contentPadding = disableContentPaddings ? 80 : 0;
        const spaceAvailable = width - defaults.minContentWidth - contentPadding;
        const spaceTaken = finalSplitPanePosition === 'side' ? splitPanelSize : 0;
        return Math.max(0, spaceTaken + spaceAvailable);
    });
    const getDrawerMaxWidth = useStableEventHandler(() => {
        if (!mainContentRef.current || !defaults.minContentWidth) {
            return NaN;
        }
        // Either use the computed width of the drawer or the drawerSize as defined.
        const width = parseInt(getComputedStyle(mainContentRef.current).width || `${drawerSize}`);
        // when disableContentPaddings is true there is less available space,
        // so we subtract space-scaled-2x-xxxl * 2 for left and right padding
        const contentPadding = disableContentPaddings ? 80 : 0;
        const spaceAvailable = width - defaults.minContentWidth - contentPadding;
        const spaceTaken = drawerSize;
        return Math.max(0, spaceTaken + spaceAvailable);
    });
    const getSplitPanelMaxHeight = useStableEventHandler(() => {
        if (typeof document === 'undefined') {
            return 0; // render the split panel in its minimum possible size
        }
        else if (disableBodyScroll && legacyScrollRootRef.current) {
            const availableHeight = legacyScrollRootRef.current.clientHeight;
            return availableHeight < CONSTRAINED_PAGE_HEIGHT ? availableHeight : availableHeight - MAIN_PANEL_MIN_HEIGHT;
        }
        else {
            const availableHeight = document.documentElement.clientHeight - headerHeight - footerHeight;
            return availableHeight < CONSTRAINED_PAGE_HEIGHT
                ? availableHeight - CONSTRAINED_MAIN_PANEL_MIN_HEIGHT
                : availableHeight - MAIN_PANEL_MIN_HEIGHT;
        }
    });
    const finalSplitPanePosition = isSplitpanelForcedPosition ? 'bottom' : splitPanelPosition;
    const splitPaneAvailableOnTheSide = splitPanelDisplayed && finalSplitPanePosition === 'side';
    const splitPanelOpenOnTheSide = splitPaneAvailableOnTheSide && splitPanelOpen;
    const toggleButtonsBarWidth = 0;
    const windowWidth = useWindowWidth();
    const { left: leftOffset, right: rightOffset } = useAppLayoutOffsets(rootRef.current);
    const contentWidthWithSplitPanel = windowWidth -
        leftOffset -
        rightOffset -
        effectiveToolsWidth -
        effectiveNavigationWidth -
        (disableContentPaddings ? 0 : toggleButtonsBarWidth);
    useEffect(() => {
        const contentWidth = contentWidthWithSplitPanel - splitPanelSize;
        setIsSplitpanelForcedPosition(isMobile || (defaults.minContentWidth || 0) > contentWidth);
        setIsResizeInvalid(isMobile || (defaults.minContentWidth || 0) > contentWidthWithSplitPanel);
        // This is a workaround to avoid a forced position due to splitPanelSize, which is
        // user controlled variable.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [contentWidthWithSplitPanel, drawerSize, defaults.minContentWidth, isMobile]);
    const navigationClosedWidth = navigationHide || isMobile ? 0 : closedDrawerWidth;
    const toolsClosedWidth = toolsHide || isMobile || (!hasDrawers && toolsHide) ? 0 : closedDrawerWidth;
    const contentMaxWidthStyle = !isMobile ? { maxWidth: defaults.maxContentWidth } : undefined;
    const [splitPanelReportedSize, setSplitPanelReportedSize] = useState(0);
    const [splitPanelReportedHeaderHeight, setSplitPanelReportedHeaderHeight] = useState(0);
    const getSplitPanelRightOffset = () => {
        if (isMobile) {
            return 0;
        }
        if (hasDrawers) {
            if (activeDrawerId) {
                if (!isResizeInvalid && drawerSize) {
                    return drawerSize + closedDrawerWidth;
                }
                return toolsWidth + closedDrawerWidth;
            }
            return closedDrawerWidth;
        }
        if (!toolsHide && toolsOpen) {
            return toolsWidth;
        }
        return toolsClosedWidth;
    };
    const splitPanelContext = {
        topOffset: headerHeight + (finalSplitPanePosition === 'bottom' ? stickyNotificationsHeight || 0 : 0),
        bottomOffset: footerHeight,
        leftOffset: leftOffset + (isMobile ? 0 : !navigationHide && navigationOpen ? navigationWidth : navigationClosedWidth),
        rightOffset: rightOffset + getSplitPanelRightOffset(),
        position: finalSplitPanePosition,
        size: splitPanelSize,
        getMaxWidth: getSplitPanelMaxWidth,
        getMaxHeight: getSplitPanelMaxHeight,
        disableContentPaddings,
        contentWidthStyles: contentMaxWidthStyle,
        isOpen: splitPanelOpen,
        isMobile,
        isForcedPosition: isSplitpanelForcedPosition,
        onResize: onSplitPanelSizeSet,
        onToggle: onSplitPanelToggleHandler,
        onPreferencesChange: onSplitPanelPreferencesSet,
        setSplitPanelToggle: setSplitPanelReportedToggle,
        reportSize: setSplitPanelReportedSize,
        reportHeaderHeight: setSplitPanelReportedHeaderHeight,
        refs: splitPanelRefs,
    };
    const splitPanelWrapped = splitPanel && (React.createElement(SplitPanelContextProvider, { value: splitPanelContext }, splitPanel));
    const contentWrapperProps = {
        contentType,
        navigationPadding: navigationHide || !!navigationOpen,
        contentWidthStyles: !isMobile
            ? { minWidth: defaults.minContentWidth, maxWidth: defaults.maxContentWidth }
            : undefined,
        toolsPadding: 
        // tools padding is displayed in one of the three cases
        // 1. Nothing on the that screen edge (no tools panel and no split panel)
        toolsHide ||
            (hasDrawers && !activeDrawerId && (!splitPanelDisplayed || finalSplitPanePosition !== 'side')) ||
            // 2. Tools panel is present and open
            toolsVisible ||
            // 3. Split panel is open in side position
            splitPanelOpenOnTheSide,
        isMobile,
    };
    useImperativeHandle(ref, () => ({
        openTools: () => onToolsToggle(true),
        closeNavigationIfNecessary: () => {
            if (isMobile) {
                onNavigationToggle(false);
            }
        },
        focusToolsClose: () => focusToolsButtons(true),
    }), [isMobile, onNavigationToggle, onToolsToggle, focusToolsButtons]);
    const splitPanelBottomOffset = (_c = (!splitPanelDisplayed || finalSplitPanePosition !== 'bottom'
        ? undefined
        : splitPanelOpen
            ? splitPanelReportedSize
            : splitPanelReportedHeaderHeight)) !== null && _c !== void 0 ? _c : undefined;
    const [mobileBarHeight, mobileBarRef] = useContainerQuery(rect => rect.height);
    return (React.createElement("div", { className: clsx(styles.root, testutilStyles.root, disableBodyScroll && styles['root-no-scroll']), ref: rootRef },
        React.createElement("div", { className: styles['layout-wrapper'], style: contentHeightStyle },
            isMobile && (!toolsHide || !navigationHide || breadcrumbs) && (React.createElement(MobileToolbar, { anyPanelOpen: anyPanelOpen, toggleRefs: { navigation: navigationRefs.toggle, tools: toolsRefs.toggle }, topOffset: headerHeight, ariaLabels: ariaLabels, navigationHide: navigationHide, toolsHide: toolsHide, onNavigationOpen: () => onNavigationToggle(true), onToolsOpen: () => onToolsToggle(true), unfocusable: anyPanelOpen, mobileBarRef: mobileBarRef, drawers: drawers
                    ? {
                        items: tools && !toolsHide ? [toolsItem, ...drawers.items] : drawers.items,
                        activeDrawerId: selectedDrawer === null || selectedDrawer === void 0 ? void 0 : selectedDrawer.id,
                        onChange: changeDetail => {
                            if ((selectedDrawer === null || selectedDrawer === void 0 ? void 0 : selectedDrawer.id) !== changeDetail.activeDrawerId) {
                                onToolsToggle(changeDetail.activeDrawerId === 'tools');
                                focusDrawersButtons();
                                setActiveDrawerId(changeDetail.activeDrawerId);
                                setDrawerLastInteraction({ type: 'open' });
                                fireNonCancelableEvent(drawers.onChange, changeDetail.activeDrawerId);
                            }
                        },
                        ariaLabel: drawers.ariaLabel,
                    }
                    : undefined }, breadcrumbs)),
            React.createElement("div", { className: clsx(styles.layout, disableBodyScroll && styles['layout-no-scroll']) },
                !navigationHide && (React.createElement(Drawer, { contentClassName: testutilStyles.navigation, toggleClassName: testutilStyles['navigation-toggle'], closeClassName: testutilStyles['navigation-close'], ariaLabels: ariaLabels, bottomOffset: footerHeight, topOffset: headerHeight, isMobile: isMobile, isOpen: navigationOpen, onClick: isMobile ? onNavigationClick : undefined, onToggle: onNavigationToggle, toggleRefs: navigationRefs, type: "navigation", width: navigationWidth }, navigation)),
                React.createElement("main", { ref: legacyScrollRootRef, className: clsx(styles['layout-main'], {
                        [styles['layout-main-scrollable']]: disableBodyScroll,
                        [testutilStyles['disable-body-scroll-root']]: disableBodyScroll,
                        [styles.unfocusable]: isMobile && anyPanelOpen,
                    }) },
                    React.createElement("div", { style: {
                            marginBottom: splitPanelBottomOffset,
                        } },
                        notifications && (React.createElement(Notifications, { disableContentPaddings: disableContentPaddings, testUtilsClassName: testutilStyles.notifications, labels: ariaLabels, topOffset: disableBodyScroll ? 0 : headerHeight, sticky: !isMobile && stickyNotifications, ref: notificationsRef }, notifications)),
                        ((!isMobile && breadcrumbs) || contentHeader) && (React.createElement(ContentWrapper, Object.assign({}, contentWrapperProps),
                            !isMobile && breadcrumbs && (React.createElement("div", { className: clsx(testutilStyles.breadcrumbs, styles['breadcrumbs-desktop']) }, breadcrumbs)),
                            contentHeader && (React.createElement("div", { className: clsx(styles['content-header-wrapper'], !hasRenderedNotifications &&
                                    (isMobile || !breadcrumbs) &&
                                    styles['content-extra-top-padding'], !hasRenderedNotifications && !breadcrumbs && styles['content-header-wrapper-first-child'], !disableContentHeaderOverlap && styles['content-header-wrapper-overlapped']) }, contentHeader)))),
                        React.createElement(ContentWrapper, Object.assign({}, contentWrapperProps, { ref: mainContentRef, disablePaddings: disableContentPaddings, 
                            // eslint-disable-next-line react/forbid-component-props
                            className: clsx(!disableContentPaddings && styles['content-wrapper'], !disableContentPaddings &&
                                (isMobile || !breadcrumbs) &&
                                !contentHeader &&
                                styles['content-extra-top-padding'], testutilStyles.content, !disableContentHeaderOverlap && contentHeader && styles['content-overlapped'], !hasRenderedNotifications &&
                                !breadcrumbs &&
                                !isMobile &&
                                !contentHeader &&
                                styles['content-wrapper-first-child']) }),
                            React.createElement(AppLayoutContext.Provider, { value: {
                                    stickyOffsetTop: 
                                    // We don't support the table header being sticky in case the deprecated disableBodyScroll is enabled,
                                    // therefore we ensure the table header scrolls out of view by offseting a large enough value (9999px)
                                    (disableBodyScroll ? (isMobile ? -9999 : 0) : headerHeight) +
                                        (isMobile ? 0 : stickyNotificationsHeight !== null ? stickyNotificationsHeight : 0),
                                    stickyOffsetBottom: footerHeight + (splitPanelBottomOffset || 0),
                                    mobileBarHeight: mobileBarHeight !== null && mobileBarHeight !== void 0 ? mobileBarHeight : 0,
                                } }, content))),
                    finalSplitPanePosition === 'bottom' && splitPanelWrapped),
                finalSplitPanePosition === 'side' && (React.createElement(SideSplitPanelDrawer, { topOffset: headerHeight, bottomOffset: footerHeight, displayed: splitPanelDisplayed, width: splitPanelOpen && splitPanel ? splitPanelSize : undefined }, splitPanelWrapped)),
                ((hasDrawers && (selectedDrawer === null || selectedDrawer === void 0 ? void 0 : selectedDrawer.id)) || (!hasDrawers && !toolsHide)) &&
                    (hasDrawers ? (React.createElement(ResizableDrawer, { contentClassName: (selectedDrawer === null || selectedDrawer === void 0 ? void 0 : selectedDrawer.id) === 'tools' ? testutilStyles.tools : testutilStyles['active-drawer'], toggleClassName: testutilStyles['tools-toggle'], closeClassName: (selectedDrawer === null || selectedDrawer === void 0 ? void 0 : selectedDrawer.id) === 'tools'
                            ? testutilStyles['tools-close']
                            : testutilStyles['active-drawer-close-button'], ariaLabels: ariaLabels, drawersAriaLabels: selectedDrawer === null || selectedDrawer === void 0 ? void 0 : selectedDrawer.ariaLabels, width: !isResizeInvalid ? drawerSize : toolsWidth, bottomOffset: footerHeight, topOffset: headerHeight, isMobile: isMobile, onToggle: onToolsToggle, isOpen: toolsOpen || activeDrawerId !== undefined, toggleRefs: toolsRefs, type: "tools", onLoseFocus: hasDrawers ? loseDrawersFocus : loseToolsFocus, activeDrawer: selectedDrawer, drawers: {
                            items: tools && !toolsHide ? [toolsItem, ...drawers.items] : drawers.items,
                            activeDrawerId: selectedDrawer === null || selectedDrawer === void 0 ? void 0 : selectedDrawer.id,
                            onChange: changeDetail => {
                                onToolsToggle(false);
                                setDrawerLastInteraction({ type: 'close' });
                                setActiveDrawerId(changeDetail.activeDrawerId);
                                fireNonCancelableEvent(drawers.onChange, changeDetail.activeDrawerId);
                            },
                        }, size: !isResizeInvalid ? drawerSize : toolsWidth, onResize: changeDetail => {
                            fireNonCancelableEvent(drawers.onResize, changeDetail);
                            const drawerItem = drawerItems.find(({ id }) => id === changeDetail.id);
                            if (drawerItem === null || drawerItem === void 0 ? void 0 : drawerItem.onResize) {
                                fireNonCancelableEvent(drawerItem.onResize, changeDetail);
                            }
                            setDrawerSizes(Object.assign(Object.assign({}, drawerSizes), { [changeDetail.id]: changeDetail.size }));
                        }, refs: drawerRefs, getMaxWidth: getDrawerMaxWidth }, selectedDrawer === null || selectedDrawer === void 0 ? void 0 : selectedDrawer.content)) : (React.createElement(Drawer, { contentClassName: testutilStyles.tools, toggleClassName: testutilStyles['tools-toggle'], closeClassName: testutilStyles['tools-close'], ariaLabels: ariaLabels, width: effectiveToolsWidth, bottomOffset: footerHeight, topOffset: headerHeight, isMobile: isMobile, onToggle: onToolsToggle, isOpen: toolsOpen, toggleRefs: toolsRefs, type: "tools", onLoseFocus: loseToolsFocus }, tools))),
                hasDrawers && (React.createElement(DrawerTriggersBar, { contentClassName: testutilStyles['drawers-desktop-triggers-container'], toggleClassName: testutilStyles['drawers-trigger'], bottomOffset: footerHeight, topOffset: headerHeight, isMobile: isMobile, drawers: {
                        items: tools && !toolsHide ? [toolsItem, ...drawers.items] : drawers.items,
                        activeDrawerId: selectedDrawer === null || selectedDrawer === void 0 ? void 0 : selectedDrawer.id,
                        onChange: changeDetail => {
                            if ((selectedDrawer === null || selectedDrawer === void 0 ? void 0 : selectedDrawer.id) !== changeDetail.activeDrawerId) {
                                onToolsToggle(changeDetail.activeDrawerId === 'tools');
                                focusDrawersButtons();
                                setActiveDrawerId(changeDetail.activeDrawerId);
                                setDrawerLastInteraction({ type: 'open' });
                                fireNonCancelableEvent(drawers.onChange, changeDetail.activeDrawerId);
                            }
                        },
                        ariaLabel: drawers.ariaLabel,
                    } }))))));
});
applyDisplayName(AppLayout, 'AppLayout');
export default AppLayout;
//# sourceMappingURL=index.js.map