"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const metadata_1 = require("../utils/metadata");
const metadata_2 = __importDefault(require("../visual-refresh/metadata"));
const updatedDescriptions = {
    colorTextAccent: 'The accent color used to guide a user. *For example: the highlighted page in the side navigation and active tab text.*',
    colorTextDropdownItemHighlighted: 'The text color of hovered or selected dropdown items. *For example: selected day text color in date picker, label text color of the item on hover in a select, multiselect, and autosuggest.*',
    colorTextInteractiveDefault: 'The color of clickable elements in their default state. *For example: expandable sections, tabs, and icons.*',
    colorTextInteractiveHover: 'The color of clickable elements on hover. *For example: expandable sections, and icons on hover.*',
    spaceScaledM: 'The M spacing unit which scales between modes. For example: top padding of content inside a container',
    spaceScaledXxl: 'The XXL spacing unit which scales between modes. For example: horizontal padding for side navigation and help panel content.',
};
const metadata = (0, metadata_1.updateDescriptions)(updatedDescriptions, metadata_2.default);
exports.default = metadata;
//# sourceMappingURL=metadata.js.map