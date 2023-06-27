import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { getBaseProps } from '../../base-component';
import PopoverContainer from '../../../popover/container';
import PopoverBody from '../../../popover/body';
import popoverStyles from '../../../popover/styles.css.js';
import { nodeContains } from '../../utils/dom';
import { useMergeRefs } from '../../hooks/use-merge-refs';
import styles from './styles.css.js';
export default React.forwardRef(ChartPopover);
function ChartPopover(_a, ref) {
    var { position = 'right', size = 'medium', fixedWidth = false, dismissButton = false, dismissAriaLabel, children, title, trackRef, trackKey, onDismiss, container, onMouseEnter, onMouseLeave } = _a, restProps = __rest(_a, ["position", "size", "fixedWidth", "dismissButton", "dismissAriaLabel", "children", "title", "trackRef", "trackKey", "onDismiss", "container", "onMouseEnter", "onMouseLeave"]);
    const baseProps = getBaseProps(restProps);
    const popoverObjectRef = useRef(null);
    const popoverRef = useMergeRefs(popoverObjectRef, ref);
    useEffect(() => {
        const onDocumentClick = (event) => {
            if (event.target &&
                !nodeContains(popoverObjectRef.current, event.target) && // click not in popover
                !nodeContains(container, event.target) // click not in segment
            ) {
                onDismiss(true);
            }
        };
        document.addEventListener('mousedown', onDocumentClick, { capture: true });
        return () => {
            document.removeEventListener('mousedown', onDocumentClick, { capture: true });
        };
    }, [container, onDismiss]);
    return (React.createElement("div", Object.assign({}, baseProps, { className: clsx(popoverStyles.root, styles.root, baseProps.className, { [styles.dismissable]: dismissButton }), ref: popoverRef, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave }),
        React.createElement(PopoverContainer, { size: size, fixedWidth: fixedWidth, position: position, trackRef: trackRef, trackKey: trackKey, arrow: position => (React.createElement("div", { className: clsx(popoverStyles.arrow, popoverStyles[`arrow-position-${position}`]) },
                React.createElement("div", { className: popoverStyles['arrow-outer'] }),
                React.createElement("div", { className: popoverStyles['arrow-inner'] }))) },
            React.createElement("div", { className: styles['hover-area'] },
                React.createElement(PopoverBody, { dismissButton: dismissButton, dismissAriaLabel: dismissAriaLabel, header: title, onDismiss: onDismiss, className: styles['popover-body'] }, children)))));
}
//# sourceMappingURL=index.js.map