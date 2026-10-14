import previous from "./aiCrownStudy";
import { validateScene, type SceneObject, type Setting } from "./scene.mjs";

// Clause-led continuation of the existing five-view proposal. Original recording
// and source words remain authoritative; these visual timings are provisional.
const p = structuredClone(previous);
p.documentId = "full-song-ai-ownership-v9";
p.revision = 1;
const added: SceneObject[] = [];
function prop(
  id: string,
  kind: string,
  x: number,
  y: number,
  width: number,
  height: number,
  enter: number,
  exit: number,
): SceneObject {
  const o: SceneObject = {
    id,
    kind,
    x,
    y,
    width,
    height,
    parentId: null,
    enterFrame: enter,
    exitFrame: exit,
    timeOffset: 0,
    cue: null,
    note: "S08–S12 owned workspace proposal. Illustrative local actions only; source audio and lyric text unchanged. Timing and creative acceptance provisional.",
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
  enter: number,
  exit: number,
  light = true,
) {
  return Object.assign(prop(id, "text", x, y, width, 48, enter, exit), {
    text,
    role: "explanatory" as const,
    textBackground: false,
    textColor: light ? "#f0e9d5" : "#244b4b",
    textStyle: { family: "sans" as const, fontSize: size, weight: 600 },
  });
}
function clone(id: string, sourceId: string, enter: number, exit: number) {
  const o = structuredClone(p.objects.find((x) => x.id === sourceId)!);
  Object.assign(o, { id, enterFrame: enter, exitFrame: exit });
  added.push(o);
  return o;
}
function lyrics(family: number, enter: number, exit: number, breakAt: number) {
  const words = p.objects.filter((o) => o.id.startsWith(`lyric-${family}-`));
  let x = 60;
  for (const [i, o] of words.entries()) {
    if (i === breakAt) x = 60;
    const text = p.words.find((w) => w.id === o.wordId)!.text;
    Object.assign(o, {
      x,
      y: i < breakAt ? 579 : 634,
      width: text.length * 19 + 20,
      height: 43,
      parentId: null,
      enterFrame: enter,
      exitFrame: exit,
      timeOffset: 0,
      cue: null,
      textColor: "#f3e9d0",
      textStyle: { family: "serif", fontSize: 32, weight: 600 },
    });
    delete o.motion;
    delete o.fade;
    delete o.rhythm;
    delete o.textAnchor;
    x += o.width;
  }
  return words.map((o) => o.id);
}
// Stable IDs and coordinates across supplier replacement and the final wide shot.
clone("s08-person", "headset-seated-character", 4303, 4980);
prop("s08-model-card", "desk-memory", 80, 30, 310, 165, 4303, 4980);
label("s08-model-label", "MODEL SUPPLIER", 100, 46, 285, 25, 4303, 4980);
label("s08-model-a", "Model A", 105, 115, 265, 38, 4303, 4391);
label("s08-model-b", "Model B", 105, 115, 265, 38, 4391, 4980);
prop("s08-files", "desk-memory", 480, 30, 320, 255, 4303, 4980);
label("s08-files-title", "MY WORKSPACE", 500, 46, 290, 25, 4303, 4980);
label("s08-notes", "notes.txt", 505, 110, 280, 32, 4303, 4980);
label("s08-rules", "tool-rules.json", 505, 166, 280, 27, 4303, 4980);
label("s08-page", "workshop.html", 505, 222, 280, 27, 4303, 4980);
const widePlane = {
  width: 340,
  height: 220,
  corners: [
    { x: 847, y: 222 },
    { x: 1104, y: 172 },
    { x: 1092, y: 362 },
    { x: 827, y: 371 },
  ],
};
for (const [id, text, y, size] of [
  ["file", "workshop.html", 12, 25],
  ["title", "Build a simple page", 72, 27],
  ["state", "Your work stays here", 151, 24],
] as const)
  Object.assign(label(`s08-screen-${id}`, text, 20, y, 305, size, 4303, 4980, false), {
    textPlane: widePlane,
  });
added.find((o) => o.id === "s08-screen-title")!.exitFrame = 4674;
Object.assign(
  label("s08-screen-title-edited", "Build your own page", 20, 72, 305, 27, 4674, 4980, false),
  { textPlane: widePlane },
);
const wideIds = added.map((o) => o.id);
const s08Words = [...lyrics(31, 4303, 4391, 5), ...lyrics(32, 4391, 4478, 5)];

const s09Start = added.length;
clone("s09-person", "s04-person", 4478, 4621);
const arm = clone("s09-forearm", "s04-forearm", 4478, 4621);
arm.animation = { startFrame: 4536, endFrame: 4560 };
arm.note =
  "Reuse registered reverse forearm: deliberate contact precedes read-only scope choice at4561; publishing still waits. No real tool runs.";
prop("s09-plan", "desk-memory", 305, 42, 430, 265, 4478, 4621);
label("s09-plan-title", "PROPOSED PLAN", 326, 57, 390, 28, 4478, 4621);
label("s09-plan-read", "1. Read notes.txt", 326, 118, 390, 30, 4478, 4621);
label("s09-plan-preview", "2. Preview changes", 326, 178, 390, 30, 4478, 4621);
label("s09-plan-wait", "Publish: ask me first", 326, 242, 390, 27, 4478, 4621);
const choicePlane = structuredClone(p.objects.find((o) => o.id === "s04-wait")!.textPlane);
for (const [id, text, y, size, enter, exit] of [
  ["choose", "Choose scope", 25, 34, 4478, 4561],
  ["selected", "Read only ✓", 25, 34, 4561, 4621],
  ["waiting", "Waiting for you", 94, 27, 4478, 4561],
  ["limited", "Publish still waits", 94, 25, 4561, 4621],
] as const)
  Object.assign(label(`s09-${id}`, text, 15, y, 310, size, enter, exit, false), {
    textPlane: choicePlane,
  });
// Keep the proposed plan to the left of the face and away from the choosing hand.
for (const o of added.slice(s09Start).filter((o) => o.id.startsWith("s09-plan"))) o.x -= 265;
const s09Ids = added.slice(s09Start).map((o) => o.id);
const s09Words = lyrics(33, 4478, 4621, 6);

const s10Start = added.length;
clone("s10-person", "s06-person", 4621, 4764);
const screenPlane = structuredClone(p.objects.find((o) => o.id === "s06-file")!.textPlane);
for (const [id, text, y, size, enter, exit] of [
  ["file", "workshop.html", 26, 27, 4621, 4764],
  ["before", "Build a simple page", 94, 36, 4621, 4674],
  ["after", "Build your own page", 94, 36, 4674, 4764],
  ["action-before", "Look at the draft", 166, 30, 4621, 4674],
  ["action-after", "Your change saved", 166, 30, 4674, 4764],
  ["final-say", "Publish only when I say", 282, 29, 4621, 4764],
] as const)
  Object.assign(label(`s10-${id}`, text, 30, y, 545, size, enter, exit, false), {
    textPlane: screenPlane,
  });
const s10Ids = added.slice(s10Start).map((o) => o.id);
const s10Words = lyrics(34, 4621, 4764, 7);

const s11Start = added.length;
for (const source of p.objects.filter((o) => o.id.startsWith("s05-")))
  clone(source.id.replace("s05-", "s11-"), source.id, 4764, 4806);
label("s11-clear", "Clear words.", 650, 185, 360, 32, 4764, 4806);
label("s11-pitch", "Skip the pitch.", 650, 245, 360, 32, 4764, 4806);
const s11Ids = added.slice(s11Start).map((o) => o.id);
p.objects.push(...added);
const baseScene = p.scenes.find((s) => s.start === 4303)!;
const shot = (
  id: string,
  title: string,
  start: number,
  end: number,
  assetId: string,
  objectIds: string[],
  description: string,
): Setting => ({
  ...structuredClone(baseScene),
  id,
  title,
  start,
  end,
  description,
  objectIds,
  assetStatus: "illustrated",
  camera: [],
  boundaryTransitionFrames: 0,
  views: [{ id: "registered", name: title, assetId }],
  defaultView: "registered",
  viewCues: [],
});
const shots = [
  shot(
    "ownership-s08",
    "S08 · Change the model, keep the work",
    4303,
    4478,
    "headset-workshop-cleanplate-v1",
    [...wideIds, ...s08Words],
    "Supplier changes4391; same file identities and coordinates persist. Wide composition reveals model and owned workspace as separate things.",
  ),
  shot(
    "ownership-s09",
    "S09 · Choose the plan and tool scope",
    4478,
    4621,
    "ai-reverse-clean-v1",
    [...s09Ids, ...s09Words],
    "Reverse view returns to the person's deliberate contact. Plan appears first; read-only scope is selected4561, after contact. Publishing stays gated.",
  ),
  shot(
    "ownership-s10",
    "S10 · Change it, keep the final say",
    4621,
    4764,
    "ai-monitor-clean-v1",
    [...s10Ids, ...s10Words],
    "Over-shoulder view reveals the exact heading change4674. The person retains publication authority; static hands do not claim articulated typing.",
  ),
  shot(
    "ownership-s11",
    "S11 · Retained memory",
    4764,
    4806,
    "ai-side-clean-v1",
    s11Ids,
    "Brief side-profile recall of S05's identical instruction and crown support after the sung clause ends. No new lyric or memory is invented.",
  ),
  shot(
    "ownership-s12",
    "S12 · Your workspace remains",
    4806,
    4980,
    "headset-workshop-cleanplate-v1",
    wideIds,
    "Return to S08's same files, Model B and completed page. Hold without a new tool action; prepares the ownership question at the toaster cut.",
  ),
];
p.scenes = p.scenes.flatMap((s) =>
  s.start === 4303 ? shots : s.start > 4303 && s.start < 4980 ? [] : [s],
);
export default validateScene(p);
