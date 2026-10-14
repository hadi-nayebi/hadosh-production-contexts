import blocking from "./foundation-opening-blocking.json";
import previous from "./foundationSourceStudy";
import { validateScene, type SceneObject } from "./scene.mjs";
const p = structuredClone(previous);
p.documentId = "full-song-foundation-v13";
p.revision = 1;
p.origin =
  "v12 scored sequence with opening action blocking; original source, cut frames and prior versions preserved. Detail gate locked.";
const targets = p.scenes.slice(0, 8);
const captions = p.objects.filter((o) => o.kind === "lyric-block");
const additions: SceneObject[] = [];
function prop(
  id: string,
  kind: string,
  x: number,
  y: number,
  width: number,
  height: number,
  enterFrame: number,
  exitFrame: number,
  note: string,
): SceneObject {
  const o: SceneObject = {
    id,
    kind,
    parentId: null,
    x,
    y,
    width,
    height,
    enterFrame,
    exitFrame,
    timeOffset: 0,
    cue: null,
    note,
    suggestion: "Opening foundation blocking; visual quality and music listening unverified.",
  };
  additions.push(o);
  return o;
}
// Authored blocking intention: room -> physical handle -> passage -> tracked Earth.
// Keep the measured scene boundary clock unchanged. No asset-generation or polish.
const passage = prop(
  "v13-window-passage",
  "story-window-passage",
  0,
  0,
  1280,
  720,
  298,
  377,
  "Shot invitation-04: window frame passes the camera after the handle turns. Geometry is an explicit rough passage proxy, not a finished window.",
);
passage.animation = { startFrame: 298, endFrame: 376 };
const stars = prop(
  "v13-space-field",
  "story-space-field",
  0,
  0,
  1280,
  720,
  298,
  724,
  "Invitation-04–08: three depth layers move at different speeds, establishing travel instead of a static planet diagram. Shared song clock preserves continuity across cuts.",
);
const earth = prop(
  "v13-earth",
  "image",
  420,
  140,
  440,
  427,
  298,
  724,
  "Invitation-04–08: same retained Earth travels right while foreground stars pass left. Sphere rotation remains an unmet requirement; no claim that translation is rotation.",
);
earth.views = [{ id: "earth", name: "Retained Earth", assetId: "earth-base-v1" }];
earth.defaultView = "earth";
earth.motion = [
  { frame: 298, x: -70, y: -15 },
  { frame: 724 - 1, x: 70, y: 15 },
];
const travel = (f: number) => {
  const t = Math.max(0, Math.min(1, (f - 298) / (723 - 298)));
  const e = t * t * (3 - 2 * t);
  return { x: -70 + 140 * e, y: -15 + 30 * e };
};
for (const [index, event] of blocking.contacts.entries()) {
  const name = event.symbol,
    start = [444, 545, 623][index],
    contact = event.frame;
  const capsule = prop(
    `v13-capsule-${name}`,
    "story-physical-capsule",
    75,
    110,
    82,
    30,
    start,
    contact + 1,
    `Invitation upgrade ${name}: the capsule crosses space and contacts the moving Earth at frame${contact}. The capability appears only after contact. Rough blocking, not surface-detail approval.`,
  );
  capsule.animation = { startFrame: start, endFrame: contact };
  const at = travel(contact);
  // Contact is the planet's upper-left surface; the capsule tip reaches that surface.
  capsule.motion = [
    { frame: start, x: 0, y: 0 },
    { frame: contact, x: 420 + at.x + 70 - 75 - 82, y: 140 + at.y + 75 - 110 - 15 },
  ];
  const capability = prop(
    `v13-capability-${name}`,
    `capability-${name}`,
    420,
    140,
    440,
    427,
    contact + 1,
    724,
    `Visible consequence of ${name} capsule contact at${contact}; same geometry and motion as the retained Earth.`,
  );
  capability.motion = structuredClone(earth.motion);
}
const grip = prop(
  "v13-window-grip",
  "story-window-grip",
  665,
  245,
  190,
  90,
  186,
  298,
  "Invitation-03: a rough hand grips and turns the latch before the next shot passes through the window. No unsupported claim of a registered finished character arm.",
);
grip.animation = { startFrame: 216, endFrame: 263 };
const sash = p.objects.find((o) => o.id === "invitation-03:inside-window-sash");
if (sash) sash.animation = { startFrame: 264, endFrame: 297 };
for (const [i, s] of targets.entries()) {
  if (i === 0)
    s.camera = [
      { frame: s.start, zoom: 1, x: 0.5, y: 0.5 },
      { frame: s.end - 1, zoom: 1.7, x: 0.56, y: 0.43 },
    ];
  if (i === 2) {
    s.objectIds.push(grip.id);
    s.camera = [{ frame: s.start, zoom: 1.65, x: 0.6, y: 0.38 }];
  }
  if (i >= 3) {
    delete s.views;
    delete s.viewCues;
    delete s.defaultView;
    s.assetStatus = "illustrated";
    s.objectIds = [
      stars.id,
      earth.id,
      ...additions
        .filter((o) => o.id.startsWith("v13-capsule-") || o.id.startsWith("v13-capability-"))
        .map((o) => o.id),
      ...(i === 3 ? [passage.id] : []),
      ...captions.filter((o) => o.enterFrame < s.end && o.exitFrame > s.start).map((o) => o.id),
    ];
    const cameras: [[number, number, number], [number, number, number]][] = [
      [
        [1, 0.5, 0.5],
        [1, 0.5, 0.5],
      ],
      [
        [1, 0.5, 0.5],
        [1.12, 0.54, 0.49],
      ],
      [
        [1.6, 0.4, 0.37],
        [1.5, 0.51, 0.43],
      ],
      [
        [1.35, 0.65, 0.5],
        [1.5, 0.59, 0.47],
      ],
      [
        [1.15, 0.53, 0.48],
        [1.85, 0.64, 0.44],
      ],
    ];
    const [a, b] = cameras[i - 3];
    s.camera = [
      { frame: s.start, zoom: a[0], x: a[1], y: a[2] },
      { frame: s.end - 1, zoom: b[0], x: b[1], y: b[2] },
    ];
  }
  s.description +=
    " | v13 opening blocking: physical latch/passage, shared moving Earth, parallax and contact-before-capability. Remaining gaps: host reach, sphere rotation, changed hemisphere and browser-entry match.";
}
p.objects = [
  ...p.objects.filter((o) => o.kind !== "lyric-block"),
  ...additions.filter((o) => o.id !== passage.id),
  passage,
  ...captions,
];
const used = new Set(p.scenes.flatMap((s) => s.objectIds));
p.objects = p.objects.filter((o) => used.has(o.id));
export default validateScene(p);
