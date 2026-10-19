import { CashierSummaryActionType, CashierSummaryActions, CashierSummaryActionThemeVariant, CashierSummaryUrlAction } from '../types/CashierConfig.js';
import { CashierContentStyle } from '../types/presentation.js';
export type ResolvedCashierSummaryUrlAction = CashierSummaryUrlAction;
export type ResolvedCashierSummaryAction = {
    id: string;
    contentId?: string;
    chrome?: boolean;
    type: CashierSummaryActionType;
    label: string;
    themeVariant: CashierSummaryActionThemeVariant;
    appearance?: Exclude<CashierContentStyle['appearance'], 'plain'>;
    size?: CashierContentStyle['size'];
    action?: 'restart' | ResolvedCashierSummaryUrlAction;
};
export type ResolvedCashierSummaryActions = {
    layout: 'row' | 'stack';
    items: ResolvedCashierSummaryAction[];
};
type ResolveSummaryActionsOptions = {
    paymentStatus?: string | null;
    debug?: boolean;
    preview?: boolean;
};
export declare const isSafeActionHref: (href: string) => boolean;
export declare const normaliseUrlAction: (action: CashierSummaryUrlAction) => ResolvedCashierSummaryUrlAction | null;
export declare const resolveSummaryActionLayout: (summaryActions: Pick<CashierSummaryActions, "items" | "layout">) => "row" | "stack";
export declare const resolveCashierSummaryActions: (summaryActions: CashierSummaryActions | undefined, options?: ResolveSummaryActionsOptions) => ResolvedCashierSummaryActions | null;
export declare const isSafeSummaryActionHref: (href: string) => boolean;
export {};
//# sourceMappingURL=summaryActions.d.ts.map