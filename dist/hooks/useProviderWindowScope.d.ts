import * as providerWindow from '../utils/providerWindow.js';
/** Bind browser-resource ownership to the stable outer Cashier instance. */
export declare const useProviderWindowScope: () => Readonly<{
    instanceId: string;
    setProviderWindowHandle: (handle: Window | null, paymentId?: string | null) => void;
    getProviderWindowOwnership: (paymentId: string) => providerWindow.ProviderWindowOwnership;
    transferProviderWindowOwnership: (previous: string, next: string) => boolean;
    consumeProviderWindowClosure: (paymentId: string) => boolean;
    releaseProviderWindowOwnership: (paymentId?: string | null) => void;
    closeProviderWindowHandle: (paymentId?: string | null) => void;
}> | {
    instanceId: string;
    PROVIDER_WINDOW_TARGET: "cashier-provider-window";
    PROVIDER_WINDOW_FEATURES: "";
    PROVIDER_POPUP_BLOCKED_TOAST_ID: "cashier-provider-popup-blocked";
    PROVIDER_WINDOW_DETACHED_OPEN_GRACE_MS: 500;
    setProviderWindowHandle: (handle: Window | null, ownerKey?: string | null) => void;
    isProviderWindowHandleUsable: (handle: Window | null) => handle is Window;
    focusProviderWindow: (handle: Window) => void;
    openProviderPopupWindow: ({ ownerWindow, url, target, features, }: {
        ownerWindow: Window;
        url: string;
        target: string;
        features?: string;
    }) => Window | null;
    trackProviderWindowClose: ({ ownerWindow, popupWindow, onClosed, pollIntervalMs, }: {
        ownerWindow: Window;
        popupWindow: Window;
        onClosed: () => void;
        pollIntervalMs?: number;
    }) => () => void;
    getProviderWindowHandle: () => Window | null;
    getProviderWindowOwnership: (ownerKey: string) => providerWindow.ProviderWindowOwnership;
    consumeProviderWindowClosure: (ownerKey: string) => boolean;
    closeProviderWindowHandle: (ownerKey?: string | null) => void;
    canOpenProviderWindow: () => boolean;
    releaseProviderWindowOwnership: (ownerKey?: string | null) => void;
    buildProviderWindowStepKey: ({ scopeId, paymentId, redirectType, redirectMethod, redirectUrl, redirectData, redirectScriptId, }: {
        scopeId?: string;
        paymentId?: string | null;
        redirectType?: string;
        redirectMethod?: string;
        redirectUrl?: string;
        redirectData?: string;
        redirectScriptId?: string;
    }) => string | null;
    openOrReuseProviderWindow: (options: {
        source: providerWindow.ProviderWindowOpenSource;
        signal?: AbortSignal;
        open: () => Window | null;
        onReuse?: (handle: Window) => void;
        onOpened?: (handle: Window) => void;
        onBlocked: (source: providerWindow.ProviderWindowOpenSource) => void;
        canReuse?: (handle: Window) => boolean;
        canOpen?: () => boolean;
        setHandle?: (handle: Window | null) => void;
        allowManualDetachedOpen?: boolean;
        onDetachedOpened?: () => void;
    }) => Promise<Window | null>;
    createProviderWindowScope: (instanceId: string) => Readonly<{
        instanceId: string;
        setProviderWindowHandle: (handle: Window | null, paymentId?: string | null) => void;
        getProviderWindowOwnership: (paymentId: string) => providerWindow.ProviderWindowOwnership;
        transferProviderWindowOwnership: (previous: string, next: string) => boolean;
        consumeProviderWindowClosure: (paymentId: string) => boolean;
        releaseProviderWindowOwnership: (paymentId?: string | null) => void;
        closeProviderWindowHandle: (paymentId?: string | null) => void;
    }>;
};
/** POST targets must never select a frame owned by another instance or action. */
export declare const useProviderFrameTarget: (kind: string) => string;
/** Abort pending browser detection when its rendering action loses ownership. */
export declare const useProviderActionSignal: (actionKey: string | null) => () => AbortSignal;
//# sourceMappingURL=useProviderWindowScope.d.ts.map