// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useEffect } from 'react';
import { useStableEventHandler } from '../use-stable-event-handler';
import { createSingletonHandler } from '../use-singleton-handler';
const useMutationSingleton = createSingletonHandler(handler => {
    const observer = new MutationObserver(() => handler());
    observer.observe(document.body, { attributes: true, subtree: true });
    return () => observer.disconnect();
});
/**
 * Fires onChange with the given target element as an argument every time any DOM node attribute changes.
 *
 * @deprecated The hook has performance implications. Consider alternatives.
 */
export function useMutationObserver(elementRef, onChange) {
    const handler = useStableEventHandler(() => {
        if (elementRef.current) {
            onChange(elementRef.current);
        }
    });
    useMutationSingleton(handler);
    useEffect(() => {
        handler();
    }, [handler]);
}
//# sourceMappingURL=index.js.map