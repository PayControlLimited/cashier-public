type Redirect = Readonly<{
    kind: 'redirect';
    presentation: 'iframe' | 'window';
    method: 'GET' | 'POST';
    url: string;
    data: Readonly<Record<string, string>>;
    userFlowDoneUrl?: string;
    /** Private comparison material. Never a descriptor, diagnostic or event. */
    identity: string;
}>;
export type BrowserProviderAction = Redirect | Readonly<{
    kind: 'none' | 'invalid';
}> | Readonly<{
    kind: 'deferred';
    capability: 'provider-form' | 'provider-script' | 'hidden-iframe' | 'timed-browser-action';
    identity?: string;
}>;
/** Retain stricter execution admission without changing legacy payload mapping. */
export declare const retainProviderActionClassification: <T extends object>(normalised: T, original: Record<string, unknown>) => T;
/** Decode the whole action. A presentation kind alone never admits execution. */
export declare const classifyProviderAction: (payment: unknown) => BrowserProviderAction;
export {};
//# sourceMappingURL=providerAction.d.ts.map