/// <reference types="react" />
export interface UseDynamicOverlapProps {
    /**
     * Disables hook if not needed. By default, `false`.
     */
    disabled?: boolean;
}
/**
 * Observes the height of an element referenced by the returning ref and sets the value as overlapping
 * height for the surrounding AppLayout component.
 * @param props.disabled disables hook if not applicable
 * @returns ref to be measured as overlapping height
 */
export declare function useDynamicOverlap(props?: UseDynamicOverlapProps): import("react").Ref<any>;
//# sourceMappingURL=index.d.ts.map