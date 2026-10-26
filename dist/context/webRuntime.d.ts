export declare const CashierWebRuntimeContext: import('react').Context<Readonly<{
    client: import('../../../api/src/payments/client.js').Client;
    queryClient: import('@tanstack/query-core').QueryClient;
    resumeDelivery: () => void;
    createBootstrapCache: () => import('@tanstack/query-core').QueryClient;
    attachBootstrapCache: (cache: import('@tanstack/query-core').QueryClient) => () => void;
    retainBootstrapCache: (cache: import('@tanstack/query-core').QueryClient) => (() => void) | undefined;
    onWebPaymentUpdated: (event: Parameters<NonNullable<import('../utils/elements.js').CashierRuntimeConfig["onPaymentUpdated"]>>[0]) => void;
    onWebPaymentFinished: (payment: Parameters<NonNullable<import('../utils/elements.js').CashierRuntimeConfig["onPaymentFinished"]>>[0]) => void;
    pinQuery: (cache: import('@tanstack/query-core').QueryClient, kind: string, options: import('@tanstack/query-core').QueryObserverOptions) => void;
    submissionError: () => string | undefined;
    ordinaryForm: Readonly<{
        getSnapshot: () => Readonly<{
            revision: number;
            values: Readonly<Record<string, string | boolean>>;
            errors: Readonly<Record<string, string>>;
            validated: boolean;
            valid: boolean;
            complete: boolean;
        }>;
        subscribe: (listener: () => void) => () => boolean;
        replaceValues: (values: Readonly<Record<string, string | boolean>>) => void;
        replaceErrors: (errors: Readonly<Record<string, string>>) => void;
        reconcile: (values: Readonly<Record<string, string | boolean>>, errors: Readonly<Record<string, string>>) => void;
        setError: (id: string, error: string) => void;
        reset: (values?: Readonly<Record<string, string | boolean>>) => void;
    }>;
    mountProtectedSurface: (id: string, container: HTMLElement, renderNotice?: boolean) => Readonly<{
        destroy: () => void;
    }>;
    providerSurface: {
        subscribe: (listener: () => void) => () => void;
        getRevision: () => number;
        refreshPresentation: () => void;
        manualFailures: () => number;
        sync: (paymentId: string | null, payment: unknown, merchantOwnsWindow: boolean, canExecute?: boolean) => import('../utils/providerAction.js').BrowserProviderAction;
        presentation: () => "iframe" | "window" | undefined;
        descriptor: () => import('../../../cashier-core/src/index.ts').HeadlessProtectedSurface | undefined;
        finish: (paymentId: string) => boolean;
        interrupted: () => boolean;
        finished: () => boolean;
        canOpen: () => boolean;
        open: () => boolean;
        mount: (id: string, container: HTMLElement, renderNotice?: boolean) => Readonly<{
            destroy: () => void;
        }>;
        dispose: () => void;
    };
    finishWebFlow: (paymentId: string) => void;
    claimFlowFinished: () => boolean;
    loadSummary: (paymentId: string) => Promise<import('../../../api/src/payments.ts').PaymentSummaryResponse | undefined>;
    readSummary: () => import('../../../api/src/payments.ts').PaymentSummaryResponse | undefined;
    subscribeSummary: (listener: () => void) => () => void;
    adoptBootstrap: (next: import('../utils/elements.js').CashierRuntimeConfig, catalogue?: import('../types/payment.js').PaymentType[], translations?: import('../utils/i18n.js').CashierTranslations) => void;
    attachConfigurationEpoch: (epoch: object) => () => void;
    adoptWeb: (epoch: object, next: Omit<import('..').CashierConfig, "uiBonuses" | "uiBonusesStyle" | "uiBonusesAvailable" | "bonuses" | "onBonusSelected" | "onBonusDeselected"> & {
        bonuses?: import('../types/CashierConfig.js').CashierBonusDefinition[];
        uiBonuses: boolean;
        uiBonusesStyle: import('..').CashierOffersStyle;
        uiBonusesAvailable: boolean;
        onBonusSelected?: (bonus: import('../types/CashierConfig.js').CashierBonusDefinition) => void;
        onBonusDeselected?: (bonus: import('../types/CashierConfig.js').CashierBonusDefinition) => void;
    } & import('../utils/elements.js').CashierMerchantInput & Partial<Pick<import('./main.js').CashierState, "selectedBonusCode">>) => void;
    reportWebBootstrap: (status: "pending" | "ready" | "session-required" | "bootstrap-unavailable") => void;
    ownsSelection: () => boolean;
    attachSelection: (type: import('../types/payment.js').PaymentType | null) => () => void;
    mapFormObserver: (state: import('..').CashierPaymentFormState, proposed: import('../utils/paymentFieldUtils.js').PaymentFormValues) => import('..').CashierPaymentFormState | null;
    validateWeb: (type: import('../types/payment.js').PaymentType, values: import('../utils/paymentFieldUtils.js').PaymentFormValues) => Readonly<Record<string, string>>;
    submitWeb: (type: import('../types/payment.js').PaymentType, values: import('../utils/paymentFieldUtils.js').PaymentFormValues) => Promise<boolean>;
    start: () => Promise<void>;
    destroy: () => void;
    getSnapshot: () => import('../../../cashier-core/src/index.ts').HeadlessCashierSnapshot;
    subscribe: (listener: () => void) => () => void;
    subscribeEvents: (listener: (event: import('../../../cashier-core/src/index.ts').HeadlessCashierEvent) => void) => () => void;
    dispatch: (command: import('../../../cashier-core/src/index.ts').HeadlessCashierCommand) => import('../../../cashier-core/src/index.ts').HeadlessCashierCommandReceipt;
    updateHostData: (update: import('../../../cashier-core/src/index.ts').HeadlessCashierHostDataUpdate) => void;
}> | null>;
export declare const useCashierWebRuntime: () => Readonly<{
    client: import('../../../api/src/payments/client.js').Client;
    queryClient: import('@tanstack/query-core').QueryClient;
    resumeDelivery: () => void;
    createBootstrapCache: () => import('@tanstack/query-core').QueryClient;
    attachBootstrapCache: (cache: import('@tanstack/query-core').QueryClient) => () => void;
    retainBootstrapCache: (cache: import('@tanstack/query-core').QueryClient) => (() => void) | undefined;
    onWebPaymentUpdated: (event: Parameters<NonNullable<import('../utils/elements.js').CashierRuntimeConfig["onPaymentUpdated"]>>[0]) => void;
    onWebPaymentFinished: (payment: Parameters<NonNullable<import('../utils/elements.js').CashierRuntimeConfig["onPaymentFinished"]>>[0]) => void;
    pinQuery: (cache: import('@tanstack/query-core').QueryClient, kind: string, options: import('@tanstack/query-core').QueryObserverOptions) => void;
    submissionError: () => string | undefined;
    ordinaryForm: Readonly<{
        getSnapshot: () => Readonly<{
            revision: number;
            values: Readonly<Record<string, string | boolean>>;
            errors: Readonly<Record<string, string>>;
            validated: boolean;
            valid: boolean;
            complete: boolean;
        }>;
        subscribe: (listener: () => void) => () => boolean;
        replaceValues: (values: Readonly<Record<string, string | boolean>>) => void;
        replaceErrors: (errors: Readonly<Record<string, string>>) => void;
        reconcile: (values: Readonly<Record<string, string | boolean>>, errors: Readonly<Record<string, string>>) => void;
        setError: (id: string, error: string) => void;
        reset: (values?: Readonly<Record<string, string | boolean>>) => void;
    }>;
    mountProtectedSurface: (id: string, container: HTMLElement, renderNotice?: boolean) => Readonly<{
        destroy: () => void;
    }>;
    providerSurface: {
        subscribe: (listener: () => void) => () => void;
        getRevision: () => number;
        refreshPresentation: () => void;
        manualFailures: () => number;
        sync: (paymentId: string | null, payment: unknown, merchantOwnsWindow: boolean, canExecute?: boolean) => import('../utils/providerAction.js').BrowserProviderAction;
        presentation: () => "iframe" | "window" | undefined;
        descriptor: () => import('../../../cashier-core/src/index.ts').HeadlessProtectedSurface | undefined;
        finish: (paymentId: string) => boolean;
        interrupted: () => boolean;
        finished: () => boolean;
        canOpen: () => boolean;
        open: () => boolean;
        mount: (id: string, container: HTMLElement, renderNotice?: boolean) => Readonly<{
            destroy: () => void;
        }>;
        dispose: () => void;
    };
    finishWebFlow: (paymentId: string) => void;
    claimFlowFinished: () => boolean;
    loadSummary: (paymentId: string) => Promise<import('../../../api/src/payments.ts').PaymentSummaryResponse | undefined>;
    readSummary: () => import('../../../api/src/payments.ts').PaymentSummaryResponse | undefined;
    subscribeSummary: (listener: () => void) => () => void;
    adoptBootstrap: (next: import('../utils/elements.js').CashierRuntimeConfig, catalogue?: import('../types/payment.js').PaymentType[], translations?: import('../utils/i18n.js').CashierTranslations) => void;
    attachConfigurationEpoch: (epoch: object) => () => void;
    adoptWeb: (epoch: object, next: Omit<import('..').CashierConfig, "uiBonuses" | "uiBonusesStyle" | "uiBonusesAvailable" | "bonuses" | "onBonusSelected" | "onBonusDeselected"> & {
        bonuses?: import('../types/CashierConfig.js').CashierBonusDefinition[];
        uiBonuses: boolean;
        uiBonusesStyle: import('..').CashierOffersStyle;
        uiBonusesAvailable: boolean;
        onBonusSelected?: (bonus: import('../types/CashierConfig.js').CashierBonusDefinition) => void;
        onBonusDeselected?: (bonus: import('../types/CashierConfig.js').CashierBonusDefinition) => void;
    } & import('../utils/elements.js').CashierMerchantInput & Partial<Pick<import('./main.js').CashierState, "selectedBonusCode">>) => void;
    reportWebBootstrap: (status: "pending" | "ready" | "session-required" | "bootstrap-unavailable") => void;
    ownsSelection: () => boolean;
    attachSelection: (type: import('../types/payment.js').PaymentType | null) => () => void;
    mapFormObserver: (state: import('..').CashierPaymentFormState, proposed: import('../utils/paymentFieldUtils.js').PaymentFormValues) => import('..').CashierPaymentFormState | null;
    validateWeb: (type: import('../types/payment.js').PaymentType, values: import('../utils/paymentFieldUtils.js').PaymentFormValues) => Readonly<Record<string, string>>;
    submitWeb: (type: import('../types/payment.js').PaymentType, values: import('../utils/paymentFieldUtils.js').PaymentFormValues) => Promise<boolean>;
    start: () => Promise<void>;
    destroy: () => void;
    getSnapshot: () => import('../../../cashier-core/src/index.ts').HeadlessCashierSnapshot;
    subscribe: (listener: () => void) => () => void;
    subscribeEvents: (listener: (event: import('../../../cashier-core/src/index.ts').HeadlessCashierEvent) => void) => () => void;
    dispatch: (command: import('../../../cashier-core/src/index.ts').HeadlessCashierCommand) => import('../../../cashier-core/src/index.ts').HeadlessCashierCommandReceipt;
    updateHostData: (update: import('../../../cashier-core/src/index.ts').HeadlessCashierHostDataUpdate) => void;
}> | null;
//# sourceMappingURL=webRuntime.d.ts.map