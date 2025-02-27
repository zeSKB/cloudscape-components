// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { forwardRef, memo } from 'react';
import HighlightedPoint from '../../internal/components/cartesian-chart/highlighted-point';
import { useSelector } from '../model/async-store';
export default memo(forwardRef(AreaHighlightedPoint));
function AreaHighlightedPoint({ model, ariaLabel, }, ref) {
    const highlightedPoint = useSelector(model.interactions, state => state.highlightedPoint);
    const isPopoverPinned = useSelector(model.interactions, state => state.isPopoverPinned);
    const point = highlightedPoint
        ? {
            key: `${highlightedPoint.index.x}:${highlightedPoint.index.s}`,
            x: highlightedPoint.scaled.x,
            y: highlightedPoint.scaled.y1,
            color: model.getInternalSeries(model.series[highlightedPoint.index.s]).color,
        }
        : null;
    return (React.createElement(HighlightedPoint, { ref: ref, point: point, role: "button", ariaLabel: ariaLabel, ariaHasPopup: true, ariaExpanded: isPopoverPinned }));
}
//# sourceMappingURL=highlighted-point.js.map