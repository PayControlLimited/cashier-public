import { ReactNode } from 'react';
export type StatusHeaderTheme = 'success' | 'danger' | 'info' | 'neutral' | 'secondary';
type StatusHeaderProps = {
    title?: ReactNode;
    subtitle?: ReactNode;
    theme?: StatusHeaderTheme;
    leading?: ReactNode;
    className?: string;
    subtitleClassName?: string;
};
export declare const STATUS_HEADER_VISUAL_CLASS_NAME = "h-full w-full text-inherit";
export declare function StatusHeaderLoader(): import("react/jsx-runtime").JSX.Element;
declare function StatusHeader({ title, subtitle, theme, leading, className, subtitleClassName, }: StatusHeaderProps): import("react/jsx-runtime").JSX.Element;
export default StatusHeader;
//# sourceMappingURL=StatusHeader.d.ts.map