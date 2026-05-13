import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { CashierConfig, CashierHandle, CashierProps } from './types/CashierConfig.js';
export type { CashierHandle, CashierProps, } from './types/CashierConfig.js';
export type { CashierPaymentCreatedResponse, CashierPaymentError, CashierPaymentField, CashierPaymentFieldNotification, CashierPaymentFormData, CashierPaymentProgress, CashierConfig, CashierCurrency, CashierDateTimeFormatOptions, CashierLocale, CashierNumberFormatOptions, CashierPaymentType, CashierPendingWithdrawalCancelledEvent, CashierBonusTopUpEvent, CashierTheme, CashierUser, CashierUserBalance, CashierBonus, CashierBonusConditionItem, CashierBonusConditions, CashierBonusPaymentTypeConditionItem, CashierBonusPaymentTypeConditions, HostedFieldsFontDefinition, HostedFieldsFontSource, CashierRedirectData, } from './types/CashierConfig.js';
export { CashierComboViewPaymentTypesMode, CashierLayoutListType, CashierMethods, CashierSuggestAction, } from './types/CashierConfig.js';
export declare const Cashier: ForwardRefExoticComponent<CashierProps & RefAttributes<CashierHandle>>;
export default Cashier;
export declare const defaultCashierConfig: CashierConfig;
export declare const defineCashier: (tagName?: string) => string;
//# sourceMappingURL=index.d.ts.map