// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React from 'react';
import InternalIcon from '../../icon/internal';
import { KeyCode } from '../../internal/keycode';
import { getAriaSort, getSortingIconName, getSortingStatus, isSorted } from './utils';
import styles from './styles.css.js';
import { Resizer } from '../resizer';
import { useUniqueId } from '../../internal/hooks/use-unique-id';
import { useStickyCellStyles } from '../use-sticky-columns';
import { getStickyClassNames } from '../utils';
import { useInternalI18n } from '../../internal/i18n/context';
export function TableHeaderCell({ className, style, tabIndex, column, activeSortingColumn, sortingDescending, sortingDisabled, wrapLines, focusedComponent, onFocusedComponentChange, hidden, onClick, colIndex, updateColumn, resizableColumns, onResizeFinish, isEditable, columnId, stickyState, }) {
    var _a;
    const i18n = useInternalI18n('table');
    const sortable = !!column.sortingComparator || !!column.sortingField;
    const sorted = !!activeSortingColumn && isSorted(column, activeSortingColumn);
    const sortingStatus = getSortingStatus(sortable, sorted, !!sortingDescending, !!sortingDisabled);
    const handleClick = () => onClick({
        sortingColumn: column,
        isDescending: sorted ? !sortingDescending : false,
    });
    // Elements with role="button" do not have the default behavior of <button>, where pressing
    // Enter or Space will trigger a click event. Therefore we need to add this ourselves.
    // The native <button> element cannot be used due to a misaligned implementation in Firefox:
    // https://bugzilla.mozilla.org/show_bug.cgi?id=843003
    const handleKeyPress = ({ nativeEvent: e }) => {
        if (e.keyCode === KeyCode.enter || e.keyCode === KeyCode.space) {
            e.preventDefault();
            handleClick();
        }
    };
    const headerId = useUniqueId('table-header-');
    const stickyStyles = useStickyCellStyles({
        stickyColumns: stickyState,
        columnId,
        getClassName: props => getStickyClassNames(styles, props),
    });
    return (React.createElement("th", { className: clsx(className, {
            [styles['header-cell-resizable']]: !!resizableColumns,
            [styles['header-cell-sortable']]: sortingStatus,
            [styles['header-cell-sorted']]: sortingStatus === 'ascending' || sortingStatus === 'descending',
            [styles['header-cell-disabled']]: sortingDisabled,
            [styles['header-cell-ascending']]: sortingStatus === 'ascending',
            [styles['header-cell-descending']]: sortingStatus === 'descending',
            [styles['header-cell-hidden']]: hidden,
        }, stickyStyles.className), "aria-sort": sortingStatus && getAriaSort(sortingStatus), style: Object.assign(Object.assign({}, style), stickyStyles.style), scope: "col", ref: stickyStyles.ref },
        React.createElement("div", Object.assign({ className: clsx(styles['header-cell-content'], {
                [styles['header-cell-fake-focus']]: (focusedComponent === null || focusedComponent === void 0 ? void 0 : focusedComponent.type) === 'column' && focusedComponent.col === colIndex,
            }), "aria-label": column.ariaLabel
                ? column.ariaLabel({
                    sorted: sorted,
                    descending: sorted && !!sortingDescending,
                    disabled: !!sortingDisabled,
                })
                : undefined }, (sortingStatus && !sortingDisabled
            ? {
                onKeyPress: handleKeyPress,
                tabIndex: tabIndex,
                role: 'button',
                onClick: handleClick,
                onFocus: () => onFocusedComponentChange === null || onFocusedComponentChange === void 0 ? void 0 : onFocusedComponentChange({ type: 'column', col: colIndex }),
                onBlur: () => onFocusedComponentChange === null || onFocusedComponentChange === void 0 ? void 0 : onFocusedComponentChange(null),
            }
            : {})),
            React.createElement("div", { className: clsx(styles['header-cell-text'], wrapLines && styles['header-cell-text-wrap']), id: headerId },
                column.header,
                isEditable ? (React.createElement("span", { className: styles['edit-icon'], role: "img", "aria-label": i18n('columnDefinitions.editConfig.editIconAriaLabel', (_a = column.editConfig) === null || _a === void 0 ? void 0 : _a.editIconAriaLabel) },
                    React.createElement(InternalIcon, { name: "edit" }))) : null),
            sortingStatus && (React.createElement("span", { className: styles['sorting-icon'] },
                React.createElement(InternalIcon, { name: getSortingIconName(sortingStatus) })))),
        resizableColumns && (React.createElement(React.Fragment, null,
            React.createElement(Resizer, { tabIndex: tabIndex, showFocusRing: (focusedComponent === null || focusedComponent === void 0 ? void 0 : focusedComponent.type) === 'resizer' && focusedComponent.col === colIndex, onDragMove: newWidth => updateColumn(columnId, newWidth), onFinish: onResizeFinish, ariaLabelledby: headerId, onFocus: () => onFocusedComponentChange === null || onFocusedComponentChange === void 0 ? void 0 : onFocusedComponentChange({ type: 'resizer', col: colIndex }), onBlur: () => onFocusedComponentChange === null || onFocusedComponentChange === void 0 ? void 0 : onFocusedComponentChange(null), minWidth: typeof column.minWidth === 'string' ? parseInt(column.minWidth) : column.minWidth })))));
}
//# sourceMappingURL=index.js.map