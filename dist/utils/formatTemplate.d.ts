import { ReactNode } from 'react';
export { formatTemplate } from './formatTemplateString.js';
type FormatTemplateRichOptions = {
    plainTokens?: string[];
};
export declare const formatTemplateRich: (template: string, values: Record<string, string>, options?: FormatTemplateRichOptions) => ReactNode;
export declare const formatResolvedValuesRich: (text: string, values: Record<string, string>, options?: FormatTemplateRichOptions) => ReactNode;
//# sourceMappingURL=formatTemplate.d.ts.map