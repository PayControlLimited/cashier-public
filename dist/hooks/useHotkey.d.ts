import { RefObject } from 'react';
type InputType = 'text' | 'numeric' | 'decimal' | 'alphanumeric' | 'alphabetic';
type Options<TElement extends HTMLElement = HTMLInputElement> = {
    inputRef?: RefObject<TElement | null>;
    onType?: (event: KeyboardEvent) => void;
    shouldHandleKey?: (event: KeyboardEvent) => boolean;
    isEventTargetInteractive?: (target: EventTarget | null) => boolean;
    inputType?: InputType;
    onBack?: () => void;
    backKey?: 'Escape' | 'Backspace';
};
export declare const useHotkey: <TElement extends HTMLElement = HTMLInputElement>({ inputRef, onType, shouldHandleKey, isEventTargetInteractive, inputType, onBack, backKey: providedBackKey, }: Options<TElement>) => void;
export {};
//# sourceMappingURL=useHotkey.d.ts.map