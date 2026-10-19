import { PaymentType } from '../../../api/src/payments.ts';
import { CashierBonusDefinition } from '../types/CashierConfig.js';
import { BonusAvailability, BonusEvaluationContext } from '../utils/bonuses.js';
export default function useBonuses(): {
    bonuses: CashierBonusDefinition[];
    getBonusAvailabilityForPaymentType: (paymentType?: PaymentType | null, override?: BonusEvaluationContext) => BonusAvailability[];
    getBonusAvailabilityForPaymentTypes: (paymentTypes: PaymentType[], selectedPaymentType?: PaymentType | null, override?: BonusEvaluationContext) => BonusAvailability[];
    getAvailableBonusesForPaymentType: (paymentType?: PaymentType | null, override?: BonusEvaluationContext) => CashierBonusDefinition[];
    getBonusCountForPaymentType: (paymentType?: PaymentType | null, override?: BonusEvaluationContext) => number;
};
//# sourceMappingURL=useBonuses.d.ts.map