import { PaymentSummaryField } from '../../../api/src/payments.ts';
import { CashierMethods, CashierUser } from '../types/CashierConfig.js';
import { PaymentType } from '../types/payment.js';
type WithdrawalSummaryOptions = {
    amount?: string;
    fee?: PaymentType['fee'];
    includeBalanceRows?: boolean;
    includeRemainingBalance?: boolean;
};
export declare const getWithdrawalSummaryFields: (method: CashierMethods, currency: string, user?: CashierUser, options?: WithdrawalSummaryOptions) => PaymentSummaryField[];
export {};
//# sourceMappingURL=withdrawalSummary.d.ts.map