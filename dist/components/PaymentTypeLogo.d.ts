import { HTMLAttributes, ReactNode } from 'react';
import { LogoTone } from '../../../ui/src/client.js';
import { CashierLayoutListType } from '../types/CashierConfig.js';
import { PaymentTypeLogoSource } from '../types/payment.js';
export type CashierLogoThemeSurface = 'paymentTypeLogo' | 'bonusLogo';
type CashierLogoLayout = 'grid' | 'list';
type PaymentTypeLogoProps = {
    id?: string;
    logo?: PaymentTypeLogoSource;
    alt?: string;
    seed: string;
    className?: string;
    contentClassName?: string;
    rootAttributes?: HTMLAttributes<HTMLDivElement>;
    surface?: CashierLogoThemeSurface;
    tone?: LogoTone;
    listStyle?: CashierLayoutListType;
    compact?: boolean;
    balanceLogo?: boolean;
    stuck?: boolean;
    content?: ReactNode;
};
export declare const getCashierLogoThemeSurfaceClassName: (surface?: CashierLogoThemeSurface, layout?: CashierLogoLayout) => string;
export declare function PaymentTypeLogo({ id, logo, alt, seed, className, contentClassName, rootAttributes, surface, tone, listStyle, compact, balanceLogo, stuck, content, }: PaymentTypeLogoProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=PaymentTypeLogo.d.ts.map