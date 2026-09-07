import { ReactNode } from 'react';
import { CashierStateScreenId } from '../types/presentation.js';
type CashierStateScreenProps = Readonly<{
    children: ReactNode;
    id: CashierStateScreenId;
    message?: string;
    messageKey?: string;
    title: string;
    titleKey?: string;
    busy?: boolean;
    onRetry?: () => void | Promise<void>;
    onGoBack?: () => void | Promise<void>;
    overrideEnabled?: boolean;
}>;
export declare function CashierStateScreen({ busy, children, id, message, messageKey, onGoBack, onRetry, overrideEnabled, title, titleKey, }: CashierStateScreenProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=StateScreen.d.ts.map