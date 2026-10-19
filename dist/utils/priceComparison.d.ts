import { CashierPriceComparison, CashierResolvedPriceComparison } from '../types/offers.js';
import { CashierPresentationText } from '../types/presentation.js';
export declare const isPlainRecord: (value: unknown) => value is Record<string, unknown>;
export declare const hasOnlyKeys: (value: Record<string, unknown>, keys: string[]) => boolean;
export declare const isExactPrice: (value: unknown) => value is string;
export declare const isPriceComparison: (value: unknown, order?: boolean) => value is CashierPriceComparison;
export type PriceResolutionContext = {
    currency: string;
    locale: string;
    formatOptions?: Intl.NumberFormatOptions;
    resolveText: (value: string) => CashierPresentationText;
};
/** Informational only. Unit rules round after multiplication; line/order rules once after reduction. */
export declare const resolvePriceComparison: (pricing: CashierPriceComparison | undefined, current: string | undefined, context: PriceResolutionContext, quantity?: number, order?: boolean) => CashierResolvedPriceComparison | undefined;
export declare const isResolvedPriceComparison: (value: unknown) => value is CashierResolvedPriceComparison;
//# sourceMappingURL=priceComparison.d.ts.map