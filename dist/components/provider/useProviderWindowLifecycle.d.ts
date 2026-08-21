import { ProviderWindowOpenSource } from '../../utils/providerWindow.js';
type ProviderWindowLifecycleParams = {
    providerStepKey?: string | null;
    status?: string;
    ownerKey?: string | null;
    openWindow: (source: ProviderWindowOpenSource) => Promise<Window | null> | Window | null;
    onCleanup?: () => void;
};
declare const useProviderWindowLifecycle: ({ providerStepKey, status, ownerKey, openWindow, onCleanup, }: ProviderWindowLifecycleParams) => void;
export default useProviderWindowLifecycle;
//# sourceMappingURL=useProviderWindowLifecycle.d.ts.map