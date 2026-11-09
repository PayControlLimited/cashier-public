import { PaymentTypeField } from '../types/payment.js';
import { PaymentFormValues } from './paymentFieldUtils.js';
/** Settle sibling defaults and dependency writes without rewriting the amount. */
export declare const resolvePaymentFieldValues: (fields: readonly PaymentTypeField[] | undefined, amount: string, overrides?: PaymentFormValues) => {
    values: PaymentFormValues;
    resolved: boolean;
};
//# sourceMappingURL=resolvePaymentFieldValues.d.ts.map