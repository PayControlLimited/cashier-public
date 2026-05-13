import { CashierConfig } from '../types/CashierConfig.js';
type ComboViewEntryConfig = Pick<CashierConfig, 'uiComboView' | 'lockAmount'>;
type DefaultRouteConfig = Pick<CashierConfig, 'uiComboView' | 'lockAmount' | 'method'>;
type InitialRouteConfig = Pick<CashierConfig, 'uiComboView' | 'lockAmount' | 'gotoPaymentType' | 'bonuses' | 'uiBonuses' | 'method'>;
export declare const isComboViewEntryEnabled: ({ uiComboView, lockAmount, }: ComboViewEntryConfig) => boolean;
export declare const resolveDefaultRoute: ({ uiComboView, lockAmount, method, }: DefaultRouteConfig) => string;
export declare const resolveInitialRoute: (config: InitialRouteConfig) => string;
export {};
//# sourceMappingURL=routes.d.ts.map