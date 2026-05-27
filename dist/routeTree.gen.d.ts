import { Route as rootRouteImport } from './routes/__root.js';
import { Route as IndexRouteImport } from './routes/index.js';
import { Route as QuickPaymentIndexRouteImport } from './routes/quick-payment/index.js';
import { Route as ProviderIndexRouteImport } from './routes/provider/index.js';
import { Route as BonusIndexRouteImport } from './routes/bonus/index.js';
import { Route as SummaryIdRouteImport } from './routes/summary/$id.js';
import { Route as PtsMethodRouteImport } from './routes/pts/$method.js';
import { Route as PtIdRouteImport } from './routes/pt/$id.js';
declare const IndexRoute: import('@tanstack/router-core').Route<import('@tanstack/react-router').Register, import('@tanstack/react-router').RootRoute<import('@tanstack/react-router').Register, undefined, {}, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/", "/", "/", "/", undefined, import('@tanstack/router-core').ResolveParams<"/">, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, ({ context }: import('@tanstack/router-core').BeforeLoadContextOptions<import('@tanstack/react-router').Register, import('@tanstack/react-router').RootRoute<import('@tanstack/react-router').Register, undefined, {}, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, undefined, import('@tanstack/router-core').ResolveParams<"/">, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, "/", unknown, undefined>) => never, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const QuickPaymentIndexRoute: import('@tanstack/router-core').Route<import('@tanstack/react-router').Register, import('@tanstack/react-router').RootRoute<import('@tanstack/react-router').Register, undefined, {}, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/quick-payment", "/quick-payment/", "/quick-payment/", "/quick-payment/", undefined, import('@tanstack/router-core').ResolveParams<"/quick-payment">, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, ({ context }: import('@tanstack/router-core').BeforeLoadContextOptions<import('@tanstack/react-router').Register, import('@tanstack/react-router').RootRoute<import('@tanstack/react-router').Register, undefined, {}, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, undefined, import('@tanstack/router-core').ResolveParams<"/quick-payment">, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, "/quick-payment/", unknown, undefined>) => void, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const ProviderIndexRoute: import('@tanstack/router-core').Route<import('@tanstack/react-router').Register, import('@tanstack/react-router').RootRoute<import('@tanstack/react-router').Register, undefined, {}, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/provider", "/provider/", "/provider/", "/provider/", (search: Record<string, unknown>) => import('./routes/provider/index.js').ProviderSearch, import('@tanstack/router-core').ResolveParams<"/provider">, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const BonusIndexRoute: import('@tanstack/router-core').Route<import('@tanstack/react-router').Register, import('@tanstack/react-router').RootRoute<import('@tanstack/react-router').Register, undefined, {}, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/bonus", "/bonus/", "/bonus/", "/bonus/", undefined, import('@tanstack/router-core').ResolveParams<"/bonus">, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const SummaryIdRoute: import('@tanstack/router-core').Route<import('@tanstack/react-router').Register, import('@tanstack/react-router').RootRoute<import('@tanstack/react-router').Register, undefined, {}, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/summary/$id", "/summary/$id", "/summary/$id", "/summary/$id", (search: Record<string, unknown>) => {
    merchantId: string;
}, import('@tanstack/router-core').ResolveParams<"/summary/$id">, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, ({ context, params, search }: import('@tanstack/router-core').BeforeLoadContextOptions<import('@tanstack/react-router').Register, import('@tanstack/react-router').RootRoute<import('@tanstack/react-router').Register, undefined, {}, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, (search: Record<string, unknown>) => {
    merchantId: string;
}, import('@tanstack/router-core').ResolveParams<"/summary/$id">, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, "/summary/$id", unknown, undefined>) => void, {
    merchantId: string;
}, ({ params, deps, }: import('@tanstack/router-core').LoaderFnContext<import('@tanstack/react-router').Register, import('@tanstack/react-router').RootRoute<import('@tanstack/react-router').Register, undefined, {}, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/summary/$id", import('@tanstack/router-core').ResolveParams<"/summary/$id">, {
    merchantId: string;
}, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, ({ context, params, search }: import('@tanstack/router-core').BeforeLoadContextOptions<import('@tanstack/react-router').Register, import('@tanstack/react-router').RootRoute<import('@tanstack/react-router').Register, undefined, {}, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, (search: Record<string, unknown>) => {
    merchantId: string;
}, import('@tanstack/router-core').ResolveParams<"/summary/$id">, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, "/summary/$id", unknown, undefined>) => void, unknown, undefined>) => Promise<import('../../api/src/payments.ts').PaymentSummaryResponse | undefined>, unknown, unknown, unknown, unknown, undefined>;
declare const PtsMethodRoute: import('@tanstack/router-core').Route<import('@tanstack/react-router').Register, import('@tanstack/react-router').RootRoute<import('@tanstack/react-router').Register, undefined, {}, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/pts/$method", "/pts/$method", "/pts/$method", "/pts/$method", undefined, import('@tanstack/router-core').ResolveParams<"/pts/$method">, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, {}, ({ context }: import('@tanstack/router-core').LoaderFnContext<import('@tanstack/react-router').Register, import('@tanstack/react-router').RootRoute<import('@tanstack/react-router').Register, undefined, {}, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/pts/$method", import('@tanstack/router-core').ResolveParams<"/pts/$method">, {}, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, unknown, undefined>) => Promise<{
    paymentTypes: import('../../api/src/payments.ts').PaymentType[];
}>, unknown, unknown, unknown, unknown, undefined>;
declare const PtIdRoute: import('@tanstack/router-core').Route<import('@tanstack/react-router').Register, import('@tanstack/react-router').RootRoute<import('@tanstack/react-router').Register, undefined, {}, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/pt/$id", "/pt/$id", "/pt/$id", "/pt/$id", undefined, import('@tanstack/router-core').ResolveParams<"/pt/$id">, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
export interface FileRoutesByFullPath {
    '/': typeof IndexRoute;
    '/pt/$id': typeof PtIdRoute;
    '/pts/$method': typeof PtsMethodRoute;
    '/summary/$id': typeof SummaryIdRoute;
    '/bonus/': typeof BonusIndexRoute;
    '/provider/': typeof ProviderIndexRoute;
    '/quick-payment/': typeof QuickPaymentIndexRoute;
}
export interface FileRoutesByTo {
    '/': typeof IndexRoute;
    '/pt/$id': typeof PtIdRoute;
    '/pts/$method': typeof PtsMethodRoute;
    '/summary/$id': typeof SummaryIdRoute;
    '/bonus': typeof BonusIndexRoute;
    '/provider': typeof ProviderIndexRoute;
    '/quick-payment': typeof QuickPaymentIndexRoute;
}
export interface FileRoutesById {
    __root__: typeof rootRouteImport;
    '/': typeof IndexRoute;
    '/pt/$id': typeof PtIdRoute;
    '/pts/$method': typeof PtsMethodRoute;
    '/summary/$id': typeof SummaryIdRoute;
    '/bonus/': typeof BonusIndexRoute;
    '/provider/': typeof ProviderIndexRoute;
    '/quick-payment/': typeof QuickPaymentIndexRoute;
}
export interface FileRouteTypes {
    fileRoutesByFullPath: FileRoutesByFullPath;
    fullPaths: '/' | '/pt/$id' | '/pts/$method' | '/summary/$id' | '/bonus/' | '/provider/' | '/quick-payment/';
    fileRoutesByTo: FileRoutesByTo;
    to: '/' | '/pt/$id' | '/pts/$method' | '/summary/$id' | '/bonus' | '/provider' | '/quick-payment';
    id: '__root__' | '/' | '/pt/$id' | '/pts/$method' | '/summary/$id' | '/bonus/' | '/provider/' | '/quick-payment/';
    fileRoutesById: FileRoutesById;
}
export interface RootRouteChildren {
    IndexRoute: typeof IndexRoute;
    PtIdRoute: typeof PtIdRoute;
    PtsMethodRoute: typeof PtsMethodRoute;
    SummaryIdRoute: typeof SummaryIdRoute;
    BonusIndexRoute: typeof BonusIndexRoute;
    ProviderIndexRoute: typeof ProviderIndexRoute;
    QuickPaymentIndexRoute: typeof QuickPaymentIndexRoute;
}
declare module '@tanstack/react-router' {
    interface FileRoutesByPath {
        '/': {
            id: '/';
            path: '/';
            fullPath: '/';
            preLoaderRoute: typeof IndexRouteImport;
            parentRoute: typeof rootRouteImport;
        };
        '/quick-payment/': {
            id: '/quick-payment/';
            path: '/quick-payment';
            fullPath: '/quick-payment/';
            preLoaderRoute: typeof QuickPaymentIndexRouteImport;
            parentRoute: typeof rootRouteImport;
        };
        '/provider/': {
            id: '/provider/';
            path: '/provider';
            fullPath: '/provider/';
            preLoaderRoute: typeof ProviderIndexRouteImport;
            parentRoute: typeof rootRouteImport;
        };
        '/bonus/': {
            id: '/bonus/';
            path: '/bonus';
            fullPath: '/bonus/';
            preLoaderRoute: typeof BonusIndexRouteImport;
            parentRoute: typeof rootRouteImport;
        };
        '/summary/$id': {
            id: '/summary/$id';
            path: '/summary/$id';
            fullPath: '/summary/$id';
            preLoaderRoute: typeof SummaryIdRouteImport;
            parentRoute: typeof rootRouteImport;
        };
        '/pts/$method': {
            id: '/pts/$method';
            path: '/pts/$method';
            fullPath: '/pts/$method';
            preLoaderRoute: typeof PtsMethodRouteImport;
            parentRoute: typeof rootRouteImport;
        };
        '/pt/$id': {
            id: '/pt/$id';
            path: '/pt/$id';
            fullPath: '/pt/$id';
            preLoaderRoute: typeof PtIdRouteImport;
            parentRoute: typeof rootRouteImport;
        };
    }
}
export declare const routeTree: import('@tanstack/router-core').Route<import('@tanstack/react-router').Register, any, "/", "/", string, "__root__", undefined, {}, {}, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, {}, undefined, RootRouteChildren, FileRouteTypes, unknown, unknown, undefined>;
export {};
//# sourceMappingURL=routeTree.gen.d.ts.map