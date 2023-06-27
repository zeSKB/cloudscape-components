"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokens = void 0;
const color_palette_1 = require("../visual-refresh/color-palette");
const merge_1 = __importDefault(require("lodash/merge"));
const tokens = {
    colorBlue100: '#f1faff',
    colorBlue300: '#99cbe4',
    colorBlue400: '#44b9d6',
    colorBlue500: '#00a1c9',
    colorBlue600: '#0073bb',
    colorBlue700: '#0a4a74',
    colorBlue900: '#12293b',
    colorGreen100: '#f2f8f0',
    colorGreen500: '#6aaf35',
    colorGreen600: '#1d8102',
    colorGreen900: '#172211',
    colorGrey100: '#fafafa',
    colorGrey150: '#f2f3f3',
    colorGrey200: '#eaeded',
    colorGrey300: '#d5dbdb',
    colorGrey400: '#aab7b8',
    colorGrey450: '#95a5a6',
    colorGrey500: '#879596',
    colorGrey550: '#687078',
    colorGrey600: '#545b64',
    colorGrey650: '#414750',
    colorGrey700: '#2a2e33',
    colorGrey750: '#21252c',
    colorGrey800: '#1a2029',
    colorGrey900: '#16191f',
    colorRed100: '#fdf3f1',
    colorRed500: '#ff5d64',
    colorRed600: '#d13212',
    colorRed900: '#270a11',
};
const expandedTokens = (0, merge_1.default)({}, color_palette_1.tokens, tokens);
exports.tokens = expandedTokens;
//# sourceMappingURL=color-palette.js.map