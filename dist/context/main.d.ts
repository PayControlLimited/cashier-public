import { Dispatch, SetStateAction } from 'react';
import { CashierConfig, CashierComboViewFormDraft, CashierPaymentFormDraft } from '../types/CashierConfig.js';
export { DEFAULT_HOSTED_FIELDS_URL, defaultCashierConfig } from '../config/defaults.js';
export type CashierState = Pick<CashierConfig, 'method' | 'currency' | 'initialAmount'> & {
    selectedPaymentType: string | null;
    selectedBonusCode: string | null;
    paymentFormDraft: CashierPaymentFormDraft | null;
    comboViewFormDraft: CashierComboViewFormDraft | null;
    resetFlowOnBack: boolean;
    hasAppliedGotoPaymentType: boolean;
};
export declare const createCashierState: (config: CashierConfig) => CashierState;
export type CashierContextValue = CashierConfig & CashierState & {
    setCashierState: Dispatch<SetStateAction<CashierState>>;
};
export declare const CashierContext: import('react').Context<CashierContextValue>;
//# sourceMappingURL=main.d.ts.map