import { projectedBounds } from "./textPlane.mjs";
import centerAsset from "../../characters/dance-center-asset.json" with { type: "json" };
import { rhythmOffset } from "./rhythm.mjs";
import { evaluateObject, ancestors } from "./scene.mjs";
export function validateViews(owner, assets, duration = 720) {
  if (
    owner.transitionFrames !== undefined &&
    (!Number.isInteger(owner.transitionFrames) ||
      owner.transitionFrames < 0 ||
      owner.transitionFrames > 30)
  )
    throw Error("Invalid image dissolve duration");
  if (!owner.views) return;
  if (!Array.isArray(owner.views) || !owner.views.length || owner.views.length > 24)
    throw Error("Invalid image views");
  const ids = new Set();
  for (const v of owner.views) {
    if (
      typeof v.id !== "string" ||
      ids.has(v.id) ||
      typeof v.name !== "string" ||
      !assets.some((a) => a.id === v.assetId)
    )
      throw Error("Unknown asset or duplicate view");
    for (const rect of [v.rect, v.aperture].filter(Boolean))
      if (
        ![rect.x, rect.y, rect.width, rect.height].every(Number.isFinite) ||
        rect.width <= 0 ||
        rect.height <= 0
      )
        throw Error("Invalid view registration");
    if (v.rig) {
      const r = v.rig;
      if (
        r.floorAnchor &&
        (![r.floorAnchor.x, r.floorAnchor.y].every((n) => Number.isFinite(n) && n >= 0 && n <= 1) ||
          !Number.isFinite(r.bodyAspect) ||
          r.bodyAspect < 0.5 ||
          r.bodyAspect > 3)
      )
        throw Error("Invalid floor registration");
      if (
        !assets.some((a) => a.id === r.headAssetId) ||
        !Number.isFinite(r.headRatio) ||
        r.headRatio < 0.2 ||
        r.headRatio > 1 ||
        ![r.bodyAnchor?.x, r.bodyAnchor?.y, r.headAnchor?.x, r.headAnchor?.y].every(
          (n) => Number.isFinite(n) && n >= 0 && n <= 1,
        )
      )
        throw Error("Invalid character registration");
    }
    for (const a of Object.values(v.anchors || {}))
      if (![a.x, a.y].every((n) => Number.isFinite(n) && n >= 0 && n <= 1))
        throw Error("Invalid normalized view anchor");
    ids.add(v.id);
  }
  if (!ids.has(owner.defaultView)) throw Error("Missing default view");
  let last = -1;
  for (const cue of owner.viewCues || []) {
    if (
      !Number.isInteger(cue.frame) ||
      cue.frame < 0 ||
      cue.frame >= duration ||
      cue.frame <= last ||
      !ids.has(cue.viewId)
    )
      throw Error("Invalid ordered view cue");
    last = cue.frame;
  }
}
export function viewAt(owner, frame) {
  if (!owner.views) return null;
  const cue = (owner.viewCues || []).filter((c) => c.frame <= frame).at(-1);
  return owner.views.find((v) => v.id === (cue?.viewId || owner.defaultView)) || null;
}
export function setViewCue(project, id, frame, viewId) {
  const mutate = (owner) => ({
    ...owner,
    viewCues: [...(owner.viewCues || []).filter((c) => c.frame !== frame), { frame, viewId }].sort(
      (a, b) => a.frame - b.frame,
    ),
  });
  const scene = project.scenes.find((s) => s.id === id),
    object = project.objects.find((o) => o.id === id);
  if (!scene && !object) throw Error("Select a setting or component");
  const owner = mutate(scene || object);
  validateViews(owner, project.assets || [], project.composition.durationInFrames);
  return {
    ...project,
    revision: project.revision + 1,
    scenes: project.scenes.map((s) => (s.id === id ? owner : s)),
    objects: project.objects.map((o) => (o.id === id ? owner : o)),
  };
}
export function validateAssets(assets = []) {
  const ids = new Set();
  for (const a of assets) {
    if (
      typeof a.id !== "string" ||
      ids.has(a.id) ||
      typeof a.path !== "string" ||
      !/^\/scene-assets\/[a-zA-Z0-9_.-]+$/.test(a.path) ||
      !a.libraryId ||
      !a.sha256 ||
      !Number.isFinite(a.width) ||
      !Number.isFinite(a.height) ||
      a.width <= 0 ||
      a.height <= 0
    )
      throw Error("Invalid local image provenance");
    ids.add(a.id);
  }
  return assets;
}

export function cueFrame(p, id, frame) {
  return frame - ancestors(p, id).reduce((sum, o) => sum + o.timeOffset, 0);
}
export function imagePose(p, id, frame, applyPlane = true) {
  let n = evaluateObject(p, id);
  const keys = n.motion || [];
  if (keys.length) {
    const a = [...keys].reverse().find((k) => k.frame <= frame) || keys[0],
      b = keys.find((k) => k.frame > a.frame) || a;
    let t =
      b.frame === a.frame ? 0 : Math.max(0, Math.min(1, (frame - a.frame) / (b.frame - a.frame)));
    t = t * t * (3 - 2 * t);
    n = { ...n, x: n.x + a.x + (b.x - a.x) * t, y: n.y + a.y + (b.y - a.y) * t };
  }

  for (const owner of [n, ...ancestors(p, id)]) {
    const d = rhythmOffset(p, owner, frame);
    n = { ...n, x: n.x + d.x, y: n.y + d.y };
  }
  if (n.screenFor) {
    const device = p.objects.find((o) => o.id === n.screenFor);
    const aperture = viewAt(device, cueFrame(p, device.id, frame))?.aperture;
    if (aperture) {
      const pose = imagePose(p, device.id, frame),
        scale = pose.scale || 1;
      n = {
        ...n,
        x: pose.x + aperture.x * scale,
        y: pose.y + aperture.y * scale,
        width: aperture.width * scale,
        height: aperture.height * scale,
      };
    }
  }
  if (n.textAnchor) {
    const a = n.textAnchor,
      b = imagePose(p, a.objectId, frame);
    n = { ...n, x: b.x + a.dx * (b.scale || 1), y: b.y + a.dy * (b.scale || 1) };
  }
  const plane=n.textPlane||n.contentPlane;
  if (plane && applyPlane) return { ...n, ...projectedBounds(plane, n) };
  if (!n.attachment) return n;
  const a = n.attachment,
    setting = p.scenes.find((s) => s.id === a.settingId),
    anchor = setting && viewAt(setting, frame)?.anchors?.[a.anchor];
  if (!anchor) return n;
  const d = rhythmOffset(p, n, frame);
  return { ...n, x: anchor.x * 1280 + a.offsetX + d.x, y: anchor.y * 720 + a.offsetY + d.y };
}

// Repeat a four-step motif, returning to the opening stance; reverse the lead at
// sung phrase boundaries. Only observed beat candidates trigger a pose change.
export function setDancePattern(project, id) {
  const owner = project.objects.find((o) => o.id === id);
  if (
    !owner ||
    ![2, 3].includes(owner.views?.length) ||
    !owner.views.every((v) => v.rig?.floorAnchor)
  )
    throw Error("Choose a registered dance pose collection");
  const views = owner.views.some((v) => v.id === "dance-center")
    ? owner.views
    : [
        ...owner.views,
        {
          id: "dance-center",
          name: "Dance center · deadpan",
          assetId: centerAsset.id,
          rig: {
            ...owner.views[0].rig,
            bodyAnchor: { x: 524 / 1024, y: 242 / 1536 },
            floorAnchor: { x: 0.5, y: 1411 / 1536 },
          },
        },
      ];
  const pose = evaluateObject(project, id);
  const boundaries = project.phrases
    .map((p) =>
      Math.min(...project.words.filter((w) => p.wordIds.includes(w.id)).map((w) => w.enterFrame)),
    )
    .sort((a, b) => a - b);
  const beats = (project.rhythm?.beats || []).filter(
    (b) => b.observedOnset && b.strength >= 0.1 && b.frame >= pose.enter && b.frame < pose.exit,
  );
  let lastPhrase = -2,
    step = 0;
  const viewCues = beats.map((b) => {
    const phrase = boundaries.filter((f) => f <= b.frame).length - 1;
    if (phrase !== lastPhrase) {
      step = 0;
      lastPhrase = phrase;
    }
    const pattern = phrase % 2 === 0 ? [0, 2, 1, 2, 0, 0, 2, 2] : [1, 2, 0, 2, 1, 1, 2, 2];
    return { frame: b.frame, viewId: views[pattern[step++ % pattern.length]].id };
  });
  return {
    ...project,
    revision: project.revision + 1,
    assets: project.assets.some((a) => a.id === centerAsset.id)
      ? project.assets
      : [...project.assets, centerAsset],
    objects: project.objects.map((o) => (o.id === id ? { ...o, views, viewCues } : o)),
  };
}
