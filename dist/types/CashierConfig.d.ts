export declare enum CashierMethods {
    PAYIN = "payin",
    PAYOUT = "payout"
}
export declare enum CashierLayoutListType {
    ACCORDION = "accordion",
    GRID = "grid",
    LIST = "list"
}
export declare enum CashierComboViewPaymentTypesMode {
    ACCORDION = "accordion",
    GRID = "grid",
    LIST = "list",
    NONE = "none",
    PICKER = "picker"
}
export declare enum CashierSuggestAction {
    ON_PAYMENT_FAILURE_LAST_SUCCESSFUL = "onPaymentFailed:lastSuccessful"
}
export type CashierPaymentFieldNotification = {
    key: string;
    type: 'info' | 'warning' | 'positive' | 'negative';
    orientation?: 'top' | 'bottom';
};
export type CashierPaymentField = {
    id?: string;
    label?: string;
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
export type CashierPaymentCreatedResponse = {
    paymentId?: string;
    paymentStatus?: string;
    redirect?: CashierRedirectData;
};
export type CashierPaymentProgress = CashierPaymentCreatedResponse & {
    status?: string;
    form?: CashierPaymentFormData;
    redirect?: CashierRedirectData;
};
export type CashierPaymentError = {
    error: string;
};
export type CashierLocale = Intl.Locale | string;
export type CashierCurrency = NonNullable<Intl.NumberFormatOptions['currency']>;
export type CashierTheme = Record<string, string | number>;
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
export type CashierBonus = {
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
export type CashierBonusPaymentTypeConditions = CashierBonusConditions;
export type CashierPendingWithdrawalCancelledEvent = {
    paymentId: string;
    amount: number;
    currency: string;
    createdAt: Date;
    remainingPendingCount: number;
    remainingPendingTotal: number;
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
export type CashierProps = Partial<CashierConfig> | {
    config: Partial<CashierConfig>;
};
export type CashierHandle = {
    setBonuses: (bonuses: CashierBonus[] | undefined) => void;
    setUser: (user: CashierUser | undefined) => void;
    setUserBalance: (userBalance: CashierUserBalance | undefined) => void;
    setSelectedBonusCode: (code: string | null) => void;
    clearSelectedBonus: () => void;
};
export type CashierConfig = {
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
    uiPaymentConfirmView: boolean;
    uiComboView: boolean;
    uiComboView__PaymentTypes: CashierComboViewPaymentTypesMode;
    /** @deprecated Use uiComboView__PaymentTypes instead. */
    uiComboView__PaymentTypePicker: boolean;
    uiComboView__PaymentForm: boolean;
    /** @deprecated Use uiComboView instead. */
    uiAmountView: boolean;
    /** @deprecated Use uiComboView__PaymentTypes instead. */
    uiAmountView__PaymentTypePicker: boolean;
    /** @deprecated Use uiComboView__PaymentForm instead. */
    uiAmountView__PaymentForm: boolean;
    /** Keep the branded card shell for card forms, or render card inputs like regular form fields. */
    uiCardBrand: boolean;
    uiListSelectable: boolean;
    uiShowFees: boolean;
    uiPreselectedPaymentType: string | null;
    uiAccountDelete: boolean;
    uiBonuses: boolean;
    uiBonusesAvailable: boolean;
    uiSuggestAmounts: string;
    uiSuggestAction: CashierSuggestAction[];
    gotoPaymentType: string | null;
    extraAttributes?: Record<string, string>;
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
    onPaymentCreated?: (data?: CashierPaymentCreatedResponse | CashierPaymentError) => void;
    onPaymentFinished?: (payment: CashierPaymentProgress) => void;
    onPendingWithdrawalCancelled?: (event: CashierPendingWithdrawalCancelledEvent) => void;
    onBonusToppedUp?: (event: CashierBonusTopUpEvent) => void;
    onBonusSelected?: (bonus: CashierBonus) => void;
    onBonusDeselected?: (bonus: CashierBonus) => void;
    onPaymentTypeSelected?: (paymentType: CashierPaymentType) => void;
    onPaymentTypeDeselected?: (paymentType: CashierPaymentType) => void;
    onAccountDeleted?: (paymentType: CashierPaymentType) => void;
};
//# sourceMappingURL=CashierConfig.d.ts.map