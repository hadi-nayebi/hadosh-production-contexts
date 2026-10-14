import { validateTextPlane } from "./textPlane.mjs";
import { validateRhythm } from "./rhythm.mjs";
import { validateAssets, validateViews } from "./views.mjs";
import { validateProject } from "../wordMotion/project.mjs";
export const SCENE_KEY = "canvas-live-scene-document-v1";
const prop = (id, kind, parentId, x, y, width, height, start = 0, end = 720, cue = null) => ({
  id,
  kind,
  parentId,
  x,
  y,
  width,
  height,
  enterFrame: start,
  exitFrame: end,
  cue,
  note: "",
  suggestion: "",
});
export function createScene(wordProject) {
  const p = structuredClone(validateProject(wordProject));
  const scene = {
    ...p,
    schema: "canvas-live-scene-v1",
    revision: 1,
    documentId: "l1-live-browser-study",
    scenes: [
      {
        id: "browser-setting",
        start: 0,
        end: 720,
        title: "Inside the browser",
        description: "A browser workshop. Controls and words accumulate in one held setting.",
        assetStatus: "vector study",
        objectIds: [],
      },
    ],
    origin:
      "Separate object scene derived from clean word baseline. Prior word-editor saves are untouched.",
    objects: [
      {
        id: "browser",
        kind: "group",
        parentId: null,
        x: 215,
        y: 307,
        timeOffset: 0,
        label: "Browser assembly",
        note: "",
        suggestion: "",
      },
      prop("window", "window", "browser", 0, 0, 850, 300),
      prop("page", "page", "browser", 30, 80, 760, 160),
      {
        id: "controls",
        kind: "group",
        parentId: "browser",
        x: 0,
        y: 0,
        timeOffset: 0,
        label: "Browser controls",
        note: "",
        suggestion: "",
      },
      prop("extension", "extension", "controls", 790, 10, 28, 28, 0, 290, {
        wordId: "w003",
        edge: "enter",
        offset: 0,
      }),
      prop("tracking", "tracking", "controls", 865, 80, 100, 160, 0, 290, {
        wordId: "w004",
        edge: "enter",
        offset: 0,
      }),
      prop("inspection", "inspection", "browser", 30, 73, 710, 180, 0, 720, {
        wordId: "w014",
        edge: "enter",
        offset: 0,
      }),
      prop("eyes", "eyes", "browser", 550, 200, 170, 30, 0, 720, {
        wordId: "w026",
        edge: "enter",
        offset: 0,
      }),
      prop("handle", "handle", "browser", -100, 106, 104, 96, 0, 720, {
        wordId: "w041",
        edge: "enter",
        offset: 0,
      }),
      ...p.words.map((w) => ({
        ...prop(
          w.id,
          "word",
          null,
          w.x,
          w.y - w.fontSize,
          w.width,
          w.fontSize + 12,
          w.enterFrame,
          w.exitFrame,
        ),
        wordId: w.id,
      })),
    ],
  };
  scene.scenes[0].objectIds = scene.objects.map((o) => o.id);
  return scene;
}
export function ancestors(p, id) {
  const out = [];
  let node = p.objects.find((o) => o.id === id);
  const seen = new Set();
  while (node?.parentId) {
    if (seen.has(node.parentId)) throw Error("Parent cycle");
    seen.add(node.parentId);
    node = p.objects.find((o) => o.id === node.parentId);
    if (!node) throw Error("Missing parent");
    out.push(node);
  }
  return out;
}
export function evaluateObject(p, id, seen = new Set()) {
  if (seen.has(id)) throw Error("Cue cycle");
  seen = new Set([...seen, id]);
  const o = p.objects.find((n) => n.id === id);
  if (!o) throw Error("Missing object");
  const parents = ancestors(p, id);
  let worldX = o.x,
    worldY = o.y,
    worldScale = o.scale ?? 1;
  for (const parent of parents) {
    const scale = parent.scale ?? 1;
    worldX = parent.x + worldX * scale;
    worldY = parent.y + worldY * scale;
    worldScale *= scale;
  }
  const dx = worldX - o.x,
    dy = worldY - o.y,
    dt = parents.reduce((sum, n) => sum + n.timeOffset, 0);
  if (o.kind === "group") {
    const children = p.objects
      .filter((n) => n.parentId === id)
      .map((n) => evaluateObject(p, n.id, seen));
    if (!children.length)
      return { ...o, x: o.x + dx, y: o.y + dy, width: 0, height: 0, enter: 0, exit: 1 };
    const x = Math.min(...children.map((n) => n.x)),
      y = Math.min(...children.map((n) => n.y));
    return {
      ...o,
      x,
      y,
      width: Math.max(...children.map((n) => n.x + n.width)) - x,
      height: Math.max(...children.map((n) => n.y + n.height)) - y,
      enter: Math.min(...children.map((n) => n.enter)),
      exit: Math.max(...children.map((n) => n.exit)),
    };
  }
  let start = o.enterFrame;
  if (o.cue) {
    const anchor = p.objects.find((n) => n.kind === "word" && n.wordId === o.cue.wordId);
    if (!anchor) throw Error("Missing word cue");
    const w = evaluateObject(p, anchor.id, seen);
    const shared = ancestors(p, anchor.id)
      .filter((a) => parents.some((b) => a.id === b.id))
      .reduce((sum, a) => sum + a.timeOffset, 0);
    start = (o.cue.edge === "enter" ? w.enter : w.exit) + o.cue.offset - shared;
  }
  return {
    ...o,
    x: o.x + dx,
    y: o.y + dy,
    width: o.width * worldScale,
    height: o.height * worldScale,
    scale: worldScale,
    enter: start + dt,
    exit: o.exitFrame + dt,
  };
}
export function validateScene(p) {
  if(p?.lyricBoundaryPolicy!==undefined && p.lyricBoundaryPolicy!=="word-start-scene") throw Error("Invalid lyric boundary policy");
  if (!p || p.schema !== "canvas-live-scene-v1") throw Error("Expected live-scene document");
  validateProject({ ...p, schema: "canvas-word-motion-v1" });
  if (
    typeof p.documentId !== "string" ||
    !Array.isArray(p.objects) ||
    p.objects.length > (p.documentId?.startsWith("full-song-") ? 1200 : 240)
  )
    throw Error("Invalid scene document");
  const sceneLimit = p.documentId?.startsWith("full-song-") ? 96 : 64;
  if (!Array.isArray(p.scenes) || p.scenes.length > sceneLimit) throw Error("Invalid settings");
  if (p.production) {
    if (
      !Number.isInteger(p.production.durationMs) ||
      p.production.durationMs < p.source.outMs ||
      !Array.isArray(p.production.islands) ||
      p.production.islands.length > 100
    )
      throw Error("Invalid whole-song intervals");
    let end = 0;
    const ids = new Set();
    for (const i of p.production.islands) {
      if (
        !i.id ||
        ids.has(i.id) ||
        !Number.isInteger(i.startMs) ||
        !Number.isInteger(i.endMs) ||
        i.startMs < end ||
        i.endMs <= i.startMs ||
        i.endMs > p.production.durationMs ||
        !["authored", "brief"].includes(i.status) ||
        typeof i.description !== "string" ||
        !i.description.trim() ||
        i.description.length > 2000
      )
        throw Error("Choose a whole-song interval inside an unfinished gap");
      ids.add(i.id);
      end = i.endMs;
    }
  }
  if (p.browserHistory) {
    if (
      !Array.isArray(p.browserHistory) ||
      p.browserHistory.length < 1 ||
      p.browserHistory.length > 12
    )
      throw Error("Invalid browser milestones");
    let last = -1;
    for (const m of p.browserHistory) {
      if (
        !Number.isInteger(m.frame) ||
        m.frame <= last ||
        m.frame >= p.composition.durationInFrames ||
        !Number.isInteger(m.year) ||
        ![m.title, m.label, m.note, m.symbol].every(
          (v) => typeof v === "string" && v.length <= 2000,
        ) ||
        !Array.isArray(m.sources) ||
        m.sources.length > 8 ||
        m.sources.some((v) => typeof v !== "string" || !v.startsWith("https://"))
      )
        throw Error("Invalid browser milestone source");
      last = m.frame;
    }
  }
  if (p.opening) {
    const { passStart, passCut, passEnd } = p.opening;
    if (
      ![passStart, passCut, passEnd].every(Number.isInteger) ||
      passStart < 0 ||
      passCut <= passStart ||
      passEnd <= passCut ||
      passEnd >= p.composition.durationInFrames
    )
      throw Error("Invalid window passage timing");
  }
  validateRhythm(p);
  const assets = validateAssets(p.assets);
  let boundary = 0;
  const sceneIds = new Set();
  for (const s of p.scenes) {
    if (
      !s.id ||
      sceneIds.has(s.id) ||
      !Number.isInteger(s.start) ||
      s.start < boundary ||
      !Number.isInteger(s.end) ||
      s.end <= s.start ||
      s.end > p.composition.durationInFrames ||
      typeof s.description !== "string" ||
      s.description.length > 2000 ||
      typeof s.title !== "string" ||
      !["vector study", "awaiting asset", "illustrated"].includes(s.assetStatus) ||
      !Array.isArray(s.objectIds) ||
      s.objectIds.some((id) => !p.objects.some((o) => o.id === id)) ||
      new Set(s.objectIds).size !== s.objectIds.length
    )
      throw Error("Invalid setting interval or members");
    if (s.spatialCamera) {
      const c = s.spatialCamera;
      const vector = (v) =>
        Array.isArray(v) &&
        v.length === 3 &&
        v.every((n) => Number.isFinite(n) && Math.abs(n) <= 50);
      if (
        !vector(c.position) ||
        !vector(c.target) ||
        !Number.isFinite(c.fov) ||
        c.fov < 15 ||
        c.fov > 90 ||
        c.position.every((n, i) => n === c.target[i])
      )
        throw Error("Invalid spatial camera");
    }
    if (s.approachCamera !== undefined && typeof s.approachCamera !== "boolean")
      throw Error("Invalid approach camera mode");
    if(s.boundaryIntent && (s.boundaryIntent.kind!=="hold" || typeof s.boundaryIntent.reason!=="string" || !s.boundaryIntent.reason.trim() || typeof s.boundaryIntent.source!=="string" || !s.boundaryIntent.source.trim())) throw Error("Camera hold requires intent and source");
    if (s.cutEvidence) {
      const e = s.cutEvidence;
      if (
        e.status !== "estimated" ||
        e.sourceSha256 !== p.source.sha256 ||
        e.measuredFrame !== s.start ||
        e.sourceMapping !== JSON.stringify([p.source.inMs, p.source.outMs, p.arrangement]) ||
        Math.abs(e.beatDistanceMs - Math.abs(s.start / 30 - e.beatSeconds) * 1000) > 0.02 ||
        !Number.isFinite(e.score) ||
        e.score < 0 ||
        e.score > 100 ||
        !Number.isFinite(e.beatSeconds) ||
        e.beatSeconds < 0 ||
        e.beatSeconds > p.composition.durationInFrames / 30 ||
        !Number.isFinite(e.beatDistanceMs) ||
        e.beatDistanceMs < 0 ||
        ![e.frequencyBands?.low, e.frequencyBands?.mid, e.frequencyBands?.high].every(
          (n) => Number.isFinite(n) && n >= 0,
        ) ||
        !Array.isArray(e.lyricPhraseIds) ||
        e.lyricPhraseIds.length > 50 ||
        e.lyricPhraseIds.some((id) => !p.words.some((w) => w.phraseId === id))
      )
        throw Error("Invalid cut timing evidence");
    }
    if (
      s.boundaryTransitionFrames !== undefined &&
      (!Number.isInteger(s.boundaryTransitionFrames) ||
        s.boundaryTransitionFrames < 0 ||
        s.boundaryTransitionFrames > 30)
    )
      throw Error("Invalid scene boundary transition");
    validateViews(s, assets, p.composition.durationInFrames);
    let cameraFrame = -1;
    for (const k of s.camera || []) {
      if (
        !Number.isInteger(k.frame) ||
        k.frame < s.start ||
        k.frame >= s.end ||
        k.frame <= cameraFrame ||
        ![k.zoom, k.x, k.y].every(Number.isFinite) ||
        k.zoom < 1 ||
        k.zoom > (s.approachCamera ? 8 : 1.5) ||
        k.x < (s.approachCamera ? 0 : 0.35) ||
        k.x > (s.approachCamera ? 1 : 0.65) ||
        k.y < (s.approachCamera ? 0 : 0.35) ||
        k.y > (s.approachCamera ? 1 : 0.65)
      )
        throw Error("Camera must be bounded, ordered and inside this scene");
      cameraFrame = k.frame;
    }

    sceneIds.add(s.id);
    boundary = s.end;
  }

  const ids = new Set();
  const kinds = [
    "story-spatial-prop",
    "desk-surface",
    "desk-paper",
    "desk-memory",
    "desk-tablet",
    "desk-ring",
    "desk-pointer",
    "lyric-block",
    "story-appliance-body",
    "story-appliance-bread",
    "story-appliance-dial",
    "story-appliance-outlet",
    "story-appliance-plug",
    "story-appliance-cord",
    "story-task-monitor",
    "story-task-paper",
    "story-task-person",
    "story-task-keyboard",
    "story-feed-phone",
    "story-feed-post",
    "story-feed-bookmark",
    "story-feed-queue",
    "story-feed-cover",
    "story-feed-mute",
    "story-feed-signal",
    "story-browser-readable-shell",
    "story-browser-readable-controls",
    "story-browser-readable-inspection",
    "story-browser-customization-shell",
    "story-browser-customization-controls",
    "story-browser-customization-inspection",
    "story-browser-bench",
    "story-browser-hand",
    "story-browser-chip",
    "story-browser-board",
    "story-browser-cover",
    "story-browser-control",
    "story-browser-frame",
    "story-earth-electricity",
    "story-earth-transistors",
    "story-earth-computers",
    "story-space-field",
    "story-physical-capsule",
    "story-window-passage",
    "story-window-grip",
    "story-phone",
    "story-workshop-embodied",
    "story-cortex",
    "story-headset",
    "story-file",
    "story-node",
    "story-edge",
    "story-arc",
    "story-fragment",
    "story-feed",
    "story-workshop",
    "story-harness",
    "story-toaster",
    "story-finale",
    "arpanet-inset",
    "internet-checklist",
    "earth-local-link",
    "upgrade-token-power",
    "upgrade-token-switch",
    "upgrade-token-computer",
    "upgrade-badge-power",
    "upgrade-badge-switch",
    "upgrade-badge-computer",
    "capability-power",
    "capability-switch",
    "capability-computer",

    "feed-profile",
    "curtain",
    "network",
    "window-sash",
    "caption",
    "lyric-anchor",
    "history-overlay-badge",
    "history-overlay-year",
    "history-calendar",
    "history-badge",
    "image",
    "browser-screen",
    "character",
    "text",
    "keyring",
    "group",
    "word",
    "window",
    "page",
    "extension",
    "tracking",
    "inspection",
    "eyes",
    "handle",
  ];
  for (const o of p.objects) {
    if (!o.id || ids.has(o.id) || !kinds.includes(o.kind))
      throw Error("Duplicate ID or unsupported object");
    if (
      o.limb &&
      (o.kind !== "image" ||
        !Array.isArray(o.limb.polygon) ||
        o.limb.polygon.length < 3 ||
        o.limb.polygon.length > 32 ||
        ![...o.limb.polygon, o.limb.pivot, ...(Array.isArray(o.limb.pinnedSeam) ? o.limb.pinnedSeam : [])].every(
          (point) =>
            point &&
            Number.isFinite(point.x) &&
            Number.isFinite(point.y) &&
            point.x >= 0 &&
            point.x <= o.width &&
            point.y >= 0 &&
            point.y <= o.height,
        ) ||
        (o.limb.pinnedSeam !== undefined &&
          (!Array.isArray(o.limb.pinnedSeam) || o.limb.pinnedSeam.length !== 2 ||
           o.limb.inverse || Math.hypot(o.limb.pinnedSeam[1].x-o.limb.pinnedSeam[0].x,o.limb.pinnedSeam[1].y-o.limb.pinnedSeam[0].y)<1)) ||
        !Number.isFinite(o.limb.degrees) ||
        Math.abs(o.limb.degrees) > 30 ||
        typeof o.limb.inverse !== "boolean" ||
        (o.limb.degrees !== 0 && !o.animation))
    )
      throw Error("Invalid articulated image region");
    if (o.performanceClock) {
      const c = o.performanceClock;
      if (
        ![c.timelineStart, c.timelineEnd, c.sourceStart, c.sourceEnd].every(
          (n) => Number.isInteger(n) && n >= 0 && n <= p.composition.durationInFrames,
        ) ||
        c.timelineEnd <= c.timelineStart ||
        c.sourceEnd <= c.sourceStart ||
        !o.kind.startsWith("story-")
      )
        throw Error("Invalid source performance clock");
    }
    if (o.hidden !== undefined && typeof o.hidden !== "boolean") throw Error("Invalid visibility");
    if (
      o.animation &&
      (![o.animation.startFrame, o.animation.endFrame].every(Number.isInteger) ||
        o.animation.startFrame < 0 ||
        o.animation.endFrame <= o.animation.startFrame ||
        o.animation.endFrame > p.composition.durationInFrames)
    )
      throw Error("Invalid prop animation");
    if (
      o.textOutline !== undefined &&
      (typeof o.textOutline !== "string" || !/^#[0-9a-fA-F]{6}$/.test(o.textOutline))
    )
      throw Error("Invalid text outline");
    if (o.fade) {
      if (Object.keys(o.fade).some((k) => !["in", "out"].includes(k)))
        throw Error("Invalid fade field");
      for (const range of Object.values(o.fade))
        if (
          !Array.isArray(range) ||
          range.length !== 2 ||
          !range.every(Number.isInteger) ||
          range[0] < 0 ||
          range[1] <= range[0] ||
          range[1] > p.composition.durationInFrames
        )
          throw Error("Invalid object fade");
    }
    validateViews(o, assets, p.composition.durationInFrames);
    if (
      o.screenFor &&
      (!p.objects.some(
        (n) => n.id === o.screenFor && n.kind === "image" && n.parentId === o.parentId,
      ) ||
        o.kind !== "browser-screen")
    )
      throw Error("Browser aperture must refer to sibling hardware");
    if (
      o.actionCues &&
      !Object.values(o.actionCues).every(
        (n) => Number.isInteger(n) && n >= 0 && n < p.composition.durationInFrames,
      )
    )
      throw Error("Invalid action cues");
    if (
      o.newspaper &&
      (o.textSurface !== "newspaper" ||
        ![o.newspaper.date, o.newspaper.context].every(
          (v) => typeof v === "string" && v.length > 0 && v.length <= 120,
        ))
    )
      throw Error("Invalid illustrative newspaper text");
    if (o.contentPlane) {
      if (o.textPlane || o.attachment || !["story-browser-", "story-feed-"].some(prefix => o.kind.startsWith(prefix)))
        throw Error("Only browser/feed graphics may use a content plane");
      validateTextPlane(o.contentPlane);
    }
    if (o.textPlane) {
      if (o.kind !== "text" || o.attachment)
        throw Error("Only explanatory text may use a screen plane");
      validateTextPlane(o.textPlane);
    }
    if (o.textBackground !== undefined && typeof o.textBackground !== "boolean")
      throw Error("Invalid text background");
    if (o.role && !["lyric", "explanatory"].includes(o.role)) throw Error("Invalid text role");
    if (o.kind === "word" && o.role && o.role !== "lyric")
      throw Error("Recorded words must remain lyrics");
    if (
      o.kind === "text" &&
      (o.role !== "explanatory" || typeof o.text !== "string" || o.text.length > 120)
    )
      throw Error("Explanatory labels must stay distinct from recorded lyrics");
    if (
      o.textStyle &&
      (!["serif", "sans", "mono"].includes(o.textStyle.family) ||
        !Number.isFinite(o.textStyle.fontSize) ||
        o.textStyle.fontSize < 12 ||
        o.textStyle.fontSize > 72 ||
        ![400, 600, 700, 800, 900].includes(o.textStyle.weight))
    )
      throw Error("Invalid text style");
    if (
      o.textAnchor &&
      (!p.objects.some((n) => n.id === o.textAnchor.objectId && n.kind === "character") ||
        ![o.textAnchor.dx, o.textAnchor.dy].every(Number.isFinite))
    )
      throw Error("Text anchor must refer to a character");
    if (
      o.textSurface &&
      (o.kind !== "text" || !["wooden-sign", "newspaper"].includes(o.textSurface))
    )
      throw Error("Invalid text surface");
    if(o.wordRoute && (o.kind!=="lyric-anchor" || typeof o.wordRoute.intent!=="string" || !o.wordRoute.intent.trim() || ![o.wordRoute.entryId,o.wordRoute.exitId].every(id=>p.objects.some(n=>n.id===id && n.kind==="lyric-anchor")))) throw Error("Invalid word route anchors");
    if(o.wordJourney && (o.kind!=="lyric-anchor" || !p.objects.some(n=>n.id===o.wordJourney.mouthObjectId && n.kind==="lyric-anchor") || !p.objects.some(n=>n.id===o.wordJourney.targetGroupId && n.kind==="group"))) throw Error("Invalid word journey anchors");
    if (o.textFlow) {
      const f = o.textFlow;
      if (
        o.kind !== "word" ||
        typeof f.group !== "string" ||
        !f.group ||
        !["action", "speech", "question"].includes(f.role) ||
        (f.speakerId && !p.objects.some((n) => n.id === f.speakerId && n.kind === "character")) ||
        (f.target &&
          (![f.target.x, f.target.y].every(Number.isFinite) ||
            (f.target.objectId &&
              !p.objects.some((n) => n.id === f.target.objectId && n.kind === "browser-screen"))))
      )
        throw Error("Invalid lyric treatment");
    }
    if (o.rhythm) {
      const r = o.rhythm;
      if (
        typeof r.enabled !== "boolean" ||
        (r.intensity !== undefined &&
          (!Number.isFinite(r.intensity) || r.intensity < 0 || r.intensity > 3)) ||
        !["beat", "offbeat"].includes(r.pattern) ||
        ![1, 2, 4].includes(r.every) ||
        !Number.isInteger(r.phase) ||
        r.phase < 0 ||
        r.phase >= r.every ||
        !Number.isInteger(r.offsetFrames) ||
        Math.abs(r.offsetFrames) > 30 ||
        !Number.isFinite(r.amplitude) ||
        r.amplitude < 0 ||
        r.amplitude > 20 ||
        !Number.isInteger(r.decayFrames) ||
        r.decayFrames < 3 ||
        r.decayFrames > 30 ||
        !["x", "y"].includes(r.axis)
      )
        throw Error("Invalid prop rhythm");
    }

    if (o.allowOverflow !== undefined && typeof o.allowOverflow !== "boolean")
      throw Error("Invalid clipping flag");
    if (
      o.placementTransitionFrames !== undefined &&
      (o.kind !== "character" ||
        !Number.isInteger(o.placementTransitionFrames) ||
        o.placementTransitionFrames < 1 ||
        o.placementTransitionFrames > 30)
    )
      throw Error("Invalid placement transition");
    let motionFrame = -1;
    for (const k of o.motion || []) {
      if (
        !Number.isInteger(k.frame) ||
        k.frame < 0 ||
        k.frame >= p.composition.durationInFrames ||
        k.frame <= motionFrame ||
        ![k.x, k.y].every(
          (n) =>
            Number.isFinite(n) &&
            Math.abs(n) <=
              (o.kind.startsWith("upgrade-token-") ||
              o.kind.startsWith("story-browser-") ||
              o.kind.startsWith("story-appliance-") ||
              o.kind.startsWith("story-task-") ||
              o.kind.startsWith("story-feed-") ||
              (p.documentId?.startsWith("full-song-") &&
                [
                  "word",
                  "story-file",
                  "story-node",
                  "story-fragment",
                  "story-physical-capsule",
                ].includes(o.kind))
                ? 1280
                : 80),
        )
      )
        throw Error("Invalid gentle component motion");
      motionFrame = k.frame;
    }

    if (o.attachment) {
      const a = o.attachment,
        s = p.scenes.find((s) => s.id === a.settingId);
      if (
        !s?.views?.every((v) => v.anchors?.[a.anchor]) ||
        ![a.offsetX, a.offsetY].every(Number.isFinite)
      )
        throw Error("Missing view-relative attachment anchor");
    }
    ids.add(o.id);
    if (![o.x, o.y].every(Number.isFinite) || Math.abs(o.x) > 3000 || Math.abs(o.y) > 3000)
      throw Error("Invalid position");
    if (
      typeof o.note !== "string" ||
      o.note.length > 2000 ||
      typeof o.suggestion !== "string" ||
      o.suggestion.length > 100
    )
      throw Error("Invalid annotation");
    if (o.scale !== undefined && (!Number.isFinite(o.scale) || o.scale < 0.1 || o.scale > 4))
      throw Error("Scale must be between 0.1 and 4");
    if (
      o.noteFrame !== undefined &&
      (!Number.isInteger(o.noteFrame) ||
        o.noteFrame < 0 ||
        o.noteFrame >= p.composition.durationInFrames)
    )
      throw Error("Invalid note anchor");
    if (o.kind === "group") {
      if (!Number.isInteger(o.timeOffset)) throw Error("Invalid group timing");
    } else {
      if (
        ![o.width, o.height].every(Number.isFinite) ||
        o.width <= 0 ||
        o.height <= 0 ||
        !Number.isInteger(o.enterFrame) ||
        !Number.isInteger(o.exitFrame)
      )
        throw Error("Invalid object geometry/timing");
      if (o.kind === "word" && !p.words.some((w) => w.id === o.wordId)) throw Error("Missing word");
      if (o.cue && (!["enter", "exit"].includes(o.cue.edge) || !Number.isInteger(o.cue.offset)))
        throw Error("Invalid cue");
    }
  }
  for (const o of p.objects) {
    if (o.kind === "story-spatial-prop" && !o.spatial) throw Error("Missing spatial prop metadata");
    if (o.spatial) {
      const v = o.spatial;
      const roles = [
        "room",
        "bench",
        "owner",
        "toaster",
        "bread",
        "dial",
        "outlet",
        "plug",
        "notes",
        "monitor",
      ];
      if (
        o.kind !== "story-spatial-prop" ||
        !roles.includes(v.role) ||
        ![v.position, v.rotation, v.scale].every(
          (a) =>
            Array.isArray(a) &&
            a.length === 3 &&
            a.every((n) => Number.isFinite(n) && Math.abs(n) <= 50),
        ) ||
        v.scale.some((n) => n <= 0 || n > 5)
      )
        throw Error("Invalid spatial prop");
    }
    if (o.parentId && !p.objects.some((n) => n.id === o.parentId && n.kind === "group"))
      throw Error("Invalid parent");
    ancestors(p, o.id);
    const e = evaluateObject(p, o.id);
    if (
      e.enter < 0 ||
      e.exit > p.composition.durationInFrames ||
      e.enter >= e.exit ||
      e.x < 0 ||
      e.y < 0 ||
      (!o.allowOverflow && (e.x + e.width > 1280 || e.y + e.height > 720))
    )
      throw Error(`Object extends outside the scene or recording: ${o.id}`);
  }
  return p;
}
export function editObject(p, id, patch) {
  const original = p.objects.find((o) => o.id === id);
  if (original?.screenFor && (patch.x !== undefined || patch.y !== undefined))
    throw Error("Move the whole monitor and browser to preserve screen registration");
  if (original?.textAnchor && (patch.x !== undefined || patch.y !== undefined))
    patch = {
      ...patch,
      textAnchor: {
        ...original.textAnchor,
        dx: original.textAnchor.dx + (patch.x === undefined ? 0 : patch.x - original.x),
        dy: original.textAnchor.dy + (patch.y === undefined ? 0 : patch.y - original.y),
      },
    };
  if (original?.attachment && (patch.x !== undefined || patch.y !== undefined))
    patch = {
      ...patch,
      attachment: {
        ...original.attachment,
        offsetX: original.attachment.offsetX + (patch.x === undefined ? 0 : patch.x - original.x),
        offsetY: original.attachment.offsetY + (patch.y === undefined ? 0 : patch.y - original.y),
      },
    };

  const next = {
    ...p,
    revision: p.revision + 1,
    objects: p.objects.map((o) => (o.id === id ? { ...o, ...patch } : o)),
  };
  return validateScene(next);
}
export function shiftTiming(p, id, scope, delta) {
  const o = p.objects.find((n) => n.id === id);
  if (!o) throw Error("No selection");
  if (o.kind === "group") {
    if (scope !== "move") throw Error("Groups move together; select Move timing");
    return editObject(p, id, { timeOffset: o.timeOffset + delta });
  }
  const patch = {};
  if (scope === "entry" || scope === "move") {
    if (o.cue) patch.cue = { ...o.cue, offset: o.cue.offset + delta };
    else patch.enterFrame = o.enterFrame + delta;
  }
  if (scope === "exit" || scope === "move") patch.exitFrame = o.exitFrame + delta;
  return editObject(p, id, patch);
}
export function descendants(p, id) {
  return p.objects.filter((o) => ancestors(p, o.id).some((a) => a.id === id));
}
export function ungroup(p, id) {
  const g = p.objects.find((o) => o.id === id);
  if (g?.kind !== "group") throw Error("Select a group");
  const objects = p.objects
    .filter((o) => o.id !== id)
    .map((o) => {
      if (o.parentId !== id) return o;
      const n = {
        ...o,
        parentId: g.parentId,
        x: o.x * (g.scale ?? 1) + g.x,
        y: o.y * (g.scale ?? 1) + g.y,
        scale: (o.scale ?? 1) * (g.scale ?? 1),
      };
      if (o.kind === "group") n.timeOffset += g.timeOffset;
      else {
        n.exitFrame += g.timeOffset;
        if (o.cue) {
          const anchor = p.objects.find((a) => a.wordId === o.cue.wordId && a.kind === "word");
          const shared = anchor && ancestors(p, anchor.id).some((a) => a.id === id);
          n.cue = { ...o.cue, offset: o.cue.offset + (shared ? 0 : g.timeOffset) };
        } else n.enterFrame += g.timeOffset;
      }
      return n;
    });
  return validateScene({
    ...p,
    revision: p.revision + 1,
    objects,
    scenes: p.scenes.map((s) => ({ ...s, objectIds: s.objectIds.filter((n) => n !== id) })),
  });
}
export function groupObjects(p, ids) {
  const nodes = ids.map((id) => p.objects.find((o) => o.id === id));
  if (
    nodes.length < 2 ||
    nodes.some((n) => !n) ||
    !nodes.every((n) => n.parentId === nodes[0].parentId)
  )
    throw Error("Group two sibling objects");
  const id = `group-${p.revision}-${p.objects.length}`;
  const group = {
    id,
    kind: "group",
    parentId: nodes[0].parentId,
    x: 0,
    y: 0,
    timeOffset: 0,
    label: "Selected assembly",
    note: "",
    suggestion: "",
  };
  return validateScene({
    ...p,
    revision: p.revision + 1,
    scenes: p.scenes.map((s) => ({
      ...s,
      objectIds: s.objectIds.some((n) => ids.includes(n)) ? [...s.objectIds, id] : s.objectIds,
    })),
    objects: [...p.objects.map((o) => (ids.includes(o.id) ? { ...o, parentId: id } : o)), group],
  });
}
export function applySuggestion(p, id) {
  const o = p.objects.find((n) => n.id === id);
  if (o?.kind !== "word" || !o.suggestion.trim()) throw Error("No word suggestion");
  return validateScene({
    ...p,
    revision: p.revision + 1,
    words: p.words.map((w) =>
      w.id === o.wordId ? { ...w, text: o.suggestion.slice(0, 35), textStatus: "edited" } : w,
    ),
  });
}

export function splitScene(p, id, frame, description) {
  const s = p.scenes.find((s) => s.id === id);
  if (!s || !Number.isInteger(frame) || frame <= s.start || frame >= s.end || !description.trim())
    throw Error("Choose a point inside the scene and describe the setting");
  const next = {
    id: `setting-${p.revision}-${frame}`,
    title: "New setting",
    description: description.trim(),
    start: frame,
    end: s.end,
    assetStatus: "awaiting asset",
    objectIds: [],
  };
  return validateScene({
    ...p,
    revision: p.revision + 1,
    scenes: p.scenes.flatMap((n) =>
      n.id === id
        ? [
            {
              ...s,
              end: frame,
              camera: s.camera?.filter((k) => k.frame < frame),
              viewCues: s.viewCues?.filter((k) => k.frame < frame),
            },
            next,
          ]
        : [n],
    ),
  });
}
export function sceneAt(p, frame) {
  const active = p.scenes.find((s) => frame >= s.start && frame < s.end);
  if (active) return active;
  const start = Math.max(0, ...p.scenes.filter((s) => s.end <= frame).map((s) => s.end));
  const end = Math.min(
    p.composition.durationInFrames,
    ...p.scenes.filter((s) => s.start > frame).map((s) => s.start),
  );
  return {
    id: `gap-${start}-${end}`,
    start,
    end,
    title: "Unfinished interval",
    description: "This part is intentionally unfinished. Author any other interval independently.",
    assetStatus: "awaiting asset",
    objectIds: [],
  };
}
export function addSceneIsland(p, start, end, description) {
  if (
    !Number.isInteger(start) ||
    !Number.isInteger(end) ||
    start < 0 ||
    end > p.composition.durationInFrames ||
    start >= end ||
    p.scenes.some((s) => start < s.end && end > s.start) ||
    !description.trim()
  )
    throw Error("Choose an unfinished interval without overlapping an authored setting");
  return validateScene({
    ...p,
    revision: p.revision + 1,
    scenes: [
      ...p.scenes,
      {
        id: `island-${p.revision}-${start}`,
        start,
        end,
        title: "Scene brief",
        description,
        assetStatus: "awaiting asset",
        objectIds: [],
      },
    ].sort((a, b) => a.start - b.start),
  });
}
