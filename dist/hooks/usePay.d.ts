import { CreatePaymentData, PaymentsRequest } from '../../../api/src/payments.js';
import { PaymentProgress } from '../context/paymentStatus.js';
import { FinishPaymentOptions } from './useFinishPayment.js';
type PayHookType = {
    makePayment: (values: PaymentsRequest) => void;
    finishPayment: (options?: FinishPaymentOptions) => void;
    paymentStatusMessage: string | null;
    paymentResponse: PaymentProgress | undefined;
    isPaymentSuccessful: boolean;
    isPaymentFailed: boolean;
    isPaymentPending: boolean;
};
declare const usePay: (path: CreatePaymentData["path"]) => PayHookType;
export default usePay;
//# sourceMappingURL=usePay.d.ts.map