import { CashierHandle, CashierProps } from '../types/CashierConfig.js';
import { RefObject } from 'react';
export type { CashierHandle, } from '../types/CashierConfig.js';
declare const createCashierRouter: (initialRoute: string) => import('@tanstack/router-core').RouterCore<import('@tanstack/router-core').Route<import('@tanstack/react-router').Register, any, "/", "/", string, "__root__", undefined, {}, {}, import('@tanstack/router-core').AnyContext, import('@tanstack/router-core').AnyContext, {}, undefined, import('../routeTree.gen.js').RootRouteChildren, import('../routeTree.gen.js').FileRouteTypes, unknown, unknown, undefined>, "never", false, import('@tanstack/history').RouterHistory, Record<string, any>>;
type CashierRouter = ReturnType<typeof createCashierRouter>;
declare module '@tanstack/react-router' {
    interface Register {
        router: CashierRouter;
    }
}
declare const Cashier: import('react').ForwardRefExoticComponent<CashierProps & import('react').RefAttributes<CashierHandle>>;
export default Cashier;
export type RouterScrollManagerProps = {
    router: CashierRouter;
    scrollContainerRef?: RefObject<HTMLElement | null>;
};
export declare function RouterScrollManager({ router, scrollContainerRef, }: RouterScrollManagerProps): null;
//# sourceMappingURL=cashier.d.ts.map