# Checkpoint — attempt 10, stage 1 (delta form)

Predecessor checkpoint: `checkpoint-attempt10-stage0.html` (byte-identical to the attempt-9 final source, sha256 `244a0c2c2f8a229bca3792d3e055cdafd1dee52a77503c2d09592f3c90f19572`).
Stage-1 source: `recreation.html` sha256 `1da3df6afdcebe3d93e3b28cb2a8de45fe081010e111f80e141ba5c1c91f3060`.
Reconstruction: apply the three edits below, in order, to the stage-0 checkpoint copy; the result hashes to the stage-1 source hash above.

Form note: the plan's checkpoint form is a full content copy per stage. Exec-side copies fail under the measured write fault (EPERM after any read — re-verified at Stage 0), so a full copy costs a complete file-tool transcription (~113 KB) per stage. Stages 1–6 file this delta form instead (exact old→new text per edit; reconstruction is byte-exact and hash-verifiable); full content copies stand at Stage 0 and Stage 7. This is a deviation from the literal checkpoint form, filed openly for the Verify census.

## Edit 1 — play() resume with a deferred apply outstanding (engine)
Old:
```
    if (pendingApply) { requestAnimationFrame(flushPending); return; }
    tick(generation);
```
New:
```
    if (pendingApply) {
      /* resume with a deferred apply outstanding: queue the flush AND
         arm the deadline timer for the current phase's remaining time
         as part of the same act — the flush applies the step but arms
         nothing, so a resume that only queues it leaves the sequence
         with no live deadline once the flush has run */
      requestAnimationFrame(flushPending);
      const phR = phaseAt(cfg, pausedElapsed);
      timer = setTimeout(function () { tick(generation); },
        schedulerDelay(phR.remainingMs, 0));
      return;
    }
    tick(generation);
```

## Edit 2 — applyStep captures the scheduled cycle key at entry
Old:
```
  function applyStep(s, inPhaseMs, opts) {
    opts = opts || {};
    activeStep = s;
```
New:
```
  function applyStep(s, inPhaseMs, opts) {
    opts = opts || {};
    /* the scheduled cycle key of this entry: every caller sets
       lastCycleIdx to the due phase's cycle before applying, so the
       entry's own key is captured here and carried through the dive
       re-derivation and its skip records */
    const schedCycle = lastCycleIdx;
    activeStep = s;
```

## Edit 3 — dive re-derivation compares the cycle; skip record carries the scheduled key
Old:
```
      const ph2 = phaseAt(cfg, currentElapsed());
      if (ph2.step.phase !== "dive" || ph2.step.appearance !== s.appearance) {
        if (!opts.rederived) {
          skippedLog.push({ type: "skipped", phase: "dive", appearance: s.appearance, cycle: ph2.cycleIndex, endpointPresented: false, via: "entry-render" });
```
New:
```
      const ph2 = phaseAt(cfg, currentElapsed());
      if (ph2.step.phase !== "dive" || ph2.step.appearance !== s.appearance || ph2.cycleIndex !== schedCycle) {
        if (!opts.rederived) {
          skippedLog.push({ type: "skipped", phase: "dive", appearance: s.appearance, cycle: schedCycle, dueCycle: ph2.cycleIndex, endpointPresented: false, via: "entry-render" });
```
