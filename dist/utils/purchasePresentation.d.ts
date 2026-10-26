import { CashierRuntimeConfig } from './elements.js';
import { CashierFrozenAward } from '../types/CashierConfig.js';
import { CashierPresentationScreenId, CashierPresentationText } from '../types/presentation.js';
import { PaymentAttemptSnapshot } from './paymentAttempt.js';
/** Canonical live-global/frozen-payment projection, independent of React and DOM. */
export declare const projectPurchasePresentation: ({ config, attempt, screen, paymentStatus, paymentId, authoritativeAmount, authoritativeCurrency, previewAmount, additionalAwards, bonusPreviewOwned, translateKey, resolveTextKey, formatCurrencyValue, canRestartPurchase, }: {
    config: CashierRuntimeConfig;
    attempt?: PaymentAttemptSnapshot;
    screen: CashierPresentationScreenId;
    paymentStatus?: string;
    paymentId?: string;
    authoritativeAmount?: unknown;
    authoritativeCurrency?: unknown;
    previewAmount?: string;
    additionalAwards?: readonly CashierFrozenAward[];
    bonusPreviewOwned?: boolean;
    translateKey: (key: string) => string;
    resolveTextKey: (key: string) => CashierPresentationText;
    formatCurrencyValue: (value: string) => string;
    canRestartPurchase: boolean;
}) => {
    purchase: import('./purchaseContext.js').PurchaseCapture | undefined;
    elements: Readonly<{
        id: string;
        scope: "global" | "payment";
        presentation: import('..').CashierContentStyle;
        items: readonly import('..').CashierResolvedElementItem[];
    }>[] | undefined;
    configuredMessages: ({
        presentation: Readonly<{
            appearance?: "plain" | "solid" | "ghost" | "outline" | "muted";
            themeVariant?: import('..').CashierSummaryActionThemeVariant;
            size?: "xs" | "sm" | "md" | "lg" | "xl";
            alignment?: "start" | "centre" | "end";
            placement?: "top" | "bottom" | "summary";
            layout?: "row" | "stack" | "list";
        }>;
        text: Readonly<{
            value: string;
            key?: string;
        }>;
        format: "markdown";
        localisation: Readonly<{
            locale: string;
            direction: "ltr" | "rtl";
        }>;
        id: string;
        scope: "global" | "payment";
        tone?: "info" | "warning" | "positive" | "negative" | undefined;
        announcement?: "polite" | "assertive" | undefined;
    } | {
        presentation: Readonly<{
            appearance?: "plain" | "solid" | "ghost" | "outline" | "muted";
            themeVariant?: import('..').CashierSummaryActionThemeVariant;
            size?: "xs" | "sm" | "md" | "lg" | "xl";
            alignment?: "start" | "centre" | "end";
            placement?: "top" | "bottom" | "summary";
            layout?: "row" | "stack" | "list";
        }>;
        localisation: Readonly<{
            locale: string;
            direction: "ltr" | "rtl";
        }>;
        id: string;
        tone?: "info" | "warning" | "positive" | "negative" | undefined;
        announcement?: "polite" | "assertive" | undefined;
        scope: "payment";
        text: import('../types/presentation.js').CashierPresentationText;
        format: "markdown";
        legacyPlacement?: "top" | "bottom";
    })[];
    configuredActions: ({
        identity: string;
        available: boolean;
        presentation: Readonly<{
            appearance?: "plain" | "solid" | "ghost" | "outline" | "muted";
            themeVariant?: import('..').CashierSummaryActionThemeVariant;
            size?: "xs" | "sm" | "md" | "lg" | "xl";
            alignment?: "start" | "centre" | "end";
            placement?: "top" | "bottom" | "summary";
            layout?: "row" | "stack" | "list";
        }>;
        label: Readonly<{
            value: string;
            key?: string;
        }>;
        localisation: Readonly<{
            locale: string;
            direction: "ltr" | "rtl";
        }>;
        action: "restart" | import('..').CashierUrlAction;
        id: string;
        scope: "global" | "payment";
    } | {
        identity: string;
        available: boolean;
        presentation: Readonly<{
            appearance?: "plain" | "solid" | "ghost" | "outline" | "muted";
            themeVariant?: import('..').CashierSummaryActionThemeVariant;
            size?: "xs" | "sm" | "md" | "lg" | "xl";
            alignment?: "start" | "centre" | "end";
            placement?: "top" | "bottom" | "summary";
            layout?: "row" | "stack" | "list";
        }>;
        localisation: Readonly<{
            locale: string;
            direction: "ltr" | "rtl";
        }>;
        action: "restart" | import('..').CashierUrlAction;
        id: string;
        scope: "payment";
        label: import('../types/presentation.js').CashierPresentationText;
    })[];
    itemOptions: Readonly<{
        appearance?: "plain" | "solid" | "ghost" | "outline" | "muted";
        themeVariant?: import('..').CashierSummaryActionThemeVariant;
        size?: "xs" | "sm" | "md" | "lg" | "xl";
        alignment?: "start" | "centre" | "end";
        placement?: "top" | "bottom" | "summary";
        layout?: "row" | "stack" | "list";
    }>;
    actionLayout: "row" | "stack" | undefined;
    hasCanonicalActions: boolean;
    paymentStatus: string | undefined;
    orderPricing: Readonly<{
        reference?: import('..').CashierPresentationMoney;
        current: import('..').CashierPresentationMoney;
        saving?: import('..').CashierPresentationMoney;
        savingLabel?: CashierPresentationText;
        advertisedLabel?: CashierPresentationText;
        allocations?: readonly import('..').CashierSavingAllocation[];
    }> | undefined;
    selectedOffer: Readonly<{
        id: string;
        title: CashierPresentationText;
        description: CashierPresentationText;
        submission?: Readonly<{
            bonusCode: string;
        }>;
        couponCode?: string;
    }> | undefined;
    items: Readonly<Omit<CashierFrozenAward, "screens" | "paymentStatuses" | "source"> & {
        source?: Readonly<NonNullable<import('../types/CashierConfig.js').CashierFrozenAward["source"]>>;
        localisation: import('..').CashierPresentationLocalisation;
    }>[];
    issues: import('..').CashierConfigurationIssue[];
    purchaseError: Readonly<{
        value: string;
        key?: string;
    }> | undefined;
};
//# sourceMappingURL=purchasePresentation.d.ts.map