import { PaymentProgress } from '../context/paymentStatus.js';
type Args = {
    paymentResponse: PaymentProgress | undefined;
    merchantId: string;
    debug: boolean;
    pathname: string;
};
export declare const usePaymentNavigation: ({ paymentResponse, merchantId, debug, pathname, }: Args) => void;
export {};
//# sourceMappingURL=usePaymentNavigation.d.ts.map