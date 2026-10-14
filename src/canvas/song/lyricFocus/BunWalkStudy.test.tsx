import { expect, it } from "vitest";
import { bunWalkPhase, bunWalkFrame, bunGaitState } from "./BunWalkStudy";
it("keeps gait phase continuous through source cue boundaries without changing cues", () => {
  const cues = [
    { id: "a", time: 10, strength: 0.8 },
    { id: "b", time: 10.6, strength: 0.9 },
    { id: "c", time: 11.4, strength: 0.7 },
  ];
  const before = JSON.stringify(cues);
  expect(bunWalkPhase(9, cues)).toBe(0);
  for (const t of [10.6, 11.4])
    expect(
      Math.abs(bunWalkPhase(t + 0.000001, cues) - bunWalkPhase(t - 0.000001, cues)),
    ).toBeLessThan(0.0001);
  const phase = Array.from({ length: 140 }, (_, i) => bunWalkPhase(10 + i * 0.01, cues));
  expect(phase.every((p, i) => !i || p >= phase[i - 1])).toBe(true);
  expect(new Set(phase.map(bunWalkFrame)).size).toBe(8);
  expect(JSON.stringify(cues)).toBe(before);
});

it("locks each measured supporting shoe through two cycles and preserves its thigh join", () => {
  for (let t = 0; t < 4 * Math.PI; t += 0.01) {
    const gait = bunGaitState(t);
    const leg = gait.legs.find((l) => l.side === gait.stance)!;
    const mapped = [
      leg.source[0] + (leg.shear * (leg.source[1] - 74) * 1024) / 600,
      74 + leg.scale * (leg.source[1] - 74),
    ];
    expect(mapped[0]).toBeCloseTo(gait.stance === "left" ? 60 : 65.7, 8);
    expect(mapped[1]).toBeCloseTo(96, 8);
    expect(74 + leg.scale * (74 - 74)).toBe(74);
    expect(Number.isFinite(leg.scale) && leg.scale > 0).toBe(true);
  }
});
