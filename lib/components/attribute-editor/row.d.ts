import React from 'react';
import { ColumnLayoutBreakpoint } from '../column-layout/internal';
import { AttributeEditorProps } from './interfaces';
import { ButtonProps } from '../button/interfaces';
import { NonCancelableEventHandler } from '../internal/events';
export interface RowProps<T> {
    breakpoint: ColumnLayoutBreakpoint | null;
    item: T;
    definition: ReadonlyArray<AttributeEditorProps.FieldDefinition<T>>;
    i18nStrings: AttributeEditorProps.I18nStrings | undefined;
    index: number;
    removable: boolean;
    removeButtonText?: string;
    removeButtonRefs: Array<ButtonProps.Ref | undefined>;
    onRemoveButtonClick?: NonCancelableEventHandler<AttributeEditorProps.RemoveButtonClickDetail>;
}
export declare const Row: React.MemoExoticComponent<(<T>({ breakpoint, item, definition, i18nStrings, index, removable, removeButtonText, removeButtonRefs, onRemoveButtonClick, }: RowProps<T>) => JSX.Element)>;
//# sourceMappingURL=row.d.ts.map