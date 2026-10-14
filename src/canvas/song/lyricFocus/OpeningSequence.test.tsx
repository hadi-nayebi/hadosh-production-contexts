import { roomArrival } from "./roomDirection";
import OpeningSequence, { earthPulseAt, upgradeUnits } from "./OpeningSequence";
import {
  openingWords,
  wordArt,
  openingEvents,
  openingImageStages,
  openingLanding,
} from "./openingDirection";
import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import performances from "./v0Performance.json";
import type { Annotation } from "./audioAnnotation";
import { openingCamera, openingDefaults, validateOpening, openingBounds } from "./openingDirection";
import { newScenePlan } from "./sceneContainers";
import { SceneVideoFrame } from "./SceneVideoFrame";
import rhythm from "./earthBuildRhythm.json";
const a = performances[0].annotation as Annotation;
afterEach(cleanup);
describe("opening continuity", () => {
  it("starts small and smoothly accelerates into the sky with a gentle rotation", () => {
    const d = openingDefaults;
    const steps = Array.from(
      { length: 12 },
      (_, i) => openingCamera(d.zoomStart + ((d.zoomEnd - d.zoomStart) * i) / 12, d).scale,
    );
    const increments = steps.slice(1).map((v, i) => v - steps[i]);
    increments.slice(1).forEach((v, i) => expect(v).toBeGreaterThan(increments[i]));
    expect(openingCamera(0, d).scale).toBeCloseTo(0.32);
    expect(openingCamera(0, d).rotation).toBe(0);
    expect(openingCamera(d.zoomEnd, d).rotation).toBeCloseTo(2.2);
  });
  it("introduces each question on its cue and retains the full question set until birth", () => {
    const before = JSON.stringify(a);
    const plan = newScenePlan(a);
    const r = render(<SceneVideoFrame annotation={a} plan={plan} time={22.4} />);
    const ev = openingEvents(openingDefaults);
    const qs = ev.filter((e) => e.kind === "question");
    for (const [i, q] of qs.entries()) {
      r.rerender(<SceneVideoFrame annotation={a} plan={plan} time={q.time + 0.02} />);
      expect(document.querySelectorAll("[data-question]").length).toBe(i + 1);
      expect(document.querySelector(`[data-question="${q.id}"]`)).not.toBeNull();
    }
    r.rerender(
      <SceneVideoFrame
        annotation={a}
        plan={plan}
        time={ev.find((e) => e.id === "web-birth")!.time}
      />,
    );
    expect(document.querySelectorAll("[data-question]")).toHaveLength(0);
    r.rerender(<SceneVideoFrame annotation={a} plan={plan} time={openingBounds(a)!.end + 0.76} />);
    expect(document.querySelector('[data-testid="opening-sequence"]')).toBeNull();
    expect(JSON.stringify(a)).toBe(before);
  });
  it("has no second window cutout and uses raster Earth stages", () => {
    render(<SceneVideoFrame annotation={a} plan={newScenePlan(a)} time={8} />);
    expect(document.querySelector("#open-window-aperture")).toBeNull();
    expect(document.querySelector("[data-earth-frame]")).not.toBeNull();
  });
  it("keeps selected opening words in phrase batches with per-word exceptions", () => {
    const at = 5.7;
    const batch = openingWords(a, at, openingDefaults).map((w) => w.text.toLowerCase());
    expect(batch).toContain("this");
    expect(batch).toContain("story");
    const d = structuredClone(openingDefaults);
    d.words = { story: { ...wordArt("story", d), keep: "word", hold: 0 } };
    expect(openingWords(a, at, d).some((w) => w.text === "story")).toBe(false);
  });
  it("rejects invalid editable placement and word motion data", () => {
    expect(() => validateOpening({ ...structuredClone(openingDefaults), zoomEnd: 0 })).toThrow();
    expect(() =>
      validateOpening({
        ...structuredClone(openingDefaults),
        words: { view: { x: 50, y: 50, scale: 1, hold: 1, motion: "invalid" as never } },
      }),
    ).toThrow();
  });
});

it("removes the stool and counts only landed upgrade assets without moving cues", () => {
  const plan = newScenePlan(a),
    before = JSON.stringify(a);
  const r = render(<SceneVideoFrame annotation={a} plan={plan} time={2} />);
  expect(document.querySelector('[data-opening-asset="stool"]')).toBeNull();
  expect(document.querySelector('[data-opening-asset="book"]')?.getAttribute("src")).toContain(
    "normal-v3",
  );
  const events = openingEvents(openingDefaults);
  const first = events.find((e) => e.kind === "falling-asset" && e.assetId === "electricity")!;
  r.rerender(
    <SceneVideoFrame annotation={a} plan={plan} time={openingLanding(first.time) - 0.01} />,
  );
  expect(document.querySelector('[data-upgrade-counter="electricity"]')).toBeNull();
  r.rerender(
    <SceneVideoFrame annotation={a} plan={plan} time={openingLanding(first.time) + 0.01} />,
  );
  expect(
    document
      .querySelector('[data-upgrade-counter="electricity"]')
      ?.getAttribute("data-upgrade-count"),
  ).toBe("7");
  expect(JSON.stringify(a)).toBe(before);
});

it("pulses on supplied source onsets with bounded size and a smooth recovery", () => {
  const pulses = [{ time: 18, strength: 0.8 }],
    before = JSON.stringify(pulses);
  expect(earthPulseAt(17.99, pulses)).toBe(0);
  expect(earthPulseAt(18, pulses)).toBe(0);
  expect(earthPulseAt(18.045, pulses)).toBeCloseTo(0.8);
  expect(earthPulseAt(18.25, pulses)).toBeLessThan(0.3);
  expect(earthPulseAt(18.51, pulses)).toBe(0);
  expect(JSON.stringify(pulses)).toBe(before);
});

it("expires all Earth effects before any room background and stays correct on replay and backward seeks", () => {
  const plan = newScenePlan(a),
    arrival = roomArrival(a)!,
    before = JSON.stringify(a);
  const r = render(<SceneVideoFrame annotation={a} plan={plan} time={arrival.start - 0.12} />);
  for (const time of [
    arrival.start,
    arrival.end,
    arrival.end + 0.3,
    arrival.start + 0.1,
    arrival.start - 0.12,
    arrival.end,
  ]) {
    r.rerender(<SceneVideoFrame annotation={a} plan={plan} time={time} />);
    if (time >= arrival.start) {
      expect(document.querySelector('[data-testid="web-birth-reveal"]')).toBeNull();
      expect(document.querySelector("[data-question]")).toBeNull();
      expect(document.querySelector("[data-upgrade-counter]")).toBeNull();
      expect(document.querySelector("[data-screen-earth]")).toBeNull();
    }
  }
  expect(JSON.stringify(a)).toBe(before);
});

it("keeps saved onset controls but starts upgrade picture changes on a landing beat", () => {
  const d = structuredClone(openingDefaults),
    before = JSON.stringify(d);
  const stages = openingImageStages(d),
    events = openingEvents(d);
  for (const s of stages.filter((s) => s.imageIndex! > 0)) {
    expect(s.time).toBeGreaterThanOrEqual(s.sourceTime + 0.9);
    expect(s.time).toBeLessThanOrEqual(s.sourceTime + 1.3);
    expect(s.time).toBe(openingLanding(s.sourceTime));
    expect(events.find((e) => e.id === s.id)!.time).toBe(s.sourceTime);
  }
  expect(JSON.stringify(d)).toBe(before);
});

it("derives playful illustrative totals from each actual landed packet", () => {
  expect(upgradeUnits("electricity", 6)).toBe(42);
  expect(upgradeUnits("transistors", 6)).toBe(52);
  for (const id of ["electricity", "transistors", "computers"]) {
    let last = 0;
    for (let i = 1; i <= 6; i++) {
      const count = upgradeUnits(id, i);
      expect(count).toBeGreaterThan(last);
      expect([13, 666]).not.toContain(count);
      last = count;
    }
  }
});

it("keeps the birth reveal inside its supplied visual container", () => {
  const cut = 26.52;
  const r = render(<OpeningSequence annotation={a} time={26.1} effectsEnd={cut} />);
  expect(document.querySelector('[data-testid="web-birth-reveal"]')).not.toBeNull();
  for (const time of [cut, cut + 0.5, 26.1, cut + 0.1]) {
    r.rerender(<OpeningSequence annotation={a} time={time} effectsEnd={cut} />);
    expect(!!document.querySelector('[data-testid="web-birth-reveal"]')).toBe(time < cut);
  }
});
it("uses the book camera for the invitation and gives every question time to be read before the reveal", () => {
  const plan = newScenePlan(a),
    before = JSON.stringify(a);
  const r = render(<SceneVideoFrame annotation={a} plan={plan} time={2.8} />);
  expect(document.querySelector('[data-opening-asset="book"]')).not.toBeNull();
  expect(document.querySelector('[data-scene-word="come"]')).toBeNull();
  expect(document.querySelector('[aria-label*="dimensional word"]')).toBeNull();
  const q = openingEvents(openingDefaults).filter((e) => e.kind === "question");
  const birth = openingEvents(openingDefaults).find((e) => e.id === "web-birth")!.time;
  expect(birth - q.at(-1)!.time).toBeGreaterThan(1);
  r.rerender(<SceneVideoFrame annotation={a} plan={plan} time={24.5} />);
  expect(document.querySelectorAll("[data-question]")).toHaveLength(4);
  expect(JSON.stringify(a)).toBe(before);
});
