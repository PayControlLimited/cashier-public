import { ReactNode } from 'react';
import { CashierSummaryState } from '../utils/summaryState.js';
export { createCashierSummaryState } from '../utils/summaryState.js';
export type { CashierSummaryState, } from '../utils/summaryState.js';
export declare function CashierSummaryStateProvider({ children, state, }: {
    children: ReactNode;
    state: CashierSummaryState;
}): import('react').JSX.Element;
export declare const useCashierSummaryState: () => CashierSummaryState;
//# sourceMappingURL=summaryState.d.ts.map