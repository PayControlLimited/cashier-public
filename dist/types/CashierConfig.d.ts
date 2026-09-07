import { CashierExtensions } from './presentation.js';
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
export declare enum CashierBonusesStyle {
    PAGE = "page",
    PICKER_PAYMENT_FORM = "picker-payment-form",
    PICKER_PAYMENT_LIST = "picker-payment-list"
}
export declare enum CashierSuggestAction {
    ON_PAYMENT_FAILURE_LAST_SUCCESSFUL = "onPaymentFailed:lastSuccessful",
    ON_PENDING_PAYOUT_CANCEL = "onPendingPayout:cancel"
}
export declare enum CashierSummaryActionType {
    BUTTON = "button",
    TEXT = "text"
}
export type CashierSummaryActionThemeVariant = 'neutral' | 'secondary' | 'primary' | 'success' | 'danger' | 'warning' | 'info';
export type CashierSummaryUrlAction = {
    href: string;
    target?: string;
    rel?: string;
    referrerPolicy?: ReferrerPolicy;
    download?: boolean | string;
};
export type CashierSummaryAction = {
    id: string;
    type?: `${CashierSummaryActionType}`;
    label: string;
    themeVariant?: CashierSummaryActionThemeVariant;
    paymentStatuses?: string[];
    action?: 'restart' | CashierSummaryUrlAction;
};
export type CashierSummaryActions = {
    layout?: 'row' | 'stack';
    items: CashierSummaryAction[];
};
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
    schemaVersion?: 1 | 2;
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
export type CashierAwardValue = {
    type: 'fixed' | 'percentage' | 'multiplier';
    value: number;
    maxValue?: number;
    rounding?: 'floor' | 'round' | 'ceil' | 'none';
};
export type CashierAward = {
    id: string;
    type: 'currency' | 'item';
    name?: string;
    paymentStatuses?: string[];
    message?: string;
    value: CashierAwardValue;
};
export type CashierBonus = {
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
    bonus: CashierBonus;
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
    /**
     * Resumes observation of a server-known payment after the host recreates
     * Cashier. This intentionally sits outside CashierConfig.
     */
    resumePaymentId?: string;
}) | ({
    config: Partial<CashierConfig>;
} & CashierExtensions & {
    /**
     * Resumes observation of a server-known payment after the host recreates
     * Cashier. This intentionally sits outside CashierConfig.
     */
    resumePaymentId?: string;
});
export type CashierHandle = {
    setBonuses: (bonuses: CashierBonus[] | undefined) => void;
    setUser: (user: CashierUser | undefined) => void;
    setUserBalance: (userBalance: CashierUserBalance | undefined) => void;
    setSelectedBonusCode: (code: string | null) => void;
    clearSelectedBonus: () => void;
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
    /** @since 1.3.0 */
    uiBonuses: boolean;
    /** @since 1.5.0 */
    uiBonusesStyle: CashierBonusesStyle;
    /** @since 0.0.4 */
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
    /** @since 0.0.4 */
    user?: CashierUser;
    /** @since 0.0.4 */
    bonuses?: CashierBonus[];
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
    /** @since 0.0.4 */
    onBonusSelected?: (bonus: CashierBonus) => void;
    /** @since 0.0.4 */
    onBonusDeselected?: (bonus: CashierBonus) => void;
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