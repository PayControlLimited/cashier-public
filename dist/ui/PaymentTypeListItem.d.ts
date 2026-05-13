import { CSSProperties, ReactNode } from 'react';
import { UiAppearance, UiShape, UiVariant } from '../../../ui/src/client.js';
import { CashierLayoutListType } from '../types/CashierConfig.js';
import { PaymentType, PaymentTypeLogoSource } from '../types/payment.js';
type PaymentTypeListItemProps = Pick<PaymentType, 'name'> & Partial<Pick<PaymentType, 'limits' | 'fee'>> & {
    selectionId?: string;
    domSlug?: string;
    logo?: PaymentTypeLogoSource;
    logoContent?: ReactNode;
    onSelect?: (id: string) => void;
    listStyle?: CashierLayoutListType;
    compact?: boolean;
    variant?: UiVariant;
    appearance?: UiAppearance;
    shape?: UiShape;
    showMeta?: boolean;
    title?: string;
    description?: string;
    meta?: ReactNode;
    isSelected?: boolean;
    showSelectedIndicator?: boolean;
    bonusLabel?: ReactNode | null;
    badges?: Array<{
        id: string;
        label: ReactNode;
        variant?: UiVariant;
    }>;
    hasAvailableBonuses?: boolean;
    interactive?: boolean;
    includeDataTheme?: boolean;
    hoverMode?: 'self' | 'group' | 'none';
    isDisabled?: boolean;
    balanceLogo?: boolean;
    embedded?: boolean;
    actions?: ReactNode;
    actionStopsPropagation?: boolean;
    className?: string;
    animationClassName?: string;
    animationStyle?: CSSProperties;
    infoDrawer?: {
        titleKey: string;
        content: ReactNode;
        ariaLabelKey?: string;
        icon?: ReactNode;
    };
};
declare function PaymentTypeListItem({ name, selectionId, domSlug, logo, logoContent, limits, fee, onSelect, listStyle, compact, variant, appearance, shape, showMeta, title, description, meta, isSelected, showSelectedIndicator, bonusLabel, badges, hasAvailableBonuses, interactive, includeDataTheme, hoverMode, isDisabled, balanceLogo, embedded, actions, actionStopsPropagation, className, animationClassName, animationStyle, infoDrawer, }: PaymentTypeListItemProps): import("react/jsx-runtime").JSX.Element;
export default PaymentTypeListItem;
//# sourceMappingURL=PaymentTypeListItem.d.ts.map