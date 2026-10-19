import { CashierConfigurationIssue } from '../types/CashierConfig.js';
export declare const isPurchaseDecimal: (value: unknown) => value is string;
/** Every award source uses this shape/identity contract, atomically. */
export declare const validateCashierAwardCollection: (value: unknown, path?: string) => CashierConfigurationIssue[];
export declare const validateCashierPurchaseInput: (value: unknown) => CashierConfigurationIssue[];
/** Public config validation never accepts the private calculation normal form. */
export declare const validateCashierPurchaseConfiguration: (value: unknown) => CashierConfigurationIssue[];
export declare const validateCashierPaymentContext: (value: unknown) => CashierConfigurationIssue[];
export declare const validateCashierOffers: (value: unknown) => CashierConfigurationIssue[];
/** Shape-only validation for editors; complete configuration validates ownership. */
export declare const validateCashierCheckoutDetails: (value: unknown) => CashierConfigurationIssue[];
//# sourceMappingURL=purchaseValidation.d.ts.map