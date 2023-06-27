"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const mapValues_1 = __importDefault(require("lodash/mapValues"));
const merge_1 = __importDefault(require("lodash/merge"));
const metadata_1 = require("../../utils/metadata");
const borders_1 = __importDefault(require("./borders"));
const color_charts_1 = __importDefault(require("./color-charts"));
const color_palette_1 = __importDefault(require("./color-palette"));
const colors_1 = __importDefault(require("./colors"));
const motion_1 = __importDefault(require("./motion"));
const shadows_1 = __importDefault(require("./shadows"));
const sizes_1 = __importDefault(require("./sizes"));
const spacing_1 = __importDefault(require("./spacing"));
const typography_1 = __importDefault(require("./typography"));
const index_1 = __importDefault(require("../index"));
const allTokens = (0, mapValues_1.default)(index_1.default.tokens, () => ({}));
const metadata = (0, metadata_1.expandMetadata)((0, merge_1.default)({}, allTokens, borders_1.default, color_charts_1.default, color_palette_1.default, colors_1.default, motion_1.default, shadows_1.default, sizes_1.default, spacing_1.default, typography_1.default));
exports.default = metadata;
//# sourceMappingURL=index.js.map