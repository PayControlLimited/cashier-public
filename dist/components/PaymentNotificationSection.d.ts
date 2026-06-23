import { CommonSchemasFieldNotification } from '../../../api/src/payments.ts';
type PaymentNotificationSectionProps = {
    notification: CommonSchemasFieldNotification;
    translateKey: (key: string | null | undefined) => string;
    tone?: 'default' | 'status';
};
export default function PaymentNotificationSection({ notification, translateKey, tone, }: PaymentNotificationSectionProps): import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=PaymentNotificationSection.d.ts.map