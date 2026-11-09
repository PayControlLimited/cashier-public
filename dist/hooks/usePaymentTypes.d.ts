import { PaymentType, PaymentTypeField } from '../types/payment.js';
type PaymentTypeWithHf = PaymentType & {
    hfFields?: PaymentTypeField[];
};
export default function usePaymentTypes(): {
    paymentTypesList: import('../../../api/src/payments.ts').PaymentType[];
    paymentTypeGroups: {
        label: Readonly<{
            value: string;
            key?: string;
        }>;
        id: string;
        kind: "section" | "unsectioned";
        sectionId?: string;
        paymentTypeIds: readonly string[];
    }[] | undefined;
    getPaymentType: (id: string) => PaymentTypeWithHf | null;
    pciTenantId: string | undefined;
    isLoading: boolean;
    isError: boolean;
    hasPaymentTypesResponse: boolean;
};
export {};
//# sourceMappingURL=usePaymentTypes.d.ts.map