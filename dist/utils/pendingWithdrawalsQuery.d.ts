import { PendingWithdrawalHistoryQuery } from './pendingWithdrawals.js';
import { Client } from '../../../api/src/payments/client.js';
export declare const pendingWithdrawalHistoryQueryKey: ({ merchantId, userId, sessionId, }: PendingWithdrawalHistoryQuery) => string[];
export declare const pendingWithdrawalHistoryQueryOptions: (params: PendingWithdrawalHistoryQuery, client: Client, enabled?: boolean) => {
    queryKey: string[];
    queryFn: () => Promise<{
        payments: import('./pendingWithdrawals.js').PendingWithdrawal[];
        totalItems: number;
        totalPages: number;
        currentPage: number;
        pageSize: number;
    }>;
    enabled: boolean;
    staleTime: number;
    gcTime: number;
};
//# sourceMappingURL=pendingWithdrawalsQuery.d.ts.map