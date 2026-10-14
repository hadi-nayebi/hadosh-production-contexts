import previous from "./aiMonitorLayerStudy";
import { validateScene } from "./scene.mjs";
const p = structuredClone(previous);
p.documentId = "full-song-ai-readability-v3";
p.revision = 1;
// Phone review: the monitor text was subordinate to the point of being difficult to read.
// Increase key page claims while preserving the same physical screen and all lyric/audio content.
for (const [prefix, size] of [
  ["sales", 34],
  ["pitch", 28],
  ["learning", 32],
  ["details", 28],
] as const) {
  let x = 30;
  for (const o of p.objects.filter((o) => o.id.startsWith(`ai-page-${prefix}-`))) {
    o.x = x;
    o.width = o.text!.length * size * 0.56 + 12;
    o.height = 40;
    o.textStyle = { family: "sans", fontSize: size, weight: 600 };
    x += o.width + 8;
  }
}
// Playback showed two incompatible rooms and lyric sets during the inherited dissolve.
// A clean cut keeps the correction readable until the next checking action begins.
p.scenes.find((s) => s.start === 3679)!.boundaryTransitionFrames = 0;
export default validateScene(p);
