import previous from "./foundationFeedStudy";
import blocking from "./foundation-harness-blocking.json";
import { validateScene, type SceneObject } from "./scene.mjs";
const p = structuredClone(previous);
p.documentId = "full-song-foundation-v16";
p.revision = 2;
p.origin =
  "v15 plus twenty harness rough setups with persistent task state. Source words and cut evidence unchanged. No creative acceptance.";
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
      id: `v16-${shot.id}-${role}`,
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
      note: `${shot.setup}: ${shot.intent} | ${shot.provenance} | phrases:${shot.expectedPhraseIds.join(",") || "instrumental"}; event:${shot.eventFrame}; score:${shot.timingScore ?? "hold, unscored"}. Qualitative review pending.`,
    };
    local.push(o);
    return o;
  }
  function hand(x: number, y: number) {
    const o = prop("acting-hand", "story-browser-hand", x - 8, y - 30, 260, 100);
    o.allowOverflow = true; // Forearm continues beyond the edge; fingertip remains on the control.
    o.motion = [
      { frame: scene.start, x: 110, y: 60 },
      { frame: Math.max(scene.start + 1, shot.eventFrame - 1), x: 0, y: 0 },
      { frame: scene.end - 1, x: 0, y: 0 },
    ];
    return o;
  }
  prop("bench", "story-browser-bench", 0, 0, 1280, 720);
  const paperView = [2, 8, 9, 12].includes(i),
    wide = [0, 7, 18, 19].includes(i);
  const rules = [10, 11, 12, 13, 14, 15, 17].includes(i);
  const mode = rules ? "rules" : i === 5 ? "calendar" : i === 9 ? "instruction" : "page";
  const monitor = prop(
    "monitor",
    "story-task-monitor",
    wide ? 460 : paperView ? 700 : 125,
    wide ? 95 : paperView ? 80 : 30,
    wide ? 540 : paperView ? 440 : 940,
    wide ? 380 : paperView ? 330 : 530,
    mode,
  );
  // Distinct blocking compositions, not zoom labels on an unchanged setup.
  const views: Record<number, [number, number, number, number]> = {
    1: [350, 55, 790, 500],
    3: [90, 20, 1100, 580],
    4: [300, 50, 850, 520],
    5: [170, 60, 900, 520],
    6: [50, 10, 1080, 600],
    10: [120, 70, 820, 480],
    11: [350, 25, 880, 560],
    13: [65, 25, 1100, 570],
    14: [310, 80, 850, 490],
    15: [80, 20, 1060, 580],
    16: [300, 45, 900, 530],
    17: [90, 10, 1080, 590],
  };
  if (views[i]) [monitor.x, monitor.y, monitor.width, monitor.height] = views[i];
  if ([1, 4, 10, 14, 16].includes(i))
    prop("shoulder", "story-task-person", 0, 250, 300, 440, "foreground");
  prop(
    "keyboard",
    "story-task-keyboard",
    wide ? 520 : paperView ? 750 : 300,
    wide ? 460 : paperView ? 440 : 505,
    wide ? 420 : paperView ? 320 : 600,
    75,
  );
  const paper = prop(
    "retained-paper",
    "story-task-paper",
    paperView ? 110 : wide ? 210 : 1020,
    paperView ? 150 : wide ? 335 : 330,
    paperView ? 530 : wide ? 240 : 220,
    paperView ? 365 : wide ? 175 : 180,
    i >= 8 ? "instruction" : "source",
  );
  if (i === 2) {
    paper.motion = [
      { frame: scene.start, x: -400, y: 0 },
      { frame: shot.eventFrame - 1, x: 0, y: 0 },
    ];
    const h = hand(paper.x + paper.width - 20, paper.y + 150);
    h.motion = structuredClone(paper.motion);
  } else if (!["continuity-hold"].includes(shot.eventType) && i > 0 && i < 18)
    hand(
      paperView ? paper.x + paper.width - 40 : monitor.x + monitor.width * 0.82,
      paperView ? paper.y + paper.height * 0.75 : monitor.y + monitor.height * 0.67,
    );
  if (wide) {
    const person = prop("person", "story-task-person", 20, 110, 360, 700, "foreground");
    person.allowOverflow = true;
    if (i === 0)
      person.motion = [
        { frame: scene.start, x: -240, y: 0 },
        { frame: shot.eventFrame, x: 0, y: 0 },
      ];
    if (i === 19)
      person.motion = [
        { frame: scene.start, x: 0, y: 0 },
        { frame: shot.eventFrame, x: 550, y: 0 },
      ];
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
  scene.description = `${shot.setup}: ${shot.intent} | v16 persistent task-state rough blocking. ${shot.eventType} ${shot.eventFrame}; musical score ${shot.timingScore ?? "not applicable"}. Named viewpoint not camera certification; full review pending.`;
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
