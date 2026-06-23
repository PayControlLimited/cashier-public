type PaymentFieldCandidate = {
    id?: string | null;
};
type HostedFieldsExitFocusCandidates = {
    cardLayoutDetailsField?: PaymentFieldCandidate | null;
    cardLayoutFooterField?: PaymentFieldCandidate | null;
    fieldsAfterHosted?: readonly PaymentFieldCandidate[];
};
export declare const resolveHostedFieldsExitFocusFieldId: ({ cardLayoutDetailsField, cardLayoutFooterField, fieldsAfterHosted, }: HostedFieldsExitFocusCandidates) => string | null;
export declare const focusHostedFieldsExitPaymentField: (fieldId: string | null | undefined, doc?: Document) => boolean;
export {};
//# sourceMappingURL=hostedFieldsExitFocus.d.ts.map