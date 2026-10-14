import { it, expect } from "vitest";
import seed from "./seed.json";
import illustrated from "./illustrated-seed.json";
import { validateScene, evaluateObject, sceneAt, addSceneIsland } from "./scene.mjs";
import { setViewCue, viewAt } from "./views.mjs";
it("switches registered views at an exact cue without moving the object", () => {
  const p = validateScene(structuredClone(seed));
  p.assets = [
    {
      id: "test",
      path: "/scene-assets/test.png",
      libraryId: "test-only",
      sha256: "test-only",
      width: 1280,
      height: 720,
    },
  ];
  const o = p.objects.find((o) => o.id === "extension")!;
  o.views = [
    { id: "a", name: "Assembled", assetId: "test" },
    { id: "b", name: "Exposed", assetId: "test" },
  ];
  o.defaultView = "a";
  const before = evaluateObject(p, o.id);
  const n = validateScene(setViewCue(p, o.id, 100, "b"));
  const after = evaluateObject(n, o.id);
  expect(viewAt(after, 99)?.id).toBe("a");
  expect(viewAt(after, 100)?.id).toBe("b");
  expect([after.x, after.y, after.width, after.height, after.enter, after.exit]).toEqual([
    before.x,
    before.y,
    before.width,
    before.height,
    before.enter,
    before.exit,
  ]);
});
it("accepts later authored islands and explicitly describes unfinished gaps", () => {
  const p = validateScene({ ...structuredClone(seed), scenes: [] });
  const n = addSceneIsland(p, 400, 600, "Start with the doorway");
  expect(sceneAt(n, 50).title).toBe("Unfinished interval");
  expect(sceneAt(n, 500).description).toBe("Start with the doorway");
  expect(() => addSceneIsland(n, 500, 650, "Overlap")).toThrow();
});
it("spatial lyrics retain every recorded word and timing", () => {
  const p = validateScene(illustrated);
  expect(p.words.map((w) => [w.id, w.text, w.enterFrame, w.exitFrame])).toEqual(
    seed.words.map((w) => [w.id, w.text, w.enterFrame, w.exitFrame]),
  );
  expect(new Set(p.objects.map((o) => o.y)).size).toBeGreaterThan(10);
});

import { editObject, shiftTiming, splitScene } from "./scene.mjs";
import { imagePose } from "./views.mjs";
import { cameraAt, cameraPose } from "./camera.mjs";
it("moves the whole browser to Add while leaving words, stool and source clock unchanged", () => {
  const p = validateScene(illustrated),
    n = shiftTiming(p, "browser", "move", -8);
  expect(evaluateObject(n, "browser").enter).toBe(7);
  for (const id of ["window", "page", "extension"]) {
    expect(evaluateObject(n, id).enter).toBe(evaluateObject(p, id).enter - 8);
    expect(evaluateObject(n, id).exit).toBe(evaluateObject(p, id).exit - 8);
  }
  expect(n.words).toEqual(p.words);
  expect(n.source).toEqual(p.source);
  expect(n.objects.find((o) => o.id === "stool")).toEqual(p.objects.find((o) => o.id === "stool"));
});
it("uses view-specific handle anchors and retains dragged offsets", () => {
  const p = validateScene(illustrated);
  const o = p.objects.find((o) => o.attachment)!;
  const before = imagePose(p, o.id, 435),
    after = imagePose(p, o.id, 436);
  expect(after.x - before.x).toBeCloseTo((0.44 - 0.73) * 1280);
  const n = editObject(p, o.id, { x: o.x + 20 });
  expect(imagePose(n, o.id, 436).x).toBeCloseTo(after.x + 20);
});
it("shares camera world transforms while doorway remains held", () => {
  const p = validateScene(illustrated),
    s = p.scenes[0];
  const c = cameraAt(s, 200),
    pose = imagePose(p, "stool", 200),
    screen = cameraPose(pose, c);
  expect(c.zoom).toBeGreaterThan(1);
  expect((screen.x - c.tx) / c.zoom).toBeCloseTo(pose.x);
  expect(cameraAt(p.scenes[1], 500)).toEqual({ zoom: 1, tx: 0, ty: 0 });
  expect(() => splitScene(p, s.id, 100, "Later idea")).not.toThrow();
});
it("uses clean plates for one independently moving stool", () => {
  const p = validateScene(illustrated),
    active = p.scenes.filter((s) => s.id !== "doorway").flatMap((s) => s.views || []);
  expect(
    active.every((v) => p.assets!.find((a) => a.id === v.assetId)!.path.includes("clean-v2")),
  ).toBe(true);
  expect(p.objects.filter((o) => o.id === "stool")).toHaveLength(1);
  expect(imagePose(p, "stool", 110).x).toBe(imagePose(p, "stool", 0).x - 14);
});
it("rejects overlapping whole-song briefs and accepts a later authored island", () => {
  const p = structuredClone(illustrated);
  p.production.islands.push({
    id: "later",
    startMs: 140000,
    endMs: 160000,
    status: "brief",
    description: "Harness correction",
    documentId: "",
  });
  expect(() => validateScene(p)).not.toThrow();
  p.production.islands[1].startMs = 70000;
  expect(() => validateScene(p)).toThrow(/unfinished gap/);
});
