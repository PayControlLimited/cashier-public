import { CashierConfig } from '../types/CashierConfig.js';
export { localeToString, resolveLocale } from '../../../format/src/index.ts';
export type CashierTranslations = Record<string, string>;
export type CashierTranslationsQueryParams = Pick<CashierConfig, 'merchantId'> & {
    locale: string;
};
export declare const cashierTranslationsQueryOptions: (params: CashierTranslationsQueryParams) => {
    queryKey: readonly ["cashier", "i18n", string, string];
    queryFn: () => Promise<CashierTranslations>;
    staleTime: number;
    gcTime: number;
};
//# sourceMappingURL=i18n.d.ts.map