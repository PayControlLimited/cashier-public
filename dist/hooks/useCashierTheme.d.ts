import { CSSProperties } from 'react';
import { CashierTheme } from '../types/CashierConfig.js';
export type CashierThemeResolutionInput = {
    uiTheme?: CashierTheme;
    cssUrlText?: string | null;
    scopeSelector?: string;
};
export type CashierThemeResolution = {
    themeStyles: CSSProperties;
    cssText: string;
};
export declare const buildThemeVariables: (theme?: CashierTheme) => Record<string, string | number>;
export declare const buildCashierThemeResolution: ({ uiTheme, cssUrlText, scopeSelector, }: CashierThemeResolutionInput) => CashierThemeResolution;
export declare function useCashierThemeResolution(input: CashierThemeResolutionInput): CashierThemeResolution & {
    scopeId: string;
};
//# sourceMappingURL=useCashierTheme.d.ts.map