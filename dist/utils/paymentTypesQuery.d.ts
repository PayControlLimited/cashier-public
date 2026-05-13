import { QueryClient } from '@tanstack/react-query';
import { CashierConfig } from '../types/CashierConfig.js';
import { PaymentTypesResult } from './paymentTypes.js';
export type PaymentTypesQueryParams = Pick<CashierConfig, 'merchantId' | 'method' | 'userId' | 'sessionId' | 'currency'>;
export declare const paymentTypesQueryKey: ({ merchantId, method, userId, sessionId, currency, }: PaymentTypesQueryParams) => string[];
export declare const paymentTypesQueryOptions: (params: PaymentTypesQueryParams) => {
    queryKey: string[];
    queryFn: () => Promise<PaymentTypesResult>;
    enabled: boolean;
    staleTime: number;
    gcTime: number;
};
export declare const prefetchPaymentTypes: (queryClient: QueryClient, params: PaymentTypesQueryParams) => Promise<PaymentTypesResult>;
//# sourceMappingURL=paymentTypesQuery.d.ts.map