import { CreditCardTypeCardBrandId } from 'credit-card-type/dist/types';
export type CardBrandTheme = CreditCardTypeCardBrandId;
type CardBrandLogoTone = 'default' | 'dark';
export type CardBrandLogo = Partial<Record<CardBrandLogoTone, string>>;
export type CardBrandVisual = {
    brand: CreditCardTypeCardBrandId;
    theme?: CardBrandTheme;
    logo?: CardBrandLogo;
};
export declare const resolveCardBrandVisual: (brand: CreditCardTypeCardBrandId | undefined, assetsUrl: string | undefined) => CardBrandVisual | undefined;
export {};
//# sourceMappingURL=cardBrand.d.ts.map