import { ReactNode } from 'react';
import { CashierStateScreenId } from '../types/presentation.js';
export declare const CASHIER_FULLSCREEN_LOADER_DELAY_MS = 180;
type CashierFullscreenLoaderProps = {
    label?: string;
    labelKey?: string;
    message?: string;
    messageKey?: string;
    testId?: string;
    loaderSlot?: string;
    delayMs?: number;
    onVisibleChange?: (isVisible: boolean) => void;
    presentationScreen?: Extract<CashierStateScreenId, 'loading' | 'processing'>;
};
type CashierFullscreenLoadingGateProps = {
    isLoading: boolean;
    children: ReactNode;
    loaderLabel?: string;
    loaderLabelKey?: string;
    loaderMessage?: string;
    loaderMessageKey?: string;
    loaderTestId?: string;
    loaderSlot?: string;
    loaderDelayMs?: number;
};
type CashierFullscreenLoadingOverlayProps = {
    isLoading: boolean;
    children: ReactNode;
    loaderLabel?: string;
    loaderLabelKey?: string;
    loaderTestId?: string;
    loaderSlot?: string;
};
export default function CashierFullscreenLoader({ label, labelKey, message, messageKey, testId, loaderSlot, delayMs, onVisibleChange, presentationScreen, }: CashierFullscreenLoaderProps): import("react").JSX.Element;
export declare function CashierFullscreenLoadingGate({ isLoading, children, loaderLabel, loaderLabelKey, loaderMessage, loaderMessageKey, loaderTestId, loaderSlot, loaderDelayMs, }: CashierFullscreenLoadingGateProps): import("react").JSX.Element;
export declare function CashierFullscreenLoadingOverlay({ isLoading, children, loaderLabel, loaderLabelKey, loaderTestId, loaderSlot, }: CashierFullscreenLoadingOverlayProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=CashierFullscreenLoader.d.ts.map