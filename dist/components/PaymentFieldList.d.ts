import { ReactNode } from 'react';
import { PaymentTypeField } from '../types/payment.js';
import { TranslateKeysFn } from '../utils/paymentFieldUtils.js';
import { EntranceAnimationDirection } from '../utils/entranceAnimation.js';
type PaymentFieldListProps = {
    fields: readonly PaymentTypeField[];
    translateKey: (key: string | null | undefined) => string;
    translateKeys: TranslateKeysFn;
    disabled?: boolean;
    amountError?: string;
    amountFieldId?: string;
    renderBelowFieldContent?: (fieldId: string) => ReactNode;
    belowFieldContentClassName?: string;
    belowFieldContentInheritsTheme?: boolean;
    renderBeforeField?: (fieldId: string) => ReactNode;
    renderAfterField?: (fieldId: string, context: {
        isLastRenderableField: boolean;
    }) => ReactNode;
    renderAfterFieldRow?: (fieldId: string, context: {
        isLastRenderableField: boolean;
    }) => ReactNode;
    animateRows?: boolean;
    animationStartIndex?: number;
    animationTotalCount?: number;
    animationDirection?: EntranceAnimationDirection;
    reserveInputMessageSpace?: boolean;
    reserveCheckboxMessageSpace?: boolean;
    reserveLastCheckboxMessageSpace?: boolean;
    reserveLastAmountMessageSpace?: boolean;
    addFirstFieldTopPadding?: boolean;
    addLastFieldBottomPadding?: boolean;
    allowReservedLastFieldBottomPadding?: boolean;
    reserveTrailingActionClearance?: boolean;
};
declare const PaymentFieldList: ({ fields, translateKey, translateKeys, disabled, amountError, amountFieldId, renderBelowFieldContent, belowFieldContentClassName, belowFieldContentInheritsTheme, renderBeforeField, renderAfterField, renderAfterFieldRow, animateRows, animationStartIndex, animationTotalCount, animationDirection, reserveInputMessageSpace, reserveCheckboxMessageSpace, reserveLastCheckboxMessageSpace, reserveLastAmountMessageSpace, addFirstFieldTopPadding, addLastFieldBottomPadding, allowReservedLastFieldBottomPadding, reserveTrailingActionClearance, }: PaymentFieldListProps) => import("react/jsx-runtime").JSX.Element;
export default PaymentFieldList;
//# sourceMappingURL=PaymentFieldList.d.ts.map