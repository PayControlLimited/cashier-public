import { PaymentsRequest } from '../../../api/src/payments.ts';
import { CashierConfig } from '../types/CashierConfig.js';
import { PaymentType } from '../types/payment.js';
import { HostedFieldsController, HostedFieldsFormData } from '../lib/hostedFields.js';
import { PaymentFormValues } from '../utils/paymentFieldUtils.js';
export declare const validateHostRiskContext: ({ type, method, values, hostRiskContext: context, }: Pick<BuildPaymentPayloadParams, "type" | "method" | "values" | "hostRiskContext">) => void;
type RequiredPaymentPayloadParams = Pick<PaymentsRequest, 'merchantId' | 'userId' | 'sessionId' | 'accountId' | 'currency'>;
type OptionalPaymentPayloadParams = Partial<Pick<PaymentsRequest, 'service' | 'bonusCode' | 'locales' | 'extra' | 'returnUrl'>>;
export type PreparePaymentPayloadParams = RequiredPaymentPayloadParams & OptionalPaymentPayloadParams & {
    values: PaymentFormValues;
    method: PaymentType['method'] | undefined;
    type: PaymentType['type'] | undefined;
    debug: boolean;
    overrideRaw?: string;
    hostRiskContext?: CashierConfig['hostRiskContext'];
    tokenizeHfData: (saveAccount?: boolean) => Promise<HostedFieldsFormData>;
    controller: HostedFieldsController | null;
};
type BuildPaymentPayloadParams = Omit<PreparePaymentPayloadParams, 'tokenizeHfData' | 'controller'>;
export declare const preparePaymentValues: (values: PaymentFormValues, tokenizeHfData: (saveAccount?: boolean) => Promise<HostedFieldsFormData>, controller: HostedFieldsController | null) => Promise<PaymentFormValues>;
export declare const buildPaymentPayload: (params: BuildPaymentPayloadParams) => PaymentsRequest;
export declare const preparePaymentPayload: (params: PreparePaymentPayloadParams) => Promise<PaymentsRequest>;
export {};
//# sourceMappingURL=paymentFormPayload.d.ts.map