import { PaymentSummaryResponse } from '../../../api/src/payments.ts';
import { Client } from '../../../api/src/payments/client.js';
import { CashierConfig } from '../types/CashierConfig.js';
/** Existing Web summary scheduling, shared with the private facade. One observer per payment. */
export declare const createPaymentSummaryObserver: ({ client, paymentId, merchantId, initial, onChange, onPaymentUpdated, debug, }: {
    client: Client;
    paymentId: string;
    merchantId: string;
    initial?: PaymentSummaryResponse;
    onChange: (summary: PaymentSummaryResponse) => void;
    onPaymentUpdated?: CashierConfig["onPaymentUpdated"];
    debug?: boolean;
}) => {
    dispose: () => void;
    refresh: () => void;
};
//# sourceMappingURL=paymentSummaryObserver.d.ts.map