import { PaymentType } from '../../../api/src/payments.js';
export declare const usePaymentSelection: () => {
    selectedPaymentType: string | null;
    selectPaymentType: (id: string) => void;
    clearPaymentSelection: () => void;
    ensureDefaultSelection: (paymentTypes: PaymentType[]) => void;
};
//# sourceMappingURL=usePaymentSelection.d.ts.map