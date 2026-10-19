import { CashierRuntimeConfig as CashierConfig, CashierMerchantInput } from '../utils/elements.js';
import { Dispatch, SetStateAction } from 'react';
import { CashierComboViewFormDraft, CashierPaymentFormDraft } from '../types/CashierConfig.js';
import { CashierEntryDecision } from '../utils/cashierEntry.js';
export { DEFAULT_HOSTED_FIELDS_URL, defaultCashierConfig, } from '../config/defaults.js';
export type CashierState = Pick<CashierConfig, 'method' | 'currency' | 'initialAmount'> & {
    selectedPaymentType: string | null;
    selectedBonusCode: string | null;
    paymentFormDraft: CashierPaymentFormDraft | null;
    comboViewFormDraft: CashierComboViewFormDraft | null;
    resetFlowOnBack: boolean;
    hasAppliedGotoPaymentType: boolean;
    entryDecision?: CashierEntryDecision | null;
};
export declare const createCashierState: (config: CashierConfig) => CashierState;
export type CashierContextValue = CashierConfig & CashierMerchantInput & CashierState & {
    checkoutState?: import('../types/offers.js').CashierCheckoutState;
    selectOffer?: import('../types/CashierConfig.js').CashierHandle['selectOffer'];
    setCashierState: Dispatch<SetStateAction<CashierState>>;
};
export declare const CashierContext: import('react').Context<CashierContextValue>;
//# sourceMappingURL=main.d.ts.map