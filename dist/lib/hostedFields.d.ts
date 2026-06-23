import { CreditCardTypeCardBrandId } from 'credit-card-type/dist/types';
import { HostedFieldsFontDefinition } from '../types/CashierConfig.js';
import { HostedFieldsThemePayload } from './hostedFieldsThemePayload.js';
/**
 * Quick start:
 *
 * ```ts
 * const container = document.querySelector('#pci-container')
 * const { controller, destroy } = initHostedFields({
 *   container,
 *   iframe: {
 *     src: 'https://pci.example.com/hosted-fields',
 *   },
 *   controller: {
 *     targetOrigin: 'https://pci.example.com',
 *   },
 * })
 *
 * controller.configure({ fields })
 * const token = await controller.tokenize({ saveAccount: true })
 * destroy()
 * ```
 */
export declare enum HostedFieldsEventId {
    INIT = "INIT",
    TOKENIZE = "TOKENIZE",
    LAYOUT = "HF_LAYOUT",
    FORM_DATA = "HF_FORM_DATA",
    FORM_STATE = "HF_FORM_STATE",
    CARD_BRAND = "HF_CARD_BRAND",
    AUTO_FOCUS_NEXT = "HF_AUTO_FOCUS_NEXT",
    CAPABILITIES = "HF_CAPABILITIES",
    READY = "HF_READY",
    ERROR = "HF_ERROR",
    RESET = "RESET"
}
export type HostedFieldsLayout = {
    containerHeight: number;
};
export type HostedFieldsFormData = Record<string, string> & {
    transactionToken: string;
};
export type HostedFieldsFormState = {
    isComplete?: boolean;
    isValid?: boolean;
    dirty?: boolean;
};
export type HostedFieldsCapabilities = {
    groupedCardInputs?: boolean;
};
export type HostedFieldsMessage = {
    type: HostedFieldsEventId;
    protocolVersion?: number;
    layout?: HostedFieldsLayout;
    formData?: HostedFieldsFormData;
    formState?: HostedFieldsFormState;
    cardBrand?: CreditCardTypeCardBrandId;
    capabilities?: HostedFieldsCapabilities;
    fieldId?: string;
    message?: string;
    fonts?: HostedFieldsFontDefinition[];
    autoFocusNextField?: boolean;
    css?: string | null;
};
/** Configuration payload sent to the hosted fields iframe. */
export type HostedFieldsConfiguration = {
    protocolVersion?: number;
    fields?: readonly unknown[] | null;
    debugMode?: boolean;
    fonts?: HostedFieldsFontDefinition[] | null;
    uiTheme?: HostedFieldsThemePayload | null;
    css?: string | null;
    autoFocusNextField?: boolean;
    pciTenantId?: string;
    uiGroupCardInputs?: boolean;
};
/** Event hooks fired while the iframe exchanges postMessage events. */
export type HostedFieldsCallbacks = {
    onReady?: () => void;
    onLayout?: (layout: HostedFieldsLayout, message: HostedFieldsMessage) => void;
    onCapabilities?: (capabilities: HostedFieldsCapabilities, message: HostedFieldsMessage) => void;
    onMessage?: (message: HostedFieldsMessage) => void;
    onInit?: (fonts: HostedFieldsFontDefinition[] | undefined, message: HostedFieldsMessage) => void;
};
/** Parameters that affect a tokenization request dispatched to the iframe. */
export type HostedFieldsTokenizeOptions = {
    saveAccount?: boolean;
    /** Overrides the default 5s timeout for the tokenization response. */
    timeoutMs?: number;
};
/** Public interface returned by {@link createHostedFieldsController}. */
export type HostedFieldsController = {
    configure(configuration: HostedFieldsConfiguration | null | undefined): void;
    tokenize(options?: HostedFieldsTokenizeOptions): Promise<HostedFieldsFormData>;
    destroy(): void;
    setCallbacks(callbacks?: HostedFieldsCallbacks | null): void;
    isReady(): boolean;
    getLastLayout(): HostedFieldsLayout | null;
    getLastFormState(): HostedFieldsFormState | null;
    getCapabilities(): HostedFieldsCapabilities;
    reset(): void;
};
/** Construction options for {@link createHostedFieldsController}. */
export type CreateHostedFieldsControllerOptions = {
    iframe: HTMLIFrameElement;
    targetOrigin?: string;
    win?: Window;
};
/** Recommended iframe title i18n key for accessibility tooling. */
export declare const DEFAULT_HOSTED_FIELDS_TITLE = "hosted_fields.title";
/** Arguments accepted by {@link createHostedFieldsIframe}. */
export type HostedFieldsIframeOptions = {
    src: string;
    title?: string;
    document?: Document;
    name?: string;
    allow?: string;
    referrerPolicy?: ReferrerPolicy;
    className?: string;
    ariaLabel?: string;
    attributes?: Record<string, string | number | boolean | null | undefined>;
    styles?: Partial<CSSStyleDeclaration>;
};
/**
 * Arguments accepted by {@link initHostedFields}.
 * Always supply `controller.targetOrigin` when the iframe src points to a different origin.
 * The iframe title and sandbox directives are applied automatically using the
 * defaults above.
 */
export type HostedFieldsBootstrapOptions = {
    container: HTMLElement;
    iframe: HostedFieldsIframeOptions;
    controller?: Omit<CreateHostedFieldsControllerOptions, 'iframe'>;
};
/** Result object returned from {@link initHostedFields}. */
export type HostedFieldsBootstrapResult = {
    iframe: HTMLIFrameElement;
    controller: HostedFieldsController;
    destroy(): void;
};
/**
 * Mounts a hosted fields iframe inside the provided container and returns the controller
 * responsible for postMessage communication. Call `destroy()` when you are done with the iframe.
 */
export declare const initHostedFields: (options: HostedFieldsBootstrapOptions) => HostedFieldsBootstrapResult;
/**
 * Creates a controller for an already-mounted hosted fields iframe.
 * Supply the iframe element and the origin it is expected to communicate with.
 */
export declare const createHostedFieldsController: (options: CreateHostedFieldsControllerOptions) => HostedFieldsController;
//# sourceMappingURL=hostedFields.d.ts.map