"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const split_panel_1 = require("../split-panel");
const styles_selectors_js_1 = require("../../../app-layout/test-classes/styles.selectors.js");
class AppLayoutWrapper extends selectors_1.ComponentWrapper {
    findNavigation() {
        return this.findByClassName(styles_selectors_js_1.default.navigation);
    }
    findNavigationToggle() {
        return this.findByClassName(styles_selectors_js_1.default['navigation-toggle']);
    }
    findNavigationClose() {
        return this.findByClassName(styles_selectors_js_1.default['navigation-close']);
    }
    findContentRegion() {
        return this.findByClassName(styles_selectors_js_1.default.content);
    }
    findNotifications() {
        return this.findByClassName(styles_selectors_js_1.default.notifications);
    }
    findBreadcrumbs() {
        return this.findByClassName(styles_selectors_js_1.default.breadcrumbs);
    }
    findTools() {
        return this.findByClassName(styles_selectors_js_1.default.tools);
    }
    findToolsClose() {
        return this.findByClassName(styles_selectors_js_1.default['tools-close']);
    }
    findToolsToggle() {
        return this.findByClassName(styles_selectors_js_1.default['tools-toggle']);
    }
    findSplitPanel() {
        return this.findComponent(`.${split_panel_1.default.rootSelector}`, split_panel_1.default);
    }
    findActiveDrawer() {
        return this.findByClassName(styles_selectors_js_1.default['active-drawer']);
    }
    findActiveDrawerCloseButton() {
        return this.findByClassName(styles_selectors_js_1.default['active-drawer-close-button']);
    }
    findDrawersDesktopTriggersContainer() {
        return this.findByClassName(styles_selectors_js_1.default['drawers-desktop-triggers-container']);
    }
    findDrawersMobileTriggersContainer() {
        return this.findByClassName(styles_selectors_js_1.default['drawers-mobile-triggers-container']);
    }
    findDrawersTriggers() {
        return this.findAllByClassName(styles_selectors_js_1.default['drawers-trigger']);
    }
    findDrawersSlider() {
        return this.findByClassName(styles_selectors_js_1.default['drawers-slider']);
    }
}
exports.default = AppLayoutWrapper;
AppLayoutWrapper.rootSelector = styles_selectors_js_1.default.root;
//# sourceMappingURL=index.js.map