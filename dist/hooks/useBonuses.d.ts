import { PaymentType } from '../../../api/src/payments.ts';
import { CashierBonus } from '../types/CashierConfig.js';
import { BonusAvailability, BonusEvaluationContext } from '../utils/bonuses.js';
export default function useBonuses(): {
    bonuses: CashierBonus[];
    getBonusAvailabilityForPaymentType: (paymentType?: PaymentType | null, override?: BonusEvaluationContext) => BonusAvailability[];
    getBonusAvailabilityForPaymentTypes: (paymentTypes: PaymentType[], selectedPaymentType?: PaymentType | null, override?: BonusEvaluationContext) => BonusAvailability[];
    getAvailableBonusesForPaymentType: (paymentType?: PaymentType | null, override?: BonusEvaluationContext) => CashierBonus[];
    getBonusCountForPaymentType: (paymentType?: PaymentType | null, override?: BonusEvaluationContext) => number;
};
//# sourceMappingURL=useBonuses.d.ts.map