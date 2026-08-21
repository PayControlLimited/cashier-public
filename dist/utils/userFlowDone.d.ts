/**
 * Notify the backend that the user flow ended client-side, for connections
 * whose hosted flow can finish without a return redirect
 * (redirect.userFlowDoneUrl is only set for those). Fire-and-forget: the
 * /return endpoints are outside the CORS allowlist, so the request is sent
 * opaquely (no-cors) and the response is never read. Failures are ignored -
 * webhooks and lifecycle rules still resolve the payment; this call only
 * completes the user flow sooner. The receiver is idempotent, so repeats are
 * harmless.
 */
export declare const reportUserFlowDone: (url: string) => void;
//# sourceMappingURL=userFlowDone.d.ts.map