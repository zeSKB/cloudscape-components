"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mode = exports.tokens = void 0;
const utils_1 = require("../utils");
const environment_1 = require("../utils/environment");
const tokens = {
    motionDurationExtraFast: { default: '45ms', disabled: '0ms' },
    motionDurationExtraSlow: { default: '270ms', disabled: '0ms' },
    motionDurationFast: { default: '90ms', disabled: '0ms' },
    motionDurationModerate: { default: '135ms', disabled: '0ms' },
    motionDurationRefreshOnlyAmbient: { default: '2000ms', disabled: '0ms' },
    motionDurationRefreshOnlyFast: { default: '115ms', disabled: '0ms' },
    motionDurationRefreshOnlyMedium: { default: '165ms', disabled: '0ms' },
    motionDurationRefreshOnlySlow: { default: '250ms', disabled: '0ms' },
    motionDurationRotate180: '{motionDurationModerate}',
    motionDurationRotate90: '{motionDurationModerate}',
    motionDurationShowPaced: '{motionDurationSlow}',
    motionDurationShowQuick: '{motionDurationModerate}',
    motionDurationSlow: { default: '180ms', disabled: '0ms' },
    motionDurationTransitionQuick: '{motionDurationFast}',
    motionDurationTransitionShowPaced: '{motionDurationSlow}',
    motionDurationTransitionShowQuick: '{motionDurationFast}',
    motionEasingEaseOutQuart: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    motionEasingRefreshOnlyA: 'cubic-bezier(0, 0, 0, 1)',
    motionEasingRefreshOnlyB: 'cubic-bezier(1, 0, 0.83, 1)',
    motionEasingRefreshOnlyC: 'cubic-bezier(0.84, 0, 0.16, 1)',
    motionEasingRefreshOnlyD: 'cubic-bezier(0.33, 0, 0.67, 1)',
    motionEasingRotate180: '{motionEasingEaseOutQuart}',
    motionEasingRotate90: '{motionEasingEaseOutQuart}',
    motionEasingShowPaced: 'ease-out',
    motionEasingShowQuick: 'ease-out',
    motionEasingTransitionQuick: 'linear',
    motionEasingTransitionShowPaced: 'ease-out',
    motionEasingTransitionShowQuick: 'linear',
    motionEasingResponsive: '{motionEasingRefreshOnlyA}',
    motionEasingSticky: '{motionEasingRefreshOnlyB}',
    motionEasingExpressive: '{motionEasingRefreshOnlyC}',
    motionDurationResponsive: '{motionDurationRefreshOnlyFast}',
    motionDurationExpressive: '{motionDurationRefreshOnlyMedium}',
    motionDurationComplex: '{motionDurationRefreshOnlySlow}',
    motionKeyframesFadeIn: 'awsui-fade-in-' + environment_1.tokenStylesSuffix,
    motionKeyframesFadeOut: 'awsui-fade-out-' + environment_1.tokenStylesSuffix,
    motionKeyframesStatusIconError: 'awsui-status-icon-error-' + environment_1.tokenStylesSuffix,
    motionKeyframesScalePopup: 'awsui-scale-popup-' + environment_1.tokenStylesSuffix,
};
const expandedTokens = (0, utils_1.expandMotionDictionary)(tokens);
exports.tokens = expandedTokens;
exports.mode = 'motion';
//# sourceMappingURL=motion.js.map