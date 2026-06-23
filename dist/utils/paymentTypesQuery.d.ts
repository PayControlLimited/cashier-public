import { QueryClient } from '@tanstack/react-query';
import { CashierConfig } from '../types/CashierConfig.js';
import { PaymentTypesResult } from './paymentTypes.js';
export type PaymentTypesQueryParams = Pick<CashierConfig, 'merchantId' | 'method' | 'userId' | 'sessionId' | 'currency' | 'fetchConfig'>;
type PaymentTypesQueryOptionsParams = PaymentTypesQueryParams & Partial<Pick<CashierConfig, 'debug'>>;
export declare const paymentTypesQueryKey: ({ merchantId, method, userId, sessionId, currency, fetchConfig, }: PaymentTypesQueryParams) => (string | boolean)[];
export declare const paymentTypesQueryOptions: (params: PaymentTypesQueryOptionsParams) => {
    queryKey: (string | boolean)[];
    queryFn: () => Promise<PaymentTypesResult>;
    enabled: boolean;
    retry: boolean;
    refetchOnMount: boolean;
    retryOnMount: boolean;
    staleTime: number;
    gcTime: number;
};
export declare const prefetchPaymentTypes: (queryClient: QueryClient, params: PaymentTypesQueryOptionsParams) => Promise<PaymentTypesResult>;
export {};
//# sourceMappingURL=paymentTypesQuery.d.ts.map