import { ReactNode } from 'react';
export type PaymentFormSurfaceKind = 'form' | 'field-panel';
export type PaymentFormSurfaceChrome = 'contained' | 'plain';
type PaymentFormSurfaceProps = {
    children: ReactNode;
    kind: PaymentFormSurfaceKind;
    chrome?: PaymentFormSurfaceChrome;
    fieldEdgeSpacing?: 'default' | 'balanced';
    animateEntrance?: boolean;
};
export default function PaymentFormSurface({ children, kind, chrome, fieldEdgeSpacing, animateEntrance, }: PaymentFormSurfaceProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=PaymentFormSurface.d.ts.map