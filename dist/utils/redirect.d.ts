import { CommonSchemasRedirectData, PaymentStatusResponse } from '../../../api/src/payments.js';
export type RedirectType = CommonSchemasRedirectData['type'];
export type RedirectMethod = CommonSchemasRedirectData['method'];
export type RedirectDataRecord = Record<string, string>;
type BaseRedirect = NonNullable<PaymentStatusResponse['redirect']>;
export type RedirectData = BaseRedirect['data'] | string;
export type RedirectWithType = Omit<BaseRedirect, 'data' | 'type'> & {
    data?: RedirectData;
    type?: RedirectType;
    scriptId?: string;
};
export declare const parseRedirectType: (value: unknown) => RedirectType | undefined;
export declare const encodeRedirectPayload: (payload: RedirectData, debug?: boolean) => string | undefined;
export declare const normalizeRedirectMethod: (method?: RedirectWithType["method"]) => RedirectWithType["method"];
export declare const normalizeRedirectType: (type?: RedirectWithType["type"]) => RedirectType;
export declare const decodeRedirectPayload: (rawData: string | undefined, debug?: boolean) => RedirectDataRecord | undefined;
export {};
//# sourceMappingURL=redirect.d.ts.map