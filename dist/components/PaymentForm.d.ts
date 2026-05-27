import { PaymentsRequest } from '../../../api/src/payments.ts';
import { ReactNode } from 'react';
import { PaymentType } from '../types/payment.js';
import { HostedFieldsController, HostedFieldsFormData } from '../lib/hostedFields.js';
import { PaymentFormValues } from '../utils/paymentFieldUtils.js';
export type { PaymentFormValues } from '../utils/paymentFieldUtils.js';
type RequiredPaymentPayloadParams = Pick<PaymentsRequest, 'merchantId' | 'userId' | 'sessionId' | 'accountId' | 'currency'>;
type OptionalPaymentPayloadParams = Partial<Pick<PaymentsRequest, 'service' | 'bonusCode' | 'locales' | 'extra'>>;
type PreparePaymentPayloadParams = RequiredPaymentPayloadParams & OptionalPaymentPayloadParams & {
    values: PaymentFormValues;
    method: PaymentType['method'] | undefined;
    type: PaymentType['type'] | undefined;
    debug: boolean;
    overrideRaw?: string;
    tokenizeHfData: (saveAccount?: boolean) => Promise<HostedFieldsFormData>;
    controller: HostedFieldsController | null;
};
export declare const preparePaymentPayload: (params: PreparePaymentPayloadParams) => Promise<PaymentsRequest>;
export type PaymentFormActions = {
    submit: {
        label: string;
        disabled: boolean;
        visible: boolean;
        loading: boolean;
        onClick: () => void;
    };
    reset: {
        label: string;
        disabled: boolean;
        visible: boolean;
        onClick: () => void;
    };
};
export type PaymentFormPromptState = {
    isComplete: boolean;
    errorMessage: string | null;
};
export type PreparedPaymentFormValues = {
    values: PaymentFormValues;
    hasHostedFields: boolean;
};
export type PaymentFormDraftValues = {
    values: PaymentFormValues;
    hasHostedFields: boolean;
};
type PaymentFormActionCallback = (actions: PaymentFormActions) => void;
type PaymentFormPromptStateCallback = (state: PaymentFormPromptState) => void;
type PreparedPaymentFormCallback = (preparedValues: PreparedPaymentFormValues) => void;
type PaymentFormValuesChangeCallback = (draftValues: PaymentFormDraftValues) => void;
type ComboViewSurfaceChrome = 'contained' | 'plain';
type PaymentFormProps = {
    id: PaymentType['name'];
    onActionsChange?: PaymentFormActionCallback;
    onPromptStateChange?: PaymentFormPromptStateCallback;
    onPreparedValues?: PreparedPaymentFormCallback;
    onValuesChange?: PaymentFormValuesChangeCallback;
    renderMode?: 'form' | 'confirm';
    hideAmountField?: boolean;
    amountValueOverride?: string;
    valueOverrides?: Partial<PaymentFormValues>;
    requireDirtyBeforeSubmit?: boolean;
    comboViewLayout?: boolean;
    comboViewSurfaceChrome?: ComboViewSurfaceChrome;
};
declare function PaymentForm({ id, onActionsChange, onPromptStateChange, onPreparedValues, onValuesChange, renderMode, hideAmountField, amountValueOverride, valueOverrides, requireDirtyBeforeSubmit, comboViewLayout, comboViewSurfaceChrome, }: PaymentFormProps): ReactNode | null;
export default PaymentForm;
type PaymentFormActionsBridgeProps = {
    onActionsChange?: PaymentFormActionCallback;
    submitLabel: string;
    resetLabel: string;
    submitDisabled: boolean;
    submitVisible: boolean;
    submitLoading: boolean;
    resetDisabled: boolean;
    resetVisible: boolean;
    submitForm: () => Promise<unknown>;
    onReset: () => void;
};
declare function PaymentFormActionsBridge({ onActionsChange, submitLabel, resetLabel, submitDisabled, submitVisible, submitLoading, resetDisabled, resetVisible, submitForm, onReset, }: PaymentFormActionsBridgeProps): null;
export { PaymentFormActionsBridge };
//# sourceMappingURL=PaymentForm.d.ts.map