import { PaymentField as ApiPaymentField, PaymentType as ApiPaymentType } from '../../../api/src/payments.ts';
import { LocalisedFieldOverride, LocalisedFieldValidation } from '../utils/paymentFieldUtils.js';
export type PaymentType = ApiPaymentType;
export type PaymentTypeField = ApiPaymentField;
export type PaymentTypeLogoSource = ApiPaymentType['logo'] | string | null | undefined;
export type LocalisedPaymentTypeField = Omit<PaymentTypeField, 'label' | 'validation' | 'overrides'> & {
    label?: string;
    validation?: LocalisedFieldValidation;
    overrides?: LocalisedFieldOverride[];
};
//# sourceMappingURL=payment.d.ts.map