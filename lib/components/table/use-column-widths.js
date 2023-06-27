// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect, useRef, useState, createContext, useContext } from 'react';
import headerCellStyles from './header-cell/styles.css.js';
export const DEFAULT_COLUMN_WIDTH = 120;
function readWidths(headerEl, visibleColumns) {
    const result = {};
    for (let index = 0; index < visibleColumns.length; index++) {
        const column = visibleColumns[index];
        let width = column.width || 0;
        const minWidth = column.minWidth || width || DEFAULT_COLUMN_WIDTH;
        if (!width && // read width from the DOM if it is missing in the config
            index !== visibleColumns.length - 1 // skip reading for the last column, because it expands to fully fit the container
        ) {
            const colIndex = index + 1;
            const colEl = headerEl.querySelector(`.${headerCellStyles['header-cell']}:nth-child(${colIndex})`);
            width = colEl.getBoundingClientRect().width;
        }
        result[column.id] = Math.max(width, minWidth);
    }
    return result;
}
function updateWidths(visibleColumns, oldWidths, newWidth, columnId) {
    const column = visibleColumns.find(column => column.id === columnId);
    const minWidth = typeof (column === null || column === void 0 ? void 0 : column.minWidth) === 'number' ? column.minWidth : DEFAULT_COLUMN_WIDTH;
    newWidth = Math.max(newWidth, minWidth);
    if (oldWidths[columnId] === newWidth) {
        return oldWidths;
    }
    return Object.assign(Object.assign({}, oldWidths), { [columnId]: newWidth });
}
const WidthsContext = createContext({
    totalWidth: 0,
    columnWidths: {},
    updateColumn: () => { },
});
export function ColumnWidthsProvider({ tableRef, visibleColumns, resizableColumns, children }) {
    const visibleColumnsRef = useRef(null);
    const [columnWidths, setColumnWidths] = useState({});
    // The widths of the dynamically added columns (after the first render) if not set explicitly
    // will default to the DEFAULT_COLUMN_WIDTH.
    useEffect(() => {
        if (!resizableColumns) {
            return;
        }
        const lastVisible = visibleColumnsRef.current;
        if (lastVisible) {
            for (let index = 0; index < visibleColumns.length; index++) {
                const column = visibleColumns[index];
                if (!columnWidths[column.id] && lastVisible.indexOf(column.id) === -1) {
                    setColumnWidths(columnWidths => (Object.assign(Object.assign({}, columnWidths), { [column.id]: column.width || DEFAULT_COLUMN_WIDTH })));
                }
            }
        }
        visibleColumnsRef.current = visibleColumns.map(column => column.id);
    }, [columnWidths, resizableColumns, visibleColumns]);
    // Read the actual column widths after the first render to employ the browser defaults for
    // those columns without explicit width.
    useEffect(() => {
        if (!resizableColumns) {
            return;
        }
        setColumnWidths(() => readWidths(tableRef.current, visibleColumns));
        // This code is intended to run only at the first render and should not re-run when table props change
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    function updateColumn(columnId, newWidth) {
        setColumnWidths(columnWidths => updateWidths(visibleColumns, columnWidths, newWidth, columnId));
    }
    const totalWidth = visibleColumns.reduce((total, column) => total + (columnWidths[column.id] || DEFAULT_COLUMN_WIDTH), 0);
    return React.createElement(WidthsContext.Provider, { value: { columnWidths, totalWidth, updateColumn } }, children);
}
export function useColumnWidths() {
    return useContext(WidthsContext);
}
//# sourceMappingURL=use-column-widths.js.map