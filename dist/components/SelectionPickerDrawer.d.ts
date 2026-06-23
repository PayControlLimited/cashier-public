import { CSSProperties, ReactNode } from 'react';
type SelectionPickerDrawerRenderArgs = {
    close: () => void;
    isOpen: boolean;
    panelId: string;
    toggle: () => void;
};
type SelectionPickerDrawerProps = {
    domScope: string;
    title: ReactNode;
    triggerLabel: string;
    canOpen: boolean;
    shouldRender: boolean;
    triggerContent: (args: SelectionPickerDrawerRenderArgs) => ReactNode;
    children: (args: SelectionPickerDrawerRenderArgs) => ReactNode;
    animationStyle?: CSSProperties;
    animateTrigger?: boolean;
    floating?: boolean | 'adaptive';
    actionContent?: ReactNode;
    delegateTriggerInteraction?: boolean;
};
export default function SelectionPickerDrawer({ domScope, title, triggerLabel, canOpen, shouldRender, triggerContent, children, animationStyle, animateTrigger, floating, actionContent, delegateTriggerInteraction, }: SelectionPickerDrawerProps): ReactNode;
export {};
//# sourceMappingURL=SelectionPickerDrawer.d.ts.map