import { ReactNode } from 'react';
import { Client } from '../../../api/src/payments/client.js';
export declare function CashierApiClientProvider({ children, client, }: {
    children: ReactNode;
    client: Client;
}): import("react").JSX.Element;
export declare const useCashierApiClient: () => Client;
//# sourceMappingURL=apiClient.d.ts.map