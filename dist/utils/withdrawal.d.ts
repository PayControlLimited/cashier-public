import { CashierMethods, CashierUser } from '../types/CashierConfig.js';
import { PaymentType } from '../types/payment.js';
export declare const getRawPayoutWithdrawableBalance: (method: CashierMethods, user?: CashierUser) => number | null;
export declare const getPayoutWithdrawableBalance: (method: CashierMethods, user?: CashierUser, fee?: PaymentType["fee"]) => number | null;
export declare const getPayoutConsumedAmount: (amount: number, fee?: PaymentType["fee"]) => number;
//# sourceMappingURL=withdrawal.d.ts.map