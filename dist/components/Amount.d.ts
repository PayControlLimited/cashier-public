import { ReactNode, Ref } from 'react';
import { PaymentType } from '../types/payment.js';
type AmountProps = {
    value: string;
    onChange: (value: string) => void;
    helper?: ReactNode;
    onSubmit?: () => void;
    canSubmit?: boolean;
    inputRef?: Ref<HTMLInputElement | null>;
    currency?: string;
    locale?: Intl.Locale | string;
    formatOptions?: Intl.NumberFormatOptions;
    clearOnFocus?: boolean;
    errorMessage?: string;
    invalid?: boolean;
    limits?: PaymentType['limits'];
    reserveErrorSpace?: boolean;
    showMeta?: boolean;
    showDivider?: boolean;
    reserveEmptyLimitMetaSpace?: boolean;
    align?: 'center' | 'right';
    animateValueChange?: boolean;
    disabled?: boolean;
    onFocusChange?: (isFocused: boolean) => void;
};
export default function Amount({ value, onChange, helper, onSubmit, canSubmit, inputRef, currency, locale, formatOptions, clearOnFocus, errorMessage, invalid, limits, reserveErrorSpace, showMeta, showDivider, reserveEmptyLimitMetaSpace, align, animateValueChange, disabled, onFocusChange, }: AmountProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Amount.d.ts.map