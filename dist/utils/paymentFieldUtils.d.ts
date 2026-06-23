import { I18nKeyCandidates } from './i18n.js';
export type PaymentFormValue = string | boolean;
export type PaymentFormValues = Record<string, PaymentFormValue>;
type ValidationMessage = {
    value?: boolean;
    pattern?: string;
    invalidMessage?: string;
    invalidMessageKeys?: string[];
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
    invalidMessageKeys?: string[];
};
type BooleanValidation = {
    value?: boolean;
    invalidMessage?: string;
    invalidMessageKeys?: string[];
};
type FieldValidation = {
    required?: BooleanValidation;
    rules?: ValidationRule[];
    iban?: BooleanValidation;
};
type LocalisedBooleanValidation = {
    value?: boolean;
    invalidMessage?: string;
};
type LocalisedValidationRule = {
    pattern?: string;
    invalidMessage?: string;
};
export type LocalisedFieldValidation = {
    required?: LocalisedBooleanValidation;
    rules?: LocalisedValidationRule[];
    luhn?: LocalisedBooleanValidation;
    iban?: LocalisedBooleanValidation;
};
export type TranslateKeysFn = (keys: I18nKeyCandidates) => string;
type FieldWithValidation = {
    id?: string;
    validation?: FieldValidation;
};
export declare const toFormString: (value: PaymentFormValue | undefined) => string;
export declare const toBoolean: (value: PaymentFormValue | undefined) => boolean;
export declare const toInputMap: (values: PaymentFormValues) => Record<string, string>;
export declare const buildInitialValues: (fields: readonly {
    id?: string;
    type?: string;
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
export declare const validatePaymentFields: (fields: readonly FieldWithValidation[] | undefined, values: PaymentFormValues, translateKeys: TranslateKeysFn) => Record<string, string>;
export declare const localiseValidationMessages: (validation: ValidationWithMessages | undefined, translateKeys: TranslateKeysFn) => LocalisedFieldValidation | undefined;
export {};
//# sourceMappingURL=paymentFieldUtils.d.ts.map