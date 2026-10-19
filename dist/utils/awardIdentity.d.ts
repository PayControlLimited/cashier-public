import { CashierFrozenAward } from '../types/CashierConfig.js';
/** IDs are unique within their source, never deduplicated by name or quantity. */
export declare const awardIdentity: (award: Pick<CashierFrozenAward, "id" | "source">) => string;
//# sourceMappingURL=awardIdentity.d.ts.map