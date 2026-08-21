import { mifinityPayinScript } from './mifinity.js';
import { trumoPayinScript } from './trumo.js';
export declare const providerScriptRegistry: {
    [mifinityPayinScript.id]: import('./types.js').ProviderScriptDefinition;
    [trumoPayinScript.id]: import('./types.js').ProviderScriptDefinition;
};
export type { ProviderScriptDefinition, ProviderScriptBaseContext, ProviderScriptPresentation, ProviderScriptRenderContext, ProviderScriptTemplateContent, } from './types.js';
//# sourceMappingURL=index.d.ts.map