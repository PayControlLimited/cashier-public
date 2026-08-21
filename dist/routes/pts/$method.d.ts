import { PaymentType } from '../../../../api/src/payments.ts';
import { CashierConfig } from '../../types/CashierConfig.js';
import { QueryClient } from '@tanstack/react-query';
type LoaderContext = Pick<CashierConfig, 'merchantId' | 'method' | 'userId' | 'sessionId' | 'currency' | 'fetchConfig' | 'debug'> & {
    queryClient: QueryClient;
};
type LoaderData = {
    paymentTypes: PaymentType[];
};
export declare const loadPtsPaymentTypes: (context: LoaderContext) => Promise<LoaderData>;
export declare const Route: import('@tanstack/router-core').Route<import('@tanstack/react-router').Register, import('@tanstack/react-router').RootRoute<import('@tanstack/react-router').Register, undefined, {}, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/pts/$method", "/pts/$method", "/pts/$method", "/pts/$method", undefined, import('@tanstack/router-core').ResolveParams<"/pts/$method">, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, {}, ({ context }: import('@tanstack/router-core').LoaderFnContext<import('@tanstack/react-router').Register, import('@tanstack/react-router').RootRoute<import('@tanstack/react-router').Register, undefined, {}, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/pts/$method", import('@tanstack/router-core').ResolveParams<"/pts/$method">, {}, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, unknown, undefined>) => Promise<LoaderData>, unknown, unknown, unknown, unknown, undefined>;
export declare function PtsView({ loaderPaymentTypes, }: {
    loaderPaymentTypes?: PaymentType[];
}): import("react").JSX.Element;
export {};
//# sourceMappingURL=$method.d.ts.map