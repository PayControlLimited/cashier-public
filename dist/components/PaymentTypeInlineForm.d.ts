import { PaymentFormActions, PaymentFormDraftValues, PaymentFormPromptState, PreparedPaymentFormValues, PaymentFormValues } from './PaymentForm.js';
import { PaymentType } from '../types/payment.js';
type PaymentTypeInlineFormProps = {
    paymentType: PaymentType;
    selectionId?: string;
    amountValue: string;
    valueOverrides?: Partial<PaymentFormValues>;
    hideAmountField?: boolean;
    surfaceChrome?: 'contained' | 'plain';
    onActionsChange: (actions: PaymentFormActions) => void;
    onPromptStateChange: (paymentTypeName: string, state: PaymentFormPromptState) => void;
    onPreparedValues: (paymentType: PaymentType, preparedValues: PreparedPaymentFormValues) => void;
    onValuesChange: (paymentType: PaymentType, draftValues: PaymentFormDraftValues) => void;
};
declare function PaymentTypeInlineForm({ paymentType, selectionId, amountValue, valueOverrides, hideAmountField, surfaceChrome, onActionsChange, onPromptStateChange, onPreparedValues, onValuesChange, }: PaymentTypeInlineFormProps): import("react/jsx-runtime").JSX.Element;
export default PaymentTypeInlineForm;
//# sourceMappingURL=PaymentTypeInlineForm.d.ts.map