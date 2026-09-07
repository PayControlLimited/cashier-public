import { ReactNode } from 'react';
import { ResolvedCashierSummaryAction, ResolvedCashierSummaryActions } from '../utils/summaryActions.js';
type SummaryActionsProps = {
    actions: ResolvedCashierSummaryActions | null;
    onRestart: () => void;
};
export declare const activateResolvedSummaryAction: (action: ResolvedCashierSummaryAction, onRestart: () => void) => void;
export declare const getResolvedSummaryActionKind: (action: ResolvedCashierSummaryAction) => "button" | "link" | "text";
export default function SummaryActions({ actions, onRestart, }: SummaryActionsProps): ReactNode;
export {};
//# sourceMappingURL=SummaryActions.d.ts.map