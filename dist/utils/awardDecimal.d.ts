export declare const resolveAwardValue: (options: {
    type: "fixed" | "percentage" | "multiplier";
    value: number;
    maxValue?: number;
    rounding?: "floor" | "ceil" | "round" | "none";
}, amount: string | undefined, item: boolean) => string | null;
/** Localise exact quantities without converting decimal fractions back to binary floats. */
export declare const formatAwardQuantity: (value: string, locale: string) => string;
//# sourceMappingURL=awardDecimal.d.ts.map