"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mode = exports.tokens = void 0;
const motion_1 = require("../visual-refresh/motion");
Object.defineProperty(exports, "mode", { enumerable: true, get: function () { return motion_1.mode; } });
const environment_1 = require("../utils/environment");
exports.tokens = {
    ...motion_1.tokens,
    motionEasingResponsive: 'ease-out',
    motionEasingSticky: 'ease-out',
    motionEasingExpressive: 'ease-out',
    motionDurationResponsive: '{motionDurationModerate}',
    motionDurationExpressive: '{motionDurationSlow}',
    motionDurationComplex: '{motionDurationExtraSlow}',
    motionKeyframesStatusIconError: 'awsui-none-' + environment_1.tokenStylesSuffix,
    motionKeyframesScalePopup: 'awsui-none-' + environment_1.tokenStylesSuffix,
};
//# sourceMappingURL=motion.js.map