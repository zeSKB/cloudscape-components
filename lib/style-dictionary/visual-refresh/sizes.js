"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mode = exports.tokens = void 0;
const utils_1 = require("../utils");
const tokens = {
    sizeCalendarGridWidth: '238px',
    sizeControl: '16px',
    sizeIconBig: '32px',
    sizeIconLarge: '48px',
    sizeIconMedium: '20px',
    sizeIconNormal: '16px',
    sizeTableSelectionHorizontal: '40px',
    sizeVerticalInput: { comfortable: '34px', compact: '30px' },
    sizeVerticalPanelIconOffset: { comfortable: '15px', compact: '13px' },
};
const expandedTokens = (0, utils_1.expandDensityDictionary)(tokens);
exports.tokens = expandedTokens;
exports.mode = 'density';
//# sourceMappingURL=sizes.js.map