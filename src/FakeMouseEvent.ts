import type { ButtonType, FakeMouseEventInit } from "./FakeMouseEventInit";

export class FakeMouseEvent extends UIEvent implements FakeMouseEventInit {
  altKey: boolean = false;
  button: ButtonType = 0;
  buttons: number = 0;
  clientX: number = 0;
  clientY: number = 0;
  ctrlKey: boolean = false;
  metaKey: boolean = false;
  movementX: number = 0;
  movementY: number = 0;
  offsetX: number = 0;
  offsetY: number = 0;
  pageX: number = 0;
  pageY: number = 0;
  relatedTarget: EventTarget | null = null;
  screenX: number = 0;
  screenY: number = 0;
  layerX: number = 0;
  layerY: number = 0;
  shiftKey: boolean = false;
  x: number = 0;
  y: number = 0;

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

  protected init(values: FakeMouseEventInit = {}) {
    this.altKey = values.altKey ?? false;
    this.button = values.button ?? 0;
    this.buttons = values.buttons ?? 0;
    this.clientX = values.clientX ?? 0;
    this.clientY = values.clientY ?? 0;
    this.ctrlKey = values.ctrlKey ?? false;
    this.metaKey = values.metaKey ?? false;
    this.movementX = values.movementX ?? 0;
    this.movementY = values.movementY ?? 0;
    this.offsetX = values.offsetX ?? 0;
    this.offsetY = values.offsetY ?? 0;
    this.pageX = values.pageX ?? 0;
    this.pageY = values.pageY ?? 0;
    this.screenX = values.screenX ?? 0;
    this.screenY = values.screenY ?? 0;
    this.layerX = values.layerX ?? 0;
    this.layerY = values.layerY ?? 0;
    this.shiftKey = values.shiftKey ?? false;
    this.x = values.x ?? 0;
    this.y = values.y ?? 0;
  }
}
