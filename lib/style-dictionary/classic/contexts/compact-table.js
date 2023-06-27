"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokens = void 0;
const spacing_1 = require("../spacing");
const merge_1 = __importDefault(require("lodash/merge"));
const utils_1 = require("../../utils");
const spacingTokens = {
    spaceScaledXxxs: '{spaceNone}',
    spaceScaledXxs: '{spaceXxxs}',
    spaceScaledXs: '{spaceXxs}',
    spaceScaledS: '{spaceXs}',
    spaceScaledM: '{spaceS}',
    spaceScaledL: '{spaceM}',
    spaceScaledXl: '{spaceL}',
    spaceScaledXxl: '{spaceXl}',
    spaceScaledXxxl: '{spaceXxl}',
};
const sizeTokens = {
    sizeVerticalInput: '28px',
};
const expandedTokens = (0, utils_1.expandDensityDictionary)((0, merge_1.default)({}, spacing_1.tokens, { ...spacingTokens, ...sizeTokens }));
exports.tokens = expandedTokens;
//# sourceMappingURL=compact-table.js.map