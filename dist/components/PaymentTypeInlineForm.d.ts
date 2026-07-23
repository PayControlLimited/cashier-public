import { ReactNode } from 'react';
import { PaymentFormActions, PaymentFormDraftValues, PaymentFormPromptState, PreparedPaymentFormValues, PaymentFormValues } from './PaymentForm.js';
import { PaymentType } from '../types/payment.js';
type PaymentTypeInlineFormProps = {
    paymentType: PaymentType;
    selectionId?: string;
    amountValue: string;
    valueOverrides?: Partial<PaymentFormValues>;
    hideAmountField?: boolean;
    renderAfterAmountField?: ReactNode;
    surfaceChrome?: 'contained' | 'plain';
    fieldPanelMode?: 'auto' | 'none';
    onActionsChange: (actions: PaymentFormActions) => void;
    onPromptStateChange: (paymentTypeName: string, state: PaymentFormPromptState) => void;
    onPreparedValues: (paymentType: PaymentType, preparedValues: PreparedPaymentFormValues) => void;
    onValuesChange: (paymentType: PaymentType, draftValues: PaymentFormDraftValues) => void;
    submitMode?: 'prepare' | 'submit';
    reserveTrailingActionSpace?: boolean;
    animateEntrance?: boolean;
    observePublicState?: boolean;
    onPaymentSubmitted?: () => void;
};
declare function PaymentTypeInlineForm({ paymentType, selectionId, amountValue, valueOverrides, hideAmountField, renderAfterAmountField, surfaceChrome, fieldPanelMode, onActionsChange, onPromptStateChange, onPreparedValues, onValuesChange, submitMode, reserveTrailingActionSpace, animateEntrance, observePublicState, onPaymentSubmitted, }: PaymentTypeInlineFormProps): import("react/jsx-runtime").JSX.Element;
export default PaymentTypeInlineForm;
//# sourceMappingURL=PaymentTypeInlineForm.d.ts.map