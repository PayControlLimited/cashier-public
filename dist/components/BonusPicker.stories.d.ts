import { StoryObj } from '@storybook/react-vite';
import { CashierBonusDefinition } from '../types/CashierConfig.js';
type BonusPickerStoryProps = {
    amount: string;
    selectedBonusCode: string | null;
    configuredBonuses: CashierBonusDefinition[];
};
declare function StoryHarness({ amount, selectedBonusCode, configuredBonuses, }: BonusPickerStoryProps): import('react').JSX.Element;
declare const meta: {
    title: string;
    component: typeof StoryHarness;
    args: {
        amount: string;
        selectedBonusCode: string;
        configuredBonuses: CashierBonusDefinition[];
    };
    render: (args: BonusPickerStoryProps) => import('react').JSX.Element;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const SelectedTopUp: Story;
export declare const FullClaim: Story;
export declare const EmptySelection: Story;
export declare const CloseToAmount: Story;
//# sourceMappingURL=BonusPicker.stories.d.ts.map