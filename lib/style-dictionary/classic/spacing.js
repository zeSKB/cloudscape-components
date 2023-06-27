"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mode = exports.tokens = void 0;
const spacing_1 = require("../visual-refresh/spacing");
const merge_1 = __importDefault(require("lodash/merge"));
const utils_1 = require("../utils");
const tokens = {
    spaceAlertActionLeft: '{spaceL}',
    spaceAlertHorizontal: '{spaceL}',
    spaceAlertMessageRight: '0px',
    spaceAlertVertical: '{spaceScaledS}',
    spaceButtonFocusOutlineGutter: '3px',
    spaceButtonIconFocusOutlineGutterVertical: '{spaceButtonFocusOutlineGutter}',
    spaceButtonIconOnlyHorizontal: '{spaceM}',
    spaceButtonInlineIconFocusOutlineGutter: '{spaceButtonFocusOutlineGutter}',
    spaceButtonModalDismissVertical: '{spaceScaledXxs}',
    spaceCalendarGridFocusOutlineGutter: '0px',
    spaceCalendarGridSelectedFocusOutlineGutter: '2px',
    spaceCodeEditorStatusFocusOutlineGutter: '3px',
    spaceContainerContentTop: '{spaceScaledM}',
    spaceContainerHeaderVertical: '{spaceScaledS}',
    spaceContainerHorizontal: '{spaceL}',
    spaceContentHeaderPaddingBottom: '{spaceScaledM}',
    spaceDarkHeaderOverlapDistance: '0px',
    spaceExpandableSectionIconOffsetTop: '{spaceScaledXs}',
    spaceFieldHorizontal: '{spaceXs}',
    spaceFieldIconOffset: '32px',
    spaceFilteringTokenDismissButtonFocusOutlineGutter: '0px',
    spaceFilteringTokenOperationSelectFocusOutlineGutter: '0px',
    spaceFlashbarActionLeft: '{spaceM}',
    spaceFlashbarDismissRight: '{spaceXxs}',
    spaceFlashbarHorizontal: '{spaceS}',
    spaceLayoutContentBottom: '{spaceScaledL}',
    spaceModalContentBottom: '{spaceScaledL}',
    spacePanelNavLeft: '{spaceXxl}',
    spacePanelSideLeft: '{spaceScaledXxl}',
    spacePanelSideRight: '{spaceScaledXxl}',
    spacePanelSplitTop: '0px',
    spaceSegmentedControlFocusOutlineGutter: '0px',
    spaceTableHeaderFocusOutlineGutter: { compact: '0px' },
    spaceTabsContentTop: '{spaceScaledM}',
    spaceTableHorizontal: '0px',
    spaceTableHeaderHorizontal: '{spaceContainerHorizontal}',
    spaceTableContentBottom: '0px',
    spaceTableContentTop: '0px',
    spaceTableEmbeddedContentBottom: '{spaceTableContentBottom}',
    spaceTableEmbeddedHeaderTop: '{spaceContainerHeaderVertical}',
    spaceTabsFocusOutlineGutter: '0px',
};
const expandedTokens = (0, merge_1.default)({}, spacing_1.tokens, (0, utils_1.expandDensityDictionary)(tokens));
exports.tokens = expandedTokens;
exports.mode = 'density';
//# sourceMappingURL=spacing.js.map