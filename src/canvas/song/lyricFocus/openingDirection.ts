import { phraseIntervals } from "./phraseTiming";
import type { Annotation } from "./audioAnnotation";
import { wordTiming } from "./wordTiming";
import rhythm from "./earthBuildRhythm.json";
import { snapToStem } from "./stemAnalysis";
export type Placement = { x: number; y: number; scale: number };
export type WordArt = Placement & {
  keep?: "word" | "phrase" | "next-phrase";
  hold: number;
  motion: "grow" | "shrink" | "stretch" | "still" | "fonts";
};
export type OpeningDirection = {
  words?: Record<string, WordArt>;
  placements: Record<string, Placement>;
  zoom: number;
  zoomStart: number;
  zoomEnd: number;
  windowOpen: number;
  wordHold: number;
  wordScale: number;
  wordX: number;
  wordY: number;
  events: Record<string, number>;
};
export const openingDefaults: OpeningDirection = {
  placements: {
    stool: { x: 50, y: 90, scale: 1 },
    book: { x: 50, y: 42, scale: 1 },
    logo: { x: 38, y: 40, scale: 0.1 },
    window: { x: 62.8, y: 37, scale: 1 },
    earth: { x: 50, y: 55, scale: 1 },
  },
  zoom: 6.5,
  zoomStart: 3.05,
  zoomEnd: 9.5,
  windowOpen: 6.1,
  wordHold: 0.25,
  wordScale: 1,
  wordX: 28,
  wordY: 83,
  events: {},
};
export const openingAssets = [
  {
    id: "earth-collage",
    label: "Earth upgrade · nine frames",
    src: "/scene-assets/earth-build/earth-upgrade-3x3-v1.png",
  },
  { id: "book", label: "Open book", src: "/scene-assets/earth-build/open-book-normal-v3.png" },
  { id: "logo", label: "Hadosh sticker", src: "/scene-assets/earth-build/hadosh-symbol.png" },
  { id: "earth", label: "Earth", src: "/scene-assets/earth-base-v1.png" },
  {
    id: "electricity",
    label: "Electricity block",
    src: "/scene-assets/earth-build/electricity-v1.png",
  },
  { id: "transistors", label: "Transistor", src: "/scene-assets/earth-build/transistor-v1.png" },
  { id: "computers", label: "Computer", src: "/scene-assets/crt-cutout-v4.png" },
];
export function openingBounds(a: Annotation) {
  if (a.audioHash !== rhythm.audioHash) return null;
  const firstVerse = a.items.findIndex((x) => x.groupId.endsWith(":section:3"));
  const firstWord = wordTiming(a).intervals.find((w) =>
    a.items.find((i) => i.id === w.id)?.groupId.endsWith(":section:3"),
  );
  const end = firstWord?.start ?? (firstVerse >= 0 ? a.boundaries[firstVerse] : rhythm.end);
  return { start: 0, end };
}
export function openingEvents(d: OpeningDirection) {
  return rhythm.events
    .map((e) => ({ ...e, time: d.events[e.id] ?? snapToStem(e.time, rhythm.audioHash) }))
    .sort((a, b) => a.time - b.time);
}
/** Arrival follows a measured drum cue; source launch controls remain intact. */
export function openingLanding(start: number) {
  return snapToStem(start + 1.1, rhythm.audioHash, 0.2);
}
/** Upgrade pictures respond to an arriving block, while saved onset controls stay intact. */
export function openingImageStages(d: OpeningDirection) {
  return openingEvents(d)
    .filter((e) => e.kind === "image-stage")
    .map((e) => ({
      ...e,
      sourceTime: e.time,
      time: e.imageIndex === 0 ? e.time : openingLanding(e.time),
    }));
}
export function openingWords(a: Annotation, time: number, d: OpeningDirection) {
  const phrases = phraseIntervals(a);
  const list = wordTiming(a).intervals.filter((w) => {
    const item = a.items.find((x) => x.id === w.id)!;
    return item.groupId.endsWith(":section:1") && !/^(come|closer[.!]?)$/i.test(item.text);
  });
  return list.flatMap((w, i) => {
    const item = a.items.find((x) => x.id === w.id)!,
      key = item.text.toLowerCase().replace(/[^a-z]/g, ""),
      baseArt = wordArt(key, d);
    const art =
      key === "a" && item.phraseId?.endsWith(":phrase:3") && !d.words?.a
        ? { ...baseArt, x: 31, y: 26 }
        : baseArt;
    const phrase = phrases.find((p) => p.id === item.phraseId);
    let end =
      art.keep === "phrase"
        ? (phrase?.end ?? w.end) + art.hold
        : Math.min(list[i + 1]?.start ?? 9.5, w.end + art.hold);
    const nextPhrase = phrases.find(
      (p) => p.start >= (phrase?.end ?? w.end) - 1e-6 && p.id !== phrase?.id,
    );
    if (nextPhrase && key !== "view")
      end = art.keep === "next-phrase" ? nextPhrase.start : Math.min(end, nextPhrase.start);
    // Default visual clauses remain readable together. Explicit per-word
    // direction stays authoritative; these are holds, never source-anchor edits.
    if (!d.words?.[key] && item.phraseId?.endsWith(":phrase:2")) {
      const windowCue = list.find((c) => {
        const source = a.items.find((i) => i.id === c.id);
        return source?.phraseId === item.phraseId && /^window\W*$/i.test(source?.text ?? "");
      });
      if (["this", "story", "starts"].includes(key))
        end = Math.min(nextPhrase?.start ?? 9.5, (windowCue?.start ?? w.end) + 0.5);
      if (["with", "a", "window"].includes(key)) end = nextPhrase?.start ?? end;
    }
    end = Math.min(end, openingBounds(a)?.end ?? 9.5);
    return time >= w.start && time < end ? [{ ...w, text: item.text, visualEnd: end, art }] : [];
  });
}
/** Moon takes over exactly when the held opening View leaves the frame. */
export function openingMoonStart(a: Annotation, d: OpeningDirection = openingDefaults) {
  const view = wordTiming(a).intervals.find((w) => {
    const item = a.items.find((i) => i.id === w.id);
    return item?.groupId.endsWith(":section:1") && /^view\W*$/i.test(item.text);
  });
  return view
    ? (openingWords(a, view.start, d).find((w) => w.id === view.id)?.visualEnd ?? view.end)
    : 9.5;
}
export function validateOpening(d: OpeningDirection) {
  if (!d || !d.placements || !d.events) throw Error("Invalid opening controls");
  for (const key of [
    "zoom",
    "zoomStart",
    "zoomEnd",
    "windowOpen",
    "wordHold",
    "wordScale",
    "wordX",
    "wordY",
  ] as const) {
    if (!Number.isFinite(d[key])) throw Error("Invalid opening value");
  }
  if (
    d.zoom < 1 ||
    d.zoom > 8 ||
    d.zoomStart < 0 ||
    d.zoomEnd <= d.zoomStart ||
    d.zoomEnd > 26.32 ||
    d.wordHold < 0 ||
    d.wordHold > 1 ||
    d.wordScale < 0.3 ||
    d.wordScale > 3 ||
    d.wordX < 0 ||
    d.wordX > 100 ||
    d.wordY < 0 ||
    d.wordY > 100 ||
    d.windowOpen < 0 ||
    d.windowOpen > 26.32
  )
    throw Error("Opening control out of range");
  for (const p of Object.values(d.placements)) {
    if (
      !p ||
      !Number.isFinite(p.x) ||
      !Number.isFinite(p.y) ||
      !Number.isFinite(p.scale) ||
      p.x < 0 ||
      p.x > 100 ||
      p.y < 0 ||
      p.y > 100 ||
      p.scale < 0.1 ||
      p.scale > 4
    )
      throw Error("Invalid asset placement");
  }
  for (const w of Object.values(d.words ?? {})) {
    if (
      !Number.isFinite(w.x) ||
      !Number.isFinite(w.y) ||
      !Number.isFinite(w.scale) ||
      !Number.isFinite(w.hold) ||
      w.x < 0 ||
      w.x > 100 ||
      w.y < 0 ||
      w.y > 100 ||
      w.scale < 0.3 ||
      w.scale > 3 ||
      w.hold < 0 ||
      w.hold > 6 ||
      !["grow", "shrink", "stretch", "still", "fonts"].includes(w.motion) ||
      (w.keep !== undefined && !["word", "phrase", "next-phrase"].includes(w.keep))
    )
      throw Error("Invalid word styling");
  }
  for (const [id, t] of Object.entries(d.events)) {
    if (!rhythm.events.some((e) => e.id === id) || !Number.isFinite(t) || t < 9.5 || t >= 26.32)
      throw Error("Invalid rhythm entrance");
  }
}

export function openingCamera(time: number, d: OpeningDirection) {
  const journey = Math.min(1, Math.max(0, time / d.zoomEnd));
  const acceleration = Math.pow(journey, 2 + Math.min(2, d.zoomStart / 3.05));
  return {
    progress: acceleration,
    scale: 0.32 + (d.zoom - 0.32) * acceleration,
    panX: (50 - d.placements.window.x) * (0.68 + 0.32 * acceleration),
    rotation: 2.2 * acceleration,
  };
}

export const wordPlaces: Record<string, [number, number]> = {
  this: [17, 10],
  story: [28, 83],
  starts: [48, 83],
  with: [47, 43],
  a: [54, 43],
  window: [70, 43],
  and: [19, 26],
  fight: [24, 67],
  for: [40, 67],
  the: [56, 78],
  view: [77, 77],
};
export function wordArt(key: string, d: OpeningDirection): WordArt {
  let xy =
    key === "story"
      ? (d.wordX === 24 && d.wordY === 78) || (d.wordX === 28 && d.wordY === 67)
        ? [28, 83]
        : [d.wordX, d.wordY]
      : (wordPlaces[key] ?? [46, 78]);
  // “This story” names the physical book as one readable pair. Its existing
  // manual story placement remains authoritative; only an unedited This adapts.
  if (key === "this" && !d.words?.this) {
    const story = wordArt("story", d);
    xy = [Math.max(8, story.x - 15.6), story.x >= 23.6 ? story.y : Math.max(10, story.y - 10)];
  }
  return (
    d.words?.[key] ?? {
      x: xy[0],
      y: xy[1],
      scale: d.wordScale,
      hold: key === "view" ? 3.6 : d.wordHold,
      keep:
        key === "window"
          ? "next-phrase"
          : ["with", "a", "and", "the"].includes(key)
            ? "word"
            : "phrase",
      motion: key === "view" ? "fonts" : key === "starts" ? "stretch" : "grow",
    }
  );
}
