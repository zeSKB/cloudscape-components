"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokens = exports.mode = void 0;
const colors_1 = require("../colors");
const shadows_1 = require("../shadows");
const merge_1 = __importDefault(require("lodash/merge"));
const utils_1 = require("../../utils");
const background = '{colorGrey900}';
const colorTokens = {
    colorBackgroundLayoutMain: background,
    colorBackgroundButtonNormalDefault: background,
    colorBackgroundButtonNormalDisabled: background,
    colorBackgroundControlDefault: background,
    colorBackgroundInputDefault: background,
    colorBackgroundSegmentDefault: background,
    colorBackgroundSegmentDisabled: background,
    colorBackgroundTableHeader: background,
};
const shadowsTokens = {
    shadowContainer: 'none',
    shadowFlashSticky: shadows_1.tokens.shadowFlashSticky,
    shadowPanel: shadows_1.tokens.shadowPanel,
    shadowPanelToggle: shadows_1.tokens.shadowPanelToggle,
};
const darkModeColorValues = (0, utils_1.pickState)(colors_1.tokens, 'dark');
const darkModeShadowsValues = (0, utils_1.pickState)(shadows_1.tokens, 'dark');
const expandedTokens = (0, utils_1.expandColorDictionary)((0, merge_1.default)({}, darkModeShadowsValues, darkModeColorValues, shadowsTokens, colorTokens));
exports.tokens = expandedTokens;
exports.mode = 'color';
//# sourceMappingURL=header.js.map