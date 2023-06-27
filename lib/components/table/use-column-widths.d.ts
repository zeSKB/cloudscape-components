import React from 'react';
export declare const DEFAULT_COLUMN_WIDTH = 120;
interface WidthsContext {
    totalWidth: number;
    columnWidths: Record<PropertyKey, number>;
    updateColumn: (columnId: PropertyKey, newWidth: number) => void;
}
declare const WidthsContext: React.Context<WidthsContext>;
interface WidthProviderProps {
    tableRef: React.MutableRefObject<HTMLElement | null>;
    visibleColumns: readonly Column[];
    resizableColumns: boolean | undefined;
    children: React.ReactNode;
}
interface Column {
    id: PropertyKey;
    minWidth?: string | number;
    width?: string | number;
}
export declare function ColumnWidthsProvider({ tableRef, visibleColumns, resizableColumns, children }: WidthProviderProps): JSX.Element;
export declare function useColumnWidths(): WidthsContext;
export {};
//# sourceMappingURL=use-column-widths.d.ts.map