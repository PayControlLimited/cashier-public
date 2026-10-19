import { CashierBonusDefinition, CashierItemValue, CashierValueRule } from './CashierConfig.js';
import { CashierElement, CashierPresentationMoney, CashierPresentationText } from './presentation.js';
/** Exact decimal analogue of award value rules. Roles remain explicit. */
export type CashierDiscount = Readonly<Pick<CashierValueRule<string>, 'value' | 'maxValue'> & {
    type: Extract<CashierItemValue['type'], 'fixed' | 'percentage'>;
    basis: 'unit' | 'line' | 'order';
}>;
export type CashierSavingAllocation = Readonly<{
    id: string;
    applicationId: string;
    offerId?: string;
    amount: string;
}>;
export type CashierPriceComparison = Readonly<{
    /** Reference amount on the same basis as the current line/order amount. */
    referenceAmount?: string;
    /** Final merchant-confirmed line amount; takes precedence over unitPrice/rules. */
    amount?: string;
    discount?: CashierDiscount;
    allocations?: readonly CashierSavingAllocation[];
    savingsDisplay?: 'amount' | 'percentage' | 'both';
}>;
export type CashierOrderPriceComparison = Omit<CashierPriceComparison, 'amount'>;
export type CashierResolvedPriceComparison = Readonly<{
    reference?: CashierPresentationMoney;
    current: CashierPresentationMoney;
    saving?: CashierPresentationMoney;
    /** Resolved accessible wording. Advertised rule and actual saving are distinct. */
    savingLabel?: CashierPresentationText;
    advertisedLabel?: CashierPresentationText;
    allocations?: readonly CashierSavingAllocation[];
}>;
/** One selectable promotion can grant awards and request merchant repricing. */
export type CashierOffer = Omit<CashierBonusDefinition, 'code' | 'maxBonus' | 'maxBonusPercentage'> & {
    id: string;
    pricing?: 'unchanged' | 'merchant';
    /** Explicit wire binding. IDs and displayed coupon codes are never submitted implicitly. */
    submission?: {
        bonusCode: string;
    };
    couponCode?: string;
};
export type CashierCheckoutDetails = Readonly<{
    pricing?: CashierOrderPriceComparison;
    /** ISO instant supplied by the merchant; no default validity duration. */
    expiresAt?: string;
    eligibilityAmount?: string;
}>;
export type CashierCheckoutSnapshot = CashierCheckoutDetails & Readonly<{
    initialAmount: string;
    currency: string;
    paymentContextId: string;
    selectedOfferId: string | null;
    /** Full payment-scoped presentation facts; global content stays live. */
    elements: readonly CashierElement[];
}>;
export type CashierCheckoutUpdateRequest = Readonly<{
    requestId: string;
    reason: 'offer-selection' | 'refresh' | 'expiry';
    basePaymentContextId: string;
    selectedOfferId: string | null;
}>;
export type CashierCheckoutUpdateResolution = Readonly<{
    requestId: string;
    checkout: CashierCheckoutSnapshot;
}>;
export type CashierCheckoutUpdateRejection = Readonly<{
    requestId: string;
    outcome: 'rejected' | 'unknown';
}>;
export type CashierCheckoutState = Readonly<{
    phase: 'confirmed' | 'pending' | 'unconfirmed' | 'expired';
    selectedOfferId: string | null;
    requestedOfferId?: string | null;
    paymentContextId?: string;
    requestId?: string;
}>;
export type CashierCheckoutCommandResult = Readonly<{
    status: 'accepted';
    requestId?: string;
} | {
    status: 'rejected';
    reason: 'invalid-input' | 'invalid-state' | 'busy' | 'stale' | 'unavailable' | 'disposed';
}>;
export type CashierOfferSelectionChangedEvent = Readonly<{
    selectedOfferId: string | null;
    previousOfferId: string | null;
    paymentContextId?: string;
}>;
export type CashierFrozenOffer = Readonly<{
    id: string;
    title: CashierPresentationText;
    description: CashierPresentationText;
    submission?: Readonly<{
        bonusCode: string;
    }>;
    couponCode?: string;
}>;
//# sourceMappingURL=offers.d.ts.map