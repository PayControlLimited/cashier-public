import { CSSProperties, ReactNode } from 'react';
import { PaymentFormValues } from '../utils/paymentFieldUtils.js';
import { BonusEvaluationContext } from '../utils/bonuses.js';
type PaymentTypePickerProps = {
    amount?: string;
    amountDraft?: {
        paymentTypeId: string;
        values: PaymentFormValues;
    };
    animationStyle?: CSSProperties;
    bonusEvaluationContext?: BonusEvaluationContext;
    floating?: boolean | 'adaptive';
};
declare function PaymentTypePicker({ amount, amountDraft, animationStyle, bonusEvaluationContext, floating, }: PaymentTypePickerProps): ReactNode;
export default PaymentTypePicker;
//# sourceMappingURL=PaymentTypePicker.d.ts.map