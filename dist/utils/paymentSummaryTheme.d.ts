import { PaymentSummaryResponse } from '../../../api/src/payments.ts';
import { UiVariant } from '../../../ui/src/client.js';
import { CashierPresentationOutcome } from '../types/presentation.js';
export type PaymentSummaryTheme = Extract<UiVariant, 'success' | 'danger' | 'info' | 'neutral' | 'secondary'>;
export declare const resolvePaymentSummaryOutcome: (status?: PaymentSummaryResponse["paymentStatus"] | null) => CashierPresentationOutcome;
export declare const resolvePaymentSummaryTheme: (status?: PaymentSummaryResponse["paymentStatus"] | null) => PaymentSummaryTheme;
//# sourceMappingURL=paymentSummaryTheme.d.ts.map