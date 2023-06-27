"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mode = exports.tokens = void 0;
const shadows_1 = require("../visual-refresh/shadows");
const merge_1 = __importDefault(require("lodash/merge"));
const utils_1 = require("../utils");
const tokens = {
    shadowContainer: {
        light: '0 1px 1px 0 rgba(0, 28, 36, 0.3), 1px 1px 1px 0 rgba(0, 28, 36, 0.15), -1px 1px 1px 0 rgba(0, 28, 36, 0.15)',
        dark: '0 1px 1px 0 rgba(0, 0, 0, 0.3), 1px 1px 1px 0 rgba(0, 0, 0, 0.3), -1px 1px 1px 0 rgba(0, 0, 0, 0.3)',
    },
    shadowContainerStacked: '{shadowContainer}',
    shadowContainerActive: {
        light: '0px 4px 8px rgba(0, 28, 36, 0.45)',
        dark: '0px 4px 8px rgba(0, 28, 36, 0.45)',
    },
    shadowDropdown: '{shadowContainer}',
    shadowDropup: {
        light: '0 -1px 1px 0 rgba(0, 28, 36, 0.3), 1px -1px 1px 0 rgba(0, 28, 36, 0.15), -1px -1px 1px 0 rgba(0, 28, 36, 0.15)',
        dark: '0 -1px 1px 0 rgba(0, 0, 0, 0.3), 1px -1px 1px 0 rgba(0, 0, 0, 0.3), -1px -1px 1px 0 rgba(0, 0, 0, 0.3)',
    },
    shadowFlashCollapsed: '0px 2px 2px rgba(0, 0, 0, 0.15)',
    shadowFlashSticky: '{shadowPanel}',
    shadowModal: '{shadowContainer}',
    shadowPanel: '{shadowContainer}',
    shadowPanelToggle: '{shadowPanel}',
    shadowPopover: '{shadowSticky}',
    shadowSplitBottom: {
        light: '0 -2px 1px -1px rgba(0, 28, 36, 0.15), 0 -1px 1px -1px rgba(0, 28, 36, 0.3)',
        dark: '0 -2px 1px -1px rgba(0, 0, 0, 0.3), 0 -1px 1px -1px rgba(0, 0, 0, 0.3)',
    },
    shadowSplitSide: '{shadowContainer}',
    shadowSticky: { light: '0px 1px 4px -2px rgba(0, 28, 36, 0.5)', dark: '0px 1px 4px -2px rgba(0, 0, 0, 0.5)' },
    shadowStickyEmbedded: '{shadowSticky}',
    shadowStickyColumnFirst: {
        light: '4px 0 8px 0 rgba(0, 28, 36, 0.1)',
        dark: '4px 0 8px 0 rgba(0, 0, 0, 0.5)',
    },
    shadowStickyColumnLast: {
        light: '-4px 0 8px 0 rgba(0, 28, 36, 0.1)',
        dark: '-4px 0 8px 0 rgba(0, 0, 0, 0.5)',
    },
};
const expandedTokens = (0, merge_1.default)({}, shadows_1.tokens, (0, utils_1.expandColorDictionary)(tokens));
exports.tokens = expandedTokens;
exports.mode = 'color';
//# sourceMappingURL=shadows.js.map