import { RedirectWithType } from './redirect.js';
import { PaymentStatusResponse } from '../../../api/src/payments.js';
type ParsedStatusPayload = {
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
    userId: string;
    sessionId: string;
};
type StatusListener = (event: ParsedStatusPayload | null) => void;
type StatusErrorListener = (event: Event) => void;
type StreamStateListener = (isActive: boolean) => void;
export declare const subscribeToStatusStream: (paymentId: string | null, listener: StatusListener) => (() => void);
export declare const subscribeToStatusErrors: (listener: StatusErrorListener) => (() => void);
export declare const subscribeToStatusStreamState: (listener: StreamStateListener) => (() => void);
export declare const stopStatusStream: (reason?: string) => void;
type StartStatusStreamParams = StatusStreamParams & {
    debug?: boolean;
};
export declare const startStatusStream: ({ paymentId, merchantId, userId, sessionId, debug, }: StartStatusStreamParams) => EventSource | null;
export {};
//# sourceMappingURL=paymentStatus.d.ts.map