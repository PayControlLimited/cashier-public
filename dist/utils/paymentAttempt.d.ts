import { PaymentCreationAttempt } from '../../../cashier-core/src/index.ts';
import { CashierReconcileOptions } from '../types/CashierConfig.js';
import { PurchaseContext, PurchaseCapture } from './purchaseContext.js';
type AttemptPhase = 'idle' | 'preparing' | 'dispatched' | 'unknown' | 'known';
export type PaymentAttemptSnapshot = Readonly<{
    phase: AttemptPhase;
    generation: number;
    invalidated: boolean;
    context?: PurchaseCapture | PurchaseContext;
    contextOrigin?: 'captured' | 'recovered' | 'reconciled';
    paymentId?: string;
    authorityVerified?: boolean;
    candidatePaymentId?: string;
    error?: string;
}>;
/** Web purchase metadata and preparation. Core alone owns dispatched creation. */
export declare const createPaymentAttempt: () => {
    creation: Readonly<{
        getSnapshot: () => import('libs/cashier-core/src/controller/paymentCreation').PaymentCreationSnapshot;
        subscribe: (listener: () => unknown) => () => void;
        begin: (options?: Readonly<{
            allowUnknownRetry?: boolean;
        }>) => PaymentCreationAttempt;
        accepts: (attempt: PaymentCreationAttempt) => boolean;
        confirm: (attempt: PaymentCreationAttempt, paymentId: string) => boolean;
        fail: (attempt: PaymentCreationAttempt, outcome: "rejected" | "unknown") => void;
        cancel: () => void;
        acknowledge: () => void;
        resetScope: () => void;
        activate: () => void;
        deactivate: () => void;
        destroy: () => void;
    }>;
    isCurrent: (generation: number) => boolean;
    getCreationAttempt: (generation: number) => PaymentCreationAttempt;
    getSnapshot: () => Readonly<{
        phase: AttemptPhase;
        generation: number;
        invalidated: boolean;
        context?: PurchaseCapture | PurchaseContext;
        contextOrigin?: "captured" | "recovered" | "reconciled";
        paymentId?: string;
        authorityVerified?: boolean;
        candidatePaymentId?: string;
        error?: string;
    }>;
    subscribe: (listener: () => void) => () => boolean;
    activate: () => void;
    dispose: () => void;
    setScope: (next: string, preserveAuthority?: boolean) => void;
    beginPreparation: (capture: PurchaseCapture, fingerprint: string) => number;
    invalidatePreparation: () => void;
    observeMaterial: (fingerprint: string) => void;
    verifyPreparation: (generation: number, fingerprint: string) => void;
    abandonPreparation: (generation: number, error?: string) => void;
    beginCreation: (generation?: number) => number;
    acceptsCreation: (generation: number) => boolean;
    created: (generation: number, paymentId: string) => boolean;
    adoptKnown: (paymentId: string) => void;
    creationFailed: (generation: number, outcome: "rejected" | "unknown") => void;
    beginReconciliation: (options: CashierReconcileOptions) => boolean;
    confirmReconciliation: (paymentId: string) => void;
    rejectReconciliation: () => void;
    restore: (value: unknown, paymentId: string, merchantId: string) => boolean;
    omitContext: (paymentId: string) => void;
    restart: () => boolean;
    isBlocked: () => boolean;
};
export type PaymentAttempt = ReturnType<typeof createPaymentAttempt>;
export {};
//# sourceMappingURL=paymentAttempt.d.ts.map