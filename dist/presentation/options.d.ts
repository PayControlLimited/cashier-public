import { CashierSummaryActions } from '../types/CashierConfig.js';
import { CashierPresentationOptions } from '../types/presentation.js';
export type ResolvedPresentationSummaryActions = Readonly<{
    actions?: CashierSummaryActions;
    source: 'presentation' | 'legacy' | 'default';
    invalidPresentationValue: boolean;
    invalidLegacyValue: boolean;
}>;
export declare const resolvePresentationSummaryActions: (options: CashierPresentationOptions | undefined, legacyActions: unknown) => ResolvedPresentationSummaryActions;
//# sourceMappingURL=options.d.ts.map