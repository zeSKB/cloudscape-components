"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFlashbarContext = exports.createHeaderContext = exports.createCompactTableContext = exports.createTopNavigationContext = void 0;
const createTopNavigationContext = (tokens) => {
    return {
        id: 'top-navigation',
        selector: '.awsui-context-top-navigation',
        tokens,
    };
};
exports.createTopNavigationContext = createTopNavigationContext;
const createCompactTableContext = (tokens) => {
    return {
        id: 'compact-table',
        selector: '.awsui-context-compact-table',
        tokens,
    };
};
exports.createCompactTableContext = createCompactTableContext;
const createHeaderContext = (tokens) => {
    return {
        id: 'header',
        selector: '.awsui-context-content-header',
        tokens,
    };
};
exports.createHeaderContext = createHeaderContext;
const createFlashbarContext = (tokens) => {
    return {
        id: 'flashbar',
        selector: '.awsui-context-flashbar',
        tokens,
    };
};
exports.createFlashbarContext = createFlashbarContext;
//# sourceMappingURL=contexts.js.map