"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const theming_build_1 = require("@cloudscape-design/theming-build");
const modes_1 = require("../utils/modes");
const visual_refresh_1 = require("../visual-refresh");
const modes = [
    (0, modes_1.createColorMode)('.awsui-dark-mode'),
    (0, modes_1.createDensityMode)('.awsui-compact-mode'),
    (0, modes_1.createMotionMode)('.awsui-motion-disabled'),
];
const builder = new theming_build_1.ThemeBuilder('visual-refresh', '.awsui-visual-refresh', modes);
const theme = (0, visual_refresh_1.buildVisualRefresh)(builder);
exports.default = theme;
//# sourceMappingURL=index.js.map