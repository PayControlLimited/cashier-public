import { PaymentTypeField } from '../types/payment.js';
import { PaymentFormValues } from './paymentFieldUtils.js';
export type FieldDependencyState = {
    visible: boolean;
    options?: PaymentTypeField['options'];
    forcedValue?: string;
};
export declare const resolveFieldDependency: (field: PaymentTypeField, values: PaymentFormValues) => FieldDependencyState;
export type DependentFieldWrite = {
    fieldId: string;
    value: string;
};
export declare const collectDependentFieldWrites: (fields: readonly PaymentTypeField[] | undefined, values: PaymentFormValues) => DependentFieldWrite[];
export declare const resolveDependencyVisibleFields: <T extends PaymentTypeField>(fields: readonly T[] | undefined, values: PaymentFormValues) => T[];
//# sourceMappingURL=dependentFields.d.ts.map