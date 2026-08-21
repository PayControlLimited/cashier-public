import { RedirectWithType } from './redirect.js';
import { PaymentStatusResponse } from '../../../api/src/payments.ts';
import { CashierPaymentUpdatedEvent } from '../types/CashierConfig.js';
type ParsedStatusPayload = {
    paymentId?: string;
    status?: PaymentStatusResponse['status'];
    redirect?: RedirectWithType;
    form?: PaymentStatusResponse['form'];
};
export declare const normalizePaymentStatus: (status?: string | null) => PaymentStatusResponse["status"] | undefined;
export declare const parseStatusStreamPayload: (rawData: string, debug?: boolean) => ParsedStatusPayload | null;
export declare const isPendingPaymentStatus: (status?: string) => boolean;
export declare const isTerminalPaymentStatus: (status?: string) => boolean;
type StatusStreamParams = {
    paymentId: string;
    merchantId: string;
    userId?: string;
    sessionId: string;
};
type StatusListener = (event: ParsedStatusPayload | null) => void;
type StatusErrorListener = (event: Event) => void;
type StreamStateListener = (isActive: boolean) => void;
export declare const subscribeToStatusStream: (paymentId: string | null, listener: StatusListener) => (() => void);
export declare const subscribeToStatusErrors: (listener: StatusErrorListener) => (() => void);
export declare const subscribeToStatusStreamState: (listener: StreamStateListener) => (() => void);
/**
 * Closes the shared status stream. When ownerKey is given (string or null),
 * the stream is only closed if it belongs to that payment, so one payment's
 * teardown (state reset, unmount) never cuts the stream another payment on
 * the same page is relying on. Omit ownerKey for the unconditional stop used
 * when replacing the stream or when the stream itself ends.
 */
export declare const stopStatusStream: (reason?: string, ownerKey?: string | null) => void;
type StartStatusStreamParams = StatusStreamParams & {
    debug?: boolean;
    onPaymentUpdated?: (event: CashierPaymentUpdatedEvent) => void;
};
export declare const startStatusStream: ({ paymentId, merchantId, userId, sessionId, debug, onPaymentUpdated, }: StartStatusStreamParams) => EventSource | null;
export {};
//# sourceMappingURL=paymentStatus.d.ts.map