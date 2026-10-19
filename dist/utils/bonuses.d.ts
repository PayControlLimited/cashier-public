import { PaymentType } from '../../../api/src/payments.ts';
import { CashierBonusDefinition, CashierUser, CashierFrozenAward } from '../types/CashierConfig.js';
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
    bonus: CashierBonusDefinition;
    status: BonusAvailabilityStatus;
    reasons: BonusAvailabilityReason[];
};
export type BonusAwardDetails = {
    maxBonus: number;
    maxBonusPercentage: number;
    estimatedBonus: string | null;
    fullClaimAmount: number;
    claimPercentage: number | null;
};
export type BonusSummaryAwardLine = CashierFrozenAward;
type BonusSummaryAwardLineOptions = {
    amount?: string | number | null;
    paymentStatus?: string | null;
    locale?: string;
    translateKey?: (key: string) => string;
    hasTranslation?: (key: string) => boolean;
    formatAmount?: (value: string) => string;
};
export declare const sortBonusAvailability: (availability: BonusAvailability[]) => BonusAvailability[];
export declare const isBonusSelectionCandidate: (availability: BonusAvailability) => boolean;
export type BonusEvaluationContext = {
    amount?: number | null;
    user?: CashierUser | null;
};
export declare const normalizeBonuses: (bonuses?: CashierBonusDefinition[]) => CashierBonusDefinition[];
export declare const hasConfiguredBonuses: (bonuses?: CashierBonusDefinition[] | null) => boolean;
export declare const getBonusAvailabilityForPaymentType: (bonuses: CashierBonusDefinition[], paymentType?: PaymentType | null, context?: BonusEvaluationContext) => BonusAvailability[];
export declare const getBonusAvailabilityForPaymentTypes: (bonuses: CashierBonusDefinition[], paymentTypes: PaymentType[], selectedPaymentType?: PaymentType | null, context?: BonusEvaluationContext) => BonusAvailability[];
export declare const getAvailableBonusesForPaymentType: (bonuses: CashierBonusDefinition[], paymentType?: PaymentType | null, context?: BonusEvaluationContext) => CashierBonusDefinition[];
export declare const resolveBonusAwardDetails: (bonus: Pick<CashierBonusDefinition, "awards" | "maxBonus" | "maxBonusPercentage">, amount?: number | null) => BonusAwardDetails | null;
/** Bonus policy adapter. Quantities and display lines use the shared award engine. */
export declare const resolveBonusAwardLines: (bonus: Pick<CashierBonusDefinition, "code" | "title" | "awards">, options: Omit<BonusSummaryAwardLineOptions, "paymentStatus">) => CashierFrozenAward[];
export declare const resolveBonusSummaryAwardLines: (bonus: Pick<CashierBonusDefinition, "code" | "title" | "awards">, options: BonusSummaryAwardLineOptions) => BonusSummaryAwardLine[];
export declare const formatBonusAvailabilityReasonLabel: (reason: BonusAvailabilityReason, translateKey: (key: string) => string, formatAmount: (value: number) => string) => string;
export {};
//# sourceMappingURL=bonuses.d.ts.map