export type FinishPaymentOptions = {
    paymentId?: string | null;
    merchantId?: string;
    replace?: boolean;
    reachedSummaryViaProvider?: boolean;
    userFlowDoneUrl?: string;
};
export declare const useFinishPayment: () => (options?: FinishPaymentOptions) => void;
//# sourceMappingURL=useFinishPayment.d.ts.map