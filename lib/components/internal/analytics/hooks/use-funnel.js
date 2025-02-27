// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useContext, useRef } from 'react';
import { FunnelContext, FunnelStepContext, FunnelSubStepContext } from '../context/analytics-context';
import { DATA_ATTR_FUNNEL_INTERACTION_ID, DATA_ATTR_FUNNEL_SUBSTEP, getSubStepAllSelector } from '../selectors';
import { FunnelMetrics } from '../';
/**
 * Custom React Hook to manage and interact with FunnelSubStep.
 * This hook will provide necessary properties and methods required
 * to track and manage interactions with a FunnelSubStep component.
 *
 * The `onFocus` method is used to track the beginning of interaction with the FunnelSubStep.
 * The `onBlur` method is used to track the completion of interaction with the FunnelSubStep.
 * The subStepId is a unique identifier for the funnel sub-step.
 * The subStepRef is a reference to the DOM element of the funnel sub-step.
 */
export const useFunnelSubStep = () => {
    const subStepRef = useRef(null);
    const context = useContext(FunnelSubStepContext);
    const { funnelInteractionId, subStepId, subStepSelector, subStepNameSelector, stepNumber, stepNameSelector } = context;
    const onFocus = (event) => {
        if (funnelInteractionId &&
            subStepRef.current &&
            (!event.relatedTarget || !subStepRef.current.contains(event.relatedTarget))) {
            FunnelMetrics.funnelSubStepStart({
                funnelInteractionId,
                subStepSelector,
                subStepNameSelector,
                stepNumber,
                stepNameSelector,
                subStepAllSelector: getSubStepAllSelector(),
            });
        }
    };
    const onBlur = (event) => {
        if (funnelInteractionId && subStepRef.current && !subStepRef.current.contains(event.relatedTarget)) {
            FunnelMetrics.funnelSubStepComplete({
                funnelInteractionId,
                subStepSelector,
                subStepNameSelector,
                stepNumber,
                stepNameSelector,
                subStepAllSelector: getSubStepAllSelector(),
            });
        }
    };
    const funnelSubStepProps = funnelInteractionId
        ? {
            [DATA_ATTR_FUNNEL_SUBSTEP]: subStepId,
            onFocus,
            onBlur,
        }
        : {};
    return Object.assign({ funnelSubStepProps, subStepRef }, context);
};
/**
 * Custom React Hook to manage and interact with FunnelStep.
 * This hook will provide necessary properties required to track
 * and manage interactions with a FunnelStep component.
 *
 * The 'data-analytics-funnel-step' property of funnelStepProps is used to track the index of the current step in the funnel.
 * The context contains additional properties of the FunnelStep.
 */
export const useFunnelStep = () => {
    const context = useContext(FunnelStepContext);
    return context;
};
/**
 * Custom React Hook to manage and interact with Funnel.
 * This hook will provide necessary properties required to track
 * and manage interactions with a Funnel component.
 *
 * The 'data-analytics-funnel-interaction-id' property of funnelProps is used to track the unique identifier of the current interaction with the funnel.
 */
export const useFunnel = () => {
    const context = useContext(FunnelContext);
    const funnelProps = context.funnelInteractionId
        ? {
            [DATA_ATTR_FUNNEL_INTERACTION_ID]: context.funnelInteractionId,
        }
        : {};
    return Object.assign({ funnelProps }, context);
};
//# sourceMappingURL=use-funnel.js.map