import { PaymentSummaryResponse } from '../../../api/src/payments.ts';
/**
 * Keeps a provisional payment summary up to date after the user flow ends.
 *
 * The summary route loads once, so a payment the provider had not resolved by
 * the time the flow completed renders as pending until the user reloads. This
 * re-reads the summary on a decaying schedule until the status settles and
 * returns the latest response in place of the loaded one.
 *
 * The returned object identity only changes when the content does, so an
 * unchanged poll re-renders nothing: the pending screen looks and behaves
 * exactly as it does without polling, with no indicator of its own.
 *
 * Polling is suspended while the document is hidden and resumes with an
 * immediate read when it comes back. That is what keeps a backgrounded tab from
 * spending the schedule, and what gives a returning user a current answer
 * instead of the remainder of the current gap.
 */
export declare const usePaymentSummaryPolling: ({ paymentId, merchantId, summary, }: {
    paymentId: string;
    merchantId: string;
    summary: PaymentSummaryResponse;
}) => PaymentSummaryResponse;
//# sourceMappingURL=usePaymentSummaryPolling.d.ts.map