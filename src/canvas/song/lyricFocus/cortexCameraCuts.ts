import type { Annotation } from "./audioAnnotation";
import { wordTiming } from "./wordTiming";
export type CameraCut = { time: number; view: number; cue: string };
export function cortexCameraCuts(a: Annotation): CameraCut[] {
  const words = wordTiming(a)
    .intervals.map((w) => ({ ...w, item: a.items.find((i) => i.id === w.id)! }))
    .filter((w) => [9, 11].some((n) => w.item.groupId.endsWith(":section:" + n)));
  const phrases = [...new Set(words.map((w) => w.item.phraseId))];
  const cuts = phrases
    .filter((_, i) => i % 3 === 0)
    .map((id, i) => ({
      time: words.find((w) => w.item.phraseId === id)!.start,
      view: i % 3,
      cue: id!,
    }));
  const index = a.items.findIndex((i) => i.groupId.endsWith(":section:10"));
  const pause = a.boundaries[index];
  const before = cuts.filter((c) => c.time < pause).at(-1),
    after = cuts.find((c) => c.time > pause);
  if (before && after && after.time - before.time > 8)
    cuts.push({
      time: pause,
      view: [0, 1, 2].find((v) => v !== before.view && v !== after.view)!,
      cue: "instrumental-context-inspection",
    });
  return cuts.sort((a, b) => a.time - b.time);
}
