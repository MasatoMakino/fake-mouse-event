import { getMouseEvent } from "..";

describe("FakeMouseEvent", () => {
  test("getMouseEvent", () => {
    const e = getMouseEvent("click");
    expect(e).toBeTruthy();
    expect(e.x).toBe(0);
  });

  test("getMouseEvent with option", () => {
    const e = getMouseEvent("click", { x: 100, y: 100 });
    expect(e).toBeTruthy();
    expect(e.x).toBe(100);
  });
});
