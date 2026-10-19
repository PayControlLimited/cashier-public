import { PaymentTypeField } from '../types/payment.js';
import { PaymentFormValues } from './paymentFieldUtils.js';
type PaymentFormAmountEditabilityParams = {
    renderMode: 'form' | 'confirm';
    hideAmountField?: boolean;
    lockAmount?: boolean;
    fields?: PaymentTypeField[] | null;
};
export declare const canEditPaymentFormAmount: ({ renderMode, hideAmountField, lockAmount, fields, }: PaymentFormAmountEditabilityParams) => boolean;
type EffectivePaymentValuesParams = {
    values: PaymentFormValues;
    amountValueOverride?: string;
    initialAmount: string;
    shouldHideAmountField: boolean;
    hasAmountField: boolean;
    lockAmount?: boolean;
};
export declare const resolveEffectivePaymentValues: ({ values, amountValueOverride, initialAmount, shouldHideAmountField, hasAmountField, lockAmount, }: EffectivePaymentValuesParams) => PaymentFormValues;
export {};
//# sourceMappingURL=paymentFormAmount.d.ts.map