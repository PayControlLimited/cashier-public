import { ReactNode } from 'react';
import { CashierPresentationAction, CashierPresentationError, CashierPresentationErrorCode, CashierPresentationErrorPhase, CashierPresentationScreenActionsMap, CashierPresentationScreenId, CashierPresentationScreenModelMap, CashierPresentationSlotActionsMap, CashierPresentationSlotId, CashierPresentationSlotModelMap, CashierPresentationSurface, CashierPresentation } from '../types/presentation.js';
export declare function CashierPresentationLocalisationProvider({ children, locale, }: {
    children: ReactNode;
    locale: Intl.Locale | string;
}): import("react").JSX.Element;
export declare function CashierPresentationScreenCanvasProvider({ children, rootNode, }: {
    children: ReactNode;
    rootNode: HTMLDivElement | null;
}): import("react").JSX.Element;
export declare const freezeCashierPresentationDiagnostic: (diagnostic: CashierPresentationError) => CashierPresentationError;
export declare function CashierPresentationProvider({ children, presentation, }: {
    children: ReactNode;
    presentation?: CashierPresentation;
}): import("react").JSX.Element;
export declare class CashierPresentationRuntimeFailure extends Error {
    readonly phase: CashierPresentationErrorPhase;
    readonly code: CashierPresentationErrorCode;
    constructor(phase: CashierPresentationErrorPhase, code: CashierPresentationErrorCode);
}
export declare const toPresentationText: (value: ReactNode) => string | undefined;
export declare function CashierSlotOutlet<Slot extends CashierPresentationSlotId>({ actions, children, id, model, }: {
    actions: CashierPresentationSlotActionsMap[Slot];
    children: ReactNode;
    id: Slot;
    model: CashierPresentationSlotModelMap[Slot];
}): string | number | bigint | boolean | import("react").JSX.Element | Iterable<ReactNode> | Promise<string | number | bigint | boolean | import('react').ReactPortal | import('react').ReactElement<unknown, string | import('react').JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined;
export declare function CashierScreenOutlet<Screen extends CashierPresentationScreenId>({ actions, children, deferPresentationUpdates, frame, id, model, overrideEnabled, protectedContent, }: {
    actions: CashierPresentationScreenActionsMap[Screen];
    children: ReactNode;
    deferPresentationUpdates?: boolean;
    frame?: (content: ReactNode) => ReactNode;
    id: Screen;
    model: CashierPresentationScreenModelMap[Screen];
    overrideEnabled?: boolean;
    protectedContent?: ReactNode;
}): string | number | bigint | boolean | import("react").JSX.Element | Iterable<ReactNode> | Promise<string | number | bigint | boolean | import('react').ReactPortal | import('react').ReactElement<unknown, string | import('react').JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined;
export type CashierPresentationActionOptions<Arguments extends readonly unknown[]> = Readonly<{
    busy?: boolean;
    validate?: (...args: Arguments) => boolean;
    unavailableReason?: 'invalid-state' | 'protected-surface-not-ready' | 'unsupported';
}>;
export declare const useCashierPresentationActions: (surface: CashierPresentationSurface) => {
    createAction: <Arguments extends readonly unknown[]>(intentKey: string, handler: (...args: Arguments) => unknown, options?: CashierPresentationActionOptions<Arguments>) => CashierPresentationAction<Arguments>;
    revision: number;
};
export declare const EMPTY_PRESENTATION_ACTIONS: Readonly<{}>;
export declare const useCashierPresentationOptions: () => Readonly<{
    summary?: Readonly<{
        actions?: import('..').CashierSummaryActions;
    }>;
}> | undefined;
export declare const useCashierPresentationScreenOverride: (id: CashierPresentationScreenId) => boolean;
export declare const useCashierPresentationDiagnostic: () => (surface: CashierPresentationSurface, phase: CashierPresentationErrorPhase, code: CashierPresentationErrorCode) => void;
//# sourceMappingURL=runtime.d.ts.map