"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDescriptions = exports.expandMetadata = void 0;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const lodash_1 = require("lodash");
function expandMetadata(dictionary) {
    const entries = Object.entries(dictionary).map(([token, metadata]) => {
        return [
            token,
            {
                ...metadata,
                sassName: metadata.sassName ? metadata.sassName : `$${(0, lodash_1.kebabCase)(token)}`,
            },
        ];
    });
    return Object.fromEntries(entries);
}
exports.expandMetadata = expandMetadata;
function updateDescriptions(descriptions, baseDictionary) {
    const entries = Object.entries(baseDictionary).map(([token, metadata]) => {
        return [
            token,
            {
                ...metadata,
                description: descriptions[token] || metadata.description,
            },
        ];
    });
    return Object.fromEntries(entries);
}
exports.updateDescriptions = updateDescriptions;
//# sourceMappingURL=metadata.js.map