import previous from "./foundationHarnessStudy";
import blocking from "./foundation-toaster-blocking.json";
import { toasterEvents } from "./FoundationToasterProps";
import { validateScene, type SceneObject } from "./scene.mjs";
const p = structuredClone(previous);
p.documentId = "full-song-foundation-v17";
p.revision = 1;
p.origin =
  "v16 plus eight toaster action setups. Original cut clock and audio/words retained. Rough blocking; no style acceptance.";
const additions: SceneObject[] = [];
for (const [i, shot] of blocking.shots.entries()) {
  const scene = p.scenes.find((s) => s.id === `foundation-v12-${shot.id}`)!;
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
      id: `v17-${shot.id}-${role}`,
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
      animation: { startFrame: shot.eventFrame - 14, endFrame: shot.eventFrame },
      note: `${shot.intent} | ${shot.provenance} phrase:${shot.expectedPhraseIds.join(",")}; event:${shot.eventFrame}, timing:${shot.timingScore ?? "hold, unscored"}. Oneness remains rejected; physical review pending.`,
    };
    local.push(o);
    return o;
  }
  function hand(role: string, x: number, y: number) {
    const o = prop(role, "story-browser-hand", x - 8, y - 30, 260, 100);
    o.allowOverflow = true;
    return o;
  }
  prop("bench", "story-browser-bench", 0, 0, 1280, 720);
  if ([4, 5, 6].includes(i)) {
    prop(
      "retained-note",
      "story-task-paper",
      i === 4 ? 140 : 70,
      185,
      i === 4 ? 500 : 280,
      i === 4 ? 330 : 230,
      "instruction",
    );
    const monitor = prop(
      "owned-work",
      "story-task-monitor",
      i === 4 ? 710 : 440,
      55,
      i === 4 ? 480 : 780,
      i === 4 ? 390 : 510,
      i === 6 ? "model-swap" : "rules",
    );
    prop("keyboard", "story-task-keyboard", i === 4 ? 745 : 570, 490, i === 4 ? 380 : 540, 70);
    if (i === 6) {
      const h = hand(
        "model-choice",
        monitor.x + monitor.width * 0.82,
        monitor.y + monitor.height * 0.67,
      );
      h.motion = [
        { frame: scene.start, x: 120, y: 60 },
        { frame: shot.eventFrame - 1, x: 0, y: 0 },
      ];
    }
  } else if (i === 2) {
    // Low close-up of the actual connection. The source supplies power, not the dial.
    prop("outlet", "story-appliance-outlet", 840, 100, 160, 210);
    prop("cord", "story-appliance-cord", 100, 180, 550, 200);
    const plug = prop("plug", "story-appliance-plug", 650, 180, 220, 100);
    plug.motion = [
      { frame: scene.start, x: -140, y: 0 },
      { frame: shot.eventFrame - 1, x: 0, y: 0 },
    ];
    const grip = hand("plug-hand", 680, 245);
    grip.motion = structuredClone(plug.motion);
  } else {
    const scale = i === 3 ? 1.65 : i === 1 ? 1.4 : 1;
    const bx = i === 3 ? 170 : i === 1 ? 220 : 390,
      by = i === 3 ? 15 : i === 1 ? 120 : 190;
    // Slice is behind the front casing so insertion really disappears into the slot.
    if (i === 1 || i === 7) {
      const bread = prop(
        "chosen-bread",
        "story-appliance-bread",
        bx + 120 * scale,
        by - 80 * scale,
        150 * scale,
        170 * scale,
      );
      if (i === 1)
        bread.motion = [
          { frame: scene.start, x: -220, y: -45 },
          { frame: shot.eventFrame - 14, x: 0, y: -45 },
          { frame: shot.eventFrame, x: 0, y: 80 * scale },
        ];
      else
        bread.motion = [
          { frame: scene.start, x: 0, y: 80 },
          { frame: shot.eventFrame, x: 0, y: -20 },
          { frame: scene.end - 1, x: 180, y: -65 },
        ];
      const grip = hand("bread-hand", bread.x + bread.width * 0.85, bread.y + 55);
      grip.motion = structuredClone(bread.motion); // same offsets keep contact through the complete action
      if (i === 1) grip.exitFrame = shot.eventFrame + 1;
    }
    prop("body", "story-appliance-body", bx, by, 520 * scale, 330 * scale);
    const dial = prop(
      "dial",
      "story-appliance-dial",
      bx + 310 * scale,
      by + 158 * scale,
      72 * scale,
      72 * scale,
    );
    dial.animation = {
      startFrame: toasterEvents["toaster-04"] - 14,
      endFrame: toasterEvents["toaster-04"],
    };
    if (i === 3) {
      const h = hand("dial-hand", dial.x + dial.width * 0.5, dial.y + dial.height * 0.5);
      h.motion = [
        { frame: scene.start, x: 120, y: 60 },
        { frame: shot.eventFrame - 15, x: 0, y: 0 },
        { frame: shot.eventFrame, x: 0, y: 0 },
        { frame: scene.end - 1, x: 130, y: 40 },
      ];
    }
    if (i === 0) prop("bread-choice", "story-appliance-bread", 100, 290, 140, 160);
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
  scene.camera = [{ frame: scene.start, zoom: 1, x: 0.5, y: 0.5 }];
  scene.description = `${shot.setup}: ${shot.intent} | v17 rough physical blocking. Event${shot.eventFrame}, musical score${shot.timingScore ?? "hold"}. Qualitative gate unverified.`;
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
