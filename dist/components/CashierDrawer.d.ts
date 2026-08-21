import { ReactNode } from 'react';
import { DrawerSide, UiVariant } from '../../../ui/src/client.js';
type CashierDrawerProps = {
    isOpen: boolean;
    onClose?: () => void;
    side?: DrawerSide;
    title?: ReactNode;
    children?: ReactNode;
    portalContainer?: HTMLElement | null;
    closeButtonLabel?: string;
    overlayClassName?: string;
    contentClassName?: string;
    variant?: UiVariant;
    contentRef?: (node: HTMLDivElement | null) => void;
};
export default function CashierDrawer({ isOpen, onClose, side, title, children, portalContainer, closeButtonLabel, overlayClassName, contentClassName, variant, contentRef, }: CashierDrawerProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=CashierDrawer.d.ts.map