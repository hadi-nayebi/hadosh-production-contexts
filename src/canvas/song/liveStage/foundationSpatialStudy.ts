import previous from "./foundationRepairStudy";
import { validateScene, type SceneObject, type Setting } from "./scene.mjs";
const p = structuredClone(previous);
p.documentId = "full-song-foundation-v20";
p.revision = 3;
p.origin =
  "v19 plus shared spatial toaster staging: real perspective cameras, persistent world and attached arm. Rough geometry experiment; other chapters remain unchanged and visual foundation is unaccepted.";
const cameras: NonNullable<Setting["spatialCamera"]>[] = [
  { position: [2.9, 2.5, 3.4], target: [0, 1.2, 0], fov: 40 },
  { position: [-1.2, 2.25, 2.3], target: [0, 1.42, 0.05], fov: 40 },
  { position: [1.8, 1.65, 1.2], target: [0.57, 1.23, -0.4], fov: 32 },
  { position: [0.85, 1.6, 1.5], target: [0.15, 1.27, 0.08], fov: 30 },
  { position: [-0.85, 2.9, 0.3], target: [-0.8, 1.02, -0.05], fov: 34 },
  { position: [-2.5, 2.1, 2.4], target: [-0.65, 1.25, -0.15], fov: 40 },
  { position: [-1.35, 1.9, 1.45], target: [-0.95, 1.52, -0.48], fov: 34 },
  { position: [1.6, 2.05, 2.4], target: [0, 1.46, 0.05], fov: 37 },
];
const roles = [
  "room",
  "bench",
  "owner",
  "toaster",
  "bread",
  "dial",
  "outlet",
  "plug",
  "notes",
  "monitor",
];
const objects: SceneObject[] = roles.map((role, i) => ({
  id: `v20-world-${role}`,
  kind: "story-spatial-prop",
  parentId: null,
  x: 20 + i * 110,
  y: 20,
  width: 100,
  height: 80,
  enterFrame: 5000,
  exitFrame: 5756,
  timeOffset: 0,
  cue: null,
  suggestion: "",
  label: `Spatial ${role}`,
  note: `Shared ${role} in the toaster workspace. Same world coordinates survive cuts. Camera changes reveal source-motivated action. Bread/grip, plug/cord and arm contacts derive from one frame clock; rough geometry, not accepted style. Edit world offsets rather than 2D overlay coordinates.`,
  spatial: { role, position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
}));
const start = p.scenes[56].start,
  end = p.scenes[63].end;
for (const o of objects) {
  o.enterFrame = start;
  o.exitFrame = end;
}
p.scenes.slice(56, 64).forEach((scene, i) => {
  scene.spatialCamera = cameras[i];
  scene.boundaryTransitionFrames = 0;
  scene.objectIds = [
    ...objects.map((o) => o.id),
    ...scene.objectIds.filter((id) => p.objects.find((o) => o.id === id)?.kind === "lyric-block"),
  ];
  scene.description += ` v20 spatial staging: camera${i + 1}; shared owner/bench/appliance, action-clock continuity. Perspective and physical review pending.`;
});
p.objects.push(...objects);
const used = new Set(p.scenes.flatMap((s) => s.objectIds));
p.objects = p.objects.filter((o) => used.has(o.id));
export default validateScene(p);
