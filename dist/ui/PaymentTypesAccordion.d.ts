import { ReactNode } from 'react';
import { UiAppearance, UiVariant } from '../../../ui/src/client.js';
import { PaymentType } from '../types/payment.js';
type PaymentTypesAccordionProps = {
    paymentTypes: PaymentType[];
    selectedPaymentType?: string | null;
    onSelect?: (id: string) => void;
    renderPanel: (paymentType: PaymentType) => ReactNode;
    hasPanel?: (paymentType: PaymentType) => boolean;
    showMeta?: boolean;
    compact?: boolean;
    renderActions?: (paymentType: PaymentType) => ReactNode;
    isPaymentTypeDisabled?: (paymentType: PaymentType) => boolean;
    preserveDisabledSelection?: boolean;
    itemVariant?: UiVariant;
    itemAppearance?: UiAppearance;
    includeItemDataTheme?: boolean;
    domScope?: string;
    animateItems?: boolean;
};
declare function PaymentTypesAccordion({ paymentTypes, selectedPaymentType, onSelect, renderPanel, hasPanel, showMeta, compact, renderActions, isPaymentTypeDisabled, preserveDisabledSelection, itemVariant, itemAppearance, includeItemDataTheme, domScope, animateItems, }: PaymentTypesAccordionProps): import("react/jsx-runtime").JSX.Element;
export default PaymentTypesAccordion;
//# sourceMappingURL=PaymentTypesAccordion.d.ts.map