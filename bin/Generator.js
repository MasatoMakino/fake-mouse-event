"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMouseEvent = void 0;
const FakeMouseEvent_1 = require("./FakeMouseEvent");
function getMouseEvent(type, values) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    values !== null && values !== void 0 ? values : (values = {});
    (_a = values.bubbles) !== null && _a !== void 0 ? _a : (values.bubbles = true);
    (_b = values.cancelable) !== null && _b !== void 0 ? _b : (values.cancelable = true);
    (_c = values.offsetX) !== null && _c !== void 0 ? _c : (values.offsetX = 0);
    (_d = values.offsetY) !== null && _d !== void 0 ? _d : (values.offsetY = 0);
    (_e = values.pageX) !== null && _e !== void 0 ? _e : (values.pageX = 0);
    (_f = values.pageY) !== null && _f !== void 0 ? _f : (values.pageY = 0);
    (_g = values.x) !== null && _g !== void 0 ? _g : (values.x = 0);
    (_h = values.y) !== null && _h !== void 0 ? _h : (values.y = 0);
    const e = new FakeMouseEvent_1.FakeMouseEvent(type, values);
    e.init(values);
    return e;
}
exports.getMouseEvent = getMouseEvent;
