import { ReactNode } from 'react';
import { CashierConfig, CashierPaymentFormState } from '../types/CashierConfig.js';
import { PaymentFormValues } from '../utils/paymentFieldUtils.js';
type PaymentFormObserverContextValue = {
    hasPendingInitialSurface: boolean;
    revealInitialSurface: () => void;
    setSurfacePending: (sourceId: string, pending: boolean) => void;
    cancelSubmission: (sourceId: string) => void;
    clearActive: (sourceId: string) => void;
    completePendingSubmission: () => void;
    isSubscribed: boolean;
    markSubmissionStarted: (sourceId: string) => void;
    publishActive: (sourceId: string, state: CashierPaymentFormState) => void;
    publishInactive: (sourceId: string) => void;
};
export declare function PaymentFormObserverProvider({ children, debug, onPaymentFormChanged, }: {
    children: ReactNode;
    debug: boolean;
    onPaymentFormChanged: CashierConfig['onPaymentFormChanged'];
}): ReactNode;
export declare const usePaymentFormObserver: () => PaymentFormObserverContextValue;
export declare function PaymentFormStatePublisher({ sourceId, state, resolveState, }: {
    sourceId: string;
    state: CashierPaymentFormState | null;
    resolveState?: {
        values: PaymentFormValues;
        map: (state: CashierPaymentFormState, values: PaymentFormValues) => CashierPaymentFormState | null;
    };
}): null;
export {};
//# sourceMappingURL=paymentFormObserver.d.ts.map