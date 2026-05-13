import { PaymentProgress } from '../context/paymentStatus.js';
type Args = {
    paymentResponse: PaymentProgress | undefined;
    merchantId: string;
    debug: boolean;
};
export declare const usePaymentNavigation: ({ paymentResponse, merchantId, debug, }: Args) => void;
export {};
//# sourceMappingURL=usePaymentNavigation.d.ts.map