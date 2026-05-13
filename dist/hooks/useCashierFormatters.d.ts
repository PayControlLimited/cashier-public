import { CashierDateTimeFormatOptions, CashierNumberFormatOptions } from '../types/CashierConfig.js';
type CashierFormatters = {
    currencyFormatter: Intl.NumberFormat | null;
    dateTimeFormatter: Intl.DateTimeFormat | null;
};
export default function useCashierFormatters(currency?: string, locale?: Intl.Locale | string, currencyFormatOptions?: CashierNumberFormatOptions, dateTimeFormatOptions?: CashierDateTimeFormatOptions): CashierFormatters;
export declare const formatCurrencyValue: (value: unknown, formatter?: Intl.NumberFormat | null) => string;
export declare const formatDisplayValue: (value: unknown, formatter?: Intl.NumberFormat | null, dateTimeFormatter?: Intl.DateTimeFormat | null, locale?: Intl.Locale | string, dateTimeFormatOptions?: CashierDateTimeFormatOptions) => string;
export {};
//# sourceMappingURL=useCashierFormatters.d.ts.map