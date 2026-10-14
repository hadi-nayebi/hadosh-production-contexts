import { it, expect } from "vitest";
import { phoneWordFlights } from "./phoneWordFlight";
const words = [
  { id: "a", text: "Open", start: 10, end: 10.25, phrase: "p1" },
  { id: "b", text: "up", start: 10.25, end: 10.5, phrase: "p1" },
  { id: "c", text: "the", start: 10.5, end: 10.6, phrase: "p1" },
  { id: "d", text: "app", start: 10.6, end: 10.8, phrase: "p1" },
];
it("puts each word at the same reading focus on its own vocal onset", () => {
  for (const w of words) {
    const f = phoneWordFlights(words, w.start).find((p) => p.id === w.id)!;
    expect(f.opacity).toBe(1);
    expect(f.voice).toBe(true);
    expect(f.x).toBeCloseTo(22);
  }
});
it("uses one path per phrase, slows while sung, and accelerates the exit", () => {
  const before = JSON.stringify(words);
  const a = phoneWordFlights(words, 10.03).find((w) => w.id === "a")!;
  const b = phoneWordFlights(words, 10.13).find((w) => w.id === "a")!;
  expect((a.x - b.x) / 0.1).toBeLessThan(13);
  const c = phoneWordFlights(words, 10.4).find((w) => w.id === "a")!;
  const d = phoneWordFlights(words, 10.5).find((w) => w.id === "a")!;
  const e = phoneWordFlights(words, 10.6).find((w) => w.id === "a")!;
  expect(c.x - d.x).toBeLessThan(d.x - e.x);
  expect(new Set(phoneWordFlights(words, 10.5).map((w) => w.y)).size).toBe(1);
  expect(JSON.stringify(words)).toBe(before);
});
it("does not stack two highly visible words in the reading focus", () => {
  for (let t = 9.9; t < 11.7; t += 0.01) {
    const f = phoneWordFlights(words, t).filter((w) => w.opacity > 0.4);
    for (let i = 0; i < f.length; i++)
      for (let j = i + 1; j < f.length; j++)
        expect(Math.abs(f[i].x - f[j].x)).toBeGreaterThan((f[i].width + f[j].width) / 2);
  }
  expect(phoneWordFlights(words, 12.16)).toHaveLength(0);
});
it("has continuous movement through arrival and departure on replay", () => {
  for (const w of words)
    for (const t of [w.start, w.end]) {
      const a = phoneWordFlights(words, t - 0.001).find((p) => p.id === w.id)!;
      const b = phoneWordFlights(words, t + 0.001).find((p) => p.id === w.id)!;
      expect(Math.abs(a.x - b.x)).toBeLessThan(0.05);
    }
  expect(phoneWordFlights(words, 10.3)).toEqual(phoneWordFlights(words, 10.3));
});

it("lingers the last phrase word in available silence without claiming a new vocal anchor", () => {
  const app = phoneWordFlights(words, 11.05).find((w) => w.id === "d")!;
  expect(app.reading).toBe(true);
  expect(app.voice).toBe(false);
  expect(app.opacity).toBe(1);
  expect(app.start).toBe(10.6);
  expect(app.end).toBe(10.8);
});
