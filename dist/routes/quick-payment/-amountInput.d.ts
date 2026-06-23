export type AmountInputOrigin = 'user' | 'programmatic';
export type AmountInputState = {
    value: string;
    changeOrigin: AmountInputOrigin;
    hasExplicitSelection: boolean;
};
export type AmountInputAction = {
    type: AmountInputOrigin | 'sync-external';
    value: string;
    markExplicitSelection?: boolean;
};
export declare const applyAmountKey: (currentValue: string, key: string) => string;
export declare const createAmountInputState: (initialAmount: string) => AmountInputState;
export declare const amountInputReducer: (state: AmountInputState, action: AmountInputAction) => AmountInputState;
//# sourceMappingURL=-amountInput.d.ts.map