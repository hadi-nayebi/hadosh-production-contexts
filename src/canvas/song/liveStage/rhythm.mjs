export function pulseCues(project, config) {
  const r = project.rhythm;
  if (!r) return [];
  const corrected = r.status.startsWith("manually");
  const base = r.beatFrames.map((frame, i) => ({
    frame,
    strength: corrected ? 1 : r.beats?.[i]?.strength || 0,
    observed: corrected || r.beats?.[i]?.observedOnset,
  }));
  const candidates =
    config.pattern === "offbeat"
      ? base.slice(0, -1).map((b, i) => {
          const center = (b.frame + base[i + 1].frame) / 2;
          const nearby = (r.onsets || [])
            .filter((o) => Math.abs(o.frame - center) <= 3)
            .sort((a, b) => b.strength - a.strength)[0];
          return {
            frame: nearby?.frame ?? center,
            strength: nearby?.strength || 0,
            observed: !!nearby,
          };
        })
      : base;
  return candidates
    .filter(
      (b, i) => b.observed && b.strength >= 0.1 && i % (config.every || 1) === (config.phase || 0),
    )
    .map((b) => ({ ...b, frame: b.frame + (config.offsetFrames || 0) }));
}
export function pulseFrames(project, config) {
  return pulseCues(project, config).map((c) => c.frame);
}
export function rhythmOffset(project, object, frame) {
  const r = object.rhythm;
  if (!r?.enabled) return { x: 0, y: 0 };
  let pulse = 0;
  for (const cue of pulseCues(project, r)) {
    const age = frame - cue.frame,
      duration = r.decayFrames || 6;
    // One-frame attack, fast exponential settle; exactly zero outside the cue envelope.
    if (age >= 0 && age < duration) {
      const envelope = age < 1 ? age : Math.exp((-4 * (age - 1)) / (duration - 1));
      pulse = Math.max(pulse, envelope * Math.min(1, Math.sqrt(cue.strength) * (r.intensity ?? 1)));
    }
  }
  return {
    x: r.axis === "x" ? r.amplitude * pulse : 0,
    y: r.axis !== "x" ? -r.amplitude * pulse : 0,
  };
}
export function validateRhythm(project) {
  const r = project.rhythm;
  if (!r) return;
  if (
    r.sourceSha256 !== project.source.sha256 ||
    r.sourceInMs !== project.source.inMs ||
    r.sourceOutMs !== project.source.outMs ||
    !Array.isArray(r.beatFrames) ||
    r.beatFrames.length > 200 ||
    typeof r.status !== "string" ||
    !Number.isFinite(r.estimatedBpm)
  )
    throw Error("Rhythm must refer to this recording and excerpt");
  let last = -1;
  for (const f of r.beatFrames) {
    if (!Number.isInteger(f) || f < 0 || f >= project.composition.durationInFrames || f <= last)
      throw Error("Beat frames must be increasing excerpt frames");
    last = f;
  }
  for (const cue of [...(r.beats || []), ...(r.onsets || [])])
    if (
      !Number.isInteger(cue.frame) ||
      cue.frame < 0 ||
      cue.frame >= project.composition.durationInFrames ||
      !Number.isFinite(cue.strength) ||
      cue.strength < 0 ||
      cue.strength > 1
    )
      throw Error("Invalid onset strength or frame");
}
