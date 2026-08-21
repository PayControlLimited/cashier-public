import { ProviderScriptRenderContext, ProviderScriptTemplateFactory } from './types.js';
export type ProviderScriptTemplateBuilderOptions = {
    createTargetContainer?: boolean;
    containerClassName?: string;
    configureScript?: (script: HTMLScriptElement, context: ProviderScriptRenderContext) => void;
    onLoad?: (payload: {
        doc: Document;
        context: ProviderScriptRenderContext;
        container?: HTMLElement;
        script: HTMLScriptElement;
    }) => void;
};
export declare const takeProviderScriptOnLoad: (script: HTMLScriptElement) => (() => void) | undefined;
export declare const buildProviderScriptTemplate: ({ createTargetContainer, containerClassName, configureScript, onLoad, }: ProviderScriptTemplateBuilderOptions) => ProviderScriptTemplateFactory;
//# sourceMappingURL=template.d.ts.map