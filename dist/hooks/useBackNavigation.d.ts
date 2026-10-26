type UseBackNavigationOptions = {
    defaultRoute: string;
    backKey?: 'Escape' | 'Backspace';
    enableHotkey?: boolean;
    useHistory?: boolean;
    requireCanGoBackForHotkey?: boolean;
    replace?: boolean;
    resetHistory?: boolean;
    restartPurchase?: boolean;
    restartAmount?: string | null;
};
export declare function useBackNavigation({ defaultRoute, backKey, enableHotkey, useHistory, requireCanGoBackForHotkey, replace, resetHistory, restartPurchase, restartAmount, }: UseBackNavigationOptions): {
    canGoBack: boolean;
    handleBack: () => void;
};
export {};
//# sourceMappingURL=useBackNavigation.d.ts.map