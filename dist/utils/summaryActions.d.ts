import { CashierSummaryActionType, CashierSummaryActions, CashierSummaryActionThemeVariant, CashierSummaryUrlAction } from '../types/CashierConfig.js';
export type ResolvedCashierSummaryUrlAction = CashierSummaryUrlAction;
export type ResolvedCashierSummaryAction = {
    id: string;
    type: CashierSummaryActionType;
    label: string;
    themeVariant: CashierSummaryActionThemeVariant;
    action?: 'restart' | ResolvedCashierSummaryUrlAction;
};
export type ResolvedCashierSummaryActions = {
    layout: 'row' | 'stack';
    items: ResolvedCashierSummaryAction[];
};
type ResolveSummaryActionsOptions = {
    paymentStatus?: string | null;
    debug?: boolean;
};
export declare const isSafeSummaryActionHref: (href: string) => boolean;
export declare const resolveSummaryActionLayout: (summaryActions: Pick<CashierSummaryActions, "items" | "layout">) => "row" | "stack";
export declare const resolveCashierSummaryActions: (summaryActions: CashierSummaryActions | undefined, options?: ResolveSummaryActionsOptions) => ResolvedCashierSummaryActions | null;
export {};
//# sourceMappingURL=summaryActions.d.ts.map