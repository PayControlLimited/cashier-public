type Decimal = {
    coefficient: bigint;
    scale: number;
};
export declare const parseDecimal: (input: string | number) => Decimal;
export declare const decimalString: ({ coefficient, scale, }: Decimal) => string;
export declare const multiplyDecimal: (left: Decimal, right: Decimal) => Decimal;
export declare const addDecimal: (left: Decimal, right: Decimal) => Decimal;
/** Matches models.NewMoney: one rounding at currency precision, halves away from zero. */
export declare const roundDecimal: (value: Decimal, scale: number) => Decimal;
export declare const currencyScale: (currency: string) => number;
export declare const calculateLineAmount: (unitPrice: string, quantity: number | undefined, currency: string) => string;
/** Modern Intl preserves decimal string precision; the shared formatter also owns BTC suffixes. */
export declare const formatDecimalMoney: (value: string, currency: string, locale: string, formatOptions?: Intl.NumberFormatOptions) => string;
export declare const compareDecimal: (left: Decimal, right: Decimal) => number;
export declare const subtractDecimal: (left: Decimal, right: Decimal) => Decimal;
export declare const percentageDecimal: (base: Decimal, percentage: Decimal) => Decimal;
/** Exact rational percentage rounded once to two display decimal places. */
export declare const comparisonPercentage: (saving: string, reference: string) => string;
export {};
//# sourceMappingURL=decimalMoney.d.ts.map