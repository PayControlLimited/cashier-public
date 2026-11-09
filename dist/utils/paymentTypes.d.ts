import { GetPaymentTypesData, PaymentType, PaymentTypesRequest, PaymentTypesResponse } from '../../../api/src/payments.ts';
import { Client } from '../../../api/src/payments/client.js';
import { PaymentTypesSort } from '../../../cashier-core/src/index.ts';
import { CashierConfig } from '../types/CashierConfig.js';
export declare const releasePaymentTypeIdentities: (client: Client) => void;
export declare const PAYMENT_TYPE_UNAVAILABLE_LABEL_KEY = "account.unavailable";
export declare const PAYMENT_TYPE_UNAVAILABLE_STATUS_LABEL_KEY = "account.unavailable.status_label";
export declare const PAYMENT_TYPE_UNAVAILABLE_MESSAGE_KEY = "account.unavailable.description";
export declare const getPaymentTypeNameKeys: (rawPaymentType: unknown, rawMethod: unknown, rawService?: unknown) => string[];
export declare const formatCardAccountLabel: (paymentType: PaymentType) => string | null;
export declare const getPaymentTypeSelectionId: (paymentType: PaymentType) => string;
export declare const isPaymentTypeUnavailable: (paymentType: PaymentType | null | undefined) => boolean;
/** Freeze transport fields without losing the catalogue's opaque selection handle. */
export declare const snapshotPaymentTypeSelection: (row: PaymentType) => PaymentType;
export declare const findPaymentTypeRecovery: (paymentTypes: PaymentType[], unavailablePaymentType: PaymentType) => PaymentType | null;
export type PaymentTypesResult = {
    paymentTypes: PaymentType[];
    sections?: PaymentTypesResponse['sections'];
    currency?: string;
    pciTenantId?: string;
    cashierConfig?: Partial<CashierConfig>;
};
export declare const fetchPaymentTypes: (query: GetPaymentTypesData["query"] & Pick<PaymentTypesRequest, "extra">, options: {
    client: Client;
    debug?: boolean;
    fetchConfig?: boolean;
    signal?: AbortSignal;
    requireData?: boolean;
}) => Promise<PaymentTypesResult>;
export declare const resolvePaymentTypeMatch: (paymentTypes: PaymentType[], rawMatch?: string | null) => PaymentType | null;
export declare const resolveAvailablePaymentTypeMatch: (paymentTypes: PaymentType[], rawMatch?: string | null) => PaymentType | null;
export declare const toPaymentTypeSelectionRow: (row: PaymentType) => {
    id: string;
    sectionId: string | undefined;
    accountRef: string | undefined;
    unavailableReason: string | undefined;
};
export declare const projectCashierPaymentTypes: (rows: PaymentType[], sections: PaymentTypesResult["sections"], policy?: PaymentTypesSort) => {
    paymentTypes: PaymentType[];
    groups: readonly Readonly<{
        id: string;
        kind: "section" | "unsectioned";
        sectionId?: string;
        nameKey: string;
        paymentTypeIds: readonly string[];
    }>[] | undefined;
};
export declare const isAmbiguousPaymentTypeSelection: (client: Client, query: GetPaymentTypesData["query"], id: string) => boolean;
//# sourceMappingURL=paymentTypes.d.ts.map