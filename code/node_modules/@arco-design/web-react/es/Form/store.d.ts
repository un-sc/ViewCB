import React from 'react';
import Control from './control';
import { FieldError, FormProps, KeyType, FormValidateFn } from './interface';
export declare type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
/**
 * setFieldValue: setFieldsValue, setFieldValue, setFields
 * innerSetValue: such as Input change
 * reset： 重置
 */
export declare type NotifyType = 'setFieldValue' | 'reset' | 'innerSetValue';
export declare type innerCallbackType = 'onValuesChange' | 'onSubmit' | 'onChange' | 'onSubmitFailed';
export declare type StoreChangeInfo<T> = {
    prev: any;
    field?: T | T[];
    isFormList?: boolean;
    ignore?: boolean;
    changeValues?: {
        [key in KeyType]: unknown;
    };
    data?: {
        errors?: FieldError;
        warnings?: React.ReactNode;
        touched?: boolean;
    };
};
declare class Store<FormData = any, FieldValue = FormData[keyof FormData], FieldKey extends KeyType = keyof FormData> {
    private registerFields;
    private registerWatchers;
    private touchedFields;
    private store;
    private initialValues;
    private callbacks;
    private notifyWatchers;
    private triggerValuesChange;
    private triggerTouchChange;
    innerSetCallbacks: (values: Pick<FormProps<FormData, FieldValue, FieldKey>, innerCallbackType> & {
        onValidateFail?: (errors: { [key in FieldKey]: FieldError<FieldValue>; }) => void;
    }) => void;
    registerWatcher: (item: any) => () => void;
    registerField: (item: Control<FormData, FieldValue, FieldKey>) => () => void;
    private getRegisteredFields;
    getRegisteredField: (field?: FieldKey) => Control<FormData, FieldValue, FieldKey>;
    private notify;
    innerSetInitialValues: (values: Partial<FormData>) => void;
    innerSetInitialValue: (field: FieldKey, value: FieldValue) => void;
    private _getIterativelyKeysByField;
    private _inTouchFields;
    private _popTouchField;
    private _pushTouchField;
    /**
     *
     * 内部使用，更新value，会同时触发onChange 和 onValuesChange
     * @options.isFormList  强制更新field对应的组件包括其子组件,form
     */
    innerSetFieldValue: (field: FieldKey, value: FieldValue, options?: {
        isFormList?: boolean;
        ignore?: boolean;
    }) => void;
    innerGetStore: () => Partial<FormData>;
    getTouchedFields: () => FieldKey[];
    setFieldValue: (field: FieldKey, value: FieldValue) => void;
    setFieldsValue: (values: DeepPartial<FormData>) => void;
    setFields: (obj: { [field in FieldKey]?: {
        value?: FieldValue;
        error?: FieldError<FieldValue>;
        touched?: boolean;
        warning?: React.ReactNode;
    }; }) => void;
    getFieldValue: (field: FieldKey) => FieldValue;
    getFieldError: (field: FieldKey) => FieldError<FieldValue> | null;
    getFieldsError: (fields?: FieldKey[]) => { [key in FieldKey]?: FieldError<FieldValue>; };
    getFields: () => Partial<FormData>;
    getFieldsValue: (fields?: FieldKey[]) => Partial<FormData>;
    resetFields: (fieldKeys?: FieldKey | FieldKey[]) => void;
    validate: FormValidateFn<FormData, FieldValue, FieldKey>;
    submit: () => void;
    clearFields: (fieldKeys?: FieldKey | FieldKey[]) => void;
}
export default Store;
