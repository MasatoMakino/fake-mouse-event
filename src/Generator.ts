import { FakeMouseEvent } from "./FakeMouseEvent";
import { FakeMouseEventInit } from "./FakeMouseEventInit";
import { FakePointerEventInit } from "./FakePointerEventInit";
import { FakePointerEvent } from "./FakePointerEvent";

function initMouseEventOptions(values?: FakeMouseEventInit) {
  values ??= {};
  values.bubbles ??= true;
  values.cancelable ??= true;
  values.offsetX ??= 0;
  values.offsetY ??= 0;
  values.pageX ??= 0;
  values.pageY ??= 0;
  values.x ??= 0;
  values.y ??= 0;
  return values;
}

function initPointerEventOptions(values?: FakePointerEventInit) {
  const mouseEventOptions: FakePointerEventInit = initMouseEventOptions(values);
  mouseEventOptions.pointerId ??= 0;
  mouseEventOptions.width ??= 0;
  mouseEventOptions.height ??= 0;
  mouseEventOptions.pressure ??= 0;
  mouseEventOptions.tangentialPressure ??= 0;
  mouseEventOptions.tiltX ??= 0;
  mouseEventOptions.tiltY ??= 0;
  mouseEventOptions.twist ??= 0;
  mouseEventOptions.pointerType ??= "mouse";
  mouseEventOptions.isPrimary ??= true;
  return mouseEventOptions;
}
export function getMouseEvent(
  type: string,
  values?: FakeMouseEventInit,
): FakeMouseEvent {
  return new FakeMouseEvent(type, initMouseEventOptions(values));
}

export function getPointerEvent(
  type: string,
  values?: FakePointerEventInit,
): FakePointerEvent {
  return new FakePointerEvent(type, initPointerEventOptions(values));
}
