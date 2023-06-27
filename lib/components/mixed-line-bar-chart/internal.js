import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import { getBaseProps } from '../internal/base-component';
import { fireNonCancelableEvent } from '../internal/events';
import InternalBox from '../box/internal';
import ChartStatusContainer, { getChartStatus } from '../internal/components/chart-status-container';
import { useControllable } from '../internal/hooks/use-controllable';
import { usePrevious } from '../internal/hooks/use-previous';
import { warnOnce } from '@cloudscape-design/component-toolkit/internal';
import InternalChartFilters from './chart-filters';
import InternalChartLegend from './chart-legend';
import ChartContainer from './chart-container';
import cartesianStyles from '../internal/components/cartesian-chart/styles.css.js';
import styles from './styles.css.js';
import { isDevelopment } from '../internal/is-development';
import createCategoryColorScale from '../internal/utils/create-category-color-scale';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
import { nodeContains } from '../internal/utils/dom';
import { isXThreshold, isYThreshold } from './utils';
export default function InternalMixedLineBarChart(_a) {
    var { height, xScaleType, yScaleType, xDomain, yDomain, highlightedSeries: controlledHighlightedSeries, visibleSeries: controlledVisibleSeries, series: externalSeries, onFilterChange, onHighlightChange: controlledOnHighlightChange, i18nStrings, ariaLabel, ariaLabelledby, ariaDescription, xTitle, yTitle, stackedBars, horizontalBars, hideFilter, additionalFilters, hideLegend, legendTitle, statusType, detailPopoverSize, emphasizeBaselineAxis, empty, noMatch, errorText, loadingText, recoveryText, onRecoveryClick, __internalRootRef = null } = _a, props = __rest(_a, ["height", "xScaleType", "yScaleType", "xDomain", "yDomain", "highlightedSeries", "visibleSeries", "series", "onFilterChange", "onHighlightChange", "i18nStrings", "ariaLabel", "ariaLabelledby", "ariaDescription", "xTitle", "yTitle", "stackedBars", "horizontalBars", "hideFilter", "additionalFilters", "hideLegend", "legendTitle", "statusType", "detailPopoverSize", "emphasizeBaselineAxis", "empty", "noMatch", "errorText", "loadingText", "recoveryText", "onRecoveryClick", "__internalRootRef"]);
    const baseProps = getBaseProps(props);
    const containerRef = useRef(null);
    useEffect(() => {
        const gotBarSeries = externalSeries.some(s => s.type === 'bar');
        const gotLineSeries = externalSeries.some(s => s.type === 'line');
        if (xScaleType !== 'categorical' && gotBarSeries) {
            warnOnce('MixedLineBarChart', `Bar series cannot be used with a ${xScaleType} scale. Use a categorical x axis instead.`);
        }
        if (horizontalBars && gotLineSeries) {
            warnOnce('MixedLineBarChart', `Property horizontalBars can only be used with charts that contain only bar or threshold series.`);
        }
        for (const s of externalSeries) {
            if (s.type === 'threshold' && s.x !== undefined && s.y !== undefined) {
                warnOnce('MixedLineBarChart', `Series of type "threshold" must contain either x or y property.`);
            }
            if (s.type === 'threshold' && s.x === undefined && s.y === undefined) {
                warnOnce('MixedLineBarChart', `Series of type "threshold" must contain either x or y property.`);
            }
        }
    }, [xScaleType, horizontalBars, externalSeries]);
    const series = useMemo(() => {
        // Generate series colors if not explicitly provided.
        // The thresholds use a dedicated colour scale.
        const colors = createCategoryColorScale(externalSeries, it => isYThreshold(it) || isXThreshold(it), it => it.color || null);
        return externalSeries.map((s, i) => ({ index: i, color: colors[i], series: s }));
    }, [externalSeries]);
    const [highlightedPoint, setHighlightedPoint] = useState(null);
    const [highlightedGroupIndex, setHighlightedGroupIndex] = useState(null);
    const [highlightedSeries = null, setHighlightedSeries] = useControllable(controlledHighlightedSeries, controlledOnHighlightChange, null, {
        componentName: 'MixedLineBarChart',
        controlledProp: 'highlightedSeries',
        changeHandler: 'onHighlightChange',
    });
    const [legendSeries, setLegendSeries] = useState(highlightedSeries);
    useEffect(() => {
        setLegendSeries(controlledHighlightedSeries || null);
    }, [controlledHighlightedSeries]);
    const [externalVisibleSeries, setExternalVisibleSeries] = useControllable(controlledVisibleSeries, onFilterChange, externalSeries, {
        componentName: 'MixedLineBarChart',
        controlledProp: 'visibleSeries',
        changeHandler: 'onFilterChange',
    });
    if (isDevelopment) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const previousSeries = usePrevious(externalSeries);
        const hasPrevious = !!(previousSeries && previousSeries.length);
        const hasCurrent = !!externalSeries.length;
        if (hasPrevious && hasCurrent && externalSeries !== previousSeries && !controlledVisibleSeries && !hideFilter) {
            warnOnce('MixedLineBarChart', 'The `series` value passed into the component changed. ' +
                'This may cause problems with filtering - we recommend that you make the `series` value constant, ' +
                'or provide a `visibleSeries` value that derives from the current `series` value.');
        }
    }
    const visibleSeries = useMemo(() => series.filter(s => (externalVisibleSeries === null || externalVisibleSeries === void 0 ? void 0 : externalVisibleSeries.indexOf(s.series)) !== -1), [series, externalVisibleSeries]);
    const filterChange = (selectedSeries) => {
        setExternalVisibleSeries(selectedSeries);
        fireNonCancelableEvent(onFilterChange, {
            visibleSeries: selectedSeries,
        });
    };
    const onHighlightChange = (series) => {
        setHighlightedSeries(series);
        fireNonCancelableEvent(controlledOnHighlightChange, {
            highlightedSeries: series,
        });
        setLegendSeries(series);
    };
    const onBlur = (event) => {
        if (event.relatedTarget && !nodeContains(containerRef.current, event.relatedTarget)) {
            highlightedSeries && onHighlightChange(highlightedSeries);
            setHighlightedPoint(null);
            setHighlightedGroupIndex(null);
            setLegendSeries(null);
        }
    };
    const { isEmpty, isNoMatch, showChart } = getChartStatus({
        externalData: externalSeries,
        visibleData: visibleSeries || [],
        statusType,
    });
    const showFilters = statusType === 'finished' && (!isEmpty || isNoMatch) && (additionalFilters || !hideFilter);
    const showLegend = !hideLegend && !isEmpty && statusType === 'finished';
    const reserveLegendSpace = !showChart && !hideLegend;
    const reserveFilterSpace = !showChart && !isNoMatch && (!hideFilter || additionalFilters);
    const mergedRef = useMergeRefs(containerRef, __internalRootRef);
    return (React.createElement("div", Object.assign({}, baseProps, { className: clsx(baseProps.className, styles.root), ref: mergedRef, onBlur: onBlur }),
        showFilters && (React.createElement(InternalBox, { className: cartesianStyles['filter-container'], margin: { bottom: 'l' } },
            React.createElement(InternalChartFilters, { series: series, visibleSeries: externalVisibleSeries || [], onChange: filterChange, i18nStrings: i18nStrings, hideFilter: hideFilter, additionalFilters: additionalFilters }))),
        React.createElement("div", { className: clsx(styles.content, {
                [styles['content--reserve-filter']]: reserveFilterSpace,
                [styles['content--reserve-legend']]: reserveLegendSpace,
            }), style: { minHeight: height } },
            React.createElement(ChartStatusContainer, { isEmpty: isEmpty, isNoMatch: isNoMatch, showChart: showChart, statusType: statusType, empty: empty, noMatch: noMatch, loadingText: loadingText, errorText: errorText, recoveryText: recoveryText, onRecoveryClick: onRecoveryClick }),
            showChart && (React.createElement(ChartContainer, { height: height, xScaleType: xScaleType, yScaleType: yScaleType, xDomain: xDomain, yDomain: yDomain, xTickFormatter: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.xTickFormatter, yTickFormatter: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.yTickFormatter, emphasizeBaselineAxis: emphasizeBaselineAxis, stackedBars: stackedBars, horizontalBars: horizontalBars, series: series, visibleSeries: visibleSeries, highlightedSeries: highlightedSeries, onHighlightChange: onHighlightChange, highlightedPoint: highlightedPoint, setHighlightedPoint: setHighlightedPoint, highlightedGroupIndex: highlightedGroupIndex, setHighlightedGroupIndex: setHighlightedGroupIndex, detailPopoverSize: detailPopoverSize, xTitle: xTitle, yTitle: yTitle, ariaLabel: ariaLabel, ariaLabelledby: ariaLabelledby, ariaDescription: ariaDescription, i18nStrings: i18nStrings, plotContainerRef: containerRef }))),
        showLegend && (React.createElement(InternalBox, { margin: { top: 'm' } },
            React.createElement(InternalChartLegend, { series: series, visibleSeries: externalVisibleSeries || [], highlightedSeries: legendSeries, onHighlightChange: onHighlightChange, legendTitle: legendTitle, ariaLabel: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.legendAriaLabel, plotContainerRef: containerRef })))));
}
//# sourceMappingURL=internal.js.map