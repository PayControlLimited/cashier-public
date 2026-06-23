import { UiAppearance, UiVariant } from '../../../ui/src/client.js';
import { BonusAvailability } from '../utils/bonuses.js';
import { CashierLayoutListType } from '../types/CashierConfig.js';
import { PaymentTypeListItemThemeSlot } from './PaymentTypeListItem.js';
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
    closeReasonPlacement?: 'meta' | 'info';
    themeSlot?: PaymentTypeListItemThemeSlot;
};
declare function BonusesList({ bonuses, selectedBonusCode, onSelect, onSkip, selectable, showSkipOption, isSkipSelected, listStyle, compact, stacked, itemVariant, itemAppearance, domScope, animateItems, closeReasonPlacement, themeSlot, }: BonusesListProps): import("react/jsx-runtime").JSX.Element;
export default BonusesList;
//# sourceMappingURL=BonusesList.d.ts.map