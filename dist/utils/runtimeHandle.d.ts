import { CashierBonusDefinition, CashierHandle } from '../types/CashierConfig.js';
export type CashierRuntimeHandle = {
    setBonuses: (bonuses: CashierBonusDefinition[] | undefined) => void;
    setSelectedBonusCode: (code: string | null) => void;
    clearSelectedBonus: () => void;
} & Required<Omit<CashierHandle, 'setBonuses' | 'setSelectedBonusCode' | 'clearSelectedBonus' | 'getEmbeddingState' | 'requestBack' | 'requestClose' | 'reconcile' | 'selectOffer' | 'refreshCheckout' | 'resolveCheckoutUpdate' | 'rejectCheckoutUpdate' | 'getCheckoutState'>>;
export type CashierRuntimeAttachment = CashierRuntimeHandle & {
    readonly instance: object;
};
export declare const registerRuntimeHandleReset: <Handle extends CashierHandle>(handle: Handle, reset: () => void, onPurchaseChange?: () => void) => Handle;
export declare const resetRuntimeHandleOverrides: (handle: CashierHandle | null) => void;
export declare const notifyRuntimePurchaseChange: (handle: CashierHandle | null) => void;
/** Latest host overrides survive runtime replacement within one principal. */
export declare const createRuntimeHandleOwner: () => {
    handle: CashierRuntimeHandle;
    reset: () => void;
    attach: (next: CashierRuntimeAttachment | null) => void;
};
//# sourceMappingURL=runtimeHandle.d.ts.map