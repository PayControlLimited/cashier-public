import { GetPaymentHistoryData, PaymentHistoryEntry } from '../../../api/src/payments.ts';
import { Client } from '../../../api/src/payments/client.js';
export type PendingWithdrawal = PaymentHistoryEntry & {
    amountValue: number;
    amountCurrency: string;
};
export type PendingWithdrawalCurrencyTotal = {
    amount: number;
    currency: string;
};
export type PendingWithdrawalHistoryQuery = Pick<GetPaymentHistoryData['query'], 'merchantId' | 'userId' | 'sessionId'>;
type PendingWithdrawalHistoryResult = {
    payments: PendingWithdrawal[];
    totalItems: number;
    totalPages: number;
    currentPage: number;
    pageSize: number;
};
export declare const fetchPendingWithdrawalHistory: (query: PendingWithdrawalHistoryQuery, client: Client) => Promise<PendingWithdrawalHistoryResult>;
type CancelPendingWithdrawalParams = {
    client: Client;
    merchantId: string;
    userId: string;
    sessionId: string;
    paymentId: string;
};
export declare const cancelPendingWithdrawal: ({ client, merchantId, userId, sessionId, paymentId, }: CancelPendingWithdrawalParams) => Promise<import('../../../api/src/payments.ts').CancelPaymentResponse | undefined>;
export declare const resolvePendingWithdrawalDismissKey: (pendingWithdrawals: PendingWithdrawal[]) => string | null;
export declare const getPendingWithdrawalCurrencyTotals: (pendingWithdrawals: PendingWithdrawal[]) => PendingWithdrawalCurrencyTotal[];
export {};
//# sourceMappingURL=pendingWithdrawals.d.ts.map