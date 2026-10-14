import previous from "./foundationToasterStudy";
import blocking from "./foundation-finale-blocking.json";
import browser from "./foundation-browser-blocking.json";
import feed from "./foundation-feed-blocking.json";
import harness from "./foundation-harness-blocking.json";
import toaster from "./foundation-toaster-blocking.json";
import { validateScene, type SceneObject } from "./scene.mjs";
const p = structuredClone(previous);
p.documentId = "full-song-foundation-v18";
p.revision = 1;
p.origin =
  "v17 plus finale recalls, retained work after disconnect and departure into space. Complete rough sequence only; foundation quality unaccepted.";
const added: SceneObject[] = [];
const donors = ["browser-16", "feed-09", "harness-12", "toaster-04", "harness-17", "harness-19"];
const sourceEvents = [
  ...browser.shots.map((s) => ({ ...s, eventFrame: s.actionFrame })),
  ...feed.shots,
  ...harness.shots,
  ...toaster.shots,
];
for (const [i, shot] of blocking.shots.entries()) {
  const scene = p.scenes[64 + i];
  const local: SceneObject[] = [];
  function prop(
    role: string,
    kind: string,
    x: number,
    y: number,
    width: number,
    height: number,
    suggestion = "",
  ) {
    const o: SceneObject = {
      id: `v18-${shot.id}-${role}`,
      kind,
      parentId: null,
      x,
      y,
      width,
      height,
      enterFrame: scene.start,
      exitFrame: scene.end,
      timeOffset: 0,
      cue: null,
      suggestion,
      animation: {
        startFrame: Math.max(scene.start, shot.eventFrame - 18),
        endFrame: shot.eventFrame,
      },
      note: `${shot.setup}: ${shot.intent}. ${shot.provenance} Original phrases:${shot.expectedPhraseIds.join(",") || "instrumental"}. Event${shot.eventFrame}; score${shot.timingScore ?? "hold, not scored"}. No visual acceptance.`,
    };
    local.push(o);
    return o;
  }
  if (i < 6) {
    const donor = previous.scenes.find((s) => s.id === `foundation-v12-${donors[i]}`)!;
    const oldEvent = sourceEvents.find((s) => s.id === donors[i])!.eventFrame;
    const delta = shot.eventFrame - oldEvent;
    for (const source of previous.objects.filter(
      (o) => donor.objectIds.includes(o.id) && o.kind !== "lyric-block",
    )) {
      const o = structuredClone(source);
      o.id = `v18-${shot.id}:${source.id}`;
      o.enterFrame = scene.start;
      o.exitFrame = scene.end;
      if (source.exitFrame <= oldEvent) o.hidden = true;
      else if (source.exitFrame < donor.end)
        o.exitFrame = Math.min(scene.end, source.exitFrame + delta);
      if (o.animation)
        o.animation = {
          startFrame: o.animation.startFrame + delta,
          endFrame: o.animation.endFrame + delta,
        };
      if (o.motion) o.motion = o.motion.map((k) => ({ ...k, frame: k.frame + delta }));
      if (o.kind.startsWith("story-"))
        o.performanceClock = {
          timelineStart: scene.start,
          timelineEnd: scene.end,
          sourceStart: scene.start - delta,
          sourceEnd: scene.end - delta,
        };
      o.note = `Finale callback to ${source.id}, donor scene ${donor.id}; original event${oldEvent} maps to${shot.eventFrame}. ${shot.intent}. Source performance preserved; final physical/meaning review pending.`;
      local.push(o);
    }
  } else if (i === 6 || i === 7) {
    prop("bench", "story-browser-bench", 0, 0, 1280, 720);
    prop("work", "story-task-monitor", 320, 65, 600, 450, i === 6 ? "disconnect" : "disconnected");
    prop("notes", "story-task-paper", 80, 335, 260, 185, "instruction");
    prop("keyboard", "story-task-keyboard", 380, 460, 460, 75);
    if (i === 7) {
      prop("night-window", "story-space-field", 955, 45, 290, 450);
      prop("window", "story-window-passage", 955, 45, 290, 450, "hold");
      const person = prop("departing-person", "story-task-person", 30, 130, 320, 650, "foreground");
      person.allowOverflow = true;
      person.motion = [
        { frame: scene.start, x: 0, y: 0 },
        { frame: shot.eventFrame, x: 780, y: 0 },
      ];
    }
  } else {
    const stars = prop("stars", "story-space-field", 0, 0, 1280, 720);
    stars.enterFrame = 6442;
    stars.exitFrame = 6804;
    if (i === 8) {
      prop("window", "story-window-passage", 0, 0, 1280, 720, "hold");
      prop("window-grip", "story-window-grip", 985, 330, 210, 100);
    }
    if (i === 9) {
      const window = prop("departing-window", "story-window-passage", 0, 0, 1280, 720, "reverse");
      window.animation = { startFrame: scene.start, endFrame: scene.end - 1 };
    }
    if (i >= 10) {
      const earth = prop("travelling-earth", "image", 420, 150, 440, 427);
      earth.enterFrame = 6656;
      earth.exitFrame = 6804;
      earth.views = [{ id: "earth", name: "Retained Earth", assetId: "earth-base-v1" }];
      earth.defaultView = "earth";
      earth.motion = [
        { frame: 6656, x: -70, y: -20 },
        { frame: 6803, x: 70, y: 20 },
      ];
      if (i === 11) {
        earth.x = 700;
        earth.y = 225;
        earth.width = 220;
        earth.height = 213.5;
        earth.motion = [
          { frame: 6725, x: -35, y: -10 },
          { frame: 6803, x: 35, y: 10 },
        ];
        earth.note +=
          " Final wide cut halves the apparent planet size, revealing more space; deliberate reframing, not a continuous-camera claim.";
      }
    }
  }
  scene.objectIds = [
    ...local.map((o) => o.id),
    ...p.objects
      .filter(
        (o) => o.kind === "lyric-block" && o.enterFrame < scene.end && o.exitFrame > scene.start,
      )
      .map((o) => o.id),
  ];
  delete scene.views;
  delete scene.defaultView;
  delete scene.viewCues;
  scene.camera =
    i >= 10
      ? [
          { frame: scene.start, zoom: 1.25 - (0.25 * (scene.start - 6656)) / 147, x: 0.5, y: 0.5 },
          {
            frame: scene.end - 1,
            zoom: 1.25 - (0.25 * (scene.end - 1 - 6656)) / 147,
            x: 0.5,
            y: 0.5,
          },
        ]
      : [{ frame: scene.start, zoom: 1, x: 0.5, y: 0.5 }];
  scene.description = `${shot.intent} | v18 recall/departure rough blocking; source phrases${shot.expectedPhraseIds.join(",") || "instrumental"}, event${shot.eventFrame}. Full visual/meaning review pending.`;
  added.push(...local);
}
p.objects = [
  ...p.objects.filter((o) => o.kind !== "lyric-block"),
  ...added,
  ...p.objects.filter((o) => o.kind === "lyric-block"),
];
const used = new Set(p.scenes.flatMap((s) => s.objectIds));
p.objects = p.objects.filter((o) => used.has(o.id));
export default validateScene(p);
