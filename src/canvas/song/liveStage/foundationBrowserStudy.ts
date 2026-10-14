import previous from "./foundationOpeningStudy";
import blocking from "./foundation-browser-blocking.json";
import { validateScene, type SceneObject } from "./scene.mjs";
const p = structuredClone(previous);
p.documentId = "full-song-foundation-v14";
p.revision = 1;
p.origin =
  "v13 plus16physical browser blocking setups; fixed v12cut clock and original audio/words preserved. Agent-authored proxies; no creative acceptance.";
const additions: SceneObject[] = [];
for (const [index, shot] of blocking.shots.entries()) {
  const scene = p.scenes.find((s) => s.id === `foundation-v12-${shot.id}`)!;
  const local: SceneObject[] = [];
  const event = shot.actionFrame;
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
      id: `v14-${shot.id}-${role}`,
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
      note: `${shot.intent} | ${shot.provenance} Physical rough blocking, fulfillment/visual score unverified. Source phrases ${shot.expectedPhraseIds.join(",")}; action candidate frame${event} score${shot.timingScore}.`,
      animation: { startFrame: event - 18, endFrame: event },
    };
    local.push(o);
    return o;
  }
  function reach(role: string, x: number, y: number, delay = 0) {
    const hand = prop(role, "story-browser-hand", x - 8, y - 30, 260, 100);
    hand.motion = [
      { frame: scene.start, x: 160, y: 25 },
      { frame: event - 18 + delay, x: 0, y: 0 },
      { frame: Math.min(scene.end - 1, event + delay + 18), x: 0, y: 0 },
    ];
    return hand;
  }
  const bench = prop("bench", "story-browser-bench", 0, 0, 1280, 720);
  delete bench.animation;
  const frame = (role: string, name: string, x: number, y: number, w = 520, h = 330) =>
    prop(role, "story-browser-frame", x, y, w, h, name);
  if (index <= 3) {
    const a = frame("first-window", "Netscape", index === 2 ? 220 : 175, 140, 560, 350);
    const b = frame("rival-window", "Explorer", index === 3 ? 410 : 650, 170, 460, 310);
    a.motion = [
      { frame: scene.start, x: index === 2 ? -160 : 0, y: 0 },
      { frame: event, x: index === 2 ? 0 : -45, y: 0 },
    ];
    b.motion = [
      { frame: scene.start, x: 170, y: 0 },
      { frame: event, x: index === 3 ? -90 : 0, y: 0 },
    ];
    if (index === 0) {
      b.enterFrame = scene.end - 1;
      scene.views = [
        { id: "room", name: "Retained empty workshop", assetId: "workshop-no-monitor-v3" },
      ];
      scene.defaultView = "room";
      local.splice(local.indexOf(bench), 1);
    }
    reach("guiding-hand", index === 3 ? 425 : 760, 460);
  } else if (index <= 7) {
    const board = prop("source", "story-browser-board", 290, 170, 640, 300);
    if (index === 4) {
      const lid = prop("cover", "story-browser-cover", 290, 170, 640, 300);
      lid.motion = [
        { frame: scene.start, x: 0, y: 0 },
        { frame: event - 18, x: 0, y: 0 },
        { frame: event, x: 0, y: -235 },
      ];
      const h = reach("opening-hand", 620, 420);
      h.motion = [
        { frame: scene.start, x: 160, y: 25 },
        { frame: event - 18, x: 0, y: 0 },
        { frame: event, x: 0, y: -235 },
      ];
    } else if (index === 5 || index === 6) {
      const chip = prop("shared-part", "story-browser-chip", 555, 275, 100, 70);
      chip.motion = [
        { frame: scene.start, x: 0, y: 0 },
        { frame: event, x: index === 5 ? -250 : 250, y: index === 5 ? 95 : 0 },
      ];
      const hand = reach("working-hand", 565, 305);
      hand.motion = [
        { frame: scene.start, x: 0, y: 0 },
        { frame: event, x: index === 5 ? -250 : 250, y: index === 5 ? 95 : 0 },
      ];
      const second = prop("second-part", "story-browser-chip", 720, 220, 85, 60);
      second.motion = [
        { frame: scene.start, x: 0, y: 0 },
        { frame: event, x: index === 5 ? 160 : -160, y: 90 },
      ];
      const hand2 = reach("second-hand", 730, 250);
      hand2.motion = structuredClone(second.motion);
    } else {
      local.splice(local.indexOf(board), 1);
      const ready = frame("finished", "Firefox", 320, 130, 640, 360);
      ready.motion = [
        { frame: scene.start, x: -180, y: 0 },
        { frame: event, x: 0, y: 0 },
      ];
      const h = reach("release-hand", 960, 410);
      h.motion = structuredClone(ready.motion);
    }
  } else if (index <= 10) {
    prop("source", "story-browser-board", 230, 140, 760, 340);
    if (index === 8) {
      prop("controls", "story-browser-control", 360, 250, 560, 130);
      reach("control-hand", 500, 315);
    }
    if (index === 9) {
      const lid = prop("rear-cover", "story-browser-cover", 230, 140, 760, 340);
      lid.motion = [
        { frame: scene.start, x: 0, y: 0 },
        { frame: event - 18, x: 0, y: 0 },
        { frame: event, x: 550, y: -80 },
      ];
      const h = reach("panel-hand", 930, 450);
      h.motion = [
        { frame: scene.start, x: 160, y: 25 },
        { frame: event - 18, x: 0, y: 0 },
        { frame: event, x: 550, y: -80 },
      ];
    }
    if (index === 10) {
      const plug = prop("connector", "story-browser-chip", 535, 220, 90, 60);
      plug.motion = [
        { frame: scene.start, x: 120, y: 75 },
        { frame: event, x: 0, y: 0 },
      ];
      const hand = reach("connection-hand", 550, 250);
      hand.motion = structuredClone(plug.motion);
    }
  } else {
    const door = frame("door", "doorway", index === 12 ? 165 : 380, 45, 480, 510);
    if (index === 12) {
      const outside = frame("outside-view", "Outside", 785, 170, 310, 280);
      delete outside.animation;
    }
    if (index === 14) {
      const control = prop("choice-control", "story-browser-control", 100, 280, 240, 100);
      reach("choosing-hand", 160, 330);
      control.animation = { startFrame: event - 15, endFrame: event };
    } else reach("handle-hand", door.x + door.width * 0.84, door.y + door.height * 0.46);
    if (index === 15) door.animation = { startFrame: scene.start, endFrame: scene.start + 1 };
  }
  scene.objectIds = [
    ...local.map((o) => o.id),
    ...p.objects
      .filter(
        (o) => o.kind === "lyric-block" && o.enterFrame < scene.end && o.exitFrame > scene.start,
      )
      .map((o) => o.id),
  ];
  if (index !== 0) {
    delete scene.views;
    delete scene.defaultView;
  }
  delete scene.viewCues;
  scene.camera = [{ frame: scene.start, zoom: 1, x: 0.5, y: 0.5 }];
  scene.description = `${shot.intent} | v14 ${shot.layout} physical blocking. No floating explanatory cards. Hand/prop proxies are agent interpretation; observed semantic score and physical-quality review pending.`;
  additions.push(...local);
}
p.objects = [
  ...p.objects.filter((o) => o.kind !== "lyric-block"),
  ...additions,
  ...p.objects.filter((o) => o.kind === "lyric-block"),
];
const used = new Set(p.scenes.flatMap((s) => s.objectIds));
p.objects = p.objects.filter((o) => used.has(o.id));
export default validateScene(p);
