type UseDelayedVisibilityOptions = {
    delayMs?: number;
    resetKey?: string | number | boolean | null | undefined;
};
export declare const DEFAULT_DELAYED_VISIBILITY_MS = 300;
export declare const useDelayedVisibility: (isActive: boolean, { delayMs, resetKey, }?: UseDelayedVisibilityOptions) => boolean;
export {};
//# sourceMappingURL=useDelayedVisibility.d.ts.map