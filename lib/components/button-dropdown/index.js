import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import InternalButtonDropdown from './internal';
import { getBaseProps } from '../internal/base-component';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
const ButtonDropdown = React.forwardRef((_a, ref) => {
    var { items, variant = 'normal', loading = false, loadingText, disabled = false, expandableGroups = false, expandToViewport = false, ariaLabel, children, onItemClick, onItemFollow } = _a, props = __rest(_a, ["items", "variant", "loading", "loadingText", "disabled", "expandableGroups", "expandToViewport", "ariaLabel", "children", "onItemClick", "onItemFollow"]);
    const baseComponentProps = useBaseComponent('ButtonDropdown');
    const baseProps = getBaseProps(props);
    return (React.createElement(InternalButtonDropdown, Object.assign({}, baseProps, baseComponentProps, { ref: ref, items: items, variant: variant, loading: loading, loadingText: loadingText, disabled: disabled, expandableGroups: expandableGroups, expandToViewport: expandToViewport, ariaLabel: ariaLabel, onItemClick: onItemClick, onItemFollow: onItemFollow }), children));
});
applyDisplayName(ButtonDropdown, 'ButtonDropdown');
export default ButtonDropdown;
//# sourceMappingURL=index.js.map