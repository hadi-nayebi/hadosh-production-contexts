import baseline from "./full-song-seed.json";
import { validateScene } from "./scene.mjs";
const p = structuredClone(baseline);
p.documentId = "full-song-toaster-contact-v1";
p.revision = 1;
p.origin =
  "Isolated toaster contact study derived from V6; source audio, earlier scenes and saved V6 drafts preserved.";
const ids = new Set(["toaster-board", "toaster-narrator"]);
p.objects = p.objects.filter((o) => !ids.has(o.id));
const components = [
  ["shadow", 420, 509, 430, 30, "contact-shadow", 4980, 5760],
  ["cord", 805, 285, 250, 235, "contact-cord", 4980, 5760],
  ["appliance", 450, 320, 380, 200, "contact-appliance", 4980, 5760],
  ["dial", 750, 430, 60, 60, "contact-dial", 4980, 5760],
  ["hand", 752, 421, 600, 135, "contact-hand", 5155, 5480],
] as const;
for (const [name, x, y, width, height, role, enterFrame, exitFrame] of components) {
  p.objects.push({
    id: `toaster-${name}`,
    kind: "story-toaster",
    parentId: null,
    x,
    y,
    width,
    height,
    enterFrame,
    exitFrame,
    cue: null,
    note: `Toaster contact study: ${name}. Independently editable; dimensions registered to the desk plane.`,
    suggestion: role,
    label: `Toaster ${name}`,
    allowOverflow: name === "hand",
  } as (typeof p.objects)[number]);
}
for (const scene of p.scenes.filter((s) => s.id.startsWith("toaster"))) {
  scene.objectIds = [
    ...scene.objectIds.filter((id) => !ids.has(id)),
    ...components.map((c) => `toaster-${c[0]}`),
  ];
  scene.description =
    "External power follows a cord to the appliance; an owner's hand turns the local dial; bread changes and pops. Supply and local control remain distinct. Close-up removes the implausibly miniature standing narrator.";
  scene.camera = [{ frame: scene.start, zoom: 1, x: 0.5, y: 0.5 }];
}
// Keep phrase timing; give each word a stable independent place near the physical action.
for (let phrase = 35; phrase <= 39; phrase++) {
  const words = p.words.filter((w) => w.id.startsWith(`lyric-${phrase}-`));
  let x = phrase === 35 ? 370 : 390;
  let y =
    phrase === 35 ? 238 : phrase === 36 ? 230 : phrase === 37 ? 250 : phrase === 38 ? 245 : 240;
  for (const w of words) {
    const o = p.objects.find((o) => o.id === w.id)!;
    const width = Math.max(30, w.text.length * 17);
    if (x + width > 1090) {
      x = 390;
      y += 43;
    }
    Object.assign(o, {
      x,
      y,
      width,
      height: 42,
      textStyle: { family: "serif", fontSize: 30, weight: 700 },
      textColor: "#f5ebd8",
      motion: [],
    });
    Object.assign(w, { x, y: y + 30, width, fontSize: 30 });
    x += width + 12;
  }
}
export default validateScene(p);
