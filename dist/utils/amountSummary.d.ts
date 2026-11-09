import { CashierNumberFormatOptions } from '../types/CashierConfig.js';
/** A fixed amount must not appear as zero merely because currency display rounds. */
export declare const formatFixedPaymentAmount: (rawValue: string, currency: string, locale?: string | Intl.Locale, formatOptions?: CashierNumberFormatOptions) => string;
/** Let Intl place and share currency markers according to the configured locale. */
export declare const formatFixedPaymentAmountRange: (min: string, max: string, currency: string, locale?: string | Intl.Locale, formatOptions?: CashierNumberFormatOptions) => string;
//# sourceMappingURL=amountSummary.d.ts.map