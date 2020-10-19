"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakeMouseEvent = void 0;
class FakeMouseEvent extends UIEvent {
    constructor(type, eventInitDict) {
        super(type, eventInitDict);
        this.init(eventInitDict);
    }
    /**
     * MouseEvent.getModifierState()のモック関数
     * @see https://developer.mozilla.org/ja/docs/Web/API/MouseEvent/getModifierState
     * @param keyArg
     */
    getModifierState(keyArg) {
        return false;
    }
    /**
     * MouseEvent.initMouseEvent()のモック関数
     * @see https://developer.mozilla.org/ja/docs/Web/API/MouseEvent/initMouseEvent
     *
     * @param typeArg
     * @param canBubbleArg
     * @param cancelableArg
     * @param viewArg
     * @param detailArg
     * @param screenXArg
     * @param screenYArg
     * @param clientXArg
     * @param clientYArg
     * @param ctrlKeyArg
     * @param altKeyArg
     * @param shiftKeyArg
     * @param metaKeyArg
     * @param buttonArg
     * @param relatedTargetArg
     */
    initMouseEvent(typeArg, canBubbleArg, cancelableArg, viewArg, detailArg, screenXArg, screenYArg, clientXArg, clientYArg, ctrlKeyArg, altKeyArg, shiftKeyArg, metaKeyArg, buttonArg, relatedTargetArg) { }
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
