import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import InternalSelect from './internal';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
import { getExternalProps } from '../internal/utils/external-props';
const Select = React.forwardRef((_a, ref) => {
    var { options = [], filteringType = 'none', statusType = 'finished', triggerVariant = 'label' } = _a, restProps = __rest(_a, ["options", "filteringType", "statusType", "triggerVariant"]);
    const baseComponentProps = useBaseComponent('Select');
    const externalProps = getExternalProps(restProps);
    return (React.createElement(InternalSelect, Object.assign({ options: options, filteringType: filteringType, statusType: statusType, triggerVariant: triggerVariant }, externalProps, baseComponentProps, { ref: ref })));
});
applyDisplayName(Select, 'Select');
export default Select;
//# sourceMappingURL=index.js.map