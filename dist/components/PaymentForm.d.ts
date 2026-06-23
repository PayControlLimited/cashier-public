import { ReactNode } from 'react';
import { PaymentType } from '../types/payment.js';
import { PaymentFormValues } from '../utils/paymentFieldUtils.js';
export type { PaymentFormValues } from '../utils/paymentFieldUtils.js';
export { preparePaymentPayload } from './paymentFormPayload.js';
export type PaymentFormActions = {
    submit: {
        label: string;
        disabled: boolean;
        visible: boolean;
        loading: boolean;
        onClick: () => Promise<unknown>;
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
    renderAfterAmountField?: ReactNode;
    valueOverrides?: Partial<PaymentFormValues>;
    requireDirtyBeforeSubmit?: boolean;
    comboViewLayout?: boolean;
    comboViewSurfaceChrome?: ComboViewSurfaceChrome;
    reserveTrailingActionSpace?: boolean;
    animateEntrance?: boolean;
};
declare function PaymentForm({ id, onActionsChange, onPromptStateChange, onPreparedValues, onValuesChange, renderMode, hideAmountField, amountValueOverride, renderAfterAmountField, valueOverrides, requireDirtyBeforeSubmit, comboViewLayout, comboViewSurfaceChrome, reserveTrailingActionSpace, animateEntrance, }: PaymentFormProps): ReactNode | null;
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