import { HeadlessProtectedSurface } from '../../../cashier-core/src/index.ts';
import { BrowserProviderAction } from './providerAction.js';
/** Browser effects only. Payment outcome and status remain owned by the tracker. */
export declare const createProviderSurface: ({ instanceId, authorityId, changed: notifyRuntime, flowDone, text, reportFlowDone, isAttached, }: {
    instanceId: string;
    authorityId?: string;
    changed: () => void;
    flowDone: () => void;
    text: (key: string) => string;
    isAttached?: () => boolean;
    reportFlowDone?: boolean;
}) => {
    subscribe: (listener: () => void) => () => void;
    getRevision: () => number;
    refreshPresentation: () => void;
    manualFailures: () => number;
    sync: (paymentId: string | null, payment: unknown, merchantOwnsWindow: boolean, canExecute?: boolean) => BrowserProviderAction;
    presentation: () => "iframe" | "window" | undefined;
    descriptor: () => HeadlessProtectedSurface | undefined;
    finish: (paymentId: string) => boolean;
    interrupted: () => boolean;
    finished: () => boolean;
    canOpen: () => boolean;
    open: () => boolean;
    mount: (id: string, container: HTMLElement, renderNotice?: boolean) => Readonly<{
        destroy: () => void;
    }>;
    dispose: () => void;
};
//# sourceMappingURL=providerSurface.d.ts.map