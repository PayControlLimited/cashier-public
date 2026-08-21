import { ProviderScriptBaseContext, ProviderScriptCleanup, ProviderScriptDefinition } from './types.js';
type ProviderScriptMountSession = {
    signal: AbortSignal;
    targetId: string;
    root: HTMLElement;
    isCurrent: () => boolean;
    assertCurrent: () => void;
    addCleanup: (cleanup: ProviderScriptCleanup) => void;
    cleanup: ProviderScriptCleanup;
};
export type StartedProviderScriptMount = {
    session: ProviderScriptMountSession;
    completion: Promise<void>;
};
type StartProviderScriptMountParams = {
    definition: ProviderScriptDefinition;
    doc: Document;
    container: HTMLElement;
    context: ProviderScriptBaseContext;
    targetIdPrefix: string;
    onCleanupError?: (error: unknown) => void;
};
export declare const isProviderScriptMountCancelled: (error: unknown) => boolean;
export declare const startProviderScriptMount: ({ definition, doc, container, context, targetIdPrefix, onCleanupError, }: StartProviderScriptMountParams) => StartedProviderScriptMount;
export {};
//# sourceMappingURL=lifecycle.d.ts.map