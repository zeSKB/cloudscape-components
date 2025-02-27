// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useLayoutEffect, useCallback } from 'react';
import { useResizeObserver } from '../internal/hooks/container-queries/use-resize-observer';
import stickyScrolling, { calculateScrollingOffset, scrollUpBy } from './sticky-scrolling';
import { useMobile } from '../internal/hooks/use-mobile';
function syncSizes(from, to) {
    const fromCells = Array.prototype.slice.apply(from.children);
    const toCells = Array.prototype.slice.apply(to.children);
    for (let i = 0; i < fromCells.length; i++) {
        let width = fromCells[i].style.width;
        // use auto if it is set by resizable columns or real size otherwise
        if (width !== 'auto') {
            width = `${fromCells[i].offsetWidth}px`;
        }
        toCells[i].style.width = width;
    }
}
export const useStickyHeader = (tableRef, theadRef, secondaryTheadRef, secondaryTableRef, tableWrapperRef) => {
    const isMobile = useMobile();
    // Sync the sizes of the column header copies in the sticky header with the originals
    const syncColumnHeaderWidths = useCallback(() => {
        if (tableRef.current &&
            theadRef.current &&
            secondaryTheadRef.current &&
            secondaryTableRef.current &&
            tableWrapperRef.current) {
            syncSizes(theadRef.current, secondaryTheadRef.current);
            // Using the tableRef offsetWidth instead of the theadRef because in VR
            // the tableRef adds extra padding to the table and by default the theadRef will have a width
            // without the padding and will make the sticky header width incorrect.
            secondaryTableRef.current.style.width = `${tableRef.current.offsetWidth}px`;
            tableWrapperRef.current.style.marginTop = `-${theadRef.current.offsetHeight}px`;
        }
    }, [theadRef, secondaryTheadRef, secondaryTableRef, tableWrapperRef, tableRef]);
    useLayoutEffect(() => {
        syncColumnHeaderWidths();
    });
    useResizeObserver(theadRef, syncColumnHeaderWidths);
    const scrollToTop = () => {
        if (!isMobile && theadRef.current && secondaryTheadRef.current && tableWrapperRef.current) {
            const scrollDist = calculateScrollingOffset(theadRef.current, secondaryTheadRef.current);
            if (scrollDist > 0) {
                scrollUpBy(scrollDist, tableWrapperRef.current);
            }
        }
    };
    const { scrollToItem } = stickyScrolling(tableWrapperRef, secondaryTheadRef);
    const scrollToRow = (itemNode) => {
        if (!isMobile) {
            scrollToItem(itemNode);
        }
    };
    return { scrollToRow, scrollToTop };
};
//# sourceMappingURL=use-sticky-header.js.map