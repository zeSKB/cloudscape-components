import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { nodeContains } from '../internal/utils/dom';
import { useVisualRefresh } from '../internal/hooks/use-visual-mode';
import { getXTickCount, getYTickCount, createXTicks, createYTicks } from '../internal/components/cartesian-chart/ticks';
import ChartPlot from '../internal/components/chart-plot';
import AxisLabel from '../internal/components/cartesian-chart/axis-label';
import LabelsMeasure from '../internal/components/cartesian-chart/labels-measure';
import LeftLabels from '../internal/components/cartesian-chart/left-labels';
import BottomLabels from '../internal/components/cartesian-chart/bottom-labels';
import VerticalGridLines from '../internal/components/cartesian-chart/vertical-grid-lines';
import EmphasizedBaseline from '../internal/components/cartesian-chart/emphasized-baseline';
import HighlightedPoint from '../internal/components/cartesian-chart/highlighted-point';
import VerticalMarker from '../internal/components/cartesian-chart/vertical-marker';
import { ChartScale, NumericChartScale } from '../internal/components/cartesian-chart/scales';
import ChartPopover from './chart-popover';
import { computeDomainX, computeDomainY } from './domain';
import { isXThreshold } from './utils';
import makeScaledSeries from './make-scaled-series';
import makeScaledBarGroups from './make-scaled-bar-groups';
import formatHighlighted from './format-highlighted';
import DataSeries from './data-series';
import BarGroups from './bar-groups';
import { useMouseHover } from './hooks/use-mouse-hover';
import { useNavigation } from './hooks/use-navigation';
import { usePopover } from './hooks/use-popover';
import styles from './styles.css.js';
import useContainerWidth from '../internal/utils/use-container-width';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
const LEFT_LABELS_MARGIN = 16;
const BOTTOM_LABELS_OFFSET = 12;
export default function ChartContainer(_a) {
    var _b, _c;
    var { height: plotHeight, series, visibleSeries, highlightedSeries, onHighlightChange, highlightedPoint, setHighlightedPoint, highlightedGroupIndex, setHighlightedGroupIndex, detailPopoverSize = 'medium', stackedBars = false, horizontalBars = false, xScaleType, yScaleType, xTickFormatter, yTickFormatter, emphasizeBaselineAxis, xTitle, yTitle, ariaLabel, ariaLabelledby, ariaDescription, i18nStrings = {}, plotContainerRef } = _a, props = __rest(_a, ["height", "series", "visibleSeries", "highlightedSeries", "onHighlightChange", "highlightedPoint", "setHighlightedPoint", "highlightedGroupIndex", "setHighlightedGroupIndex", "detailPopoverSize", "stackedBars", "horizontalBars", "xScaleType", "yScaleType", "xTickFormatter", "yTickFormatter", "emphasizeBaselineAxis", "xTitle", "yTitle", "ariaLabel", "ariaLabelledby", "ariaDescription", "i18nStrings", "plotContainerRef"]);
    const plotRef = useRef(null);
    const verticalMarkerRef = useRef(null);
    const [leftLabelsWidth, setLeftLabelsWidth] = useState(0);
    const [bottomLabelsHeight, setBottomLabelsHeight] = useState(0);
    const [verticalMarkerX, setVerticalMarkerX] = useState(null);
    const [containerWidth, containerMeasureRef] = useContainerWidth(500);
    const plotWidth = containerWidth ? containerWidth - leftLabelsWidth - LEFT_LABELS_MARGIN : 500;
    const containerRefObject = useRef(null);
    const containerRef = useMergeRefs(containerMeasureRef, containerRefObject);
    const popoverRef = useRef(null);
    const isRefresh = useVisualRefresh();
    const linesOnly = series.every(({ series }) => series.type === 'line' || series.type === 'threshold');
    const xDomain = (props.xDomain || computeDomainX(series, xScaleType));
    const yDomain = (props.yDomain || computeDomainY(series, yScaleType, stackedBars));
    const xTickCount = getXTickCount(plotWidth);
    const yTickCount = getYTickCount(plotHeight);
    const rangeBottomTop = [0, plotHeight];
    const rangeTopBottom = [plotHeight, 0];
    const rangeLeftRight = [0, plotWidth];
    const xScale = new ChartScale(xScaleType, xDomain, horizontalBars ? rangeBottomTop : rangeLeftRight, linesOnly);
    const yScale = new NumericChartScale(yScaleType, yDomain, horizontalBars ? rangeLeftRight : rangeTopBottom, props.yDomain ? null : yTickCount);
    const xTicks = createXTicks(xScale, xTickCount);
    const yTicks = createYTicks(yScale, yTickCount);
    /**
     * Interactions
     */
    const highlightedPointRef = useRef(null);
    const highlightedGroupRef = useRef(null);
    const [isPlotFocused, setPlotFocused] = useState(false);
    // Some chart components are rendered against "x" or "y" axes,
    // When "horizontalBars" is enabled, the axes are inverted.
    const x = !horizontalBars ? 'x' : 'y';
    const y = !horizontalBars ? 'y' : 'x';
    const xy = {
        ticks: { x: xTicks, y: yTicks },
        scale: { x: xScale, y: yScale },
        tickFormatter: { x: xTickFormatter, y: yTickFormatter },
        title: { x: xTitle, y: yTitle },
        ariaRoleDescription: { x: i18nStrings.xAxisAriaRoleDescription, y: i18nStrings.yAxisAriaRoleDescription },
    };
    const scaledSeries = makeScaledSeries(visibleSeries, xScale, yScale);
    const barGroups = makeScaledBarGroups(visibleSeries, xScale, plotWidth, plotHeight, y);
    const { isPopoverOpen, isPopoverPinned, showPopover, pinPopover, dismissPopover } = usePopover();
    // Allows to add a delay between popover is dismissed and handlers are enabled to prevent immediate popover reopening.
    const [isHandlersDisabled, setHandlersDisabled] = useState(!isPopoverPinned);
    useEffect(() => {
        if (isPopoverPinned) {
            setHandlersDisabled(true);
        }
        else {
            const timeoutId = setTimeout(() => setHandlersDisabled(false), 25);
            return () => clearTimeout(timeoutId);
        }
    }, [isPopoverPinned]);
    const highlightSeries = useCallback((series) => {
        if (series !== highlightedSeries) {
            onHighlightChange(series);
        }
    }, [highlightedSeries, onHighlightChange]);
    const highlightPoint = useCallback((point) => {
        var _a, _b;
        setHighlightedGroupIndex(null);
        setHighlightedPoint(point);
        if (point) {
            highlightSeries(point.series);
            setVerticalMarkerX({
                scaledX: point.x,
                label: (_b = (_a = point.datum) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : null,
            });
        }
    }, [setHighlightedGroupIndex, setHighlightedPoint, highlightSeries]);
    const clearAllHighlights = useCallback(() => {
        setHighlightedPoint(null);
        highlightSeries(null);
        setHighlightedGroupIndex(null);
    }, [highlightSeries, setHighlightedGroupIndex, setHighlightedPoint]);
    // Highlight all points at a given X in a line chart
    const highlightX = useCallback((marker) => {
        if (marker) {
            clearAllHighlights();
        }
        setVerticalMarkerX(marker);
    }, [clearAllHighlights]);
    // Highlight all points and bars at a given X index in a mixed line and bar chart
    const highlightGroup = useCallback((groupIndex) => {
        highlightSeries(null);
        setHighlightedPoint(null);
        setHighlightedGroupIndex(groupIndex);
    }, [highlightSeries, setHighlightedPoint, setHighlightedGroupIndex]);
    const clearHighlightedSeries = useCallback(() => {
        clearAllHighlights();
        dismissPopover();
    }, [dismissPopover, clearAllHighlights]);
    const _d = useNavigation({
        series,
        visibleSeries,
        scaledSeries,
        barGroups,
        xScale,
        yScale,
        highlightedPoint,
        highlightedGroupIndex,
        highlightedSeries,
        isHandlersDisabled,
        pinPopover,
        highlightSeries,
        highlightGroup,
        highlightPoint,
        highlightX,
        clearHighlightedSeries,
        verticalMarkerX,
    }), { isGroupNavigation } = _d, handlers = __rest(_d, ["isGroupNavigation"]);
    const { onSVGMouseMove, onSVGMouseOut, onPopoverLeave } = useMouseHover({
        scaledSeries,
        barGroups,
        plotRef,
        popoverRef,
        highlightPoint,
        highlightGroup,
        clearHighlightedSeries,
        isGroupNavigation,
        isHandlersDisabled,
        highlightX,
    });
    // There are multiple ways to indicate what X is selected.
    // TODO: make a uniform verticalMarkerX state to fit all use-cases.
    const highlightedX = useMemo(() => {
        var _a, _b;
        if (highlightedGroupIndex !== null) {
            return barGroups[highlightedGroupIndex].x;
        }
        if (verticalMarkerX !== null) {
            return verticalMarkerX.label;
        }
        return (_b = (_a = highlightedPoint === null || highlightedPoint === void 0 ? void 0 : highlightedPoint.datum) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : null;
    }, [highlightedPoint, verticalMarkerX, highlightedGroupIndex, barGroups]);
    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.key === 'Escape') {
                dismissPopover();
            }
        };
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [dismissPopover]);
    useLayoutEffect(() => {
        if (highlightedX !== null || highlightedPoint !== null) {
            showPopover();
        }
    }, [highlightedX, highlightedPoint, showPopover]);
    const onPopoverDismiss = (outsideClick) => {
        dismissPopover();
        if (!outsideClick) {
            // The delay is needed to bypass focus events caused by click or keypress needed to unpin the popover.
            setTimeout(() => {
                var _a, _b;
                const isSomeInnerElementFocused = highlightedPoint || highlightedGroupIndex !== null || verticalMarkerX;
                if (isSomeInnerElementFocused) {
                    (_a = plotRef.current) === null || _a === void 0 ? void 0 : _a.focusApplication();
                }
                else {
                    (_b = plotRef.current) === null || _b === void 0 ? void 0 : _b.focusPlot();
                }
            }, 0);
        }
        else {
            clearAllHighlights();
            setVerticalMarkerX(null);
        }
    };
    const onSVGMouseDown = (e) => {
        if (isPopoverOpen) {
            if (isPopoverPinned) {
                dismissPopover();
            }
            else {
                pinPopover();
                e.preventDefault();
            }
        }
        else {
            showPopover();
        }
    };
    const onSVGFocus = (event, trigger) => {
        setPlotFocused(true);
        if (trigger === 'keyboard') {
            handlers.onFocus();
        }
        else {
            // noop: clicks are handled separately
        }
    };
    const onSVGBlur = (event) => {
        var _a;
        setPlotFocused(false);
        const blurTarget = event.relatedTarget || event.target;
        if (blurTarget === null ||
            !(blurTarget instanceof Element) ||
            !nodeContains(containerRefObject.current, blurTarget)) {
            setHighlightedPoint(null);
            setVerticalMarkerX(null);
            if (!((_a = plotContainerRef === null || plotContainerRef === void 0 ? void 0 : plotContainerRef.current) === null || _a === void 0 ? void 0 : _a.contains(blurTarget))) {
                clearHighlightedSeries();
            }
            if (isPopoverOpen && !isPopoverPinned) {
                dismissPopover();
            }
        }
    };
    const onSVGKeyDown = handlers.onKeyDown;
    const xOffset = xScale.isCategorical() ? Math.max(0, xScale.d3Scale.bandwidth() - 1) / 2 : 0;
    let verticalLineX = null;
    if (verticalMarkerX !== null) {
        verticalLineX = verticalMarkerX.scaledX;
    }
    else if (isGroupNavigation && highlightedGroupIndex !== null) {
        const x = (_b = xScale.d3Scale(barGroups[highlightedGroupIndex].x)) !== null && _b !== void 0 ? _b : null;
        if (x !== null) {
            verticalLineX = xOffset + x;
        }
    }
    const point = useMemo(() => highlightedPoint
        ? {
            key: `${highlightedPoint.x}-${highlightedPoint.y}`,
            x: highlightedPoint.x,
            y: highlightedPoint.y,
            color: highlightedPoint.color,
        }
        : null, [highlightedPoint]);
    const verticalMarkers = useMemo(() => verticalLineX !== null
        ? scaledSeries
            .filter(({ x, y }) => (x === verticalLineX || isNaN(x)) && !isNaN(y))
            .map(({ x, y, color }, index) => ({
            key: `${index}-${x}-${y}`,
            x: !horizontalBars ? verticalLineX || 0 : y,
            y: !horizontalBars ? y : verticalLineX || 0,
            color: color,
        }))
        : [], [scaledSeries, verticalLineX, horizontalBars]);
    const highlightedElementRef = isGroupNavigation
        ? highlightedGroupRef
        : highlightedPoint
            ? highlightedPointRef
            : verticalMarkerRef;
    const highlightDetails = useMemo(() => {
        if (highlightedX === null) {
            return null;
        }
        // When series point is highlighted show the corresponding series and matching x-thresholds.
        if (highlightedPoint) {
            const seriesToShow = visibleSeries.filter(series => series.series === (highlightedPoint === null || highlightedPoint === void 0 ? void 0 : highlightedPoint.series) || isXThreshold(series.series));
            return formatHighlighted(highlightedX, seriesToShow, xTickFormatter);
        }
        // Otherwise - show all visible series details.
        return formatHighlighted(highlightedX, visibleSeries, xTickFormatter);
    }, [highlightedX, highlightedPoint, visibleSeries, xTickFormatter]);
    const activeAriaLabel = useMemo(() => highlightDetails
        ? `${highlightDetails.position}, ${highlightDetails.details.map(d => d.key + ' ' + d.value).join(',')}`
        : '', [highlightDetails]);
    // Live region is used when nothing is focused e.g. when hovering.
    const activeLiveRegion = activeAriaLabel && !highlightedPoint && highlightedGroupIndex === null ? activeAriaLabel : '';
    const isLineXKeyboardFocused = isPlotFocused && !highlightedPoint && verticalMarkerX;
    return (React.createElement("div", { className: styles['chart-container'], ref: containerRef },
        React.createElement(AxisLabel, { axis: y, position: "left", title: xy.title[y] }),
        React.createElement("div", { className: styles['chart-container__horizontal'] },
            React.createElement(LabelsMeasure, { ticks: xy.ticks[y], scale: xy.scale[y], tickFormatter: xy.tickFormatter[y], autoWidth: setLeftLabelsWidth }),
            React.createElement("div", { className: styles['chart-container__vertical'] },
                React.createElement(ChartPlot, { ref: plotRef, width: plotWidth, height: plotHeight, offsetBottom: bottomLabelsHeight, isClickable: isPopoverOpen && !isPopoverPinned, ariaLabel: ariaLabel, ariaLabelledby: ariaLabelledby, ariaDescription: ariaDescription, ariaRoleDescription: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.chartAriaRoleDescription, ariaLiveRegion: activeLiveRegion, activeElementRef: highlightedElementRef, activeElementKey: isPlotFocused &&
                        ((_c = highlightedGroupIndex === null || highlightedGroupIndex === void 0 ? void 0 : highlightedGroupIndex.toString()) !== null && _c !== void 0 ? _c : (isLineXKeyboardFocused ? `point-index-${handlers.xIndex}` : point === null || point === void 0 ? void 0 : point.key)), activeElementFocusOffset: isGroupNavigation ? 0 : isLineXKeyboardFocused ? { x: 8, y: 0 } : 3, onMouseMove: onSVGMouseMove, onMouseOut: onSVGMouseOut, onMouseDown: onSVGMouseDown, onFocus: onSVGFocus, onBlur: onSVGBlur, onKeyDown: onSVGKeyDown },
                    React.createElement(LeftLabels, { axis: y, ticks: xy.ticks[y], scale: xy.scale[y], tickFormatter: xy.tickFormatter[y], title: xy.title[y], ariaRoleDescription: xy.ariaRoleDescription[y], width: plotWidth, height: plotHeight }),
                    horizontalBars && React.createElement(VerticalGridLines, { scale: yScale, ticks: yTicks, height: plotHeight }),
                    emphasizeBaselineAxis && linesOnly && (React.createElement(EmphasizedBaseline, { axis: x, scale: yScale, width: plotWidth, height: plotHeight })),
                    React.createElement(DataSeries, { axis: x, plotWidth: plotWidth, plotHeight: plotHeight, highlightedSeries: highlightedSeries !== null && highlightedSeries !== void 0 ? highlightedSeries : null, highlightedGroupIndex: highlightedGroupIndex, stackedBars: stackedBars, isGroupNavigation: isGroupNavigation, visibleSeries: visibleSeries, xScale: xScale, yScale: yScale }),
                    emphasizeBaselineAxis && !linesOnly && (React.createElement(EmphasizedBaseline, { axis: x, scale: yScale, width: plotWidth, height: plotHeight })),
                    React.createElement(VerticalMarker, { key: verticalLineX || '', height: plotHeight, showPoints: highlightedPoint === null, showLine: !isGroupNavigation, points: verticalMarkers, ref: verticalMarkerRef }),
                    highlightedPoint && (React.createElement(HighlightedPoint, { ref: highlightedPointRef, point: point, role: "button", ariaLabel: activeAriaLabel, ariaHasPopup: true, ariaExpanded: isPopoverPinned })),
                    isGroupNavigation && xScale.isCategorical() && (React.createElement(BarGroups, { ariaLabel: activeAriaLabel, isRefresh: isRefresh, isPopoverPinned: isPopoverPinned, barGroups: barGroups, highlightedGroupIndex: highlightedGroupIndex, highlightedGroupRef: highlightedGroupRef })),
                    React.createElement(BottomLabels, { axis: x, ticks: xy.ticks[x], scale: xy.scale[x], tickFormatter: xy.tickFormatter[x], title: xy.title[x], ariaRoleDescription: xy.ariaRoleDescription[x], height: plotHeight, width: plotWidth, offsetLeft: leftLabelsWidth + BOTTOM_LABELS_OFFSET, offsetRight: BOTTOM_LABELS_OFFSET, autoHeight: setBottomLabelsHeight })),
                React.createElement(AxisLabel, { axis: x, position: "bottom", title: xy.title[x] })),
            React.createElement(ChartPopover, { ref: popoverRef, containerRef: containerRefObject, trackRef: highlightedElementRef, isOpen: isPopoverOpen, isPinned: isPopoverPinned, highlightDetails: highlightDetails, onDismiss: onPopoverDismiss, size: detailPopoverSize, dismissAriaLabel: i18nStrings.detailPopoverDismissAriaLabel, onMouseLeave: onPopoverLeave }))));
}
//# sourceMappingURL=chart-container.js.map