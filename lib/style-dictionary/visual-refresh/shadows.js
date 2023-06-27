"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mode = exports.tokens = void 0;
const utils_1 = require("../utils");
const tokens = {
    shadowContainer: {
        light: '0px 0px 1px 1px #e9ebed, 0px 1px 8px 2px rgba(0, 7, 22, 0.12)',
        dark: '0px 1px 8px 2px rgba(0, 7, 22, 0.6)',
    },
    shadowContainerStacked: {
        light: '-1px 1px 1px 0px #e9ebed, 1px 1px 1px 0px #e9ebed, 0px 9px 8px -7px rgb(0 7 22 / 12%), 8px 0px 8px -7px rgb(0 7 22 / 12%), -8px 0px 8px -7px rgb(0 7 22 / 12%)',
        dark: '0px 9px 8px -7px rgb(0 7 22 / 60%), 8px 0px 8px -7px rgb(0 7 22 / 60%), -8px 0px 8px -7px rgb(0 7 22 / 60%)',
    },
    shadowContainerActive: {
        light: '0px 1px 1px 1px #e9ebed, 0px 6px 36px #0007161a',
        dark: '0px 1px 1px 1px #192534, 0px 6px 36px #000716',
    },
    shadowDropdown: { light: '0px 4px 20px 1px rgba(0, 7, 22, 0.10)', dark: '0px 4px 20px 1px rgba(0, 7, 22, 1)' },
    shadowDropup: '{shadowDropdown}',
    shadowFlashCollapsed: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    shadowFlashSticky: {
        light: '0px 6px 36px rgba(0, 7, 22, 0.10)',
        dark: '0px 6px 36px rgba(0, 7, 22, 1)',
    },
    shadowModal: '{shadowDropdown}',
    shadowPanel: {
        light: '0px 1px 1px 1px #e9ebed, 0px 6px 36px rgba(0, 7, 22, 0.10)',
        dark: '0px 1px 1px 1px #192534, 0px 6px 36px rgba(0, 7, 22, 1)', // 1px grey-750 faux border
    },
    shadowPanelToggle: { light: '0px 6px 12px 1px rgba(0, 7, 22, 0.12)', dark: '0px 6px 12px 1px rgba(0, 7, 22, 1)' },
    shadowPopover: '{shadowDropdown}',
    shadowSplitBottom: {
        light: '0px -36px 36px -36px rgba(0, 7, 22, 0.10)',
        dark: '0px -36px 36px -36px rgba(0, 7, 22, 1)',
    },
    shadowSplitSide: {
        light: '-1px 0px 1px 0px #e9ebed, -36px 6px 36px -36px rgba(0, 7, 22, 0.10)',
        dark: '-1px 0px 1px 0px #192534, -36px 6px 36px -36px rgba(0, 7, 22, 1)',
    },
    shadowSticky: '{shadowDropdown}',
    shadowStickyEmbedded: {
        light: '0px 2px 0px 0px #e9ebed, 0px 16px 16px -12px rgba(0, 7, 22, 0.10)',
        dark: '0px 2px 0px 0px #414d5c, 0px 16px 16px -12px rgba(0, 7, 22, 1)', // 2px grey-600 faux bottom border
    },
    shadowStickyColumnFirst: {
        light: '4px 0px 20px 1px rgba(0, 7, 22, 0.1)',
        dark: '0px 4px 20px 1px rgba(0, 7, 22, 1)',
    },
    shadowStickyColumnLast: {
        light: '-4px 0 20px 1px rgba(0, 28, 36, 0.1)',
        dark: '0px 4px 20px 1px rgba(0, 7, 22, 1)',
    },
};
const expandedTokens = (0, utils_1.expandColorDictionary)(tokens);
exports.tokens = expandedTokens;
exports.mode = 'color';
//# sourceMappingURL=shadows.js.map