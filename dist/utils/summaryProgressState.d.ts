export type SummaryProgressState = {
    paymentId: string;
    reachedSummaryViaProvider: boolean;
} | null;
export declare const setSummaryProgressState: (next: SummaryProgressState) => void;
export declare const getSummaryProgressState: () => SummaryProgressState;
export declare const clearSummaryProgressState: () => void;
export declare const hasSummaryProviderStep: (paymentId: string | null) => boolean;
//# sourceMappingURL=summaryProgressState.d.ts.map