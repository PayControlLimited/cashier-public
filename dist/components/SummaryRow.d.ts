import { ReactNode } from 'react';
/** Shared non-interactive geometry; callers own copy, policy and row semantics. */
export declare function SummaryRow({ leading, children, trailing, compact, baseline, wrapTrailing, }: {
    leading?: ReactNode;
    children: ReactNode;
    trailing?: ReactNode;
    compact?: boolean;
    baseline?: boolean;
    wrapTrailing?: boolean | 'narrow';
}): import('react').JSX.Element;
/** Shared label/description column used by payment, bonus and merchant rows. */
export declare function SummaryRowContent({ children, className, }: {
    children: ReactNode;
    className?: string;
}): import('react').JSX.Element;
export declare const SUMMARY_ROW_DESCRIPTION_CLASSNAME = "text-xs @sm:text-sm @md:leading-tight";
/** The embedded payment/bonus row presentation, with already resolved copy. */
export declare function EmbeddedListItemContent({ leading, title, description, trailing, meta, compact, wrap, alignment, domSlug, }: {
    leading?: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    trailing?: ReactNode;
    meta?: ReactNode;
    compact?: boolean;
    wrap?: boolean;
    alignment?: 'start' | 'centre' | 'end';
    domSlug?: string;
}): import('react').JSX.Element;
//# sourceMappingURL=SummaryRow.d.ts.map