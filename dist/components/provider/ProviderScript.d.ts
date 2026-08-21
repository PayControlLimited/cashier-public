import { RedirectType } from '../../utils/redirect.js';
type ProviderScriptProps = {
    providerStepKey?: string | null;
    scriptId?: string;
    redirectUrl: string;
    redirectData?: string;
    redirectType?: RedirectType;
};
declare const ProviderScript: ({ providerStepKey, scriptId, redirectUrl, redirectData, redirectType, }: ProviderScriptProps) => import("react").JSX.Element;
export default ProviderScript;
//# sourceMappingURL=ProviderScript.d.ts.map