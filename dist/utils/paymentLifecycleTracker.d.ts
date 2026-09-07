import { PaymentStatusResponse } from '../../../api/src/payments.ts';
import { Client } from '../../../api/src/payments/client.js';
import { CashierPaymentProgress, CashierPaymentUpdatedEvent } from '../types/CashierConfig.js';
import { RedirectWithType } from './redirect.js';
export type PaymentTrackingPhase = 'idle' | 'tracking' | 'recovering' | 'fatal' | 'terminal';
export type TrackedPaymentProgress = {
    paymentId: string;
    paymentStatus?: string;
    redirect?: RedirectWithType;
} & Partial<Omit<PaymentStatusResponse, 'paymentId' | 'redirect'>>;
export type PaymentLifecycleSnapshot = Readonly<{
    phase: PaymentTrackingPhase;
    payment: TrackedPaymentProgress | undefined;
    paymentId: string | null;
    errorMessage: string | null;
    fatalStatus: number | null;
}>;
export type PaymentLifecycleTrackerConfiguration = Readonly<{
    client: Client;
    merchantId: string;
    userId?: string;
    sessionId: string;
    debug?: boolean;
    onPaymentUpdated?: (event: CashierPaymentUpdatedEvent) => void | Promise<void>;
    onPaymentFinished?: (payment: CashierPaymentProgress) => void | Promise<void>;
}>;
type PaymentStatusFetchResult = Readonly<{
    data?: unknown;
    error?: unknown;
    response?: Pick<Response, 'status'>;
}>;
type PaymentStatusFetcher = (params: Readonly<{
    client: Client;
    merchantId: string;
    paymentId: string;
    sessionId: string;
    signal: AbortSignal;
    userId?: string;
}>) => Promise<PaymentStatusFetchResult>;
export type PaymentLifecycleTrackerDependencies = Readonly<{
    createEventSource?: (url: string, init: EventSourceInit) => EventSource;
    fetchStatus?: PaymentStatusFetcher;
    now?: () => number;
}>;
export type PaymentLifecycleTracker = Readonly<{
    activate: () => void;
    deactivate: () => void;
    configure: (configuration: PaymentLifecycleTrackerConfiguration) => {
        boundaryClearedPaymentId?: string;
    };
    getSnapshot: () => PaymentLifecycleSnapshot;
    subscribe: (listener: () => void) => () => void;
    track: (paymentId: string, initial?: Partial<TrackedPaymentProgress>, options?: Readonly<{
        merchantOwnershipProved?: boolean;
    }>) => boolean;
    adoptRecovery: (paymentId: string) => boolean;
    clear: () => void;
    refresh: (reason?: string) => void;
    claimProviderAction: (owner: object, actionKey: string) => boolean;
    claimTerminalNavigation: (paymentId: string) => boolean;
}>;
export declare const createPaymentLifecycleTracker: (dependencies?: PaymentLifecycleTrackerDependencies) => PaymentLifecycleTracker;
export {};
//# sourceMappingURL=paymentLifecycleTracker.d.ts.map