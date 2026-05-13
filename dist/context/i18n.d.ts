import { ReactNode } from 'react';
import { CashierTranslations } from '../utils/i18n.js';
type CashierI18nValue = {
    translations: CashierTranslations;
    translateKey: TranslateKey;
    hasTranslation: HasTranslation;
    isTranslationVisible: boolean;
};
type TranslateKey = (key: string | null | undefined) => string;
type HasTranslation = (key: string | null | undefined) => boolean;
type CashierI18nProviderProps = {
    children: ReactNode;
};
export declare function CashierI18nProvider({ children, }: CashierI18nProviderProps): ReactNode;
export declare const useI18n: () => CashierI18nValue;
export declare const useCashierI18nStatus: () => {
    hasTranslation: HasTranslation;
    isTranslationVisible: boolean;
};
export {};
//# sourceMappingURL=i18n.d.ts.map