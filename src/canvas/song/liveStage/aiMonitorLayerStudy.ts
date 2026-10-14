import monitor from "./aiMonitorStudy";
import assets from "./ai-monitor-layers.json";
import { validateScene } from "./scene.mjs";
const p = structuredClone(monitor);
p.documentId = "full-song-ai-monitor-layers-v2";
p.revision = 1;
p.assets!.push(...assets);
const plane = {
  width: 600,
  height: 350,
  corners: [
    { x: 622, y: 195 },
    { x: 1135, y: 148 },
    { x: 1125, y: 469 },
    { x: 609, y: 440 },
  ],
};
for (const o of p.objects.filter((o) => o.id.startsWith("ai-page-"))) {
  o.textPlane = plane;
  o.x = o.x - 652 + 30;
  o.y = ({ 205: 36, 263: 108, 312: 172, 377: 270 } as Record<number, number>)[o.y];
  o.note += " Screen-plane coordinates are local to the measured monitor aperture.";
}
p.objects.push({
  id: "ai-monitor-foreground",
  kind: "image",
  parentId: null,
  x: 0,
  y: 0,
  width: 1280,
  height: 720,
  enterFrame: 3497,
  exitFrame: 3679,
  timeOffset: 0,
  cue: null,
  note: "Registered full-canvas character/chair cutout. Separate editable foreground; no articulated hand rig yet.",
  suggestion: "",
  views: [{ id: "person", name: "Registered foreground", assetId: "ai-monitor-person-v1" }],
  defaultView: "person",
  viewCues: [],
});
for (const s of p.scenes.filter((s) => s.start >= 3497 && s.end <= 3679)) {
  s.views = [
    { id: "monitor-clean", name: "Registered clean environment", assetId: "ai-monitor-clean-v1" },
  ];
  s.defaultView = "monitor-clean";
  s.objectIds.push("ai-monitor-foreground");
  s.description =
    "S02 layered perspective study: measured screen homography, independent page words and registered foreground. Hand articulation and moving acceptance remain unverified.";
}
export default validateScene(p);
