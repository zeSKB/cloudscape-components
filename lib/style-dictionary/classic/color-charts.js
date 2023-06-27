"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mode = exports.tokens = void 0;
const color_charts_1 = require("../visual-refresh/color-charts");
const merge_1 = __importDefault(require("lodash/merge"));
const utils_1 = require("../utils");
const tokens = {
    colorChartsLineGrid: { dark: '{colorGrey650}' },
    colorChartsLineTick: { dark: '{colorGrey650}' },
    colorChartsLineAxis: { dark: '{colorGrey650}' },
};
const expandedTokens = (0, merge_1.default)({}, color_charts_1.tokens, (0, utils_1.expandColorDictionary)(tokens));
exports.tokens = expandedTokens;
exports.mode = 'color';
//# sourceMappingURL=color-charts.js.map