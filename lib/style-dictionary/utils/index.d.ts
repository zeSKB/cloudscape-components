import { TokenCategory } from '@cloudscape-design/theming-build';
import { StyleDictionary } from './interfaces';
export declare const expandColorDictionary: (dictionary: StyleDictionary.ModeScopeDictionary) => StyleDictionary.ExpandedColorScopeDictionary;
export declare const expandDensityDictionary: (dictionary: StyleDictionary.DensityScopeDictionary) => StyleDictionary.ExpandedDensityScopeDictionary;
export declare const expandMotionDictionary: (dictionary: StyleDictionary.MotionScopeDictionary) => StyleDictionary.ExpandedMotionScopeDictionary;
export declare const pickState: (tokenCategory: TokenCategory<string, Record<string, string>>, state: string) => {
    [k: string]: string;
};
//# sourceMappingURL=index.d.ts.map