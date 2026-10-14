import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render } from "@testing-library/react";
import { validateScene } from "./scene.mjs";
import { imagePose } from "./views.mjs";
import { characterGeometry } from "./CharacterLayer";
import SceneArtwork from "./SceneArtwork";
import openingSeed from "./opening-seed.json";
import clearanceSeed from "./clearance-seed.json";
import previousSeed from "./dance-review-seed.json";
afterEach(cleanup);
describe("live opening and saved clearance", () => {
  it("preserves absolute source timing and the complete inherited browser scenes", () => {
    const p = validateScene(openingSeed),
      previous = validateScene(clearanceSeed);
    expect(p.source.sha256).toBe(previous.source.sha256);
    expect(p.source.inMs).toBe(0);
    expect(p.composition.durationInFrames).toBe(2163);
    for (const word of previous.words) {
      const next = p.words.find((w) => w.id === word.id)!;
      expect(next).toEqual({
        ...word,
        enterFrame: word.enterFrame + 1089,
        exitFrame: word.exitFrame + 1089,
      });
    }
    expect(p.scenes.slice(4).map((s) => s.id)).toEqual(previous.scenes.map((s) => s.id));
    expect(
      p.assets
        ?.slice(-3)
        .every((a) => a.libraryId.startsWith("libfile_") && a.sha256.length === 64),
    ).toBe(true);
  });
  it("keeps the live-edited word clear of all character poses and the computer throughout its hold", () => {
    const p = validateScene(clearanceSeed),
      actor = p.objects.find((o) => o.id === "narrator-workshop")!;
    expect(p.objects.filter((o) => o.id !== "w036")).toEqual(
      validateScene(previousSeed).objects.filter((o) => o.id !== "w036"),
    );
    for (let f = 619; f < 640; f++) {
      const word = imagePose(p, "w036", f),
        a = imagePose(p, actor.id, f),
        hardware = imagePose(p, "monitor", f);
      for (const view of actor.views!) {
        const geometry = characterGeometry({ ...actor, defaultView: view.id, viewCues: [] }, f);
        for (const bounds of [geometry.head, geometry.body])
          expect(word.x).toBeGreaterThan(a.x + bounds.x + bounds.width + 8);
      }
      expect(word.x + word.width).toBeLessThan(hardware.x - 12);
    }
  });
  it("hides the perspective cut behind the jamb and keeps the narrator separate from the sash", () => {
    const p = validateScene(openingSeed),
      { container, rerender } = render(<SceneArtwork project={p} frame={240} />);
    expect(container.querySelector('[data-scene-object="window-narrator"]')).not.toBeNull();
    expect(container.querySelector('[data-opening-prop="window-sash"]')).not.toBeNull();
    rerender(<SceneArtwork project={p} frame={354} />);
    expect(
      container.querySelector('[data-opening-prop="jamb-occlusion"]')?.getAttribute("transform"),
    ).toBe("translate(0 0)");
    rerender(<SceneArtwork project={p} frame={390} />);
    expect(container.querySelector('[data-opening-prop="jamb-occlusion"]')).toBeNull();
  });
  it("rejects out-of-range approach cameras and invalid passage timing", () => {
    const p = structuredClone(openingSeed);
    p.scenes[1].camera[0].zoom = 9;
    expect(() => validateScene(p)).toThrow();
    const q = structuredClone(openingSeed);
    q.opening.passCut = q.opening.passStart;
    expect(() => validateScene(q)).toThrow();
  });
});
