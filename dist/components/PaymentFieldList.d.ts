import { ReactNode } from 'react';
import { PaymentTypeField } from '../types/payment.js';
import { EntranceAnimationDirection } from '../utils/entranceAnimation.js';
type PaymentFieldListProps = {
    fields: readonly PaymentTypeField[];
    translateKey: (key: string | null | undefined) => string;
    disabled?: boolean;
    amountError?: string;
    amountFieldId?: string;
    renderBelowFieldContent?: (fieldId: string) => ReactNode;
    belowFieldContentInheritsTheme?: boolean;
    renderBeforeField?: (fieldId: string) => ReactNode;
    renderAfterField?: (fieldId: string, context: {
        isLastRenderableField: boolean;
    }) => ReactNode;
    animateRows?: boolean;
    animationStartIndex?: number;
    animationTotalCount?: number;
    animationDirection?: EntranceAnimationDirection;
    reserveCheckboxMessageSpace?: boolean;
};
declare const PaymentFieldList: ({ fields, translateKey, disabled, amountError, amountFieldId, renderBelowFieldContent, belowFieldContentInheritsTheme, renderBeforeField, renderAfterField, animateRows, animationStartIndex, animationTotalCount, animationDirection, reserveCheckboxMessageSpace, }: PaymentFieldListProps) => import("react/jsx-runtime").JSX.Element;
export default PaymentFieldList;
//# sourceMappingURL=PaymentFieldList.d.ts.map