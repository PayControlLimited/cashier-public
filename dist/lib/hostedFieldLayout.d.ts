import { PaymentTypeField } from '../types/payment.js';
export type HostedFieldControl = 'input' | 'select' | 'switcher' | 'toggle';
export type HostedFieldWithId = PaymentTypeField & {
    id: string;
};
export declare const hasHostedFieldId: (field: PaymentTypeField) => field is HostedFieldWithId;
export declare const determineHostedFieldControl: (field: PaymentTypeField) => HostedFieldControl;
export declare const getHostedFieldGridColumnClass: (fieldId: string, hasCscField: boolean, hasExpiryField: boolean) => string;
export declare const estimateHostedFieldRowCount: (fields: readonly PaymentTypeField[] | null | undefined) => number;
//# sourceMappingURL=hostedFieldLayout.d.ts.map