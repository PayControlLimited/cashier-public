import { CashierComboViewFormDraft, CashierPaymentFormDraft } from '../types/CashierConfig.js';
type PaymentFormDraftIdentity = Pick<CashierPaymentFormDraft, 'paymentTypeName' | 'method' | 'amount'>;
type PaymentFormDraft = CashierPaymentFormDraft | CashierComboViewFormDraft;
export declare const isMatchingPaymentFormDraft: (draft: PaymentFormDraft | null | undefined, identity: PaymentFormDraftIdentity) => draft is PaymentFormDraft;
export declare const arePaymentFormDraftsEqual: (left: PaymentFormDraft | null | undefined, right: PaymentFormDraft | null | undefined) => boolean;
export declare const retargetPaymentFormDraftAmount: <TDraft extends PaymentFormDraft>(draft: TDraft | null, identity: PaymentFormDraftIdentity, nextAmount: string) => TDraft | null;
export {};
//# sourceMappingURL=paymentFormDraft.d.ts.map