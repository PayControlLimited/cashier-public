import { hasAmountValue, normalizeAmountValue, parseAmountSuggestions, sanitizeAmountInput } from '../../../format/src/index.ts';
import { CashierMethods, CashierUser } from '../types/CashierConfig.js';
import { PaymentType } from '../types/payment.js';
export { hasAmountValue, normalizeAmountValue, parseAmountSuggestions, sanitizeAmountInput, };
export declare const applyAmountEdit: (previousValue: string, nextValue: string) => string;
export declare const resolveConfiguredAmount: (rawValue: string, lockAmount: boolean) => string;
export type AmountLimits = {
    min?: string;
    max?: string;
};
export type AmountLimitStatus = {
    value: number | null;
    min: number | null;
    max: number | null;
    isBelowMin: boolean;
    isAboveMax: boolean;
    isOutOfRange: boolean;
    isIncomplete: boolean;
};
export type AmountLimitOptions = {
    maxBoundary?: number | null;
};
export type AmountLimitErrorKey = 'error.amount_below_limit' | 'error.amount_above_limit';
export type AmountLimitErrorDetails = {
    key: AmountLimitErrorKey;
    boundaryValue: number;
};
export declare const getPayoutAmountMaxBoundary: (method: CashierMethods, user?: CashierUser, fee?: PaymentType["fee"]) => number | null;
export declare const parseAmountValue: (rawValue: string) => number | null;
export declare const getAmountLimitStatus: (rawValue: string, limits?: AmountLimits, options?: AmountLimitOptions) => AmountLimitStatus;
export declare const getAmountLimitErrorKey: (rawValue: string, limits?: AmountLimits, options?: AmountLimitOptions) => AmountLimitErrorKey | undefined;
export declare const getAmountLimitErrorDetails: (rawValue: string, limits?: AmountLimits, options?: AmountLimitOptions) => AmountLimitErrorDetails | undefined;
export declare const formatAmountLimitError: (details: AmountLimitErrorDetails | undefined, translateKey: (key: string) => string, formatAmount: (value: number) => string) => string | undefined;
//# sourceMappingURL=amount.d.ts.map