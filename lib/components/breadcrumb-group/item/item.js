import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect, useRef, useState } from 'react';
import InternalIcon from '../../icon/internal';
import styles from './styles.css.js';
import clsx from 'clsx';
import { fireCancelableEvent, isPlainLeftClick } from '../../internal/events';
import { getEventDetail } from '../internal';
import { Transition } from '../../internal/components/transition';
import PopoverContainer from '../../popover/container';
import PopoverBody from '../../popover/body';
import Portal from '../../internal/components/portal';
import popoverStyles from '../../popover/styles.css.js';
import { DATA_ATTR_FUNNEL_KEY } from '../../internal/analytics/selectors';
import { FUNNEL_KEY_FUNNEL_NAME } from '../../internal/analytics/selectors';
const BreadcrumbItemWithPopover = (_a) => {
    var { item, isLast, anchorAttributes } = _a, itemAttributes = __rest(_a, ["item", "isLast", "anchorAttributes"]);
    const [showPopover, setShowPopover] = useState(false);
    const textRef = useRef(null);
    const virtualTextRef = useRef(null);
    const isTruncated = (textRef, virtualTextRef) => {
        if (!textRef || !virtualTextRef || !textRef.current || !virtualTextRef.current) {
            return false;
        }
        const virtualTextWidth = virtualTextRef.current.getBoundingClientRect().width;
        const textWidth = textRef.current.getBoundingClientRect().width;
        if (virtualTextWidth > textWidth) {
            return true;
        }
        return false;
    };
    const popoverContent = (React.createElement(Portal, null,
        React.createElement("div", { className: styles['item-popover'] },
            React.createElement(Transition, { in: true }, () => (React.createElement(PopoverContainer, { trackRef: textRef, size: "small", fixedWidth: false, position: "bottom", arrow: position => (React.createElement("div", { className: clsx(popoverStyles.arrow, popoverStyles[`arrow-position-${position}`]) },
                    React.createElement("div", { className: popoverStyles['arrow-outer'] }),
                    React.createElement("div", { className: popoverStyles['arrow-inner'] }))) },
                React.createElement(PopoverBody, { dismissButton: false, dismissAriaLabel: undefined, onDismiss: () => { }, header: undefined }, item.text)))))));
    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.key === 'Escape') {
                setShowPopover(false);
            }
        };
        if (showPopover) {
            document.addEventListener('keydown', onKeyDown);
        }
        return () => {
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [showPopover]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Item, Object.assign({ isLast: isLast }, itemAttributes, { onFocus: () => {
                isTruncated(textRef, virtualTextRef) && setShowPopover(true);
            }, onBlur: () => setShowPopover(false), onMouseEnter: () => {
                isTruncated(textRef, virtualTextRef) && setShowPopover(true);
            }, onMouseLeave: () => setShowPopover(false), anchorAttributes: anchorAttributes }),
            React.createElement("span", { className: styles.text, ref: textRef }, item.text),
            React.createElement("span", { className: styles['virtual-item'], ref: virtualTextRef }, item.text)),
        showPopover && popoverContent));
};
const Item = (_a) => {
    var { anchorAttributes, dataAttributes, children, isLast } = _a, itemAttributes = __rest(_a, ["anchorAttributes", "dataAttributes", "children", "isLast"]);
    return isLast ? (React.createElement("span", Object.assign({}, itemAttributes, dataAttributes), children)) : (React.createElement("a", Object.assign({}, itemAttributes, anchorAttributes, dataAttributes), children));
};
export function BreadcrumbItem({ item, onClick, onFollow, isDisplayed, isLast = false, isCompressed = false, }) {
    const preventDefault = (event) => event.preventDefault();
    const onClickHandler = (event) => {
        if (isPlainLeftClick(event)) {
            fireCancelableEvent(onFollow, getEventDetail(item), event);
        }
        fireCancelableEvent(onClick, getEventDetail(item), event);
    };
    const itemAttributes = {
        className: clsx(styles.anchor, { [styles.compressed]: isCompressed }),
    };
    const anchorAttributes = {
        href: item.href || '#',
        onClick: isLast ? preventDefault : onClickHandler,
    };
    const dataAttibutes = {};
    if (isLast) {
        dataAttibutes[DATA_ATTR_FUNNEL_KEY] = FUNNEL_KEY_FUNNEL_NAME;
    }
    return (React.createElement("div", { className: clsx(styles.breadcrumb, isLast && styles.last) },
        isDisplayed && isCompressed ? (React.createElement(BreadcrumbItemWithPopover, Object.assign({ item: item, isLast: isLast, anchorAttributes: anchorAttributes }, itemAttributes))) : (React.createElement(Item, Object.assign({ isLast: isLast, anchorAttributes: anchorAttributes }, itemAttributes, dataAttibutes),
            React.createElement("span", { className: styles.text }, item.text))),
        !isLast ? (React.createElement("span", { className: styles.icon },
            React.createElement(InternalIcon, { name: "angle-right" }))) : null));
}
//# sourceMappingURL=item.js.map