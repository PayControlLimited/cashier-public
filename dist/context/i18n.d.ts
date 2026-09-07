import { ReactNode } from 'react';
import { CashierTranslations, I18nKeyCandidates } from '../utils/i18n.js';
import { CashierPresentationText } from '../types/presentation.js';
type CashierI18nValue = {
    translations: CashierTranslations;
    translateKey: TranslateKey;
    translateKeys: TranslateKeys;
    resolveTextKey: ResolveTextKey;
    resolveTextKeys: ResolveTextKeys;
    hasTranslation: HasTranslation;
    isTranslationVisible: boolean;
};
type TranslateKey = (key: string | null | undefined) => string;
type TranslateKeys = (keys: I18nKeyCandidates) => string;
type ResolveTextKey = (key: string | null | undefined) => CashierPresentationText;
type ResolveTextKeys = (keys: I18nKeyCandidates) => CashierPresentationText;
type HasTranslation = (key: string | null | undefined) => boolean;
type CashierResolvedI18nProviderProps = {
    children: ReactNode;
    translations: CashierTranslations;
    debug: boolean;
    isTranslationVisible: boolean;
};
export declare function CashierResolvedI18nProvider({ children, translations, debug, isTranslationVisible, }: CashierResolvedI18nProviderProps): ReactNode;
export declare const useI18n: () => CashierI18nValue;
export declare const useCashierI18nStatus: () => {
    hasTranslation: HasTranslation;
    isTranslationVisible: boolean;
};
export {};
//# sourceMappingURL=i18n.d.ts.map