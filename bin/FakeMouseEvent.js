"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakeMouseEvent = void 0;
class MouseEventMock extends UIEvent {
    constructor(type, eventInitDict) {
        super(type, eventInitDict);
    }
    getModifierState(keyArg) {
        return false;
    }
    initMouseEvent(typeArg, canBubbleArg, cancelableArg, viewArg, detailArg, screenXArg, screenYArg, clientXArg, clientYArg, ctrlKeyArg, altKeyArg, shiftKeyArg, metaKeyArg, buttonArg, relatedTargetArg) { }
}
class FakeMouseEvent extends MouseEventMock {
    init(values) {
        this.offsetX = values.offsetX;
        this.offsetY = values.offsetY;
        this.pageX = values.pageX;
        this.pageY = values.pageY;
        this.x = values.x;
        this.y = values.y;
    }
}
exports.FakeMouseEvent = FakeMouseEvent;
