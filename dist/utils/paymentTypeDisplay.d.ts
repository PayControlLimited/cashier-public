import { CashierComboViewPaymentTypesMode, CashierLayoutListType } from '../types/CashierConfig.js';
import { PaymentType } from '../types/payment.js';
import { PaymentFormValues } from './paymentFieldUtils.js';
export declare const isComboViewPaymentTypesVisible: (mode: CashierComboViewPaymentTypesMode) => boolean;
export declare const isComboViewPaymentTypesPicker: (mode: CashierComboViewPaymentTypesMode) => boolean;
export declare const resolveComboViewInlinePaymentTypesStyle: ({ mode, paymentFormEnabled, }: {
    mode: CashierComboViewPaymentTypesMode;
    paymentFormEnabled: boolean;
}) => CashierLayoutListType | null;
export declare const resolveBonusListStyle: (listStyle: CashierLayoutListType) => CashierLayoutListType;
export declare const paymentTypeSupportsAmountField: (paymentType: PaymentType) => boolean;
export declare const hasPaymentTypeFormDetailsContent: (paymentType: PaymentType) => boolean;
export declare const resolvePaymentFormAmount: (paymentType: PaymentType, fallbackAmount: string, values?: Partial<PaymentFormValues>) => string;
export declare const hasVisiblePaymentTypeFormContent: (paymentType: PaymentType, amountValue: string) => boolean;
//# sourceMappingURL=paymentTypeDisplay.d.ts.map