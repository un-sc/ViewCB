/// <reference types="react" />
interface AnchorContext {
    currentLink: string;
    onLinkClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => void;
    addLink: (href: string, node: HTMLElement) => void;
    removeLink: (href: string) => void;
}
declare const _default: import("react").Context<AnchorContext>;
export default _default;
