/** One browser resource, shared across cooperating Cashier bundles. No payment state. */
type ProviderWindowBroker = {
    version: 1;
    handle: Window | null;
    owner: string | null;
    closedOwners: Set<string>;
};
export declare const getProviderWindowBroker: () => ProviderWindowBroker;
export {};
//# sourceMappingURL=providerWindowBroker.d.ts.map