import { ReactNode } from 'react';
type OverridePayloadContextValue = {
    overridePayload: string;
    setOverridePayload: (value: string) => void;
    resetOverridePayload: () => void;
    isLocked: boolean;
    setLocked: (locked: boolean) => void;
};
type OverridePayloadProviderProps = {
    children: ReactNode;
};
export declare function OverridePayloadProvider({ children, }: OverridePayloadProviderProps): ReactNode;
export declare function useOverridePayload(): OverridePayloadContextValue;
export {};
//# sourceMappingURL=overridePayload.d.ts.map