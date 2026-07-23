import { ReactNode } from 'react';
export declare const CASHIER_FULLSCREEN_LOADER_DELAY_MS = 180;
type CashierFullscreenLoaderProps = {
    label?: string;
    message?: string;
    testId?: string;
    loaderSlot?: string;
    delayMs?: number;
    onVisibleChange?: (isVisible: boolean) => void;
};
type CashierFullscreenLoadingGateProps = {
    isLoading: boolean;
    children: ReactNode;
    loaderLabel?: string;
    loaderMessage?: string;
    loaderTestId?: string;
    loaderSlot?: string;
    loaderDelayMs?: number;
};
export default function CashierFullscreenLoader({ label, message, testId, loaderSlot, delayMs, onVisibleChange, }: CashierFullscreenLoaderProps): import("react/jsx-runtime").JSX.Element;
export declare function CashierFullscreenLoadingGate({ isLoading, children, loaderLabel, loaderMessage, loaderTestId, loaderSlot, loaderDelayMs, }: CashierFullscreenLoadingGateProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=CashierFullscreenLoader.d.ts.map