import { ChangeEventHandler, CompositionEventHandler, KeyboardEventHandler } from 'react';
import { InputProps, TextAreaProps } from './interface';
export default function useComposition({ value, maxLength, onChange, onKeyDown, onPressEnter, beforeTriggerValueChangeCallback, }: {
    value: string;
    maxLength: number;
    onChange: InputProps['onChange'];
    onKeyDown: InputProps['onKeyDown'] | TextAreaProps['onKeyDown'];
    onPressEnter: InputProps['onPressEnter'];
    beforeTriggerValueChangeCallback?: (newValue: string) => void;
}): {
    compositionValue: string;
    triggerValueChangeCallback: typeof onChange;
    compositionHandler: CompositionEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    valueChangeHandler: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    keyDownHandler: KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};
