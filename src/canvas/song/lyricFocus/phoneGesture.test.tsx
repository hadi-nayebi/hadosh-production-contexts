import { it, expect } from "vitest";
import { phoneGesture } from "./phoneGesture";
it("arrives at physical contact on the action cue and leaves without stale hands", () => {
  const actions = [
    { action: "app", time: 10 },
    { action: "save", time: 12 },
    { action: "mute", time: 14 },
  ];
  for (const a of actions) {
    const p = phoneGesture(a.time, actions)!;
    expect(p.action).toBe(a.action);
    expect(p.opacity).toBe(1);
    expect(p.approach).toBe(0);
  }
  expect(phoneGesture(16, actions)).toBeNull();
  expect(phoneGesture(9.5, actions)).toBeNull();
  expect(phoneGesture(10, actions)!.index).toBe(0);
  expect(phoneGesture(12, actions)!.index).toBe(1);
  expect(phoneGesture(14, actions)!.index).toBe(2);
});
