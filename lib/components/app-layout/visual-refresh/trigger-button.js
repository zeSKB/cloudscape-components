// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import Icon from '../../icon/internal';
import styles from './styles.css.js';
function TriggerButton({ ariaLabel, className, iconName, iconSvg, onClick, selected = false }, ref) {
    return (React.createElement("button", { "aria-expanded": false, "aria-haspopup": true, "aria-label": ariaLabel, className: clsx(styles.trigger, {
            [styles.selected]: selected,
        }, className), onClick: onClick, ref: ref, type: "button" },
        iconName && !iconSvg && React.createElement(Icon, { name: iconName }),
        iconSvg));
}
export default React.forwardRef(TriggerButton);
//# sourceMappingURL=trigger-button.js.map