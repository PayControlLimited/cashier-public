export declare const CashierWebRuntimeContext: import('react').Context<Readonly<{
    client: import('../../../api/src/payments/client.js').Client;
    queryClient: import('@tanstack/query-core').QueryClient;
    resumeDelivery: () => void;
    createBootstrapCache: () => import('@tanstack/query-core').QueryClient;
    attachBootstrapCache: (cache: import('@tanstack/query-core').QueryClient) => () => void;
    retainBootstrapCache: (cache: import('@tanstack/query-core').QueryClient) => (() => void) | undefined;
    onWebPaymentUpdated: (event: Parameters<NonNullable<import('../utils/elements.js').CashierRuntimeConfig["onPaymentUpdated"]>>[0]) => void;
    onWebPaymentFinished: (event: Parameters<NonNullable<import('../utils/elements.js').CashierRuntimeConfig["onPaymentFinished"]>>[0]) => void;
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
    updateConfiguration: (next: import('../utils/elements.js').CashierRuntimeConfig, replaceBootstrap?: boolean) => void;
    readLockedPaymentTypes: () => Pick<import('../utils/paymentTypes.js').PaymentTypesResult, "paymentTypes" | "sections">;
    configureCatalogue: (next: Pick<import('../utils/elements.js').CashierRuntimeConfig, "method">) => void;
    configureHostData: (next: Pick<import('../utils/elements.js').CashierRuntimeConfig, "offers" | "uiBonuses" | "user" | "bonuses"> & {
        selectedBonusCode?: string | null;
    }) => void;
    ownsSelection: (selectionId?: string) => boolean;
    prepareOrdinary: () => boolean;
    submitted: () => Promise<void> | undefined;
    mapFormObserver: (state: import('..').CashierPaymentFormState) => import('..').CashierPaymentFormState | null;
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
    onWebPaymentFinished: (event: Parameters<NonNullable<import('../utils/elements.js').CashierRuntimeConfig["onPaymentFinished"]>>[0]) => void;
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
    updateConfiguration: (next: import('../utils/elements.js').CashierRuntimeConfig, replaceBootstrap?: boolean) => void;
    readLockedPaymentTypes: () => Pick<import('../utils/paymentTypes.js').PaymentTypesResult, "paymentTypes" | "sections">;
    configureCatalogue: (next: Pick<import('../utils/elements.js').CashierRuntimeConfig, "method">) => void;
    configureHostData: (next: Pick<import('../utils/elements.js').CashierRuntimeConfig, "offers" | "uiBonuses" | "user" | "bonuses"> & {
        selectedBonusCode?: string | null;
    }) => void;
    ownsSelection: (selectionId?: string) => boolean;
    prepareOrdinary: () => boolean;
    submitted: () => Promise<void> | undefined;
    mapFormObserver: (state: import('..').CashierPaymentFormState) => import('..').CashierPaymentFormState | null;
    start: () => Promise<void>;
    destroy: () => void;
    getSnapshot: () => import('../../../cashier-core/src/index.ts').HeadlessCashierSnapshot;
    subscribe: (listener: () => void) => () => void;
    subscribeEvents: (listener: (event: import('../../../cashier-core/src/index.ts').HeadlessCashierEvent) => void) => () => void;
    dispatch: (command: import('../../../cashier-core/src/index.ts').HeadlessCashierCommand) => import('../../../cashier-core/src/index.ts').HeadlessCashierCommandReceipt;
    updateHostData: (update: import('../../../cashier-core/src/index.ts').HeadlessCashierHostDataUpdate) => void;
}> | null;
//# sourceMappingURL=webRuntime.d.ts.map