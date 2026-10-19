import { DisplayItemInput } from './displayItemValidation.js';
import { CashierConfig, CashierMessage, CashierAction, CashierItem, CashierConfigurationIssue } from '../types/CashierConfig.js';
import { CashierElement, CashierContentStyle } from '../types/presentation.js';
/** Private normal form. Business facts are captured once, independently of display membership. */
export type CashierMerchantInput = {
    purchaseItems?: CashierItem[];
    displayItems?: DisplayItemInput[];
    messages?: CashierMessage[];
    actions?: CashierAction[];
    itemOptions?: CashierContentStyle;
    actionLayout?: 'row' | 'stack';
    elementGroups?: CashierElement[];
    elementIssues?: CashierConfigurationIssue[];
};
type LegacyConfigKeys = 'bonuses' | 'uiBonuses' | 'uiBonusesStyle' | 'uiBonusesAvailable' | 'onBonusSelected' | 'onBonusDeselected';
/** Internal compatibility view: released names converge at the offer adapter. */
export type CashierRuntimeConfig = Omit<CashierConfig, LegacyConfigKeys> & {
    bonuses?: import('../types/CashierConfig.js').CashierBonusDefinition[];
    uiBonuses: boolean;
    uiBonusesStyle: import('../types/CashierConfig.js').CashierOffersStyle;
    uiBonusesAvailable: boolean;
    onBonusSelected?: (bonus: import('../types/CashierConfig.js').CashierBonusDefinition) => void;
    onBonusDeselected?: (bonus: import('../types/CashierConfig.js').CashierBonusDefinition) => void;
} & CashierMerchantInput;
export type FrozenElementGroup = NonNullable<import('../types/CashierConfig.js').CashierPaymentContextV3['elements']>[number];
/** One atomic content validator for React, DOM, the editor and hosted JSON. */
export declare function normaliseCashierElements(value: unknown): CashierMerchantInput;
export declare const validateCashierElements: (value: unknown) => CashierConfigurationIssue[];
/** Styles remain live; only membership and visibility join historical payment data. */
export declare const freezeElementGroups: (groups: CashierElement[] | undefined) => FrozenElementGroup[] | undefined;
/** Presentation data only. No catalogue inputs or configuration crosses this projection. */
export declare function projectCashierElements({ groups, frozen, messages, actions, items, displayItems, screen, status, }: {
    groups: readonly CashierElement[];
    frozen?: readonly FrozenElementGroup[];
    messages: readonly import('../types/presentation.js').CashierResolvedMessage[];
    actions: readonly import('../types/presentation.js').CashierResolvedAction[];
    items: readonly import('../types/presentation.js').CashierResolvedItem[];
    displayItems?: readonly import('../types/presentation.js').CashierResolvedDisplayItem[];
    screen: import('../types/presentation.js').CashierPresentationScreenId;
    status?: string;
}): import('../types/presentation.js').CashierResolvedElement[];
export declare const elementsMaterial: (value: unknown) => string;
/** JSON transport carries declarations only; React/DOM renderers stay at their local boundary. */
export declare const isCashierDeclarativePresentation: (value: unknown) => boolean;
/** Earlier recovery schemas contain literal facts without display membership. */
export declare const adaptFrozenElements: (context: Pick<import('../types/CashierConfig.js').CashierPaymentContextV2, "items" | "messages" | "actions">) => FrozenElementGroup[];
/** Compatibility projection for recovery authored before elements; values are already resolved. */
export declare const projectLegacyElements: ({ messages, actions, items, itemOptions, actionLayout, }: {
    messages: readonly import('../types/presentation.js').CashierResolvedMessage[];
    actions: readonly import('../types/presentation.js').CashierResolvedAction[];
    items: readonly import('../types/presentation.js').CashierResolvedItem[];
    itemOptions?: CashierContentStyle;
    actionLayout?: "row" | "stack";
}) => import('../types/presentation.js').CashierResolvedElement[];
/** Live cosmetics overlay confirmed facts without replacing wording or money. */
export declare const applyLiveElementStyles: (facts: readonly CashierElement[], live: readonly CashierElement[]) => CashierElement[];
export {};
//# sourceMappingURL=elements.d.ts.map