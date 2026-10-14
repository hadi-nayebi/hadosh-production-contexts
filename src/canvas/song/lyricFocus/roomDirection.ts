import type { Annotation } from "./audioAnnotation";
import { wordTiming } from "./wordTiming";
import { openingBounds, type Placement } from "./openingDirection";
import rhythm from "./roomRhythm.json";
import { percussionPulses, snapToStem } from "./stemAnalysis";
export type RoomDirection = {
  placements: Record<string, Placement>;
  zoom: number;
  pan: number;
  turnStart: number;
  turnEnd: number;
  fade: number;
  bounce: number;
  wordScale: number;
  events: Record<string, number>;
};
export const roomDefaults: RoomDirection = {
  placements: {
    head: { x: 32.5, y: 21, scale: 1 },
    body: { x: 34, y: 73, scale: 1 },
    chair: { x: 29, y: 82, scale: 1 },
    device: { x: 66, y: 57, scale: 1 },
    calendar: { x: 80, y: 15, scale: 1 },
  },
  zoom: 1.04,
  pan: 4,
  turnStart: 60,
  turnEnd: 63.6,
  fade: 0.65,
  bounce: 1,
  wordScale: 1,
  events: {},
};
export const roomAssets = [
  { id: "head", label: "Rear head", src: "/scene-assets/web-room/rear-head-v1.png" },
  { id: "body", label: "Seated body", src: "/scene-assets/web-room/seated-body-v1.png" },
  { id: "chair", label: "Chair", src: "/scene-assets/web-room/chair-v1.png" },
  {
    id: "device",
    label: "Device · nine stages",
    src: "/scene-assets/web-room/device-evolution-3x3-v2.png",
  },
  { id: "eras", label: "Room · four eras", src: "/scene-assets/web-room/room-eras-2x2-v2.png" },
  {
    id: "door",
    label: "Door camera · four angles",
    src: "/scene-assets/web-room/door-camera-2x2-v1.png",
  },
];
export function roomBounds(a: Annotation) {
  const opening = openingBounds(a);
  if (!opening) return null;
  const next = wordTiming(a).intervals.find((w) =>
    a.items.find((i) => i.id === w.id)?.groupId.endsWith(":section:4"),
  );
  return { start: opening.end, end: next?.start ?? 63.9 };
}
/** Shared visual ownership boundary, derived without rewriting a vocal anchor. */
export function roomArrival(a: Annotation) {
  const room = roomBounds(a);
  if (!room) return null;
  const beat = snapToStem(room.start - 1, a.audioHash);
  return { beat, start: beat - 0.17, end: beat + 0.17 };
}
export function roomWordCues(a: Annotation) {
  return wordTiming(a)
    .intervals.filter((w) => a.items.find((i) => i.id === w.id)?.groupId.endsWith(":section:3"))
    .map((w) => ({
      ...w,
      text: a.items.find((i) => i.id === w.id)!.text,
      phraseId: a.items.find((i) => i.id === w.id)!.phraseId!,
    }));
}
export function cueTime(a: Annotation, text: string, fallback: number) {
  return (
    roomWordCues(a).find((w) => w.text.toLowerCase().replace(/[^a-z]/g, "") === text)?.start ??
    fallback
  );
}
export function pulseAt(time: number) {
  return (
    percussionPulses(rhythm.audioHash).length ? percussionPulses(rhythm.audioHash) : rhythm.pulses
  )
    .filter((p) => time >= p.time && time - p.time < 0.28)
    .reduce(
      (sum, p) =>
        sum +
        Math.exp(-(time - p.time) * 13) * Math.min(1, p.strength) * Math.sin((time - p.time) * 16),
      0,
    );
}
export function snap(t: number) {
  if (percussionPulses(rhythm.audioHash).length) return snapToStem(t, rhythm.audioHash);
  return rhythm.pulses.reduce((p, c) => (Math.abs(c.time - t) < Math.abs(p.time - t) ? c : p)).time;
}
export type RoomEvent = {
  id: string;
  kind: "era" | "device" | "logo" | "upgrade";
  time: number;
  index?: number;
  label?: string;
};
export function roomEvents(a: Annotation, d: RoomDirection): RoomEvent[] {
  const events: RoomEvent[] = [];
  ["back", "netscape", "code", "firefox"].forEach((word, i) =>
    events.push({
      id: "era-" + i,
      kind: "era",
      time: snap(cueTime(a, word, [27.69, 33.286, 38.904, 47.06][i])),
      index: i,
    }),
  );
  [
    "back",
    "giants",
    "netscape",
    "explorer",
    "code",
    "mozilla",
    "firefox",
    "button",
    "play",
  ].forEach((word, i) =>
    events.push({
      id: "device-" + i,
      kind: "device",
      time: snap(
        cueTime(a, word, [27.69, 29.96, 33.286, 34, 38.904, 44.857, 47.06, 51.4, 55.34][i]),
      ),
      index: i,
    }),
  );
  ["netscape", "explorer", "mozilla", "firefox"].forEach((word, i) =>
    events.push({
      id: "logo-" + word,
      kind: "logo",
      label: ["Netscape", "Explorer", "Mozilla", "Firefox"][i],
      time: snap(cueTime(a, word, [33.286, 34, 44.857, 47.06][i])),
    }),
  );
  const queue = rhythm.pulses.filter(
    (p) => p.time >= cueTime(a, "add", 51) && p.time < cueTime(a, "eyes", 57.16),
  );
  queue
    .filter((_, i) => i % 2 === 0)
    .slice(0, 9)
    .forEach((p, i) =>
      events.push({
        id: "upgrade-" + i,
        kind: "upgrade",
        time: p.time,
        label: ["＋", "✓", "≡", "★", "←", "⌂", "⊞", "☷", "→"][i],
      }),
    );
  return events
    .map((e) => ({ ...e, time: d.events[e.id] ?? e.time }))
    .sort((a, b) => a.time - b.time);
}
export function validateRoom(d: RoomDirection) {
  if (!d || !d.placements || !d.events) throw Error("Invalid room controls");
  for (const k of ["zoom", "pan", "turnStart", "turnEnd", "fade", "bounce", "wordScale"] as const)
    if (!Number.isFinite(d[k])) throw Error("Invalid room value");
  if (
    d.zoom < 1 ||
    d.zoom > 1.5 ||
    Math.abs(d.pan) > 8 ||
    d.turnEnd <= d.turnStart ||
    d.turnStart < 27 ||
    d.turnEnd > 70 ||
    d.fade < 0.1 ||
    d.fade > 2 ||
    d.bounce < 0 ||
    d.bounce > 3 ||
    d.wordScale < 0.4 ||
    d.wordScale > 2
  )
    throw Error("Room control out of range");
  for (const p of Object.values(d.placements))
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
      p.scale > 3
    )
      throw Error("Invalid room placement");
  for (const [id, t] of Object.entries(d.events))
    if (!/^(era|device|logo|upgrade)-/.test(id) || !Number.isFinite(t) || t < 27 || t > 64)
      throw Error("Invalid room entrance");
}
