import { CashierBonusDefinition } from '../types/CashierConfig.js';
type ResolveSubmittableBonusCodeOptions = {
    uiBonuses: boolean;
    selectedBonusCode?: string | null;
    availableBonuses: CashierBonusDefinition[];
};
export declare const resolveSubmittableBonusCode: ({ uiBonuses, selectedBonusCode, availableBonuses, }: ResolveSubmittableBonusCodeOptions) => string | undefined;
export {};
//# sourceMappingURL=paymentFormBonus.d.ts.map