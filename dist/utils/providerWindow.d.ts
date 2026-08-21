export declare const PROVIDER_WINDOW_TARGET = "cashier-provider-window";
export declare const PROVIDER_WINDOW_FEATURES = "";
export declare const PROVIDER_POPUP_BLOCKED_TOAST_ID = "cashier-provider-popup-blocked";
export declare const PROVIDER_WINDOW_DETACHED_OPEN_GRACE_MS = 500;
export type ProviderWindowOpenSource = 'auto' | 'manual';
type ProviderWindowStepKeyParams = {
    paymentId?: string | null;
    redirectType?: string;
    redirectMethod?: string;
    redirectUrl?: string;
    redirectData?: string;
    redirectScriptId?: string;
};
export declare const setProviderWindowHandle: (handle: Window | null, ownerKey?: string | null) => void;
export declare const isProviderWindowHandleUsable: (handle: Window | null) => handle is Window;
export declare const focusProviderWindow: (handle: Window) => void;
export declare const openProviderPopupWindow: ({ ownerWindow, url, target, features, }: {
    ownerWindow: Window;
    url: string;
    target: string;
    features?: string;
}) => Window | null;
export declare const trackProviderWindowClose: ({ ownerWindow, popupWindow, onClosed, pollIntervalMs, }: {
    ownerWindow: Window;
    popupWindow: Window;
    onClosed: () => void;
    pollIntervalMs?: number;
}) => () => void;
export declare const getProviderWindowHandle: () => Window | null;
/**
 * How the shared provider window relates to the given payment:
 * - 'owned': a live window exists and this payment owns it.
 * - 'foreign': a live window exists but another payment owns it. This is an
 *   ownership transfer, not a closure - the previous owner must stop
 *   observing without reporting a close.
 * - 'none': no live window.
 */
export type ProviderWindowOwnership = 'owned' | 'foreign' | 'none';
export declare const getProviderWindowOwnership: (ownerKey: string) => ProviderWindowOwnership;
/**
 * Consumes ownerKey's pending closed-window record. Returns true exactly
 * once for the payment that owned a window when it closed - even while a
 * newer window owned by another payment is live; false for every other
 * payment and for programmatic closes.
 */
export declare const consumeProviderWindowClosure: (ownerKey: string) => boolean;
/**
 * Closes the shared provider window. When ownerKey is given (string or
 * null), the window is only closed if it is unowned or owned by that key, so
 * one payment's cleanup (unmount, terminal status, state reset) never closes
 * a window that another payment has since taken over. Omit ownerKey for the
 * unconditional close used when replacing an unusable window.
 */
export declare const closeProviderWindowHandle: (ownerKey?: string | null) => void;
export declare const canOpenProviderWindow: () => boolean;
export declare const buildProviderWindowStepKey: ({ paymentId, redirectType, redirectMethod, redirectUrl, redirectData, redirectScriptId, }: ProviderWindowStepKeyParams) => string | null;
type OpenOrReuseProviderWindowOptions = {
    source: ProviderWindowOpenSource;
    open: () => Window | null;
    onReuse?: (handle: Window) => void;
    onOpened?: (handle: Window) => void;
    onBlocked: (source: ProviderWindowOpenSource) => void;
    canReuse?: (handle: Window) => boolean;
    canOpen?: () => boolean;
    setHandle?: (handle: Window | null) => void;
    allowManualDetachedOpen?: boolean;
    onDetachedOpened?: () => void;
};
export declare const openOrReuseProviderWindow: (options: OpenOrReuseProviderWindowOptions) => Promise<Window | null>;
export {};
//# sourceMappingURL=providerWindow.d.ts.map