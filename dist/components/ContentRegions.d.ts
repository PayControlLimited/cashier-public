import { CashierPresentationScreenId } from '../types/presentation.js';
import { usePurchasePresentation } from '../hooks/usePurchasePresentation.js';
/** One owner for messages, the combined item collection and merchant actions. */
declare function ContentRegionBody({ placement, purchase, layout, phase, screen, onRestart, collectionMember, }: {
    collectionMember?: boolean;
    placement: 'top' | 'bottom' | 'summary';
    purchase: ReturnType<typeof usePurchasePresentation>;
    layout?: 'screen' | 'paymentStack' | 'member';
    phase: 'preview' | 'result';
    screen: CashierPresentationScreenId;
    onRestart?: () => void;
}): import('react').JSX.Element | null;
/** Canonical elements and released bonus collections share the same display primitives. */
export declare function ContentRegion(props: Parameters<typeof ContentRegionBody>[0]): import('react').JSX.Element | null;
export declare const SummaryElementsContext: import('react').Context<{
    selectedOffer?: import('../types/offers.js').CashierFrozenOffer;
    orderPricing?: import('../types/offers.js').CashierResolvedPriceComparison;
    content: import('react').ReactNode;
    hasContent: boolean;
}>;
export {};
//# sourceMappingURL=ContentRegions.d.ts.map