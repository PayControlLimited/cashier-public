type UseBackNavigationActionsOptions = {
    defaultRoute: string;
    backLabel: string;
    disabled?: boolean;
    enableHotkey?: boolean;
    useHistory?: boolean;
    requireCanGoBackForHotkey?: boolean;
    replace?: boolean;
    showWhenNoHistory?: boolean;
    resetHistory?: boolean;
};
export declare const useBackNavigationActions: ({ defaultRoute, backLabel, disabled, enableHotkey, useHistory, requireCanGoBackForHotkey, replace, showWhenNoHistory, resetHistory, }: UseBackNavigationActionsOptions) => {
    canGoBack: boolean;
    handleBack: () => void;
};
export {};
//# sourceMappingURL=useNavigationActions.d.ts.map