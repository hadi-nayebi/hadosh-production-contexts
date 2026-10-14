import { it, expect } from "vitest";
import { windowApproach } from "./WindowReturn";
import { doorCamera } from "./doorCamera";
it("establishes the outside view before enlarging the room and frame together", () => {
  expect(windowApproach(72, 72, 76).scale).toBe(1);
  expect(windowApproach(72.5, 72, 76).scale).toBe(1);
  let last = 1;
  for (let t = 72; t <= 76; t += 1 / 60) {
    const c = windowApproach(t, 72, 76);
    expect(c.scale).toBeGreaterThanOrEqual(last);
    last = c.scale;
  }
  expect(windowApproach(76, 72, 76).scale * 0.4).toBeCloseTo(1);
});
it("fills the viewport with the dark doorway before the tunnel dissolve", () => {
  const c = doorCamera(64.15, 63.7);
  expect(c.worldOpacity).toBe(1);
  expect(c.scale).toBeGreaterThan(6.8);
  expect(c.x).toBeCloseTo(-17.5);
  expect(c.scale * 0.17).toBeGreaterThan(1);
});
