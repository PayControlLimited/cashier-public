import { CashierTheme } from '../types/CashierConfig.js';
export type HostedFieldsThemePayload = Record<string, string | number>;
export type HostedFieldsCardThemeContext = {
    overrides: HostedFieldsThemePayload;
    defaults: HostedFieldsThemePayload;
};
/** Read the same generic slots that style local fields. Only theme metadata
 * crosses this boundary; descendant selector CSS and field values do not. */
export declare const resolveHostedFieldsCardTheme: (element: HTMLElement | null) => HostedFieldsCardThemeContext | undefined;
export declare const buildHostedFieldsThemePayload: (resolveThemeSnapshot?: () => Record<string, string | number> | undefined, theme?: CashierTheme, cardContext?: HostedFieldsCardThemeContext) => HostedFieldsThemePayload;
//# sourceMappingURL=hostedFieldsThemePayload.d.ts.map