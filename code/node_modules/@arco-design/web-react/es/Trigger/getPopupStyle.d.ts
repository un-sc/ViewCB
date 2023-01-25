import { CSSProperties } from 'react';
import { TriggerProps, MouseLocationType } from './interface';
declare type ReturnType = {
    style?: CSSProperties;
    arrowStyle?: CSSProperties;
    realPosition?: TriggerProps['position'];
};
declare const _default: (props: TriggerProps, content: HTMLElement, child: HTMLElement, mountContainer: Element, mouseLocation: MouseLocationType) => ReturnType;
export default _default;
