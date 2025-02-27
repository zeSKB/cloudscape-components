// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import InternalSegmentedControl from '../segmented-control/internal';
import styles from './styles.css.js';
import { useInternalI18n } from '../internal/i18n/context';
export default function ModeSwitcher({ i18nStrings, mode, onChange }) {
    const i18n = useInternalI18n('date-range-picker');
    return (React.createElement(InternalSegmentedControl, { className: styles['mode-switch'], selectedId: mode, options: [
            { id: 'relative', text: i18n('i18nStrings.relativeModeTitle', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.relativeModeTitle) },
            { id: 'absolute', text: i18n('i18nStrings.absoluteModeTitle', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.absoluteModeTitle) },
        ], onChange: e => onChange(e.detail.selectedId) }));
}
//# sourceMappingURL=mode-switcher.js.map