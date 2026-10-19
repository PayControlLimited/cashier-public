import { CashierBonusDefinition, CashierConfig } from '../types/CashierConfig.js';
import { CashierOffer, CashierCheckoutDetails, CashierCheckoutSnapshot } from '../types/offers.js';
export declare const hasCheckoutConfiguration: (config: Pick<CashierConfig, "offers" | "checkout">) => boolean;
export declare const isCheckoutDetails: (value: unknown) => value is CashierCheckoutDetails;
export declare const areOffersValid: (value: unknown, award: (value: unknown) => boolean) => value is CashierOffer[];
export declare const adaptOfferConfiguration: <T extends CashierConfig>(config: T) => T;
export declare const confirmedCheckoutFromConfig: (config: CashierConfig, elements: CashierCheckoutSnapshot["elements"]) => CashierCheckoutSnapshot;
/** Only an explicit canonical binding may reach the existing Payment API field. */
export declare const offerSubmissionCode: (offers: readonly CashierOffer[] | undefined, selectedId: string | null | undefined) => string | undefined;
export declare const bonusAsOffer: (bonus: CashierBonusDefinition) => CashierOffer;
/** Discounted totals must not become their own eligibility basis. */
export declare const requiresOfferEligibilityAmount: (offers: readonly CashierOffer[]) => boolean;
//# sourceMappingURL=offers.d.ts.map