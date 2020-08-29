import { FakeMouseEventInit } from "./FakeMouseEventInit";

class MouseEventMock extends UIEvent {
  altKey: boolean;
  button: number;
  buttons: number;
  clientX: number;
  clientY: number;
  ctrlKey: boolean;
  metaKey: boolean;
  movementX: number;
  movementY: number;
  offsetX: number;
  offsetY: number;
  pageX: number;
  pageY: number;
  relatedTarget: EventTarget | null;
  screenX: number;
  screenY: number;
  shiftKey: boolean;
  x: number;
  y: number;
  public getModifierState(keyArg: string): boolean {
    return false;
  }
  initMouseEvent(
    typeArg: string,
    canBubbleArg: boolean,
    cancelableArg: boolean,
    viewArg: Window,
    detailArg: number,
    screenXArg: number,
    screenYArg: number,
    clientXArg: number,
    clientYArg: number,
    ctrlKeyArg: boolean,
    altKeyArg: boolean,
    shiftKeyArg: boolean,
    metaKeyArg: boolean,
    buttonArg: number,
    relatedTargetArg: EventTarget | null
  ): void {}

  constructor(type: string, eventInitDict?: EventInit) {
    super(type, eventInitDict);
  }
}
export class FakeMouseEvent extends MouseEventMock {
  init(values: FakeMouseEventInit) {
    this.offsetX = values.offsetX;
    this.offsetY = values.offsetY;
    this.pageX = values.pageX;
    this.pageY = values.pageY;
    this.x = values.x;
    this.y = values.y;
  }
}
