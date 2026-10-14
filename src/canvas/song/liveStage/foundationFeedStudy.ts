import previous from "./foundationBrowserStudy";
import blocking from "./foundation-feed-blocking.json";
import { validateScene, type SceneObject } from "./scene.mjs";
const p = structuredClone(previous);
p.documentId = "full-song-foundation-v15";
p.revision = 1;
p.origin =
  "v14 plus12feed cause/consequence blocking shots; original source and scored cuts preserved. Proxies, not creative approval.";
export const feedEvents = Object.fromEntries(blocking.shots.map((s) => [s.id, s.eventFrame]));
export function feedStateAt(frame: number) {
  return {
    saved: frame >= feedEvents["feed-04"],
    ranked: frame >= feedEvents["feed-05"],
    muted: frame >= feedEvents["feed-06"],
    localChoice: frame >= feedEvents["feed-09"],
    orderingVisible: false,
  };
}
const additions: SceneObject[] = [];
for (const [index, shot] of blocking.shots.entries()) {
  const scene = p.scenes.find((s) => s.id === `foundation-v12-${shot.id}`)!;
  const local: SceneObject[] = [];
  const event = shot.eventFrame;
  function prop(
    role: string,
    kind: string,
    x: number,
    y: number,
    width: number,
    height: number,
    suggestion = "",
    enter = scene.start,
    exit = scene.end,
  ) {
    const o: SceneObject = {
      id: `v15-${shot.id}-${role}`,
      kind,
      parentId: null,
      x,
      y,
      width,
      height,
      enterFrame: enter,
      exitFrame: exit,
      timeOffset: 0,
      cue: null,
      suggestion,
      animation: { startFrame: Math.max(0, event - 18), endFrame: event },
      note: `${shot.intent} | ${shot.provenance} Original phrases ${shot.expectedPhraseIds.join(",") || "instrumental"}; ${shot.eventType} at${event}, timing score${shot.timingScore ?? "not applicable"}. No semantic or visual acceptance.`,
    };
    local.push(o);
    return o;
  }
  function hand(role: string, x: number, y: number) {
    const o = prop(role, "story-browser-hand", x - 8, y - 30, 260, 100);
    o.motion = [
      { frame: scene.start, x: 150, y: 30 },
      { frame: Math.max(scene.start + 1, event - 18), x: 0, y: 0 },
      { frame: event, x: 0, y: 0 },
    ];
    return o;
  }
  prop("bench", "story-browser-bench", 0, 0, 1280, 720);
  const behind = [4, 6, 7, 10].includes(index);
  if (behind) {
    prop("queue", "story-feed-queue", 130, 130, 1000, 365);
    for (const [i, genre] of ["friend", "shop", "garden"].entries()) {
      const ranked = index >= 6 ? [2, 0, 1][i] : [1, 2, 0][i];
      const post = prop(`post-${genre}`, "story-feed-post", 195 + i * 290, 220, 220, 145, genre);
      post.motion = [
        { frame: scene.start, x: 0, y: 0 },
        { frame: event - 18, x: 0, y: 0 },
        { frame: event, x: (ranked - i) * 290, y: 0 },
      ];
      if (
        (genre === "shop" && feedStateAt(scene.start).muted) ||
        (genre === "garden" && feedStateAt(scene.start).localChoice)
      )
        post.hidden = true;
    }
    if (index === 4) {
      const signal = prop("saved-signal", "story-feed-signal", 620, 50, 45, 45);
      signal.motion = [
        { frame: scene.start, x: 0, y: 0 },
        { frame: event - 19, x: 0, y: 125 },
      ];
    }
    if (index === 6 || index === 7) {
      const cover = prop("opaque-cover", "story-feed-cover", 410, 95, 445, 435);
      if (index === 7) {
        cover.motion = [
          { frame: scene.start, x: 0, y: 0 },
          { frame: event, x: 25, y: 0 },
        ];
        hand("inspection-hand", 820, 360);
      }
    }
  } else {
    const phone = prop("phone", "story-feed-phone", 450, 30, 340, 525);
    const phoneParts: SceneObject[] = [phone];
    const genres =
      index === 0
        ? ["friend", "shop", "garden"]
        : index === 1
          ? ["friend"]
          : index === 2
            ? ["shop", "garden"]
            : index === 3
              ? ["garden"]
              : ["garden", "friend", "shop"];
    for (const [i, genre] of genres.entries()) {
      const large = genres.length === 1;
      const item = prop(
        `post-${genre}`,
        "story-feed-post",
        470,
        105 + i * 128,
        300,
        large ? 320 : 110,
        genre,
      );
      if (genre === "shop" && index >= 8) item.hidden = true;
      if (genre === "shop" && index === 5) item.exitFrame = event + 1;
      if (genre === "friend" && index === 5)
        item.motion = [
          { frame: scene.start, x: 0, y: 0 },
          { frame: event, x: 0, y: 0 },
          { frame: scene.end - 1, x: 0, y: -128 },
        ];
      if (genre === "garden" && index === 5)
        item.motion = [
          { frame: scene.start, x: 0, y: 0 },
          { frame: event, x: 0, y: 0 },
          { frame: scene.end - 1, x: 0, y: 128 },
        ];
      if (genre === "garden" && index === 8) item.exitFrame = event + 1;
      if (genre === "garden" && index >= 9) item.hidden = true;
      if (index === 2)
        item.motion = [
          { frame: scene.start, x: 0, y: 65 },
          { frame: event, x: 0, y: -25 },
        ];
      phoneParts.push(item);
    }
    const bookmark = prop("bookmark", "story-feed-bookmark", 714, 445, 38, 46);
    bookmark.animation = { startFrame: feedEvents["feed-04"] - 1, endFrame: feedEvents["feed-04"] };
    phoneParts.push(bookmark);
    if (index === 3) hand("save-thumb", 732, 465);
    if (index === 5) {
      const mute = prop("mute", "story-feed-mute", 480, 455, 62, 52);
      phoneParts.push(mute);
      hand("mute-thumb", 513, 480);
    }
    if (index === 8) {
      const choice = prop("local-choice", "story-feed-mute", 480, 455, 62, 52);
      phoneParts.push(choice);
      hand("choice-thumb", 513, 480);
    }
    if (index === 9) {
      for (const o of phoneParts) o.x -= 185;
      hand("holding-hand", phone.x + phone.width, 430);
    }
    if (index === 0 || index === 11) {
      const motion =
        index === 0
          ? [
              { frame: scene.start, x: 390, y: 35 },
              { frame: event, x: 0, y: 0 },
            ]
          : [
              { frame: scene.start, x: 0, y: 0 },
              { frame: event, x: 170, y: 35 },
            ];
      for (const o of phoneParts) o.motion = structuredClone(motion);
      const grip = hand("carrying-hand", 790, 445);
      grip.motion = structuredClone(motion);
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
  scene.camera = [{ frame: scene.start, zoom: 1, x: 0.5, y: 0.5 }];
  scene.description = `${shot.intent} | v15 cause/consequence proxies; saved input and later queue change are separate shots. ${shot.eventType} candidate${event}; semantic/visual review pending.`;
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
