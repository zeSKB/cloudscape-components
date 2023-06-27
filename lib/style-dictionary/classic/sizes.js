"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mode = exports.tokens = void 0;
const sizes_1 = require("../visual-refresh/sizes");
const merge_1 = __importDefault(require("lodash/merge"));
const utils_1 = require("../utils");
const tokens = {
    sizeCalendarGridWidth: '234px',
    sizeControl: '14px',
    sizeIconMedium: '16px',
    sizeTableSelectionHorizontal: '54px',
    sizeVerticalInput: { comfortable: '32px', compact: '28px' },
};
const expandedTokens = (0, merge_1.default)({}, sizes_1.tokens, (0, utils_1.expandDensityDictionary)(tokens));
exports.tokens = expandedTokens;
exports.mode = 'density';
//# sourceMappingURL=sizes.js.map