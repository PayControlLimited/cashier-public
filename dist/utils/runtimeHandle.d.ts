import { CashierHandle } from '../types/CashierConfig.js';
export type CashierRuntimeHandle = Omit<CashierHandle, 'getEmbeddingState' | 'requestBack' | 'requestClose' | 'reconcile'>;
export type CashierRuntimeAttachment = CashierRuntimeHandle & {
    readonly instance: object;
};
export declare const registerRuntimeHandleReset: (handle: CashierHandle, reset: () => void) => CashierHandle;
export declare const resetRuntimeHandleOverrides: (handle: CashierHandle | null) => void;
/** Latest host overrides survive runtime replacement within one principal. */
export declare const createRuntimeHandleOwner: () => {
    handle: CashierRuntimeHandle;
    reset: () => void;
    attach: (next: CashierRuntimeAttachment | null) => void;
};
//# sourceMappingURL=runtimeHandle.d.ts.map