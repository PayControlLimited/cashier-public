import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { CashierConfig } from './types/CashierConfig.js';
export type CashierElementProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
    config?: Partial<CashierConfig>;
};
export type CashierProps = {
    config?: Partial<CashierConfig>;
};
export declare const defineCashier: (tagName?: string) => string;
//# sourceMappingURL=web-component.d.ts.map