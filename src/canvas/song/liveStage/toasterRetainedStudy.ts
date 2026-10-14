import match from "./toasterMatchStudy";
import { validateScene } from "./scene.mjs";
const p = structuredClone(match);
p.documentId = "full-song-toaster-retained-v3";
p.revision = 1;
p.objects = p.objects.filter((o) => o.id !== "toaster-label-retained");
for (const scene of p.scenes)
  scene.objectIds = scene.objectIds.filter((id) => id !== "toaster-label-retained");
// Plan: director-ledger proposal toaster-retained-words-2026-10-11.
// Read the phrase first, then let its actual words become retained workspace labels.
for (const [id, targetX] of [
  ["lyric-37-02", 500],
  ["lyric-37-07", 650],
] as const) {
  const object = p.objects.find((o) => o.id === id)!;
  object.motion = [
    { frame: 5366, x: 0, y: 0 },
    { frame: 5540, x: 0, y: 0 },
    { frame: 5564, x: targetX - object.x, y: 474 - object.y },
  ];
  object.exitFrame = 5760;
  object.note +=
    " After a full-phrase reading hold, this word lands on the owned workspace and persists through the external provider change. See director-ledger proposal toaster-retained-words-2026-10-11.";
}
// Once the whole phrase has had its reading hold, remove its connective words.
// Otherwise the retained nouns leave a visibly broken sentence above the prop.
for (const object of p.objects.filter(
  (o) => o.id.startsWith("lyric-37-") && !["lyric-37-02", "lyric-37-07"].includes(o.id),
))
  object.exitFrame = 5540;
p.objects.find((o) => o.id === "toaster-label-model-a")!.exitFrame = 5597;
p.objects.find((o) => o.id === "toaster-label-model-b")!.enterFrame = 5597;
p.scenes.find((s) => s.id === "finale")!.boundaryTransitionFrames = 0;
export default validateScene(p);
