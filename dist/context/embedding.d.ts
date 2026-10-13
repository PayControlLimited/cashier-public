export declare const CashierEmbeddingContext: import('react').Context<{
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
    setScope: (next: string) => void;
    setBootstrap: (next: "error" | "pending" | "ready", error?: import('..').CashierEmbeddingSnapshot["error"]) => void;
    bindRuntime: (owner: object, next: Readonly<{
        ready: boolean;
        failed: boolean;
        busy: boolean;
    }>) => void;
    unbindRuntime: (owner: object) => void;
    bindBack: (owner: object, run: (() => void) | undefined) => void;
    unbindBack: (owner: object) => void;
    beginCreation: () => number;
    acceptsCreation: (generation: number) => boolean;
    creationFailed: (generation: number, outcome?: "rejected" | "unknown") => void;
    isCreationBlocked: () => boolean;
    requestBack: () => import('..').CashierEmbeddingCommandResult;
    requestClose: () => import('..').CashierEmbeddingCommandResult;
    reconcile: () => import('..').CashierEmbeddingCommandResult;
} | null>;
export declare const useCashierEmbeddingState: () => {
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
    setScope: (next: string) => void;
    setBootstrap: (next: "error" | "pending" | "ready", error?: import('..').CashierEmbeddingSnapshot["error"]) => void;
    bindRuntime: (owner: object, next: Readonly<{
        ready: boolean;
        failed: boolean;
        busy: boolean;
    }>) => void;
    unbindRuntime: (owner: object) => void;
    bindBack: (owner: object, run: (() => void) | undefined) => void;
    unbindBack: (owner: object) => void;
    beginCreation: () => number;
    acceptsCreation: (generation: number) => boolean;
    creationFailed: (generation: number, outcome?: "rejected" | "unknown") => void;
    isCreationBlocked: () => boolean;
    requestBack: () => import('..').CashierEmbeddingCommandResult;
    requestClose: () => import('..').CashierEmbeddingCommandResult;
    reconcile: () => import('..').CashierEmbeddingCommandResult;
} | null;
//# sourceMappingURL=embedding.d.ts.map