"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pickState = exports.expandMotionDictionary = exports.expandDensityDictionary = exports.expandColorDictionary = void 0;
const expandColorEntry = (entry) => {
    if (typeof entry === 'string') {
        return {
            light: entry,
            dark: entry,
        };
    }
    return entry;
};
const expandDensityEntry = (entry) => {
    if (typeof entry === 'string') {
        return {
            comfortable: entry,
            compact: entry,
        };
    }
    return entry;
};
const expandMotionEntry = (entry) => {
    if (typeof entry === 'string') {
        return {
            default: entry,
            disabled: entry,
        };
    }
    return entry;
};
const expandColorDictionary = (dictionary) => {
    return Object.keys(dictionary).reduce((acc, _key) => {
        const key = _key;
        acc[key] = expandColorEntry(dictionary[key]);
        return acc;
    }, {});
};
exports.expandColorDictionary = expandColorDictionary;
const expandDensityDictionary = (dictionary) => {
    return Object.keys(dictionary).reduce((acc, _key) => {
        const key = _key;
        acc[key] = expandDensityEntry(dictionary[key]);
        return acc;
    }, {});
};
exports.expandDensityDictionary = expandDensityDictionary;
const expandMotionDictionary = (dictionary) => {
    return Object.keys(dictionary).reduce((acc, _key) => {
        const key = _key;
        acc[key] = expandMotionEntry(dictionary[key]);
        return acc;
    }, {});
};
exports.expandMotionDictionary = expandMotionDictionary;
const pickState = (tokenCategory, state) => {
    return Object.fromEntries(Object.entries(tokenCategory).map(([token, value]) => {
        return [token, typeof value === 'object' ? value[state] : value];
    }));
};
exports.pickState = pickState;
//# sourceMappingURL=index.js.map