// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useEffect, useState } from 'react';
import { unstable_batchedUpdates } from 'react-dom';
export function createSingletonHandler(factory) {
    const listeners = [];
    const callback = value => {
        unstable_batchedUpdates(() => {
            for (const listener of listeners) {
                listener(value);
            }
        });
    };
    let cleanup;
    return function useSingleton(listener) {
        useEffect(() => {
            if (listeners.length === 0) {
                cleanup = factory(callback);
            }
            listeners.push(listener);
            return () => {
                listeners.splice(listeners.indexOf(listener), 1);
                if (listeners.length === 0) {
                    cleanup();
                    cleanup = undefined;
                }
            };
            // register handlers only on mount
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);
    };
}
export function createSingletonState({ factory, initialState }) {
    const useSingleton = createSingletonHandler(factory);
    let value = initialState;
    return function useSingletonState() {
        const [state, setState] = useState(value);
        useSingleton(newValue => {
            value = newValue;
            setState(newValue);
        });
        return state;
    };
}
//# sourceMappingURL=index.js.map