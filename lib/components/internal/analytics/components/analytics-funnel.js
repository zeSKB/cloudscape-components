import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect, useRef, useState } from 'react';
import { FunnelStepContext, FunnelSubStepContext, FunnelContext, } from '../context/analytics-context';
import { useFunnel, useFunnelStep } from '../hooks/use-funnel';
import { useUniqueId } from '../../hooks/use-unique-id';
import { useVisualRefresh } from '../../hooks/use-visual-mode';
import { PACKAGE_VERSION } from '../../environment';
import { FunnelMetrics } from '../';
import { DATA_ATTR_FUNNEL_STEP, getFunnelNameSelector, getSubStepAllSelector, getSubStepNameSelector, getSubStepSelector, } from '../selectors';
export const FUNNEL_VERSION = '1.0';
export const AnalyticsFunnel = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const [funnelInteractionId, setFunnelInteractionId] = useState('');
    const funnelResultRef = useRef(false);
    const isVisualRefresh = useVisualRefresh();
    // This useEffect hook is run once on component mount to initiate the funnel analytics.
    // It first calls the 'funnelStart' method from FunnelMetrics, providing all necessary details
    // about the funnel, and receives a unique interaction id.
    // This unique interaction id is then stored in the state for further use.
    //
    // On component unmount, it checks whether the funnel was successfully completed.
    // Based on this, it either calls 'funnelComplete' or 'funnelCancelled' method from FunnelMetrics.
    //
    // The eslint-disable is required as we deliberately want this effect to run only once on mount and unmount,
    // hence we do not provide any dependencies.
    useEffect(() => {
        const funnelInteractionId = FunnelMetrics.funnelStart({
            funnelNameSelector: getFunnelNameSelector(),
            optionalStepNumbers: props.optionalStepNumbers,
            funnelType: props.funnelType,
            totalFunnelSteps: props.totalFunnelSteps,
            componentVersion: PACKAGE_VERSION,
            theme: isVisualRefresh ? 'vr' : 'classic',
            funnelVersion: FUNNEL_VERSION,
        });
        setFunnelInteractionId(funnelInteractionId);
        return () => {
            if (funnelResultRef.current === true) {
                FunnelMetrics.funnelSuccessful({ funnelInteractionId });
            }
            else {
                FunnelMetrics.funnelCancelled({ funnelInteractionId });
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const funnelSubmit = () => {
        FunnelMetrics.funnelComplete({ funnelInteractionId });
        funnelResultRef.current = true;
    };
    const funnelCancel = () => {
        funnelResultRef.current = false;
    };
    const funnelContextValue = {
        funnelInteractionId,
        setFunnelInteractionId,
        funnelType: props.funnelType,
        optionalStepNumbers: props.optionalStepNumbers,
        totalFunnelSteps: props.totalFunnelSteps,
        funnelSubmit,
        funnelCancel,
    };
    return React.createElement(FunnelContext.Provider, { value: funnelContextValue }, children);
};
export const AnalyticsFunnelStep = ({ children, stepNumber, stepNameSelector }) => {
    const { funnelInteractionId } = useFunnel();
    const funnelStepProps = { [DATA_ATTR_FUNNEL_STEP]: stepNumber };
    // This useEffect hook is used to track the start and completion of interaction with the step.
    // On mount, if there is a valid funnel interaction id, it calls the 'funnelStepStart' method from FunnelMetrics
    // to record the beginning of the interaction with the current step.
    // On unmount, it does a similar thing but this time calling 'funnelStepComplete' to record the completion of the interaction.
    useEffect(() => {
        if (funnelInteractionId) {
            FunnelMetrics.funnelStepStart({
                funnelInteractionId,
                stepNumber,
                stepNameSelector,
                subStepAllSelector: getSubStepAllSelector(),
            });
        }
        return () => {
            if (funnelInteractionId) {
                FunnelMetrics.funnelStepComplete({
                    funnelInteractionId,
                    stepNumber,
                    stepNameSelector,
                    subStepAllSelector: getSubStepAllSelector(),
                });
            }
        };
    }, [funnelInteractionId, stepNumber, stepNameSelector]);
    const contextValue = { funnelInteractionId, stepNumber, stepNameSelector, funnelStepProps };
    return (React.createElement(FunnelStepContext.Provider, { value: contextValue }, typeof children === 'function' ? children(contextValue) : children));
};
export const AnalyticsFunnelSubStep = ({ children }) => {
    const { funnelInteractionId } = useFunnel();
    const { stepNumber, stepNameSelector } = useFunnelStep();
    const subStepId = useUniqueId('substep');
    const subStepSelector = getSubStepSelector(subStepId);
    const subStepNameSelector = getSubStepNameSelector(subStepId);
    return (React.createElement(FunnelSubStepContext.Provider, { value: {
            funnelInteractionId,
            stepNumber,
            stepNameSelector,
            subStepSelector,
            subStepNameSelector,
            subStepId,
        } }, children));
};
//# sourceMappingURL=analytics-funnel.js.map