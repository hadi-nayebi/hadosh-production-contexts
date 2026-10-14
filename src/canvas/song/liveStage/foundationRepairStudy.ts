import previous from "./foundationFinaleStudy";
import { validateScene } from "./scene.mjs";
const p = structuredClone(previous);
p.documentId = "full-song-foundation-v19";
p.revision = 1;
p.origin =
  "v18 audit repairs: visible proposed edit and approval, fully framed bread grip, power contact carried across cut. Whole visual foundation still fails; no polish or creative acceptance.";
for (const o of p.objects) {
  if (/^v16-harness-(15|16|17|18|19)-monitor$/.test(o.id)) {
    o.suggestion = "plan-review-v19";
    o.note +=
      " v19: show a real heading replacement proposal, choose local scope, edit the preview, then commit only at confirmation. Publishing remains excluded. Agent interpretation, not lyric text.";
  }
  // Apply one shared camera-scale transform to the full rig, preserving attachment.
  if (o.id.startsWith("v17-toaster-02-") && !o.id.endsWith("bench")) {
    o.x = 128 + o.x * 0.8;
    o.y = 80 + o.y * 0.8;
    o.width *= 0.8;
    o.height *= 0.8;
    if (o.motion) o.motion = o.motion.map((k) => ({ ...k, x: k.x * 0.8, y: k.y * 0.8 }));
  }
  if (/^v17-toaster-0[34]-/.test(o.id) && o.kind.startsWith("story-appliance-")) {
    o.suggestion = "power-cut-v19";
    o.note +=
      " v19: contact5253, power5254, response persists across cut5255. Observed beat175.15s; original lyric preserved.";
  }
  if (["v17-toaster-03-plug", "v17-toaster-03-plug-hand"].includes(o.id))
    o.motion = [
      { frame: 5169, x: -140, y: 0 },
      { frame: 5253, x: 0, y: 0 },
    ];
  if (/^v16-harness-(15|16|17|18)-retained-paper$/.test(o.id)) o.hidden = true;
  if (/^v16-harness-(15|17)-shoulder$/.test(o.id)) {
    o.suggestion = "back-v19";
    o.x = 0;
    o.y = 100;
    o.width = 440;
    o.height = 900;
    o.allowOverflow = true;
  }
  // Each gesture addresses its actual control: scope, preview heading, confirmation.
  const action = /^v16-harness-(16|17|18)-acting-hand$/.exec(o.id);
  if (action) {
    const monitor = p.objects.find((item) => item.id === `v16-harness-${action[1]}-monitor`)!;
    const target =
      action[1] === "16"
        ? [0.24, 376 / 570]
        : action[1] === "17"
          ? [0.69, 250 / 570]
          : [0.83, 386 / 570];
    o.x = monitor.x + monitor.width * target[0] - 8;
    o.y = monitor.y + monitor.height * target[1] - 30;
  }
}
for (const scene of p.scenes) {
  if (/harness-(15|16|17|18|19)$/.test(scene.id))
    scene.description +=
      " v19: actual proposed heading replacement; choice/edit affect preview, confirmation applies local save. Camera/story unity still unaccepted.";
  if (scene.id.endsWith("toaster-02"))
    scene.description +=
      " v19: reframe complete insertion rig to80%scale with visible approach to include the bread/grip approach.";
  if (scene.id.endsWith("toaster-03"))
    scene.description +=
      " v19: power event5254 with result carried across the next cut; previous5212 retained in v18 history.";
}
export default validateScene(p);
