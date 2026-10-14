import previous from "./aiHarnessStudy";
import assets from "./ai-side-assets.json";
import { validateScene, type SceneObject } from "./scene.mjs";
const p = structuredClone(previous);
p.documentId = "full-song-ai-crown-v8";
p.revision = 1;
p.assets!.push(...assets);
const start = 3950,
  end = 4036,
  move = 3974,
  stored = 4002;
const added: SceneObject[] = [];
function prop(
  id: string,
  kind: string,
  x: number,
  y: number,
  width: number,
  height: number,
  enter = start,
) {
  const o: SceneObject = {
    id: `s05-${id}`,
    kind,
    x,
    y,
    width,
    height,
    parentId: null,
    enterFrame: enter,
    exitFrame: end,
    timeOffset: 0,
    cue: null,
    note: "S05 side-profile proposal. The user's instruction becomes a separately editable notes.txt memory attached to the headphone crown. No model weights change; audio timing is provisional.",
    suggestion: "",
  };
  added.push(o);
  return o;
}
const person = prop("person", "image", 0, 0, 1280, 720);
person.views = [
  { id: "side-person", name: "Registered side-profile person", assetId: "ai-side-person-v1" },
];
person.defaultView = "side-person";
person.viewCues = [];
person.note =
  "Independent registered side-profile person and chair. Both hands stay in their reference keyboard pose; no typing articulation is claimed.";
// Branching support starts at the headphone crown, rather than floating above it.
prop("root", "story-node", 329, 142, 18, 18);
Object.assign(prop("branch-a", "story-edge", 338, 84, 196, 67), { text: "up" });
prop("junction", "story-node", 525, 75, 18, 18);
prop("branch-b", "story-edge", 534, 84, 76, 112);
Object.assign(prop("branch-c", "story-edge", 430, 83, 50, 40), { text: "up" });
prop("small-node", "story-node", 471, 74, 18, 18);
prop("file", "desk-memory", 610, 95, 450, 270, move);
const title = prop("filename", "text", 637, 113, 370, 48, move);
Object.assign(title, {
  text: "notes.txt",
  role: "explanatory",
  textBackground: false,
  textColor: "#e9eadf",
  textStyle: { family: "sans", fontSize: 30, weight: 600 },
});
const saved = prop("saved", "text", 880, 311, 145, 40, stored);
Object.assign(saved, {
  text: "Saved ✓",
  role: "explanatory",
  textBackground: false,
  textColor: "#b6efbb",
  textStyle: { family: "sans", fontSize: 25, weight: 600 },
});
p.objects.push(...added);
const words = p.objects.filter((o) => o.id.startsWith("lyric-27-"));
let prefixX = 60,
  lineX = 530;
for (const [i, o] of words.entries()) {
  const text = p.words.find((w) => w.id === o.wordId)!.text;
  if (i === 7) lineX = 530;
  Object.assign(o, {
    parentId: null,
    x: i < 5 ? prefixX : lineX,
    y: i < 5 ? 627 : i < 7 ? 385 : 445,
    width: text.length * 19 + 20,
    height: 45,
    enterFrame: start,
    exitFrame: end,
    timeOffset: 0,
    cue: null,
    textColor: "#f3e9d0",
    textStyle: { family: "serif", fontSize: 32, weight: 600 },
  });
  delete o.fade;
  delete o.rhythm;
  delete o.textAnchor;
  delete o.motion;
  if (i < 5) prefixX += o.width;
  else {
    o.motion = [
      { frame: start, x: 0, y: 0 },
      { frame: move, x: 0, y: 0 },
      { frame: stored, x: 120, y: -200 },
    ];
    o.note =
      "Original lyric27 token moves intact into the owned note; source text unchanged. Hold, transfer and retained position remain independently editable.";
    lineX += o.width;
  }
}
const scene = p.scenes.find((s) => s.start === start)!;
Object.assign(scene, {
  title: "S05 · Save the words as your memory",
  description:
    "Genuine side profile: unchanged Clear words. Skip the pitch. tokens move into notes.txt supported by branches from the headphone crown; holds before S06 reopens the same instruction. Registered person and clean room remain separate. No model learning or autonomous typing claimed.",
  assetStatus: "illustrated",
  views: [
    { id: "side-clean", name: "Side-profile clean environment", assetId: "ai-side-clean-v1" },
  ],
  defaultView: "side-clean",
  viewCues: [],
  camera: [],
  boundaryTransitionFrames: 0,
  objectIds: [...added.map((o) => o.id), ...words.map((o) => o.id)],
});
export default validateScene(p);
