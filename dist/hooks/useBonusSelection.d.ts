import { CashierBonusDefinition } from '../types/CashierConfig.js';
declare const useBonusSelection: () => {
    selectedBonusCode: string | null;
    selectBonusCode: (code: string | null) => void;
    clearBonusSelection: () => void;
    ensureDefaultSelection: (selectionBonuses: CashierBonusDefinition[]) => void;
};
export default useBonusSelection;
//# sourceMappingURL=useBonusSelection.d.ts.map