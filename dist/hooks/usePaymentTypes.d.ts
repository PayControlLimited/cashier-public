import { PaymentType, PaymentTypeField } from '../types/payment.js';
type PaymentTypeWithHf = PaymentType & {
    hfFields?: PaymentTypeField[];
};
export default function usePaymentTypes(): {
    paymentTypesList: import('../../../api/src/payments.ts').PaymentType[];
    getPaymentType: (id: string) => PaymentTypeWithHf | null;
    pciTenantId: string | undefined;
    isLoading: boolean;
    isError: boolean;
};
export {};
//# sourceMappingURL=usePaymentTypes.d.ts.map