import { assessAmount, AmountAssessment } from '../../../cashier-core/src/index.ts';
import { PaymentFormValues, TranslateKeysFn } from './paymentFieldUtils.js';
import { CashierMethods, CashierUser } from '../types/CashierConfig.js';
import { PaymentType } from '../types/payment.js';
export { assessAmount };
export declare const getAmountAssessmentErrorKey: (assessment: AmountAssessment) => string | undefined;
type PaymentAmountOptions = {
    method?: CashierMethods;
    user?: CashierUser;
    values?: PaymentFormValues;
};
export declare const assessPaymentTypeAmount: (paymentType: PaymentType, rawValue: string, options?: PaymentAmountOptions) => AmountAssessment;
/** Keep merchant field messages ahead of generic scalar amount explanations. */
export declare const getPaymentTypeAmountFieldError: (paymentType: PaymentType, assessment: AmountAssessment, values: PaymentFormValues, translateKeys: TranslateKeysFn) => string | undefined;
export declare const assessAvailablePaymentAmounts: (paymentTypes: readonly PaymentType[], rawValue: string, options?: PaymentAmountOptions) => {
    assessment: AmountAssessment;
    canProceed: boolean;
    hasAmountBearingMethods: boolean;
    hasAmountlessMethods: boolean;
};
export type AmountAssessmentDisplayOptions = {
    locale?: string | Intl.Locale;
    formatRange?: (min: string, max: string) => string;
};
export declare const formatAmountAssessmentError: (assessment: AmountAssessment, translateKey: (key: string) => string, formatAmount: (value: string) => string, displayOptions?: AmountAssessmentDisplayOptions) => string | undefined;
export declare const formatLockedAmountAssessmentError: (assessment: AmountAssessment, translateKey: (key: string) => string, formatAmount: (value: string) => string, merchantReason?: string, displayOptions?: AmountAssessmentDisplayOptions) => string | undefined;
//# sourceMappingURL=amountAssessment.d.ts.map