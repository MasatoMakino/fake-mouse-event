export type ButtonType = 0 | 1 | 2 | 3 | 4;
export interface FakeMouseEventInit extends UIEventInit {
  altKey?: boolean;
  button?: ButtonType;
  buttons?: number;
  clientX?: number;
  clientY?: number;
  ctrlKey?: boolean;
  metaKey?: boolean;
  movementX?: number;
  movementY?: number;
  offsetX?: number;
  offsetY?: number;
  pageX?: number;
  pageY?: number;
  screenX?: number;
  screenY?: number;
  layerX?: number;
  layerY?: number;
  shiftKey?: boolean;
  x?: number;
  y?: number;
}
