import { expect, it } from "vitest";
import { validateArrangement, mediaPathAt, sourceFrameAt } from "../wordMotion/arrangement.mjs";
import { validateScene } from "./scene.mjs";
import seed from "./checklist-seed.json";
it("maps a separate opening source and hands off exactly to the original verse", () => {
  const p = validateScene(structuredClone(seed));
  p.arrangement![0] = {
    ...p.arrangement![0],
    sourceStartFrame: 0,
    media: { path: "/previews/opening-study02a.mp3", sha256: "a".repeat(64), durationFrames: 1200 },
  };
  expect(() => validateArrangement(p)).not.toThrow();
  expect(mediaPathAt(p, 1199)).toBe("/previews/opening-study02a.mp3");
  expect(sourceFrameAt(p, 1199)).toBe(1199);
  expect(mediaPathAt(p, 1200)).toBeNull();
  expect(sourceFrameAt(p, 1200)).toBe(720);
  expect(sourceFrameAt(p, 2643)).toBeNull();
  p.arrangement![0].media!.durationFrames = 1199;
  expect(() => validateArrangement(p)).toThrow();
  p.arrangement![0].media!.durationFrames = 1200;
  p.arrangement![0].media!.path = "https://untrusted.example/audio.mp3";
  expect(() => validateArrangement(p)).toThrow();
});
