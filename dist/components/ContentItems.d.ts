import { ReactNode } from 'react';
import { UiAppearance, UiSize, UiVariant } from '../../../ui/src/client.js';
/** Visual collection shared by checkout, bonus results and the theme preview.
 * This primitive has no award calculation, payment policy or translation. */
export declare function ContentItems({ children, phase, appearance, variant, size, layout, alignment, rootAttributes, embedded, }: {
    children: ReactNode;
    embedded?: boolean;
    phase: 'preview' | 'result';
    appearance?: UiAppearance | 'plain';
    variant?: UiVariant;
    size?: UiSize;
    layout?: 'row' | 'stack';
    alignment?: 'start' | 'centre' | 'end';
    rootAttributes?: {
        'id'?: string;
        'className'?: string;
        'data-testid'?: string;
        'data-pc-slot'?: string;
    };
}): import('react').JSX.Element;
//# sourceMappingURL=ContentItems.d.ts.map