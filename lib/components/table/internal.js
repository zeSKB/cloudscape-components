import { __awaiter, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React, { useImperativeHandle, useMemo, useRef, useState } from 'react';
import { getVisualContextClassname } from '../internal/components/visual-context';
import InternalContainer from '../container/internal';
import { getBaseProps } from '../internal/base-component';
import ToolsHeader from './tools-header';
import Thead from './thead';
import { TableBodyCell } from './body-cell';
import InternalStatusIndicator from '../status-indicator/internal';
import { useContainerQuery } from '../internal/hooks/container-queries';
import { supportsStickyPosition } from '../internal/utils/dom';
import SelectionControl from './selection-control';
import { checkSortingState, getColumnKey, getItemKey, getVisibleColumnDefinitions, toContainerVariant } from './utils';
import { useRowEvents } from './use-row-events';
import { focusMarkers, useFocusMove, useSelection } from './use-selection';
import { fireCancelableEvent, fireNonCancelableEvent } from '../internal/events';
import { isDevelopment } from '../internal/is-development';
import { ColumnWidthsProvider, DEFAULT_COLUMN_WIDTH } from './use-column-widths';
import { useScrollSync } from '../internal/hooks/use-scroll-sync';
import { ResizeTracker } from './resizer';
import styles from './styles.css.js';
import { useVisualRefresh } from '../internal/hooks/use-visual-mode';
import StickyHeader from './sticky-header';
import StickyScrollbar from './sticky-scrollbar';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
import useMouseDownTarget from '../internal/hooks/use-mouse-down-target';
import { useDynamicOverlap } from '../internal/hooks/use-dynamic-overlap';
import LiveRegion from '../internal/components/live-region';
import useTableFocusNavigation from './use-table-focus-navigation';
import { TableTdElement } from './body-cell/td-element';
import { useStickyColumns } from './use-sticky-columns';
import { checkColumnWidths } from './column-widths-utils';
const SELECTION_COLUMN_WIDTH = 54;
const selectionColumnId = Symbol('selection-column-id');
const InternalTable = React.forwardRef((_a, ref) => {
    var _b, _c, _d;
    var { header, footer, empty, filter, pagination, preferences, items, columnDefinitions, trackBy, loading, loadingText, selectionType, selectedItems, isItemDisabled, ariaLabels, onSelectionChange, onSortingChange, sortingColumn, sortingDescending, sortingDisabled, visibleColumns, stickyHeader, stickyHeaderVerticalOffset, onRowClick, onRowContextMenu, wrapLines, stripedRows, contentDensity, submitEdit, onEditCancel, resizableColumns, onColumnWidthsChange, variant, __internalRootRef, totalItemsCount, firstIndex, renderAriaLive, stickyColumns, columnDisplay } = _a, rest = __rest(_a, ["header", "footer", "empty", "filter", "pagination", "preferences", "items", "columnDefinitions", "trackBy", "loading", "loadingText", "selectionType", "selectedItems", "isItemDisabled", "ariaLabels", "onSelectionChange", "onSortingChange", "sortingColumn", "sortingDescending", "sortingDisabled", "visibleColumns", "stickyHeader", "stickyHeaderVerticalOffset", "onRowClick", "onRowContextMenu", "wrapLines", "stripedRows", "contentDensity", "submitEdit", "onEditCancel", "resizableColumns", "onColumnWidthsChange", "variant", "__internalRootRef", "totalItemsCount", "firstIndex", "renderAriaLive", "stickyColumns", "columnDisplay"]);
    const baseProps = getBaseProps(rest);
    stickyHeader = stickyHeader && supportsStickyPosition();
    const [containerWidth, wrapperMeasureRef] = useContainerQuery(({ width }) => width);
    const wrapperRefObject = useRef(null);
    const [tableWidth, tableMeasureRef] = useContainerQuery(({ width }) => width);
    const tableRefObject = useRef(null);
    const secondaryWrapperRef = React.useRef(null);
    const theadRef = useRef(null);
    const stickyHeaderRef = React.useRef(null);
    const scrollbarRef = React.useRef(null);
    const [currentEditCell, setCurrentEditCell] = useState(null);
    const [lastSuccessfulEditCell, setLastSuccessfulEditCell] = useState(null);
    const [currentEditLoading, setCurrentEditLoading] = useState(false);
    useImperativeHandle(ref, () => {
        var _a;
        return ({
            scrollToTop: ((_a = stickyHeaderRef.current) === null || _a === void 0 ? void 0 : _a.scrollToTop) || (() => undefined),
            cancelEdit: () => setCurrentEditCell(null),
        });
    }, []);
    const handleScroll = useScrollSync([wrapperRefObject, scrollbarRef, secondaryWrapperRef]);
    const { moveFocusDown, moveFocusUp, moveFocus } = useFocusMove(selectionType, items.length);
    const { onRowClickHandler, onRowContextMenuHandler } = useRowEvents({ onRowClick, onRowContextMenu });
    const visibleColumnDefinitions = getVisibleColumnDefinitions({
        columnDefinitions,
        columnDisplay,
        visibleColumns,
    });
    const { isItemSelected, getSelectAllProps, getItemSelectionProps, updateShiftToggle } = useSelection({
        items,
        trackBy,
        selectedItems,
        selectionType,
        isItemDisabled,
        onSelectionChange,
        ariaLabels,
        loading,
    });
    if (isDevelopment) {
        if (resizableColumns) {
            checkColumnWidths(columnDefinitions);
        }
        if (sortingColumn === null || sortingColumn === void 0 ? void 0 : sortingColumn.sortingComparator) {
            checkSortingState(columnDefinitions, sortingColumn.sortingComparator);
        }
    }
    const isVisualRefresh = useVisualRefresh();
    const computedVariant = isVisualRefresh
        ? variant
        : ['embedded', 'full-page'].indexOf(variant) > -1
            ? 'container'
            : variant;
    const hasHeader = !!(header || filter || pagination || preferences);
    const hasSelection = !!selectionType;
    const hasFooter = !!footer;
    const visibleColumnsWithSelection = useMemo(() => {
        const visible = visibleColumnDefinitions.map((column, columnIndex) => (Object.assign(Object.assign({}, column), { id: getColumnKey(column, columnIndex) })));
        return hasSelection ? [{ id: selectionColumnId, width: SELECTION_COLUMN_WIDTH }, ...visible] : visible;
    }, [visibleColumnDefinitions, hasSelection]);
    const visibleColumnIdsWithSelection = useMemo(() => visibleColumnsWithSelection.map(c => c.id), [visibleColumnsWithSelection]);
    const stickyState = useStickyColumns({
        visibleColumns: visibleColumnIdsWithSelection,
        stickyColumnsFirst: ((_b = stickyColumns === null || stickyColumns === void 0 ? void 0 : stickyColumns.first) !== null && _b !== void 0 ? _b : 0) + ((stickyColumns === null || stickyColumns === void 0 ? void 0 : stickyColumns.first) && hasSelection ? 1 : 0),
        stickyColumnsLast: (stickyColumns === null || stickyColumns === void 0 ? void 0 : stickyColumns.last) || 0,
    });
    const theadProps = {
        containerWidth,
        selectionType,
        getSelectAllProps,
        columnDefinitions: visibleColumnDefinitions,
        variant: computedVariant,
        wrapLines,
        resizableColumns,
        sortingColumn,
        sortingDisabled,
        sortingDescending,
        onSortingChange,
        onFocusMove: moveFocus,
        onResizeFinish(newWidth) {
            const widthsDetail = columnDefinitions.map((column, index) => newWidth[getColumnKey(column, index)] || column.width || DEFAULT_COLUMN_WIDTH);
            const widthsChanged = widthsDetail.some((width, index) => columnDefinitions[index].width !== width);
            if (widthsChanged) {
                fireNonCancelableEvent(onColumnWidthsChange, { widths: widthsDetail });
            }
        },
        singleSelectionHeaderAriaLabel: ariaLabels === null || ariaLabels === void 0 ? void 0 : ariaLabels.selectionGroupLabel,
        stripedRows,
        stickyState,
        selectionColumnId,
    };
    const wrapperRef = useMergeRefs(wrapperMeasureRef, wrapperRefObject, stickyState.refs.wrapper);
    const tableRef = useMergeRefs(tableMeasureRef, tableRefObject, stickyState.refs.table);
    // Allows keyboard users to scroll horizontally with arrow keys by making the wrapper part of the tab sequence
    const isWrapperScrollable = tableWidth && containerWidth && tableWidth > containerWidth;
    const wrapperProps = isWrapperScrollable
        ? { role: 'region', tabIndex: 0, 'aria-label': ariaLabels === null || ariaLabels === void 0 ? void 0 : ariaLabels.tableLabel }
        : {};
    const getMouseDownTarget = useMouseDownTarget();
    const wrapWithInlineLoadingState = (submitEdit) => {
        if (!submitEdit) {
            return undefined;
        }
        return (...args) => __awaiter(void 0, void 0, void 0, function* () {
            setCurrentEditLoading(true);
            try {
                yield submitEdit(...args);
            }
            finally {
                setCurrentEditLoading(false);
            }
        });
    };
    const hasDynamicHeight = computedVariant === 'full-page';
    const overlapElement = useDynamicOverlap({ disabled: !hasDynamicHeight });
    useTableFocusNavigation(selectionType, tableRefObject, visibleColumnDefinitions, items === null || items === void 0 ? void 0 : items.length);
    const toolsHeaderWrapper = useRef(null);
    // If is mobile, we take into consideration the AppLayout's mobile bar and we subtract the tools wrapper height so only the table header is sticky
    const toolsHeaderHeight = (_d = (_c = toolsHeaderWrapper === null || toolsHeaderWrapper === void 0 ? void 0 : toolsHeaderWrapper.current) === null || _c === void 0 ? void 0 : _c.getBoundingClientRect().height) !== null && _d !== void 0 ? _d : 0;
    return (React.createElement(ColumnWidthsProvider, { tableRef: tableRefObject, visibleColumns: visibleColumnsWithSelection, resizableColumns: resizableColumns },
        React.createElement(InternalContainer, Object.assign({}, baseProps, { __internalRootRef: __internalRootRef, className: clsx(baseProps.className, styles.root), header: React.createElement(React.Fragment, null,
                hasHeader && (React.createElement("div", { ref: overlapElement, className: clsx(hasDynamicHeight && [styles['dark-header'], 'awsui-context-content-header']) },
                    React.createElement("div", { ref: toolsHeaderWrapper, className: clsx(styles['header-controls'], styles[`variant-${computedVariant}`]) },
                        React.createElement(ToolsHeader, { header: header, filter: filter, pagination: pagination, preferences: preferences })))),
                stickyHeader && (React.createElement(StickyHeader, { ref: stickyHeaderRef, variant: computedVariant, theadProps: theadProps, wrapperRef: wrapperRefObject, theadRef: theadRef, secondaryWrapperRef: secondaryWrapperRef, tableRef: tableRefObject, onScroll: handleScroll, tableHasHeader: hasHeader, contentDensity: contentDensity }))), disableHeaderPaddings: true, disableContentPaddings: true, variant: toContainerVariant(computedVariant), __disableFooterPaddings: true, __disableFooterDivider: true, __disableStickyMobile: false, footer: footer && (React.createElement("div", { className: clsx(styles['footer-wrapper'], styles[`variant-${computedVariant}`]) },
                React.createElement("div", { className: styles.footer }, footer))), __stickyHeader: stickyHeader, __mobileStickyOffset: toolsHeaderHeight, __stickyOffset: stickyHeaderVerticalOffset }, focusMarkers.root),
            React.createElement("div", Object.assign({ ref: wrapperRef, className: clsx(styles.wrapper, styles[`variant-${computedVariant}`], {
                    [styles['has-footer']]: hasFooter,
                    [styles['has-header']]: hasHeader,
                }), onScroll: handleScroll }, wrapperProps),
                !!renderAriaLive && !!firstIndex && (React.createElement(LiveRegion, null,
                    React.createElement("span", null, renderAriaLive({ totalItemsCount, firstIndex, lastIndex: firstIndex + items.length - 1 })))),
                React.createElement("table", { ref: tableRef, className: clsx(styles.table, resizableColumns && styles['table-layout-fixed'], contentDensity === 'compact' && getVisualContextClassname('compact-table')), 
                    // Browsers have weird mechanism to guess whether it's a data table or a layout table.
                    // If we state explicitly, they get it always correctly even with low number of rows.
                    role: "table", "aria-label": ariaLabels === null || ariaLabels === void 0 ? void 0 : ariaLabels.tableLabel, "aria-rowcount": totalItemsCount ? totalItemsCount + 1 : -1 },
                    React.createElement(Thead, Object.assign({ ref: theadRef, hidden: stickyHeader, onFocusedComponentChange: component => { var _a; return (_a = stickyHeaderRef.current) === null || _a === void 0 ? void 0 : _a.setFocus(component); } }, theadProps)),
                    React.createElement("tbody", null, loading || items.length === 0 ? (React.createElement("tr", null,
                        React.createElement("td", { colSpan: selectionType ? visibleColumnDefinitions.length + 1 : visibleColumnDefinitions.length, className: clsx(styles['cell-merged'], hasFooter && styles['has-footer']) },
                            React.createElement("div", { className: styles['cell-merged-content'], style: {
                                    width: (supportsStickyPosition() && containerWidth && Math.floor(containerWidth)) || undefined,
                                } }, loading ? (React.createElement(InternalStatusIndicator, { type: "loading", className: styles.loading, wrapText: true },
                                React.createElement(LiveRegion, { visible: true }, loadingText))) : (React.createElement("div", { className: styles.empty }, empty)))))) : (items.map((item, rowIndex) => {
                        const firstVisible = rowIndex === 0;
                        const lastVisible = rowIndex === items.length - 1;
                        const isEven = rowIndex % 2 === 0;
                        const isSelected = !!selectionType && isItemSelected(item);
                        const isPrevSelected = !!selectionType && !firstVisible && isItemSelected(items[rowIndex - 1]);
                        const isNextSelected = !!selectionType && !lastVisible && isItemSelected(items[rowIndex + 1]);
                        return (React.createElement("tr", Object.assign({ key: getItemKey(trackBy, item, rowIndex), className: clsx(styles.row, isSelected && styles['row-selected']), onFocus: ({ currentTarget }) => {
                                var _a;
                                // When an element inside table row receives focus we want to adjust the scroll.
                                // However, that behaviour is unwanted when the focus is received as result of a click
                                // as it causes the click to never reach the target element.
                                if (!currentTarget.contains(getMouseDownTarget())) {
                                    (_a = stickyHeaderRef.current) === null || _a === void 0 ? void 0 : _a.scrollToRow(currentTarget);
                                }
                            } }, focusMarkers.item, { onClick: onRowClickHandler && onRowClickHandler.bind(null, rowIndex, item), onContextMenu: onRowContextMenuHandler && onRowContextMenuHandler.bind(null, rowIndex, item), "aria-rowindex": firstIndex ? firstIndex + rowIndex + 1 : undefined }),
                            selectionType !== undefined && (React.createElement(TableTdElement, { className: clsx(styles['selection-control']), isVisualRefresh: isVisualRefresh, isFirstRow: firstVisible, isLastRow: lastVisible, isSelected: isSelected, isNextSelected: isNextSelected, isPrevSelected: isPrevSelected, wrapLines: false, isEvenRow: isEven, stripedRows: stripedRows, hasSelection: hasSelection, hasFooter: hasFooter, stickyState: stickyState, columnId: selectionColumnId },
                                React.createElement(SelectionControl, Object.assign({ onFocusDown: moveFocusDown, onFocusUp: moveFocusUp, onShiftToggle: updateShiftToggle }, getItemSelectionProps(item))))),
                            visibleColumnDefinitions.map((column, colIndex) => {
                                var _a;
                                const isEditing = !!currentEditCell && currentEditCell[0] === rowIndex && currentEditCell[1] === colIndex;
                                const successfulEdit = !!lastSuccessfulEditCell &&
                                    lastSuccessfulEditCell[0] === rowIndex &&
                                    lastSuccessfulEditCell[1] === colIndex;
                                const isEditable = !!column.editConfig && !currentEditLoading;
                                return (React.createElement(TableBodyCell, { key: getColumnKey(column, colIndex), style: resizableColumns
                                        ? {}
                                        : {
                                            width: column.width,
                                            minWidth: column.minWidth,
                                            maxWidth: column.maxWidth,
                                        }, ariaLabels: ariaLabels, column: column, item: item, wrapLines: wrapLines, isEditable: isEditable, isEditing: isEditing, isRowHeader: column.isRowHeader, isFirstRow: firstVisible, isLastRow: lastVisible, isSelected: isSelected, isNextSelected: isNextSelected, isPrevSelected: isPrevSelected, successfulEdit: successfulEdit, onEditStart: () => {
                                        setLastSuccessfulEditCell(null);
                                        setCurrentEditCell([rowIndex, colIndex]);
                                    }, onEditEnd: editCancelled => {
                                        const eventCancelled = fireCancelableEvent(onEditCancel, {});
                                        if (!eventCancelled) {
                                            setCurrentEditCell(null);
                                            if (!editCancelled) {
                                                setLastSuccessfulEditCell([rowIndex, colIndex]);
                                            }
                                        }
                                    }, submitEdit: wrapWithInlineLoadingState(submitEdit), hasFooter: hasFooter, stripedRows: stripedRows, isEvenRow: isEven, columnId: (_a = column.id) !== null && _a !== void 0 ? _a : colIndex, stickyState: stickyState, isVisualRefresh: isVisualRefresh }));
                            })));
                    })))),
                resizableColumns && React.createElement(ResizeTracker, null)),
            React.createElement(StickyScrollbar, { ref: scrollbarRef, wrapperRef: wrapperRefObject, tableRef: tableRefObject, onScroll: handleScroll }))));
});
export default InternalTable;
//# sourceMappingURL=internal.js.map