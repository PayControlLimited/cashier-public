import { PaymentStatusResponse } from '../../../../api/src/payments.ts';
import { PaymentType } from '../../types/payment.js';
type ProviderFormProps = {
    form: NonNullable<PaymentStatusResponse['form']>;
    observerPaymentType?: PaymentType;
    observerSourceId?: string;
};
export declare const getProviderFormObserverSourceId: (form: ProviderFormProps["form"], paymentId?: string) => string;
declare const ProviderForm: ({ form, observerPaymentType, observerSourceId, }: ProviderFormProps) => import("react").JSX.Element;
export default ProviderForm;
//# sourceMappingURL=ProviderForm.d.ts.map