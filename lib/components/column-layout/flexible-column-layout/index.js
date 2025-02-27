// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import flattenChildren from 'react-keyed-flatten-children';
import { useContainerQuery } from '../../internal/hooks/container-queries';
import styles from './styles.css.js';
const isOdd = (value) => value % 2 !== 0;
export function calculcateCssColumnCount(columns, minColumnWidth, containerWidth) {
    if (!containerWidth) {
        return columns;
    }
    // First, calculate how many columns we can have based on the current container width and minColumnWidth.
    const targetColumnCount = Math.min(columns, Math.floor(containerWidth / minColumnWidth));
    // When we start wrapping into fewer columns than desired, we want to keep the number of columns even.
    return Math.max(1, targetColumnCount < columns && isOdd(targetColumnCount) ? targetColumnCount - 1 : targetColumnCount);
}
export default function FlexibleColumnLayout({ columns = 1, minColumnWidth = 0, disableGutters, variant, children, }) {
    const [containerWidth, containerRef] = useContainerQuery(rect => rect.width);
    const columnCount = calculcateCssColumnCount(columns, minColumnWidth, containerWidth);
    const shouldDisableGutters = variant !== 'text-grid' && disableGutters;
    // Flattening the children allows us to "see through" React Fragments and nested arrays.
    const flattenedChildren = flattenChildren(children);
    return (React.createElement("div", { ref: containerRef, className: clsx(styles['css-grid'], styles[`grid-variant-${variant}`], shouldDisableGutters && [styles['grid-no-gutters']]), style: { gridTemplateColumns: `repeat(${columnCount}, 1fr)` } }, flattenedChildren.map((child, i) => {
        // If this react child is a primitive value, the key will be undefined
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const key = child.key;
        return (React.createElement("div", { key: key, className: clsx(styles.item, {
                [styles['first-column']]: i % columnCount === 0,
            }) }, child));
    })));
}
//# sourceMappingURL=index.js.map