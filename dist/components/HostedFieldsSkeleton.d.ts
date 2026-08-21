import { LocalisedPaymentTypeField } from '../types/payment.js';
type LocalisedHostedFieldEntry = LocalisedPaymentTypeField | readonly LocalisedPaymentTypeField[];
type HostedFieldsSkeletonStateProps = {
    state?: 'loading';
    errorMessage?: never;
} | {
    state: 'error';
    errorMessage: string;
};
type HostedFieldsSkeletonProps = HostedFieldsSkeletonStateProps & {
    fields: readonly LocalisedHostedFieldEntry[];
    className?: string;
};
export default function HostedFieldsSkeleton({ fields, className, state, errorMessage, }: HostedFieldsSkeletonProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=HostedFieldsSkeleton.d.ts.map