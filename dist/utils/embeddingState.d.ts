import { CashierEmbeddingCommandResult, CashierEmbeddingSnapshot, CashierEmbeddingRecovery, CashierEmbeddingStateChanged } from '../types/CashierConfig.js';
import { PaymentLifecycleTracker } from './paymentLifecycleTracker.js';
type RuntimeBinding = Readonly<{
    ready: boolean;
    failed: boolean;
    busy: boolean;
}>;
/** A projection of the existing owners, never a payment controller or transport. */
export declare const createCashierEmbeddingState: (tracker: PaymentLifecycleTracker) => {
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
    setScope: (next: string) => void;
    setBootstrap: (next: "error" | "pending" | "ready", error?: CashierEmbeddingSnapshot["error"]) => void;
    bindRuntime: (owner: object, next: RuntimeBinding) => void;
    unbindRuntime: (owner: object) => void;
    bindBack: (owner: object, run: (() => void) | undefined) => void;
    unbindBack: (owner: object) => void;
    beginCreation: () => number;
    acceptsCreation: (generation: number) => boolean;
    creationFailed: (generation: number, outcome?: "rejected" | "unknown") => void;
    isCreationBlocked: () => boolean;
    requestBack: () => CashierEmbeddingCommandResult;
    requestClose: () => CashierEmbeddingCommandResult;
    reconcile: () => CashierEmbeddingCommandResult;
};
export type CashierEmbeddingState = ReturnType<typeof createCashierEmbeddingState>;
export {};
//# sourceMappingURL=embeddingState.d.ts.map