import { StatusHeaderTheme } from './StatusHeader.js';
import { CashierStateScreenId } from '../types/presentation.js';
type StatusTextProps = {
    text: string;
    subtitle?: string;
    theme?: StatusHeaderTheme;
    withLoader?: boolean;
    presentationScreen?: Extract<CashierStateScreenId, 'empty' | 'error' | 'unsupported'>;
};
declare function StatusText({ text, subtitle, theme, withLoader, presentationScreen, }: StatusTextProps): import("react").JSX.Element;
export default StatusText;
//# sourceMappingURL=StatusText.d.ts.map