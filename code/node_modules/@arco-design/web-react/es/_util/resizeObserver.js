var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { findDOMNode } from 'react-dom';
var ResizeObserverComponent = /** @class */ (function (_super) {
    __extends(ResizeObserverComponent, _super);
    function ResizeObserverComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentWillUnmount = function () {
            if (_this.resizeObserver) {
                _this.destroyResizeObserver();
            }
        };
        _this.createResizeObserver = function () {
            _this.resizeObserver = new ResizeObserver(function (entry) {
                var onResize = _this.props.onResize;
                onResize && onResize(entry);
            });
            _this.resizeObserver.observe(findDOMNode(_this));
        };
        _this.destroyResizeObserver = function () {
            _this.resizeObserver && _this.resizeObserver.disconnect();
            _this.resizeObserver = null;
        };
        return _this;
    }
    ResizeObserverComponent.prototype.componentDidMount = function () {
        if (!React.isValidElement(this.props.children)) {
            console.warn('The children of ResizeObserver is invalid.');
        }
        else {
            this.createResizeObserver();
        }
    };
    ResizeObserverComponent.prototype.componentDidUpdate = function () {
        if (!this.resizeObserver && findDOMNode(this)) {
            this.createResizeObserver();
        }
    };
    ResizeObserverComponent.prototype.render = function () {
        return this.props.children;
    };
    return ResizeObserverComponent;
}(React.Component));
export default ResizeObserverComponent;
