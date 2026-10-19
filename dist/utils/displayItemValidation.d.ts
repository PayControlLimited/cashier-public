import { CashierDisplayItem, CashierResolvedDisplayItem } from '../types/presentation.js';
export type DisplayItemInput = CashierDisplayItem & {
    id: string;
    scope: 'global' | 'payment';
};
export declare const isDisplayItemInput: (value: unknown) => value is DisplayItemInput;
export declare const isFrozenDisplayItem: (value: unknown, pricing?: boolean) => value is CashierResolvedDisplayItem;
//# sourceMappingURL=displayItemValidation.d.ts.map