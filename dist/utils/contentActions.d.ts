import { CashierResolvedAction, CashierPresentationScreenId } from '../types/presentation.js';
import { ResolvedCashierSummaryActions } from './summaryActions.js';
/** Scope is part of runtime identity: a live global action may reuse a frozen payment ID. */
export declare const contentActionIdentity: (scope: "global" | "payment", id: string) => string;
/** Canonical controls and released summary controls share the native renderer. */
export declare const resolveContentControls: (actions: readonly CashierResolvedAction[], layout: "row" | "stack" | undefined, screen: CashierPresentationScreenId) => ResolvedCashierSummaryActions | null;
//# sourceMappingURL=contentActions.d.ts.map