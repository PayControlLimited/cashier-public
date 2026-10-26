import { CashierTranslations, I18nKeyCandidates } from './i18n.js';
/** Shared copy resolution; platform bindings only subscribe/memoise this owner. */
export declare const createCashierCopy: (translations: CashierTranslations, locale?: string, debug?: boolean, isTranslationVisible?: boolean) => {
    translations: CashierTranslations;
    translateKey: (key: string | null | undefined) => string;
    translateKeys: (keys: I18nKeyCandidates) => string;
    resolveTextKey: (key: string | null | undefined) => {
        value: string;
        key?: undefined;
    } | {
        key: string;
        value: string;
    };
    resolveTextKeys: (keys: I18nKeyCandidates) => {
        value: string;
        key?: undefined;
    } | {
        key: string;
        value: string;
    };
    hasTranslation: (key: string | null | undefined) => boolean;
    isTranslationVisible: boolean;
};
//# sourceMappingURL=copy.d.ts.map