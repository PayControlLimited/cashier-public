import { ReactNode } from 'react';
export declare const formatTemplate: (template: string, token: string, value: string) => string;
type FormatTemplateRichOptions = {
    plainTokens?: string[];
};
export declare const formatTemplateRich: (template: string, values: Record<string, string>, options?: FormatTemplateRichOptions) => ReactNode;
export declare const formatResolvedValuesRich: (text: string, values: Record<string, string>, options?: FormatTemplateRichOptions) => ReactNode;
export {};
//# sourceMappingURL=formatTemplate.d.ts.map