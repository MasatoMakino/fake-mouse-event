import { FakeMouseEvent } from "./FakeMouseEvent";
import type { FakePointerEventInit } from "./FakePointerEventInit";

export class FakePointerEvent
  extends FakeMouseEvent
  implements FakePointerEventInit
{
  pointerId: number = 0;
  width: number = 1;
  height: number = 1;
  pressure: number = 0;
  tangentialPressure: number = 0;
  tiltX: number = 0;
  tiltY: number = 0;
  twist: number = 0;
  pointerType: string = "";
  isPrimary: boolean = false;

  constructor(type: string, values?: FakePointerEventInit) {
    super(type, values);
    this.init(values);
  }

  protected override init(values: FakePointerEventInit = {}) {
    super.init(values);
    this.pointerId = values.pointerId ?? 0;
    this.width = values.width ?? 1;
    this.height = values.height ?? 1;
    this.pressure = values.pressure ?? 0;
    this.tangentialPressure = values.tangentialPressure ?? 0;
    this.tiltX = values.tiltX ?? 0;
    this.tiltY = values.tiltY ?? 0;
    this.twist = values.twist ?? 0;
    this.pointerType = values.pointerType ?? "";
    this.isPrimary = values.isPrimary ?? false;
  }
}
