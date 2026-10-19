import { CashierEntryDecision } from './cashierEntry.js';
import { CashierOffersStyle, CashierComboViewPaymentTypesMode } from '../types/CashierConfig.js';
export type CashierProgressStep = 'amount' | 'paymentType' | 'bonus' | 'details' | 'provider' | 'summary';
export type CashierProgressModel = {
    steps: CashierProgressStep[];
    currentStep: CashierProgressStep | null;
    currentStepIndex: number;
    stepCount: number;
};
export type BuildCashierProgressModelArgs = {
    pathname: string;
    uiComboView: boolean;
    lockAmount: boolean;
    uiComboView__PaymentTypes: CashierComboViewPaymentTypesMode;
    gotoPaymentType: string | null;
    hasResolvedPaymentType: boolean;
    hasAvailableBonuses: boolean;
    hasConfiguredBonuses: boolean;
    uiBonusesStyle: CashierOffersStyle;
    includeProviderStep: boolean;
    entryDecision?: CashierEntryDecision | null;
};
export declare const resolveCashierProgressCurrentStep: (pathname: string) => CashierProgressStep | null;
export declare const buildCashierProgressModel: ({ pathname, uiComboView, lockAmount, uiComboView__PaymentTypes, gotoPaymentType, hasResolvedPaymentType, hasAvailableBonuses, hasConfiguredBonuses, uiBonusesStyle, includeProviderStep, entryDecision, }: BuildCashierProgressModelArgs) => CashierProgressModel;
//# sourceMappingURL=progress.d.ts.map