import { CashierOffer, CashierCheckoutDetails, CashierCheckoutState, CashierCheckoutUpdateRequest, CashierCheckoutUpdateResolution, CashierCheckoutUpdateRejection, CashierCheckoutCommandResult, CashierOfferSelectionChangedEvent, CashierFrozenOffer, CashierResolvedPriceComparison } from './offers.js';
import { CashierExtensions, CashierContentStyle, CashierPresentationScreenId } from './presentation.js';
export declare enum CashierMethods {
    PAYIN = "payin",
    PAYOUT = "payout",
    VERIFY = "verify"
}
export declare enum CashierLayoutListType {
    ACCORDION = "accordion",
    ACCORDION_COLLAPSIBLE = "accordion-collapsible",
    GRID = "grid",
    LIST = "list"
}
export declare enum CashierComboViewPaymentTypesMode {
    ACCORDION = "accordion",
    ACCORDION_COLLAPSIBLE = "accordion-collapsible",
    GRID = "grid",
    LIST = "list",
    NONE = "none",
    PICKER = "picker"
}
export declare enum CashierOffersStyle {
    PAGE = "page",
    PICKER_PAYMENT_FORM = "picker-payment-form",
    PICKER_PAYMENT_LIST = "picker-payment-list"
}
/** @deprecated Use CashierOffersStyle. Enum-member types remain compatible. */
export { CashierOffersStyle as CashierBonusesStyle };
export declare enum CashierSuggestAction {
    ON_PAYMENT_FAILURE_LAST_SUCCESSFUL = "onPaymentFailed:lastSuccessful",
    ON_PENDING_PAYOUT_CANCEL = "onPendingPayout:cancel"
}
export declare enum CashierSummaryActionType {
    BUTTON = "button",
    TEXT = "text"
}
export type CashierActionThemeVariant = 'neutral' | 'secondary' | 'primary' | 'success' | 'danger' | 'warning' | 'info';
export type CashierUrlAction = {
    href: string;
    target?: string;
    rel?: string;
    referrerPolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url';
    download?: boolean | string;
};
export type CashierSummaryAction = {
    id: string;
    type?: `${CashierSummaryActionType}`;
    label: string;
    themeVariant?: CashierActionThemeVariant;
    paymentStatuses?: string[];
    action?: 'restart' | CashierUrlAction;
};
export type CashierSummaryActions = {
    layout?: 'row' | 'stack';
    items: CashierSummaryAction[];
};
/** Screen-targeted merchant control. Cosmetic options belong to presentation rules. */
export type CashierAction = Omit<CashierContentStyle, 'layout'> & {
    id: string;
    scope: 'global' | 'payment';
    label: string;
    params?: Record<string, string>;
    screens?: CashierPresentationScreenId[];
    paymentStatuses?: string[];
    action: 'restart' | CashierUrlAction;
};
export type CashierSummaryActionThemeVariant = CashierActionThemeVariant;
export type CashierSummaryUrlAction = CashierUrlAction;
export type CashierPaymentFieldNotification = {
    key: string;
    type: 'info' | 'warning' | 'positive' | 'negative';
    orientation?: 'top' | 'bottom';
};
export type CashierPaymentField = {
    id?: string;
    label?: string;
    labelKeys?: string[];
    type?: string;
    validation?: Record<string, unknown>;
    notification?: CashierPaymentFieldNotification;
    options?: Array<{
        label: string;
        value: string;
    }>;
    placeholder?: string;
};
export type CashierPaymentType = {
    name: string;
    type: string;
    typeId: number;
    method: string;
    logo?: Record<string, string>;
    accountId?: string;
    service?: string;
    fields?: CashierPaymentField[];
    notifications?: CashierPaymentFieldNotification[];
    limits?: {
        min?: string;
        max?: string;
    };
    fee?: {
        feeType?: 'fixed' | 'percentage';
        value?: string;
        direction?: 'add' | 'deduct';
    };
    lastSuccessful?: Date;
};
export type CashierRedirectData = {
    url: string;
    method: 'GET' | 'POST';
    data?: Record<string, string> | string;
    type?: 'iframe' | 'hidden_iframe' | 'window' | 'script';
    scriptId?: string;
    /** Method window begins when the hidden form is submitted. */
    actionId?: string;
    timeout?: {
        durationMs: number;
        reportUrl: string;
        reportToken: string;
    };
};
export type CashierPaymentFormData = {
    actionUrl: string;
    fields: CashierPaymentField[];
};
/**
 * Payload of onPaymentCreated. Payment creation is asynchronous, so it carries
 * the payment ID alone - status, redirect and form data arrive later through
 * onPaymentUpdated and onPaymentFinished.
 */
export type CashierPaymentCreatedResponse = {
    paymentId?: string;
    /** Merchant-owned correlation captured when Pay was committed. */
    paymentContextId?: string;
    /**
     * @deprecated Never populated on the create response; read it from the
     * CashierPaymentProgress passed to onPaymentUpdated or onPaymentFinished.
     */
    paymentStatus?: string;
    /**
     * @deprecated Never populated on the create response; read it from the
     * CashierPaymentProgress passed to onPaymentUpdated or onPaymentFinished.
     */
    redirect?: CashierRedirectData;
};
/**
 * Payload of onPaymentUpdated and onPaymentFinished. Declared standalone rather
 * than extending CashierPaymentCreatedResponse so the deprecation on that
 * type's compatibility members does not reach the channel that populates them.
 */
export type CashierPaymentProgress = {
    paymentId?: string;
    status?: string;
    paymentStatus?: string;
    form?: CashierPaymentFormData;
    redirect?: CashierRedirectData;
};
export type CashierPaymentError = {
    error: string;
    creationOutcome?: 'rejected' | 'unknown';
    paymentContextId?: string;
};
export type CashierPaymentUpdatedEvent = ({
    type: 'message';
    merchantId: string;
} & CashierPaymentProgress) | {
    type: 'error';
    merchantId: string;
    paymentId: string;
    error: {
        message: string;
    };
};
export type CashierPaymentSummaryField = {
    id: string;
    label: string;
    value: string | Record<string, unknown>;
};
export type CashierPaymentSummaryMessage = {
    keys: string[];
};
export type CashierPaymentSummaryResponse = {
    paymentStatus: string;
    subStatus?: string;
    /**
     * @deprecated Scheduled for removal; use displayMessages instead. Legacy
     * flat list of i18n keys, one displayed line per entry, retained only for
     * older Payment API responses.
     */
    messages?: string[];
    displayMessages?: CashierPaymentSummaryMessage[];
    fields?: CashierPaymentSummaryField[];
};
export type CashierPaymentSummaryEvent = {
    merchantId: string;
    paymentId: string;
    summary: CashierPaymentSummaryResponse;
};
export type CashierLocale = Intl.Locale | string;
export type CashierCurrency = NonNullable<Intl.NumberFormatOptions['currency']>;
export type PayControlUiThemeTokenCategory = 'color' | 'space' | 'size' | 'radius' | 'shadow' | 'font' | 'motion' | 'opacity' | 'z';
export type PayControlUiThemeCssVariableName = `--pc-${PayControlUiThemeTokenCategory}-${string}` | '--hf-font-family';
export type PayControlUiThemeTokenValue = string | number;
export type PayControlUiThemeCssVariables = Partial<Record<PayControlUiThemeCssVariableName, PayControlUiThemeTokenValue>>;
export type PayControlUiThemeCssDeclarationValue = string | number;
export type PayControlUiThemeCssDeclaration = Partial<Record<string, PayControlUiThemeCssDeclarationValue>>;
export type PayControlUiThemeCssObject = Record<string, PayControlUiThemeCssDeclaration | null>;
export type PayControlUiTheme = {
    schemaVersion?: 1 | 2 | 3;
    name?: string;
    logoUrl?: string;
    cssUrl?: string | null;
    css?: PayControlUiThemeCssObject | null;
    variables?: PayControlUiThemeCssVariables;
};
export type CashierTheme = Record<string, string | number> | PayControlUiTheme;
export type CashierNumberFormatOptions = Intl.NumberFormatOptions;
export type CashierDateTimeFormatOptions = Intl.DateTimeFormatOptions;
export type CashierUser = {
    payinCount?: number;
    daysSinceRegistration?: number;
    totalPayinAmount?: number;
    balance?: number;
    withdrawableBalance?: number;
    bonusBalance?: number;
};
export type CashierUserBalance = Pick<CashierUser, 'balance' | 'withdrawableBalance' | 'bonusBalance'>;
export type CashierBonusConditionItem = {
    method?: CashierMethods;
    type?: CashierPaymentType['type'];
    service?: CashierPaymentType['service'];
    accountId?: CashierPaymentType['accountId'];
    minAmount?: number;
    maxAmount?: number;
    minPayinCount?: number;
    maxPayinCount?: number;
    minTotalPayinAmount?: number;
    maxTotalPayinAmount?: number;
    minDaysSinceRegistration?: number;
    maxDaysSinceRegistration?: number;
    closeToAmount?: number;
    closeToPayinCount?: number;
    closeToTotalPayinAmount?: number;
    closeToDaysSinceRegistration?: number;
};
export type CashierBonusPaymentTypeConditionItem = CashierBonusConditionItem;
export type CashierBonusConditions = {
    include?: CashierBonusConditionItem[];
    exclude?: CashierBonusConditionItem[];
};
export type CashierValueRule<Value = number> = {
    type: 'fixed' | 'percentage' | 'multiplier';
    value: Value;
    maxValue?: Value;
    rounding?: 'floor' | 'round' | 'ceil' | 'none';
};
export type CashierItemValue = CashierValueRule;
export type CashierItem = {
    id: string;
    type: 'currency' | 'item';
    name?: string;
    paymentStatuses?: string[];
    message?: string;
    value: CashierItemValue;
    screens?: CashierPresentationScreenId[];
};
/** Released bonus award names share the item contract. */
export type CashierAwardValue = CashierItemValue;
export type CashierAward = CashierItem;
export type CashierMessage = Omit<CashierContentStyle, 'layout'> & {
    id: string;
    scope: 'global' | 'payment';
    text: string;
    params?: Record<string, string>;
    screens?: CashierPresentationScreenId[];
    paymentStatuses?: string[];
    tone?: 'info' | 'warning' | 'positive' | 'negative';
    announcement?: 'polite' | 'assertive';
};
/** Literal display data. It must never be translated again during recovery. */
export type CashierFrozenAward = {
    /** Omitted source means checkout for version-one recovery compatibility. */
    source?: {
        kind: 'checkout';
    } | {
        kind: 'bonus';
        bonusCode: string;
    };
    id: string;
    type: CashierAward['type'];
    value: string;
    formattedValue: string;
    /** Literal neutral quantity wording; omitted by older recovery records. */
    quantityText?: string;
    name?: string;
    text: string;
    screens?: CashierPresentationScreenId[];
    paymentStatuses?: string[];
};
export type CashierFrozenMessage = Omit<CashierMessage, 'scope' | 'params' | 'text' | keyof CashierContentStyle> & {
    scope: 'payment';
    text: import('./presentation.js').CashierPresentationText;
    format: 'markdown';
};
export type CashierFrozenAction = Omit<CashierAction, 'scope' | 'params' | 'label' | keyof CashierContentStyle> & {
    scope: 'payment';
    label: import('./presentation.js').CashierPresentationText;
};
/** Version one retains literal historical wording and its original placeholder policy. */
export type CashierPaymentContextV1 = {
    schemaVersion: 1;
    paymentId: string;
    merchantId: string;
    paymentContextId?: string;
    amount?: string;
    currency: string;
    locale: string;
    awards?: CashierFrozenAward[];
    messages?: (Omit<CashierMessage, 'text' | 'scope' | keyof CashierContentStyle> & {
        scope: 'payment';
        text: string;
        placement: 'top' | 'bottom';
        params?: Record<string, string>;
        actions?: CashierSummaryActions;
    })[];
};
/** Historical display membership; quantities and wording live in the unique frozen facts. */
export type CashierFrozenElement = {
    id: string;
    scope: 'payment';
    screens?: CashierPresentationScreenId[];
    paymentStatuses?: string[];
    items: {
        id: string;
        kind: 'text' | 'action' | 'award';
    }[];
};
/** Merchant-supplied historical expectation, not proof of item fulfilment. */
export type CashierPaymentContextV2 = {
    schemaVersion: 2;
    paymentId: string;
    merchantId: string;
    paymentContextId?: string;
    amount?: string;
    currency: string;
    locale: string;
    items?: CashierFrozenAward[];
    elements?: CashierFrozenElement[];
    messages?: CashierFrozenMessage[];
    actions?: CashierFrozenAction[];
};
/** Version three adds literal informational rows without changing payment authority. */
export type CashierPaymentContextV3 = Omit<CashierPaymentContextV2, 'schemaVersion' | 'elements'> & {
    schemaVersion: 3;
    displayItems?: import('./presentation.js').CashierResolvedDisplayItem[];
    elements?: (Omit<CashierFrozenElement, 'items'> & {
        items: {
            id: string;
            kind: 'text' | 'action' | 'award' | 'item';
        }[];
    })[];
};
/** Confirmed offer and graphical prices are literal historical facts. */
export type CashierPaymentContextV4 = Omit<CashierPaymentContextV3, 'schemaVersion'> & {
    schemaVersion: 4;
    offer?: CashierFrozenOffer;
    orderPricing?: CashierResolvedPriceComparison;
};
export type CashierPaymentContext = CashierPaymentContextV1 | CashierPaymentContextV2 | CashierPaymentContextV3 | CashierPaymentContextV4;
export type CashierReconcileOptions = {
    paymentId: string;
    paymentContextId?: string;
};
export type CashierConfigurationIssue = {
    code: 'invalid-value' | 'duplicate-id' | 'unsupported-version';
    path: string;
};
export type CashierBonusDefinition = {
    code: string;
    title: string;
    description: string;
    logo?: string;
    /**
     * @deprecated Use `awards` with a `currency` award instead.
     */
    maxBonus?: number;
    /**
     * @deprecated Use `awards` with a `currency` award and
     * `value.type: 'percentage'` instead.
     */
    maxBonusPercentage?: number;
    awards?: CashierAward[];
    preselected?: boolean;
    termsAndConditions?: string;
    conditions?: CashierBonusConditions;
};
/** @deprecated Use CashierOffer. Existing bonus contracts remain supported. */
export type CashierBonus = CashierBonusDefinition;
export type CashierBonusPaymentTypeConditions = CashierBonusConditions;
export type CashierPendingWithdrawalCancelledEvent = {
    paymentId: string;
    amount: number;
    currency: string;
    createdAt: Date;
    remainingPendingCount: number;
    /**
     * Total value of remaining withdrawals in the cancelled withdrawal's
     * `currency`.
     */
    remainingPendingTotal: number;
    /** Per-currency totals for all remaining pending withdrawals. */
    remainingPendingTotals?: Array<{
        amount: number;
        currency: string;
    }>;
};
export type CashierBonusTopUpEvent = {
    bonus: CashierBonusDefinition;
    previousAmount: number;
    nextAmount: number;
    addedAmount: number;
    fullClaimAmount: number;
};
export type CashierComboViewFormValue = string | boolean;
export type CashierComboViewFormDraft = {
    paymentTypeName: CashierPaymentType['name'];
    method: CashierMethods;
    amount: string;
    values: Record<string, CashierComboViewFormValue>;
    hasHostedFields: boolean;
};
export type CashierPaymentFormDraft = {
    paymentTypeName: CashierPaymentType['name'];
    method: CashierMethods;
    amount: string;
    values: Record<string, CashierComboViewFormValue>;
    hasHostedFields: boolean;
};
export interface HostedFieldsFontSource {
    url: string;
    format?: 'woff2' | 'woff' | 'truetype' | 'opentype';
    weight?: string | number;
    style?: 'normal' | 'italic';
    display?: 'auto' | 'block' | 'swap' | 'fallback' | 'optional';
}
export interface HostedFieldsFontDefinition {
    family: string;
    sources: HostedFieldsFontSource[];
}
export type CashierProps = (Partial<CashierConfig> & CashierExtensions & {
    /** Content layout grows naturally for a host that controls scrolling. */
    layout?: 'viewport' | 'content';
    /** Safe lifecycle observation; excludes configuration and form values. */
    onEmbeddingStateChanged?: CashierEmbeddingStateChanged;
    /** Resolved host labels; never the full translation catalogue. */
    onEmbeddingPresentationTextChanged?: CashierEmbeddingPresentationTextChanged;
    /**
     * Resumes observation of a server-known payment after the host recreates
     * Cashier. This intentionally sits outside CashierConfig.
     */
    resumePaymentId?: string;
    resumePaymentContext?: CashierPaymentContext;
}) | ({
    config: Partial<CashierConfig>;
} & CashierExtensions & {
    /** Content layout grows naturally for a host that controls scrolling. */
    layout?: 'viewport' | 'content';
    onEmbeddingStateChanged?: CashierEmbeddingStateChanged;
    /** Resolved host labels; never the full translation catalogue. */
    onEmbeddingPresentationTextChanged?: CashierEmbeddingPresentationTextChanged;
    /**
     * Resumes observation of a server-known payment after the host recreates
     * Cashier. This intentionally sits outside CashierConfig.
     */
    resumePaymentId?: string;
    resumePaymentContext?: CashierPaymentContext;
});
export type CashierEmbeddingPresentationText = Readonly<{
    locale: string;
    title?: string;
    close?: string;
    connectionLost?: string;
}>;
export type CashierEmbeddingPresentationTextChanged = (text: CashierEmbeddingPresentationText) => void | Promise<void>;
export type CashierEmbeddingRecovery = Readonly<{
    kind: 'unsubmitted';
} | {
    kind: 'known';
    paymentId: string;
} | {
    kind: 'unknown-creation';
}>;
export type CashierEmbeddingSnapshot = Readonly<{
    lifecycle: 'bootstrapping' | 'ready' | 'error' | 'disposed';
    busy: boolean;
    canGoBack: boolean;
    recovery: CashierEmbeddingRecovery;
    error?: Readonly<{
        code: 'bootstrap-failed' | 'session-required' | 'status-unavailable';
        retryable: boolean;
    }>;
}>;
export type CashierEmbeddingCommandResult = Readonly<{
    status: 'accepted';
} | {
    status: 'rejected';
    reason: 'not-ready' | 'busy' | 'active-payment' | 'unknown-creation' | 'unavailable' | 'disposed';
}>;
export type CashierEmbeddingStateChanged = (snapshot: CashierEmbeddingSnapshot) => void | Promise<void>;
export type CashierHandle = {
    setOffers?: (offers: CashierOffer[] | undefined) => void;
    selectOffer?: (id: string | null) => CashierCheckoutCommandResult;
    refreshCheckout?: () => CashierCheckoutCommandResult;
    resolveCheckoutUpdate?: (resolution: CashierCheckoutUpdateResolution) => CashierCheckoutCommandResult;
    rejectCheckoutUpdate?: (rejection: CashierCheckoutUpdateRejection) => CashierCheckoutCommandResult;
    getCheckoutState?: () => CashierCheckoutState;
    /** @deprecated Use setOffers. */
    setBonuses: (bonuses: CashierBonusDefinition[] | undefined) => void;
    setUser: (user: CashierUser | undefined) => void;
    setUserBalance: (userBalance: CashierUserBalance | undefined) => void;
    /** @deprecated Use selectOffer. */
    setSelectedBonusCode: (code: string | null) => void;
    /** @deprecated Use selectOffer(null). */
    clearSelectedBonus: () => void;
    getEmbeddingState: () => CashierEmbeddingSnapshot;
    requestBack: () => CashierEmbeddingCommandResult;
    /** Checks whether the host may close; does not cancel a payment or unmount. */
    requestClose: () => CashierEmbeddingCommandResult;
    /** Reconciles the current payment through Cashier's existing status owner. */
    reconcile: (options?: CashierReconcileOptions) => CashierEmbeddingCommandResult;
};
/** @since 1.5.1 */
export type CashierPaymentMethodChangedEvent = {
    method: CashierMethods.PAYIN | CashierMethods.PAYOUT;
};
/** @since 1.5.1 */
export type CashierPaymentTypeReference = {
    name: string;
    type: string;
    typeId: number;
    method: string;
    accountId?: string;
    service?: string;
};
/** @since 1.5.1 */
export type CashierPaymentFormFieldState = {
    type: string;
    readOnly: boolean;
    required: boolean;
    dirty: boolean;
    valid: boolean;
    complete: boolean;
};
/** @since 1.5.1 */
export type CashierHostedFieldsState = {
    ready: boolean;
    dirty: boolean;
    valid: boolean;
    complete: boolean;
    error: boolean;
};
/** @since 1.5.1 */
export type CashierPaymentFormState = {
    amount: string;
    currency: CashierCurrency;
    method: CashierMethods;
    paymentType: CashierPaymentTypeReference;
    bonusCode: string | null;
    values: Record<string, string | boolean>;
    fields: Record<string, CashierPaymentFormFieldState>;
    hostedFields: CashierHostedFieldsState | null;
    dirty: boolean;
    valid: boolean;
    complete: boolean;
    submitting: boolean;
    canSubmit: boolean;
};
/** @since 1.5.1 */
export type CashierPaymentFormChangedEvent = {
    status: 'active';
    state: CashierPaymentFormState;
} | {
    status: 'inactive';
    reason: 'submitted';
    state: null;
};
export type CashierConfig = {
    /** @since 0.0.4 */
    merchantId: string;
    /** @since 0.0.4 */
    userId: string;
    /** @since 0.0.4 */
    sessionId: string;
    /** @since 0.0.4 */
    method: CashierMethods;
    /** @since 0.0.4 */
    apiUrl: string;
    /** @since 0.0.4 */
    debug: boolean;
    /** @since 1.5.0 */
    fetchConfig: boolean;
    /** @since 0.0.4 */
    initialAmount: string;
    /** @since 1.1.0 */
    lockAmount: boolean;
    /** @since 0.0.4 */
    currency: CashierCurrency;
    /** @since 0.0.4 */
    uiListStyle: CashierLayoutListType;
    /** @since 0.0.4 */
    locale: CashierLocale;
    /** @since 0.0.4 */
    uiPaymentMethodSwitcher: boolean;
    /** @since 0.0.4 */
    uiUserBalance?: boolean;
    /** @since 1.1.0 */
    uiProgressBar: boolean;
    /** @since 1.2.0 */
    uiInteractivePrompts: boolean;
    /**
     * @since 1.2.0
     * @deprecated Use uiSuggestAction with 'onPendingPayout:cancel'.
     * @deprecatedSince 1.5.0
     */
    uiCancelPendingPayout: boolean;
    /** @since 1.4.0 */
    uiPaymentConfirmView: boolean;
    /** @since 1.5.0 */
    uiFixedControls: boolean;
    /** @since 1.3.0 */
    uiComboView: boolean;
    /** @since 1.3.0 */
    uiComboView__PaymentTypes: CashierComboViewPaymentTypesMode;
    /**
     * @since 1.3.0
     * @deprecated Use uiComboView__PaymentTypes instead.
     * @deprecatedSince 1.3.0
     */
    uiComboView__PaymentTypePicker: boolean;
    /** @since 1.3.0 */
    uiComboView__PaymentForm: boolean;
    /**
     * @since 0.0.4
     * @deprecated Use uiComboView instead.
     * @deprecatedSince 1.3.0
     */
    uiAmountView: boolean;
    /**
     * @since 0.0.4
     * @deprecated Use uiComboView__PaymentTypes instead.
     * @deprecatedSince 1.3.0
     */
    uiAmountView__PaymentTypePicker: boolean;
    /**
     * @since 1.3.0
     * @deprecated Use uiComboView__PaymentForm instead.
     * @deprecatedSince 1.3.0
     */
    uiAmountView__PaymentForm: boolean;
    /**
     * Keep the branded card shell for card forms, or render card inputs like regular form fields.
     * @since 1.0.0
     */
    uiCardBrand: boolean;
    /**
     * Group PAN, expiry date, and security code into one visual card input inside hosted fields.
     * @since 1.5.0
     */
    uiGroupCardInputs: boolean;
    /** @since 0.0.4 */
    uiListSelectable: boolean;
    /** @since 1.0.0 */
    uiShowFees: boolean;
    /** @since 0.0.4 */
    uiPreselectedPaymentType: string | null;
    /** @since 0.0.4 */
    uiAccountDelete: boolean;
    /**
     * @since 1.3.0
     * @deprecated Use uiOffers. Legacy behaviour remains supported.
     * @deprecatedSince 1.7.0
     */
    uiBonuses: boolean;
    /**
     * @since 1.5.0
     * @deprecated Use uiOffersStyle. Legacy behaviour remains supported.
     * @deprecatedSince 1.7.0
     */
    uiBonusesStyle: CashierOffersStyle;
    /**
     * @since 0.0.4
     * @deprecated Use uiOffersAvailable. Legacy behaviour remains supported.
     * @deprecatedSince 1.7.0
     */
    uiBonusesAvailable: boolean;
    /** @since 0.0.4 */
    uiSuggestAmounts: string;
    /** @since 0.0.4 */
    uiSuggestAction: CashierSuggestAction[];
    /** @since 1.5.0 */
    summaryActions?: CashierSummaryActions;
    /** @since 0.0.4 */
    gotoPaymentType: string | null;
    /** @since 0.0.4 */
    extraAttributes?: Record<string, string>;
    /**
     * Opaque provider context collected in the merchant's origin. Coinflow uses
     * this only for card payins. The merchant supplies the provider-approved
     * expiry; stale context blocks submission until the Cashier is recreated.
     * Never include card data, credentials or a general fingerprint payload.
     * @since 1.6.2
     */
    hostRiskContext?: {
        coinflow?: {
            deviceId: string;
            expiresAt: string;
        };
    };
    /**
     * Absolute HTTPS URL the payer is sent to once the payment flow is finished,
     * sent on payment creation. Set it when a provider opens a window of its own
     * that Cashier cannot close, so the merchant page loads there and decides
     * what happens to that window; Cashier stops closing provider windows for a
     * payment that carries one. The host must be listed in `returnUrlHosts` on
     * the merchant configuration, `paymentId` is appended to the URL, and the
     * redirect is best effort. A provider page rendered inside Cashier is never
     * redirected.
     * @since 1.6.1
     */
    returnUrl?: string;
    /** @since 0.0.4 */
    user?: CashierUser;
    /**
     * @since 0.0.4
     * @deprecated Use offers. Legacy behaviour remains supported.
     * @deprecatedSince 1.7.0
     */
    bonuses?: CashierBonusDefinition[];
    /** @since 1.7.0 */
    offers?: CashierOffer[];
    /** @since 1.7.0 */
    selectedOfferId?: string | null;
    /** @since 1.7.0 */
    checkout?: CashierCheckoutDetails;
    /** @since 1.7.0 */
    uiOffers?: boolean;
    /** @since 1.7.0 */
    uiOffersStyle?: CashierOffersStyle;
    /** @since 1.7.0 */
    uiOffersAvailable?: boolean;
    /** @since 1.7.0 */
    onCheckoutUpdateRequested?: (request: CashierCheckoutUpdateRequest) => void | Promise<void>;
    /** @since 1.7.0 */
    onCheckoutStateChanged?: (state: CashierCheckoutState) => void | Promise<void>;
    /** @since 1.7.0 */
    onOfferSelectionChanged?: (event: CashierOfferSelectionChangedEvent) => void | Promise<void>;
    /** Explicit shopper handoff; never payment success or fulfilment.
     * @since 1.7.0
     */
    onNoPaymentRequired?: (event: {
        paymentContextId: string;
        currency: string;
        selectedOfferId: string | null;
    }) => void | Promise<void>;
    /** Opaque order/revision correlation; never a deduplication key.
     * @since 1.7.0
     */
    paymentContextId?: string;
    /** @since 0.0.4 */
    currencyFormatOptions?: CashierNumberFormatOptions;
    /** @since 0.0.4 */
    dateTimeFormatOptions?: CashierDateTimeFormatOptions;
    /** @since 0.0.4 */
    hostedFieldsUrl?: string;
    /** @since 0.0.4 */
    hostedFieldsFonts?: HostedFieldsFontDefinition[];
    /** @since 0.0.4 */
    hostedFieldsAutoFocusNextField?: boolean;
    /** @since 0.0.4 */
    uiTheme?: CashierTheme;
    /**
     * Trusted CSS text resolved by an owning Backoffice/Playground loader from
     * uiTheme.cssUrl. Standalone Cashier never fetches CSS URLs by itself.
     * @since 1.5.0
     */
    uiThemeCssText?: string | null;
    /** @since 0.0.12 */
    uiSelectorPrefix?: string;
    /** @since 0.0.4 */
    onInit?: (data?: CashierConfig) => void;
    /** @since 0.0.4 */
    onPaymentCreated?: (data?: CashierPaymentCreatedResponse | CashierPaymentError) => void;
    /** @since 1.5.0 */
    onPaymentUpdated?: (event: CashierPaymentUpdatedEvent) => void;
    /** @since 0.0.4 */
    onPaymentFinished?: (payment: CashierPaymentProgress) => void;
    /** @since 1.5.0 */
    onPaymentSummary?: (event: CashierPaymentSummaryEvent) => void;
    /** @since 1.2.0 */
    onPendingWithdrawalCancelled?: (event: CashierPendingWithdrawalCancelledEvent) => void;
    /** @since 1.2.0 */
    onBonusToppedUp?: (event: CashierBonusTopUpEvent) => void;
    /**
     * @since 0.0.4
     * @deprecated Use onOfferSelectionChanged. Legacy behaviour remains supported.
     * @deprecatedSince 1.7.0
     */
    onBonusSelected?: (bonus: CashierBonusDefinition) => void;
    /**
     * @since 0.0.4
     * @deprecated Use onOfferSelectionChanged. Legacy behaviour remains supported.
     * @deprecatedSince 1.7.0
     */
    onBonusDeselected?: (bonus: CashierBonusDefinition) => void;
    /** @since 0.0.4 */
    onPaymentTypeSelected?: (paymentType: CashierPaymentType) => void;
    /** @since 0.0.4 */
    onPaymentTypeDeselected?: (paymentType: CashierPaymentType) => void;
    /** @since 0.0.4 */
    onAccountDeleted?: (paymentType: CashierPaymentType) => void;
    /** @since 1.5.1 */
    onPaymentMethodChanged?: (event: CashierPaymentMethodChangedEvent) => void | Promise<void>;
    /** @since 1.5.1 */
    onPaymentFormChanged?: (event: CashierPaymentFormChangedEvent) => void | Promise<void>;
};
//# sourceMappingURL=CashierConfig.d.ts.map