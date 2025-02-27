/// <reference types="react" />
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
export declare const useFunnelSubStep: () => {
    subStepId: string;
    subStepSelector: string;
    subStepNameSelector: string;
    stepNumber: number;
    funnelSubStepProps: Record<string, any>;
    stepNameSelector: string;
    funnelStepProps?: Record<string, string | number | boolean | undefined> | undefined;
    funnelInteractionId: string | undefined;
    subStepRef: import("react").MutableRefObject<HTMLDivElement | null>;
};
/**
 * Custom React Hook to manage and interact with FunnelStep.
 * This hook will provide necessary properties required to track
 * and manage interactions with a FunnelStep component.
 *
 * The 'data-analytics-funnel-step' property of funnelStepProps is used to track the index of the current step in the funnel.
 * The context contains additional properties of the FunnelStep.
 */
export declare const useFunnelStep: () => import("../context/analytics-context").FunnelStepContextValue;
/**
 * Custom React Hook to manage and interact with Funnel.
 * This hook will provide necessary properties required to track
 * and manage interactions with a Funnel component.
 *
 * The 'data-analytics-funnel-interaction-id' property of funnelProps is used to track the unique identifier of the current interaction with the funnel.
 */
export declare const useFunnel: () => {
    funnelType: import("../interfaces").FunnelType;
    optionalStepNumbers: number[];
    totalFunnelSteps: number;
    funnelSubmit: () => void;
    funnelCancel: () => void;
    setFunnelInteractionId: (funnelInteractionId: string) => void;
    funnelInteractionId: string | undefined;
    funnelProps: Record<string, string | number | boolean | undefined>;
};
//# sourceMappingURL=use-funnel.d.ts.map