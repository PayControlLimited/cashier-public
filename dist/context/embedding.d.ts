export declare const CashierEmbeddingContext: import('react').Context<{
    instanceId: `${string}-${string}-${string}-${string}-${string}`;
    getBrowserActionId: () => `${string}-${string}-${string}-${string}-${string}`;
    getBrowserAuthorityId: () => `${string}-${string}-${string}-${string}-${string}`;
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
            context?: import('../utils/purchaseContext.js').PurchaseCapture | import('../utils/purchaseContext.js').PurchaseContext;
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
        beginPreparation: (capture: import('../utils/purchaseContext.js').PurchaseCapture, fingerprint: string) => number;
        invalidatePreparation: () => void;
        observeMaterial: (fingerprint: string) => void;
        verifyPreparation: (generation: number, fingerprint: string) => void;
        abandonPreparation: (generation: number, error?: string) => void;
        beginCreation: (generation?: number) => number;
        acceptsCreation: (generation: number) => boolean;
        created: (generation: number, paymentId: string) => boolean;
        adoptKnown: (paymentId: string) => void;
        creationFailed: (generation: number, outcome: "rejected" | "unknown") => void;
        beginReconciliation: (options: import('..').CashierReconcileOptions) => boolean;
        confirmReconciliation: (paymentId: string) => void;
        rejectReconciliation: () => void;
        restore: (value: unknown, paymentId: string, merchantId: string) => boolean;
        restoreUncertain: (value: unknown, merchantId: string) => boolean;
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
        getPendingRequest: () => Readonly<{
            requestId: string;
            reason: "offer-selection" | "refresh" | "expiry";
            basePaymentContextId: string;
            selectedOfferId: string | null;
        }> | undefined;
        getSelectionAvailability: (id: string | null) => "available" | "busy" | "unavailable";
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
        getAccess: () => import('../utils/summaryState.js').CashierSummaryAccess;
        setAccess: (next: import('../utils/summaryState.js').CashierSummaryAccess) => void;
        clearAccess: () => void;
        getProgress: () => import('../utils/summaryState.js').CashierSummaryProgressState;
        setProgress: (next: import('../utils/summaryState.js').CashierSummaryProgressState) => void;
        clearProgress: () => void;
        hasProviderStep: (paymentId: string | null) => boolean;
    }>;
    getSnapshot: () => Readonly<{
        lifecycle: "bootstrapping" | "ready" | "error" | "disposed";
        busy: boolean;
        canGoBack: boolean;
        recovery: import('..').CashierEmbeddingRecovery;
        error?: Readonly<{
            code: "bootstrap-failed" | "session-required" | "status-unavailable";
            retryable: boolean;
        }>;
    }>;
    subscribe: (listener: () => void) => () => boolean;
    setObserver: (next: import('..').CashierEmbeddingStateChanged | undefined) => void;
    activate: () => void;
    deactivate: () => void;
    refreshProjection: () => void;
    setScope: (next: string, preserveAuthority?: boolean) => void;
    setBootstrap: (next: "error" | "pending" | "ready", error?: import('..').CashierEmbeddingSnapshot["error"]) => void;
    bindRuntime: (owner: object, next: Readonly<{
        ready: boolean;
        failed: boolean;
        busy: boolean;
    }>) => void;
    unbindRuntime: (owner: object) => void;
    bindBack: (owner: object, run: (() => void) | undefined) => void;
    unbindBack: (owner: object) => void;
    beginCreation: (generation?: number) => number;
    acceptsCreation: (generation: number) => boolean;
    creationFailed: (generation: number, outcome?: "rejected" | "unknown") => void;
    canRestartPurchase: () => boolean;
    restartPurchase: () => boolean;
    isCreationBlocked: () => boolean;
    requestBack: () => import('..').CashierEmbeddingCommandResult;
    requestClose: () => import('..').CashierEmbeddingCommandResult;
    reconcile: (options?: import('..').CashierReconcileOptions) => import('..').CashierEmbeddingCommandResult;
} | null>;
export declare const useCashierEmbeddingState: () => {
    instanceId: `${string}-${string}-${string}-${string}-${string}`;
    getBrowserActionId: () => `${string}-${string}-${string}-${string}-${string}`;
    getBrowserAuthorityId: () => `${string}-${string}-${string}-${string}-${string}`;
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
            context?: import('../utils/purchaseContext.js').PurchaseCapture | import('../utils/purchaseContext.js').PurchaseContext;
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
        beginPreparation: (capture: import('../utils/purchaseContext.js').PurchaseCapture, fingerprint: string) => number;
        invalidatePreparation: () => void;
        observeMaterial: (fingerprint: string) => void;
        verifyPreparation: (generation: number, fingerprint: string) => void;
        abandonPreparation: (generation: number, error?: string) => void;
        beginCreation: (generation?: number) => number;
        acceptsCreation: (generation: number) => boolean;
        created: (generation: number, paymentId: string) => boolean;
        adoptKnown: (paymentId: string) => void;
        creationFailed: (generation: number, outcome: "rejected" | "unknown") => void;
        beginReconciliation: (options: import('..').CashierReconcileOptions) => boolean;
        confirmReconciliation: (paymentId: string) => void;
        rejectReconciliation: () => void;
        restore: (value: unknown, paymentId: string, merchantId: string) => boolean;
        restoreUncertain: (value: unknown, merchantId: string) => boolean;
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
        getPendingRequest: () => Readonly<{
            requestId: string;
            reason: "offer-selection" | "refresh" | "expiry";
            basePaymentContextId: string;
            selectedOfferId: string | null;
        }> | undefined;
        getSelectionAvailability: (id: string | null) => "available" | "busy" | "unavailable";
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
        getAccess: () => import('../utils/summaryState.js').CashierSummaryAccess;
        setAccess: (next: import('../utils/summaryState.js').CashierSummaryAccess) => void;
        clearAccess: () => void;
        getProgress: () => import('../utils/summaryState.js').CashierSummaryProgressState;
        setProgress: (next: import('../utils/summaryState.js').CashierSummaryProgressState) => void;
        clearProgress: () => void;
        hasProviderStep: (paymentId: string | null) => boolean;
    }>;
    getSnapshot: () => Readonly<{
        lifecycle: "bootstrapping" | "ready" | "error" | "disposed";
        busy: boolean;
        canGoBack: boolean;
        recovery: import('..').CashierEmbeddingRecovery;
        error?: Readonly<{
            code: "bootstrap-failed" | "session-required" | "status-unavailable";
            retryable: boolean;
        }>;
    }>;
    subscribe: (listener: () => void) => () => boolean;
    setObserver: (next: import('..').CashierEmbeddingStateChanged | undefined) => void;
    activate: () => void;
    deactivate: () => void;
    refreshProjection: () => void;
    setScope: (next: string, preserveAuthority?: boolean) => void;
    setBootstrap: (next: "error" | "pending" | "ready", error?: import('..').CashierEmbeddingSnapshot["error"]) => void;
    bindRuntime: (owner: object, next: Readonly<{
        ready: boolean;
        failed: boolean;
        busy: boolean;
    }>) => void;
    unbindRuntime: (owner: object) => void;
    bindBack: (owner: object, run: (() => void) | undefined) => void;
    unbindBack: (owner: object) => void;
    beginCreation: (generation?: number) => number;
    acceptsCreation: (generation: number) => boolean;
    creationFailed: (generation: number, outcome?: "rejected" | "unknown") => void;
    canRestartPurchase: () => boolean;
    restartPurchase: () => boolean;
    isCreationBlocked: () => boolean;
    requestBack: () => import('..').CashierEmbeddingCommandResult;
    requestClose: () => import('..').CashierEmbeddingCommandResult;
    reconcile: (options?: import('..').CashierReconcileOptions) => import('..').CashierEmbeddingCommandResult;
} | null;
//# sourceMappingURL=embedding.d.ts.map