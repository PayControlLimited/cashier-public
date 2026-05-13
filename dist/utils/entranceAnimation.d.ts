import { CSSProperties } from 'react';
export type EntranceAnimationDirection = 'forward' | 'reverse';
export type EntranceAnimationDistribution = 'step' | 'linear' | 'ease-out';
export type SelectionListStaggerMode = 'distributed' | 'compressed-tail';
export type SelectionListAnimationStyleOptions = {
    baseDelayMs?: number;
    maxAdditionalDelayMs?: number;
    distribution?: EntranceAnimationDistribution;
    staggerMode?: SelectionListStaggerMode;
};
type ResolveEntranceAnimationStyleOptions = {
    index: number;
    total?: number;
    direction?: EntranceAnimationDirection;
    baseDelayMs?: number;
    staggerMs?: number;
    maxAdditionalDelayMs?: number;
    distribution?: EntranceAnimationDistribution;
};
export declare const ENTRANCE_ANIMATION_SURFACE_CLASSNAME = "pc-enter-rise";
export declare const ENTRANCE_ANIMATION_ITEM_CLASSNAME = "pc-enter-rise-item";
export declare const ENTRANCE_ANIMATION_PANEL_SURFACE_CLASSNAME = "pc-enter-panel";
export declare const ENTRANCE_ANIMATION_PANEL_ITEM_CLASSNAME = "pc-enter-panel-item";
export declare const ENTRANCE_ANIMATION_LIST_SURFACE_CLASSNAME = "pc-enter-sweep";
export declare const ENTRANCE_ANIMATION_LIST_ITEM_CLASSNAME = "pc-enter-sweep-item";
export declare const resolveEntranceAnimationStyle: ({ index, total, direction, baseDelayMs, staggerMs, maxAdditionalDelayMs, distribution, }: ResolveEntranceAnimationStyleOptions) => CSSProperties;
export declare const resolveSelectionListAnimationStyle: (index: number, total: number, direction?: EntranceAnimationDirection, { baseDelayMs, maxAdditionalDelayMs, distribution, staggerMode, }?: SelectionListAnimationStyleOptions) => CSSProperties;
export declare const resolveSelectionListSurfaceAnimationStyle: ({ baseDelayMs, }?: SelectionListAnimationStyleOptions) => CSSProperties;
export {};
//# sourceMappingURL=entranceAnimation.d.ts.map