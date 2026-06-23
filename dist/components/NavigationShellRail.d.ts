import { ReactNode } from 'react';
import { NavigationShellItem, NavigationShellPlacement, NavigationShellReserveSpace } from '../context/navigationShell.js';
type NavigationShellRailProps = {
    placement: NavigationShellPlacement;
    items: NavigationShellItem[];
    showFade?: boolean;
    reserveSpace?: NavigationShellReserveSpace;
};
export default function NavigationShellRail({ placement, items, showFade, reserveSpace, }: NavigationShellRailProps): ReactNode;
export {};
//# sourceMappingURL=NavigationShellRail.d.ts.map