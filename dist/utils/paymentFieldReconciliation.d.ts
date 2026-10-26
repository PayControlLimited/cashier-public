import { PaymentTypeField } from '../types/payment.js';
import { PaymentFormValues } from './paymentFieldUtils.js';
/** One reconciliation rule shared by Formik and the private ordinary-field owner. */
export declare const collectPaymentFieldReconciliation: (fields: readonly PaymentTypeField[], values: PaymentFormValues) => import('./paymentFieldUtils.js').FieldReconciliationWrite[];
/** Callable convergence for adapters without React's reconciliation effect. */
export declare const reconcilePaymentFieldValues: (fields: readonly PaymentTypeField[], initial: PaymentFormValues) => PaymentFormValues;
//# sourceMappingURL=paymentFieldReconciliation.d.ts.map