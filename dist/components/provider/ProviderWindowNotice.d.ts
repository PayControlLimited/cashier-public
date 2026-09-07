import { CashierPresentationText } from '../../types/presentation.js';
type ProviderWindowNoticeProps = {
    manualOpenRequired: boolean;
    title: CashierPresentationText;
    manualDescription: CashierPresentationText;
    autoDescription: CashierPresentationText;
    buttonLabel: CashierPresentationText;
    onManualOpen: () => void;
};
declare const ProviderWindowNotice: ({ manualOpenRequired, title, manualDescription, autoDescription, buttonLabel, onManualOpen, }: ProviderWindowNoticeProps) => import("react").JSX.Element;
export default ProviderWindowNotice;
//# sourceMappingURL=ProviderWindowNotice.d.ts.map