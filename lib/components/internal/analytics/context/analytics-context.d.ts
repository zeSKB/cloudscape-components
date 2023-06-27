/// <reference types="react" />
import { FunnelType } from '../interfaces';
export interface BaseContextProps {
    funnelInteractionId: string | undefined;
}
export interface FunnelContextValue extends BaseContextProps {
    funnelType: FunnelType;
    optionalStepNumbers: number[];
    totalFunnelSteps: number;
    funnelSubmit: () => void;
    funnelCancel: () => void;
    setFunnelInteractionId: (funnelInteractionId: string) => void;
}
export interface FunnelStepContextValue extends BaseContextProps {
    stepNameSelector: string;
    stepNumber: number;
    funnelStepProps?: Record<string, string | number | boolean | undefined>;
}
export interface FunnelSubStepContextValue extends FunnelStepContextValue {
    subStepId: string;
    subStepSelector: string;
    subStepNameSelector: string;
    stepNumber: number;
    funnelSubStepProps?: Record<string, string | number | boolean | undefined>;
}
export declare const FunnelContext: import("react").Context<FunnelContextValue>;
export declare const FunnelStepContext: import("react").Context<FunnelStepContextValue>;
export declare const FunnelSubStepContext: import("react").Context<FunnelSubStepContextValue>;
//# sourceMappingURL=analytics-context.d.ts.map