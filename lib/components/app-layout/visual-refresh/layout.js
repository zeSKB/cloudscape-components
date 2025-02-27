// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import customCssProps from '../../internal/generated/custom-css-properties';
import { useAppLayoutInternals } from './context';
import styles from './styles.css.js';
import testutilStyles from '../test-classes/styles.css.js';
/**
 * The layoutElement ref will be used by the resize observers to calculate the offset from
 * the top and bottom of the viewport based on the header and footer elements. This is to
 * ensure the Layout component minimum height will fill 100% of the viewport less those
 * cumulative heights.
 */
export default function Layout({ children }) {
    const { breadcrumbs, contentHeader, contentType, disableBodyScroll, disableContentHeaderOverlap, disableContentPaddings, drawersTriggerCount, dynamicOverlapHeight, footerHeight, hasNotificationsContent, hasStickyBackground, hasOpenDrawer, headerHeight, isMobile, isNavigationOpen, layoutElement, layoutWidth, mainOffsetLeft, maxContentWidth, minContentWidth, navigationHide, notificationsHeight, splitPanelPosition, stickyNotifications, splitPanelDisplayed, } = useAppLayoutInternals();
    // Determine the first content child so the gap will vertically align with the trigger buttons
    const contentFirstChild = getContentFirstChild(breadcrumbs, contentHeader, hasNotificationsContent, isMobile);
    // Content gaps on the left and right are used with the minmax function in the CSS grid column definition
    const hasContentGapLeft = isNavigationOpen || navigationHide;
    const hasContentGapRight = drawersTriggerCount <= 0 || hasOpenDrawer;
    /**
     * The disableContentHeaderOverlap property is absolute and will always disable the overlap
     * if it is set to true. If there is no contentHeader then the overlap should be disabled
     * unless there is a dynamicOverlapHeight. The dynamicOverlapHeight property is set by a
     * component in the content slot that needs to manually control the overlap height.
     */
    const isOverlapDisabled = disableContentHeaderOverlap || (!contentHeader && dynamicOverlapHeight <= 0);
    return (React.createElement("main", { className: clsx(styles.layout, styles[`content-first-child-${contentFirstChild}`], styles[`content-type-${contentType}`], styles[`split-panel-position-${splitPanelPosition !== null && splitPanelPosition !== void 0 ? splitPanelPosition : 'bottom'}`], {
            [styles['disable-body-scroll']]: disableBodyScroll,
            [testutilStyles['disable-body-scroll-root']]: disableBodyScroll,
            [styles['disable-content-paddings']]: disableContentPaddings,
            [styles['has-breadcrumbs']]: breadcrumbs && !isMobile,
            [styles['has-content-gap-left']]: hasContentGapLeft,
            [styles['has-content-gap-right']]: hasContentGapRight,
            [styles['has-header']]: contentHeader,
            [styles['has-max-content-width']]: maxContentWidth && maxContentWidth > 0,
            [styles['has-split-panel']]: splitPanelDisplayed,
            [styles['has-sticky-background']]: hasStickyBackground,
            [styles['has-sticky-notifications']]: stickyNotifications && hasNotificationsContent,
            [styles['is-overlap-disabled']]: isOverlapDisabled,
        }, testutilStyles.root), ref: layoutElement, style: Object.assign(Object.assign(Object.assign(Object.assign({ [customCssProps.headerHeight]: `${headerHeight}px`, [customCssProps.footerHeight]: `${footerHeight}px`, [customCssProps.layoutWidth]: `${layoutWidth}px`, [customCssProps.mainOffsetLeft]: `${mainOffsetLeft}px` }, (maxContentWidth && { [customCssProps.maxContentWidth]: `${maxContentWidth}px` })), (minContentWidth && { [customCssProps.minContentWidth]: `${minContentWidth}px` })), { [customCssProps.notificationsHeight]: `${notificationsHeight}px` }), (!isOverlapDisabled &&
            dynamicOverlapHeight > 0 && { [customCssProps.overlapHeight]: `${dynamicOverlapHeight}px` })) }, children));
}
/*
The Notifications, Breadcrumbs, Header, and Main are all rendered in the center
column of the grid layout. Any of these could be the first child to render in the
content area if the previous siblings do not exist. The grid gap before the first
child will be different to ensure vertical alignment with the trigger buttons.
*/
function getContentFirstChild(breadcrumbs, contentHeader, hasNotificationsContent, isMobile) {
    let contentFirstChild = 'main';
    if (hasNotificationsContent) {
        contentFirstChild = 'notifications';
    }
    else if (breadcrumbs && !isMobile) {
        contentFirstChild = 'breadcrumbs';
    }
    else if (contentHeader) {
        contentFirstChild = 'header';
    }
    return contentFirstChild;
}
//# sourceMappingURL=layout.js.map