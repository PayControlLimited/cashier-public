import { PaymentType } from '../../../api/src/payments.ts';
import { CashierBonus } from '../types/CashierConfig.js';
type SelectPaymentTypeOptions = {
    availableBonuses?: CashierBonus[];
};
export declare const reconcileSelectedBonusCode: (selectedBonusCode: string | null | undefined, availableBonuses: CashierBonus[]) => string | null;
export declare const usePaymentSelection: () => {
    selectedPaymentType: string | null;
    selectPaymentType: (id: string, options?: SelectPaymentTypeOptions) => void;
    clearPaymentSelection: () => void;
    ensureDefaultSelection: (paymentTypes: PaymentType[]) => void;
};
export {};
//# sourceMappingURL=usePaymentSelection.d.ts.map