import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import styles from './styles.css.js';
import React, { useEffect, useRef, useState } from 'react';
import Icon from '../../icon/internal';
import { TableTdElement } from './td-element';
import { InlineEditor } from './inline-editor';
import LiveRegion from '../../internal/components/live-region/index.js';
import { useInternalI18n } from '../../internal/i18n/context';
const submitHandlerFallback = () => {
    throw new Error('The function `handleSubmit` is required for editable columns');
};
function TableCellEditable(_a) {
    var _b, _c, _d;
    var { className, item, column, isEditing, onEditStart, onEditEnd, submitEdit, ariaLabels, isVisualRefresh, successfulEdit = false } = _a, rest = __rest(_a, ["className", "item", "column", "isEditing", "onEditStart", "onEditEnd", "submitEdit", "ariaLabels", "isVisualRefresh", "successfulEdit"]);
    const i18n = useInternalI18n('table');
    const editActivateRef = useRef(null);
    const tdNativeAttributes = {
        'data-inline-editing-active': isEditing.toString(),
    };
    const isFocusMoveNeededRef = useRef(false);
    useEffect(() => {
        if (!isEditing && editActivateRef.current && isFocusMoveNeededRef.current) {
            isFocusMoveNeededRef.current = false;
            editActivateRef.current.focus();
        }
    }, [isEditing]);
    // To improve the initial page render performance we only show the edit icon when necessary.
    const [hasHover, setHasHover] = useState(false);
    const [hasFocus, setHasFocus] = useState(false);
    const showIcon = hasHover || hasFocus;
    return (React.createElement(TableTdElement, Object.assign({}, rest, { nativeAttributes: tdNativeAttributes, className: clsx(className, styles['body-cell-editable'], isEditing && styles['body-cell-edit-active'], successfulEdit && styles['body-cell-has-success'], isVisualRefresh && styles['is-visual-refresh']), onClick: !isEditing ? onEditStart : undefined, onMouseEnter: () => setHasHover(true), onMouseLeave: () => setHasHover(false) }), isEditing ? (React.createElement(InlineEditor, { ariaLabels: ariaLabels, column: column, item: item, onEditEnd: e => {
            isFocusMoveNeededRef.current = true;
            onEditEnd(e);
        }, submitEdit: submitEdit !== null && submitEdit !== void 0 ? submitEdit : submitHandlerFallback })) : (React.createElement(React.Fragment, null,
        column.cell(item),
        successfulEdit && (React.createElement(React.Fragment, null,
            React.createElement("span", { className: styles['body-cell-success'], "aria-label": (_b = ariaLabels === null || ariaLabels === void 0 ? void 0 : ariaLabels.successfulEditLabel) === null || _b === void 0 ? void 0 : _b.call(ariaLabels, column), role: "img" },
                React.createElement(Icon, { name: "status-positive", variant: "success" })),
            React.createElement(LiveRegion, null, i18n('ariaLabels.successfulEditLabel', (_c = ariaLabels === null || ariaLabels === void 0 ? void 0 : ariaLabels.successfulEditLabel) === null || _c === void 0 ? void 0 : _c.call(ariaLabels, column))))),
        React.createElement("button", { className: styles['body-cell-editor'], "aria-label": (_d = ariaLabels === null || ariaLabels === void 0 ? void 0 : ariaLabels.activateEditLabel) === null || _d === void 0 ? void 0 : _d.call(ariaLabels, column, item), ref: editActivateRef, onFocus: () => setHasFocus(true), onBlur: () => setHasFocus(false) }, showIcon && React.createElement(Icon, { name: "edit" }))))));
}
export function TableBodyCell(_a) {
    var { isEditable } = _a, rest = __rest(_a, ["isEditable"]);
    if (isEditable || rest.isEditing) {
        return React.createElement(TableCellEditable, Object.assign({}, rest));
    }
    const { column, item } = rest;
    return React.createElement(TableTdElement, Object.assign({}, rest), column.cell(item));
}
//# sourceMappingURL=index.js.map