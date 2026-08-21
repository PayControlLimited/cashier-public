import { PaymentSummaryField } from '../../../api/src/payments.ts';
import { UiVariant } from '../../../ui/src/client.js';
import { ReactNode } from 'react';
import { EntranceAnimationDirection, SelectionListAnimationStyleOptions } from '../utils/entranceAnimation.js';
type PaymentSummaryDetailsPanelBorderEdges = 'all' | 'without-top';
type PaymentSummaryDetailsSurfaceChrome = 'panel' | 'plain';
type PaymentSummaryDetailsProps = {
    summaryFields: PaymentSummaryField[];
    variant?: UiVariant | null;
    rowVariants?: Partial<Record<string, UiVariant>>;
    className?: string;
    children?: ReactNode;
    panelBorderEdges?: PaymentSummaryDetailsPanelBorderEdges;
    surfaceChrome?: PaymentSummaryDetailsSurfaceChrome;
    animationDirection?: EntranceAnimationDirection;
    animationStyleOptions?: SelectionListAnimationStyleOptions;
    animateEntrance?: boolean;
};
export default function PaymentSummaryDetails({ summaryFields, variant, rowVariants, className, children, panelBorderEdges, surfaceChrome, animationDirection, animationStyleOptions, animateEntrance, }: PaymentSummaryDetailsProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=PaymentSummaryDetails.d.ts.map