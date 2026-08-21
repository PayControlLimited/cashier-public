import { ReactNode } from 'react';
import { PendingWithdrawal } from '../utils/pendingWithdrawals.js';
type PendingWithdrawalSelectionListProps = {
    pendingWithdrawals: PendingWithdrawal[];
    formatPendingWithdrawalAmount: (payment: PendingWithdrawal) => string;
    formatDisplayValue: (value: unknown) => string;
    onSelect: (payment: PendingWithdrawal) => void;
    isDisabled?: boolean;
    focusPaymentId?: string | null;
    isFocusRestoreActive?: boolean;
};
export default function PendingWithdrawalSelectionList({ pendingWithdrawals, formatPendingWithdrawalAmount, formatDisplayValue, onSelect, isDisabled, focusPaymentId, isFocusRestoreActive, }: PendingWithdrawalSelectionListProps): ReactNode;
export {};
//# sourceMappingURL=PendingWithdrawalSelectionList.d.ts.map