import { PaymentCreationAttempt, createPaymentCreationController } from '../../../cashier-core/src/index.ts';
import { PaymentsResponse } from '../../../api/src/payments.ts';
import { PaymentAttempt } from './paymentAttempt.js';
import { PaymentLifecycleTracker } from './paymentLifecycleTracker.js';
/** Shared acknowledgement/callback/observation ordering. Never renderer-injectable. */
export declare const handOffCreatedPayment: ({ creation, attempt, generation, purchaseAttempt, data, tracker, merchantOwnsProviderWindow, committed, created, }: {
    creation: ReturnType<typeof createPaymentCreationController>;
    attempt: PaymentCreationAttempt;
    generation?: number;
    purchaseAttempt?: PaymentAttempt;
    data: PaymentsResponse;
    tracker: PaymentLifecycleTracker;
    merchantOwnsProviderWindow?: boolean;
    committed: () => void;
    created: (paymentContextId: string | undefined) => void | Promise<void>;
}) => boolean;
//# sourceMappingURL=paymentCreationHandoff.d.ts.map