import { CashierResolvedDisplayItem, CashierPresentationText } from '../types/presentation.js';
import { DisplayItemInput } from './displayItemValidation.js';
/** Literal display projection only: never contributes to the submitted amount. */
export declare const resolveDisplayItems: (items: readonly DisplayItemInput[] | undefined, context: {
    locale: string;
    currency: string;
    amount?: string;
    resolveText: (value: string) => CashierPresentationText;
    formatOptions?: Intl.NumberFormatOptions;
}) => CashierResolvedDisplayItem[];
//# sourceMappingURL=displayItems.d.ts.map