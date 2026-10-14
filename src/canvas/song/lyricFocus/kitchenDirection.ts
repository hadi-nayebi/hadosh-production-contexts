import type { Annotation } from "./audioAnnotation";
import { wordTiming } from "./wordTiming";
import { percussionPulses, snapToStem } from "./stemAnalysis";
export function kitchenPerformance(annotation: Annotation, time: number) {
  const words = wordTiming(annotation)
    .intervals.map((w) => ({ ...w, item: annotation.items.find((i) => i.id === w.id)! }))
    .filter((w) => [14, 15].some((n) => w.item.groupId.endsWith(":section:" + n)));
  const groups = annotation.items.map((i, k) => ({
    item: i,
    start: annotation.boundaries[k],
    end: annotation.boundaries[k + 1],
  }));
  const start =
    groups.find((x) => x.item.groupId.endsWith(":section:14"))?.start ?? annotation.duration;
  const chorus =
    groups.find((x) => x.item.groupId.endsWith(":section:15"))?.start ?? annotation.duration;
  const outro =
    groups.find((x) => x.item.groupId.endsWith(":section:16"))?.start ?? annotation.duration;
  const preparation = groups.find((x) => x.item.groupId.endsWith(":section:13"))?.start ?? start;
  const cue = (text: string, fallback: number) =>
    words.find((w) => w.item.text.toLowerCase().replace(/[^a-z]/g, "") === text)?.start ?? fallback;
  const cuts = [
    { time: preparation, view: 0 },
    // The action starts on the first word of the actual toaster question, not section start.
    { time: words.find((w) => w.item.groupId.endsWith(":section:14"))?.start ?? start, view: 1 },
    { time: cue("power", start + 2), view: 2 },
    { time: cue("model", start + 4), view: 3 },
  ];
  const shot = Math.max(
    0,
    cuts.reduce((last, c, i) => (time >= c.time ? i : last), 0),
  );
  const active = words.find((w) => time >= w.start && time < w.end);
  const pre = words.find((w) => time >= w.start - 0.12 && time < w.start);
  const beat = percussionPulses(annotation.audioHash)
    .filter((b) => time >= b.time && time - b.time < 0.25)
    .reduce((p, b) => Math.max(p, b.strength * Math.exp(-(time - b.time) * 12)), 0);
  return {
    start,
    preparation,
    focusCue: snapToStem(preparation + (cuts[1].time - preparation) / 2, annotation.audioHash),
    cuts,
    toasterCue: cuts[1].time,
    chorus,
    outro,
    words,
    word: active ?? pre,
    spoken: !!active,
    view: cuts[shot].view,
    previous: cuts[Math.max(0, shot - 1)].view,
    age: Math.max(0, time - cuts[shot].time),
    beat,
    ending: Math.max(0, Math.min(1, (time - annotation.duration + 2) / 2)),
  };
}
