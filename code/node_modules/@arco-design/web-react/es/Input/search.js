var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import React, { useContext } from 'react';
import cs from '../_util/classNames';
import Input, { formatValue } from './input';
import Button from '../Button';
import IconSearch from '../../icon/react-icon/IconSearch';
import omit from '../_util/omit';
import { ConfigContext } from '../ConfigProvider';
import useMergeValue from '../_util/hooks/useMergeValue';
import IconLoading from '../../icon/react-icon/IconLoading';
var Search = React.forwardRef(function (props, ref) {
    var _a;
    var getPrefixCls = useContext(ConfigContext).getPrefixCls;
    var _b = __read(useMergeValue('', {
        defaultValue: 'defaultValue' in props ? formatValue(props.defaultValue, props.maxLength) : undefined,
        value: 'value' in props ? formatValue(props.value, props.maxLength) : undefined,
    }), 2), value = _b[0], setValue = _b[1];
    var className = props.className, style = props.style, placeholder = props.placeholder, disabled = props.disabled, searchButton = props.searchButton, loading = props.loading, defaultValue = props.defaultValue, rest = __rest(props, ["className", "style", "placeholder", "disabled", "searchButton", "loading", "defaultValue"]);
    var prefixCls = getPrefixCls('input-search');
    var classNames = cs(prefixCls, (_a = {},
        _a[prefixCls + "-button"] = searchButton,
        _a), className);
    var onSearch = function (e) {
        !disabled && props.onSearch && props.onSearch(value);
        props.onPressEnter && props.onPressEnter(e);
    };
    return (React.createElement(Input, __assign({}, omit(rest, ['onSearch']), { disabled: disabled, className: classNames, style: style, ref: ref, placeholder: placeholder, addAfter: searchButton ? (React.createElement(Button, { disabled: disabled, size: rest.size, className: prefixCls + "-btn", type: "primary", onClick: onSearch, loading: loading, loadingFixedWidth: true, icon: searchButton === true && !loading && React.createElement(IconSearch, null) }, searchButton !== true && searchButton)) : null, suffix: !searchButton && (loading ? React.createElement(IconLoading, null) : React.createElement(IconSearch, { onClick: onSearch })), onChange: function (value, e) {
            setValue(value);
            props.onChange && props.onChange(value, e);
        }, defaultValue: defaultValue, onPressEnter: onSearch })));
});
Search.displayName = 'Search';
export default Search;
