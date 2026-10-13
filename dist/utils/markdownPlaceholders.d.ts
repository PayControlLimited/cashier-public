type MarkdownNode = {
    type: string;
    value?: string;
    children?: MarkdownNode[];
};
export declare const fillPlaceholders: (text: string, values: Record<string, string>) => string;
export declare const remarkFillPlaceholders: (values: Record<string, string>) => () => (tree: MarkdownNode) => void;
export {};
//# sourceMappingURL=markdownPlaceholders.d.ts.map