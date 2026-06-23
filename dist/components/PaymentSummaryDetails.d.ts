import { PaymentSummaryField } from '../../../api/src/payments.ts';
import { UiOrientation, UiVariant } from '../../../ui/src/client.js';
import { ReactNode } from 'react';
import { EntranceAnimationDirection, SelectionListAnimationStyleOptions } from '../utils/entranceAnimation.js';
type PaymentSummaryDetailsFlush = boolean | readonly UiOrientation[];
type PaymentSummaryDetailsPanelBorderEdges = 'all' | 'without-top';
type PaymentSummaryDetailsSurfaceChrome = 'panel' | 'plain';
type PaymentSummaryDetailsProps = {
    summaryFields: PaymentSummaryField[];
    variant?: UiVariant | null;
    rowVariants?: Partial<Record<string, UiVariant>>;
    className?: string;
    children?: ReactNode;
    flush?: PaymentSummaryDetailsFlush;
    showPanelBorder?: boolean;
    panelBorderEdges?: PaymentSummaryDetailsPanelBorderEdges;
    surfaceChrome?: PaymentSummaryDetailsSurfaceChrome;
    animationDirection?: EntranceAnimationDirection;
    animationStyleOptions?: SelectionListAnimationStyleOptions;
    animateEntrance?: boolean;
};
export default function PaymentSummaryDetails({ summaryFields, variant, rowVariants, className, children, flush, showPanelBorder, panelBorderEdges, surfaceChrome, animationDirection, animationStyleOptions, animateEntrance, }: PaymentSummaryDetailsProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=PaymentSummaryDetails.d.ts.map