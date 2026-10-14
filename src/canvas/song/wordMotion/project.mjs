import { validateArrangement } from "./arrangement.mjs";
export const AUDIO_HASH = "f47512d5ec38dd1030630e1f7ac343b4734516ee84f3e184191529014f52bf67";
export function validateProject(p) {
  const fail = (s) => {
    throw new Error(`Invalid word project: ${s}`);
  };
  if (!p || p.schema !== "canvas-word-motion-v1") fail("schema");
  if (
    p.source?.sha256 !== AUDIO_HASH ||
    ![0, 48100, 36300].includes(p.source.inMs) ||
    !(p.source.outMs === 72100 || (p.source.inMs === 0 && p.source.outMs === 226824))
  )
    fail("wrong source or excerpt");
  if (
    p.composition?.width !== 1280 ||
    p.composition.height !== 720 ||
    p.composition.fps !== 30 ||
    !Number.isInteger(p.composition.durationInFrames) ||
    p.composition.durationInFrames < 1 ||
    p.composition.durationInFrames > 18000 ||
    (!p.arrangement &&
      p.composition.durationInFrames !== Math.round(((p.source.outMs - p.source.inMs) * 30) / 1000))
  )
    fail("composition");
  validateArrangement(p);
  if (!Number.isInteger(p.revision) || p.revision < 1) fail("revision");
  if (
    !Array.isArray(p.words) ||
    p.words.length < 1 ||
    p.words.length > (p.documentId?.startsWith("full-song-") ? 700 : 200) ||
    !Array.isArray(p.phrases)
  )
    fail("words/phrases");
  const ids = new Set();
  for (const w of p.words) {
    if (typeof w.id !== "string" || ids.has(w.id)) fail("duplicate word");
    ids.add(w.id);
    if (
      typeof w.text !== "string" ||
      !w.text.trim() ||
      w.text.length > 35 ||
      typeof w.originalText !== "string"
    )
      fail("text");
    if (
      !Number.isInteger(w.enterFrame) ||
      !Number.isInteger(w.exitFrame) ||
      w.enterFrame < 0 ||
      w.exitFrame > p.composition.durationInFrames ||
      w.exitFrame <= w.enterFrame
    )
      fail("timing");
    if (
      ![w.x, w.y, w.width, w.fontSize, w.sourceStart, w.sourceEnd, w.confidence].every(
        Number.isFinite,
      )
    )
      fail("nonfinite value");
    if (
      w.width < 20 ||
      w.width > 1100 ||
      w.fontSize < 20 ||
      w.fontSize > 70 ||
      w.x < 20 ||
      w.x + w.width > 1260 ||
      w.y < w.fontSize + 25 ||
      w.y > 640
    )
      fail("position/size");
    if (
      !["asr-draft", "edited"].includes(w.timingStatus) ||
      !["asr-draft", "uncertain", "edited"].includes(w.textStatus)
    )
      fail("verification status");
  }
  const phraseIds = new Set();
  const assigned = new Set();
  for (const phrase of p.phrases) {
    if (
      typeof phrase.id !== "string" ||
      phraseIds.has(phrase.id) ||
      typeof phrase.label !== "string" ||
      !Array.isArray(phrase.wordIds) ||
      !phrase.wordIds.length
    )
      fail("phrase");
    phraseIds.add(phrase.id);
    for (const id of phrase.wordIds) {
      if (
        !ids.has(id) ||
        assigned.has(id) ||
        p.words.find((w) => w.id === id).phraseId !== phrase.id
      )
        fail("phrase membership");
      assigned.add(id);
    }
  }
  if (assigned.size !== ids.size) fail("unassigned words");
  return p;
}
export const frameFromSource = (seconds) => Math.round((seconds - 48.1) * 30);
export const visibleAt = (w, frame) => frame >= w.enterFrame && frame < w.exitFrame;
export function wordPose(w, frame) {
  const age = frame - w.enterFrame;
  return {
    visible: visibleAt(w, frame),
    dy: age < 0 ? -22 : age < 4 ? -22 * Math.pow(1 - age / 4, 2) : 0,
    scale: age >= 0 && age < 4 ? 1.07 - age * 0.0175 : 1,
  };
}
export function reviseWord(p, id, patch) {
  const next = {
    ...p,
    revision: p.revision + 1,
    words: p.words.map((w) =>
      w.id === id
        ? {
            ...w,
            ...patch,
            timingStatus: "enterFrame" in patch || "exitFrame" in patch ? "edited" : w.timingStatus,
            textStatus: "text" in patch && patch.text !== w.text ? "edited" : w.textStatus,
          }
        : w,
    ),
  };
  return validateProject(next);
}
export function phraseRange(p, id) {
  const words = p.words.filter((w) => w.phraseId === id);
  return [Math.min(...words.map((w) => w.enterFrame)), Math.max(...words.map((w) => w.exitFrame))];
}
export function clampWord(w, patch) {
  const next = { ...w, ...patch };
  next.enterFrame = Math.max(0, Math.min(719, Math.round(next.enterFrame)));
  next.exitFrame = Math.max(next.enterFrame + 1, Math.min(720, Math.round(next.exitFrame)));
  next.x = Math.max(20, Math.min(1260 - next.width, Math.round(next.x)));
  next.y = Math.max(next.fontSize + 25, Math.min(640, Math.round(next.y)));
  return next;
}
