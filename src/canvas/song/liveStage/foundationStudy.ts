import previous from "./aiOwnershipStudy";
import schedule from "./scored-editorial-sequence-v11.json";
import { validateScene, type SceneObject, type Setting } from "./scene.mjs";
import { imagePose } from "./views.mjs";

// A full editorial assembly made from retained material. These shots do not
// claim that every planned action has been staged. The missing action is kept
// in each shot description so a timing score cannot hide incomplete blocking.
const p = structuredClone(previous);
p.documentId = "full-song-foundation-v11";
p.revision = 1;
p.origin =
  "Foundation assembly from v9 and scored-editorial-sequence-v11; original audio and words unchanged. Detail gate locked; story/blocking unverified.";
delete p.opening;
delete p.browserHistory;
const originalScenes = structuredClone(p.scenes);
const sourceScene = (frame: number) =>
  originalScenes.find((s) => frame >= s.start && frame < s.end)!;
// Large, subject-driven changes of framing, not repeated tiny zoom presets.
// Coordinates refer to the existing registered 1280x720 compositions.
const framing: Record<string, [number, number, number][]> = {
  invitation: [
    [1, 0.5, 0.5],
    [1.15, 0.48, 0.47],
    [2.25, 0.73, 0.28],
    [2.1, 0.73, 0.28],
    [1, 0.5, 0.5],
    [1.8, 0.47, 0.46],
    [1.35, 0.61, 0.48],
    [2, 0.55, 0.48],
  ],
  browser: [
    [1, 0.5, 0.5],
    [1.9, 0.67, 0.42],
    [2.4, 0.62, 0.4],
    [1.4, 0.42, 0.43],
    [2.2, 0.65, 0.42],
    [1, 0.5, 0.5],
    [1.8, 0.27, 0.53],
    [2.2, 0.65, 0.41],
    [2.4, 0.66, 0.4],
    [1.55, 0.58, 0.5],
    [2.5, 0.67, 0.42],
    [2.1, 0.6, 0.49],
    [1, 0.5, 0.5],
    [2.1, 0.67, 0.42],
    [1.3, 0.4, 0.48],
  ],
  feed: [
    [1, 0.5, 0.5],
    [1.55, 0.52, 0.45],
    [2.3, 0.53, 0.35],
    [2.2, 0.54, 0.44],
    [2.5, 0.64, 0.5],
    [1.6, 0.52, 0.54],
    [2.5, 0.55, 0.58],
    [1.65, 0.51, 0.43],
    [2.2, 0.65, 0.53],
    [2.4, 0.53, 0.48],
    [1.6, 0.53, 0.5],
    [1, 0.5, 0.5],
  ],
  harness: [
    [1, 0.5, 0.5],
    [1.7, 0.75, 0.36],
    [1.65, 0.5, 0.34],
    [1.35, 0.5, 0.47],
    [1.65, 0.75, 0.4],
    [1.7, 0.49, 0.42],
    [1.45, 0.5, 0.37],
    [1.8, 0.5, 0.43],
    [1.25, 0.5, 0.46],
    [1.65, 0.43, 0.43],
    [1.4, 0.46, 0.45],
    [1.8, 0.47, 0.44],
    [1, 0.5, 0.5],
    [1.65, 0.63, 0.38],
    [1.2, 0.5, 0.44],
    [1.5, 0.48, 0.48],
    [1.8, 0.49, 0.4],
    [1, 0.5, 0.5],
  ],
  toaster: [
    [1, 0.5, 0.5],
    [2.0, 0.53, 0.34],
    [2.3, 0.52, 0.35],
    [1.65, 0.72, 0.44],
    [2.1, 0.58, 0.55],
    [1.6, 0.72, 0.53],
    [1.3, 0.5, 0.48],
    [1.9, 0.5, 0.4],
  ],
  finale: [
    [1.6, 0.57, 0.47],
    [1.65, 0.52, 0.47],
    [1.55, 0.5, 0.44],
    [2, 0.58, 0.54],
    [1.55, 0.5, 0.43],
    [1, 0.5, 0.5],
    [1.55, 0.44, 0.42],
    [1, 0.5, 0.5],
    [1.2, 0.52, 0.5],
    [1, 0.5, 0.5],
  ],
};
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
p.objects.push(...captions);
function withAsset(scene: Setting, assetId: string) {
  scene.defaultView = "foundation-view";
  scene.views = [{ id: "foundation-view", name: "Retained foundation location", assetId }];
  scene.viewCues = [];
}
// Reuse existing portal/space material at its actual world scale. The upgrade
// action is still the retained rough action, not a newly polished illustration.
const opening = sourceScene(1),
  earth = sourceScene(400);
p.scenes = schedule.shots.map((shot, index) => {
  const [chapter, number] = shot.id.split("-");
  const n = Number(number) - 1;
  const mid = Math.floor((shot.startFrame + shot.endFrame) / 2);
  let old = sourceScene(mid);
  if (chapter === "invitation") old = n >= 4 ? earth : opening;
  if (chapter === "finale") {
    // Recall actual earlier images instead of the old four-column summary board.
    const recalls = [
      sourceScene(1800),
      sourceScene(2500),
      sourceScene(4400),
      sourceScene(5200),
      sourceScene(4680),
      sourceScene(4870),
      sourceScene(4400),
      opening,
      opening,
      earth,
    ];
    old = recalls[n];
  }
  const scene: Setting = {
    ...structuredClone(old),
    id: `foundation-${shot.id}`,
    start: shot.startFrame,
    end: shot.endFrame,
    title: shot.setup,
    description: `${shot.action} | Editorial intent; existing-source blocking assembly, action fulfillment unverified. Tempo ${shot.cutEvidence?.score ?? "opening"}; lyric meaning unscored.`,
    boundaryTransitionFrames: 0,
    approachCamera: true,
    objectIds: old.objectIds.filter((id) => retained.has(id)),
    camera: [
      {
        frame: shot.startFrame,
        zoom: framing[chapter][n][0],
        x: framing[chapter][n][1],
        y: framing[chapter][n][2],
      },
    ],
  };
  if (chapter === "invitation" && n === 0) {
    withAsset(scene, "town-workshop-approach-v1");
    scene.objectIds = [];
  }
  if (chapter === "invitation" && n === 1) {
    withAsset(scene, "inside-workshop-window-v2");
  }
  if (chapter === "invitation" && n === 3) {
    withAsset(scene, "workshop-window-exterior-v1");
    scene.objectIds = [];
  }
  if (chapter === "finale" && n === 8) {
    withAsset(scene, "workshop-window-exterior-v1");
    scene.objectIds = [];
  }
  // Preserve visible retained action for closing recalls by cloning its current
  // state and shifting all its absolute timing fields by the same offset.
  if (chapter === "finale") {
    const donorFrame = [1810, 2510, 4400, 5200, 4685, 4880, 4400, 200, 200, 600][n];
    const delta = shot.startFrame - donorFrame;
    const ids = new Map(scene.objectIds.map((id) => [id, `recall-${index}-${id}`]));
    const clones = scene.objectIds.map((id) => {
      const o = structuredClone(p.objects.find((o) => o.id === id)!);
      o.id = ids.get(id)!;
      o.parentId = o.parentId ? ids.get(o.parentId) || null : null;
      o.enterFrame += delta;
      o.exitFrame += delta;
      o.cue = null;
      // Existing procedural props use absolute song time; these recalls only
      // freeze image/registered object evidence, not a claim of new action.
      if (o.motion)
        o.motion = o.motion
          .map((k) => ({ ...k, frame: k.frame + delta }))
          .filter((k) => k.frame >= 0 && k.frame < 6804);
      if (o.viewCues) o.viewCues = [];
      if (o.animation) {
        const startFrame = Math.max(0, Math.min(6802, o.animation.startFrame + delta));
        o.animation = {
          startFrame,
          endFrame: Math.max(startFrame + 1, Math.min(6803, o.animation.endFrame + delta)),
        };
      }
      delete o.fade;
      delete o.rhythm;
      delete o.textAnchor;
      delete o.attachment;
      o.enterFrame = Math.max(0, Math.min(shot.startFrame, o.enterFrame));
      o.exitFrame = Math.min(6804, Math.max(shot.endFrame, o.exitFrame));
      return o;
    });
    p.objects.push(...clones);
    scene.objectIds = clones.map((o) => o.id);
  }
  scene.objectIds.push(
    ...captions
      .filter((o) => o.enterFrame < shot.endFrame && o.exitFrame > shot.startFrame)
      .map((o) => o.id),
  );
  if (shot.cutEvidence)
    scene.cutEvidence = {
      status: "estimated",
      sourceSha256: p.source.sha256,
      measuredFrame: shot.startFrame,
      sourceMapping: JSON.stringify([p.source.inMs, p.source.outMs, p.arrangement]),
      score: shot.cutEvidence.score,
      beatSeconds: shot.cutEvidence.observedBeat.seconds,
      beatDistanceMs: shot.cutEvidence.beatDistanceMs,
      frequencyBands: {
        low: shot.cutEvidence.frequencyBands.low.spectralFlux,
        mid: shot.cutEvidence.frequencyBands.mid.spectralFlux,
        high: shot.cutEvidence.frequencyBands.high.spectralFlux,
      },
      lyricPhraseIds: shot.sourcePhraseIds,
    };
  return scene;
});
export default validateScene(p);
