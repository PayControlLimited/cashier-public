import { RedirectDataRecord } from '../utils/redirect.js';
export type ProviderScriptPresentation = 'inline' | 'window';
export type ProviderScriptNavigateOptions = {
    replace?: boolean;
};
export type ProviderScriptNavigate = (targetUrl: string, options?: ProviderScriptNavigateOptions) => void;
export type ProviderScriptBaseContext = {
    scriptUrl: string;
    data: RedirectDataRecord;
    returnUrl?: string;
    navigate?: ProviderScriptNavigate;
};
export type ProviderScriptRenderContext = ProviderScriptBaseContext & {
    signal: AbortSignal;
    targetId: string;
};
export type ProviderScriptCleanup = () => void;
export type ProviderScriptMountPayload = {
    doc: Document;
    container: HTMLElement;
    context: ProviderScriptRenderContext;
};
export type ProviderScriptTemplateContent = DocumentFragment | Node | Node[];
export type ProviderScriptTemplateFactory = (doc: Document, context: ProviderScriptRenderContext) => ProviderScriptTemplateContent;
export type ProviderScriptDefinition = {
    id: string;
    presentation: ProviderScriptPresentation;
    template: ProviderScriptTemplateFactory;
    isAllowedUrl?: (url: URL) => boolean;
    isReady?: (doc: Document) => boolean;
    setup?: (payload: ProviderScriptMountPayload) => (ProviderScriptCleanup | undefined | Promise<ProviderScriptCleanup | undefined>);
};
//# sourceMappingURL=types.d.ts.map