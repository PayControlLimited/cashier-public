import { PaymentSummaryField } from '../../../api/src/payments.ts';
import { PaymentType } from '../types/payment.js';
type PaymentTypeFee = NonNullable<PaymentType['fee']>;
type PaymentTypeFeeDirection = NonNullable<PaymentTypeFee['direction']>;
type PaymentTypeFeeType = NonNullable<PaymentTypeFee['feeType']>;
export type CalculatedPaymentTypeFee = {
    amount: number;
    signedAmount: number;
    direction: PaymentTypeFeeDirection;
    feeType: PaymentTypeFeeType;
};
export declare const hasMeaningfulFeeValue: (fee: PaymentType["fee"] | undefined) => boolean;
export declare const resolveFeeDirectionSign: (direction: PaymentTypeFee["direction"] | undefined) => string;
export declare const createFeeCurrencyFormatter: (currencyFormatter: Intl.NumberFormat | null) => Intl.NumberFormat | null;
export declare const formatCalculatedPaymentTypeFee: (fee: PaymentType["fee"] | undefined, amount: number, options: {
    feeCurrencyFormatter: Intl.NumberFormat | null;
    formatCurrencyValue: (value: unknown) => string;
}) => string;
export declare const getCalculatedFeeSummaryField: (fee: PaymentType["fee"] | undefined, amount: number, options: {
    feeCurrencyFormatter: Intl.NumberFormat | null;
    formatCurrencyValue: (value: unknown) => string;
}) => PaymentSummaryField | null;
export declare const getCalculatedPayoutTotalSummaryField: (fee: PaymentType["fee"] | undefined, amount: number, currency: string) => PaymentSummaryField | null;
export declare const getCalculatedPayinTotalSummaryField: (fee: PaymentType["fee"] | undefined, amount: number, currency: string) => PaymentSummaryField | null;
export declare const insertSummaryFieldsBeforeRemainingBalance: (fields: PaymentSummaryField[], insertedFields: Array<PaymentSummaryField | null>) => PaymentSummaryField[];
export declare const getFeeAdjustedPayoutAmountMax: (withdrawableBalance: number, _fee: PaymentType["fee"] | undefined) => number;
export declare const getFeeAdjustedPayoutConsumedAmount: (amount: number, _fee: PaymentType["fee"] | undefined) => number;
export {};
//# sourceMappingURL=paymentTypeFee.d.ts.map