import { render } from "@testing-library/react";
import SceneArtwork from "./SceneArtwork";
import { describe, expect, it } from "vitest";
import seed from "./dance-extended-seed.json";
import previous from "./scene-props-seed.json";
import { validateScene } from "./scene.mjs";
import { characterGeometry } from "./CharacterLayer";
import { imagePose, setDancePattern, setViewCue } from "./views.mjs";

describe("source-bound dance alternate", () => {
  it("preserves all retained source words and shifts their frames exactly once", () => {
    const p = validateScene(seed);
    expect(p.source.inMs).toBe(36300);
    expect(p.source.outMs).toBe(72100);
    expect(p.composition.durationInFrames).toBe(1074);
    for (const w of previous.words) {
      expect(p.words.find((n) => n.id === w.id)).toEqual({
        ...w,
        enterFrame: w.enterFrame + 354,
        exitFrame: w.exitFrame + 354,
      });
    }
    expect(p.browserHistory!.map((m) => m.year)).toEqual([1998, 2004, 2008]);
    expect(p.objects.find((o) => o.id === "monitor-final")?.note).toContain(
      "two big for the scene",
    );
    expect(p.objects.find((o) => o.id === "monitor-final")?.x).toBe(110);
  });
  it("registers all full-body feet to the same floor with a neutral head", () => {
    const p = validateScene(seed);
    const actor = p.objects.find((o) => o.id === "intro-narrator-workshop")!;
    for (const view of actor.views!) {
      const owner = { ...actor, defaultView: view.id, viewCues: [] };
      const g = characterGeometry(owner, 0);
      const r = view.rig!;
      expect(g.body.height / g.body.width).toBe(1.5);
      expect(g.body.y + g.body.height * r.floorAnchor!.y).toBeCloseTo(actor.height);
      expect(g.head.x + g.head.width * r.headAnchor.x).toBeCloseTo(g.joint.x);
      expect(g.head.y + g.head.height * r.headAnchor.y).toBeCloseTo(g.joint.y);
      expect(r.headAssetId).toBe("head-neutral-v1");
    }
  });
  it("retains dashboard-authored grouping, scale and late pose cues", () => {
    const p = validateScene(seed);
    const actor = p.objects.find((o) => o.id === "intro-narrator-workshop")!;
    expect(actor.parentId).toBeTruthy();
    expect(actor.width).toBe(140);
    expect(actor.y + actor.height).toBe(505);
    expect(imagePose(p, actor.id, 30).x).toBeGreaterThanOrEqual(270);
    expect(p.objects.find((o) => o.id === "browser-final")?.scale).toBe(0.3);
    expect(() =>
      validateScene(setViewCue(p, "narrator-personal-controls", 1000, "dance-b")),
    ).not.toThrow();
  });
  it("repeats phrase-based three-pose choreography without changing the floor", () => {
    const p = validateScene(seed);
    for (const actor of p.objects.filter((o) => o.kind === "character")) {
      const next = validateScene(setDancePattern(p, actor.id));
      const updated = next.objects.find((o) => o.id === actor.id)!;
      expect(updated.viewCues).toEqual(actor.viewCues);
      expect(new Set(updated.viewCues!.map((c) => c.viewId))).toEqual(
        new Set(["dance-a", "dance-b", "dance-center"]),
      );
      expect(updated.x).toBe(actor.x);
      expect(updated.y).toBe(actor.y);
      expect(updated.height).toBe(actor.height);
    }
    const door = p.objects.find((o) => o.id === "narrator-doorway")!;
    expect(door.width).toBe(112);
    expect(door.y + door.height).toBe(482);
  });
  it("renders direct sung words without lyric plates in the dance alternate", () => {
    const { container } = render(<SceneArtwork project={validateScene(seed)} frame={50} />);
    expect(container.querySelector("[data-character-view]")).not.toBeNull();
    expect(container.querySelector("[data-lyric-treatment]")).toBeNull();
    expect(container.textContent).toContain("Netscape");
  });
  it("rejects mismatched excerpt duration and out-of-range late cues", () => {
    expect(() =>
      validateScene({ ...seed, composition: { ...seed.composition, durationInFrames: 720 } }),
    ).toThrow();
    const p = validateScene(seed);
    expect(() => setViewCue(p, "narrator-personal-controls", 1074, "dance-b")).toThrow();
  });
});
