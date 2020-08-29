import { FakeMouseEvent } from "./FakeMouseEvent";
import { FakeMouseEventInit } from "./FakeMouseEventInit";

export function getMouseEvent(
  type: string,
  values?: FakeMouseEventInit
): FakeMouseEvent {
  values ??= {};
  values.bubbles ??= true;
  values.cancelable ??= true;
  values.offsetX ??= 0;
  values.offsetY ??= 0;
  values.pageX ??= 0;
  values.pageY ??= 0;
  values.x ??= 0;
  values.y ??= 0;

  const e: FakeMouseEvent = new FakeMouseEvent(type, values);
  e.init(values);

  return e;
}
