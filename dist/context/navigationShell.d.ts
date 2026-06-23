import { ReactNode, CSSProperties } from 'react';
export type NavigationShellPlacement = 'top' | 'bottom';
export type NavigationShellItem = ReactNode;
export type NavigationShellReserveSpace = boolean | 'compact';
type NavigationShellItemOptions = {
    reserveSpace?: NavigationShellReserveSpace;
    source?: string;
};
type NavigationShellClearOptions = {
    source?: string;
};
type NavigationShellState = Record<NavigationShellPlacement, NavigationShellItem[]>;
type NavigationShellContextValue = {
    items: NavigationShellState;
    setItems: (placement: NavigationShellPlacement, items: NavigationShellItem[], options?: NavigationShellItemOptions) => void;
    clearItems: (placement?: NavigationShellPlacement, options?: NavigationShellClearOptions) => void;
    registerOverlay: (overlay: ReactNode | null) => void;
    contentNode: HTMLDivElement | null;
    contentInset: number;
    setContentInset: (inset: number) => void;
    setBottomRailFadeSuppressed: (suppressed: boolean) => void;
};
type NavigationShellProviderProps = {
    children: ReactNode;
    beforeTopRail?: ReactNode;
    themeStyles?: CSSProperties;
};
export declare function NavigationShellProvider({ children, beforeTopRail, themeStyles, }: NavigationShellProviderProps): ReactNode;
export declare function useNavigationShell(): NavigationShellContextValue;
export declare function useNavigationShellContentNode(): HTMLDivElement | null;
export declare function useNavigationItems(placement: NavigationShellPlacement, items: NavigationShellItem[], enabled?: boolean, options?: NavigationShellItemOptions): void;
export {};
//# sourceMappingURL=navigationShell.d.ts.map