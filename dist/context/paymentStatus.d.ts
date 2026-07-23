import { ReactNode } from 'react';
import { CreatePaymentData, PaymentStatusResponse, PaymentsRequest, PaymentsResponse } from '../../../api/src/payments.ts';
import { RedirectWithType } from '../utils/redirect.js';
type PaymentProgressBase = Omit<PaymentsResponse, 'redirect'> & {
    redirect?: RedirectWithType;
};
export type PaymentProgress = PaymentProgressBase & Partial<Omit<PaymentStatusResponse, 'redirect'>> & {
    redirect?: RedirectWithType;
};
export type PaymentError = {
    error: string;
};
export type PaymentMutationVariables = {
    body: PaymentsRequest;
    path: CreatePaymentData['path'];
};
type ClearPaymentStateOptions = {
    closeProviderWindow?: boolean;
    resetCreateState?: boolean;
};
type PaymentContextValue = {
    payment: PaymentProgress | undefined;
    paymentId: PaymentsResponse['paymentId'] | null;
    status: PaymentProgress['status'];
    redirect: RedirectWithType | undefined;
    paymentStatusMessage: string | null;
    makePayment: (variables: PaymentMutationVariables) => Promise<PaymentsResponse>;
    clearPaymentState: (options?: ClearPaymentStateOptions) => void;
    setPaymentTracking: (paymentId: PaymentsResponse['paymentId'] | null, initial?: Partial<PaymentProgress>) => void;
    isPaymentPending: boolean;
    isPaymentFailed: boolean;
    isPaymentSuccessful: boolean;
};
export declare const PaymentProvider: ({ children }: {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const usePaymentStatus: () => PaymentContextValue;
export {};
//# sourceMappingURL=paymentStatus.d.ts.map