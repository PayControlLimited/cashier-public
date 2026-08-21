import { CSSProperties, ComponentPropsWithoutRef } from 'react';
import { Button } from '../../../ui/src/index.ts';
import { AmountLimits } from '../utils/amount.js';
type SuggestedAmountButtonSize = ComponentPropsWithoutRef<typeof Button>['size'];
type SuggestedAmountButtonsProps = {
    suggestions: string[];
    activeSuggestion?: string;
    onSelect: (suggestion: string) => void;
    formatLabel?: (suggestion: string) => string;
    amountLimits?: AmountLimits;
    size?: SuggestedAmountButtonSize;
    disabled?: boolean;
    className?: string;
    style?: CSSProperties;
};
declare function SuggestedAmountButtons({ suggestions, activeSuggestion, onSelect, formatLabel, amountLimits, size, disabled, className, style, }: SuggestedAmountButtonsProps): import("react").JSX.Element | null;
export default SuggestedAmountButtons;
//# sourceMappingURL=SuggestedAmountButtons.d.ts.map