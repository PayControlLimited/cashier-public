import { ReactNode } from 'react';
import { PaymentType } from '../../../api/src/payments.js';
export type AccountDeleteHandler = (paymentType: PaymentType) => void;
export type UseAccountDeleteResult = {
    requestAccountDelete: AccountDeleteHandler;
    actionConfirmationModal: ReactNode;
};
declare const useAccountDelete: () => UseAccountDeleteResult;
export default useAccountDelete;
//# sourceMappingURL=useAccountDelete.d.ts.map