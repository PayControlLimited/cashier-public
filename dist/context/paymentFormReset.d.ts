import { ReactNode } from 'react';
type ResetHandler = (() => void) | null;
type PaymentFormResetContextValue = {
    reset: () => void;
    registerReset: (handler: ResetHandler) => void;
    hasResetHandler: boolean;
};
type PaymentFormResetProviderProps = {
    children: ReactNode;
};
export declare function PaymentFormResetProvider({ children, }: PaymentFormResetProviderProps): ReactNode;
export declare function usePaymentFormReset(): PaymentFormResetContextValue;
export {};
//# sourceMappingURL=paymentFormReset.d.ts.map