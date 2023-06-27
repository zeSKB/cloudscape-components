import React from 'react';
import { AppLayoutProps } from '../interfaces';
import { DrawersProps } from './drawers';
import { FocusControlRefs } from '../utils/use-focus-control';
import { SplitPanelFocusControlRefs } from '../utils/use-split-panel-focus-control';
import { SplitPanelSideToggleProps } from '../../internal/context/split-panel-context';
interface AppLayoutInternals extends AppLayoutProps {
    activeDrawerId: string | null;
    activeDrawerWidth: number;
    drawers: DrawersProps;
    drawersRefs: FocusControlRefs;
    drawersTriggerCount: number;
    dynamicOverlapHeight: number;
    handleDrawersClick: (activeDrawerId: string | null, skipFocusControl?: boolean) => void;
    handleSplitPanelClick: () => void;
    handleNavigationClick: (isOpen: boolean) => void;
    handleSplitPanelPreferencesChange: (detail: AppLayoutProps.SplitPanelPreferences) => void;
    handleSplitPanelResize: (detail: {
        size: number;
    }) => void;
    handleToolsClick: (value: boolean, skipFocusControl?: boolean) => void;
    hasDefaultToolsWidth: boolean;
    hasDrawerViewportOverlay: boolean;
    hasNotificationsContent: boolean;
    hasOpenDrawer: boolean;
    hasStickyBackground: boolean;
    isMobile: boolean;
    isNavigationOpen: boolean;
    isSplitPanelForcedPosition: boolean;
    isSplitPanelOpen?: boolean;
    isToolsOpen: boolean;
    layoutElement: React.Ref<HTMLElement>;
    layoutWidth: number;
    loseToolsFocus: () => void;
    mainElement: React.Ref<HTMLDivElement>;
    mainOffsetLeft: number;
    navigationRefs: FocusControlRefs;
    notificationsElement: React.Ref<HTMLDivElement>;
    notificationsHeight: number;
    offsetBottom: number;
    setHasStickyBackground: (value: boolean) => void;
    setSplitPanelReportedSize: (value: number) => void;
    setSplitPanelReportedHeaderHeight: (value: number) => void;
    headerHeight: number;
    footerHeight: number;
    splitPanelMaxWidth: number;
    splitPanelMinWidth: number;
    splitPanelPosition: AppLayoutProps.SplitPanelPosition;
    splitPanelReportedSize: number;
    splitPanelReportedHeaderHeight: number;
    splitPanelToggle: SplitPanelSideToggleProps;
    setSplitPanelToggle: (toggle: SplitPanelSideToggleProps) => void;
    splitPanelDisplayed: boolean;
    splitPanelRefs: SplitPanelFocusControlRefs;
    toolsRefs: FocusControlRefs;
}
interface AppLayoutProviderInternalsProps extends AppLayoutProps {
    children: React.ReactNode;
}
export declare function useAppLayoutInternals(): AppLayoutInternals;
export declare const AppLayoutInternalsProvider: React.ForwardRefExoticComponent<AppLayoutProviderInternalsProps & React.RefAttributes<AppLayoutProps.Ref>>;
export {};
//# sourceMappingURL=context.d.ts.map