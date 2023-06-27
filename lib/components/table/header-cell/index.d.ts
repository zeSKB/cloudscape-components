import React from 'react';
import { TableProps } from '../interfaces';
import { InteractiveComponent } from '../thead';
import { StickyColumnsModel } from '../use-sticky-columns';
interface TableHeaderCellProps<ItemType> {
    className?: string;
    style?: React.CSSProperties;
    tabIndex: number;
    column: TableProps.ColumnDefinition<ItemType>;
    activeSortingColumn?: TableProps.SortingColumn<ItemType>;
    sortingDescending?: boolean;
    sortingDisabled?: boolean;
    wrapLines?: boolean;
    hidden?: boolean;
    onClick(detail: TableProps.SortingState<any>): void;
    onResizeFinish: () => void;
    colIndex: number;
    updateColumn: (columnId: PropertyKey, newWidth: number) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    resizableColumns?: boolean;
    isEditable?: boolean;
    columnId: PropertyKey;
    stickyState: StickyColumnsModel;
    focusedComponent?: InteractiveComponent | null;
    onFocusedComponentChange?: (element: InteractiveComponent | null) => void;
}
export declare function TableHeaderCell<ItemType>({ className, style, tabIndex, column, activeSortingColumn, sortingDescending, sortingDisabled, wrapLines, focusedComponent, onFocusedComponentChange, hidden, onClick, colIndex, updateColumn, resizableColumns, onResizeFinish, isEditable, columnId, stickyState, }: TableHeaderCellProps<ItemType>): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map