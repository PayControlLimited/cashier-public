import { ProviderScriptDefinition, ProviderScriptMountPayload, ProviderScriptRenderContext } from './types.js';
export declare const TRUMO_PAYIN_SCRIPT_ID = "trumo_payin";
type TrumoMessageOptions = {
    expectedOrigin: string;
    expectedOrderIDs: string[];
    expectedSource?: MessageEventSource | null;
    targetWindow: Window;
    onPopupRequested?: (popupUrl: string) => void;
    onPopupBlocked?: (popupUrl: string) => void;
    onPopupOpened?: (openedWindow: Window) => void;
};
export declare const handleTrumoPayinMessage: (event: MessageEvent, { expectedOrigin, expectedOrderIDs, expectedSource, targetWindow, onPopupRequested, onPopupBlocked, onPopupOpened, }: TrumoMessageOptions) => boolean;
export declare const trumoPayinTemplate: (doc: Document, context: ProviderScriptRenderContext) => DocumentFragment;
export declare const setupTrumoPayinMessages: ({ doc, container, context, }: ProviderScriptMountPayload) => (() => void) | undefined;
export declare const trumoPayinScript: ProviderScriptDefinition;
export {};
//# sourceMappingURL=trumo.d.ts.map