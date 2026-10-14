import { aiJourneyCuts } from "./AiInfinityJourney";
import { creditBounds } from "./EndCredits";
import { infinityCuts } from "./doorwayDirection";
import type { Annotation } from "./audioAnnotation";
import type { ScenePlan } from "./sceneContainers";
import { openingDefaults, openingImageStages } from "./openingDirection";
import {
  roomBounds,
  cueTime,
  roomArrival,
  roomDefaults,
  roomEvents,
  roomWordCues,
  snap,
} from "./roomDirection";
import { phoneEraDefaults } from "./phoneEra";
import { cortexCameraCuts } from "./cortexCameraCuts";
import { kitchenPerformance } from "./kitchenDirection";
import { outdoorShotCuts } from "./outdoorShots";
import { percussionPulses, snapToStem } from "./stemAnalysis";
import { wordTiming } from "./wordTiming";
export type SceneShot = {
  id: string;
  start: number;
  end: number;
  backgroundId: string;
  purpose: string;
  lane: string;
  rhythmObject: string;
  candidateEventIds: string[];
  verification: string;
  max8Passed: boolean;
};
/** Actual directing/composition events. No lyric-only, pulse or small camera-scale subdivisions. */
export function sceneShots(a: Annotation, plan?: ScenePlan): SceneShot[] {
  const events: { time: number; backgroundId: string; purpose: string; rhythmObject: string }[] =
    [];
  const add = (time: number, backgroundId: string, purpose: string, rhythmObject: string) => {
    if (Number.isFinite(time) && time >= 0 && time < a.duration)
      events.push({ time, backgroundId, purpose, rhythmObject });
  };
  const credits = creditBounds(a);
  if (credits)
    for (let i = 0; i < 4; i++)
      add(
        credits.start + 2 + ((credits.end - credits.start - 2) * i) / 4,
        `outro-credits:${i}`,
        "Persistent credit quarter appears",
        "credit typography",
      );
  const words = wordTiming(a).intervals.map((w) => ({
    ...w,
    item: a.items.find((i) => i.id === w.id)!,
  }));
  const section = (n: number) => {
    const i = a.items.findIndex((i) => i.groupId.endsWith(":section:" + n));
    return i < 0 ? a.duration : a.boundaries[i];
  };
  const cue = (n: number, text: string, fallback: number) =>
    words.find(
      (w) =>
        w.item.groupId.endsWith(":section:" + n) &&
        w.item.text.toLowerCase().replace(/[^a-z]/g, "") === text,
    )?.start ?? fallback;
  add(0, "opening-book-invitation", "Book with invitation", "dimensional invitation");
  add(
    cue(1, "this", 3.31),
    "opening-book-approach",
    "Substantial approach to book page",
    "book camera / word reveal",
  );
  add(6.4, "opening-window-aperture", "Camera enters the window image", "portal traversal");
  add(9.5, "earth-upgrade:0", "Establish Earth destination", "Earth upgrade assets");
  for (const e of openingImageStages(plan?.opening ?? openingDefaults))
    add(
      e.time,
      "earth-upgrade:" + e.imageIndex,
      "Different planetary upgrade image",
      "incoming upgrade sprites",
    );
  const room = roomBounds(a);
  if (room) {
    const d = plan?.room ?? roomDefaults;
    add(
      roomArrival(a)!.beat,
      "room-1992-screen-handoff",
      "Earth becomes computer world",
      "character head / device",
    );
    let era = 0,
      device = 0;
    for (const e of roomEvents(a, d).filter((e) => e.kind === "era" || e.kind === "device")) {
      const nextEra = e.kind === "era" ? (e.index ?? 0) : era,
        nextDevice = e.kind === "device" ? (e.index ?? 0) : device;
      if (nextEra !== era || nextDevice !== device)
        add(
          e.time,
          `room-era:${nextEra}/device:${nextDevice}`,
          "Room or physical computer evolution",
          "character head / feeding assets",
        );
      era = nextEra;
      device = nextDevice;
    }
    const start = [55, 58.8, 60].includes(d.turnStart) ? cueTime(a, "doorway", 60) : d.turnStart;
    add(
      start,
      "room-open-door",
      "Motivated cut from desk toward the open door",
      "doorway vocal anchor",
    );
    add(
      room.end - 1.55,
      "door-aperture-approach",
      "Continuous camera enters the dark aperture",
      "shared forward camera",
    );
    const chorusEnd = section(5);
    infinityCuts(room.end, chorusEnd, a.audioHash).forEach((time, i) =>
      add(
        time,
        `infinity:${i < 6 ? i : "registered-window-return"}`,
        i < 6 ? "Registered forward world dissolve" : "Exterior window to same occupied room",
        "selected isolated drum onsets",
      ),
    );
  }
  const phone = plan?.phoneEra ?? phoneEraDefaults;
  add(section(5), "returned-bedroom-2005", "Re-enter same occupied room", "character / device");
  add(
    phone.upgradeStart,
    "bedroom-2015-PC-phone",
    "Computer and person enter smartphone era",
    "device / app arrivals",
  );
  add(
    phone.zoomStart,
    "phone-hand-approach",
    "Substantial camera approach to held phone",
    "phone camera",
  );
  add(
    phone.zoomEnd,
    "phone-hand-closeup",
    "Resolve hand and phone close-up",
    "phone screen gestures",
  );
  for (const [text, index, fallback] of [
    ["app", 0, 87.878],
    ["friend", 1, 88.878],
    ["shop", 2, 91.001],
    ["garden", 3, 91.821],
    ["save", 0, 95.35],
    ["feed", 3, 96.765],
    ["display", 3, 98],
    ["choose", 1, 100.78],
  ] as const)
    add(
      cue(6, text, fallback),
      `phone-content:${index}:${text}`,
      "Distinct anonymous in-screen world",
      "source-cued hand / data trace",
    );
  add(section(7), "phone-to-bedroom-pullback", "Exit narrow phone world", "phone camera / chorus");
  add(
    section(7) + 2.8,
    "bedroom-2015-social-chorus",
    "Return to person and larger workspace",
    "source-cued screen",
  );
  aiJourneyCuts(section(7), section(9), a.audioHash).forEach((time, i) =>
    add(
      time,
      `ai-infinity:${i}`,
      [
        "Enter app portal",
        "Neural stream",
        "Computational architecture",
        "Natural language",
        "Token flow",
        "Words create results",
        "Many AI models",
        "Personal creative screen",
      ][i],
      "selected isolated drums / AI logo flights",
    ),
  );
  add(
    section(9) - 2.4,
    "ai-workspace-return",
    "Pull back from monitor into same occupied workspace",
    "continuous camera",
  );
  add(
    section(9),
    "cortex-view:0",
    "Instructions start forming personal context",
    "network signals",
  );
  for (const c of cortexCameraCuts(a))
    add(c.time, "cortex-view:" + c.view, c.cue, "growing network / active route");
  const ownership = words.filter((w) => w.item.groupId.endsWith(":section:12")),
    ids = [...new Set(ownership.map((w) => w.item.phraseId))];
  add(
    section(12),
    "cortex-view:2",
    "Inspect and control owned harness",
    "active node / network signal",
  );
  ids
    .filter((_, i) => i > 0 && i % 2 === 0)
    .forEach((id, i) =>
      add(
        ownership.find((w) => w.item.phraseId === id)!.start,
        "cortex-view:" + [0, 1, 2][i % 3],
        "Different control perspective",
        "selected node / links",
      ),
    );
  const kitchen = kitchenPerformance(a, a.duration - 1);
  add(
    kitchen.preparation,
    "kitchen-working-wide",
    "Person works while owned context persists",
    "background task queue",
  );
  add(
    kitchen.focusCue,
    "kitchen-working-laptop-detail",
    "Substantial task-screen close-up",
    "file queue / completions",
  );
  kitchen.cuts
    .slice(1)
    .forEach((c) =>
      add(
        c.time,
        "kitchen-toaster:" + c.view,
        "Toaster, power or model vocal action",
        "retained tasks / supply cues",
      ),
    );
  outdoorShotCuts(a, kitchen.chorus).forEach((t, i) =>
    add(
      t,
      "outdoor-retreat:" + i,
      "Different progressively wider world image",
      "personal halo growth / selective exchange",
    ),
  );
  const sorted = events.sort((a, b) => a.time - b.time);
  // Simultaneous room/device changes are one composite state, not zero-length shots.
  const distinctTimes = sorted.reduce<typeof sorted>((list, event) => {
    if (list.length && Math.abs(event.time - list.at(-1)!.time) < 1e-6)
      list[list.length - 1] = event;
    else list.push(event);
    return list;
  }, []);
  const compressed = distinctTimes.filter(
    (e, i) => !i || e.backgroundId !== distinctTimes[i - 1].backgroundId,
  );
  return compressed.map((e, i) => ({
    id: `shot-${i + 1}`,
    start: e.time,
    end: compressed[i + 1]?.time ?? a.duration,
    backgroundId: e.backgroundId,
    purpose: e.purpose,
    lane: e.backgroundId.startsWith("opening-")
      ? "stem-vocals / saved spoken-word anchors"
      : "stem-drums",
    rhythmObject: e.rhythmObject,
    candidateEventIds: e.backgroundId.startsWith("opening-")
      ? words
          .filter((w) => w.start >= e.time && w.start < (compressed[i + 1]?.time ?? a.duration))
          .map((w) => w.id)
      : percussionPulses(a.audioHash)
          .filter((b) => b.time >= e.time && b.time < (compressed[i + 1]?.time ?? a.duration))
          .map((b) => b.id),
    verification:
      "Source candidate IDs and intended carrier; full running-boundary verification pending, not certified beat counts.",
    max8Passed: (compressed[i + 1]?.time ?? a.duration) - e.time <= 8 + 1e-6,
  }));
}
