import { CashierEmbeddingCommandResult, CashierEmbeddingSnapshot, CashierEmbeddingRecovery, CashierEmbeddingStateChanged, CashierReconcileOptions } from '../types/CashierConfig.js';
import { PaymentLifecycleTracker } from './paymentLifecycleTracker.js';
type RuntimeBinding = Readonly<{
    ready: boolean;
    failed: boolean;
    busy: boolean;
}>;
/** A projection of the existing owners, never a payment controller or transport. */
export declare const createCashierEmbeddingState: (tracker: PaymentLifecycleTracker) => {
    creation: Readonly<{
        getSnapshot: () => import('libs/cashier-core/src/controller/paymentCreation').PaymentCreationSnapshot;
        subscribe: (listener: () => unknown) => () => void;
        begin: (options?: Readonly<{
            allowUnknownRetry?: boolean;
        }>) => import('../../../cashier-core/src/index.ts').PaymentCreationAttempt;
        accepts: (attempt: import('../../../cashier-core/src/index.ts').PaymentCreationAttempt) => boolean;
        confirm: (attempt: import('../../../cashier-core/src/index.ts').PaymentCreationAttempt, paymentId: string) => boolean;
        fail: (attempt: import('../../../cashier-core/src/index.ts').PaymentCreationAttempt, outcome: "rejected" | "unknown") => void;
        cancel: () => void;
        acknowledge: () => void;
        resetScope: () => void;
        activate: () => void;
        deactivate: () => void;
        destroy: () => void;
    }>;
    attempt: {
        creation: Readonly<{
            getSnapshot: () => import('libs/cashier-core/src/controller/paymentCreation').PaymentCreationSnapshot;
            subscribe: (listener: () => unknown) => () => void;
            begin: (options?: Readonly<{
                allowUnknownRetry?: boolean;
            }>) => import('../../../cashier-core/src/index.ts').PaymentCreationAttempt;
            accepts: (attempt: import('../../../cashier-core/src/index.ts').PaymentCreationAttempt) => boolean;
            confirm: (attempt: import('../../../cashier-core/src/index.ts').PaymentCreationAttempt, paymentId: string) => boolean;
            fail: (attempt: import('../../../cashier-core/src/index.ts').PaymentCreationAttempt, outcome: "rejected" | "unknown") => void;
            cancel: () => void;
            acknowledge: () => void;
            resetScope: () => void;
            activate: () => void;
            deactivate: () => void;
            destroy: () => void;
        }>;
        isCurrent: (generation: number) => boolean;
        getCreationAttempt: (generation: number) => import('../../../cashier-core/src/index.ts').PaymentCreationAttempt;
        getSnapshot: () => Readonly<{
            phase: "unknown" | "known" | "idle" | "preparing" | "dispatched";
            generation: number;
            invalidated: boolean;
            context?: import('./purchaseContext.js').PurchaseCapture | import('./purchaseContext.js').PurchaseContext;
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
        beginPreparation: (capture: import('./purchaseContext.js').PurchaseCapture, fingerprint: string) => number;
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
    checkout: {
        getSnapshot: () => Readonly<{
            phase: "confirmed" | "pending" | "unconfirmed" | "expired";
            selectedOfferId: string | null;
            requestedOfferId?: string | null;
            paymentContextId?: string;
            requestId?: string;
        }>;
        getConfirmed: () => import('..').CashierCheckoutSnapshot | undefined;
        getRefreshAvailability: () => "available" | "busy" | "unavailable";
        subscribe: (listener: () => void) => () => void;
        activate: () => void;
        dispose: () => void;
        configure: (next: {
            scope?: string;
            material: string;
            checkout: import('..').CashierCheckoutSnapshot;
            offers: readonly import('..').CashierOffer[];
            lockAmount: boolean;
            request?: (request: import('..').CashierCheckoutUpdateRequest) => void | Promise<void>;
            changed?: (event: import('..').CashierOfferSelectionChangedEvent) => void | Promise<void>;
            observe?: (state: import('..').CashierCheckoutState) => void | Promise<void>;
        }) => void;
        selectOffer: (id: string | null) => import('..').CashierCheckoutCommandResult;
        ensureDefault: (id: string, select: (id: string) => import('..').CashierCheckoutCommandResult | undefined) => void;
        clear: () => void;
        refresh: () => import('..').CashierCheckoutCommandResult;
        resolve: (value: import('..').CashierCheckoutUpdateResolution) => import('..').CashierCheckoutCommandResult;
        reject: (value: import('..').CashierCheckoutUpdateRejection) => import('..').CashierCheckoutCommandResult;
        isConfirmed: () => boolean;
        canPay: () => boolean;
    };
    summaryState: Readonly<{
        getAccess: () => import('../context/summaryState.js').CashierSummaryAccess;
        setAccess: (next: import('../context/summaryState.js').CashierSummaryAccess) => void;
        clearAccess: () => void;
        getProgress: () => import('../context/summaryState.js').CashierSummaryProgressState;
        setProgress: (next: import('../context/summaryState.js').CashierSummaryProgressState) => void;
        clearProgress: () => void;
        hasProviderStep: (paymentId: string | null) => boolean;
    }>;
    getSnapshot: () => Readonly<{
        lifecycle: "bootstrapping" | "ready" | "error" | "disposed";
        busy: boolean;
        canGoBack: boolean;
        recovery: CashierEmbeddingRecovery;
        error?: Readonly<{
            code: "bootstrap-failed" | "session-required" | "status-unavailable";
            retryable: boolean;
        }>;
    }>;
    subscribe: (listener: () => void) => () => boolean;
    setObserver: (next: CashierEmbeddingStateChanged | undefined) => void;
    activate: () => void;
    deactivate: () => void;
    refreshProjection: () => void;
    setScope: (next: string, preserveAuthority?: boolean) => void;
    setBootstrap: (next: "error" | "pending" | "ready", error?: CashierEmbeddingSnapshot["error"]) => void;
    bindRuntime: (owner: object, next: RuntimeBinding) => void;
    unbindRuntime: (owner: object) => void;
    bindBack: (owner: object, run: (() => void) | undefined) => void;
    unbindBack: (owner: object) => void;
    beginCreation: (generation?: number) => number;
    acceptsCreation: (generation: number) => boolean;
    creationFailed: (generation: number, outcome?: "rejected" | "unknown") => void;
    canRestartPurchase: () => boolean;
    restartPurchase: () => boolean;
    isCreationBlocked: () => boolean;
    requestBack: () => CashierEmbeddingCommandResult;
    requestClose: () => CashierEmbeddingCommandResult;
    reconcile: (options?: CashierReconcileOptions) => CashierEmbeddingCommandResult;
};
export type CashierEmbeddingState = ReturnType<typeof createCashierEmbeddingState>;
export {};
//# sourceMappingURL=embeddingState.d.ts.map