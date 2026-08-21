import { ReactNode, RefObject } from 'react';
export declare const CASHIER_HOTKEY_SCOPE_SELECTOR = ".pc-cashier__root";
export type CashierHotkeyScopeRef = RefObject<HTMLElement | null>;
export declare function CashierHotkeyScopeProvider({ children, rootRef, }: {
    children: ReactNode;
    rootRef: CashierHotkeyScopeRef;
}): import("react").JSX.Element;
export declare const useCashierHotkeyScopeRef: () => CashierHotkeyScopeRef | null;
//# sourceMappingURL=hotkeyScope.d.ts.map