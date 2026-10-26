import { ReactNode } from 'react';
import { CurrencyFormatter } from '../../../format/src/index.ts';
import { createSummaryValueFormatter } from '../hooks/useCashierFormatters.js';
type ValueFormatterContextValue = {
    currencyFormatter: CurrencyFormatter | null;
    formatCurrencyValue: (value: unknown) => string;
    formatDisplayValue: (value: unknown) => string;
    formatSummaryValue: ReturnType<typeof createSummaryValueFormatter>;
};
type ProviderProps = {
    children: ReactNode;
};
export declare function CashierValueFormatterProvider({ children, }: ProviderProps): ReactNode;
export declare const useCashierValueFormatter: () => ValueFormatterContextValue;
export {};
//# sourceMappingURL=valueFormatter.d.ts.map