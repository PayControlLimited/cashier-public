import { PaymentType } from '../../../api/src/payments.ts';
import { CashierAward, CashierBonus, CashierUser } from '../types/CashierConfig.js';
export type BonusConditionReasonType = 'amount' | 'totalPayinAmount' | 'payinCount' | 'daysSinceRegistration';
export type BonusPaymentReasonType = 'paymentTypeRequired' | 'paymentTypeMismatch' | 'excluded';
export type BonusConditionAvailabilityReason = {
    type: BonusConditionReasonType;
    delta: number;
    boundary: 'min' | 'max';
    limit?: number;
};
export type BonusPaymentAvailabilityReason = {
    type: BonusPaymentReasonType;
    paymentTypeNames?: string[][];
};
export type BonusAvailabilityReason = BonusConditionAvailabilityReason | BonusPaymentAvailabilityReason;
export type BonusCloseReasonType = BonusConditionReasonType;
export type BonusCloseReason = BonusConditionAvailabilityReason;
export type BonusUnavailableReasonType = BonusConditionReasonType | BonusPaymentReasonType;
export type BonusUnavailableReason = BonusAvailabilityReason;
export type BonusAvailabilityStatus = 'available' | 'close' | 'unavailable';
export type BonusAvailability = {
    bonus: CashierBonus;
    status: BonusAvailabilityStatus;
    reasons: BonusAvailabilityReason[];
};
export type BonusAwardDetails = {
    maxBonus: number;
    maxBonusPercentage: number;
    estimatedBonus: number | null;
    fullClaimAmount: number;
    claimPercentage: number | null;
};
export type BonusSummaryAwardLine = {
    id: string;
    type: CashierAward['type'];
    value: number;
    formattedValue: string;
    text: string;
    name?: string;
};
type BonusSummaryAwardLineOptions = {
    amount?: number | null;
    paymentStatus?: string | null;
    translateKey?: (key: string) => string;
    hasTranslation?: (key: string) => boolean;
    formatAmount?: (value: number) => string;
};
export declare const sortBonusAvailability: (availability: BonusAvailability[]) => BonusAvailability[];
export declare const isBonusSelectionCandidate: (availability: BonusAvailability) => boolean;
export type BonusEvaluationContext = {
    amount?: number | null;
    user?: CashierUser | null;
};
export declare const normalizeBonuses: (bonuses?: CashierBonus[]) => CashierBonus[];
export declare const hasConfiguredBonuses: (bonuses?: CashierBonus[] | null) => boolean;
export declare const getBonusAvailabilityForPaymentType: (bonuses: CashierBonus[], paymentType?: PaymentType | null, context?: BonusEvaluationContext) => BonusAvailability[];
export declare const getBonusAvailabilityForPaymentTypes: (bonuses: CashierBonus[], paymentTypes: PaymentType[], selectedPaymentType?: PaymentType | null, context?: BonusEvaluationContext) => BonusAvailability[];
export declare const getAvailableBonusesForPaymentType: (bonuses: CashierBonus[], paymentType?: PaymentType | null, context?: BonusEvaluationContext) => CashierBonus[];
export declare const resolveBonusAwardDetails: (bonus: Pick<CashierBonus, "awards" | "maxBonus" | "maxBonusPercentage">, amount?: number | null) => BonusAwardDetails | null;
export declare const resolveBonusSummaryAwardLines: (bonus: Pick<CashierBonus, "code" | "title" | "awards">, options: BonusSummaryAwardLineOptions) => BonusSummaryAwardLine[];
export declare const formatBonusAvailabilityReasonLabel: (reason: BonusAvailabilityReason, translateKey: (key: string) => string, formatAmount: (value: number) => string) => string;
export {};
//# sourceMappingURL=bonuses.d.ts.map