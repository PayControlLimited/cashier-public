import { UiAppearance, UiVariant } from '../../../ui/src/client.js';
import { BonusAvailability } from '../utils/bonuses.js';
import { CashierLayoutListType } from '../types/CashierConfig.js';
type BonusesListProps = {
    bonuses: BonusAvailability[];
    selectedBonusCode: string | null;
    onSelect: (code: string) => void;
    onSkip?: () => void;
    selectable?: boolean;
    showSkipOption?: boolean;
    isSkipSelected?: boolean;
    listStyle?: CashierLayoutListType;
    compact?: boolean;
    stacked?: boolean;
    itemVariant?: UiVariant;
    itemAppearance?: UiAppearance;
    domScope?: string;
    animateItems?: boolean;
};
declare function BonusesList({ bonuses, selectedBonusCode, onSelect, onSkip, selectable, showSkipOption, isSkipSelected, listStyle, compact, stacked, itemVariant, itemAppearance, domScope, animateItems, }: BonusesListProps): import("react/jsx-runtime").JSX.Element;
export default BonusesList;
//# sourceMappingURL=BonusesList.d.ts.map