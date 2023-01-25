import { useContext } from 'react';
import { FormContext } from '../context';
var useFormContext = function () {
    var formCtx = useContext(FormContext);
    return {
        form: formCtx.store,
        disabled: formCtx.disabled,
    };
};
export default useFormContext;
