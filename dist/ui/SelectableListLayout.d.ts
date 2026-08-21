import { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import { CashierLayoutListType } from '../types/CashierConfig.js';
type SelectableListLayoutProps = {
    children: ReactNode;
    id?: string;
    className?: string;
    rootAttributes?: HTMLAttributes<HTMLDivElement>;
    contentClassName?: string;
    contentAttributes?: HTMLAttributes<HTMLDivElement>;
    contentStyle?: CSSProperties;
    listStyle?: CashierLayoutListType;
    compact?: boolean;
    stacked?: boolean;
};
declare function SelectableListLayout({ children, id, className, rootAttributes, contentClassName, contentAttributes, contentStyle, listStyle, compact, stacked, }: SelectableListLayoutProps): import("react").JSX.Element;
export default SelectableListLayout;
//# sourceMappingURL=SelectableListLayout.d.ts.map