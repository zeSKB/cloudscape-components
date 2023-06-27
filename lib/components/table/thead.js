// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React from 'react';
import SelectionControl from './selection-control';
import { focusMarkers } from './use-selection';
import { fireNonCancelableEvent } from '../internal/events';
import { getColumnKey, getStickyClassNames } from './utils';
import { TableHeaderCell } from './header-cell';
import { useColumnWidths } from './use-column-widths';
import { useVisualRefresh } from '../internal/hooks/use-visual-mode';
import { useStickyCellStyles } from './use-sticky-columns';
import styles from './styles.css.js';
import cellStyles from './header-cell/styles.css.js';
import headerCellStyles from './header-cell/styles.css.js';
import ScreenreaderOnly from '../internal/components/screenreader-only';
const Thead = React.forwardRef(({ containerWidth, selectionType, getSelectAllProps, columnDefinitions, sortingColumn, sortingDisabled, sortingDescending, resizableColumns, variant, wrapLines, onFocusMove, onSortingChange, onResizeFinish, singleSelectionHeaderAriaLabel, stripedRows, sticky = false, hidden = false, stuck = false, stickyState, selectionColumnId, focusedComponent, onFocusedComponentChange, }, outerRef) => {
    const isVisualRefresh = useVisualRefresh();
    const headerCellClass = clsx(headerCellStyles['header-cell'], headerCellStyles[`header-cell-variant-${variant}`], sticky && headerCellStyles['header-cell-sticky'], stuck && headerCellStyles['header-cell-stuck'], stripedRows && headerCellStyles['has-striped-rows'], isVisualRefresh && headerCellStyles['is-visual-refresh']);
    const selectionCellClass = clsx(styles['selection-control'], styles['selection-control-header'], isVisualRefresh && styles['is-visual-refresh']);
    const { columnWidths, totalWidth, updateColumn } = useColumnWidths();
    const stickyStyles = useStickyCellStyles({
        stickyColumns: stickyState,
        columnId: selectionColumnId,
        getClassName: props => getStickyClassNames(cellStyles, props),
    });
    return (React.createElement("thead", { className: clsx(!hidden && styles['thead-active']) },
        React.createElement("tr", Object.assign({}, focusMarkers.all, { ref: outerRef, "aria-rowindex": 1 }),
            selectionType ? (React.createElement("th", { className: clsx(headerCellClass, selectionCellClass, hidden && headerCellStyles['header-cell-hidden'], stickyStyles.className), style: stickyStyles.style, ref: stickyStyles.ref, scope: "col" }, selectionType === 'multi' ? (React.createElement(SelectionControl, Object.assign({ onFocusDown: event => {
                    onFocusMove(event.target, -1, +1);
                }, focusedComponent: focusedComponent, onFocusedComponentChange: onFocusedComponentChange }, getSelectAllProps(), (sticky ? { tabIndex: -1 } : {})))) : (React.createElement(ScreenreaderOnly, null, singleSelectionHeaderAriaLabel)))) : null,
            columnDefinitions.map((column, colIndex) => {
                var _a;
                let widthOverride;
                if (resizableColumns) {
                    if (columnWidths) {
                        // use stateful value if available
                        widthOverride = columnWidths[getColumnKey(column, colIndex)];
                    }
                    if (colIndex === columnDefinitions.length - 1 && containerWidth && containerWidth > totalWidth) {
                        // let the last column grow and fill the container width
                        widthOverride = 'auto';
                    }
                }
                return (React.createElement(TableHeaderCell, { key: getColumnKey(column, colIndex), className: headerCellClass, style: {
                        width: widthOverride || column.width,
                        minWidth: sticky ? undefined : column.minWidth,
                        maxWidth: resizableColumns || sticky ? undefined : column.maxWidth,
                    }, tabIndex: sticky ? -1 : 0, focusedComponent: focusedComponent, onFocusedComponentChange: onFocusedComponentChange, column: column, activeSortingColumn: sortingColumn, sortingDescending: sortingDescending, sortingDisabled: sortingDisabled, wrapLines: wrapLines, hidden: hidden, colIndex: colIndex, columnId: (_a = column.id) !== null && _a !== void 0 ? _a : colIndex, updateColumn: updateColumn, onResizeFinish: () => onResizeFinish(columnWidths), resizableColumns: resizableColumns, onClick: detail => fireNonCancelableEvent(onSortingChange, detail), isEditable: !!column.editConfig, stickyState: stickyState }));
            }))));
});
export default Thead;
//# sourceMappingURL=thead.js.map