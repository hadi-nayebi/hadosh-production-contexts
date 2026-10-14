import { afterEach, it, expect } from "vitest";
import { cleanup, render, fireEvent, screen } from "@testing-library/react";
import seed from "./next-seed.json";
import baseline from "./illustrated-seed.json";
import { validateScene, shiftTiming, editObject } from "./scene.mjs";
import { imagePose, cueFrame, viewAt } from "./views.mjs";
import { pulseCues, rhythmOffset } from "./rhythm.mjs";
import { characterGeometry } from "./CharacterLayer";
import SceneArtwork from "./SceneArtwork";
import RhythmTools from "./RhythmTools";
import TextTools from "./TextTools";
import { cameraAt, cameraPose } from "./camera.mjs";
afterEach(cleanup);
it("retains the exact recorded transcript and source times in a separate document", () => {
  const p = validateScene(seed);
  expect(p.documentId).not.toBe(baseline.documentId);
  expect(
    p.words.map((w) => [w.id, w.text, w.sourceStart, w.sourceEnd, w.enterFrame, w.exitFrame]),
  ).toEqual(
    baseline.words.map((w) => [
      w.id,
      w.text,
      w.sourceStart,
      w.sourceEnd,
      w.enterFrame,
      w.exitFrame,
    ]),
  );
  expect(p.objects.filter((o) => o.kind === "text").every((o) => o.role === "explanatory")).toBe(
    true,
  );
});
it("registers screen to each hardware aperture and moves both with the group", () => {
  const p = validateScene(seed);
  for (const [id, frame] of [
    ["screen", 50],
    ["screen", 150],
    ["screen-final", 600],
  ] as const) {
    const o = p.objects.find((o) => o.id === id)!,
      device = p.objects.find((d) => d.id === o.screenFor)!;
    const a = viewAt(device, frame)!.aperture!,
      d = imagePose(p, device.id, frame),
      s = imagePose(p, id, frame);
    expect(s.x).toBeCloseTo(d.x + a.x * d.scale!);
    expect(s.width).toBeCloseTo(a.width * d.scale!);
  }
  const moved = editObject(p, "browser", { x: 523 });
  expect(imagePose(moved, "screen", 150).x - imagePose(p, "screen", 150).x).toBeCloseTo(20);
  const later = shiftTiming(p, "browser", "move", 10);
  expect(cueFrame(later, "screen", 111)).toBe(101);
});
it("shows causal right-click, Inspect, and changed button states", () => {
  const p = validateScene(seed);
  const { container, rerender } = render(<SceneArtwork project={p} frame={96} />);
  expect(container.textContent).toContain("Right-click");
  expect(container.textContent).toContain("Inspect");
  rerender(<SceneArtwork project={p} frame={125} />);
  expect(container.querySelector('[data-browser-action="inspect"]')).not.toBeNull();
  expect(container.textContent).toContain("background: coral");
  rerender(<SceneArtwork project={p} frame={150} />);
  expect(container.querySelector('[data-browser-action="style-changed"]')).not.toBeNull();
  expect(container.textContent).toContain("background: mint");
});
it("has stable neck joints for all four combinations at two scales", () => {
  const p = validateScene(seed),
    o = p.objects.find((o) => o.kind === "character")!;
  for (const scale of [1, 0.65])
    for (const v of o.views!) {
      const n = {
        ...o,
        width: o.width * scale,
        height: o.height * scale,
        defaultView: v.id,
        viewCues: [],
      };
      const g = characterGeometry(n, 0),
        r = v.rig!;
      expect(g.head.x + r.headAnchor.x * g.head.width).toBeCloseTo(
        g.body.x + r.bodyAnchor.x * g.body.width,
      );
      expect(g.head.y + r.headAnchor.y * g.head.height).toBeCloseTo(
        g.body.y + r.bodyAnchor.y * g.body.height,
      );
    }
});
it("uses only observed accents, a fast attack, hit intensity, and bounded manual correction", () => {
  const p = validateScene(seed),
    o = p.objects.find((o) => o.id === "stool")!,
    cue = pulseCues(p, o.rhythm!)[0];
  expect(cue.observed).toBe(true);
  expect(Math.abs(rhythmOffset(p, o, cue.frame - 1).y)).toBe(0);
  expect(Math.abs(rhythmOffset(p, o, cue.frame + 1).y)).toBeGreaterThan(
    Math.abs(rhythmOffset(p, o, cue.frame + 4).y),
  );
  const soft = { ...o, rhythm: { ...o.rhythm!, intensity: 0.1 } };
  expect(Math.abs(rhythmOffset(p, soft, cue.frame + 1).y)).toBeLessThan(
    Math.abs(rhythmOffset(p, o, cue.frame + 1).y),
  );
  expect(() => validateScene({ ...p, rhythm: { ...p.rhythm!, sourceInMs: 0 } })).toThrow();
  let next = p;
  render(
    <RhythmTools
      project={p}
      object={o}
      change={(fn) => {
        next = fn();
      }}
    />,
  );
  fireEvent.change(screen.getByLabelText("Rhythm offset"), { target: { value: "2" } });
  expect(next.objects.find((o) => o.id === "stool")!.rhythm!.offsetFrames).toBe(2);
  expect(next.words).toEqual(p.words);
});
it("keeps doorway words in bounds through its camera push", () => {
  const p = validateScene(seed),
    s = p.scenes[1];
  for (let frame = 385; frame < 436; frame++)
    for (const o of p.objects.filter((o) => s.objectIds.includes(o.id) && o.kind === "word")) {
      const n = imagePose(p, o.id, frame);
      if (frame < n.enter || frame >= n.exit) continue;
      const b = cameraPose(n, cameraAt(s, frame));
      expect(b.x).toBeGreaterThanOrEqual(12);
      expect(b.x + b.width).toBeLessThan(1268);
    }
});
it("edits explanatory typography without adding words to the transcript", () => {
  const p = validateScene(seed),
    o = p.objects.find((o) => o.id === "label-inspect")!;
  let next = p;
  render(
    <TextTools
      project={p}
      object={o}
      change={(fn) => {
        next = fn();
      }}
    />,
  );
  fireEvent.change(screen.getByLabelText("Explanatory text"), {
    target: { value: "Inspect the page" },
  });
  expect(next.objects.find((o) => o.id === "label-inspect")!.text).toBe("Inspect the page");
  expect(next.words).toEqual(p.words);
});
