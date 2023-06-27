"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildClassicOpenSource = void 0;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const theming_build_1 = require("@cloudscape-design/theming-build");
const modes_1 = require("../utils/modes");
const contexts_1 = require("../utils/contexts");
const modes = [
    (0, modes_1.createColorMode)('.awsui-dark-mode'),
    (0, modes_1.createDensityMode)('.awsui-compact-mode'),
    (0, modes_1.createMotionMode)('.awsui-motion-disabled'),
];
const tokenCategories = [
    require('./color-palette'),
    require('./color-charts'),
    require('./colors'),
    require('./typography'),
    require('./borders'),
    require('./motion'),
    require('./sizes'),
    require('./spacing'),
    require('./shadows'),
];
function buildClassicOpenSource(builder) {
    tokenCategories.forEach(({ tokens, mode: modeId }) => {
        const mode = modes.find(mode => mode.id === modeId);
        builder.addTokens(tokens, mode);
    });
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    builder.addContext((0, contexts_1.createCompactTableContext)(require('./contexts/compact-table').tokens));
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    builder.addContext((0, contexts_1.createTopNavigationContext)(require('./contexts/top-navigation').tokens));
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    builder.addContext((0, contexts_1.createFlashbarContext)(require('./contexts/flashbar').tokens));
    return builder.build();
}
exports.buildClassicOpenSource = buildClassicOpenSource;
const builder = new theming_build_1.ThemeBuilder('classic', ':root', modes);
const theme = buildClassicOpenSource(builder);
exports.default = theme;
//# sourceMappingURL=index.js.map