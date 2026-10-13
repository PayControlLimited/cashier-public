import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { CashierConfig, CashierEmbeddingStateChanged } from './types/CashierConfig.js';
import { CashierDomPresentation } from './types/presentation.js';
export type CashierElementProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
    config?: Partial<CashierConfig>;
    resumePaymentId?: string;
    presentation?: CashierDomPresentation;
    onEmbeddingStateChanged?: CashierEmbeddingStateChanged;
};
export type CashierProps = {
    config?: Partial<CashierConfig>;
    resumePaymentId?: string;
    presentation?: CashierDomPresentation;
    onEmbeddingStateChanged?: CashierEmbeddingStateChanged;
};
export declare const defineCashier: (tagName?: string) => string;
//# sourceMappingURL=web-component.d.ts.map