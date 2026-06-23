import { RedirectDataRecord } from '../utils/redirect.js';
export type ProviderScriptPresentation = 'inline' | 'window';
export type ProviderScriptNavigateOptions = {
    replace?: boolean;
};
export type ProviderScriptNavigate = (targetUrl: string, options?: ProviderScriptNavigateOptions) => void;
export type ProviderScriptRenderContext = {
    scriptUrl: string;
    data: RedirectDataRecord;
    returnUrl?: string;
    navigate?: ProviderScriptNavigate;
};
export type ProviderScriptCleanup = () => void;
export type ProviderScriptMountPayload = {
    doc: Document;
    container: HTMLElement;
    context: ProviderScriptRenderContext;
};
export type ProviderScriptTemplateContent = DocumentFragment | Node | Node[];
export type ProviderScriptTemplateFactory = (doc: Document, context: ProviderScriptRenderContext) => ProviderScriptTemplateContent;
export type ProviderScriptTemplate = (ProviderScriptTemplateContent | ProviderScriptTemplateFactory);
export type ProviderScriptDefinition = {
    id: string;
    presentation: ProviderScriptPresentation;
    template: ProviderScriptTemplate;
    isAllowedUrl?: (url: URL) => boolean;
    render?: (template: ProviderScriptTemplate, context: ProviderScriptRenderContext) => ProviderScriptTemplate;
    setup?: (payload: ProviderScriptMountPayload) => ProviderScriptCleanup | undefined;
};
//# sourceMappingURL=types.d.ts.map