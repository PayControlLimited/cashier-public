import { ReactNode } from 'react';
import { ButtonAppearance, ButtonVariant, UiAppearance, UiSize, UiVariant } from '../../../ui/src/client.js';
import { CashierBonus } from '../types/CashierConfig.js';
export type InteractivePromptActionDescriptor = {
    id: string;
    labelKey?: string;
    legacyLabel?: string;
    onClick?: () => void;
    disabled?: boolean;
    variant?: ButtonVariant;
    appearance?: ButtonAppearance;
    leadingIcon?: ReactNode;
    trailingIcon?: ReactNode;
};
export type InteractivePromptDescriptor = {
    legacyTitle: string;
    titleKey?: string;
    preferLegacyTitle?: boolean;
    titleValues?: Record<string, string>;
    legacyBody?: string;
    bodyKey?: string;
    preferLegacyBody?: boolean;
    bodyValues?: Record<string, string>;
    meta?: ReactNode;
    icon?: ReactNode;
    iconSlotClassName?: string;
    trailingVisual?: ReactNode;
    footer?: ReactNode;
    actions?: InteractivePromptActionDescriptor[];
    actionsOffsetClassName?: string;
    tone?: UiVariant;
    appearance?: UiAppearance;
    size?: UiSize;
    compact?: boolean;
};
export declare function resolveInteractivePromptText(translateKey: (key: string) => string, key: string | undefined, fallback?: string, values?: Record<string, string>): string | undefined;
export declare function resolveInteractivePromptRichText(translateKey: (key: string) => string, key: string | undefined, fallback?: ReactNode, values?: Record<string, string>): ReactNode | undefined;
export declare function resolveInteractivePromptBody(translateKey: (key: string) => string, key: string | undefined, values?: Record<string, string>): string | undefined;
export declare const resolveInteractivePromptDismissKey: ({ route, paymentType, bonusCode, targetAmount, }: {
    route: string;
    paymentType?: string | null;
    bonusCode?: string | null;
    targetAmount?: number | null;
}) => string;
export declare const resolveFocusedAwardBonus: ({ selectedBonusCode, availableBonuses, }: {
    selectedBonusCode?: string | null;
    availableBonuses: CashierBonus[];
}) => CashierBonus | null;
export declare const createChoosePaymentTypePromptIcon: (className?: string) => ReactNode;
export declare const createChoosePaymentTypePromptDescriptor: ({ translateKey, }: {
    translateKey: (key: string) => string;
}) => InteractivePromptDescriptor;
export declare const createPaymentDetailsPromptDescriptor: ({ translateKey, }: {
    translateKey: (key: string) => string;
}) => InteractivePromptDescriptor;
export declare const formatAmountForInput: (value: number) => string;
//# sourceMappingURL=interactivePrompt.d.ts.map