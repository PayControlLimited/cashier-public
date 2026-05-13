type UseFloatingSheetOptions = {
    isOpen: boolean;
    canShow: boolean;
    onClose: () => void;
    useOverlayInset?: boolean;
    enableBackHotkey?: boolean;
    contentBottomGap?: number;
    reserveContentInset?: boolean;
};
type UseFloatingSheetResult = {
    floatingPortalTarget: HTMLElement | null;
    showOverlay: boolean;
    setFloatingContainer: (node: HTMLDivElement | null) => void;
    setOverlayContainer: (node: HTMLDivElement | null) => void;
};
export declare const useFloatingSheet: ({ isOpen, canShow, onClose, useOverlayInset, enableBackHotkey, contentBottomGap, reserveContentInset, }: UseFloatingSheetOptions) => UseFloatingSheetResult;
export {};
//# sourceMappingURL=useFloatingSheet.d.ts.map