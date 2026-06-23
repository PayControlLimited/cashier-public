import { CurrencyFormatter } from '../../../format/src/index.ts';
import { CashierDateTimeFormatOptions, CashierNumberFormatOptions } from '../types/CashierConfig.js';
type CashierFormatters = {
    currencyFormatter: CurrencyFormatter | null;
    dateTimeFormatter: Intl.DateTimeFormat | null;
};
export default function useCashierFormatters(currency?: string, locale?: Intl.Locale | string, currencyFormatOptions?: CashierNumberFormatOptions, dateTimeFormatOptions?: CashierDateTimeFormatOptions): CashierFormatters;
export declare const formatCurrencyValue: (value: unknown, formatter?: CurrencyFormatter | null) => string;
export declare const formatDisplayValue: (value: unknown, formatter?: CurrencyFormatter | null, dateTimeFormatter?: Intl.DateTimeFormat | null, locale?: Intl.Locale | string, dateTimeFormatOptions?: CashierDateTimeFormatOptions) => string;
export {};
//# sourceMappingURL=useCashierFormatters.d.ts.map