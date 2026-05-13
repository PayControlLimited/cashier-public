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
export declare const setProviderWindowHandle: (handle: Window | null) => void;
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
export declare const closeProviderWindowHandle: () => void;
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