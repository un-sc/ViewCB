import React from 'react';
import { INTERNAL_EXPAND_KEY, INTERNAL_SELECTION_KEY } from './constant';
function fixedWidth(width) {
    return typeof width === 'number' || typeof width === 'string'
        ? {
            width: width,
        }
        : {};
}
function ColGroup(props) {
    var prefixCls = props.prefixCls, columns = props.columns;
    return (React.createElement("colgroup", null, columns.map(function (col, index) {
        if (col.title === INTERNAL_EXPAND_KEY) {
            return (React.createElement("col", { key: INTERNAL_EXPAND_KEY, className: prefixCls + "-expand-icon-col", style: fixedWidth(col.width) }));
        }
        if (col.title === INTERNAL_SELECTION_KEY) {
            return (React.createElement("col", { key: INTERNAL_SELECTION_KEY, className: prefixCls + "-selection-col", style: fixedWidth(col.width) }));
        }
        return React.createElement("col", { key: col.key || index, style: fixedWidth(col.width) });
    })));
}
export default ColGroup;
