import { PaymentField as ApiPaymentField, PaymentType as ApiPaymentType } from '../../../api/src/payments.ts';
import { LocalisedFieldValidation } from '../utils/paymentFieldUtils.js';
export type PaymentType = ApiPaymentType;
export type PaymentTypeField = ApiPaymentField;
export type PaymentTypeLogoSource = ApiPaymentType['logo'] | string | null | undefined;
export type LocalisedPaymentTypeField = Omit<PaymentTypeField, 'label' | 'validation'> & {
    label?: string;
    validation?: LocalisedFieldValidation;
};
//# sourceMappingURL=payment.d.ts.map