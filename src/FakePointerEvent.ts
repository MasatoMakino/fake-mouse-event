import { FakeMouseEvent } from "./FakeMouseEvent";
import type { FakePointerEventInit } from "./FakePointerEventInit";

export class FakePointerEvent
  extends FakeMouseEvent
  implements FakePointerEventInit
{
  pointerId: number = 0;
  width?: number = 0;
  height?: number = 0;
  pressure?: number = 0;
  tangentialPressure?: number = 0;
  tiltX?: number = 0;
  tiltY?: number = 0;
  twist?: number = 0;
  pointerType?: string = "";
  isPrimary?: boolean = false;

  constructor(type: string, values?: FakePointerEventInit) {
    super(type, values);
    this.init(values);
  }

  protected override init(values: FakePointerEventInit = {}) {
    super.init(values);
    this.pointerId = values.pointerId;
    this.width = values.width;
    this.height = values.height;
    this.pressure = values.pressure;
    this.tangentialPressure = values.tangentialPressure;
    this.tiltX = values.tiltX;
    this.tiltY = values.tiltY;
    this.twist = values.twist;
    this.pointerType = values.pointerType;
    this.isPrimary = values.isPrimary;
  }
}
