import { ReactNode } from 'react';
type ValueFormatterContextValue = {
    currencyFormatter: Intl.NumberFormat | null;
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