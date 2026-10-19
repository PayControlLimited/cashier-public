import { CashierRuntimeConfig } from './elements.js';
type ComboViewEntryConfig = Pick<CashierRuntimeConfig, 'uiComboView' | 'lockAmount'>;
type DefaultRouteConfig = Pick<CashierRuntimeConfig, 'uiComboView' | 'lockAmount' | 'method'>;
type InitialRouteConfig = Pick<CashierRuntimeConfig, 'uiComboView' | 'lockAmount' | 'gotoPaymentType' | 'bonuses' | 'uiBonuses' | 'uiBonusesStyle' | 'method'>;
export declare const isComboViewEntryEnabled: ({ uiComboView, }: ComboViewEntryConfig) => boolean;
export declare const resolveDefaultRoute: ({ uiComboView, lockAmount, method, }: DefaultRouteConfig) => string;
export declare const resolveInitialRoute: (config: InitialRouteConfig) => string;
export {};
//# sourceMappingURL=routes.d.ts.map