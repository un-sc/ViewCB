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
// 精确 加减乘除
import { plus, minus, times, divide } from 'number-precision';
export function getPrecision(val) {
    var decimal = ("" + val).split('.')[1];
    return (decimal && decimal.length) || 0;
}
export function formatPercent(val) {
    return val * 100 + "%";
}
export function getOffset(val, range) {
    var value = Number(val);
    if (range && !isNaN(value)) {
        var _a = __read(range, 2), min = _a[0], max = _a[1];
        // 精确算出=> (value - min) / (max - min);
        return divide(minus(value, min), minus(max, min));
    }
    return 0;
}
export function valueInRange(val, range) {
    var value = Number(val);
    range.sort(function (a, b) { return a - b; });
    return value >= range[0] && value <= range[1];
}
export function isNotEmpty(val) {
    return val || val === 0;
}
// 把 20% => 0.2
export function rateToFloat(val) {
    var rate = parseFloat(val);
    var fixedRate = rate > 1 ? (rate / 100).toFixed(2) : rate;
    var floatRate = parseFloat(fixedRate);
    if (!isNaN(floatRate) && floatRate >= 0 && floatRate <= 1) {
        return floatRate;
    }
    return undefined;
}
export function getIntervalOffset(val, intervalConfig) {
    // 当前值所在的区间
    var currentInterval = intervalConfig.find(function (config) { return val >= config.begin && val <= config.end; });
    if (currentInterval) {
        var beginOffset = currentInterval.beginOffset, begin = currentInterval.begin, end = currentInterval.end, endOffset = currentInterval.endOffset;
        var offsetInInterval = getOffset(val, [begin, end]);
        // endOffset - beginOffset
        var intervalOffset = minus(endOffset, beginOffset);
        // 当前值在整个滑动轴上占的比例 = 在区间占的比例 * 区间相对于整个轴的比例
        // offsetInInterval* intervalOffset
        var offset = times(offsetInInterval, intervalOffset);
        return plus(beginOffset, offset);
    }
}
