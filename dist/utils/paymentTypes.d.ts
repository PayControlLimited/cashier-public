import { GetPaymentTypesData, PaymentType } from '../../../api/src/payments.js';
export declare const formatCardAccountLabel: (paymentType: PaymentType) => string | null;
export declare const getPaymentTypeSelectionId: (paymentType: PaymentType) => string;
export type PaymentTypesResult = {
    paymentTypes: PaymentType[];
    currency?: string;
    pciTenantId?: string;
};
export declare const fetchPaymentTypes: (query: GetPaymentTypesData["query"]) => Promise<PaymentTypesResult>;
export declare const resolvePaymentTypeMatch: (paymentTypes: PaymentType[], rawMatch?: string | null) => PaymentType | null;
//# sourceMappingURL=paymentTypes.d.ts.map