export type PaymentFormValue = string | boolean;
export type PaymentFormValues = Record<string, PaymentFormValue>;
type ValidationMessage = {
    invalidMessage?: string;
};
type ValidationWithMessages = {
    required?: ValidationMessage;
    rules?: ValidationMessage[];
    luhn?: ValidationMessage;
    iban?: ValidationMessage;
};
type ValidationRule = {
    pattern?: string;
    invalidMessage?: string;
};
type BooleanValidation = {
    value?: boolean;
    invalidMessage?: string;
};
type FieldValidation = {
    required?: BooleanValidation;
    rules?: ValidationRule[];
    iban?: BooleanValidation;
};
type FieldWithValidation = {
    id?: string;
    validation?: FieldValidation;
};
export declare const toFormString: (value: PaymentFormValue | undefined) => string;
export declare const toBoolean: (value: PaymentFormValue | undefined) => boolean;
export declare const toInputMap: (values: PaymentFormValues) => Record<string, string>;
export declare const buildInitialValues: (fields: readonly {
    id?: string;
    defaultValue?: string;
}[] | undefined, overrides: Partial<Record<string, PaymentFormValue>>) => PaymentFormValues;
export declare const hasMeaningfulValue: (value: PaymentFormValue | undefined) => boolean;
export declare const hasAnyError: (value: unknown) => boolean;
type RequiredField = {
    id?: string;
    validation?: {
        required?: {
            value?: boolean;
        };
    };
};
export declare const hasMissingRequiredFields: (fields: readonly RequiredField[] | undefined, values: PaymentFormValues) => boolean;
export declare const validatePaymentFields: (fields: readonly FieldWithValidation[] | undefined, values: PaymentFormValues, translateKey: (key: string | null | undefined) => string) => Record<string, string>;
export declare const localiseValidationMessages: <T extends ValidationWithMessages>(validation: T | undefined, translateKey: (key: string | null | undefined) => string) => T | undefined;
export {};
//# sourceMappingURL=paymentFieldUtils.d.ts.map