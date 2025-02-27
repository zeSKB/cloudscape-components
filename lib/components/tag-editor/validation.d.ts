import { ComponentFormatFunction } from '../internal/i18n/context';
import { TagEditorProps } from './interfaces';
export interface ValidationError {
    key?: string;
    value?: string;
}
export declare function validate(tags: ReadonlyArray<TagEditorProps.Tag>, keyDirtyState: ReadonlyArray<boolean>, i18n: ComponentFormatFunction<'tag-editor'>, i18nStrings: TagEditorProps.I18nStrings | undefined, charRegex?: RegExp): ReadonlyArray<ValidationError | undefined>;
export declare const awsPrefixCheck: (value: string) => boolean;
export declare const emptyKeyCheck: (value: string) => boolean;
export declare const maxKeyLengthCheck: (value: string) => boolean | "";
export declare const duplicateKeyCheck: (value: string, keyCache?: Record<string, number | undefined>) => boolean;
export declare const maxValueLengthCheck: (value: string) => boolean | "";
export declare const invalidCharCheck: (value: string, validCharRegex?: RegExp) => boolean;
//# sourceMappingURL=validation.d.ts.map