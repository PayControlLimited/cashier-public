import { ReactNode } from 'react';
import { LogoTone } from '../../../ui/src/client.js';
import { CashierLayoutListType } from '../types/CashierConfig.js';
import { PaymentTypeLogoSource } from '../types/payment.js';
type PaymentTypeLogoProps = {
    logo?: PaymentTypeLogoSource;
    alt?: string;
    seed: string;
    className?: string;
    tone?: LogoTone;
    listStyle?: CashierLayoutListType;
    compact?: boolean;
    balanceLogo?: boolean;
    stuck?: boolean;
    content?: ReactNode;
};
export declare function PaymentTypeLogo({ logo, alt, seed, className, tone, listStyle, compact, balanceLogo, stuck, content, }: PaymentTypeLogoProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=PaymentTypeLogo.d.ts.map