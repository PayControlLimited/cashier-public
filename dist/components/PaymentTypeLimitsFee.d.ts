import { ReactNode } from 'react';
import { PaymentType } from '../../../api/src/payments.js';
type PaymentTypeLimitsFeeItem = {
    id: string;
    label?: string;
    value: ReactNode;
};
type PaymentTypeLimitsFeeProps = {
    limits?: PaymentType['limits'];
    fee?: PaymentType['fee'];
    extraItems?: PaymentTypeLimitsFeeItem[];
    rowGap?: 'tight' | 'normal';
    align?: 'center' | 'left';
    truncate?: boolean;
    className?: string;
};
export default function PaymentTypeLimitsFee({ limits, fee, extraItems, rowGap, align, truncate, className, }: PaymentTypeLimitsFeeProps): import("react/jsx-runtime").JSX.Element | null;
type PaymentTypeLimitsFeeMetaProps = {
    limits?: PaymentType['limits'];
    fee?: PaymentType['fee'];
    extraItems?: PaymentTypeLimitsFeeItem[];
    align?: PaymentTypeLimitsFeeProps['align'];
    rowGap?: PaymentTypeLimitsFeeProps['rowGap'];
    truncate?: PaymentTypeLimitsFeeProps['truncate'];
    className?: string;
};
export declare function PaymentTypeLimitsFeeMeta({ limits, fee, extraItems, align, rowGap, truncate, className, }: PaymentTypeLimitsFeeMetaProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=PaymentTypeLimitsFee.d.ts.map