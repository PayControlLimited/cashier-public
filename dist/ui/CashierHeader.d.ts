import { ReactNode } from 'react';
type CashierHeaderProps = {
    title?: ReactNode;
    subtitle?: ReactNode;
    leading?: ReactNode;
    trailing?: ReactNode;
    titleMeta?: ReactNode;
    variant?: CashierHeaderVariant;
    layout?: 'stacked' | 'row';
    stuckLayout?: 'stacked' | 'row';
    className?: string;
    layoutClassName?: string;
    titleWrapperClassName?: string;
    titleClassName?: string;
    subtitleClassName?: string;
    leadingClassName?: string;
    trailingClassName?: string;
    titleMetaClassName?: string;
};
type CashierHeaderVariant = 'default' | 'details';
declare function CashierHeader({ title, subtitle, leading, trailing, titleMeta, variant, layout, stuckLayout, className, layoutClassName, titleWrapperClassName, titleClassName, subtitleClassName, leadingClassName, trailingClassName, titleMetaClassName, }: CashierHeaderProps): import("react").JSX.Element | null;
export default CashierHeader;
//# sourceMappingURL=CashierHeader.d.ts.map