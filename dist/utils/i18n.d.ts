import { CashierConfig } from '../types/CashierConfig.js';
export { localeToString, resolveLocale } from '../../../format/src/index.ts';
export type CashierTranslations = Record<string, string>;
export type I18nKeyCandidates = string | readonly string[] | null | undefined;
export declare const toCandidateList: (keys: I18nKeyCandidates) => readonly string[];
export declare const resolveTranslationCandidates: (translations: CashierTranslations, keys: I18nKeyCandidates) => string;
export type CashierTranslationsQueryParams = Pick<CashierConfig, 'merchantId'> & {
    locale: string;
};
export declare const cashierTranslationsQueryOptions: (params: CashierTranslationsQueryParams) => {
    queryKey: readonly ["cashier", "i18n", string, string];
    queryFn: () => Promise<CashierTranslations>;
    retry: boolean;
    staleTime: number;
    gcTime: number;
};
//# sourceMappingURL=i18n.d.ts.map