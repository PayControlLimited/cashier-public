import { CashierSummaryActions } from '../types/CashierConfig.js';
/** Shared action shape. Legacy summary configuration keeps its permissive
 * structural contract; historical recovery additionally requires safe URLs,
 * unique IDs, bounded JSON and executable button actions. */
export declare const isCashierSummaryActions: (value: unknown, strict?: boolean) => value is CashierSummaryActions;
//# sourceMappingURL=actionsValidation.d.ts.map