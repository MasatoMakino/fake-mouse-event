import { describe, expect, test, vi } from "vitest";
import { FakePointerEvent, getPointerEvent } from "../src";

describe("FakePointerEvent", () => {
  test("constructor", () => {
    const e: FakePointerEvent = getPointerEvent("pointerdown");
    expect(e).toBeTruthy();
    expect(e.x).toBe(0);
    expect(e.pointerId).toBe(0);
  });

  test("constructor without an init dictionary matches the defaults of the jsdom PointerEvent", () => {
    const fake = new FakePointerEvent("pointerdown");
    const native = new PointerEvent("pointerdown");
    // tiltX and tiltY are excluded: jsdom leaves them undefined, and the spec requires 0 when the hardware does not report tilt.
    const keys = [
      "pointerId",
      "width",
      "height",
      "pressure",
      "tangentialPressure",
      "twist",
      "pointerType",
      "isPrimary",
    ] as const;
    for (const key of keys) {
      expect(fake[key], key).toBe(native[key]);
    }
  });

  test("getPointerEvent defaults match the primary mouse pointer of a browser", () => {
    const e = getPointerEvent("pointerdown");
    expect(e.width).toBe(1);
    expect(e.height).toBe(1);
    expect(e.pointerType).toBe("mouse");
    expect(e.isPrimary).toBe(true);
  });

  test("Constructor options should be respected", () => {
    const e: FakePointerEvent = getPointerEvent("pointerdown", {
      x: 100,
      y: 100,
      offsetX: 150,
      offsetY: 150,
      pointerId: 1,
    });
    expect(e.pointerId).toBe(1);
  });

  test("Property should be able to reassign", () => {
    const e: FakePointerEvent = getPointerEvent("pointerdown");
    expect(e.pointerId).toBe(0);
    e.pointerId = 2;
    expect(e.pointerId).toBe(2);
  });

  test("Events should be able to dispatch from canvas", () => {
    const eventArgs = {
      x: 100,
      y: 105,
      offsetX: 150,
      offsetY: 155,
      pointerId: 100,
      pageX: 0,
      pageY: 5,
    };
    const e = getPointerEvent("pointerdown", { ...eventArgs });
    const mockCallback = vi.fn((e) => e);
    const canvas = document.createElement("canvas");
    canvas.width = 640;
    canvas.height = 480;
    canvas.addEventListener("pointerdown", mockCallback);

    canvas.dispatchEvent(e);
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toHaveBeenLastCalledWith(e);
    expect(mockCallback).toHaveLastReturnedWith(e);
    expect(mockCallback.mock.calls[0][0].pointerId).toBe(eventArgs.pointerId);
    mockCallback.mockClear();
  });
});
