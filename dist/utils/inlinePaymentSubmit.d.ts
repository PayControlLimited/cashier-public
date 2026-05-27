type ResolveInlinePaymentSubmitIntentParams = {
    uiPaymentConfirmView: boolean;
    hasPendingStep: boolean;
    hasVisibleInlineContent: boolean;
    hasConfirmOnlyContent: boolean;
};
export type InlinePaymentSubmitIntent = {
    action: 'submit' | 'confirm';
    submitMode: 'submit' | 'prepare';
    buttonLabel: 'pay' | 'continue';
};
export declare const resolveInlinePaymentSubmitIntent: ({ uiPaymentConfirmView, hasPendingStep, hasVisibleInlineContent, hasConfirmOnlyContent, }: ResolveInlinePaymentSubmitIntentParams) => InlinePaymentSubmitIntent;
export declare const canSubmitInlinePaymentType: (params: ResolveInlinePaymentSubmitIntentParams) => boolean;
export {};
//# sourceMappingURL=inlinePaymentSubmit.d.ts.map