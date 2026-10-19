import { CashierAward, CashierFrozenAward } from '../types/CashierConfig.js';
export { awardIdentity } from './awardIdentity.js';
export declare const matchesAwardStatus: (statuses: readonly string[] | undefined, status: string | undefined, unrestricted?: boolean) => boolean;
export type AwardResolutionContext = {
    amount?: string;
    locale: string;
    resolveText: (text: string) => string;
    formatAmount: (value: string) => string;
    /** Released adapters may retain their display policy without changing arithmetic. */
    formatItemValue?: (value: string, locale: string) => string;
    defaultMessage?: string;
    parameters?: Record<string, string>;
    source?: CashierFrozenAward['source'];
};
/** Sources supply rules and context. All award arithmetic, formatting and text
 * resolution happen here; the returned literal model also serves recovery. */
export declare const resolveAwardLines: (awards: readonly CashierAward[] | undefined, context: AwardResolutionContext) => CashierFrozenAward[];
/** Phase changes presentation only: never recalculate or translate a purchase. */
export declare const resolveAwardDisplayText: (award: CashierFrozenAward, phase: "preview" | "result", direction: "ltr" | "rtl", content?: string) => string;
//# sourceMappingURL=awards.d.ts.map