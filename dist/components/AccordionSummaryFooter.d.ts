import { PaymentSummaryField } from '../../../api/src/payments.ts';
import { UiVariant } from '../../../ui/src/client.js';
type AccordionSummaryFooterProps = {
    summaryFields: PaymentSummaryField[];
    rowVariants?: Partial<Record<string, UiVariant>>;
};
export default function AccordionSummaryFooter({ summaryFields, rowVariants, }: AccordionSummaryFooterProps): import("react").JSX.Element | null;
export {};
//# sourceMappingURL=AccordionSummaryFooter.d.ts.map