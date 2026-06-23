import { ReactNode } from 'react';
import { NavigationShellItem } from '../context/navigationShell.js';
type AdaptiveControlsFooterProps = {
    domScope: string;
    items: NavigationShellItem[];
    fixed: boolean;
    enabled?: boolean;
    onFallbackActiveChange?: (active: boolean) => void;
};
type AdaptiveControlsInlineProps = {
    domScope: string;
    items: NavigationShellItem[];
    enabled?: boolean;
    adaptive?: boolean;
    onFallbackActiveChange?: (active: boolean) => void;
};
export declare const useAdaptiveVisibilityFallback: ({ enabled, target, bottomMarginPx, onFallbackActiveChange, }: {
    enabled: boolean;
    target: HTMLElement | null;
    bottomMarginPx?: number;
    onFallbackActiveChange?: (active: boolean) => void;
}) => boolean;
export declare function AdaptiveControlsInline({ domScope, items, enabled, adaptive, onFallbackActiveChange, }: AdaptiveControlsInlineProps): ReactNode;
export default function AdaptiveControlsFooter({ domScope, items, fixed, enabled, onFallbackActiveChange, }: AdaptiveControlsFooterProps): ReactNode;
export {};
//# sourceMappingURL=AdaptiveControlsFooter.d.ts.map