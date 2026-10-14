import baseline from "./full-song-seed.json";
import asset from "./ai-monitor-asset.json";
import { validateScene, type SceneObject } from "./scene.mjs";
const p = validateScene(structuredClone(baseline));
p.documentId = "full-song-ai-monitor-v1";
p.revision = 1;
p.assets!.push(asset);
// Bounded S02 implementation; all other proposed shots retain their existing rendering.
// Keep original interval IDs for first portions and record explicit split suffixes.
for (const boundary of [3497, 3679]) {
  const index = p.scenes.findIndex((s) => s.start < boundary && s.end > boundary);
  const old = p.scenes[index];
  const tail = structuredClone(old);
  tail.id = `${old.id}-after-${boundary}`;
  tail.start = boundary;
  tail.camera = tail.camera?.map((c) => ({ ...c, frame: Math.max(boundary, c.frame) }));
  old.end = boundary;
  p.scenes.splice(index + 1, 0, tail);
}
const labels: SceneObject[] = [];
function line(id: string, text: string, y: number, start: number, end: number, size = 24) {
  let x = 652;
  for (const [i, token] of text.split(" ").entries()) {
    const width = token.length * size * 0.56 + 16;
    labels.push({
      id: `${id}-${i}`,
      kind: "text",
      role: "explanatory",
      text: token,
      textBackground: false,
      parentId: null,
      x,
      y,
      width,
      height: 34,
      enterFrame: start,
      exitFrame: end,
      timeOffset: 0,
      cue: null,
      note: "Illustrative editable page content; not a sung lyric or real workshop claim. S02 director proposal.",
      suggestion: "",
      textStyle: { family: "sans", fontSize: size, weight: 600 },
    });
    x += width + 12;
  }
}
line("ai-page-file", "workshop.html", 205, 3497, 3679, 18);
line("ai-page-sales", "Amazing workshop!", 263, 3497, 3592, 27);
line("ai-page-pitch", "Transform your future", 312, 3497, 3592, 20);
line("ai-page-learning", "Build a simple page", 263, 3592, 3679, 25);
line("ai-page-details", "Write edit preview", 312, 3592, 3679, 22);
line("ai-page-example", "Illustrative draft", 377, 3497, 3679, 16);
p.objects.push(...labels);
for (const s of p.scenes.filter((s) => s.start >= 3497 && s.end <= 3679)) {
  s.title = s.start < 3592 ? "S02 · Inspect the proposed page" : "S02 · Replace the sales pitch";
  s.description =
    "New over-shoulder blocking plate. Independently editable page words change at the provisional correction cue. Character is unrigged; screen projection and moving review remain pending.";
  s.views = [{ id: "monitor-ots", name: "Over-shoulder monitor", assetId: asset.id }];
  s.defaultView = "monitor-ots";
  s.viewCues = [];
  s.camera = [];
  s.boundaryTransitionFrames = 0;
  s.objectIds = [
    ...p.objects.filter((o) => /^lyric-(23|24)-/.test(o.id)).map((o) => o.id),
    ...labels.map((o) => o.id),
  ];
}
// Hold full clauses together on open lines adjacent to the speaking person; no noun extraction.
for (const phrase of [23, 24]) {
  const words = p.objects.filter((o) => o.id.startsWith(`lyric-${phrase}-`));
  let x = 40,
    row = 0;
  for (const o of words) {
    const text = p.words.find((w) => w.id === o.wordId)!.text;
    const width = text.length * 15 + 20;
    if (x + width > 585) {
      x = 40;
      row++;
    }
    o.x = x;
    o.y = 500 + row * 47;
    o.width = width;
    o.height = 40;
    o.enterFrame = phrase === 23 ? 3497 : 3592;
    o.exitFrame = phrase === 23 ? 3592 : 3679;
    o.textStyle = { family: "serif", fontSize: 28, weight: 600 };
    delete o.motion;
    delete o.fade;
    delete o.rhythm;
    delete o.textAnchor;
    x += width;
  }
}
export default validateScene(p);
