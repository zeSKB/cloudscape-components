import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React from 'react';
import { KeyCode } from '../../internal/keycode';
import { useUniqueId } from '../../internal/hooks/use-unique-id';
import InternalCheckbox from '../../checkbox/internal';
import RadioButton from '../../radio-group/radio-button';
import styles from './styles.css.js';
export default function SelectionControl(_a) {
    var { selectionType, indeterminate = false, onShiftToggle, onFocusUp, onFocusDown, name, ariaLabel, focusedComponent, onFocusedComponentChange } = _a, sharedProps = __rest(_a, ["selectionType", "indeterminate", "onShiftToggle", "onFocusUp", "onFocusDown", "name", "ariaLabel", "focusedComponent", "onFocusedComponentChange"]);
    const controlId = useUniqueId();
    const isMultiSelection = selectionType === 'multi';
    const setShiftState = (event) => {
        if (isMultiSelection) {
            onShiftToggle && onShiftToggle(event.shiftKey);
        }
    };
    const onMouseDownHandler = (event) => {
        setShiftState(event);
        if (isMultiSelection) {
            // To overcome an issue
            // If you shift+click or ctrl+click on a label for a checkbox, checkbox is not checked.
            // https://bugzilla.mozilla.org/show_bug.cgi?id=559506
            event.preventDefault();
        }
    };
    // native checkboxes do not have focus move via keyboard, we implement it here programmatically
    const handleKeyDown = (event) => {
        setShiftState(event);
        if (isMultiSelection) {
            if (event.keyCode === KeyCode.up) {
                event.preventDefault();
                onFocusUp && onFocusUp(event);
            }
            if (event.keyCode === KeyCode.down) {
                event.preventDefault();
                onFocusDown && onFocusDown(event);
            }
        }
    };
    const handleClick = (event) => {
        const target = event.currentTarget;
        const nativeInput = (target.tagName === 'INPUT' ? target : target.querySelector('input'));
        // Clicking on input, does not focus it on Firefox (AWSUI-11345)
        nativeInput === null || nativeInput === void 0 ? void 0 : nativeInput.focus();
    };
    const selector = isMultiSelection ? (React.createElement(InternalCheckbox, Object.assign({}, sharedProps, { showOutline: (focusedComponent === null || focusedComponent === void 0 ? void 0 : focusedComponent.type) === 'selection', onFocus: () => onFocusedComponentChange === null || onFocusedComponentChange === void 0 ? void 0 : onFocusedComponentChange({ type: 'selection' }), onBlur: () => onFocusedComponentChange === null || onFocusedComponentChange === void 0 ? void 0 : onFocusedComponentChange(null), controlId: controlId, indeterminate: indeterminate }))) : (React.createElement(RadioButton, Object.assign({}, sharedProps, { controlId: controlId, name: name, value: '', label: '' })));
    return (React.createElement(React.Fragment, null,
        React.createElement("label", { onKeyDown: handleKeyDown, onKeyUp: setShiftState, onMouseDown: onMouseDownHandler, onMouseUp: setShiftState, onClick: handleClick, htmlFor: controlId, className: clsx(styles.label, styles.root), "aria-label": ariaLabel, title: ariaLabel }, selector),
        React.createElement("span", { className: clsx(styles.stud), "aria-hidden": true }, "\u00A0")));
}
//# sourceMappingURL=index.js.map