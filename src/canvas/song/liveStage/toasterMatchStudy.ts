import contact from "./toasterStudy";
import { validateScene } from "./scene.mjs";
const p = structuredClone(contact);
p.documentId = "full-song-toaster-match-v2";
p.revision = 1;
for (const o of p.objects.filter((o) => o.id.startsWith("toaster-")))
  o.note += " Provider match: owned workspace stays while external supplier changes.".toLowerCase();
const labels = [
  ["power", "Power supplier", 4980, 5366, 900, 360],
  ["model-a", "Model provider A", 5366, 5552, 900, 360],
  ["model-b", "Model provider B", 5552, 5760, 900, 360],
  ["retained", "Notes · rules · tools", 5366, 5760, 495, 460],
] as const;
for (const [id, text, enterFrame, exitFrame, x, y] of labels)
  p.objects.push({
    id: `toaster-label-${id}`,
    kind: "story-fragment",
    parentId: null,
    x,
    y,
    width: 220,
    height: 40,
    enterFrame,
    exitFrame,
    timeOffset: 0,
    cue: null,
    note: "Independent explanatory label: distinguishes the purchased supply from retained local work.",
    suggestion: "",
    text,
    label: text,
  });
for (const scene of p.scenes.filter((s) => s.id.startsWith("toaster"))) {
  scene.objectIds.push(...labels.map((l) => `toaster-label-${l[0]}`));
  scene.description +=
    " Match cut: at178.87s the same physical tool becomes an owned workspace; at185.07s provider A becomes B while local notes/rules/tools remain.";
}
export default validateScene(p);
