import { AmountAssessment } from '../../../cashier-core/src/index.ts';
import { AmountAssessmentDisplayOptions } from './amountAssessment.js';
/** Unfinished editable drafts may reach a method's amount editor. */
export declare const isAmountSelectionDisabled: (assessment: AmountAssessment, lockAmount: boolean) => boolean;
/** Selection recovery follows the choices the payer can actually make. */
export declare const formatAmountSelectionError: (assessment: AmountAssessment, translateKey: (key: string) => string, formatAmount: (value: string) => string, options: AmountAssessmentDisplayOptions & {
    lockAmount: boolean;
    hasAmountlessAlternative: boolean;
}) => string | undefined;
//# sourceMappingURL=amountSelection.d.ts.map