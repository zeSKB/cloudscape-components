"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = require("../colors");
const merge_1 = __importDefault(require("lodash/merge"));
const utils_1 = require("../../utils");
const tokens = {
    colorTextButtonNormalDefault: {
        light: '{colorGrey600}',
        dark: '{colorGrey300}',
    },
    colorBorderButtonNormalDefault: '{colorTextButtonNormalDefault}',
    colorBackgroundButtonNormalDefault: 'transparent',
    colorTextButtonNormalHover: {
        light: '{colorGrey900}',
        dark: '{colorWhite}',
    },
    colorBorderButtonNormalHover: '{colorTextButtonNormalHover}',
    colorBackgroundButtonNormalHover: {
        light: 'rgba(0, 7, 22, 0.05)',
        dark: 'rgba(255, 255, 255, 0.1)',
    },
    colorTextButtonNormalActive: '{colorTextButtonNormalHover}',
    colorBorderButtonNormalActive: '{colorTextButtonNormalHover}',
    colorBackgroundButtonNormalActive: {
        light: 'rgba(0, 7, 22, 0.1)',
        dark: 'rgba(255, 255, 255, 0.15)',
    },
    colorBorderItemFocused: {
        dark: '{colorGrey100}',
    },
    colorTextLinkButtonNormalDefault: '{colorTextLinkDefault}',
    colorTextLinkButtonNormalHover: '{colorTextLinkHover}',
};
const expandedTokens = (0, utils_1.expandColorDictionary)((0, merge_1.default)({}, colors_1.tokens, tokens));
exports.default = expandedTokens;
//# sourceMappingURL=alert.js.map