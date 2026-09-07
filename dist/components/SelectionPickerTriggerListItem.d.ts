import { ReactNode } from 'react';
import { PaymentTypeListItemProps } from '../ui/PaymentTypeListItem.js';
export type SelectionPickerTriggerListItemProps = Omit<PaymentTypeListItemProps, 'appearance' | 'balanceLogo' | 'className' | 'density' | 'embedded' | 'listStyle' | 'shape' | 'variant'> & {
    spacing?: 'default' | 'payment-list';
};
export declare function SelectionPickerTriggerAction({ children, }: {
    children: ReactNode;
}): import("react").JSX.Element;
export default function SelectionPickerTriggerListItem({ actionStopsPropagation, actions, actionsAlignment, animationClassName, animationStyle, ariaControls, ariaExpanded, ariaLabel, badges, bonusLabel, compact, description, descriptionPresentation, domSlug, fee, hasAvailableBonuses, hoverMode, includeDataTheme, infoDrawer, interactive, interactiveSurface, isDisabled, isUnavailable, isSelected, limits, logo, logoCompact, logoContent, logoContentPresentation, logoSurface, meta, metaPlacement, name, nameKeys, onSelect, presentationPaymentType, section, selectionId, showMeta, showSelectedIndicator, spacing, themeSlot, title, }: SelectionPickerTriggerListItemProps): import("react").JSX.Element;
//# sourceMappingURL=SelectionPickerTriggerListItem.d.ts.map