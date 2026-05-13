import { IframeHTMLAttributes, ReactNode } from 'react';
export declare const buildProviderIframeAllow: (allow?: string) => string;
type ProviderIframeProps = Omit<IframeHTMLAttributes<HTMLIFrameElement>, 'className' | 'title'> & {
    title: string;
    hiddenIframe?: boolean;
};
declare function ProviderIframe({ src, title, allow, hiddenIframe, tabIndex, ...rest }: ProviderIframeProps): ReactNode;
export default ProviderIframe;
//# sourceMappingURL=ProviderIframe.d.ts.map