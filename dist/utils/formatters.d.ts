import { PaymentSummaryField } from '../../../api/src/payments.ts';
import { CurrencyFormatter } from '../../../format/src/index.ts';
import { CashierDateTimeFormatOptions, CashierNumberFormatOptions } from '../types/CashierConfig.js';
export declare const createCashierCurrencyFormatter: (currency?: string, locale?: Intl.Locale | string, currencyFormatOptions?: CashierNumberFormatOptions) => CurrencyFormatter | null;
export declare const formatCurrencyValue: (value: unknown, formatter?: CurrencyFormatter | null) => string;
export declare const createSummaryValueFormatter: ({ currency, currencyFormatter, locale, currencyFormatOptions, }?: {
    currency?: string;
    currencyFormatter?: CurrencyFormatter | null;
    locale?: Intl.Locale | string;
    currencyFormatOptions?: CashierNumberFormatOptions;
}) => ((value: PaymentSummaryField["value"]) => string);
export declare const formatDisplayValue: (value: unknown, formatter?: CurrencyFormatter | null, dateTimeFormatter?: Intl.DateTimeFormat | null, locale?: Intl.Locale | string, dateTimeFormatOptions?: CashierDateTimeFormatOptions) => string;
//# sourceMappingURL=formatters.d.ts.map