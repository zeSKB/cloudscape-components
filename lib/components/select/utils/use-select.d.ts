import React, { RefObject } from 'react';
import { DropdownProps } from '../../internal/components/dropdown/interfaces';
import { DropdownOption, OptionDefinition } from '../../internal/components/option/interfaces';
import { OptionsListProps } from '../../internal/components/options-list';
import { FilterProps } from '../parts/filter';
import { ItemProps } from '../parts/item';
import { BaseKeyDetail, NonCancelableEventHandler } from '../../internal/events';
import { DropdownStatusProps } from '../../internal/components/dropdown-status';
export type MenuProps = Omit<OptionsListProps, 'children'> & {
    ref: React.RefObject<HTMLUListElement>;
};
export type GetOptionProps = (option: DropdownOption, index: number) => ItemProps;
interface UseSelectProps {
    selectedOptions: ReadonlyArray<OptionDefinition>;
    updateSelectedOption: (option: OptionDefinition) => void;
    options: ReadonlyArray<DropdownOption>;
    filteringType: string;
    keepOpen?: boolean;
    onBlur?: NonCancelableEventHandler;
    onFocus?: NonCancelableEventHandler;
    externalRef: React.Ref<any>;
    fireLoadItems: (filteringText: string) => void;
    setFilteringValue: (filteringText: string) => void;
    useInteractiveGroups?: boolean;
    statusType: DropdownStatusProps.StatusType;
}
export interface SelectTriggerProps {
    ref: RefObject<HTMLButtonElement>;
    onMouseDown?: (event: CustomEvent) => void;
    onKeyDown?: (event: CustomEvent<BaseKeyDetail>) => void;
    onFocus: NonCancelableEventHandler;
    autoFocus?: boolean;
}
export declare function useSelect({ selectedOptions, updateSelectedOption, options, filteringType, onBlur, onFocus, externalRef, keepOpen, fireLoadItems, setFilteringValue, useInteractiveGroups, statusType, }: UseSelectProps): {
    isOpen: boolean;
    highlightedOption: DropdownOption | undefined;
    highlightedIndex: number;
    highlightType: import("../../internal/components/options-list/utils/use-highlight-option").HighlightType;
    getTriggerProps: (disabled?: boolean, autoFocus?: boolean) => SelectTriggerProps;
    getDropdownProps: () => Pick<DropdownProps, 'onFocus' | 'onBlur'>;
    getMenuProps: () => MenuProps;
    getFilterProps: () => Partial<FilterProps>;
    getOptionProps: (option: DropdownOption, index: number) => any;
    highlightOption: (option: DropdownOption) => void;
    selectOption: (option?: DropdownOption) => void;
    announceSelected: boolean;
};
export {};
//# sourceMappingURL=use-select.d.ts.map