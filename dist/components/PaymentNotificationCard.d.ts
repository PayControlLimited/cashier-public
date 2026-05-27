import { CommonSchemasFieldNotification } from '../../../api/src/payments.ts';
type PaymentNotificationCardProps = {
    notification: CommonSchemasFieldNotification;
    translateKey: (key: string | null | undefined) => string;
    tone?: 'default' | 'status';
};
export default function PaymentNotificationCard({ notification, translateKey, tone, }: PaymentNotificationCardProps): import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=PaymentNotificationCard.d.ts.map