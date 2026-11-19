# S6 — Runtime-sequence evidence (LAST construction checkpoint) · T02 attempt 3

Construction (the stage's only changes): the resize handler now runs
layout derivation AND a re-render at the current elapsed time on both
the paused and playing paths; the exposed elapsed-time function clamps
at the total duration. Restart-always-resumes is retained as named
behaviour (it matches the comparison page's restart semantics).

Three probes, filed separately (per the cure's amended form):
1. **Sequence suite** (group S6 on the final source): **12 PASS,
   0 FAIL** — seek→seek→restart→seek and play/pause/restart
   interleavings assert after each step: single active loop (loop
   starts increment only on a genuine start), displayed count ==
   countAtMs(t), visible window == the last effectiveVisible rows;
   restart while paused resumes and renders count 0.
2. **Paused-resize, BEFORE/AFTER** at a width pair whose filed layout
   outputs differ in effectiveVisible (720 px → 13 · 240 px → 8 on the
   final geometry). BEFORE (S4 checkpoint, old handler): paused at
   count 37, resize 720→240 leaves 9 rows visible against a layout
   window of 6 (S4 geometry) — the visible window is STALE; the same
   staleness on the S5 source: 13 visible against a layout window of
   8. AFTER (this stage): 8 visible == layout window 8, count
   unchanged at 37. The recompute effect is isolated to this change.
3. **Endpoint clamping** (its own probe, separate from resize and the
   sequence suite): BEFORE — playing past the duration leaves the
   exposed elapsed value at 20000 ms against an 8000 ms duration.
   AFTER — seek beyond duration, play past duration, and restart from
   beyond duration each assert the exposed value clamped at 8000 ms
   (or 0 after restart) with the rendered count correct.

Stub limits (printed, not hidden): all runtime evidence runs on a DOM
shim that executes the file's own interface and style state; it cannot
execute layout painting, glyph rasterisation, or compositor behaviour
— those behaviours file as UNVERIFIED-BY-STUB beside PIXEL-UNVERIFIED.

Checkpoint: S6-source.html sha256 0e54046f9b06a836e6909c662bb4ebec6d6212d35f670ec348780bd35e8d6b2d
(== the final working source at this stage's close).
Effect record: runtime-sequence class — PASS per probe above, with the
resize and clamp effects isolated by the before/after pair.
