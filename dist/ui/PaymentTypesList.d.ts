import { ReactNode } from 'react';
import { UiAppearance, UiVariant } from '../../../ui/src/client.js';
import { CashierLayoutListType } from '../types/CashierConfig.js';
import { PaymentType } from '../types/payment.js';
type PaymentTypesListProps = {
    paymentTypes: PaymentType[];
    onSelect?: (id: string) => void;
    listStyle?: CashierLayoutListType;
    compact?: boolean;
    stacked?: boolean;
    showMeta?: boolean;
    selectable?: boolean;
    selectedPaymentType?: string | null;
    renderActions?: (paymentType: PaymentType) => ReactNode;
    isPaymentTypeDisabled?: (paymentType: PaymentType) => boolean;
    preserveDisabledSelection?: boolean;
    itemVariant?: UiVariant;
    itemAppearance?: UiAppearance;
    includeItemDataTheme?: boolean;
    domScope?: string;
    animateItems?: boolean;
};
declare function PaymentTypesList({ paymentTypes, onSelect, listStyle, compact, stacked, showMeta, selectable, selectedPaymentType, renderActions, isPaymentTypeDisabled, preserveDisabledSelection, itemVariant, itemAppearance, includeItemDataTheme, domScope, animateItems, }: PaymentTypesListProps): import("react/jsx-runtime").JSX.Element;
export default PaymentTypesList;
//# sourceMappingURL=PaymentTypesList.d.ts.map