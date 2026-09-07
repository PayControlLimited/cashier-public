import { PaymentType } from '../types/payment.js';
import { CashierPresentationLocalisation, CashierPresentationMoney, CashierPresentationPaymentType, CashierPresentationText } from '../types/presentation.js';
export declare const CASHIER_PROTECTED_SURFACE_LABEL_KEY = "aria.payment_content";
export declare const createCashierPresentationText: (value: string) => CashierPresentationText;
export declare const replaceCashierPresentationTextValue: (text: CashierPresentationText, value: string) => CashierPresentationText;
export declare const createCashierPresentationMoney: (value: string, currency: string, format: (value: unknown) => string) => CashierPresentationMoney;
export type CashierPresentationPaymentTypeMapperInput = Readonly<{
    paymentType: PaymentType;
    id: string;
    label: CashierPresentationText;
    description?: CashierPresentationText;
    currency: string;
    formatMoney: (value: unknown) => string;
    minimumLabel: CashierPresentationText;
    maximumLabel: CashierPresentationText;
    selected: boolean;
    disabled: boolean;
    unavailable: boolean;
}>;
/**
 * The one transport-to-presentation projection for payment types. Generated
 * Payment API maps and optional runtime values stop at this boundary.
 */
export declare const mapCashierPresentationPaymentType: ({ currency, description, disabled, formatMoney, id, label, maximumLabel, minimumLabel, paymentType, selected, unavailable, }: CashierPresentationPaymentTypeMapperInput) => (CashierPresentationPaymentType | null);
export declare const resolveCashierPresentationLocalisation: (locale: Intl.Locale | string) => CashierPresentationLocalisation;
//# sourceMappingURL=model.d.ts.map