import { RedirectType, RedirectWithType } from '../../utils/redirect.js';
type Props = {
    paymentId?: string;
    redirectUrl: NonNullable<RedirectWithType['url']>;
    redirectMethod?: RedirectWithType['method'];
    redirectData?: string;
    redirectType?: RedirectType;
    redirectScriptId?: RedirectWithType['scriptId'];
    timeout?: RedirectWithType['timeout'];
};
declare const ProviderRedirect: (props: Props) => import('react').JSX.Element;
export default ProviderRedirect;
//# sourceMappingURL=ProviderRedirect.d.ts.map