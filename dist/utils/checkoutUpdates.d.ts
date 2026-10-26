import { CashierOffer, CashierCheckoutSnapshot, CashierCheckoutState, CashierCheckoutUpdateRequest, CashierCheckoutUpdateResolution, CashierCheckoutUpdateRejection, CashierCheckoutCommandResult, CashierOfferSelectionChangedEvent } from '../types/offers.js';
export declare const isCheckoutSnapshot: (value: unknown) => value is CashierCheckoutSnapshot;
type Binding = {
    scope?: string;
    material: string;
    checkout: CashierCheckoutSnapshot;
    offers: readonly CashierOffer[];
    lockAmount: boolean;
    request?: (request: CashierCheckoutUpdateRequest) => void | Promise<void>;
    changed?: (event: CashierOfferSelectionChangedEvent) => void | Promise<void>;
    observe?: (state: CashierCheckoutState) => void | Promise<void>;
};
/** Instance-owned checkout facts. Payment creation remains solely with PaymentAttempt. */
export declare const createCheckoutUpdates: ({ canChange, invalidatePreparation, now, }: {
    canChange: () => boolean;
    invalidatePreparation: () => void;
    now?: () => number;
}) => {
    getSnapshot: () => Readonly<{
        phase: "confirmed" | "pending" | "unconfirmed" | "expired";
        selectedOfferId: string | null;
        requestedOfferId?: string | null;
        paymentContextId?: string;
        requestId?: string;
    }>;
    getPendingRequest: () => Readonly<{
        requestId: string;
        reason: "offer-selection" | "refresh" | "expiry";
        basePaymentContextId: string;
        selectedOfferId: string | null;
    }> | undefined;
    getSelectionAvailability: (id: string | null) => "available" | "busy" | "unavailable";
    getConfirmed: () => CashierCheckoutSnapshot | undefined;
    getRefreshAvailability: () => "available" | "busy" | "unavailable";
    subscribe: (listener: () => void) => () => void;
    activate: () => void;
    dispose: () => void;
    configure: (next: Binding) => void;
    selectOffer: (id: string | null) => CashierCheckoutCommandResult;
    ensureDefault: (id: string, select: (id: string) => CashierCheckoutCommandResult | undefined) => void;
    clear: () => void;
    refresh: () => CashierCheckoutCommandResult;
    resolve: (value: CashierCheckoutUpdateResolution) => CashierCheckoutCommandResult;
    reject: (value: CashierCheckoutUpdateRejection) => CashierCheckoutCommandResult;
    isConfirmed: () => boolean;
    canPay: () => boolean;
};
export {};
//# sourceMappingURL=checkoutUpdates.d.ts.map