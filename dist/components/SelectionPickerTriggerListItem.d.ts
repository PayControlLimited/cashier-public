import { ReactNode } from 'react';
import { PaymentTypeListItemProps } from '../ui/PaymentTypeListItem.js';
export type SelectionPickerTriggerListItemProps = Omit<PaymentTypeListItemProps, 'appearance' | 'balanceLogo' | 'className' | 'density' | 'embedded' | 'listStyle' | 'shape' | 'variant'> & {
    spacing?: 'default' | 'payment-list';
};
export declare function SelectionPickerTriggerAction({ children, }: {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export default function SelectionPickerTriggerListItem({ actionStopsPropagation, actions, actionsAlignment, animationClassName, animationStyle, ariaControls, ariaExpanded, ariaLabel, badges, bonusLabel, compact, description, descriptionPresentation, domSlug, fee, hasAvailableBonuses, hoverMode, includeDataTheme, infoDrawer, interactive, interactiveSurface, isDisabled, isSelected, limits, logo, logoContent, logoContentPresentation, logoSurface, meta, metaPlacement, name, onSelect, section, selectionId, showMeta, showSelectedIndicator, spacing, themeSlot, title, }: SelectionPickerTriggerListItemProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=SelectionPickerTriggerListItem.d.ts.map