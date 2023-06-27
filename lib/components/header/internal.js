import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React, { useContext } from 'react';
import { getBaseProps } from '../internal/base-component';
import { StickyHeaderContext } from '../container/use-sticky-header';
import { useVisualRefresh } from '../internal/hooks/use-visual-mode';
import styles from './styles.css.js';
import { useMobile } from '../internal/hooks/use-mobile';
import { InfoLinkLabelContext } from '../internal/context/info-link-label-context';
import { useUniqueId } from '../internal/hooks/use-unique-id';
import { DATA_ATTR_FUNNEL_KEY, FUNNEL_KEY_SUBSTEP_NAME } from '../internal/analytics/selectors';
export default function InternalHeader(_a) {
    var { variant, headingTagOverride, children, actions, counter, description, info, __internalRootRef = null, __disableActionsWrapping } = _a, restProps = __rest(_a, ["variant", "headingTagOverride", "children", "actions", "counter", "description", "info", "__internalRootRef", "__disableActionsWrapping"]);
    const isMobile = useMobile();
    const HeadingTag = headingTagOverride !== null && headingTagOverride !== void 0 ? headingTagOverride : (variant === 'awsui-h1-sticky' ? 'h1' : variant);
    const { isStuck } = useContext(StickyHeaderContext);
    const baseProps = getBaseProps(restProps);
    const isRefresh = useVisualRefresh();
    const headingId = useUniqueId('heading');
    // If is mobile there is no need to have the dynamic variant because it's scrolled out of view
    const dynamicVariant = !isMobile && isStuck ? 'h2' : 'h1';
    const variantOverride = variant === 'awsui-h1-sticky' ? (isRefresh ? dynamicVariant : 'h2') : variant;
    return (React.createElement("div", Object.assign({}, baseProps, { className: clsx(styles.root, baseProps.className, styles[`root-variant-${variantOverride}`], isRefresh && styles[`root-variant-${variantOverride}-refresh`], !actions && [styles[`root-no-actions`]], description && [styles[`root-has-description`]], __disableActionsWrapping && [styles['root-no-wrap']]), ref: __internalRootRef }),
        React.createElement("div", { className: clsx(styles.main, styles[`main-variant-${variantOverride}`], isRefresh && styles[`main-variant-${variantOverride}-refresh`]) },
            React.createElement("div", { className: clsx(styles.title, styles[`title-variant-${variantOverride}`], isRefresh && styles[`title-variant-${variantOverride}-refresh`]) },
                React.createElement(HeadingTag, { className: clsx(styles.heading, styles[`heading-variant-${variantOverride}`]) },
                    React.createElement("span", Object.assign({}, { [DATA_ATTR_FUNNEL_KEY]: FUNNEL_KEY_SUBSTEP_NAME }, { className: clsx(styles['heading-text'], styles[`heading-text-variant-${variantOverride}`]), id: headingId }), children),
                    counter !== undefined && React.createElement("span", { className: styles.counter },
                        " ",
                        counter)),
                React.createElement(InfoLinkLabelContext.Provider, { value: headingId }, info && React.createElement("span", { className: styles.info }, info))),
            React.createElement(Description, { variantOverride: variantOverride }, description)),
        actions && (React.createElement("div", { className: clsx(styles.actions, styles[`actions-variant-${variantOverride}`], isRefresh && styles[`actions-variant-${variantOverride}-refresh`]) }, actions))));
}
export function Description({ children, variantOverride }) {
    const isRefresh = useVisualRefresh();
    return ((children && (React.createElement("p", { className: clsx(styles.description, styles[`description-variant-${variantOverride}`], isRefresh && styles[`description-variant-${variantOverride}-refresh`]) }, children))) ||
        null);
}
//# sourceMappingURL=internal.js.map