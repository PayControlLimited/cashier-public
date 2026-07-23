import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { CashierConfig, CashierHandle, CashierProps } from './types/CashierConfig.js';
export type { CashierHandle, CashierProps } from './types/CashierConfig.js';
export type { CashierPaymentCreatedResponse, CashierPaymentError, CashierPaymentField, CashierPaymentFieldNotification, CashierPaymentFormChangedEvent, CashierPaymentFormData, CashierPaymentFormFieldState, CashierPaymentFormState, CashierPaymentMethodChangedEvent, CashierPaymentProgress, CashierPaymentTypeReference, CashierAward, CashierAwardValue, CashierBonus, CashierBonusConditionItem, CashierBonusConditions, CashierBonusPaymentTypeConditionItem, CashierBonusPaymentTypeConditions, CashierBonusTopUpEvent, CashierConfig, CashierCurrency, CashierDateTimeFormatOptions, CashierLocale, CashierNumberFormatOptions, CashierPaymentType, CashierPendingWithdrawalCancelledEvent, CashierTheme, CashierHostedFieldsState, PayControlUiTheme, CashierUser, CashierUserBalance, HostedFieldsFontDefinition, HostedFieldsFontSource, CashierRedirectData, } from './types/CashierConfig.js';
export { CashierComboViewPaymentTypesMode, CashierLayoutListType, CashierMethods, CashierSuggestAction, } from './types/CashierConfig.js';
export declare const defaultCashierConfig: CashierConfig;
export declare const defineCashier: (tagName?: string) => string;
export declare const Cashier: ForwardRefExoticComponent<CashierProps & RefAttributes<CashierHandle>>;
export default Cashier;
//# sourceMappingURL=server.d.ts.map