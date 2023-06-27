import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import { getBaseProps } from '../internal/base-component';
import styles from './styles.css.js';
import InternalMixedLineBarChart from '../mixed-line-bar-chart/internal';
import useBaseComponent from '../internal/hooks/use-base-component';
function BarChart(_a) {
    var { series = [], height = 500, xScaleType = 'categorical', yScaleType = 'linear', stackedBars = false, horizontalBars = false, detailPopoverSize = 'medium', statusType = 'finished', emphasizeBaselineAxis = true } = _a, props = __rest(_a, ["series", "height", "xScaleType", "yScaleType", "stackedBars", "horizontalBars", "detailPopoverSize", "statusType", "emphasizeBaselineAxis"]);
    const baseComponentProps = useBaseComponent('BarChart');
    const baseProps = getBaseProps(props);
    const className = clsx(baseProps.className, styles.root);
    return (React.createElement(InternalMixedLineBarChart, Object.assign({}, props, baseComponentProps, { className: className, height: height, xScaleType: xScaleType, yScaleType: yScaleType, stackedBars: stackedBars, horizontalBars: horizontalBars, series: series, detailPopoverSize: detailPopoverSize, statusType: statusType, emphasizeBaselineAxis: emphasizeBaselineAxis })));
}
applyDisplayName(BarChart, 'BarChart');
export default BarChart;
//# sourceMappingURL=index.js.map