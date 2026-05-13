import { CSSProperties, ReactNode } from 'react';
import { CashierLayoutListType } from '../types/CashierConfig.js';
type SelectableListLayoutProps = {
    children: ReactNode;
    id?: string;
    className?: string;
    contentClassName?: string;
    contentStyle?: CSSProperties;
    listStyle?: CashierLayoutListType;
    compact?: boolean;
    stacked?: boolean;
};
declare function SelectableListLayout({ children, id, className, contentClassName, contentStyle, listStyle, compact, stacked, }: SelectableListLayoutProps): import("react/jsx-runtime").JSX.Element;
export default SelectableListLayout;
//# sourceMappingURL=SelectableListLayout.d.ts.map