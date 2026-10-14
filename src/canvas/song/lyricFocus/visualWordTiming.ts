import type { Annotation } from "./audioAnnotation";
import { wordTiming } from "./wordTiming";
export type VisualWordTiming = {
  schema: "visual-word-timing-v1";
  minimumHold: number;
  intervals: {
    id: string;
    start: number;
    end: number;
    sourceStart: number;
    sourceEnd: number;
    constrained: boolean;
  }[];
};
/** Presentation only; phrases retain their source envelope and instrumental gaps. */
export function buildVisualWordTiming(a: Annotation): VisualWordTiming {
  const minimumHold = 0.14;
  const groups = new Map<string, ReturnType<typeof wordTiming>["intervals"]>();
  for (const w of wordTiming(a).intervals) {
    const item = a.items.find((i) => i.id === w.id)!;
    const phrase = (item as typeof item & { phraseId?: string }).phraseId ?? item.id;
    if (!groups.has(phrase)) groups.set(phrase, []);
    groups.get(phrase)!.push(w);
  }
  const intervals: VisualWordTiming["intervals"] = [];
  for (const words of groups.values()) {
    const first = words[0].start,
      last = words.at(-1)!.end;
    const hold = Math.min(minimumHold, (last - first) / words.length);
    const starts: number[] = [];
    words.forEach((w, i) =>
      starts.push(
        Math.max(
          i ? starts[i - 1] + hold : first,
          Math.min(w.start, last - hold * (words.length - i)),
        ),
      ),
    );
    words.forEach((w, i) =>
      intervals.push({
        id: w.id,
        start: starts[i],
        end: Math.min(starts[i + 1] ?? last, Math.max(w.end, starts[i] + hold)),
        sourceStart: w.start,
        sourceEnd: w.end,
        constrained: hold < minimumHold - 1e-8,
      }),
    );
  }
  return { schema: "visual-word-timing-v1", minimumHold, intervals };
}
export function validateVisualWordTiming(a: Annotation, v: VisualWordTiming) {
  if (JSON.stringify(v) !== JSON.stringify(buildVisualWordTiming(a)))
    throw Error("Visual timing does not match its source and presentation policy.");
}
