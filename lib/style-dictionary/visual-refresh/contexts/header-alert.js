"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const alert_1 = __importDefault(require("./alert"));
const merge_1 = __importDefault(require("lodash/merge"));
const utils_1 = require("../../utils");
const darkModeColorValues = (0, utils_1.pickState)(alert_1.default, 'dark');
const expandedTokens = (0, utils_1.expandColorDictionary)((0, merge_1.default)({}, alert_1.default, darkModeColorValues));
exports.default = expandedTokens;
//# sourceMappingURL=header-alert.js.map