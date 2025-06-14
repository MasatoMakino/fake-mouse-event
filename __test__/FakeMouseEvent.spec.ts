import { describe, test, expect, vi } from "vitest";
import { getMouseEvent } from "../src";

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
    const mockCallback = vi.fn((e) => e);
    const canvas = document.createElement("canvas");
    canvas.width = 640;
    canvas.height = 480;
    canvas.addEventListener("click", mockCallback);

    canvas.dispatchEvent(e);
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toHaveBeenLastCalledWith(e);
    expect(mockCallback).toHaveLastReturnedWith(e);
    mockCallback.mockClear();
  });

  test("should be replicable", () => {
    const eventArgs = {
      x: 100,
      y: 105,
      offsetX: 150,
      offsetY: 151,
      pageX: 0,
      pageY: 2,
    };
    const e: any = getMouseEvent("click", eventArgs);
    const cloneE = new e.constructor(e.type, e);
    expect(e.x).toBe(cloneE.x);
    expect(e.y).toBe(cloneE.y);
    expect(e.offsetX).toBe(cloneE.offsetX);
    expect(e.offsetY).toBe(cloneE.offsetY);
    expect(e.pageX).toBe(cloneE.pageX);
    expect(e.pageY).toBe(cloneE.pageY);
  });
});
