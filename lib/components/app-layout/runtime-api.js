import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect, useRef } from 'react';
function RuntimeContentWrapper({ mountContent, unmountContent }) {
    const ref = useRef(null);
    useEffect(() => {
        const container = ref.current;
        mountContent(container);
        return () => unmountContent(container);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return React.createElement("div", { ref: ref });
}
export function convertRuntimeDrawers(drawers) {
    const converted = drawers.map((_a) => {
        var { mountContent, unmountContent } = _a, runtimeDrawer = __rest(_a, ["mountContent", "unmountContent"]);
        return (Object.assign(Object.assign({}, runtimeDrawer), { content: (React.createElement(RuntimeContentWrapper, { key: runtimeDrawer.id, mountContent: mountContent, unmountContent: unmountContent })) }));
    });
    converted.sort((a, b) => {
        var _a, _b;
        if (b.orderPriority !== a.orderPriority) {
            return Math.sign(((_a = b.orderPriority) !== null && _a !== void 0 ? _a : 0) - ((_b = a.orderPriority) !== null && _b !== void 0 ? _b : 0));
        }
        return b.id < a.id ? 1 : -1;
    });
    return {
        before: converted.filter(item => { var _a; return ((_a = item.orderPriority) !== null && _a !== void 0 ? _a : 0) > 0; }),
        after: converted.filter(item => { var _a; return ((_a = item.orderPriority) !== null && _a !== void 0 ? _a : 0) <= 0; }),
    };
}
//# sourceMappingURL=runtime-api.js.map