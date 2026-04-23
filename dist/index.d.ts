import { ForwardRefExoticComponent } from 'react';
import { RefAttributes } from 'react';

declare type BaseRedirect = NonNullable<PaymentStatusResponse['redirect']>;

declare const Cashier: ForwardRefExoticComponent<CashierProps & RefAttributes<CashierHandle>>;
export { Cashier }
export default Cashier;

export declare type CashierBonus = {
    code: string;
    title: string;
    description: string;
    logo?: string;
    maxBonus?: number;
    maxBonusPercentage?: number;
    preselected?: boolean;
    termsAndConditions?: string;
    conditions?: CashierBonusConditions;
};

export declare type CashierBonusConditionItem = {
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

export declare type CashierBonusConditions = {
    include?: CashierBonusConditionItem[];
    exclude?: CashierBonusConditionItem[];
};

export declare type CashierBonusPaymentTypeConditionItem = CashierBonusConditionItem;

export declare type CashierBonusPaymentTypeConditions = CashierBonusConditions;

export declare type CashierBonusTopUpEvent = {
    bonus: CashierBonus;
    previousAmount: number;
    nextAmount: number;
    addedAmount: number;
    fullClaimAmount: number;
};

export declare type CashierConfig = {
    merchantId: string;
    userId: string;
    sessionId: string;
    method: CashierMethods;
    apiUrl: string;
    debug: boolean;
    initialAmount: string;
    lockAmount: boolean;
    currency: CashierCurrency;
    uiListStyle: CashierLayoutListType;
    locale: CashierLocale;
    uiPaymentMethodSwitcher: boolean;
    uiUserBalance?: boolean;
    uiProgressBar: boolean;
    uiInteractivePrompts: boolean;
    uiCancelPendingPayout: boolean;
    uiAmountView: boolean;
    uiAmountView__PaymentTypePicker: boolean;
    /** Keep the branded card shell for card forms, or render card inputs like regular form fields. */
    uiCardBrand: boolean;
    uiListSelectable: boolean;
    uiShowFees: boolean;
    uiPreselectedPaymentType: string | null;
    uiAccountDelete: boolean;
    uiBonusesAvailable: boolean;
    uiSuggestAmounts: string;
    uiSuggestAction: CashierSuggestAction[];
    gotoPaymentType: string | null;
    extraAttributes?: PaymentsRequest['extra'];
    user?: CashierUser;
    bonuses?: CashierBonus[];
    currencyFormatOptions?: CashierNumberFormatOptions;
    dateTimeFormatOptions?: CashierDateTimeFormatOptions;
    hostedFieldsUrl?: string;
    hostedFieldsFonts?: HostedFieldsFontDefinition[];
    hostedFieldsAutoFocusNextField?: boolean;
    uiTheme?: CashierTheme;
    uiSelectorPrefix?: string;
    onInit?: (data?: CashierConfig) => void;
    onPaymentCreated?: (data?: PaymentsResponse | PaymentError) => void;
    onPaymentFinished?: (payment: PaymentProgress) => void;
    onPendingWithdrawalCancelled?: (event: CashierPendingWithdrawalCancelledEvent) => void;
    onBonusToppedUp?: (event: CashierBonusTopUpEvent) => void;
    onBonusSelected?: (bonus: CashierBonus) => void;
    onBonusDeselected?: (bonus: CashierBonus) => void;
    onPaymentTypeSelected?: (paymentType: CashierPaymentType) => void;
    onPaymentTypeDeselected?: (paymentType: CashierPaymentType) => void;
    onAccountDeleted?: (paymentType: CashierPaymentType) => void;
};

export declare type CashierCurrency = NonNullable<Intl.NumberFormatOptions['currency']>;

export declare type CashierDateTimeFormatOptions = Intl.DateTimeFormatOptions;

export declare type CashierHandle = {
    setBonuses: (bonuses: CashierBonus[] | undefined) => void;
    setUser: (user: CashierUser | undefined) => void;
    setUserBalance: (userBalance: CashierUserBalance | undefined) => void;
    setSelectedBonusCode: (code: string | null) => void;
    clearSelectedBonus: () => void;
};

export declare enum CashierLayoutListType {
    GRID = "grid",
    LIST = "list"
}

export declare type CashierLocale = Intl.Locale | string;

export declare enum CashierMethods {
    PAYIN = "payin",
    PAYOUT = "payout"
}

export declare type CashierNumberFormatOptions = Intl.NumberFormatOptions;

export declare type CashierPaymentType = PaymentType;

export declare type CashierPendingWithdrawalCancelledEvent = {
    paymentId: string;
    amount: number;
    currency: string;
    createdAt: Date;
    remainingPendingCount: number;
    remainingPendingTotal: number;
};

export declare type CashierProps = Partial<CashierConfig> | {
    config: Partial<CashierConfig>;
};

export declare enum CashierSuggestAction {
    ON_PAYMENT_FAILURE_LAST_SUCCESSFUL = "onPaymentFailed:lastSuccessful"
}

export declare type CashierTheme = Record<string, string | number>;

export declare type CashierUser = {
    payinCount?: number;
    daysSinceRegistration?: number;
    totalPayinAmount?: number;
    balance?: number;
    withdrawableBalance?: number;
    bonusBalance?: number;
};

export declare type CashierUserBalance = Pick<CashierUser, 'balance' | 'withdrawableBalance' | 'bonusBalance'>;

/**
 * Boolean validation rule (e.g., required, checksum)
 */
declare type CommonSchemasBooleanValidation = {
    /**
     * Indicates if the validation is enabled
     */
    value?: boolean;
    /**
     * I18n key for the validation error message
     */
    invalidMessage?: string;
};

/**
 * Notification to display for a field or payment type
 */
declare type CommonSchemasFieldNotification = {
    /**
     * I18n key for the notification message
     */
    key: string;
    /**
     * Type of notification
     */
    type: 'info' | 'warning' | 'positive' | 'negative';
};

/**
 * Validation rules for a field
 */
declare type CommonSchemasFieldValidation = {
    required?: CommonSchemasBooleanValidation;
    luhn?: CommonSchemasBooleanValidation;
    iban?: CommonSchemasBooleanValidation;
    /**
     * Validation rules
     */
    rules?: Array<CommonSchemasValidationRule>;
};

/**
 * Data for presenting a form to the user
 */
declare type CommonSchemasFormData = {
    /**
     * URL where the form data should be POSTed
     */
    actionUrl: string;
    /**
     * List of fields in the form
     */
    fields: Array<CommonSchemasPaymentField>;
};

declare type CommonSchemasPaymentField = {
    /**
     * ID of field
     */
    id?: string;
    /**
     * Label of field
     */
    label?: string;
    /**
     * Type of field
     */
    type?: string;
    validation?: CommonSchemasFieldValidation;
    notification?: CommonSchemasFieldNotification;
    /**
     * Options for select-type fields
     */
    options?: Array<CommonSchemasSelectItem>;
    /**
     * Placeholder text for the field input
     */
    placeholder?: string;
};

declare type CommonSchemasRedirectData = {
    /**
     * The URL to redirect the user to, or the script source URL for script type
     */
    url: string;
    /**
     * HTTP method to use for the redirect
     */
    method: 'GET' | 'POST';
    /**
     * Data to be sent with the redirect (form fields for POST, or widget parameters for script type)
     */
    data?: {
        [key: string]: string;
    };
    /**
     * Type of redirect rendering
     */
    type: 'iframe' | 'hidden_iframe' | 'window' | 'script';
    /**
     * Identifier for the script/widget type (e.g., "mifinity"). Required when type is "script"
     */
    scriptId?: string;
};

/**
 * A single selectable option within a select field
 */
declare type CommonSchemasSelectItem = {
    /**
     * Display label for this option (can be an i18n key)
     */
    label: string;
    /**
     * Value to submit when this option is selected
     */
    value: string;
};

/**
 * 3D Secure 2.x browser data for cardholder authentication
 */
declare type CommonSchemasThreeDsBrowserData = {
    /**
     * HTTP accept header from the cardholder's browser (max 2048 chars)
     */
    browserAcceptHeader?: string;
    /**
     * Browser language preferences from Accept-Language header (IETF BCP47 format)
     */
    browserAcceptLanguage?: Array<string>;
    /**
     * Colour depth of the browser screen in bits
     */
    browserColorDepth?: '1' | '4' | '8' | '15' | '16' | '24' | '32' | '48';
    /**
     * IP address of the cardholder's browser (IPv4 or IPv6 format)
     */
    browserIP?: string;
    /**
     * Whether the cardholder's browser supports Java
     */
    browserJavaEnabled?: boolean;
    /**
     * Whether the cardholder's browser supports JavaScript
     */
    browserJavascriptEnabled?: boolean;
    /**
     * Language preference from browser settings (ISO 639-1 language code with optional region)
     */
    browserLanguage?: string;
    /**
     * Total height of the cardholder's screen in pixels
     */
    browserScreenHeight?: string;
    /**
     * Total width of the cardholder's screen in pixels
     */
    browserScreenWidth?: string;
    /**
     * Browser timezone offset in minutes from UTC
     */
    browserTZ?: string;
    /**
     * User agent string from the browser (max 2048 chars)
     */
    browserUserAgent?: string;
    /**
     * Preferred challenge window size for 3DS authentication UI
     */
    challengeWindowSize?: '01' | '02' | '03' | '04' | '05';
};

/**
 * Regular expression validation rule
 */
declare type CommonSchemasValidationRule = {
    /**
     * Regular expression pattern
     */
    pattern?: string;
    /**
     * I18n key for the validation error message
     */
    invalidMessage?: string;
};

export declare const defaultCashierConfig: CashierConfig;

export declare const defineCashier: (tagName?: string) => string;

export declare interface HostedFieldsFontDefinition {
    family: string;
    sources: HostedFieldsFontSource[];
}

export declare interface HostedFieldsFontSource {
    url: string;
    format?: 'woff2' | 'woff' | 'truetype' | 'opentype';
    weight?: string | number;
    style?: 'normal' | 'italic';
    display?: 'auto' | 'block' | 'swap' | 'fallback' | 'optional';
}

declare type PaymentError = {
    error: string;
};

declare type PaymentProgress = PaymentProgressBase & Partial<Omit<PaymentStatusResponse, 'redirect'>> & {
    redirect?: RedirectWithType;
};

declare type PaymentProgressBase = Omit<PaymentsResponse, 'redirect'> & {
    redirect?: RedirectWithType;
};

declare type PaymentsRequest = {
    /**
     * Merchant ID
     */
    merchantId: string;
    sessionId: string;
    userId: string;
    amount?: string;
    /**
     * Currency code. If provided, overrides the default currency for the user.
     */
    currency?: string;
    /**
     * ID of the account to use for the payment
     */
    accountId?: string;
    /**
     * Optional bonus code to apply to the payment
     */
    bonusCode?: string;
    /**
     * Merchant specific information about the payment
     */
    extra?: {
        [key: string]: string;
    };
    /**
     * Optional client-provided request ID for tracking/idempotency
     */
    merchantRequestId?: string;
    /**
     * Custom service identifier for the payment
     */
    service?: string;
    /**
     * Locale/language preferences for the payment flow (BCP47 format), in order of preference.
     * If not provided, defaults to the Accept-Language header.
     * Used by payment providers to localise payment pages and communications.
     * Examples: ["en-GB", "de-DE"]
     *
     */
    locales?: Array<string>;
    threeds?: CommonSchemasThreeDsBrowserData;
    /**
     * User input, e.g. saveAccount, card holder name
     */
    input?: {
        [key: string]: string;
    };
};

declare type PaymentsResponse = {
    paymentId?: string;
    paymentStatus?: string;
    redirect?: CommonSchemasRedirectData;
};

declare type PaymentStatusResponse = {
    paymentId: string;
    /**
     * Status indicating whether the user flow is still ongoing or done
     */
    status: 'ongoing' | 'done';
    redirect?: CommonSchemasRedirectData;
    form?: CommonSchemasFormData;
};

declare type PaymentType = {
    /**
     * Name of the payment type or account display name
     */
    name: string;
    /**
     * Short string identifier (ie 'card', 'bank', 'applepay' etc) used when creating payment
     */
    type: string;
    /**
     * Numerical ID of the payment type
     */
    typeId: number;
    /**
     * Transaction method (ie 'payin' or 'payout')
     */
    method: string;
    /**
     * Map of logo variants keyed by theme (e.g., default, dark, compact-default, compact-dark)
     */
    logo?: {
        [key: string]: string;
    };
    /**
     * Unique identifier for the account. When set, this item represents a saved account rather than a payment type.
     */
    accountId?: string;
    /**
     * Custom service identifier
     */
    service?: string;
    /**
     * List of input fields for this payment type or account
     */
    fields?: Array<CommonSchemasPaymentField>;
    /**
     * List of notifications for this payment type or account
     */
    notifications?: Array<CommonSchemasFieldNotification>;
    /**
     * Payment amount limits for this payment type
     */
    limits?: {
        /**
         * Minimum allowed amount
         */
        min?: string;
        /**
         * Maximum allowed amount
         */
        max?: string;
    };
    /**
     * Fee configuration for this payment type
     */
    fee?: {
        /**
         * Type of fee (fixed amount or percentage)
         */
        feeType?: 'fixed' | 'percentage';
        /**
         * Fee value (e.g., "5.00" for fixed or "2.5" for percentage)
         */
        value?: string;
        /**
         * Whether fee is added on top of amount or deducted from it
         */
        direction?: 'add' | 'deduct';
    };
    /**
     * Timestamp of last successful payment with this type or account
     */
    lastSuccessful?: Date;
};

declare type RedirectData = BaseRedirect['data'] | string;

declare type RedirectType = CommonSchemasRedirectData['type'];

declare type RedirectWithType = Omit<BaseRedirect, 'data' | 'type'> & {
    data?: RedirectData;
    type?: RedirectType;
    scriptId?: string;
};

export { }


declare module '@tanstack/react-router' {
    interface Register {
        router: CashierRouter;
    }
}


declare module '@tanstack/react-router' {
    interface FileRoutesByPath {
        '/': {
            id: '/';
            path: '/';
            fullPath: '/';
            preLoaderRoute: typeof IndexRouteImport;
            parentRoute: typeof rootRouteImport;
        };
        '/quick-payment/': {
            id: '/quick-payment/';
            path: '/quick-payment';
            fullPath: '/quick-payment/';
            preLoaderRoute: typeof QuickPaymentIndexRouteImport;
            parentRoute: typeof rootRouteImport;
        };
        '/provider/': {
            id: '/provider/';
            path: '/provider';
            fullPath: '/provider/';
            preLoaderRoute: typeof ProviderIndexRouteImport;
            parentRoute: typeof rootRouteImport;
        };
        '/bonus/': {
            id: '/bonus/';
            path: '/bonus';
            fullPath: '/bonus/';
            preLoaderRoute: typeof BonusIndexRouteImport;
            parentRoute: typeof rootRouteImport;
        };
        '/summary/$id': {
            id: '/summary/$id';
            path: '/summary/$id';
            fullPath: '/summary/$id';
            preLoaderRoute: typeof SummaryIdRouteImport;
            parentRoute: typeof rootRouteImport;
        };
        '/pts/$method': {
            id: '/pts/$method';
            path: '/pts/$method';
            fullPath: '/pts/$method';
            preLoaderRoute: typeof PtsMethodRouteImport;
            parentRoute: typeof rootRouteImport;
        };
        '/pt/$id': {
            id: '/pt/$id';
            path: '/pt/$id';
            fullPath: '/pt/$id';
            preLoaderRoute: typeof PtIdRouteImport;
            parentRoute: typeof rootRouteImport;
        };
    }
}
