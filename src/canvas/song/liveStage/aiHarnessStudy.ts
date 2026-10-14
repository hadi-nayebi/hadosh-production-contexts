import previous from "./aiMemoryStudy";
import { validateScene, type SceneObject } from "./scene.mjs";

// S07 reuses S03's editable overhead props. All timing is a proposed visual
// interpretation of the existing phrase intervals, not a new audio alignment.
const p = structuredClone(previous);
p.documentId = "full-song-ai-harness-v7";
p.revision = 1;
const start = 4126,
  end = 4303,
  arrival = 4202,
  choice = 4214;
const index = p.scenes.findIndex((s) => s.start === start);
const scene = p.scenes[index];
// Align the next existing shot with the planned S08 cut rather than adding
// a six-frame duplicate scene between two views of the same workspace.
scene.end = end;
p.scenes[index + 1].start = end;
p.scenes[index + 1].boundaryTransitionFrames = 0;
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
  const object: SceneObject = {
    id: `s07-${id}`,
    kind,
    x,
    y,
    width,
    height,
    parentId,
    enterFrame: enter,
    exitFrame: exit,
    timeOffset: 0,
    cue: null,
    note: "S07 proposed harness: model supplies words; the owned app controls tool access. Reuses S03 overhead artwork. No real tool or network action.",
    suggestion: "",
  };
  added.push(object);
  return object;
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
  return Object.assign(prop(id, "text", x, y, width, 48, enter, exit, parentId), {
    text,
    role: "explanatory" as const,
    textBackground: false,
    textStyle: { family: "sans" as const, fontSize: size, weight: 600 },
  });
}
prop("desk", "desk-surface", 0, 0, 1280, 720);
prop("model", "group", 55, 80, 320, 400);
prop("model-paper", "desk-paper", 0, 0, 320, 400, start, end, "s07-model");
label("model-title", "EXTERNAL MODEL", 20, 30, 290, 25, start, end, "s07-model");
label("model-words", "Suggests words", 20, 120, 290, 30, start, end, "s07-model");
label("model-limit", "No tool access", 20, 298, 290, 28, start, end, "s07-model");
prop("harness", "group", 495, 60, 730, 465);
prop("harness-tablet", "desk-tablet", 0, 0, 730, 465, start, end, "s07-harness");
label("harness-title", "YOUR APP · YOUR RULES", 38, 28, 660, 28, start, end, "s07-harness");
label("incoming", "Words received", 38, 106, 640, 30, arrival, end, "s07-harness");
label("read", "Read notes.txt", 38, 201, 365, 32, start, end, "s07-harness");
label("read-wait", "Available", 437, 201, 230, 30, start, choice, "s07-harness");
label("read-allowed", "Allowed ✓", 437, 201, 230, 30, choice, end, "s07-harness");
label("publish", "Publish page", 38, 321, 365, 32, start, end, "s07-harness");
label("publish-wait", "Ask me first", 437, 321, 255, 30, start, end, "s07-harness");
prop("read-rule", "desk-ring", 425, 186, 265, 67, choice, end, "s07-harness");
prop("publish-latch", "desk-ring", 425, 306, 265, 67, start, end, "s07-harness");
// Words cross into the app's inbox, never into either tool action row.
const packet = label("word-packet", "→", 390, 178, 80, 48, 4154, arrival);
packet.motion = [
  { frame: 4154, x: 0, y: 0 },
  { frame: 4170, x: 0, y: 0 },
  { frame: arrival - 1, x: 80, y: 0 },
];
p.objects.push(...added);
const lyrics: SceneObject[] = [];
for (const [family, enter, exit, breakAt] of [
  [29, start, choice, 5],
  [30, choice, end, 6],
]) {
  const words = p.objects.filter((o) => o.id.startsWith(`lyric-${family}-`));
  let x = 60;
  for (const [i, object] of words.entries()) {
    if (i === breakAt) x = 60;
    const text = p.words.find((w) => w.id === object.wordId)!.text;
    Object.assign(object, {
      x,
      y: i < breakAt ? 579 : 632,
      width: text.length * 19 + 22,
      height: 43,
      parentId: null,
      enterFrame: enter,
      exitFrame: exit,
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
  lyrics.push(...words);
}
Object.assign(scene, {
  title: "S07 · Your app controls the tools",
  description:
    "Overhead model suggestions enter the owned app; reading is allowed, publishing remains permission-gated. Same desk/tablet vocabulary as S03. Timing and creative acceptance provisional.",
  assetStatus: "vector study",
  objectIds: [...added.map((o) => o.id), ...lyrics.map((o) => o.id)],
  camera: [],
  boundaryTransitionFrames: 0,
});
delete scene.views;
delete scene.defaultView;
delete scene.viewCues;
export default validateScene(p);
