import { PaymentSummaryField } from '../../../api/src/payments.ts';
import { UiOrientation, UiVariant } from '../../../ui/src/client.js';
import { ReactNode } from 'react';
import { EntranceAnimationDirection, SelectionListAnimationStyleOptions } from '../utils/entranceAnimation.js';
type PaymentSummaryDetailsFlush = boolean | readonly UiOrientation[];
type PaymentSummaryDetailsProps = {
    summaryFields: PaymentSummaryField[];
    variant?: UiVariant;
    rowVariants?: Partial<Record<string, UiVariant>>;
    className?: string;
    children?: ReactNode;
    flush?: PaymentSummaryDetailsFlush;
    animationDirection?: EntranceAnimationDirection;
    animationStyleOptions?: SelectionListAnimationStyleOptions;
};
export default function PaymentSummaryDetails({ summaryFields, variant, rowVariants, className, children, flush, animationDirection, animationStyleOptions, }: PaymentSummaryDetailsProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=PaymentSummaryDetails.d.ts.map