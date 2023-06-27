export declare const createColorMode: (darkSelector: string) => {
    id: string;
    states: {
        light: {
            default: boolean;
        };
        dark: {
            selector: string;
            media: string;
        };
    };
};
export declare const createDensityMode: (compactSelector: string) => {
    id: string;
    states: {
        comfortable: {
            default: boolean;
        };
        compact: {
            selector: string;
        };
    };
};
export declare const createMotionMode: (disabledSelector: string) => {
    id: string;
    states: {
        default: {
            default: boolean;
        };
        disabled: {
            selector: string;
        };
    };
};
//# sourceMappingURL=modes.d.ts.map