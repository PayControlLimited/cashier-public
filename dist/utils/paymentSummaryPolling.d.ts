import { PaymentSummaryResponse } from '../../../api/src/payments.ts';
/** Steady-state gap once the growing delays are exhausted: 60 requests/hour. */
export declare const SUMMARY_POLL_CEILING_MS = 60000;
/** Coalesces the bursts of visibility changes a tab switch produces. */
export declare const SUMMARY_POLL_FOREGROUND_COALESCE_MS = 250;
/**
 * Delay before the poll numbered `attempt` (0-based), decaying to
 * SUMMARY_POLL_CEILING_MS.
 */
export declare const summaryPollDelayMs: (attempt: number) => number;
/**
 * Whether a summary status is still provisional. Only the pending outcome is
 * worth re-reading: `inconsistent` needs manual resolution rather than time,
 * and an unrecognised status is not a claim that anything is still moving.
 */
export declare const shouldPollPaymentSummary: (status?: PaymentSummaryResponse["paymentStatus"] | null) => boolean;
/**
 * Whether a freshly polled summary differs from the one on screen. Identity is
 * what drives the summary re-render and the onPaymentSummary callback, so an
 * unchanged poll must keep the previous object rather than replace it with an
 * equal copy.
 */
export declare const hasPaymentSummaryChanged: (current: PaymentSummaryResponse, next: PaymentSummaryResponse) => boolean;
//# sourceMappingURL=paymentSummaryPolling.d.ts.map