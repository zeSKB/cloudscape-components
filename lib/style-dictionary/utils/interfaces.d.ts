import { ColorPaletteTokenName, ColorChartsTokenName, ColorsTokenName, BordersTokenName, TypographyTokenName, MotionTokenName, SizesTokenName, SpacingTokenName, GlobalScopeTokenName, ColorScopeTokenName, DensityScopeTokenName, MotionScopeTokenName, ShadowsTokenName, TokenName } from './token-names';
import { GlobalValue, ModeValue, TokenCategory } from '@cloudscape-design/theming-build';
export declare namespace StyleDictionary {
    type GlobalEntry = GlobalValue;
    type ModeIdentifier = 'color' | 'density' | 'motion';
    type ExpandedColorModeEntry = Partial<ModeValue<'light' | 'dark'>>;
    type ExpandedDensityModeEntry = Partial<ModeValue<'comfortable' | 'compact'>>;
    type ExpandedMotionModeEntry = Partial<ModeValue<'default' | 'disabled'>>;
    type ColorModeEntry = ExpandedColorModeEntry | GlobalEntry;
    type DensityModeEntry = ExpandedDensityModeEntry | GlobalEntry;
    type MotionModeEntry = ExpandedMotionModeEntry | GlobalEntry;
    type GlobalScopeDictionary = Partial<TokenCategory<GlobalScopeTokenName, GlobalValue>>;
    type ModeScopeDictionary = Partial<TokenCategory<ColorScopeTokenName, ColorModeEntry>>;
    type DensityScopeDictionary = Partial<TokenCategory<DensityScopeTokenName, DensityModeEntry>>;
    type MotionScopeDictionary = Partial<TokenCategory<MotionScopeTokenName, MotionModeEntry>>;
    type ExpandedGlobalScopeDictionary = Partial<TokenCategory<GlobalScopeTokenName, GlobalEntry>>;
    type ExpandedColorScopeDictionary = Partial<TokenCategory<ColorScopeTokenName, ExpandedColorModeEntry>>;
    type ExpandedDensityScopeDictionary = Partial<TokenCategory<DensityScopeTokenName, ExpandedDensityModeEntry>>;
    type ExpandedMotionScopeDictionary = Partial<TokenCategory<MotionScopeTokenName, ExpandedMotionModeEntry>>;
    type ColorPaletteDictionary = Partial<TokenCategory<ColorPaletteTokenName, GlobalEntry>>;
    type TypographyDictionary = Partial<TokenCategory<TypographyTokenName, GlobalEntry>>;
    type BordersDictionary = Partial<TokenCategory<BordersTokenName, GlobalEntry>>;
    type ColorChartsDictionary = Partial<TokenCategory<ColorChartsTokenName, ColorModeEntry>>;
    type ColorsDictionary = Partial<TokenCategory<ColorsTokenName, ColorModeEntry>>;
    type ShadowsDictionary = Partial<TokenCategory<ShadowsTokenName, ColorModeEntry>>;
    type MotionDictionary = Partial<TokenCategory<MotionTokenName, MotionModeEntry>>;
    type SizesDictionary = Partial<TokenCategory<SizesTokenName, DensityModeEntry>>;
    type SpacingDictionary = Partial<TokenCategory<SpacingTokenName, DensityModeEntry>>;
    interface Metadata {
        description?: string;
        public?: boolean;
        themeable?: boolean;
        sassName?: string;
        visualRefreshOnly?: boolean;
    }
    type TokenIndex<T> = {
        [key in TokenName]?: T;
    };
    type MetadataIndex = TokenIndex<Metadata>;
}
//# sourceMappingURL=interfaces.d.ts.map