import { FakeMouseEvent } from "./FakeMouseEvent";
import { FakePointerEventInit } from "./FakePointerEventInit";

export class FakePointerEvent
  extends FakeMouseEvent
  implements FakePointerEventInit
{
  pointerId: number;
  width?: number;
  height?: number;
  pressure?: number;
  tangentialPressure?: number;
  tiltX?: number;
  tiltY?: number;
  twist?: number;
  pointerType?: string;
  isPrimary?: boolean;

  constructor(type: string, values?: FakePointerEventInit) {
    super(type, values);
    this.init(values);
  }

  protected override init(values: FakePointerEventInit) {
    super.init(values);
    this.pointerId = values.pointerId ?? 0;
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
