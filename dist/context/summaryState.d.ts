import { ReactNode } from 'react';
export type CashierSummaryAccess = Readonly<{
    paymentId: string;
    merchantId: string;
    selectedBonusCode?: string | null;
}> | null;
export type CashierSummaryProgressState = Readonly<{
    paymentId: string;
    reachedSummaryViaProvider: boolean;
}> | null;
export type CashierSummaryState = Readonly<{
    getAccess: () => CashierSummaryAccess;
    setAccess: (next: CashierSummaryAccess) => void;
    clearAccess: () => void;
    getProgress: () => CashierSummaryProgressState;
    setProgress: (next: CashierSummaryProgressState) => void;
    clearProgress: () => void;
    hasProviderStep: (paymentId: string | null) => boolean;
}>;
export declare const createCashierSummaryState: () => CashierSummaryState;
export declare function CashierSummaryStateProvider({ children, state, }: {
    children: ReactNode;
    state: CashierSummaryState;
}): import("react").JSX.Element;
export declare const useCashierSummaryState: () => CashierSummaryState;
//# sourceMappingURL=summaryState.d.ts.map