import { RedirectType, RedirectWithType } from '../../utils/redirect.js';
type Props = {
    paymentId?: string;
    redirectUrl: NonNullable<RedirectWithType['url']>;
    redirectMethod?: RedirectWithType['method'];
    redirectData?: string;
    redirectType?: RedirectType;
    redirectScriptId?: RedirectWithType['scriptId'];
};
declare const ProviderRedirect: ({ paymentId, redirectUrl, redirectMethod, redirectData, redirectType, redirectScriptId, }: Props) => import("react/jsx-runtime").JSX.Element;
export default ProviderRedirect;
//# sourceMappingURL=ProviderRedirect.d.ts.map