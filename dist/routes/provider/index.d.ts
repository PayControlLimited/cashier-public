import { PaymentsResponse } from '../../../../api/src/payments.js';
import { RedirectType, RedirectWithType } from '../../utils/redirect.js';
export type ProviderSearch = {
    redirectUrl?: RedirectWithType['url'];
    paymentId?: PaymentsResponse['paymentId'];
    redirectMethod?: RedirectWithType['method'];
    redirectData?: string;
    redirectType?: RedirectType;
    redirectScriptId?: RedirectWithType['scriptId'];
};
export declare const Route: import('@tanstack/router-core').Route<import('@tanstack/react-router').Register, import('@tanstack/react-router').RootRoute<import('@tanstack/react-router').Register, undefined, {}, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/provider", "/provider/", "/provider/", "/provider/", (search: Record<string, unknown>) => ProviderSearch, import('@tanstack/router-core').ResolveParams<"/provider">, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
export declare function RouteComponent(): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=index.d.ts.map