import { PaymentSummaryResponse } from '../../../api/src/payments.js';
import { UiVariant } from '../../../ui/src/client.js';
export type PaymentSummaryTheme = Extract<UiVariant, 'success' | 'danger' | 'info' | 'neutral' | 'secondary'>;
export declare const resolvePaymentSummaryTheme: (status?: PaymentSummaryResponse["paymentStatus"] | null) => PaymentSummaryTheme;
//# sourceMappingURL=paymentSummaryTheme.d.ts.map