// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { createContext } from 'react';
export const FunnelContext = createContext({
    funnelInteractionId: undefined,
    setFunnelInteractionId: () => { },
    funnelType: 'single-page',
    optionalStepNumbers: [],
    totalFunnelSteps: 0,
    funnelSubmit: () => { },
    funnelCancel: () => { },
});
export const FunnelStepContext = createContext({
    funnelInteractionId: undefined,
    stepNameSelector: '',
    stepNumber: 0,
    funnelStepProps: {},
});
export const FunnelSubStepContext = createContext({
    funnelInteractionId: undefined,
    subStepId: '',
    stepNumber: 0,
    stepNameSelector: '',
    subStepSelector: '',
    subStepNameSelector: '',
    funnelStepProps: {},
});
//# sourceMappingURL=analytics-context.js.map