import { CashierBonus } from '../types/CashierConfig.js';
declare const useBonusSelection: () => {
    selectedBonusCode: string | null;
    selectBonusCode: (code: string | null) => void;
    clearBonusSelection: () => void;
    ensureDefaultSelection: (availableBonuses: CashierBonus[]) => void;
};
export default useBonusSelection;
//# sourceMappingURL=useBonusSelection.d.ts.map