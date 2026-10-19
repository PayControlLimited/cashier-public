type UseBackNavigationOptions = {
    defaultRoute: string;
    backKey?: 'Escape' | 'Backspace';
    enableHotkey?: boolean;
    useHistory?: boolean;
    requireCanGoBackForHotkey?: boolean;
    replace?: boolean;
    resetHistory?: boolean;
    restartPurchase?: boolean;
};
export declare function useBackNavigation({ defaultRoute, backKey, enableHotkey, useHistory, requireCanGoBackForHotkey, replace, resetHistory, restartPurchase, }: UseBackNavigationOptions): {
    canGoBack: boolean;
    handleBack: () => void;
};
export {};
//# sourceMappingURL=useBackNavigation.d.ts.map