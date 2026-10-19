import { ResolvedCashierSummaryActions } from '../utils/summaryActions.js';
import { CashierPresentationLocalisation } from '../types/presentation.js';
/** One built-in renderer. Labels arrive resolved, including frozen messages. */
export declare function ContentActions({ actions, onRestart, legacySummaryHooks, localisations, alignments, }: {
    actions: ResolvedCashierSummaryActions;
    onRestart?: () => void;
    localisations?: Partial<Record<string, CashierPresentationLocalisation>>;
    alignments?: Record<string, 'start' | 'centre' | 'end' | undefined>;
    legacySummaryHooks?: boolean;
}): import('react').JSX.Element;
//# sourceMappingURL=ContentActions.d.ts.map