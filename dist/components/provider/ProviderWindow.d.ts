import { RedirectMethod } from '../../utils/redirect.js';
type Props = {
    redirectUrl: string;
    redirectMethod: RedirectMethod;
    hiddenFields: Array<[string, string]>;
    providerStepKey?: string | null;
};
declare const ProviderWindow: ({ redirectUrl, redirectMethod, hiddenFields, providerStepKey, }: Props) => import("react/jsx-runtime").JSX.Element;
export default ProviderWindow;
//# sourceMappingURL=ProviderWindow.d.ts.map