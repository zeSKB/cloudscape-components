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
    colorBorderItemFocused: '{colorGrey100}',
};
const expandedTokens = (0, utils_1.expandColorDictionary)((0, merge_1.default)({}, colors_1.tokens, tokens));
exports.tokens = expandedTokens;
//# sourceMappingURL=flashbar.js.map