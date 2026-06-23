import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { CashierConfig, CashierHandle, CashierProps } from './types/CashierConfig.js';
export type { CashierHandle, CashierProps, } from './types/CashierConfig.js';
export type { CashierPaymentCreatedResponse, CashierPaymentError, CashierPaymentField, CashierPaymentFieldNotification, CashierPaymentFormData, CashierPaymentProgress, CashierPaymentSummaryEvent, CashierPaymentSummaryField, CashierPaymentSummaryResponse, CashierPaymentUpdatedEvent, CashierConfig, CashierCurrency, CashierDateTimeFormatOptions, CashierLocale, CashierNumberFormatOptions, CashierPaymentType, CashierPendingWithdrawalCancelledEvent, CashierSummaryAction, CashierSummaryActions, CashierSummaryActionThemeVariant, CashierSummaryUrlAction, CashierBonusTopUpEvent, CashierTheme, CashierUser, CashierUserBalance, CashierAward, CashierAwardValue, CashierBonus, CashierBonusConditionItem, CashierBonusConditions, CashierBonusPaymentTypeConditionItem, CashierBonusPaymentTypeConditions, PayControlUiTheme, HostedFieldsFontDefinition, HostedFieldsFontSource, CashierRedirectData, } from './types/CashierConfig.js';
export { CashierBonusesStyle, CashierComboViewPaymentTypesMode, CashierLayoutListType, CashierMethods, CashierSuggestAction, CashierSummaryActionType, } from './types/CashierConfig.js';
export declare const Cashier: ForwardRefExoticComponent<CashierProps & RefAttributes<CashierHandle>>;
export default Cashier;
export declare const defaultCashierConfig: CashierConfig;
export declare const defineCashier: (tagName?: string) => string;
//# sourceMappingURL=index.d.ts.map