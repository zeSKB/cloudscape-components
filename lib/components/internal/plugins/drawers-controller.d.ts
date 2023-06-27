import { DrawerItem } from '../../app-layout/drawer/interfaces';
export type DrawerConfig = Omit<DrawerItem, 'content'> & {
    orderPriority?: number;
    mountContent: (container: HTMLElement) => void;
    unmountContent: (container: HTMLElement) => void;
};
export type DrawersRegistrationListener = (drawers: Array<DrawerConfig>) => void;
export declare class DrawersController {
    private drawers;
    private drawersRegistrationListener;
    private updateTimeout;
    private scheduleUpdate;
    registerDrawer: (config: DrawerConfig) => void;
    onDrawersRegistered: (listener: DrawersRegistrationListener) => () => void;
    clearRegisteredDrawers: () => void;
}
//# sourceMappingURL=drawers-controller.d.ts.map