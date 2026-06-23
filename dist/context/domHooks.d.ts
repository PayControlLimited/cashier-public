import { ReactNode } from 'react';
export declare const createDomSlugTracker: () => (rawValue: string | null | undefined, fallback?: string) => string;
type DomHookOptions = {
    slug?: string | null | undefined;
    fallbackSlug?: string;
    part?: string | null | undefined;
    fallbackPart?: string;
};
type DomAttrs = {
    'className': string;
    'data-pc-slot': string;
    'data-pc-slug'?: string;
    'data-pc-part'?: string;
};
export type CashierDomHooksValue = {
    prefix: string;
    baseClass: string;
    id: (slot: string, options?: DomHookOptions) => string;
    className: (slot: string, options?: DomHookOptions) => string;
    attrs: (slot: string, options?: DomHookOptions) => DomAttrs;
    token: (rawValue: string | null | undefined, fallback?: string) => string;
};
type CashierDomHooksProviderProps = {
    prefix?: string | null;
    children: ReactNode;
};
export declare function CashierDomHooksProvider({ prefix, children, }: CashierDomHooksProviderProps): ReactNode;
export declare const useCashierDomHooks: () => CashierDomHooksValue;
export {};
//# sourceMappingURL=domHooks.d.ts.map