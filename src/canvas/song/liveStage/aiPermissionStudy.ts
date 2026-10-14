import previous from "./aiCheckStudy";
import assets from "./ai-reverse-assets.json";
import { validateScene, type SceneObject } from "./scene.mjs";
const p = structuredClone(previous);
p.documentId = "full-song-ai-permission-v5";
p.revision = 1;
p.assets!.push(...assets);
const start = 3763,
  end = 3950,
  contact = 3879;
const index = p.scenes.findIndex((s) => s.start < end && s.end > end);
const old = p.scenes[index],
  tail = structuredClone(old);
tail.id = `${old.id}-after-${end}`;
tail.start = end;
tail.camera = tail.camera?.map((c) => ({ ...c, frame: Math.max(end, c.frame) }));
tail.boundaryTransitionFrames = 0;
old.end = end;
p.scenes.splice(index + 1, 0, tail);
const polygon = [
  { x: 887, y: 380 },
  { x: 925, y: 365 },
  { x: 1000, y: 395 },
  { x: 1043, y: 434 },
  { x: 1043, y: 512 },
  { x: 919, y: 510 },
  { x: 909, y: 451 },
  { x: 884, y: 413 },
];
const added: SceneObject[] = [];
function prop(
  id: string,
  kind: string,
  x: number,
  y: number,
  width: number,
  height: number,
  enter = start,
  exit = end,
) {
  const o: SceneObject = {
    id,
    kind,
    parentId: null,
    x,
    y,
    width,
    height,
    enterFrame: enter,
    exitFrame: exit,
    timeOffset: 0,
    cue: null,
    note: "S04 reverse-view proposal: human permission precedes illustrative local save. Lyric online/local consequence remains unresolved.",
    suggestion: "",
  };
  added.push(o);
  return o;
}
for (const [id, inverse] of [
  ["s04-person", true],
  ["s04-forearm", false],
] as const) {
  const o = prop(id, "image", 0, 0, 1280, 720);
  o.views = [
    { id: "registered-person", name: "Registered reverse person", assetId: "ai-reverse-person-v1" },
  ];
  o.defaultView = "registered-person";
  o.viewCues = [];
  o.limb = { polygon, pivot: { x: 907, y: 402 }, degrees: inverse ? 0 : 7, inverse };
  if (!inverse) o.animation = { startFrame: 3855, endFrame: contact };
  o.label = inverse ? "Person · stationary body" : "Forearm · deliberate contact";
}
const plane = {
  width: 340,
  height: 175,
  corners: [
    { x: 280, y: 448 },
    { x: 564, y: 461 },
    { x: 555, y: 599 },
    { x: 266, y: 577 },
  ],
};
function label(id: string, text: string, y: number, enter: number, exit: number, size = 30) {
  const o = prop(id, "text", 15, y, 310, 42, enter, exit);
  o.text = text;
  o.role = "explanatory";
  o.textStyle = { family: "sans", fontSize: size, weight: 600 };
  o.textPlane = plane;
  o.textBackground = false;
  return o;
}
label("s04-wait", "Waiting", 28, start, contact + 1, 36);
label("s04-local-choice", "Save locally", 92, start, contact + 1, 30);
label("s04-saved", "Saved locally", 28, contact + 1, end, 34);
label("s04-preview-kept", "Preview retained", 92, contact + 1, end, 27);
p.objects.push(...added);
const words = p.objects.filter((o) => o.id.startsWith("lyric-26-"));
let x = 70;
for (const [i, o] of words.entries()) {
  if (i === 4) x = 70;
  const text = p.words.find((w) => w.id === o.wordId)!.text;
  o.x = x;
  o.y = i < 4 ? 610 : 657;
  o.width = text.length * 19 + 20;
  o.height = 40;
  o.parentId = null;
  o.enterFrame = start;
  o.exitFrame = 3885;
  o.timeOffset = 0;
  o.cue = null;
  o.textStyle = { family: "serif", fontSize: 32, weight: 600 };
  delete o.motion;
  delete o.fade;
  delete o.rhythm;
  delete o.textAnchor;
  x += o.width;
}
for (const s of p.scenes.filter((s) => s.start >= start && s.end <= end)) {
  s.title = "S04 · Wait for the person";
  s.description =
    "Reverse-view permission study: body stays fixed while separately clipped forearm rotates toward physical key. Local-save consequence is a proposal under unresolved online lyric. Contact/occlusion and listening not accepted.";
  s.assetStatus = "illustrated";
  s.views = [{ id: "reverse-room", name: "Reverse workshop", assetId: "ai-reverse-clean-v1" }];
  s.defaultView = "reverse-room";
  s.viewCues = [];
  s.camera = [];
  s.boundaryTransitionFrames = 0;
  s.objectIds = [...added.map((o) => o.id), ...words.map((o) => o.id)];
}
export default validateScene(p);
