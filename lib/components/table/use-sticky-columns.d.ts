import React from 'react';
import AsyncStore from '../area-chart/model/async-store';
interface StickyColumnsProps {
    visibleColumns: readonly PropertyKey[];
    stickyColumnsFirst: number;
    stickyColumnsLast: number;
}
export interface StickyColumnsModel {
    isEnabled: boolean;
    store: StickyColumnsStore;
    style: {
        wrapper?: React.CSSProperties;
    };
    refs: {
        table: React.RefCallback<HTMLElement>;
        wrapper: React.RefCallback<HTMLElement>;
        cell: (columnId: PropertyKey, node: null | HTMLElement) => void;
    };
}
export interface StickyColumnsState {
    cellState: Record<PropertyKey, null | StickyColumnsCellState>;
    wrapperState: StickyColumnsWrapperState;
}
export interface StickyColumnsCellState {
    padLeft: boolean;
    lastLeft: boolean;
    lastRight: boolean;
    offset: {
        left?: number;
        right?: number;
    };
}
export interface StickyColumnsWrapperState {
    scrollPaddingLeft: number;
    scrollPaddingRight: number;
}
export declare function useStickyColumns({ visibleColumns, stickyColumnsFirst, stickyColumnsLast, }: StickyColumnsProps): StickyColumnsModel;
interface UseStickyCellStylesProps {
    stickyColumns: StickyColumnsModel;
    columnId: PropertyKey;
    getClassName: (styles: null | StickyColumnsCellState) => Record<string, boolean>;
}
interface StickyCellStyles {
    ref: React.RefCallback<HTMLElement>;
    className?: string;
    style?: React.CSSProperties;
}
export declare function useStickyCellStyles({ stickyColumns, columnId, getClassName, }: UseStickyCellStylesProps): StickyCellStyles;
interface UpdateCellStylesProps {
    wrapper: HTMLElement;
    table: HTMLElement;
    cells: Record<PropertyKey, HTMLElement>;
    visibleColumns: readonly PropertyKey[];
    stickyColumnsFirst: number;
    stickyColumnsLast: number;
}
export default class StickyColumnsStore extends AsyncStore<StickyColumnsState> {
    private cellOffsets;
    private stickyWidthLeft;
    private stickyWidthRight;
    private isStuckToTheLeft;
    private isStuckToTheRight;
    private padLeft;
    constructor();
    updateCellStyles(props: UpdateCellStylesProps): void;
    private updateScroll;
    private generateCellStyles;
    private updateCellOffsets;
    private isEnabled;
}
export {};
//# sourceMappingURL=use-sticky-columns.d.ts.map