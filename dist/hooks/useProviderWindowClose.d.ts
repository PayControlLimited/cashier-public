/**
 * Closes the provider window unless the payment it belongs to carries a
 * merchant return URL.
 *
 * A payment created with returnUrl hands the end of the provider window to the
 * merchant: the return endpoint sends the payer to their page once the flow is
 * finished, and closing the window here would tear that page down under them.
 * Step transitions keep closing a window the flow has moved past - the return
 * only redirects when nothing further is required of the payer, so a window
 * abandoned mid-flow never holds the merchant's page.
 *
 * Ownership is read from the tracked payment rather than from the current
 * configuration. A host that changes the configuration mid-payment remounts
 * Cashier around the lifecycle tracker, so the remounted tree would otherwise
 * close a window whose payment was created with a return URL. The
 * configuration only decides for a close that names no payment.
 */
export declare const useProviderWindowClose: () => (ownerKey?: string | null) => void;
//# sourceMappingURL=useProviderWindowClose.d.ts.map