import { CashierContentStyle, CashierPresentationOptions, CashierPresentationScreenId } from '../types/presentation.js';
declare const choices: {
    readonly appearance: readonly ["plain", "solid", "ghost", "outline", "muted"];
    readonly themeVariant: readonly ["neutral", "secondary", "primary", "success", "danger", "warning", "info"];
    readonly size: readonly ["xs", "sm", "md", "lg", "xl"];
    readonly alignment: readonly ["start", "centre", "end"];
    readonly placement: readonly ["top", "bottom", "summary"];
    readonly layout: readonly ["row", "stack", "list"];
};
export declare const contentStyleKeys: (keyof typeof choices)[];
/** Inline styles are semantic, JSON-friendly values; invalid styles use defaults. */
export declare const isCashierContentStyle: (value: unknown, collection?: boolean) => boolean;
/** Resolve by value before crossing the renderer boundary. No selectors or cascade. */
export declare const resolveContentStyle: (value: unknown, collection?: boolean) => CashierContentStyle;
/** Same validation contract for direct embedding, Playground and hosted receiver. */
export declare const isCashierPresentationContentOptions: (value: unknown) => boolean;
export declare const resolveContentOptions: (options: CashierPresentationOptions | undefined, _screen: CashierPresentationScreenId) => CashierPresentationOptions;
/** Authoring fields stay flat; display models receive only accepted style values. */
export declare const resolveElementStyle: (content: object) => CashierContentStyle;
/** Cosmetic updates cannot change captured purchase identity or historical text. */
export declare const withoutContentStyle: <T extends object>(content: T) => Omit<T, keyof CashierContentStyle>;
export {};
//# sourceMappingURL=contentOptions.d.ts.map