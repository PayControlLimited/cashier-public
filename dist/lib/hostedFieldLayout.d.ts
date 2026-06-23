import { PaymentTypeField } from '../types/payment.js';
export type HostedFieldControl = 'input' | 'select' | 'switcher' | 'toggle';
export type HostedFieldLayoutInput = {
    id?: string;
    type?: string;
    options?: PaymentTypeField['options'];
};
export type HostedFieldWithId = HostedFieldLayoutInput & {
    id: string;
};
export declare const hasHostedFieldId: <T extends HostedFieldLayoutInput>(field: T) => field is T & {
    id: string;
};
export declare const determineHostedFieldControl: (field: HostedFieldLayoutInput) => HostedFieldControl;
export declare const getHostedFieldGridColumnClass: (fieldId: string, hasCscField: boolean, hasExpiryField: boolean) => string;
export declare const estimateHostedFieldRowCount: (fields: readonly HostedFieldLayoutInput[] | null | undefined) => number;
//# sourceMappingURL=hostedFieldLayout.d.ts.map