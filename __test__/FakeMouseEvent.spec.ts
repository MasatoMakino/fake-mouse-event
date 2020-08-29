import { getMouseEvent } from "..";
import mock = jest.mock;

describe("FakeMouseEvent", () => {
  test("getMouseEvent", () => {
    const e = getMouseEvent("click");
    expect(e).toBeTruthy();
    expect(e.x).toBe(0);
  });

  test("getMouseEvent with option", () => {
    const e = getMouseEvent("click", {
      x: 100,
      y: 100,
      offsetX: 150,
      offsetY: 150,
    });
    expect(e).toBeTruthy();
    expect(e.x).toBe(100);
    expect(e.offsetX).toBe(150);
  });

  test("getMouseEvent as mouseevent", () => {
    const e = getMouseEvent("click", {
      x: 100,
      y: 100,
      offsetX: 150,
      offsetY: 150,
    });
    const mv = e as MouseEvent;
    expect(mv.x).toBe(100);
  });

  test("canvas callback", () => {
    const eventArgs = {
      x: 100,
      y: 100,
      offsetX: 150,
      offsetY: 150,
      pageX: 0,
      pageY: 0,
    };
    const e = getMouseEvent("click", { ...eventArgs });
    const mockCallback = jest.fn((e) => e);
    const canvas = document.createElement("canvas");
    canvas.width = 640;
    canvas.height = 480;
    canvas.addEventListener("click", mockCallback);

    canvas.dispatchEvent(e);
    expect(mockCallback).toBeCalledTimes(1);
    expect(mockCallback).toHaveBeenLastCalledWith(e);
    expect(mockCallback).lastReturnedWith(e);
    mockCallback.mockClear();
  });
});
