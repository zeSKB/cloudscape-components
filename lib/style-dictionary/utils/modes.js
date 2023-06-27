"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMotionMode = exports.createDensityMode = exports.createColorMode = void 0;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const createColorMode = (darkSelector) => ({
    id: 'color',
    states: {
        light: { default: true },
        dark: { selector: darkSelector, media: 'not print' },
    },
});
exports.createColorMode = createColorMode;
const createDensityMode = (compactSelector) => ({
    id: 'density',
    states: {
        comfortable: { default: true },
        compact: { selector: compactSelector },
    },
});
exports.createDensityMode = createDensityMode;
const createMotionMode = (disabledSelector) => ({
    id: 'motion',
    states: {
        default: { default: true },
        disabled: { selector: disabledSelector },
    },
});
exports.createMotionMode = createMotionMode;
//# sourceMappingURL=modes.js.map