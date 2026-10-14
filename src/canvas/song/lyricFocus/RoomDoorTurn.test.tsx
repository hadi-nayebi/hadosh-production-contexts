import { it, expect } from "vitest";
import { roomTurnPerformance } from "./RoomDoorTurn";
import { doorCamera } from "./doorCamera";
it("uses one open-door composition rather than four rapid angle cuts", () => {
  expect(roomTurnPerformance(59.99, 60, 63.13).entrance).toBe(0);
  for (let t = 60; t < 63.7; t += 0.02) {
    const p = roomTurnPerformance(t, 60, 63.13);
    expect(p.shot).toBe(0);
    expect(p.entrance).toBe(1);
  }
});
it("has a continuous accelerating camera and reaches a frame-filling aperture before world reveal", () => {
  const chorus = 63.68;
  expect(doorCamera(chorus - 1.55, chorus).scale).toBe(1);
  const cut = doorCamera(chorus - 0.08, chorus);
  expect(cut.scale * 0.167).toBeGreaterThan(1);
  expect(cut.worldOpacity).toBeCloseTo(0);
  expect(doorCamera(chorus + 0.32, chorus).worldOpacity).toBeCloseTo(1);
  const a = doorCamera(chorus - 0.001, chorus),
    b = doorCamera(chorus + 0.001, chorus);
  expect(Math.abs(a.scale - b.scale)).toBeLessThan(0.003);
});
