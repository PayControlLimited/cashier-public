import { ReactNode, CSSProperties } from 'react';
export type NavigationShellPlacement = 'top' | 'bottom';
export type NavigationShellItem = ReactNode;
type NavigationShellState = Record<NavigationShellPlacement, NavigationShellItem[]>;
type NavigationShellContextValue = {
    items: NavigationShellState;
    setItems: (placement: NavigationShellPlacement, items: NavigationShellItem[]) => void;
    clearItems: (placement?: NavigationShellPlacement) => void;
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
export declare function useNavigationItems(placement: NavigationShellPlacement, items: NavigationShellItem[], enabled?: boolean): void;
export {};
//# sourceMappingURL=navigationShell.d.ts.map