// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useState, useEffect, memo, useRef } from 'react';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
import ChartPlot from '../internal/components/chart-plot';
import AxisLabel from '../internal/components/cartesian-chart/axis-label';
import LabelsMeasure from '../internal/components/cartesian-chart/labels-measure';
import LeftLabels from '../internal/components/cartesian-chart/left-labels';
import BottomLabels from '../internal/components/cartesian-chart/bottom-labels';
import EmphasizedBaseline from '../internal/components/cartesian-chart/emphasized-baseline';
import AreaDataSeries from './elements/data-series';
import AreaChartPopover from './elements/chart-popover';
import AreaHighlightedPoint from './elements/highlighted-point';
import AreaVerticalMarker from './elements/vertical-marker';
import styles from './styles.css.js';
import useHighlightDetails from './elements/use-highlight-details';
import useContainerWidth from '../internal/utils/use-container-width';
const DEFAULT_CHART_WIDTH = 500;
const LEFT_LABELS_MARGIN = 16;
const BOTTOM_LABELS_OFFSET = 12;
export default memo(ChartContainer);
function ChartContainer({ model, autoWidth, xTitle, yTitle, detailPopoverSize, ariaLabel, ariaLabelledby, ariaDescription, i18nStrings: { xTickFormatter, yTickFormatter, detailTotalFormatter, detailTotalLabel, chartAriaRoleDescription, xAxisAriaRoleDescription, yAxisAriaRoleDescription, detailPopoverDismissAriaLabel, } = {}, }) {
    const [leftLabelsWidth, setLeftLabelsWidth] = useState(0);
    const [bottomLabelsHeight, setBottomLabelsHeight] = useState(0);
    const [containerWidth, containerWidthRef] = useContainerWidth(DEFAULT_CHART_WIDTH);
    // Calculate the width of the plot area and tell it to the parent.
    const plotWidth = Math.max(0, containerWidth - leftLabelsWidth - LEFT_LABELS_MARGIN);
    useEffect(() => {
        autoWidth(plotWidth);
    }, [autoWidth, plotWidth]);
    const highlightDetails = useHighlightDetails({
        model,
        xTickFormatter,
        yTickFormatter,
        detailTotalFormatter,
        detailTotalLabel,
    });
    const highlightedPointRef = useRef(null);
    const mergedRef = useMergeRefs(containerWidthRef, model.refs.container);
    const isPointHighlighted = model.interactions.get().highlightedPoint !== null;
    return (React.createElement("div", { className: styles['chart-container'], ref: mergedRef },
        React.createElement(AxisLabel, { axis: "y", position: "left", title: yTitle }),
        React.createElement("div", { className: styles['chart-container__horizontal'] },
            React.createElement(LabelsMeasure, { scale: model.computed.yScale, ticks: model.computed.yTicks, tickFormatter: yTickFormatter, autoWidth: setLeftLabelsWidth }),
            React.createElement("div", { className: styles['chart-container__vertical'] },
                React.createElement(ChartPlot, { ref: model.refs.plot, width: model.width, height: model.height, offsetBottom: bottomLabelsHeight, ariaLabel: ariaLabel, ariaLabelledby: ariaLabelledby, ariaDescription: ariaDescription, ariaRoleDescription: chartAriaRoleDescription, activeElementKey: !(highlightDetails === null || highlightDetails === void 0 ? void 0 : highlightDetails.isPopoverPinned) && (highlightDetails === null || highlightDetails === void 0 ? void 0 : highlightDetails.activeLabel), activeElementRef: isPointHighlighted ? highlightedPointRef : model.refs.verticalMarker, activeElementFocusOffset: isPointHighlighted ? 3 : { x: 8, y: 0 }, isClickable: !(highlightDetails === null || highlightDetails === void 0 ? void 0 : highlightDetails.isPopoverPinned), onMouseMove: model.handlers.onSVGMouseMove, onMouseOut: model.handlers.onSVGMouseOut, onMouseDown: model.handlers.onSVGMouseDown, onKeyDown: model.handlers.onSVGKeyDown, onFocus: model.handlers.onSVGFocus, onBlur: model.handlers.onSVGBlur },
                    React.createElement(LeftLabels, { width: model.width, height: model.height, scale: model.computed.yScale, ticks: model.computed.yTicks, tickFormatter: yTickFormatter, title: yTitle, ariaRoleDescription: yAxisAriaRoleDescription }),
                    React.createElement(AreaDataSeries, { model: model }),
                    React.createElement(BottomLabels, { width: model.width, height: model.height, scale: model.computed.xScale, ticks: model.computed.xTicks, tickFormatter: xTickFormatter, title: xTitle, ariaRoleDescription: xAxisAriaRoleDescription, autoHeight: setBottomLabelsHeight, offsetLeft: leftLabelsWidth + BOTTOM_LABELS_OFFSET, offsetRight: BOTTOM_LABELS_OFFSET }),
                    React.createElement(EmphasizedBaseline, { width: model.width, height: model.height, scale: model.computed.yScale }),
                    React.createElement(AreaVerticalMarker, { model: model }),
                    React.createElement(AreaHighlightedPoint, { ref: highlightedPointRef, model: model, ariaLabel: highlightDetails === null || highlightDetails === void 0 ? void 0 : highlightDetails.activeLabel })),
                React.createElement(AxisLabel, { axis: "x", position: "bottom", title: xTitle })),
            React.createElement(AreaChartPopover, { model: model, highlightDetails: highlightDetails, dismissAriaLabel: detailPopoverDismissAriaLabel, size: detailPopoverSize }))));
}
//# sourceMappingURL=chart-container.js.map