import { PaymentType } from '../../../api/src/payments.ts';
import { CashierBonus, CashierUser } from '../types/CashierConfig.js';
export type BonusCloseReasonType = 'amount' | 'totalPayinAmount' | 'payinCount' | 'daysSinceRegistration';
export type BonusCloseReason = {
    type: BonusCloseReasonType;
    delta: number;
};
export type BonusAvailabilityStatus = 'available' | 'close';
export type BonusAvailability = {
    bonus: CashierBonus;
    status: BonusAvailabilityStatus;
    closeReasons: BonusCloseReason[];
};
export type BonusAwardDetails = {
    maxBonus: number;
    maxBonusPercentage: number;
    estimatedBonus: number | null;
    fullClaimAmount: number;
    claimPercentage: number | null;
};
export declare const sortBonusAvailability: (availability: BonusAvailability[]) => BonusAvailability[];
export type BonusEvaluationContext = {
    amount?: number | null;
    user?: CashierUser | null;
};
export declare const normalizeBonuses: (bonuses?: CashierBonus[]) => CashierBonus[];
export declare const hasConfiguredBonuses: (bonuses?: CashierBonus[] | null) => boolean;
export declare const getBonusAvailabilityForPaymentType: (bonuses: CashierBonus[], paymentType?: PaymentType | null, context?: BonusEvaluationContext) => BonusAvailability[];
export declare const getAvailableBonusesForPaymentType: (bonuses: CashierBonus[], paymentType?: PaymentType | null, context?: BonusEvaluationContext) => CashierBonus[];
export declare const resolveBonusAwardDetails: (bonus: Pick<CashierBonus, "maxBonus" | "maxBonusPercentage">, amount?: number | null) => BonusAwardDetails | null;
export declare const formatBonusCloseReasonLabel: (reason: BonusCloseReason, translateKey: (key: string) => string, formatAmount: (value: number) => string) => string;
//# sourceMappingURL=bonuses.d.ts.map