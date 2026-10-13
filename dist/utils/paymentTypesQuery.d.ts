import { QueryClient } from '@tanstack/react-query';
import { Client } from '../../../api/src/payments/client.js';
import { CashierConfig } from '../types/CashierConfig.js';
import { PaymentTypesResult } from './paymentTypes.js';
export type PaymentTypesQueryParams = Pick<CashierConfig, 'merchantId' | 'method' | 'userId' | 'sessionId' | 'currency' | 'fetchConfig'> & {
    extraAttributes: CashierConfig['extraAttributes'];
};
type PaymentTypesQueryOptionsParams = PaymentTypesQueryParams & Partial<Pick<CashierConfig, 'debug'>>;
export declare const paymentTypesQueryKey: ({ merchantId, method, userId, sessionId, currency, fetchConfig, extraAttributes, }: PaymentTypesQueryParams) => (string | boolean | Record<string, string> | undefined)[];
export declare const paymentTypesQueryOptions: (params: PaymentTypesQueryOptionsParams, client: Client) => {
    queryKey: (string | boolean | Record<string, string> | undefined)[];
    queryFn: () => Promise<PaymentTypesResult>;
    enabled: boolean;
    retry: boolean;
    refetchOnMount: boolean;
    retryOnMount: boolean;
    staleTime: number;
    gcTime: number;
};
export declare const prefetchPaymentTypes: (queryClient: QueryClient, params: PaymentTypesQueryOptionsParams, client: Client) => Promise<PaymentTypesResult>;
export {};
//# sourceMappingURL=paymentTypesQuery.d.ts.map