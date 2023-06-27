import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import InternalForm from './internal';
import useBaseComponent from '../internal/hooks/use-base-component';
import { AnalyticsFunnel, AnalyticsFunnelStep } from '../internal/analytics/components/analytics-funnel';
import { getFunnelNameSelector } from '../internal/analytics/selectors';
import { ButtonContext } from '../internal/context/button-context';
import { useFunnel, useFunnelStep } from '../internal/analytics/hooks/use-funnel';
const FormWithAnalytics = (_a) => {
    var { variant = 'full-page', actions } = _a, props = __rest(_a, ["variant", "actions"]);
    const { funnelProps, funnelSubmit } = useFunnel();
    const { funnelStepProps } = useFunnelStep();
    const handleActionButtonClick = ({ variant }) => {
        if (variant === 'primary') {
            funnelSubmit();
        }
    };
    return (React.createElement(InternalForm, Object.assign({ variant: variant, actions: actions && (React.createElement(ButtonContext.Provider, { value: { onClick: handleActionButtonClick } }, actions)) }, props, funnelProps, funnelStepProps)));
};
export default function Form(_a) {
    var { variant = 'full-page' } = _a, props = __rest(_a, ["variant"]);
    const baseComponentProps = useBaseComponent('Form');
    return (React.createElement(AnalyticsFunnel, { funnelType: "single-page", optionalStepNumbers: [], totalFunnelSteps: 1 },
        React.createElement(AnalyticsFunnelStep, { stepNumber: 1, stepNameSelector: getFunnelNameSelector() },
            React.createElement(FormWithAnalytics, Object.assign({ variant: variant }, props, baseComponentProps)))));
}
applyDisplayName(Form, 'Form');
//# sourceMappingURL=index.js.map