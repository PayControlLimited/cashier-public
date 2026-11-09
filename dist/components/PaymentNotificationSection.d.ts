import { CommonSchemasFieldNotification } from '../../../api/src/payments.ts';
import { TranslateKeysFn } from '../utils/paymentFieldUtils.js';
type PaymentNotificationSectionProps = {
    notification: CommonSchemasFieldNotification;
    /** Already resolved by the journey's trusted text adapter. Never interpolate twice. */
    resolvedContent?: string;
    translateKeys: TranslateKeysFn;
    tone?: 'default' | 'status';
    role?: 'alert' | 'status';
};
export declare const isTopFieldNotification: (notification: CommonSchemasFieldNotification | null | undefined) => notification is CommonSchemasFieldNotification & {
    orientation: "top";
};
export declare const FIELD_NOTIFICATION_ABOVE_CLASS_NAME = "mb-2.5 flex flex-col gap-2";
export declare const FIELD_NOTIFICATION_BELOW_CLASS_NAME = "mt-3 flex flex-col gap-2";
export default function PaymentNotificationSection({ notification, resolvedContent, role, translateKeys, tone, }: PaymentNotificationSectionProps): import('react').JSX.Element | null;
export {};
//# sourceMappingURL=PaymentNotificationSection.d.ts.map