import { ReactNode } from 'react';
import { PaymentType } from '../types/payment.js';
import { CashierBonusTopUpEvent } from '../types/CashierConfig.js';
type BonusPickerSurface = 'default' | 'embedded';
type BonusPickerPlacement = 'payment-form' | 'payment-list';
type BonusPickerProps = {
    paymentType?: PaymentType | null;
    paymentTypes?: PaymentType[];
    amount?: string | null;
    surface?: BonusPickerSurface;
    placement?: BonusPickerPlacement;
    onTopUpAccepted?: (event: CashierBonusTopUpEvent) => void;
};
export default function BonusPicker({ paymentType, paymentTypes, amount, placement, onTopUpAccepted, }: BonusPickerProps): ReactNode;
export {};
//# sourceMappingURL=BonusPicker.d.ts.map