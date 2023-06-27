// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useContext, useLayoutEffect } from 'react';
import { DynamicOverlapContext } from '../../context/dynamic-overlap-context';
import { useContainerQuery } from '../container-queries';
/**
 * Observes the height of an element referenced by the returning ref and sets the value as overlapping
 * height for the surrounding AppLayout component.
 * @param props.disabled disables hook if not applicable
 * @returns ref to be measured as overlapping height
 */
export function useDynamicOverlap(props) {
    var _a;
    const disabled = (_a = props === null || props === void 0 ? void 0 : props.disabled) !== null && _a !== void 0 ? _a : false;
    const setDynamicOverlapHeight = useContext(DynamicOverlapContext);
    const [overlapHeight, overlapElementRef] = useContainerQuery(rect => rect.height);
    useLayoutEffect(function handleDynamicOverlapHeight() {
        if (!disabled) {
            setDynamicOverlapHeight(overlapHeight !== null && overlapHeight !== void 0 ? overlapHeight : 0);
        }
        return () => {
            if (!disabled) {
                setDynamicOverlapHeight(0);
            }
        };
    }, [disabled, overlapHeight, setDynamicOverlapHeight]);
    return overlapElementRef;
}
//# sourceMappingURL=index.js.map