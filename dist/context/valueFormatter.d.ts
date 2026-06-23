import { ReactNode } from 'react';
import { CurrencyFormatter } from '../../../format/src/index.ts';
type ValueFormatterContextValue = {
    currencyFormatter: CurrencyFormatter | null;
    formatCurrencyValue: (value: unknown) => string;
    formatDisplayValue: (value: unknown) => string;
};
type ProviderProps = {
    children: ReactNode;
};
export declare function CashierValueFormatterProvider({ children, }: ProviderProps): ReactNode;
export declare const useCashierValueFormatter: () => ValueFormatterContextValue;
export {};
//# sourceMappingURL=valueFormatter.d.ts.map