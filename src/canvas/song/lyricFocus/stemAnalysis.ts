import assets from "./hqAudioAssets.json";
import words from "./hqWordSuggestions.json";
import type { Annotation } from "./audioAnnotation";
import { wordTiming } from "./wordTiming";
import { phraseIntervals } from "./phraseTiming";
export function audioAssetsFor(hash: string) {
  return assets.find(
    (a) => a.canonicalAudioHash === hash && a.timeOriginVerified && a.masterTakeIdVerified,
  );
}
const pulseCache = new Map<string, { id: string; time: number; strength: number }[]>();
export function percussionPulses(hash: string) {
  if (pulseCache.has(hash)) return pulseCache.get(hash)!;
  const source = audioAssetsFor(hash);
  if (!source) return [];
  const drums = source.lanes.find((l) => l.id === "stem-drums")?.events ?? [];
  const percussion = source.lanes.find((l) => l.id === "stem-percussion")?.events ?? [];
  const result = drums
    .filter((e) => e.strength >= 0.25)
    .map((e) => ({
      ...e,
      strength: Math.min(
        1,
        e.strength + (percussion.some((p) => Math.abs(p.time - e.time) < 0.04) ? 0.15 : 0),
      ),
    }));
  pulseCache.set(hash, result);
  return result;
}
export function snapToStem(t: number, hash: string, maxShift = 0.2) {
  const pulses = percussionPulses(hash);
  if (!pulses.length) return t;
  const nearest = pulses.reduce((p, c) => (Math.abs(c.time - t) < Math.abs(p.time - t) ? c : p));
  return Math.abs(nearest.time - t) <= maxShift ? nearest.time : t;
}
/** Read-only estimate layer. Human edits, receipts and authoritative data remain intact. */
export function stemWordPreview(a: Annotation) {
  const result = words.find((w) => w.canonicalAudioHash === a.audioHash);
  const current = wordTiming(a).intervals;
  const baseline = a.wordTiming?.history[0] ?? current;
  const receipts = a.review?.approvals ?? [];
  const phrases = phraseIntervals(a);
  const changed = new Set<string>();
  const proposed = current.map((w) => {
    const item = a.items.find((i) => i.id === w.id)!,
      old = baseline.find((b) => b.id === w.id),
      estimate = result?.suggestions.find((s) => s.id === w.id);
    const edited = !old || Math.abs(old.start - w.start) > 1e-6 || Math.abs(old.end - w.end) > 1e-6;
    const protectedReceipt = receipts.some(
      (r) =>
        r.id.startsWith("word:" + w.id + ":") || r.id.startsWith("phrase:" + item.phraseId + ":"),
    );
    const phrase = phrases.find((p) => p.id === item.phraseId);
    if (
      !estimate ||
      edited ||
      protectedReceipt ||
      estimate.probability < 0.9 ||
      Math.abs(estimate.start - w.start) > 0.25 ||
      Math.abs(estimate.end - w.end) > 0.25 ||
      estimate.end - estimate.start < 0.04 ||
      !phrase ||
      estimate.start < phrase.start ||
      estimate.end > phrase.end
    )
      return w;
    changed.add(w.id);
    return { ...w, start: estimate.start, end: estimate.end };
  });
  // Reverting one estimate can expose an earlier collision, so repeat until stable.
  let reverted = true;
  while (reverted) {
    reverted = false;
    for (let i = 1; i < proposed.length; i++)
      if (proposed[i].start < proposed[i - 1].end) {
        if (changed.has(proposed[i].id)) {
          changed.delete(proposed[i].id);
          proposed[i] = current[i];
          reverted = true;
        }
        if (proposed[i].start < proposed[i - 1].end && changed.has(proposed[i - 1].id)) {
          changed.delete(proposed[i - 1].id);
          proposed[i - 1] = current[i - 1];
          reverted = true;
        }
      }
  }
  if (!changed.size || !a.wordTiming)
    return {
      annotation: a,
      changedIds: [] as string[],
      matched: result?.matchedWords ?? 0,
      total: result?.expectedWords ?? 0,
    };
  return {
    annotation: { ...a, wordTiming: { ...a.wordTiming, intervals: proposed } },
    changedIds: [...changed],
    matched: result?.matchedWords ?? 0,
    total: result?.expectedWords ?? 0,
  };
}
