import React from 'react';
import { StickyColumnsModel } from '../use-sticky-columns';
export interface TableTdElementProps {
    className?: string;
    style?: React.CSSProperties;
    wrapLines: boolean | undefined;
    isRowHeader?: boolean;
    isFirstRow: boolean;
    isLastRow: boolean;
    isSelected: boolean;
    isNextSelected: boolean;
    isPrevSelected: boolean;
    nativeAttributes?: Omit<React.TdHTMLAttributes<HTMLTableCellElement> | React.ThHTMLAttributes<HTMLTableCellElement>, 'style' | 'className' | 'onClick'>;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    children?: React.ReactNode;
    isEvenRow?: boolean;
    stripedRows?: boolean;
    hasSelection?: boolean;
    hasFooter?: boolean;
    columnId: PropertyKey;
    stickyState: StickyColumnsModel;
    isVisualRefresh?: boolean;
}
export declare const TableTdElement: React.ForwardRefExoticComponent<TableTdElementProps & React.RefAttributes<HTMLTableCellElement>>;
//# sourceMappingURL=td-element.d.ts.map