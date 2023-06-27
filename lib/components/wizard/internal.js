import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useRef } from 'react';
import clsx from 'clsx';
import { getBaseProps } from '../internal/base-component';
import { fireNonCancelableEvent } from '../internal/events';
import { warnOnce } from '@cloudscape-design/component-toolkit/internal';
import { useContainerBreakpoints } from '../internal/hooks/container-queries';
import { useControllable } from '../internal/hooks/use-controllable';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
import { useVisualRefresh } from '../internal/hooks/use-visual-mode';
import { useInternalI18n } from '../internal/i18n/context';
import { FunnelMetrics } from '../internal/analytics';
import { useFunnel } from '../internal/analytics/hooks/use-funnel';
import { getSubStepAllSelector } from '../internal/analytics/selectors';
import WizardForm from './wizard-form';
import WizardNavigation from './wizard-navigation';
import styles from './styles.css.js';
export default function InternalWizard(_a) {
    var _b, _c;
    var { steps, activeStepIndex: controlledActiveStepIndex, isLoadingNextStep = false, allowSkipTo = false, secondaryActions, onCancel, onSubmit, onNavigate, __internalRootRef } = _a, rest = __rest(_a, ["steps", "activeStepIndex", "isLoadingNextStep", "allowSkipTo", "secondaryActions", "onCancel", "onSubmit", "onNavigate", "__internalRootRef"]);
    const baseProps = getBaseProps(rest);
    const [breakpoint, breakpointsRef] = useContainerBreakpoints(['xs']);
    const ref = useMergeRefs(breakpointsRef, __internalRootRef);
    const smallContainer = breakpoint === 'default';
    const [activeStepIndex, setActiveStepIndex] = useControllable(controlledActiveStepIndex, onNavigate, 0, {
        componentName: 'Wizard',
        controlledProp: 'activeStepIndex',
        changeHandler: 'onNavigate',
    });
    const { funnelInteractionId, funnelSubmit, funnelCancel, funnelProps } = useFunnel();
    const actualActiveStepIndex = activeStepIndex ? Math.min(activeStepIndex, steps.length - 1) : 0;
    const farthestStepIndex = useRef(actualActiveStepIndex);
    farthestStepIndex.current = Math.max(farthestStepIndex.current, actualActiveStepIndex);
    const isVisualRefresh = useVisualRefresh();
    const isLastStep = actualActiveStepIndex >= steps.length - 1;
    const navigationEvent = (requestedStepIndex, reason) => {
        if (funnelInteractionId) {
            FunnelMetrics.funnelStepNavigation({
                navigationType: reason,
                funnelInteractionId,
                stepNumber: actualActiveStepIndex + 1,
                stepNameSelector: `.${styles['form-header-component-wrapper']}`,
                destinationStepNumber: requestedStepIndex + 1,
                subStepAllSelector: getSubStepAllSelector(),
            });
        }
        setActiveStepIndex(requestedStepIndex);
        fireNonCancelableEvent(onNavigate, { requestedStepIndex, reason });
    };
    const onStepClick = (stepIndex) => navigationEvent(stepIndex, 'step');
    const onSkipToClick = (stepIndex) => navigationEvent(stepIndex, 'skip');
    const onCancelClick = () => {
        funnelCancel();
        fireNonCancelableEvent(onCancel);
    };
    const onPreviousClick = () => navigationEvent(actualActiveStepIndex - 1, 'previous');
    const onPrimaryClick = () => {
        if (isLastStep) {
            funnelSubmit();
            fireNonCancelableEvent(onSubmit);
        }
        else {
            navigationEvent(actualActiveStepIndex + 1, 'next');
        }
    };
    const i18n = useInternalI18n('wizard');
    const skipToButtonLabel = i18n('i18nStrings.skipToButtonLabel', rest.i18nStrings.skipToButtonLabel, format => task => format({ task__title: task.title }));
    const i18nStrings = Object.assign(Object.assign({}, rest.i18nStrings), { skipToButtonLabel, stepNumberLabel: i18n('i18nStrings.stepNumberLabel', (_b = rest.i18nStrings) === null || _b === void 0 ? void 0 : _b.stepNumberLabel, format => stepNumber => format({ stepNumber })), collapsedStepsLabel: i18n('i18nStrings.collapsedStepsLabel', (_c = rest.i18nStrings) === null || _c === void 0 ? void 0 : _c.collapsedStepsLabel, format => (stepNumber, stepsCount) => format({ stepNumber, stepsCount })), cancelButton: i18n('i18nStrings.cancelButton', rest.i18nStrings.cancelButton), previousButton: i18n('i18nStrings.previousButton', rest.i18nStrings.previousButton), nextButton: i18n('i18nStrings.nextButton', rest.i18nStrings.nextButton), optional: i18n('i18nStrings.optional', rest.i18nStrings.optional) });
    if (activeStepIndex && activeStepIndex >= steps.length) {
        warnOnce('Wizard', `You have set \`activeStepIndex\` to ${activeStepIndex} but you have provided only ${steps.length} steps. Its value is ignored and the component uses ${steps.length - 1} instead.`);
    }
    if (allowSkipTo && !skipToButtonLabel) {
        warnOnce('Wizard', `You have set \`allowSkipTo\` but you have not provided \`i18nStrings.skipToButtonLabel\`. The skip-to button will not be rendered.`);
    }
    return (React.createElement("div", Object.assign({}, baseProps, funnelProps, { ref: ref, className: clsx(styles.root, baseProps.className) }),
        React.createElement("div", { className: clsx(styles.wizard, isVisualRefresh && styles.refresh, smallContainer && styles['small-container']) },
            React.createElement(WizardNavigation, { activeStepIndex: actualActiveStepIndex, farthestStepIndex: farthestStepIndex.current, allowSkipTo: allowSkipTo, hidden: smallContainer, i18nStrings: i18nStrings, isVisualRefresh: isVisualRefresh, isLoadingNextStep: isLoadingNextStep, onStepClick: onStepClick, onSkipToClick: onSkipToClick, steps: steps }),
            React.createElement("div", { className: clsx(styles.form, isVisualRefresh && styles.refresh, smallContainer && styles['small-container']) },
                isVisualRefresh && React.createElement("div", { className: clsx(styles.background, 'awsui-context-content-header') }),
                React.createElement(WizardForm, { steps: steps, isVisualRefresh: isVisualRefresh, showCollapsedSteps: smallContainer, i18nStrings: i18nStrings, activeStepIndex: actualActiveStepIndex, isPrimaryLoading: isLoadingNextStep, allowSkipTo: allowSkipTo, secondaryActions: secondaryActions, onCancelClick: onCancelClick, onPreviousClick: onPreviousClick, onSkipToClick: onSkipToClick, onPrimaryClick: onPrimaryClick })))));
}
//# sourceMappingURL=internal.js.map