// Explicit timeline mapping; null sourceStartFrame means authored silence, not inferred music.
export function validateArrangement(p) {
  const a = p.arrangement;
  if (!a) return;
  if (!Array.isArray(a) || !a.length || a.length > 40) throw Error("Invalid arrangement");
  let boundary = 0;
  for (const clip of a) {
    if (
      clip.media &&
      (!/^\/previews\/[a-zA-Z0-9_-]+\.(mp3|wav|m4a)$/.test(clip.media.path) ||
        !/^[a-f0-9]{64}$/.test(clip.media.sha256) ||
        !Number.isInteger(clip.media.durationFrames) ||
        clip.media.durationFrames <= 0 ||
        clip.sourceStartFrame === null)
    )
      throw Error("Invalid arrangement media");
    if (
      ![clip.startFrame, clip.endFrame].every(Number.isInteger) ||
      clip.startFrame !== boundary ||
      clip.endFrame <= clip.startFrame ||
      clip.endFrame > p.composition.durationInFrames ||
      typeof clip.label !== "string" ||
      !clip.label ||
      clip.label.length > 300 ||
      (clip.sourceStartFrame !== null &&
        (!Number.isInteger(clip.sourceStartFrame) ||
          clip.sourceStartFrame < 0 ||
          clip.sourceStartFrame + clip.endFrame - clip.startFrame >
            (clip.media?.durationFrames ?? Math.round((p.source.outMs * 30) / 1000))))
    )
      throw Error("Invalid arrangement clip");
    boundary = clip.endFrame;
  }
  if (boundary !== p.composition.durationInFrames || p.source.inMs !== 0)
    throw Error("Invalid arrangement coverage");
}
export function sourceFrameAt(p, frame) {
  if (!p.arrangement) return frame;
  const clip = p.arrangement.find((c) => frame >= c.startFrame && frame < c.endFrame);
  return !clip || clip.sourceStartFrame === null
    ? null
    : clip.sourceStartFrame + frame - clip.startFrame;
}

export function mediaPathAt(p, frame) {
  return (
    p.arrangement?.find((c) => frame >= c.startFrame && frame < c.endFrame)?.media?.path ?? null
  );
}
