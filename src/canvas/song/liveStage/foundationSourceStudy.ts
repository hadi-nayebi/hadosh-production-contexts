import previous from "./aiOwnershipStudy";
import schedule from "./scored-editorial-sequence-v12.json";
import { validateScene, type SceneObject, type Setting } from "./scene.mjs";
import { imagePose } from "./views.mjs";

// A full editorial assembly made from retained material. These shots do not
// claim that every planned action has been staged. The missing action is kept
// in each shot description so a timing score cannot hide incomplete blocking.
const p = structuredClone(previous);
p.documentId = "full-song-foundation-v12";
p.revision = 1;
p.origin =
  "Foundation assembly from v9 and scored-editorial-sequence-v12; original audio and words unchanged. Detail gate locked; story/blocking unverified.";
delete p.opening;
delete p.browserHistory;
const originalScenes = structuredClone(p.scenes);
const sourceScene = (frame: number) =>
  originalScenes.find((s) => frame >= s.start && frame < s.end)!;
// Remove inherited floating explanatory overlays; retain the actual props and
// source-on-screen text. Full source phrases become simple, screen-fixed holds.
p.objects = p.objects.filter(
  (o) =>
    o.kind !== "word" &&
    o.kind !== "lyric-block" &&
    !["caption", "history-overlay-year", "history-calendar", "history-badge"].some((k) =>
      o.kind.startsWith(k),
    ) &&
    !o.id.startsWith("label-") &&
    !o.id.includes("newspaper"),
);
const retained = new Set(p.objects.map((o) => o.id));
for (const o of p.objects)
  if (o.attachment) {
    const pose = imagePose(previous, o.id, o.enterFrame);
    o.x = pose.x;
    o.y = pose.y;
    delete o.attachment;
  }
const captions: SceneObject[] = [];
for (const phraseId of new Set(p.words.map((w) => w.phraseId))) {
  const words = p.words.filter((w) => w.phraseId === phraseId);
  const strings = words.map((w) => w.text);
  const split = strings.length > 9 ? Math.ceil(strings.length / 2) : strings.length;
  const text =
    strings.slice(0, split).join(" ") +
    (split < strings.length ? "\n" + strings.slice(split).join(" ") : "");
  captions.push({
    id: `foundation-${phraseId}`,
    kind: "lyric-block",
    parentId: null,
    x: 55,
    y: 589,
    width: 1170,
    height: 117,
    enterFrame: Math.min(...words.map((w) => w.enterFrame)),
    exitFrame: Math.max(...words.map((w) => w.exitFrame)),
    timeOffset: 0,
    cue: null,
    note: `Original ${phraseId}; source wording retained. Plain reading hold across cuts; stress timing unverified.`,
    suggestion: "foundation reading hold",
    text,
  });
}
const donorObjects = p.objects;
p.objects = [...captions];

// Explicit source-performance ranges, authored against each lyric clause.
// This is retained-action assembly, not evidence that the new intended action exists.
// A range can span adjacent source shots; each source component remains editable.
type Donor = [number, number, number, number, number];
const donors: Record<string, Donor[]> = {
  invitation: [
    [0, 119, 1, 0.5, 0.5],
    [60, 180, 1, 0.5, 0.5],
    [180, 298, 2, 0.73, 0.28],
    [298, 360, 1.3, 0.65, 0.4],
    [360, 420, 1, 0.5, 0.5],
    [420, 510, 1.7, 0.5, 0.46],
    [510, 600, 1.2, 0.5, 0.5],
    [600, 660, 1.7, 0.55, 0.48],
  ],
  browser: [
    [720, 815, 1, 0.5, 0.5],
    [815, 910, 1.8, 0.65, 0.42],
    [910, 1000, 2, 0.62, 0.4],
    [1000, 1089, 1.3, 0.42, 0.43],
    [1089, 1169, 2, 0.65, 0.42],
    [1169, 1274, 1, 0.5, 0.5],
    [1274, 1375, 1.6, 0.27, 0.53],
    [1375, 1443, 2, 0.65, 0.41],
    [1443, 1521, 2, 0.66, 0.4],
    [1521, 1610, 1.3, 0.58, 0.5],
    [1610, 1729, 2.2, 0.67, 0.42],
    [1729, 1834, 2, 0.6, 0.49],
    [1834, 1902, 1, 0.5, 0.5],
    [1902, 1981, 1.9, 0.67, 0.42],
    [1981, 2081, 1.3, 0.4, 0.48],
    [2081, 2163, 1, 0.5, 0.5],
  ],
  feed: [
    [2163, 2237, 1, 0.5, 0.5],
    [2237, 2305, 1.5, 0.52, 0.45],
    [2305, 2393, 2, 0.53, 0.35],
    [2393, 2494, 2, 0.54, 0.44],
    [2494, 2605, 2.1, 0.64, 0.5],
    [2605, 2716, 1.5, 0.52, 0.54],
    [2716, 2806, 2.1, 0.55, 0.58],
    [2806, 2884, 1.5, 0.51, 0.43],
    [2884, 2974, 2, 0.65, 0.53],
    [2974, 3039, 2.1, 0.53, 0.48],
    [3039, 3128, 1.4, 0.53, 0.5],
    [3128, 3240, 1, 0.5, 0.5],
  ],
  harness: [
    [3240, 3307, 1, 0.5, 0.5],
    [3307, 3413, 1.35, 0.65, 0.36],
    [3413, 3497, 1.3, 0.5, 0.34],
    [3497, 3592, 1.1, 0.5, 0.45],
    [3592, 3679, 1.15, 0.5, 0.44],
    [3679, 3763, 1, 0.5, 0.47],
    [3763, 3881, 1, 0.5, 0.47],
    [3881, 3950, 1.3, 0.5, 0.4],
    [3950, 4036, 1, 0.5, 0.5],
    [4036, 4126, 1, 0.5, 0.5],
    [4126, 4203, 1, 0.5, 0.5],
    [4203, 4303, 1.25, 0.65, 0.45],
    [4303, 4370, 1, 0.5, 0.5],
    [4370, 4420, 1.3, 0.45, 0.37],
    [4478, 4535, 1, 0.5, 0.5],
    [4535, 4621, 1.15, 0.5, 0.45],
    [4621, 4700, 1, 0.5, 0.5],
    [4700, 4764, 1.2, 0.5, 0.43],
    [4806, 4890, 1, 0.5, 0.5],
    [4890, 4980, 1.3, 0.5, 0.48],
  ],
  toaster: [
    [4980, 5066, 1, 0.5, 0.5],
    [5066, 5170, 1.7, 0.53, 0.34],
    [5170, 5190, 1.4, 0.72, 0.44],
    [5170, 5230, 1.8, 0.58, 0.55],
    [5358, 5441, 1, 0.5, 0.5],
    [5441, 5515, 1.6, 0.72, 0.53],
    [5515, 5644, 1.3, 0.5, 0.48],
    [5480, 5525, 1.8, 0.52, 0.35],
  ],
  finale: [
    [1729, 1834, 1.7, 0.6, 0.49],
    [2605, 2716, 1.5, 0.52, 0.5],
    [4535, 4621, 1, 0.5, 0.5],
    [5170, 5230, 1.8, 0.58, 0.55],
    [4621, 4700, 1, 0.5, 0.5],
    [4806, 4890, 1, 0.5, 0.5],
    [4370, 4420, 1.2, 0.5, 0.4],
    [120, 240, 1, 0.5, 0.5],
    [240, 359, 1.7, 0.73, 0.28],
    [0, 119, 1, 0.5, 0.5],
    [510, 600, 1.2, 0.5, 0.5],
    [600, 659, 1, 0.5, 0.5],
  ],
};
export const sourceBindings: {
  shotId: string;
  sourceStart: number;
  sourceEnd: number;
  sourceSceneIds: string[];
  expectedPhraseIds: string[];
  plannedAction: string;
  actionFulfillment: "unverified";
}[] = [];
p.scenes = schedule.shots.map((shot) => {
  const [chapter, number] = shot.id.split("-");
  const [a, b, zoom, x, y] = donors[chapter][Number(number) - 1];
  const old = sourceScene(Math.floor((a + b) / 2));
  const from = shot.startFrame,
    to = shot.endFrame;
  const map = (f: number) => Math.round(from + ((f - a) * (to - from)) / (b - a));
  const clamp = (f: number) => Math.max(0, Math.min(6803, f));
  const sourceScenes = originalScenes.filter((s) => s.start < b && s.end > a);
  const candidates = new Set(sourceScenes.flatMap((s) => s.objectIds));
  // Keep only relevant components; bring required ancestors/references with them.
  let selected = donorObjects.filter(
    (o) => candidates.has(o.id) && o.enterFrame < b && o.exitFrame > a,
  );
  const ids = new Set(selected.map((o) => o.id));
  for (let changed = true; changed;) {
    changed = false;
    for (const o of selected)
      for (const ref of [o.parentId, o.screenFor, o.textAnchor?.objectId])
        if (ref && !ids.has(ref)) {
          const target = donorObjects.find((n) => n.id === ref);
          if (target) {
            selected.push(target);
            ids.add(ref);
            changed = true;
          }
        }
  }
  const idMap = new Map(selected.map((o) => [o.id, `${shot.id}:${o.id}`]));
  const objects = selected.map((source) => {
    const o = structuredClone(source);
    o.id = idMap.get(source.id)!;
    o.parentId = source.parentId ? idMap.get(source.parentId) || null : null;
    o.cue = null;
    o.timeOffset = 0;
    o.enterFrame = Math.max(from, map(source.enterFrame));
    o.exitFrame = Math.min(to, map(source.exitFrame));
    if (o.kind === "group") {
      o.enterFrame = from;
      o.exitFrame = to;
    }
    if (o.screenFor) o.screenFor = idMap.get(o.screenFor);
    if (o.textAnchor)
      o.textAnchor = { ...o.textAnchor, objectId: idMap.get(o.textAnchor.objectId)! };
    if (o.motion)
      o.motion = Array.from(
        new Map(
          o.motion.map((k) => {
            const frame = clamp(map(k.frame));
            return [frame, { ...k, frame }];
          }),
        ).values(),
      );
    if (o.animation) {
      const startFrame = Math.min(6802, clamp(map(o.animation.startFrame)));
      o.animation = {
        startFrame,
        endFrame: Math.max(startFrame + 1, clamp(map(o.animation.endFrame))),
      };
    }
    if (o.viewCues)
      o.viewCues = Array.from(
        new Map(
          o.viewCues.map((k) => {
            const frame = clamp(map(k.frame));
            return [frame, { ...k, frame }];
          }),
        ).values(),
      );
    if (o.actionCues)
      o.actionCues = Object.fromEntries(
        Object.entries(o.actionCues).map(([k, f]) => [k, clamp(map(f))]),
      ) as typeof o.actionCues;
    delete o.rhythm;
    delete o.fade;
    delete o.textFlow;
    if (o.kind.startsWith("story-"))
      o.performanceClock = { timelineStart: from, timelineEnd: to, sourceStart: a, sourceEnd: b };
    o.note = `Source v9 component ${source.id}; source frames ${a}–${b} mapped to ${from}–${to}. Planned action: ${shot.action} Fulfillment unverified. ${o.note}`;
    return o;
  });
  p.objects.push(...objects);
  const scene: Setting = {
    ...structuredClone(old),
    id: `foundation-v12-${shot.id}`,
    start: from,
    end: to,
    title: shot.setup,
    description: `${shot.action} | Retained source-action assembly; planned action fulfillment unverified. Expected source phrases: ${shot.expectedPhraseIds.join(", ") || "instrumental"}. Detail work locked.`,
    boundaryTransitionFrames: 0,
    approachCamera: true,
    camera: [{ frame: from, zoom, x, y }],
    viewCues: [],
    objectIds: [
      ...objects.map((o) => o.id),
      ...captions.filter((o) => o.enterFrame < to && o.exitFrame > from).map((o) => o.id),
    ],
  };
  if (shot.id === "invitation-01" || shot.id === "finale-10") {
    scene.views = [
      { id: "exterior", name: "Retained workshop exterior", assetId: "town-workshop-approach-v1" },
    ];
    scene.defaultView = "exterior";
    scene.objectIds = scene.objectIds.filter((id) => captions.some((o) => o.id === id));
  }
  if (shot.cutEvidence)
    scene.cutEvidence = {
      status: "estimated",
      sourceSha256: p.source.sha256,
      sourceMapping: JSON.stringify([p.source.inMs, p.source.outMs, p.arrangement]),
      measuredFrame: from,
      score: shot.cutEvidence.score,
      beatSeconds: shot.cutEvidence.observedBeat.seconds,
      beatDistanceMs: shot.cutEvidence.beatDistanceMs,
      frequencyBands: {
        low: shot.cutEvidence.frequencyBands.low.spectralFlux,
        mid: shot.cutEvidence.frequencyBands.mid.spectralFlux,
        high: shot.cutEvidence.frequencyBands.high.spectralFlux,
      },
      lyricPhraseIds: shot.expectedPhraseIds,
    };
  sourceBindings.push({
    shotId: shot.id,
    sourceStart: a,
    sourceEnd: b,
    sourceSceneIds: sourceScenes.map((s) => s.id),
    expectedPhraseIds: shot.expectedPhraseIds,
    plannedAction: shot.action,
    actionFulfillment: "unverified",
  });
  return scene;
});
// Only live scene references belong in this version. Retained originals stay in v9/v11.
const used = new Set(p.scenes.flatMap((s) => s.objectIds));
p.objects = p.objects.filter((o) => used.has(o.id));
// Reading holds must composite after retained foreground people/props.
p.objects = [
  ...p.objects.filter((o) => o.kind !== "lyric-block"),
  ...p.objects.filter((o) => o.kind === "lyric-block"),
];
export default validateScene(p);
