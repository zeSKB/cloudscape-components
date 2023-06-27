"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokens = void 0;
const typography_1 = require("../visual-refresh/typography");
const merge_1 = __importDefault(require("lodash/merge"));
const tokens = {
    fontBodySLetterSpacing: 'normal',
    fontButtonLetterSpacing: '0.25px',
    fontChartDetailSize: '{fontBodyMSize}',
    fontDisplayLLetterSpacing: 'normal',
    fontDisplayLLineHeight: '56px',
    fontDisplayLSize: '44px',
    fontDisplayLabelWeight: '400',
    fontExpandableHeadingSize: '{fontBodyMSize}',
    fontFamilyBase: "'Noto Sans', 'Helvetica Neue', Roboto, Arial, sans-serif",
    fontHeaderH2DescriptionLineHeight: '{fontBodySLineHeight}',
    fontHeaderH2DescriptionSize: '{fontBodySSize}',
    fontHeadingLLetterSpacing: 'normal',
    fontHeadingLLineHeight: '22px',
    fontHeadingLSize: '18px',
    fontHeadingLWeight: '{fontWeightHeavy}',
    fontHeadingMLetterSpacing: 'normal',
    fontHeadingMLineHeight: '22px',
    fontHeadingMSize: '18px',
    fontHeadingMWeight: '400',
    fontHeadingSLetterSpacing: 'normal',
    fontHeadingSWeight: '{fontWeightHeavy}',
    fontHeadingXlLetterSpacing: 'normal',
    fontHeadingXlLineHeight: '36px',
    fontHeadingXlSize: '28px',
    fontHeadingXlWeight: '400',
    fontHeadingXsLineHeight: '20px',
    fontHeadingXsSize: '16px',
    fontHeadingXsWeight: '400',
    fontBoxValueLargeWeight: '300',
    fontLinkButtonLetterSpacing: 'normal',
    fontLinkButtonWeight: '400',
    fontLinkPrimaryDecoration: 'none',
    fontLinkPrimaryLetterSpacing: '0.005em',
    fontLinkPrimaryWeight: '700',
    fontPanelHeaderLineHeight: '{fontHeadingLLineHeight}',
    fontPanelHeaderSize: '{fontHeadingLSize}',
    fontSmoothingWebkit: 'auto',
    fontSmoothingMozOsx: 'auto',
    fontTabsDisabledWeight: '400',
    fontTabsLineHeight: '{fontBodyMLineHeight}',
    fontTabsSize: '{fontBodyMSize}',
    fontWeightHeavy: '700',
};
const expandedTokens = (0, merge_1.default)({}, typography_1.tokens, tokens);
exports.tokens = expandedTokens;
//# sourceMappingURL=typography.js.map