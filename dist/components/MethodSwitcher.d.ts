import { CashierMethods, CashierUser } from '../types/CashierConfig.js';
type MethodSwitcherProps = {
    method: CashierMethods;
    onSelect: (method: CashierMethods) => void | Promise<void>;
    disabled?: boolean;
    interactivePrompts?: boolean;
    showSwitcher?: boolean;
    showUserBalance?: boolean;
    user?: CashierUser | null;
};
declare function MethodSwitcher({ method, onSelect, disabled, interactivePrompts, showSwitcher, showUserBalance, user, }: MethodSwitcherProps): null;
export default MethodSwitcher;
//# sourceMappingURL=MethodSwitcher.d.ts.map