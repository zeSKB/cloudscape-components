"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokens = void 0;
const colors_1 = require("../colors");
const merge_1 = __importDefault(require("lodash/merge"));
const utils_1 = require("../../utils");
const tokens = {
    colorTextButtonNormalDefault: '{colorGrey100}',
    colorBorderButtonNormalDefault: '{colorGrey100}',
    colorBackgroundButtonNormalDefault: 'transparent',
    colorTextButtonNormalHover: '{colorWhite}',
    colorBorderButtonNormalHover: '{colorWhite}',
    colorBackgroundButtonNormalHover: 'rgba(0, 7, 22, 0.15)',
    colorTextButtonNormalActive: '{colorWhite}',
    colorBorderButtonNormalActive: '{colorWhite}',
    colorBackgroundButtonNormalActive: 'rgba(0, 7, 22, 0.2)',
    colorBorderItemFocused: '{colorGrey100}',
};
const expandedTokens = (0, utils_1.expandColorDictionary)((0, merge_1.default)({}, colors_1.tokens, tokens));
exports.tokens = expandedTokens;
//# sourceMappingURL=flashbar.js.map