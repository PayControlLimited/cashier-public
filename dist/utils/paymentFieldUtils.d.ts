import { FieldOverride, FieldOverrideGuard } from '../../../ui/src/validation.js';
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
export type FieldOverrideEntry = FieldOverride<ValidationRule, BooleanValidation>;
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
    overrides?: FieldOverrideEntry[];
};
export declare const toFormString: (value: PaymentFormValue | undefined) => string;
export declare const toBoolean: (value: PaymentFormValue | undefined) => boolean;
export declare const toInputMap: (values: PaymentFormValues) => Record<string, string>;
export declare const buildInitialValues: (fields: readonly {
    id?: string;
    type?: string;
    defaultValue?: string;
    options?: readonly {
        value?: string;
    }[];
}[] | undefined, overrides: Partial<Record<string, PaymentFormValue>>) => PaymentFormValues;
export declare const hasMeaningfulValue: (value: PaymentFormValue | undefined) => boolean;
export declare const hasAnyError: (value: unknown) => boolean;
type FieldWithOverrides = {
    hidden?: boolean;
    validation?: FieldValidation;
    overrides?: FieldOverrideEntry[];
};
export declare const withApplicableOverrides: <T extends FieldWithOverrides>(field: T, values: PaymentFormValues) => T;
export declare const applyFieldOverrides: <T extends FieldWithOverrides>(fields: readonly T[] | undefined, values: PaymentFormValues) => T[];
export type FieldReconciliationWrite = {
    fieldId: string;
    value: string;
};
type OverrideHiddenField = FieldWithOverrides & {
    id?: string;
    type?: string;
    defaultValue?: string;
};
export declare const overrideHiddenFieldIds: (fields: readonly OverrideHiddenField[] | undefined, values: PaymentFormValues) => Set<string>;
export declare const mergeReconciliationWrites: (dependentWrites: readonly FieldReconciliationWrite[], overrideHiddenWrites: readonly FieldReconciliationWrite[], hiddenFieldIds: ReadonlySet<string>) => FieldReconciliationWrite[];
export declare const collectOverrideHiddenWrites: (fields: readonly OverrideHiddenField[] | undefined, values: PaymentFormValues) => FieldReconciliationWrite[];
type RequiredField = {
    id?: string;
    validation?: FieldValidation;
    overrides?: FieldOverrideEntry[];
};
export declare const hasMissingRequiredFields: (fields: readonly RequiredField[] | undefined, values: PaymentFormValues) => boolean;
export declare const validatePaymentFields: (fields: readonly FieldWithValidation[] | undefined, values: PaymentFormValues, translateKeys: TranslateKeysFn) => Record<string, string>;
export declare const localiseValidationMessages: (validation: ValidationWithMessages | undefined, translateKeys: TranslateKeysFn) => LocalisedFieldValidation | undefined;
export type LocalisedFieldOverride = {
    when?: FieldOverrideGuard;
    set: {
        rule?: LocalisedValidationRule;
        required?: LocalisedBooleanValidation;
    };
};
export declare const localiseFieldOverrides: (overrides: readonly FieldOverrideEntry[] | undefined, translateKeys: TranslateKeysFn) => LocalisedFieldOverride[] | undefined;
export {};
//# sourceMappingURL=paymentFieldUtils.d.ts.map