import { GetPaymentTypesData, PaymentType } from '../../../api/src/payments.ts';
import { CashierConfig } from '../types/CashierConfig.js';
export declare const getPaymentTypeNameKeys: (rawPaymentType: unknown, rawMethod: unknown, rawService?: unknown) => string[];
export declare const formatCardAccountLabel: (paymentType: PaymentType) => string | null;
export declare const getPaymentTypeSelectionId: (paymentType: PaymentType) => string;
export type PaymentTypesResult = {
    paymentTypes: PaymentType[];
    currency?: string;
    pciTenantId?: string;
    cashierConfig?: Partial<CashierConfig>;
};
export declare const fetchPaymentTypes: (query: GetPaymentTypesData["query"], options?: {
    debug?: boolean;
    fetchConfig?: boolean;
}) => Promise<PaymentTypesResult>;
export declare const resolvePaymentTypeMatch: (paymentTypes: PaymentType[], rawMatch?: string | null) => PaymentType | null;
//# sourceMappingURL=paymentTypes.d.ts.map