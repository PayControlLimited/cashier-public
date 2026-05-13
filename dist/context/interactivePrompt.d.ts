import { ReactNode } from 'react';
type InteractivePromptSessionValue = {
    dismissPrompt: (key: string) => void;
    isPromptDismissed: (key?: string | null) => boolean;
};
export declare const useInteractivePromptSession: () => InteractivePromptSessionValue;
export declare function InteractivePromptSessionProvider({ children, }: {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=interactivePrompt.d.ts.map