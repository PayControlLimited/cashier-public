import { CashierRuntimeConfig as CashierConfig, CashierMerchantInput } from './elements.js';
import { CashierMessage, CashierPaymentContext, CashierPaymentContextV4, CashierFrozenMessage, CashierAction } from '../types/CashierConfig.js';
import { CashierPresentationScreenId, CashierPresentationText } from '../types/presentation.js';
type PurchaseConfig = Pick<CashierConfig, 'purchaseItems' | 'messages' | 'actions' | 'paymentContextId' | 'currency' | 'merchantId' | 'locale'> & CashierMerchantInput & Partial<Pick<CashierConfig, 'bonuses' | 'uiBonuses' | 'offers' | 'selectedOfferId' | 'checkout' | 'initialAmount'>> & {
    selectedBonusCode?: string | null;
};
type HistoricalMessage = CashierFrozenMessage & {
    legacyPlacement?: 'top' | 'bottom';
};
export type PurchaseContext = Omit<CashierPaymentContextV4, 'messages' | 'schemaVersion'> & {
    schemaVersion: 2 | 3 | 4;
    messages?: HistoricalMessage[];
};
export type PurchaseCapture = Omit<PurchaseContext, 'paymentId'>;
export declare const canonicalPurchaseAmount: (value: unknown) => string | undefined;
export declare const matchesPurchaseStatus: (statuses: readonly string[] | undefined, status: string | undefined, unrestricted?: boolean) => boolean;
export declare const purchasePreviewScreens: readonly CashierPresentationScreenId[];
export declare const visiblePurchaseMessages: <T extends {
    screens?: readonly CashierPresentationScreenId[];
    paymentStatuses?: readonly string[];
}>(messages: readonly T[], screen: CashierPresentationScreenId, status?: string) => T[];
export declare const capturePurchaseContext: ({ config, amount, resolveText, formatAmount, resolveTextKey, }: {
    config: PurchaseConfig;
    amount?: string;
    resolveText: (text: string) => string;
    resolveTextKey?: (text: string) => CashierPresentationText;
    formatAmount: (value: string) => string;
}) => PurchaseCapture;
/** Stable by content, after strict validation; never serialise malformed inputs. */
export declare const serialisePaymentRecoveryContext: (value: unknown) => string | undefined;
export declare const paymentMessageMaterial: (messages: CashierMessage[] | undefined) => string;
export declare const paymentActionMaterial: (actions: CashierAction[] | undefined) => string;
/** Version-one wording is literal. Apply its original text-node parameter policy,
 * never lookup historical keys in the current catalogue. */
export declare const normalisePaymentContext: (context: CashierPaymentContext) => PurchaseContext;
/** The selected offer is material; unrelated offers and its logo are not. */
export declare const bonusPurchaseMaterial: (bonuses: CashierConfig["bonuses"], selectedCode: string | null) => string;
/** Observe imperative configuration intent before React can batch a revert. */
export declare const configurationPurchaseMaterial: (value: Partial<CashierConfig> | undefined) => string;
/** Cosmetic message edits are intentionally excluded; ordering and visibility are material. */
export declare const purchaseMaterial: (config: PurchaseConfig, capture: PurchaseCapture, identity: string) => string;
export declare const matchesPurchaseMoney: (context: CashierPaymentContext | PurchaseCapture, money: unknown, currency?: unknown) => boolean;
export {};
//# sourceMappingURL=purchaseContext.d.ts.map