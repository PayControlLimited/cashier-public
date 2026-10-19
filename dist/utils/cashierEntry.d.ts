import { CashierRuntimeConfig } from './elements.js';
import { PaymentType } from '../types/payment.js';
import { PaymentFormValues } from './paymentFieldUtils.js';
export type CashierEntryDecision = {
    kind: 'combo' | 'selection' | 'selected';
    route: string;
    paymentTypeId?: string;
};
export declare const resolveEntryFields: (paymentType: PaymentType, amount: string) => {
    values: PaymentFormValues;
    editable: boolean;
    resolved: boolean;
};
export declare const isPaymentTypeDisabledForAmount: (paymentType: PaymentType, config: Pick<CashierRuntimeConfig, "initialAmount" | "method" | "user">) => boolean;
export declare const resolveCashierEntry: ({ config, paymentTypes, hasAvailableBonus, hasComboOverride, }: {
    config: CashierRuntimeConfig;
    paymentTypes: PaymentType[];
    hasAvailableBonus: (paymentType: PaymentType) => boolean;
    hasComboOverride?: boolean;
}) => CashierEntryDecision;
//# sourceMappingURL=cashierEntry.d.ts.map