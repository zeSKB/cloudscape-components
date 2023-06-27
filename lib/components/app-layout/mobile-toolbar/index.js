// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React, { useEffect } from 'react';
import { AppLayoutButton, togglesConfig } from '../toggles';
import styles from './styles.css.js';
import sharedStyles from '../styles.css.js';
import testutilStyles from '../test-classes/styles.css.js';
const MobileToggle = React.forwardRef(({ className, ariaLabels, type, disabled, onClick }, ref) => {
    const { TagName, iconName, getLabels } = togglesConfig[type];
    const { mainLabel, openLabel } = getLabels(ariaLabels);
    return (React.createElement(TagName, { className: clsx(styles['mobile-toggle']), "aria-hidden": disabled, "aria-label": mainLabel, onClick: e => e.target === e.currentTarget && onClick() },
        React.createElement(AppLayoutButton, { ref: ref, className: className, iconName: iconName, onClick: onClick, ariaLabel: openLabel, disabled: disabled, ariaExpanded: disabled })));
});
export function MobileToolbar({ ariaLabels = {}, toggleRefs, topOffset, navigationHide, toolsHide, anyPanelOpen = false, unfocusable, children, onNavigationOpen, onToolsOpen, drawers, mobileBarRef, }) {
    useEffect(() => {
        if (anyPanelOpen) {
            document.body.classList.add(styles['block-body-scroll']);
            return () => {
                document.body.classList.remove(styles['block-body-scroll']);
            };
        }
        else {
            document.body.classList.remove(styles['block-body-scroll']);
        }
    }, [anyPanelOpen]);
    return (React.createElement("div", { ref: mobileBarRef, className: clsx(styles['mobile-bar'], unfocusable && sharedStyles.unfocusable), style: { top: topOffset } },
        !navigationHide && (React.createElement(MobileToggle, { ref: toggleRefs.navigation, type: "navigation", className: testutilStyles['navigation-toggle'], ariaLabels: ariaLabels, disabled: anyPanelOpen, onClick: onNavigationOpen })),
        React.createElement("div", { className: styles['mobile-bar-breadcrumbs'] }, children && React.createElement("div", { className: testutilStyles.breadcrumbs }, children)),
        !toolsHide && !drawers && (React.createElement(MobileToggle, { ref: toggleRefs.tools, type: "tools", className: testutilStyles['tools-toggle'], ariaLabels: ariaLabels, disabled: anyPanelOpen, onClick: onToolsOpen })),
        drawers && (React.createElement("aside", { "aria-label": drawers.ariaLabel, className: clsx(styles['mobile-toggle'], styles['mobile-toggle-with-drawers'], testutilStyles['drawers-mobile-triggers-container']) }, drawers.items.map((item, index) => {
            var _a;
            return (React.createElement(AppLayoutButton, { className: clsx(styles['mobile-trigger-with-drawers'], testutilStyles['drawers-trigger']), key: `drawer-trigger-${index}`, iconName: item.trigger.iconName, iconSvg: item.trigger.iconSvg, ariaLabel: (_a = item.ariaLabels) === null || _a === void 0 ? void 0 : _a.triggerButton, onClick: () => drawers.onChange({ activeDrawerId: item.id }), ariaExpanded: drawers.activeDrawerId !== undefined }));
        })))));
}
//# sourceMappingURL=index.js.map