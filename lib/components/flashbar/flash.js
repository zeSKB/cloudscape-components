import React from 'react';
import InternalSpinner from '../spinner/internal';
import InternalIcon from '../icon/internal';
import clsx from 'clsx';
import styles from './styles.css.js';
import { InternalButton } from '../button/internal';
import { warnOnce } from '@cloudscape-design/component-toolkit/internal';
import { isDevelopment } from '../internal/is-development';
import { throttle } from '../internal/utils/throttle';
import LiveRegion from '../internal/components/live-region';
import { sendDismissMetric } from './internal/analytics';
import { FOCUS_THROTTLE_DELAY } from './utils';
import { DATA_ATTR_ANALYTICS_FLASHBAR } from '../internal/analytics/selectors';
const ICON_TYPES = {
    success: 'status-positive',
    warning: 'status-warning',
    info: 'status-info',
    error: 'status-negative',
};
function actionButton(buttonText, onButtonClick) {
    return (React.createElement(InternalButton, { onClick: onButtonClick, className: styles['action-button'], formAction: "none" }, buttonText));
}
function dismissButton(dismissLabel, onDismiss) {
    return (React.createElement("div", { className: styles['dismiss-button-wrapper'] },
        React.createElement(InternalButton, { onClick: onDismiss, className: styles['dismiss-button'], variant: "flashbar-icon", iconName: "close", formAction: "none", ariaLabel: dismissLabel })));
}
export const focusFlashById = throttle((element, itemId) => {
    var _a;
    const selector = `[data-itemid="${CSS.escape(itemId)}"] .${styles['flash-focus-container']}`;
    (_a = element === null || element === void 0 ? void 0 : element.querySelector(selector)) === null || _a === void 0 ? void 0 : _a.focus();
}, FOCUS_THROTTLE_DELAY, { trailing: false });
export const Flash = React.forwardRef(({ id, header, content, dismissible, dismissLabel, statusIconAriaLabel, loading, action, buttonText, onButtonClick, onDismiss, className, transitionState, ariaRole, type = 'info', }, ref) => {
    if (isDevelopment) {
        if (buttonText && !onButtonClick) {
            warnOnce('Flashbar', `You provided a \`buttonText\` prop without an \`onButtonClick\` handler. This will render a non-interactive action button.`);
        }
        if (dismissible && !onDismiss) {
            warnOnce('Flashbar', `You have set the \`dismissible\` prop without an \`onDismiss\` handler. This will render a non-interactive dismiss button.`);
        }
    }
    const button = action || (buttonText && actionButton(buttonText, onButtonClick));
    const iconType = ICON_TYPES[type];
    const icon = loading ? React.createElement(InternalSpinner, null) : React.createElement(InternalIcon, { name: iconType });
    const effectiveType = loading ? 'info' : type;
    const handleDismiss = event => {
        sendDismissMetric(effectiveType);
        onDismiss && onDismiss(event);
    };
    const analyticsAttributes = {
        [DATA_ATTR_ANALYTICS_FLASHBAR]: effectiveType,
    };
    return (
    // We're not using "polite" or "assertive" here, just turning default behavior off.
    // eslint-disable-next-line @cloudscape-design/prefer-live-region
    React.createElement("div", Object.assign({ ref: ref, role: ariaRole, "aria-live": ariaRole ? 'off' : undefined, "data-itemid": id, className: clsx(styles.flash, styles[`flash-type-${effectiveType}`], className, transitionState && {
            [styles.enter]: transitionState === 'enter',
            [styles.entering]: transitionState === 'entering',
            [styles.entered]: transitionState === 'entered',
            [styles.exit]: transitionState === 'exit',
            [styles.exiting]: transitionState === 'exiting',
            [styles.exited]: transitionState === 'exited',
        }) }, analyticsAttributes),
        React.createElement("div", { className: styles['flash-body'] },
            React.createElement("div", { className: styles['flash-focus-container'], tabIndex: -1 },
                React.createElement("div", { className: clsx(styles['flash-icon'], styles['flash-text']), role: "img", "aria-label": statusIconAriaLabel }, icon),
                React.createElement("div", { className: clsx(styles['flash-message'], styles['flash-text']) },
                    React.createElement("div", { className: styles['flash-header'] }, header),
                    React.createElement("div", { className: styles['flash-content'] }, content))),
            button && React.createElement("div", { className: styles['action-button-wrapper'] }, button)),
        dismissible && dismissButton(dismissLabel, handleDismiss),
        ariaRole === 'status' && (React.createElement(LiveRegion, null,
            statusIconAriaLabel,
            " ",
            header,
            " ",
            content))));
});
//# sourceMappingURL=flash.js.map