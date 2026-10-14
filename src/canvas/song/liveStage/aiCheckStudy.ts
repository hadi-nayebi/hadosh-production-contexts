import previous from "./aiReadabilityStudy";
import { validateScene, type SceneObject } from "./scene.mjs";
const p = structuredClone(previous);
p.documentId = "full-song-ai-check-v4";
p.revision = 1;
const start = 3679,
  end = 3763,
  result = 3722;
const index = p.scenes.findIndex((s) => s.start < end && s.end > end);
const original = p.scenes[index];
const tail = structuredClone(original);
tail.id = `${original.id}-after-${end}`;
tail.start = end;
tail.camera = tail.camera?.map((c) => ({ ...c, frame: Math.max(end, c.frame) }));
tail.boundaryTransitionFrames = 0;
original.end = end;
p.scenes.splice(index + 1, 0, tail);
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
  parentId: string | null = null,
) {
  const o: SceneObject = {
    id,
    kind,
    parentId,
    x,
    y,
    width,
    height,
    enterFrame: enter,
    exitFrame: exit,
    timeOffset: 0,
    cue: null,
    note: "S03 overhead comparison proposal. Illustrative local preview, not a real event or publication.",
    suggestion: "",
  };
  added.push(o);
  return o;
}
function label(
  id: string,
  text: string,
  x: number,
  y: number,
  width: number,
  size: number,
  enter = start,
  exit = end,
  parentId: string | null = null,
) {
  return Object.assign(prop(id, "text", x, y, width, 44, enter, exit, parentId), {
    text,
    role: "explanatory" as const,
    textBackground: false,
    textStyle: { family: "sans" as const, fontSize: size, weight: 600 },
  });
}
prop("s03-desk", "desk-surface", 0, 0, 1280, 720);
prop("s03-source", "group", 72, 100, 360, 370);
prop("s03-source-paper", "desk-paper", 0, 0, 360, 370, start, end, "s03-source");
prop("s03-tablet", "group", 514, 68, 682, 446);
prop("s03-tablet-frame", "desk-tablet", 0, 0, 682, 446, start, end, "s03-tablet");
label("s03-source-title", "SOURCE NOTE", 17, 32, 300, 24, start, end, "s03-source");
label("s03-source-date", "OCT 14", 26, 130, 280, 44, start, end, "s03-source");
label("s03-source-disclosure", "Illustrative date", 18, 286, 305, 23, start, end, "s03-source");
label("s03-page-file", "workshop.html", 34, 27, 500, 24, start, end, "s03-tablet");
label("s03-page-title", "Build a simple page", 34, 96, 570, 32, start, result, "s03-tablet");
label("s03-page-date", "OCT 14", 34, 165, 275, 44, start, result, "s03-tablet");
label("s03-preview-link", "Preview →", 34, 298, 280, 36, start, result, "s03-tablet");
label("s03-preview-result", "Write · Edit · Preview", 34, 298, 590, 34, result, end, "s03-tablet");
label("s03-preview-heading", "LOCAL PREVIEW", 34, 96, 570, 24, result, end, "s03-tablet");
label("s03-result-title", "Build a simple page", 34, 165, 570, 34, result, end, "s03-tablet");
prop("s03-source-match", "desk-ring", 20, 114, 255, 63, 3690, end, "s03-source");
prop("s03-page-match", "desk-ring", 27, 149, 255, 63, 3690, result, "s03-tablet");
const pointer = prop("s03-pointer", "desk-pointer", 286, 236, 36, 44, 3698, end, "s03-tablet");
pointer.motion = [
  { frame: 3698, x: 0, y: 0 },
  { frame: 3708, x: 0, y: 0 },
  { frame: 3720, x: -60, y: 77 },
];
p.objects.push(...added);
const words = p.objects.filter((o) => o.id.startsWith("lyric-25-"));
let x = 160;
for (const [i, o] of words.entries()) {
  if (i === 4) x = 160;
  const text = p.words.find((w) => w.id === o.wordId)!.text;
  o.x = x;
  o.y = i < 4 ? 578 : 631;
  o.width = text.length * 22 + 24;
  o.height = 45;
  o.parentId = null;
  o.enterFrame = start;
  o.exitFrame = end;
  o.timeOffset = 0;
  o.cue = null;
  o.textStyle = { family: "serif", fontSize: 36, weight: 600 };
  delete o.motion;
  delete o.fade;
  delete o.rhythm;
  delete o.textAnchor;
  x += o.width;
}
const scene = p.scenes.find((s) => s.start === start)!;
scene.title = "S03 · Check the source and preview";
scene.description =
  "Overhead source-note/tablet comparison; illustrative matching dates, pointer action and local preview result. Original lyric/audio preserved. Timing and creative acceptance provisional.";
scene.assetStatus = "vector study";
scene.objectIds = [...added.map((o) => o.id), ...words.map((o) => o.id)];
scene.camera = [];
scene.boundaryTransitionFrames = 0;
delete scene.views;
delete scene.defaultView;
delete scene.viewCues;
export default validateScene(p);
