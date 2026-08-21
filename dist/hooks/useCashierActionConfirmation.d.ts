type UseCashierActionConfirmationOptions = {
    isConfirmDisabled?: boolean;
};
export declare const useCashierActionConfirmation: ({ isConfirmDisabled, }?: UseCashierActionConfirmationOptions) => {
    openActionConfirmation: (request: {
        title: string;
        description: import('react').ReactNode;
        notification?: {
            message: import('react').ReactNode;
            variant: import('../../../ui/src/index.ts').UiVariant;
        };
        confirmLabel?: string;
        confirmVariant?: import('../../../ui/src/index.ts').ButtonVariant;
        errorMessage?: string;
        onConfirm: () => Promise<void> | void;
    }) => void;
    actionConfirmationModal: import('react').ReactNode;
    isActionConfirmationOpen: boolean;
    closeActionConfirmation: () => void;
};
export {};
//# sourceMappingURL=useCashierActionConfirmation.d.ts.map