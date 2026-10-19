import { CashierPresentationText } from '../types/presentation.js';
/** Existing text-node policy, resolved before crossing the presentation boundary.
 * Serialisation escapes merchant parameter values, so they cannot become markup. */
export declare const resolveContentMarkdown: (text: CashierPresentationText, params: Record<string, string> | undefined) => CashierPresentationText;
/** Action labels use the same token policy and remain native text. */
export declare const resolveContentLabel: (text: CashierPresentationText, params: Record<string, string> | undefined) => CashierPresentationText;
/** Cashier-owned tokens cannot be overridden by merchant input. */
export declare const contentParameters: (params: Record<string, string> | undefined, amount: string | undefined, currency: string, direction: "ltr" | "rtl") => Record<string, string>;
//# sourceMappingURL=contentText.d.ts.map