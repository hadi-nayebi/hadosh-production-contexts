# T192 — Plan Amendment, Cycle 035 (jev-plan-exit REVISE + jev-observe-exit charges, APPLIED before any build script)

Filed FIRST, before any build script was written (A9.2). Source charges: wave RUN.md §2b (Cycle 035) — T192 amendment verbatim substance. The Cycle-034 item record (`runs/2026-11-18-cycle-034-wave-31/item-T192-observe-plan.md`) is NOT retro-edited; this amendment governs Execute.

## 1. CLOCK CORRECTED
- Build zero stands: recreation 0 ms ≡ source/segment 22.0 s. Segment cut 21.5–27.5 s; comparison mapping recreationMs = videoMs − 500 (videoMs = segment.mp4 currentTime×1000, whose 0 ≡ source 21.5 s).
- The filed Plan's formationStartMs = 500 was 500 ms early: segment 23.0 s is recreation 1,000 ms, not 500 ms.
- CORRECTED: `time.formationStartMs = 1000`.
- Corrected census anchors (recreation ms, CONFIG-derived):
  | Census (segment) | Corrected anchor | CONFIG expression | Prescribed state |
  |---|---|---|---|
  | 23.0 clusters + line | 1,000 | time.formationStartMs | Line rendered (fade complete); top-band borrowed fraction ∈ (0.2, 0.6) |
  | 23.5 front mid | 1,500 | formationStartMs + frontSweepMs×0.5 + (formationDurationMs − frontSweepMs)×0.5 = 1000+350+150 | Rows above front occupancy ≥0.95; downward-moving particles present below front |
  | 24.0 formed | 2,000 | formationStartMs + formationDurationMs | Occupancy ≥0.98; residual specks allowed |
  | 24.5 clean hold | 2,500 | formationStartMs + formationDurationMs + 500 | ALL visible loose particles = 0 above threshold (see §3 HOLD opacities) |
  | 26.0 hold standing | 4,000 | time.exitStartMs | Occupancy ≥0.98 |
  | 27.0 exited | 5,000 | exitStartMs + exitDurationMs | Occupancy ≤0.02 |
- Recomputed checks at the actual anchors:
  - FRONT check moves to 1,500 ms (was 1,000): front position = formationStart + frontSweep×progress; rows above front ≥0.95 occupied, rain present below.
  - LINE-ENTRANCE check moves to 1,000 ms (was 500): line fade window is [formationStartMs − line.fadeMs, formationStartMs] = [700, 1000]; at 1,000 ms line opacity = 1.0 (crisp, census-matching). Before 700 ms line opacity = 0 in the build (D1: build opens black; the original's 22.0–22.5 signer tail is not this technique).
  - CLEAN-HOLD check moves to 2,500 ms (was 2,000): at 2,500 ms the build is 500 ms into HOLD; every loose class renders at its HOLD opacity (§3) = 0.0, so visible loose count = 0.

## 2. DURATION-SWAP CHECKPOINT MOVEMENT (named, binding on the A11 swap pass)
Swap exercised: time.formationDurationMs 1000 → 1600.
- MOVE with the swap (derived from formationDurationMs): CP-23.5 front-mid instant (1500 → 1800), CP-24.0 formed instant (2000 → 2600), CP-24.5 clean-hold instant (2500 → 3100).
- STAY FIXED (do not derive from formationDurationMs): CP-23.0 formation-start instant (1000, from formationStartMs), CP-26.0 exit-start instant (4000, from exitStartMs), CP-27.0 exited instant (5000, from exitStartMs + exitDurationMs).
- The build-record's A11 table prints both the default and swapped instants per checkpoint, proving the split.

## 3. CLEAN-HOLD HOLD OPACITIES (explicit, every loose class)
The filed parameter table set only `particle.reserveHoldOpacity = 0.0` while CP-24.5 counts EVERY loose class. Cured by explicit CONFIG keys, all applied in the HOLD phase:
- `particle.reserveHoldOpacity = 0.0` — reserve particles in HOLD.
- `particle.surplusHoldOpacity = 0.0` — streaming surplus (unassigned, non-reserve) particles in HOLD. NEW KEY.
- `particle.looseHoldOpacity = 0.0` — any particle still in BORROWING state when HOLD begins (remaining borrowers not yet locked) renders at this opacity in HOLD; such particles also complete/abort their borrow at the HOLD boundary so the locked-cell occupancy assertion is unaffected. NEW KEY.
- Locked cells are not loose: they render at `particle.borrowOpacity = 1.0` throughout HOLD (the solid glyph).
- Assertion form (CP-24.5, corrected anchor 2,500 ms): visibleLoose = count of loose particles whose effective HOLD opacity > 0.02; required visibleLoose = 0. The harness evaluates effective opacity per class from CONFIG, not from a hardcoded 0.

## 4. PLAYBACK EVIDENCE (jev-observe-exit charge)
The build-record records playback evidence for the FORMATION and the EXIT: the logic harness samples the state function across 0–5,000 ms at 100 ms steps and files the raw occupancy / borrowed-fraction / loose-visible series, from which formation (borrowed fraction rising, occupancy 0→≥0.98 between 1,000–2,000 ms) and exit (occupancy ≥0.98 at 4,000 ms → ≤0.02 at 5,000 ms) are evidenced. No browser binary exists in this seat (lane standing limitation): evidence is logic-harness level, printed PIXEL-UNVERIFIED in the build-record and scores.md.

## 5. DEPARTURE D2 STATUS
D2's release (RELEASE back to stream velocity over exitDurationMs) stays an EXPLICIT ALLOCATION wherever the exit remains unmeasured: the census bounds the exit only to 26.0–27.0 s at 0.5 s sampling; no finer measurement was taken in this cycle, so the release form is allocation A-EXIT, named as such in the build-record and scores.md, never presented as measured.

## 6. ALL OTHER PLAN TERMS STAND
Pool-from-targets (A9.3 count assertion), runtime sampling (A1.2), A5 flow field (one constant field, borrow/release with velocity continuity, reserve never borrowed, borrow-flag intensity separation, phase exclusivity), one logical canvas 960×540, departures D1/D3, swap values, and the five-lens bar (avg ≥85 AND min ≥70) are unchanged.
