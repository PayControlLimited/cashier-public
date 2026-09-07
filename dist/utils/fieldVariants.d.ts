import { PaymentTypeField } from '../types/payment.js';
import { PaymentFormValues } from './paymentFieldUtils.js';
type FieldVariant = NonNullable<PaymentTypeField['variants']>[number];
export declare const resolveFieldVariant: (field: PaymentTypeField, values: PaymentFormValues) => FieldVariant | undefined;
export declare const applyFieldVariant: <T extends PaymentTypeField>(field: T, values: PaymentFormValues) => T;
export declare const applyFieldVariants: <T extends PaymentTypeField>(fields: readonly T[] | undefined, values: PaymentFormValues) => T[];
export {};
//# sourceMappingURL=fieldVariants.d.ts.map