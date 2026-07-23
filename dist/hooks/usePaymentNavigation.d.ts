import { PaymentProgress } from '../context/paymentStatus.js';
type Args = {
    paymentResponse: PaymentProgress | undefined;
    merchantId: string;
    debug: boolean;
    enabled?: boolean;
};
export declare const usePaymentNavigation: ({ paymentResponse, merchantId, debug, enabled, }: Args) => void;
export {};
//# sourceMappingURL=usePaymentNavigation.d.ts.map