import { PaymentSummaryField } from '../../../api/src/payments.ts';
import { CashierPresentationSummaryField, CashierPresentationText } from '../types/presentation.js';
type SummaryMoney = {
    value: string;
    currency: string;
};
export declare const parseSummaryMoney: (value: unknown) => SummaryMoney | null;
export declare const summaryMoneyMatches: (value: unknown, expected: SummaryMoney) => boolean;
export declare const projectPaymentSummaryFields: (fields: readonly PaymentSummaryField[], resolveTextKey: (key: string) => CashierPresentationText, formatValue: (value: PaymentSummaryField["value"]) => string) => CashierPresentationSummaryField[];
export declare const getSummaryFieldValue: (fields: PaymentSummaryField[], id: string) => PaymentSummaryField["value"] | undefined;
export {};
//# sourceMappingURL=paymentSummaryFields.d.ts.map