import { ReactNode } from 'react';
import { InteractivePromptDescriptor } from '../utils/interactivePrompt.js';
type PendingWithdrawalCancellationContextValue = {
    interactivePromptContent: InteractivePromptDescriptor | null;
    pendingWithdrawalDrawer: ReactNode | null;
    attachSuccessFooter: (content: InteractivePromptDescriptor) => InteractivePromptDescriptor;
};
export declare function PendingWithdrawalCancellationProvider({ children, }: {
    children: ReactNode;
}): import("react").JSX.Element;
export declare const usePendingWithdrawalCancellation: () => PendingWithdrawalCancellationContextValue;
export {};
//# sourceMappingURL=pendingWithdrawalCancellation.d.ts.map