import { it, expect } from "vitest";
import { PerspectiveCamera, Vector3 } from "three";
import previous from "./foundationRepairStudy";
import study from "./foundationSpatialStudy";
import { validateScene, editObject } from "./scene.mjs";
import { spatialToasterState, elbowFor, type Vec3 } from "./spatialToasterState";
it("preserves the recording, original words, cut clock and other chapters", () => {
  for (const key of ["source", "words", "arrangement", "assets", "composition"] as const)
    expect(study[key]).toEqual(previous[key]);
  expect(study.scenes.map((s) => [s.start, s.end, s.cutEvidence])).toEqual(
    previous.scenes.map((s) => [s.start, s.end, s.cutEvidence]),
  );
  expect(study.scenes.slice(0, 56)).toEqual(previous.scenes.slice(0, 56));
  expect(study.scenes.slice(64)).toEqual(previous.scenes.slice(64));
  expect(validateScene(JSON.parse(JSON.stringify(study)))).toEqual(study);
});
it("uses one set of editable world props across eight distinct perspective views", () => {
  const scenes = study.scenes.slice(56, 64),
    ids = scenes[0].objectIds.filter((id) => id.startsWith("v20-world"));
  for (const s of scenes)
    expect(s.objectIds.filter((id) => id.startsWith("v20-world"))).toEqual(ids);
  expect(new Set(scenes.map((s) => JSON.stringify(s.spatialCamera))).size).toBe(8);
  const changed = editObject(study, "v20-world-bread", {
    spatial: { role: "bread", position: [0.02, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
  });
  expect(
    validateScene(JSON.parse(JSON.stringify(changed))).objects.find(
      (o) => o.id === "v20-world-bread",
    )!.spatial!.position[0],
  ).toBe(0.02);
});
it("keeps attached arm segment lengths and continuity rather than detached hand jumps", () => {
  const shoulder: Vec3 = [0.25, 1.55, 0.62];
  for (let frame = 5000; frame < 5756; frame++) {
    const s = spatialToasterState(frame),
      e = elbowFor(shoulder, s.wrist);
    expect(new Vector3(...shoulder).distanceTo(new Vector3(...e))).toBeCloseTo(0.65, 4);
    expect(new Vector3(...e).distanceTo(new Vector3(...s.wrist))).toBeCloseTo(0.65, 4);
    if (frame > 5000)
      expect(
        new Vector3(...s.wrist).distanceTo(new Vector3(...spatialToasterState(frame - 1).wrist)),
      ).toBeLessThan(0.12);
  }
});
it("carries contact, power and dial state through cuts", () => {
  expect(spatialToasterState(5253).powered).toBe(false);
  expect(spatialToasterState(5254).powered).toBe(true);
  expect(spatialToasterState(5255).plug).toEqual(spatialToasterState(5254).plug);
  expect(spatialToasterState(5306).dial).toBeGreaterThan(1);
  expect(spatialToasterState(5575).model).toBe("B");
  expect(spatialToasterState(5576).model).toBe("C");
});
it("keeps the insertion target in the camera frustum throughout the action", () => {
  const c = study.scenes[57].spatialCamera!,
    camera = new PerspectiveCamera(c.fov, 1280 / 720, 0.02, 100);
  camera.position.set(...c.position);
  camera.lookAt(...c.target);
  camera.updateMatrixWorld();
  for (let f = 5066; f <= 5136; f++) {
    const point = new Vector3(...spatialToasterState(f).bread).project(camera);
    expect(Math.abs(point.x)).toBeLessThan(1);
    expect(Math.abs(point.y)).toBeLessThan(1);
    expect(point.z).toBeLessThan(1);
  }
});
it("rejects malformed cameras and non-finite world transforms on import", () => {
  const p = structuredClone(study);
  p.scenes[56].spatialCamera!.fov = 0;
  expect(() => validateScene(p)).toThrow("spatial camera");
  const q = structuredClone(study);
  q.objects.find((o) => o.spatial)!.spatial!.position[0] = NaN;
  expect(() => validateScene(q)).toThrow("spatial prop");
});
