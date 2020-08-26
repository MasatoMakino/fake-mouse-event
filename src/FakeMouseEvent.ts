import {FakeMouseEventInit} from "./FakeMouseEventInit";

export class FakeMouseEvent extends MouseEvent {
  offsetX: number;
  offsetY: number;
  pageX: number;
  pageY: number;
  x: number;
  y: number;

  constructor(type: string, values: FakeMouseEventInit) {
    super(type, values);

    this.offsetX = values.offsetX;
    this.offsetY = values.offsetY;
    this.pageX = values.pageX;
    this.pageY = values.pageY;
    this.x = values.x;
    this.y = values.y;
  }
}

