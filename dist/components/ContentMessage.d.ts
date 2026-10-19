import { UiAppearance, UiSize, UiVariant } from '../../../ui/src/client.js';
/** Shared display primitive; source owns visibility, anchoring and announcements. */
export declare function ContentMessage({ content, appearance, variant, inheritTheme, size, chrome, className, markdownClassName, embedded, }: {
    content: string;
    embedded?: boolean;
    appearance?: UiAppearance | 'plain';
    variant?: UiVariant;
    inheritTheme?: boolean;
    size?: UiSize;
    chrome?: boolean;
    className?: string;
    markdownClassName?: string;
}): import('react').JSX.Element;
//# sourceMappingURL=ContentMessage.d.ts.map