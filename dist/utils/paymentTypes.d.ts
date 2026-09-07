import { GetPaymentTypesData, PaymentType } from '../../../api/src/payments.ts';
import { Client } from '../../../api/src/payments/client.js';
import { CashierConfig } from '../types/CashierConfig.js';
export declare const SAVED_CARD_EXPIRY_INVALID_MESSAGE_KEY = "account.saved_card_expiry_invalid";
export declare const getPaymentTypeNameKeys: (rawPaymentType: unknown, rawMethod: unknown, rawService?: unknown) => string[];
export declare const formatCardAccountLabel: (paymentType: PaymentType) => string | null;
export declare const getPaymentTypeSelectionId: (paymentType: PaymentType) => string;
export declare const isPaymentTypeUnavailable: (paymentType: PaymentType | null | undefined) => boolean;
export declare const findPaymentTypeRecovery: (paymentTypes: PaymentType[], unavailablePaymentType: PaymentType) => PaymentType | null;
export type PaymentTypesResult = {
    paymentTypes: PaymentType[];
    currency?: string;
    pciTenantId?: string;
    cashierConfig?: Partial<CashierConfig>;
};
export declare const fetchPaymentTypes: (query: GetPaymentTypesData["query"], options: {
    client: Client;
    debug?: boolean;
    fetchConfig?: boolean;
}) => Promise<PaymentTypesResult>;
export declare const resolvePaymentTypeMatch: (paymentTypes: PaymentType[], rawMatch?: string | null) => PaymentType | null;
export declare const resolveAvailablePaymentTypeMatch: (paymentTypes: PaymentType[], rawMatch?: string | null) => PaymentType | null;
//# sourceMappingURL=paymentTypes.d.ts.map