"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokens = exports.mode = void 0;
const colors_1 = require("../colors");
const merge_1 = __importDefault(require("lodash/merge"));
const utils_1 = require("../../utils");
const tokens = {
    colorBackgroundContainerContent: '{colorGrey800}',
    colorBackgroundDropdownItemDefault: '{colorGrey800}',
};
const darkModeValues = (0, utils_1.pickState)(colors_1.tokens, 'dark');
const expandedTokens = (0, utils_1.expandColorDictionary)((0, merge_1.default)({}, darkModeValues, tokens));
exports.tokens = expandedTokens;
exports.mode = 'color';
//# sourceMappingURL=top-navigation.js.map