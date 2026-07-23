import { PaymentType, PaymentTypeField } from '../types/payment.js';
import { CashierCurrency, CashierHostedFieldsState, CashierMethods, CashierPaymentFormState } from '../types/CashierConfig.js';
import { PaymentFormValues } from './paymentFieldUtils.js';
export declare const buildCashierPaymentFormState: ({ amount, bonusCode, canSubmit, complete, currency, dirty, errors, fields, hostedFields, initialValues, method, paymentType, submitting, valid, values, }: {
    amount: string;
    bonusCode: string | null;
    canSubmit: boolean;
    complete: boolean;
    currency: CashierCurrency;
    dirty: boolean;
    errors: Record<string, unknown>;
    fields: readonly PaymentTypeField[];
    hostedFields: CashierHostedFieldsState | null;
    initialValues: PaymentFormValues;
    method: CashierMethods;
    paymentType: PaymentType;
    submitting: boolean;
    valid: boolean;
    values: PaymentFormValues;
}) => CashierPaymentFormState | null;
//# sourceMappingURL=paymentFormObserver.d.ts.map