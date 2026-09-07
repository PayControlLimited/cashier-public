import { ReactNode } from 'react';
import { CashierPresentationText } from '../types/presentation.js';
export type StatusHeaderTheme = 'success' | 'danger' | 'info' | 'neutral' | 'secondary';
type StatusHeaderProps = {
    title?: ReactNode;
    subtitle?: ReactNode;
    presentationTitle?: CashierPresentationText;
    presentationSubtitle?: CashierPresentationText;
    theme?: StatusHeaderTheme;
    leading?: ReactNode;
    className?: string;
    subtitleClassName?: string;
};
export declare const STATUS_HEADER_VISUAL_CLASS_NAME = "h-full w-full text-inherit";
export declare function StatusHeaderLoader(): import("react").JSX.Element;
declare function StatusHeader({ title, subtitle, presentationTitle, presentationSubtitle, theme, leading, className, subtitleClassName, }: StatusHeaderProps): import("react").JSX.Element;
export default StatusHeader;
//# sourceMappingURL=StatusHeader.d.ts.map