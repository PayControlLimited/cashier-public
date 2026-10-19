import { CashierContextValue } from '../context/main.js';
import { CashierRuntimeConfig } from '../utils/elements.js';
/** Apply a confirmed atomic snapshot without changing the runtime/router/HF identity. */
export declare function useCheckout(config: CashierRuntimeConfig): {
    config: CashierRuntimeConfig;
    checkoutState: CashierContextValue["checkoutState"];
    selectOffer: CashierContextValue["selectOffer"];
};
//# sourceMappingURL=useCheckout.d.ts.map