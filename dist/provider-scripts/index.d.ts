import { mifinityPayinScript } from './mifinity.js';
import { trumoPayinScript } from './trumo.js';
export declare const providerScriptRegistry: {
    [mifinityPayinScript.id]: import('./types.js').ProviderScriptDefinition;
    [trumoPayinScript.id]: import('./types.js').ProviderScriptDefinition;
};
export { takeProviderScriptOnLoad, } from './template.js';
export type { ProviderScriptDefinition, ProviderScriptCleanup, ProviderScriptPresentation, ProviderScriptRenderContext, ProviderScriptTemplate, ProviderScriptTemplateContent, } from './types.js';
//# sourceMappingURL=index.d.ts.map