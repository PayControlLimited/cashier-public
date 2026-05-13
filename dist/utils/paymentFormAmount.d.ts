import { PaymentTypeField } from '../types/payment.js';
type PaymentFormAmountEditabilityParams = {
    renderMode: 'form' | 'confirm';
    hideAmountField?: boolean;
    lockAmount?: boolean;
    fields?: PaymentTypeField[] | null;
};
export declare const canEditPaymentFormAmount: ({ renderMode, hideAmountField, lockAmount, fields, }: PaymentFormAmountEditabilityParams) => boolean;
export {};
//# sourceMappingURL=paymentFormAmount.d.ts.map