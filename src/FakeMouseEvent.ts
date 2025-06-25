import type { ButtonType, FakeMouseEventInit } from "./FakeMouseEventInit";

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
  layerX: number;
  layerY: number;
  shiftKey: boolean;
  x: number;
  y: number;

  /**
   * MouseEvent.getModifierState()のモック関数
   * @see https://developer.mozilla.org/ja/docs/Web/API/MouseEvent/getModifierState
   * @param keyArg
   */
  public getModifierState(_keyArg: string): boolean {
    return false;
  }

  /**
   * MouseEvent.initMouseEvent()のモック関数
   * @see https://developer.mozilla.org/ja/docs/Web/API/MouseEvent/initMouseEvent
   * @deprecated
   *
   * @param _typeArg
   * @param _canBubbleArg
   * @param _cancelableArg
   * @param _viewArg
   * @param _detailArg
   * @param _screenXArg
   * @param _screenYArg
   * @param _clientXArg
   * @param _clientYArg
   * @param _ctrlKeyArg
   * @param _altKeyArg
   * @param _shiftKeyArg
   * @param _metaKeyArg
   * @param _buttonArg
   * @param _relatedTargetArg
   */
  initMouseEvent(
    _typeArg: string,
    _canBubbleArg: boolean,
    _cancelableArg: boolean,
    _viewArg: Window,
    _detailArg: number,
    _screenXArg: number,
    _screenYArg: number,
    _clientXArg: number,
    _clientYArg: number,
    _ctrlKeyArg: boolean,
    _altKeyArg: boolean,
    _shiftKeyArg: boolean,
    _metaKeyArg: boolean,
    _buttonArg: number,
    _relatedTargetArg: EventTarget | null,
  ): void {}

  constructor(type: string, eventInitDict?: FakeMouseEventInit) {
    super(type, eventInitDict);
    this.init(eventInitDict);
  }

  protected init(values: FakeMouseEventInit) {
    this.offsetX = values.offsetX;
    this.offsetY = values.offsetY;
    this.pageX = values.pageX;
    this.pageY = values.pageY;
    this.x = values.x;
    this.y = values.y;
    this.layerX = values.layerX;
    this.layerY = values.layerY;
    this.clientX = values.clientX;
    this.clientY = values.clientY;
  }
}
