import { CashierBonusesStyle, CashierComboViewPaymentTypesMode, CashierLayoutListType } from '../types/CashierConfig.js';
import { PaymentType } from '../types/payment.js';
import { PaymentFormValues } from './paymentFieldUtils.js';
export declare const isComboViewPaymentTypesVisible: (mode: CashierComboViewPaymentTypesMode) => boolean;
export declare const isComboViewPaymentTypesPicker: (mode: CashierComboViewPaymentTypesMode) => boolean;
export declare const isAccordionListStyle: (listStyle: CashierLayoutListType | null | undefined) => boolean;
export declare const isCollapsibleAccordionListStyle: (listStyle: CashierLayoutListType | null | undefined) => boolean;
export declare const resolveComboViewInlinePaymentTypesStyle: ({ mode, paymentFormEnabled, }: {
    mode: CashierComboViewPaymentTypesMode;
    paymentFormEnabled: boolean;
}) => CashierLayoutListType | null;
export declare const resolveBonusListStyle: (listStyle: CashierLayoutListType) => CashierLayoutListType;
export declare const isBonusPageStyle: (uiBonusesStyle: CashierBonusesStyle) => boolean;
export declare const isBonusPaymentFormPickerStyle: (uiBonusesStyle: CashierBonusesStyle) => boolean;
export declare const isBonusPaymentListPickerStyle: (uiBonusesStyle: CashierBonusesStyle) => boolean;
export declare const paymentTypeSupportsAmountField: (paymentType: PaymentType) => boolean;
export declare const hasPaymentTypeFormDetailsContent: (paymentType: PaymentType) => boolean;
export declare const hasPaymentTypeHostedFields: (paymentType: PaymentType) => boolean;
export declare const resolvePaymentFormAmount: (paymentType: PaymentType, fallbackAmount: string, values?: Partial<PaymentFormValues>) => string;
export declare const hasVisiblePaymentTypeFormContent: (paymentType: PaymentType, amountValue: string) => boolean;
export declare const hasPaymentTypeNotifications: (paymentType: PaymentType) => boolean;
//# sourceMappingURL=paymentTypeDisplay.d.ts.map