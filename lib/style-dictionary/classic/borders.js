"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokens = void 0;
const borders_1 = require("../visual-refresh/borders");
const merge_1 = __importDefault(require("lodash/merge"));
const tokens = {
    borderActiveWidth: '2px',
    borderCodeEditorStatusDividerWidth: '0px',
    borderContainerStickyWidth: '1px',
    borderContainerTopWidth: '1px',
    borderControlFocusRingShadowSpread: '1px',
    borderControlInvalidFocusRingShadowSpread: '{borderControlFocusRingShadowSpread}',
    borderDividerSectionWidth: '1px',
    borderDropdownVirtualOffsetWidth: '0px',
    borderFieldWidth: '1px',
    borderInvalidWidth: '4px',
    borderItemWidth: '1px',
    borderLineChartLineJoin: 'miter',
    borderPanelHeaderWidth: '0px',
    borderPanelTopWidth: '0px',
    borderRadiusAlert: '{borderRadiusInput}',
    borderRadiusBadge: '16px',
    borderRadiusButton: '2px',
    borderRadiusCalendarDayFocusRing: '2px',
    borderRadiusCodeEditor: '{borderRadiusItem}',
    borderRadiusContainer: '0px',
    borderRadiusControlCircularFocusRing: '50%',
    borderRadiusControlDefaultFocusRing: '{borderRadiusInput}',
    borderRadiusDropzone: '0px',
    borderRadiusFlashbar: '0px',
    borderRadiusItem: '0px',
    borderRadiusInput: '2px',
    borderRadiusTabsFocusRing: '0px',
    borderTableStickyWidth: '0px',
    borderLinkFocusRingOutline: '5px auto Highlight',
    borderLinkFocusRingShadowSpread: '0px',
};
const expandedTokens = (0, merge_1.default)({}, borders_1.tokens, tokens);
exports.tokens = expandedTokens;
//# sourceMappingURL=borders.js.map