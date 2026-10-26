import { PaymentCreationAttempt, createPaymentCreationController } from '../../../cashier-core/src/index.ts';
import { CreatePaymentData, PaymentsRequest, PaymentsResponse } from '../../../api/src/payments.ts';
import { Client } from '../../../api/src/payments/client.js';
export declare class PaymentCreationError extends Error {
    readonly rejected: boolean;
    constructor(message: string, rejected: boolean);
}
export declare const normalizePaymentCreationError: (raw: unknown) => {
    error: string;
};
/** The Web and private facade use the same request and certainty classification. Never retries. */
export declare const requestOwnedPayment: ({ body, path, attempt, creation, client, }: {
    body: PaymentsRequest;
    path: CreatePaymentData["path"];
    attempt: PaymentCreationAttempt;
    creation: ReturnType<typeof createPaymentCreationController>;
    client: Client;
}) => Promise<PaymentsResponse>;
//# sourceMappingURL=paymentCreationRequest.d.ts.map