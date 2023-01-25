import { ReactElement } from 'react';
import { ConfirmProps } from '../confirm';
declare type hookNodalFunction = (config: ConfirmProps) => {
    close: () => void;
    update: (config: ConfirmProps) => void;
};
declare type modalFunctionsType = {
    confirm?: hookNodalFunction;
    info?: hookNodalFunction;
    success?: hookNodalFunction;
    warning?: hookNodalFunction;
    error?: hookNodalFunction;
};
declare function useModal(): [modalFunctionsType, ReactElement];
export default useModal;
