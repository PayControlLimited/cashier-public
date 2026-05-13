import { ReactNode } from 'react';
import { PendingWithdrawal } from '../utils/pendingWithdrawals.js';
type PendingWithdrawalSelectionListProps = {
    pendingWithdrawals: PendingWithdrawal[];
    formatCurrencyValue: (value: number) => string;
    formatDisplayValue: (value: unknown) => string;
    onSelect: (payment: PendingWithdrawal) => void;
    isDisabled?: boolean;
};
export default function PendingWithdrawalSelectionList({ pendingWithdrawals, formatCurrencyValue, formatDisplayValue, onSelect, isDisabled, }: PendingWithdrawalSelectionListProps): ReactNode;
export {};
//# sourceMappingURL=PendingWithdrawalSelectionList.d.ts.map