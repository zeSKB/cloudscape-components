import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React, { useEffect, useState, useRef } from 'react';
import { getLimitedValue } from '../../split-panel/utils/size-utils';
import { usePointerEvents } from '../../split-panel/utils/use-pointer-events';
import { useKeyboardEvents } from '../../split-panel/utils/use-keyboard-events';
import { Drawer } from './index';
import testutilStyles from '../test-classes/styles.css.js';
import ResizeHandler from '../../split-panel/icons/resize-handler';
import splitPanelStyles from '../../split-panel/styles.css.js';
export const ResizableDrawer = (_a) => {
    var _b;
    var { onResize, size, getMaxWidth, refs, activeDrawer } = _a, props = __rest(_a, ["onResize", "size", "getMaxWidth", "refs", "activeDrawer"]);
    const { isOpen, children, isMobile } = props;
    const MIN_WIDTH = (activeDrawer === null || activeDrawer === void 0 ? void 0 : activeDrawer.defaultSize) && activeDrawer.defaultSize < 280 ? activeDrawer === null || activeDrawer === void 0 ? void 0 : activeDrawer.defaultSize : 280;
    const [relativeSize, setRelativeSize] = useState(0);
    useEffect(() => {
        // effects are called inside out in the components tree
        // wait one frame to allow app-layout to complete its calculations
        const handle = requestAnimationFrame(() => {
            const maxSize = getMaxWidth();
            setRelativeSize((size / maxSize) * 100);
        });
        return () => cancelAnimationFrame(handle);
    }, [size, getMaxWidth]);
    const setSidePanelWidth = (width) => {
        const maxWidth = getMaxWidth();
        const size = getLimitedValue(MIN_WIDTH, width, maxWidth);
        const id = activeDrawer === null || activeDrawer === void 0 ? void 0 : activeDrawer.id;
        if (isOpen && id && maxWidth >= MIN_WIDTH) {
            onResize({ size, id });
        }
    };
    const position = 'side';
    const setBottomPanelHeight = () => { };
    const drawerRefObject = useRef(null);
    const sizeControlProps = {
        position,
        splitPanelRef: drawerRefObject,
        handleRef: refs.slider,
        setSidePanelWidth,
        setBottomPanelHeight,
    };
    const onSliderPointerDown = usePointerEvents(sizeControlProps);
    const onKeyDown = useKeyboardEvents(sizeControlProps);
    const resizeHandle = (React.createElement("div", { ref: refs.slider, role: "slider", tabIndex: 0, "aria-label": (_b = activeDrawer === null || activeDrawer === void 0 ? void 0 : activeDrawer.ariaLabels) === null || _b === void 0 ? void 0 : _b.resizeHandle, "aria-valuemax": 100, "aria-valuemin": 0, "aria-valuenow": relativeSize, className: clsx(splitPanelStyles.slider, splitPanelStyles[`slider-side`], testutilStyles['drawers-slider']), onKeyDown: onKeyDown, onPointerDown: onSliderPointerDown },
        React.createElement(ResizeHandler, { className: clsx(splitPanelStyles['slider-icon'], splitPanelStyles[`slider-icon-side`]) })));
    return (React.createElement(Drawer, Object.assign({}, props, { ref: drawerRefObject, resizeHandle: !isMobile &&
            (activeDrawer === null || activeDrawer === void 0 ? void 0 : activeDrawer.resizable) && React.createElement("div", { className: splitPanelStyles['slider-wrapper-side'] }, resizeHandle) }), children));
};
//# sourceMappingURL=resizable-drawer.js.map