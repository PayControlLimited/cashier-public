import { RedirectWithType } from './redirect.js';
import { PaymentStatusResponse } from '../../../api/src/payments.ts';
export type ParsedStatusPayload = {
    paymentId?: string;
    status?: PaymentStatusResponse['status'];
    redirect?: RedirectWithType;
    form?: PaymentStatusResponse['form'];
    /** Whether the payload describes the complete authoritative snapshot. */
    fullSnapshot: boolean;
};
export declare const normalizePaymentStatus: (status?: string | null) => PaymentStatusResponse["status"] | undefined;
export declare const parseStatusStreamPayload: (rawData: string, debug?: boolean) => ParsedStatusPayload | null;
export declare const isPendingPaymentStatus: (status?: string) => boolean;
export declare const isTerminalPaymentStatus: (status?: string) => boolean;
//# sourceMappingURL=paymentStatus.d.ts.map