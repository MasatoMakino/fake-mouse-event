import { ButtonType, FakeMouseEventInit } from "./FakeMouseEventInit";

export class FakeMouseEvent extends UIEvent implements FakeMouseEventInit {
  altKey: boolean;
  button: ButtonType;
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

  /**
   * MouseEvent.getModifierState()のモック関数
   * @see https://developer.mozilla.org/ja/docs/Web/API/MouseEvent/getModifierState
   * @param keyArg
   */
  public getModifierState(keyArg: string): boolean {
    return false;
  }

  /**
   * MouseEvent.initMouseEvent()のモック関数
   * @see https://developer.mozilla.org/ja/docs/Web/API/MouseEvent/initMouseEvent
   * @deprecated
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
    relatedTargetArg: EventTarget | null,
  ): void {}

  constructor(type: string, eventInitDict?: FakeMouseEventInit) {
    super(type, eventInitDict);
    Object.assign(this, eventInitDict);
  }
}
