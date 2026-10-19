import { CashierConfigurationIssue } from './types/CashierConfig.js';
export { validateCashierPurchaseConfiguration, validateCashierAwardCollection, validateCashierPaymentContext, } from './utils/purchaseValidation.js';
export type { CashierMessage, CashierItem, CashierItemValue, CashierAction, CashierPaymentContextV1, CashierPaymentContextV2, CashierPaymentContextV3, CashierPaymentContext, CashierConfigurationIssue, } from './types/CashierConfig.js';
export declare const isCashierPresentationContentOptions: (value: unknown) => boolean;
export declare const isCashierContentStyle: (value: unknown, collection?: boolean) => boolean;
export declare const validateCashierElements: (value: unknown) => CashierConfigurationIssue[];
export declare const isCashierDeclarativePresentation: (value: unknown) => boolean;
export type { CashierDiscount, CashierSavingAllocation, CashierPriceComparison, CashierOrderPriceComparison, CashierResolvedPriceComparison, CashierOffer, CashierCheckoutDetails, CashierCheckoutSnapshot, CashierCheckoutUpdateRequest, CashierCheckoutUpdateResolution, CashierCheckoutUpdateRejection, CashierCheckoutState, CashierCheckoutCommandResult, CashierOfferSelectionChangedEvent, CashierFrozenOffer, } from './types/offers.js';
export type { CashierPaymentContextV4 } from './types/CashierConfig.js';
export { validateCashierOffers, validateCashierCheckoutDetails } from './utils/purchaseValidation.js';
export type { CashierValueRule } from './types/CashierConfig.js';
//# sourceMappingURL=purchase.d.ts.map