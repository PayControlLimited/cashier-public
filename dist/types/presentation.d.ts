import { ComponentType } from 'react';
import { CashierMethods, CashierSummaryActions } from './CashierConfig.js';
export declare const cashierPresentationScreenIds: readonly ["combo", "paymentTypes", "bonusSelection", "paymentDetails", "paymentConfirmation", "providerAction", "summary", "loading", "empty", "processing", "unsupported", "error"];
export type CashierPresentationScreenId = (typeof cashierPresentationScreenIds)[number];
export declare const cashierPresentationSlotIds: readonly ["header", "methodSwitcher", "progress", "paymentTypeItem", "providerActionPrompt", "summaryDetails", "summaryActions"];
export type CashierPresentationSlotId = (typeof cashierPresentationSlotIds)[number];
/**
 * `content` keeps the Cashier route frame and visible application shell.
 * `screen` replaces the complete visible Cashier canvas for the active screen.
 */
export type CashierPresentationScreenScope = 'content' | 'screen';
export type CashierPresentationScopedScreenId = CashierPresentationScreenId;
export type CashierPresentationSurface = Readonly<{
    kind: 'screen';
    id: CashierPresentationScreenId;
    scope: CashierPresentationScreenScope;
} | {
    kind: 'slot';
    id: CashierPresentationSlotId;
}>;
export type CashierPresentationErrorPhase = 'action' | 'destroy' | 'mount' | 'render' | 'update' | 'validation';
export type CashierPresentationErrorCode = 'action-failed' | 'invalid-presentation' | 'override-failed' | 'renderer-destroy-failed' | 'renderer-mount-failed' | 'renderer-update-failed';
/**
 * Sanitised integrator diagnostic. It deliberately excludes the thrown value,
 * payment/provider payloads, user data, field values, tokens and URLs.
 */
export type CashierPresentationError = Readonly<{
    code: CashierPresentationErrorCode;
    phase: CashierPresentationErrorPhase;
    recoverable: boolean;
    surface: CashierPresentationSurface;
}>;
export type CashierPresentationIntentRejectedReason = 'stale' | 'busy' | 'invalid-input' | 'invalid-state' | 'unsupported' | 'protected-surface-not-ready' | 'disposed';
export type CashierPresentationIntentReceipt = Readonly<{
    status: 'accepted';
    intentId: string;
} | {
    status: 'rejected';
    reason: CashierPresentationIntentRejectedReason;
    message: CashierPresentationText;
}>;
export type CashierPresentationAction<Arguments extends readonly unknown[] = []> = (...args: Arguments) => CashierPresentationIntentReceipt;
export type CashierPresentationModelBase<Screen extends CashierPresentationScreenId> = Readonly<{
    screen: Screen;
    revision: number;
    busy: boolean;
    /** Sanitised configuration diagnostics and actionable purchase state. */
    configurationIssues?: readonly Readonly<import('./CashierConfig.js').CashierConfigurationIssue>[];
    purchaseError?: CashierPresentationText;
    elements?: readonly CashierResolvedElement[];
}>;
export type CashierPresentationText = Readonly<{
    value: string;
    key?: string;
}>;
export type CashierPresentationLocalisation = Readonly<{
    locale: string;
    direction: 'ltr' | 'rtl';
}>;
/** Resolved content crosses the renderer boundary without catalogue inputs. */
export type CashierResolvedItem = Readonly<Omit<import('./CashierConfig.js').CashierFrozenAward, 'screens' | 'paymentStatuses' | 'source'> & {
    source?: Readonly<NonNullable<import('./CashierConfig.js').CashierFrozenAward['source']>>;
    localisation: CashierPresentationLocalisation;
}>;
export type CashierResolvedMessage = Readonly<{
    id: string;
    scope: 'global' | 'payment';
    text: CashierPresentationText;
    format: 'markdown';
    tone?: 'info' | 'warning' | 'positive' | 'negative';
    announcement?: 'polite' | 'assertive';
    presentation?: Omit<CashierContentStyle, 'layout'>;
    localisation: CashierPresentationLocalisation;
}>;
export type CashierResolvedAction = Readonly<{
    /** Stable scoped runtime identity. */
    identity: string;
    id: string;
    scope: 'global' | 'payment';
    label: CashierPresentationText;
    action: 'restart' | Readonly<import('./CashierConfig.js').CashierUrlAction>;
    available: boolean;
    presentation?: Omit<CashierContentStyle, 'layout'>;
    localisation: CashierPresentationLocalisation;
}>;
/** Informational row; it never supplies a payment amount. */
export type CashierDisplayItem = Readonly<{
    title: string;
    description?: string;
    image?: Readonly<{
        src: string;
        alt?: string;
    }>;
    quantity?: number;
    unitPrice?: string;
    pricing?: import('./offers.js').CashierPriceComparison;
    params?: Record<string, string>;
}>;
export type CashierResolvedDisplayItem = Readonly<{
    id: string;
    scope: 'global' | 'payment';
    title: CashierPresentationText;
    description?: CashierPresentationText;
    image?: Readonly<{
        src: string;
        alt: CashierPresentationText;
    }>;
    quantity?: number;
    quantityDisplay?: string;
    amount?: CashierPresentationMoney;
    pricing?: import('./offers.js').CashierResolvedPriceComparison;
    localisation: CashierPresentationLocalisation;
}>;
export type CashierResolvedElementItem = (CashierResolvedDisplayItem & {
    readonly kind: 'item';
    readonly presentation: CashierContentStyle;
}) | (CashierResolvedMessage & {
    readonly kind: 'text';
    readonly presentation: CashierContentStyle;
}) | (CashierResolvedAction & {
    readonly kind: 'action';
    readonly presentation: CashierContentStyle;
}) | (CashierResolvedItem & {
    readonly kind: 'award';
    readonly presentation: CashierContentStyle;
});
export type CashierResolvedElement = Readonly<{
    id: string;
    scope: 'global' | 'payment';
    presentation: CashierContentStyle;
    items: readonly CashierResolvedElementItem[];
}>;
export type CashierPresentationMoney = Readonly<{
    value: string;
    currency: string;
    display: string;
}>;
export type CashierPresentationPaymentTypeIdentity = Readonly<{
    type: string;
    service?: string;
}>;
export type CashierPresentationLogo = Readonly<{
    default?: string;
    dark?: string;
    compactDefault?: string;
    compactDark?: string;
}>;
export type CashierPresentationLimit = Readonly<{
    label: CashierPresentationText;
    amount: CashierPresentationMoney;
}>;
export type CashierPresentationOutcome = 'successful' | 'failed' | 'cancelled' | 'pending' | 'inconsistent' | 'unknown';
export type CashierPresentationPaymentType = Readonly<{
    id: string;
    identity: CashierPresentationPaymentTypeIdentity;
    label: CashierPresentationText;
    description?: CashierPresentationText;
    logo?: CashierPresentationLogo;
    limits?: Readonly<{
        minimum?: CashierPresentationLimit;
        maximum?: CashierPresentationLimit;
    }>;
    selected: boolean;
    disabled: boolean;
    unavailable: boolean;
}>;
export type CashierPresentationBonus = Readonly<{
    id: string;
    title: CashierPresentationText;
    description: CashierPresentationText;
    selected: boolean;
    available: boolean;
}>;
export type CashierPresentationSummaryField = Readonly<{
    id: string;
    label: CashierPresentationText;
    value: string;
}>;
export type CashierPresentationSuggestedAmount = Readonly<{
    amount: CashierPresentationMoney;
    selected: boolean;
    disabled: boolean;
}>;
export type CashierComboScreenModel = CashierPresentationModelBase<'combo'> & Readonly<{
    amountEntryVisible: boolean;
    amount: CashierPresentationMoney;
    amountError?: CashierPresentationText;
    method: `${CashierMethods}`;
    amountLocked: boolean;
    amountLabel: CashierPresentationText;
    paymentTypesLabel: CashierPresentationText;
    continueLabel: CashierPresentationText;
    paymentTypes: readonly CashierPresentationPaymentType[];
    suggestedAmounts: readonly CashierPresentationSuggestedAmount[];
    bonuses: readonly CashierPresentationBonus[];
    selectedBonusId: string | null;
    protectedSurfaceRequired: boolean;
    protectedSurfaceReady: boolean;
    protectedSurfaceLabel?: CashierPresentationText;
    canContinue: boolean;
}>;
export type CashierPaymentTypesScreenModel = CashierPresentationModelBase<'paymentTypes'> & Readonly<{
    method: `${CashierMethods}`;
    title: CashierPresentationText;
    continueLabel: CashierPresentationText;
    backLabel: CashierPresentationText;
    paymentTypes: readonly CashierPresentationPaymentType[];
    protectedSurfaceRequired: boolean;
    protectedSurfaceReady: boolean;
    protectedSurfaceLabel?: CashierPresentationText;
    canContinue: boolean;
}>;
export type CashierBonusSelectionScreenModel = CashierPresentationModelBase<'bonusSelection'> & Readonly<{
    title: CashierPresentationText;
    continueLabel: CashierPresentationText;
    skipLabel: CashierPresentationText;
    backLabel: CashierPresentationText;
    bonuses: readonly CashierPresentationBonus[];
    selectedBonusId: string | null;
    canContinue: boolean;
    canSkip: boolean;
}>;
export type CashierPaymentDetailsScreenModel = CashierPresentationModelBase<'paymentDetails'> & Readonly<{
    title: CashierPresentationText;
    amount: CashierPresentationMoney;
    submitLabel: CashierPresentationText;
    backLabel: CashierPresentationText;
    protectedSurfaceRequired: boolean;
    protectedSurfaceReady: boolean;
    protectedSurfaceLabel?: CashierPresentationText;
    canSubmit: boolean;
}>;
export type CashierPaymentConfirmationScreenModel = CashierPresentationModelBase<'paymentConfirmation'> & Readonly<{
    title: CashierPresentationText;
    confirmLabel: CashierPresentationText;
    backLabel: CashierPresentationText;
    fields: readonly CashierPresentationSummaryField[];
    protectedSurfaceRequired: boolean;
    protectedSurfaceReady: boolean;
    protectedSurfaceLabel?: CashierPresentationText;
    canConfirm: boolean;
}>;
export type CashierProviderActionState = 'automatic' | 'manual';
export type CashierProviderActionScreenModel = CashierPresentationModelBase<'providerAction'> & Readonly<{
    state: CashierProviderActionState;
    title: CashierPresentationText;
    description: CashierPresentationText;
    actionLabel?: CashierPresentationText;
    canOpen: boolean;
}>;
export type CashierSummaryScreenModel = CashierPresentationModelBase<'summary'> & Readonly<{
    status: CashierPresentationText;
    outcome: CashierPresentationOutcome;
    messages: readonly CashierPresentationText[];
    fields: readonly CashierPresentationSummaryField[];
    actions: CashierSummaryActionsSlotModel;
    restartLabel: CashierPresentationText;
}>;
export type CashierStateScreenId = 'loading' | 'empty' | 'processing' | 'unsupported' | 'error';
export type CashierStateScreenModel<Screen extends CashierStateScreenId> = CashierPresentationModelBase<Screen> & Readonly<{
    title: CashierPresentationText;
    message?: CashierPresentationText;
    retryLabel: CashierPresentationText;
    backLabel: CashierPresentationText;
    canRetry: boolean;
    canGoBack: boolean;
}>;
export type CashierPresentationScreenModelMap = Readonly<{
    combo: CashierComboScreenModel;
    paymentTypes: CashierPaymentTypesScreenModel;
    bonusSelection: CashierBonusSelectionScreenModel;
    paymentDetails: CashierPaymentDetailsScreenModel;
    paymentConfirmation: CashierPaymentConfirmationScreenModel;
    providerAction: CashierProviderActionScreenModel;
    summary: CashierSummaryScreenModel;
    loading: CashierStateScreenModel<'loading'>;
    empty: CashierStateScreenModel<'empty'>;
    processing: CashierStateScreenModel<'processing'>;
    unsupported: CashierStateScreenModel<'unsupported'>;
    error: CashierStateScreenModel<'error'>;
}>;
export type CashierComboScreenActions = Readonly<{
    setAmount: CashierPresentationAction<readonly [value: string]>;
    selectPaymentType: CashierPresentationAction<readonly [id: string]>;
    selectBonus: CashierPresentationAction<readonly [id: string | null]>;
    continue: CashierPresentationAction;
}>;
export type CashierPaymentTypesScreenActions = Readonly<{
    selectPaymentType: CashierPresentationAction<readonly [id: string]>;
    continue: CashierPresentationAction;
    goBack: CashierPresentationAction;
}>;
export type CashierBonusSelectionScreenActions = Readonly<{
    selectBonus: CashierPresentationAction<readonly [id: string]>;
    continue: CashierPresentationAction;
    skip: CashierPresentationAction;
    goBack: CashierPresentationAction;
}>;
export type CashierPaymentDetailsScreenActions = Readonly<{
    submit: CashierPresentationAction;
    goBack: CashierPresentationAction;
}>;
export type CashierPaymentConfirmationScreenActions = Readonly<{
    confirm: CashierPresentationAction;
    goBack: CashierPresentationAction;
}>;
export type CashierProviderActionScreenActions = Readonly<{
    open: CashierPresentationAction;
}>;
export type CashierSummaryScreenActions = Readonly<{
    activate: CashierPresentationAction<readonly [id: string]>;
    restart: CashierPresentationAction;
}>;
export type CashierStateScreenActions = Readonly<{
    retry: CashierPresentationAction;
    goBack: CashierPresentationAction;
}>;
export type CashierPresentationScreenActionsMap = Readonly<{
    combo: CashierComboScreenActions;
    paymentTypes: CashierPaymentTypesScreenActions;
    bonusSelection: CashierBonusSelectionScreenActions;
    paymentDetails: CashierPaymentDetailsScreenActions;
    paymentConfirmation: CashierPaymentConfirmationScreenActions;
    providerAction: CashierProviderActionScreenActions;
    summary: CashierSummaryScreenActions;
    loading: CashierStateScreenActions;
    empty: CashierStateScreenActions;
    processing: CashierStateScreenActions;
    unsupported: CashierStateScreenActions;
    error: CashierStateScreenActions;
}>;
export type CashierProtectedSurfaceComponent = ComponentType;
export type CashierScreenProps<Screen extends CashierPresentationScreenId> = Readonly<{
    model: CashierPresentationScreenModelMap[Screen];
    actions: CashierPresentationScreenActionsMap[Screen];
    localisation: CashierPresentationLocalisation;
    ProtectedSurface?: CashierProtectedSurfaceComponent;
}>;
export type CashierScreenOverride<Screen extends CashierPresentationScreenId> = ComponentType<CashierScreenProps<Screen>>;
export type CashierScreenOverrideEntry<Screen extends CashierPresentationScreenId> = CashierScreenOverride<Screen> | (Screen extends CashierPresentationScopedScreenId ? Readonly<{
    component: CashierScreenOverride<Screen>;
    scope?: CashierPresentationScreenScope;
}> : never);
export type CashierHeaderSlotModel = Readonly<{
    title?: CashierPresentationText;
    subtitle?: CashierPresentationText;
    variant: 'default' | 'details';
    layout: 'stacked' | 'row';
    hasLeading: boolean;
    hasTrailing: boolean;
}>;
export type CashierHeaderSlotActions = Readonly<Record<never, never>>;
export type CashierProgressSlotModel = Readonly<{
    label: CashierPresentationText;
    currentStep: number;
    stepCount: number;
    value: number;
}>;
export type CashierProgressSlotActions = Readonly<Record<never, never>>;
export type CashierMethodSwitcherSlotModel = Readonly<{
    revision: number;
    busy: boolean;
    label: CashierPresentationText;
    options: readonly Readonly<{
        method: `${CashierMethods}`;
        label: CashierPresentationText;
        selected: boolean;
        disabled: boolean;
    }>[];
}>;
export type CashierMethodSwitcherSlotActions = Readonly<{
    select: CashierPresentationAction<readonly [method: `${CashierMethods}`]>;
}>;
export type CashierPaymentTypeItemSlotModel = CashierPresentationPaymentType;
export type CashierPaymentTypeItemSlotActions = Readonly<Record<never, never>>;
export type CashierProviderActionPromptSlotModel = Readonly<{
    state: 'automatic' | 'manual';
    title: CashierPresentationText;
    description: CashierPresentationText;
    actionLabel?: CashierPresentationText;
}>;
export type CashierProviderActionPromptSlotActions = Readonly<{
    open: CashierPresentationAction;
}>;
export type CashierSummaryDetailsSlotModel = Readonly<{
    fields: readonly CashierPresentationSummaryField[];
}>;
export type CashierSummaryDetailsSlotActions = Readonly<Record<never, never>>;
export type CashierSummaryActionItemModel = Readonly<{
    id: string;
    label: CashierPresentationText;
    kind: 'button' | 'link' | 'text';
    theme: string;
}>;
export type CashierSummaryActionsSlotModel = Readonly<{
    layout: 'row' | 'stack';
    items: readonly CashierSummaryActionItemModel[];
}>;
export type CashierSummaryActionsSlotActions = Readonly<{
    activate: CashierPresentationAction<readonly [id: string]>;
}>;
export type CashierPresentationSlotModelMap = Readonly<{
    header: CashierHeaderSlotModel;
    methodSwitcher: CashierMethodSwitcherSlotModel;
    progress: CashierProgressSlotModel;
    paymentTypeItem: CashierPaymentTypeItemSlotModel;
    providerActionPrompt: CashierProviderActionPromptSlotModel;
    summaryDetails: CashierSummaryDetailsSlotModel;
    summaryActions: CashierSummaryActionsSlotModel;
}>;
export type CashierPresentationSlotActionsMap = Readonly<{
    header: CashierHeaderSlotActions;
    methodSwitcher: CashierMethodSwitcherSlotActions;
    progress: CashierProgressSlotActions;
    paymentTypeItem: CashierPaymentTypeItemSlotActions;
    providerActionPrompt: CashierProviderActionPromptSlotActions;
    summaryDetails: CashierSummaryDetailsSlotActions;
    summaryActions: CashierSummaryActionsSlotActions;
}>;
export type CashierSlotProps<Slot extends CashierPresentationSlotId> = Readonly<{
    model: CashierPresentationSlotModelMap[Slot];
    actions: CashierPresentationSlotActionsMap[Slot];
    localisation: CashierPresentationLocalisation;
}>;
export type CashierSlotOverride<Slot extends CashierPresentationSlotId> = ComponentType<CashierSlotProps<Slot>>;
export type CashierScreenOverrides = Readonly<{
    [Screen in CashierPresentationScreenId]?: CashierScreenOverrideEntry<Screen>;
}>;
export type CashierSlotOverrides = Readonly<{
    [Slot in CashierPresentationSlotId]?: CashierSlotOverride<Slot>;
}>;
/** JSON-friendly built-in presentation. No render functions or arbitrary CSS. */
export type CashierContentStyle = Readonly<{
    appearance?: 'plain' | 'solid' | 'ghost' | 'outline' | 'muted';
    themeVariant?: import('./CashierConfig.js').CashierSummaryActionThemeVariant;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    alignment?: 'start' | 'centre' | 'end';
    placement?: 'top' | 'bottom' | 'summary';
    layout?: 'row' | 'stack' | 'list';
}>;
/** Merchant-authored members share visibility, layout and lifetime through their element. */
export type CashierElementItem = Readonly<{
    id: string;
} & Omit<CashierContentStyle, 'layout' | 'placement'> & (({
    kind: 'item';
} & CashierDisplayItem) | {
    kind: 'text';
    text: string;
    params?: Record<string, string>;
    tone?: 'info' | 'warning' | 'positive' | 'negative';
    announcement?: 'polite' | 'assertive';
} | {
    kind: 'action';
    label: string;
    params?: Record<string, string>;
    action: 'restart' | import('./CashierConfig.js').CashierUrlAction;
} | {
    kind: 'award';
    award: Omit<import('./CashierConfig.js').CashierAward, 'id' | 'screens'>;
})>;
/** Ordered merchant additions. Omitted screens match all; [] matches none. */
export type CashierElement = Readonly<CashierContentStyle & {
    id: string;
    scope: 'global' | 'payment';
    screens?: CashierPresentationScreenId[];
    paymentStatuses?: string[];
    items: readonly CashierElementItem[];
}>;
/** Released summary configuration. Merchant additions are authored in presentation.elements. */
export type CashierPresentationOptions = Readonly<{
    summary?: Readonly<{
        actions?: CashierSummaryActions;
    }>;
}>;
type CashierPresentationDefinition<Screens, Slots> = Readonly<{
    elements?: readonly CashierElement[];
    screens?: Screens;
    slots?: Slots;
    options?: CashierPresentationOptions;
    onError?: (error: CashierPresentationError) => void;
}>;
/** Presentation contract for the package's primary React Cashier API. */
export type CashierPresentation = CashierPresentationDefinition<CashierScreenOverrides, CashierSlotOverrides>;
export type CashierDomRendererMount<Model, Actions> = Readonly<{
    container: HTMLElement;
    props: Readonly<{
        model: Model;
        actions: Actions;
        localisation: CashierPresentationLocalisation;
    }>;
    signal: AbortSignal;
    protectedSurface?: CashierDomProtectedSurface;
}>;
export type CashierDomRendererHandle<Model, Actions> = Readonly<{
    update: (props: Readonly<{
        model: Model;
        actions: Actions;
        localisation: CashierPresentationLocalisation;
    }>) => void;
    destroy: () => void;
}>;
export type CashierDomRenderer<Model, Actions> = Readonly<{
    mount: (options: CashierDomRendererMount<Model, Actions>) => CashierDomRendererHandle<Model, Actions>;
}>;
export type CashierDomProtectedSurfaceLease = Readonly<{
    destroy: () => void;
}>;
export type CashierDomProtectedSurface = Readonly<{
    mount: (target: HTMLElement) => CashierDomProtectedSurfaceLease;
}>;
export type CashierDomScreenRenderer<Screen extends CashierPresentationScreenId> = CashierDomRenderer<CashierPresentationScreenModelMap[Screen], CashierPresentationScreenActionsMap[Screen]>;
export type CashierDomScreenRendererEntry<Screen extends CashierPresentationScreenId> = CashierDomScreenRenderer<Screen> | (Screen extends CashierPresentationScopedScreenId ? Readonly<{
    renderer: CashierDomScreenRenderer<Screen>;
    scope?: CashierPresentationScreenScope;
}> : never);
export type CashierDomSlotRenderer<Slot extends CashierPresentationSlotId> = CashierDomRenderer<CashierPresentationSlotModelMap[Slot], CashierPresentationSlotActionsMap[Slot]>;
export type CashierDomScreenRenderers = Readonly<{
    [Screen in CashierPresentationScreenId]?: CashierDomScreenRendererEntry<Screen>;
}>;
export type CashierDomSlotRenderers = Readonly<{
    [Slot in CashierPresentationSlotId]?: CashierDomSlotRenderer<Slot>;
}>;
/** DOM renderer binding used by the `pc-cashier` Custom Element. */
export type CashierDomPresentation = CashierPresentationDefinition<CashierDomScreenRenderers, CashierDomSlotRenderers>;
export type CashierExtensions = Readonly<{
    presentation?: CashierPresentation;
}>;
export {};
//# sourceMappingURL=presentation.d.ts.map