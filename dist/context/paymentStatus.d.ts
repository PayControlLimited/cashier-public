import { ReactNode } from 'react';
import { CreatePaymentData, PaymentsRequest, PaymentsResponse } from '../../../api/src/payments.ts';
import { PaymentTrackingPhase, TrackedPaymentProgress } from '../utils/paymentLifecycleTracker.js';
export type PaymentProgress = Omit<TrackedPaymentProgress, 'paymentId'> & {
    paymentId?: string;
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
    redirect: PaymentProgress['redirect'];
    paymentStatusMessage: string | null;
    makePayment: (variables: PaymentMutationVariables) => Promise<PaymentsResponse>;
    clearPaymentState: (options?: ClearPaymentStateOptions) => void;
    setPaymentTracking: (paymentId: PaymentsResponse['paymentId'] | null, initial?: Partial<PaymentProgress>) => void;
    isPaymentPending: boolean;
    isPaymentFailed: boolean;
    isPaymentSuccessful: boolean;
    isTrackingFatal: boolean;
    trackingPhase: PaymentTrackingPhase;
    refreshPaymentTracking: () => void;
};
type PaymentInteractionLockProviderProps = {
    children: ReactNode;
    locked: boolean;
};
export declare const PaymentInteractionLockProvider: ({ children, locked, }: PaymentInteractionLockProviderProps) => import("react").JSX.Element;
export declare const PaymentProvider: ({ children }: {
    children: ReactNode;
}) => import("react").JSX.Element;
export declare const usePaymentStatus: () => PaymentContextValue;
export declare const useIsPaymentInteractionLocked: () => boolean;
export {};
//# sourceMappingURL=paymentStatus.d.ts.map