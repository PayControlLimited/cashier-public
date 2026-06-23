import { ReactNode } from 'react';
import { ResolvedCashierSummaryActions } from '../utils/summaryActions.js';
type SummaryActionsProps = {
    actions: ResolvedCashierSummaryActions | null;
    onRestart: () => void;
};
export default function SummaryActions({ actions, onRestart, }: SummaryActionsProps): ReactNode;
export {};
//# sourceMappingURL=SummaryActions.d.ts.map