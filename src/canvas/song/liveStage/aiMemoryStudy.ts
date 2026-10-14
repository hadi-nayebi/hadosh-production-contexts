import previous from "./aiPermissionStudy";
import { validateScene, type SceneObject } from "./scene.mjs";

const p = structuredClone(previous);
p.documentId = "full-song-ai-memory-v6";
p.revision = 1;
// A fictional online result follows permission; this workspace publishes nothing.
for (const [id, text] of [
  ["s04-local-choice", "Your approval"],
  ["s04-saved", "Page online"],
  ["s04-preview-kept", "You gave permission"],
]) {
  const object = p.objects.find((o) => o.id === id)!;
  object.text = text;
  object.note =
    "S04 v6 depicts fictional publication after human permission. No external publication occurs; v5 remains unchanged.";
}
p.objects.find((o) => o.id === "s04-preview-kept")!.textStyle!.fontSize = 25;
for (const scene of p.scenes.filter((s) => s.start >= 3763 && s.end <= 3950)) {
  scene.description =
    "S04 v6: waiting, deliberate human contact, then fictional page-online result. Depiction matches the unchanged lyric; no external page is published. Moving contact and listening remain unaccepted.";
}

const start = 4036,
  end = 4126;
const index = p.scenes.findIndex((s) => s.start < start && s.end > start);
const before = p.scenes[index],
  scene = structuredClone(before);
before.end = start;
scene.id = `${before.id}-after-${start}`;
scene.start = start;
p.scenes.splice(index + 1, 0, scene);
const foreground = structuredClone(p.objects.find((o) => o.id === "ai-monitor-foreground")!);
foreground.id = "s06-person";
foreground.enterFrame = start;
foreground.exitFrame = end;
foreground.note =
  "S06 reuses the registered over-shoulder foreground. Static human presence; no hand-edit motion claimed.";
const plane = structuredClone(p.objects.find((o) => o.id.startsWith("ai-page-"))!.textPlane!);
const added: SceneObject[] = [foreground];
function label(id: string, text: string, y: number, size: number, enter = start, exit = end) {
  const object: SceneObject = {
    id,
    kind: "text",
    role: "explanatory",
    text,
    textBackground: false,
    parentId: null,
    x: 30,
    y,
    width: 545,
    height: 45,
    enterFrame: enter,
    exitFrame: exit,
    timeOffset: 0,
    cue: null,
    textStyle: { family: "sans", fontSize: size, weight: 600 },
    textPlane: plane,
    note: "S06 illustrative editable notes.txt. The body is the retained lyric27 instruction; the explanatory heading can change without changing that source. Timing remains provisional.",
    suggestion: "",
  };
  added.push(object);
}
label("s06-file", "notes.txt", 26, 27);
label("s06-heading-before", "Writing notes", 83, 34, start, 4072);
label("s06-heading-after", "My writing rules", 83, 34, 4072);
label("s06-body-clear", "Clear words.", 146, 36);
label("s06-body-pitch", "Skip the pitch.", 204, 36);
label("s06-opened", "Opened", 282, 27, start, 4072);
label("s06-editing", "Editing heading", 282, 27, 4072, 4086);
label("s06-saved", "Saved", 282, 27, 4086, 4092);
label("s06-closed", "Reopen note →", 146, 34, 4092, 4104);
label("s06-reopened", "Reopened · same note", 282, 27, 4104);
p.objects.push(...added);
const words = p.objects.filter((o) => o.id.startsWith("lyric-28-"));
let x = 50;
for (const [i, object] of words.entries()) {
  if (i === 5) x = 50;
  const text = p.words.find((w) => w.id === object.wordId)!.text;
  Object.assign(object, {
    x,
    y: i < 5 ? 579 : 632,
    width: text.length * 19 + 22,
    height: 43,
    parentId: null,
    enterFrame: start,
    exitFrame: end,
    timeOffset: 0,
    cue: null,
    textStyle: { family: "serif", fontSize: 32, weight: 600 },
  });
  delete object.motion;
  delete object.fade;
  delete object.rhythm;
  delete object.textAnchor;
  x += object.width;
}
Object.assign(scene, {
  title: "S06 · Reopen and edit your note",
  description:
    "Over-shoulder retrieval: notes.txt retains its instruction while its heading changes, saves and reopens. Illustrative file actions; no model weights change. Readability and pace await moving review.",
  assetStatus: "illustrated",
  views: [
    { id: "monitor-clean", name: "Registered clean environment", assetId: "ai-monitor-clean-v1" },
  ],
  defaultView: "monitor-clean",
  viewCues: [],
  camera: [],
  boundaryTransitionFrames: 0,
  objectIds: [...added.map((o) => o.id), ...words.map((o) => o.id)],
});
// A brief closed-file interval makes retrieval visible; reopening uses the same
// object identities and edited content, rather than a second copied note.
const closed = structuredClone(scene),
  reopened = structuredClone(scene);
scene.end = 4092;
closed.id = `${scene.id}-closed`;
closed.start = 4092;
closed.end = 4104;
closed.objectIds = ["s06-person", "s06-file", "s06-closed", ...words.map((o) => o.id)];
reopened.id = `${scene.id}-reopened`;
reopened.start = 4104;
p.scenes.splice(p.scenes.indexOf(scene) + 1, 0, closed, reopened);
p.scenes.find((s) => s.start === end)!.boundaryTransitionFrames = 0;
export default validateScene(p);
