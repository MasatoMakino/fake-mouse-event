"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakeMouseEvent = void 0;
class FakeMouseEvent extends MouseEvent {
    constructor(type, values) {
        super(type, values);
        this.offsetX = values.offsetX;
        this.offsetY = values.offsetY;
        this.pageX = values.pageX;
        this.pageY = values.pageY;
        this.x = values.x;
        this.y = values.y;
    }
}
exports.FakeMouseEvent = FakeMouseEvent;
//# sourceMappingURL=FakeMouseEvent.js.map