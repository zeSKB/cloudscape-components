import React from 'react';
import { TableProps } from './interfaces';
import { SelectionProps } from './use-selection';
import { NonCancelableEventHandler } from '../internal/events';
import { StickyColumnsModel } from './use-sticky-columns';
export type InteractiveComponent = {
    type: 'selection';
} | {
    type: 'column';
    col: number;
} | {
    type: 'resizer';
    col: number;
};
export interface TheadProps {
    containerWidth: number | null;
    selectionType: TableProps.SelectionType | undefined;
    columnDefinitions: ReadonlyArray<TableProps.ColumnDefinition<any>>;
    sortingColumn: TableProps.SortingColumn<any> | undefined;
    sortingDescending: boolean | undefined;
    sortingDisabled: boolean | undefined;
    variant: TableProps.Variant;
    wrapLines: boolean | undefined;
    resizableColumns: boolean | undefined;
    getSelectAllProps: () => SelectionProps;
    onFocusMove: ((sourceElement: HTMLElement, fromIndex: number, direction: -1 | 1) => void) | undefined;
    onResizeFinish: (newWidths: Record<string, number>) => void;
    onSortingChange: NonCancelableEventHandler<TableProps.SortingState<any>> | undefined;
    sticky?: boolean;
    hidden?: boolean;
    stuck?: boolean;
    singleSelectionHeaderAriaLabel?: string;
    stripedRows?: boolean;
    stickyState: StickyColumnsModel;
    selectionColumnId: PropertyKey;
    focusedComponent?: InteractiveComponent | null;
    onFocusedComponentChange?: (element: InteractiveComponent | null) => void;
}
declare const Thead: React.ForwardRefExoticComponent<TheadProps & React.RefAttributes<HTMLTableRowElement>>;
export default Thead;
//# sourceMappingURL=thead.d.ts.map