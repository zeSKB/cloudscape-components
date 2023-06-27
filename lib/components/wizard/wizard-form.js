// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useRef } from 'react';
import clsx from 'clsx';
import InternalForm from '../form/internal';
import InternalHeader from '../header/internal';
import { useMobile } from '../internal/hooks/use-mobile';
import WizardActions from './wizard-actions';
import WizardFormHeader from './wizard-form-header';
import styles from './styles.css.js';
import { useEffectOnUpdate } from '../internal/hooks/use-effect-on-update';
import { AnalyticsFunnelStep } from '../internal/analytics/components/analytics-funnel';
export default function WizardForm({ steps, activeStepIndex, isVisualRefresh, showCollapsedSteps, i18nStrings, isPrimaryLoading, allowSkipTo, secondaryActions, onCancelClick, onPreviousClick, onPrimaryClick, onSkipToClick, }) {
    var _a;
    const { title, info, description, content, errorText, isOptional } = steps[activeStepIndex] || {};
    const isLastStep = activeStepIndex >= steps.length - 1;
    const skipToTargetIndex = findSkipToTargetIndex(steps, activeStepIndex);
    const isMobile = useMobile();
    const stepHeaderRef = useRef(null);
    useEffectOnUpdate(() => {
        var _a;
        if (stepHeaderRef && stepHeaderRef.current) {
            (_a = stepHeaderRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [activeStepIndex]);
    const showSkipTo = allowSkipTo && skipToTargetIndex !== -1;
    const skipToButtonText = skipToTargetIndex !== -1 && i18nStrings.skipToButtonLabel
        ? i18nStrings.skipToButtonLabel(steps[skipToTargetIndex], skipToTargetIndex + 1)
        : undefined;
    return (React.createElement(React.Fragment, null,
        React.createElement(WizardFormHeader, { isMobile: isMobile || showCollapsedSteps, isVisualRefresh: isVisualRefresh },
            React.createElement("div", { className: clsx(styles['collapsed-steps'], !showCollapsedSteps && styles['collapsed-steps-hidden']) }, (_a = i18nStrings.collapsedStepsLabel) === null || _a === void 0 ? void 0 : _a.call(i18nStrings, activeStepIndex + 1, steps.length)),
            React.createElement(InternalHeader, { className: styles['form-header-component'], variant: "h1", description: description, info: info },
                React.createElement("span", { className: styles['form-header-component-wrapper'], tabIndex: -1, ref: stepHeaderRef },
                    title,
                    isOptional && React.createElement("i", null, ` - ${i18nStrings.optional}`)))),
        React.createElement(AnalyticsFunnelStep, { stepNameSelector: `.${styles['form-header-component-wrapper']}`, stepNumber: activeStepIndex + 1 }, ({ funnelStepProps }) => (React.createElement(InternalForm, Object.assign({ className: clsx(styles['form-component']), actions: React.createElement(WizardActions, { cancelButtonText: i18nStrings.cancelButton, primaryButtonText: isLastStep ? i18nStrings.submitButton : i18nStrings.nextButton, primaryButtonLoadingText: isLastStep ? i18nStrings.submitButtonLoadingAnnouncement : i18nStrings.nextButtonLoadingAnnouncement, previousButtonText: i18nStrings.previousButton, onCancelClick: onCancelClick, onPreviousClick: onPreviousClick, onPrimaryClick: onPrimaryClick, onSkipToClick: () => onSkipToClick(skipToTargetIndex), showPrevious: activeStepIndex !== 0, isPrimaryLoading: isPrimaryLoading, showSkipTo: showSkipTo, skipToButtonText: skipToButtonText }), secondaryActions: secondaryActions, errorText: errorText, errorIconAriaLabel: i18nStrings.errorIconAriaLabel }, funnelStepProps), content)))));
}
function findSkipToTargetIndex(steps, activeStepIndex) {
    let nextRequiredStepIndex = activeStepIndex;
    do {
        nextRequiredStepIndex++;
    } while (nextRequiredStepIndex < steps.length - 1 && steps[nextRequiredStepIndex].isOptional);
    return nextRequiredStepIndex > activeStepIndex + 1 ? nextRequiredStepIndex : -1;
}
//# sourceMappingURL=wizard-form.js.map