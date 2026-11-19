# T12 — Marker Highlight Sweep + RECEIPT Stamp · SCORES

Technique: T12 (packet #1, "Look What I Can Do" @ 1:05–1:14) · Consumer: DLC/multilingual production (word animation · diagram containers)
Artifacts: `recreation.html` · `comparison.html` (the face) · `segment.mp4` (ORIGINAL cut, evidence only, local)
Naming: QUEUE.md shortens this item to "Marker highlight sweep"; TECHNIQUES.md catalogues
"Marker highlight + RECEIPT stamp" — both parts are built (sweep + stamp), recorded in build-record.md.

## Attempt 1 — 2026-11-14 (recreation Cycle 003, Wave 1)

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 83 | codex/lens-motion.md |
| Timing / tempo match | 64 | codex/lens-timing.md |
| Construction purity | 94 | codex/lens-purity.md |
| Reusability / parameterization | 74 | codex/lens-reusability.md |
| Readability | 62 | codex/lens-readability.md |

**Arithmetic:** (83 + 64 + 94 + 74 + 62) / 5 = 377 / 5 = **75.4 average** · minimum lens **62**.
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: FAIL** — average misses by 9.6; two lenses (timing 64, readability 62) sit under the floor. Tier: **IN PROGRESS**.

### Priced gap (what attempt 2 must cure — convergent findings first, per Amendment A1)

**CONVERGENT — wrapped-phrase fill geometry (named by THREE lenses: motion 83, reusability 74, readability 62):**
a highlight phrase that wraps — the specimen's own "Principal Slopcore Architect" case, and any
longer swapped phrase — is one inline span with one absolute fill rectangle; the fill cannot sweep
each visual line separately, and the wrap point depends on viewport width, so the reading-order
handoff is not guaranteed. Cure: per-line fill segments for wrapped phrases (split the highlight
at line boundaries with measured geometry, or restructure so each visual line carries its own fill
span swept in order), verified at the target phone viewport.

1. **Action-to-hold proportion (timing 64):** action occupies 55.2% of the 5.8 s loop; the original
   runs ~⅓ action / ~⅔ hold (sweeps + stamp complete by ~3 s of the 9 s window; ~6 s hold). Cure:
   retune defaults so the stamp completes by ≈3.0 s and endHoldMs ≈ 6000 inside a ≈9 s cycle.
   Secondary: equal 620 ms per phrase gives unequal traversal speeds for different-length phrases —
   verify the original's per-phrase durations before switching to per-character timing.
2. **Stamp placement has no protected area (readability 62):** `top:42%` lands the stamp across
   body lines 2–3, overlapping highlighted text at the default card height, and drifts with
   wrapping. (The build record's Plan priced this risk and placed the stamp by the specimen's
   layout; the lens priced the rendered geometry against it and won — recorded as the attempt's
   own miss.) Cure: reserve a stamp zone that intersects no body text (e.g. stamp row in the
   card's lower area over the footer gap, or a config-positioned zone the layout guarantees
   empty), and check overlap mechanically against highlight spans.
3. **Phone-frame fit (readability 62):** at 390 px wide in a 16:9 frame the wrapped card can
   exceed the frame height and clip header/footer under hidden overflow. Cure: scale-to-fit
   the card inside the frame (max-height + transform scale from measured card size) and verify
   at phone size.
4. **Shake before contact (motion 83):** the card shake starts at stampAt (stamp still falling)
   and has mostly decayed by impact. Cure: start the shake at contact (stampAt + stampPressMs)
   and decay it afterward.
5. **Phrase targeting + validation (reusability 74):** cross-line phrases cannot match;
   within-line reading order after a placement is not strictly cursor-bound; missing phrases
   silently consume timeline slots; zero/negative durations can NaN the clock. Cure:
   occurrence-aware, cursor-ordered targeting; missing phrase = no timeline slot + visible
   build warning; clamp/validate all numeric config at load (T15 cure family).
6. **Config completeness (purity 94, no refusal defect):** settle window (150 ms), shake
   window (240 ms), oscillation divisor, avatar/badge/heart colors and the "Share" label are
   hardcoded. Cure: move them into CONFIG (or narrow the "every value" wording wherever the
   build record states it).
7. **Container playback contract (reusability 74):** loop-only; play restarts instead of
   resuming; no once-mode, seek, or completion event. Cure for a production lift: explicit
   play-mode config + resume/seek/completion hooks.

Own checks before the wave (build-record.md §5): swap test PASS at logic level (17/17 —
default and swapped phrases/timing/marker/stamp all rebuilt and retimed; pixel render not
exercisable from the build session, printed limitation) · purity grep zero hits · inline
script passes node --check · segment ffprobe-verified (h264, 960×540, 10.000 s).

## Attempt 2 — filed below (practice job, Cycle 002 Wave 1)
Seed order was: **convergent cure first** (per-line wrapped-phrase fills), then cures 1–3
(tempo retune · protected stamp zone · phone fit), then 4–6; cure 7 (container playback
contract) was deferred in writing in the wave's RUN.md for attribution sequencing, with
attempt 3 charged to carry it at its head or print why the item rests.

## Attempt 2 — 2026-11-14 (practice Cycle 002 Wave 1)

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 88 | codex/attempt-2/lens-motion.md |
| Timing / tempo match | 95 | codex/attempt-2/lens-timing.md |
| Construction purity | 94 | codex/attempt-2/lens-purity.md |
| Reusability / parameterization | 72 | codex/attempt-2/lens-reusability.md |
| Readability | 86 | codex/attempt-2/lens-readability.md |

**Arithmetic:** (88 + 95 + 94 + 72 + 86) / 5 = 435 / 5 = **87.0 average** · minimum lens **72**.
**Signed delta vs Attempt 1 average (75.4): +11.6.**
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: PASS** — average clears by 2.0; every lens is at or above the floor (minimum 72).
Tier hand-off: this PASS is the hand-off trigger — the tier move to RECREATED is filed on the
style-library job's board by the wave seat (receipt/pending status is recorded in the wave
RUN.md at close, not in this file).

Own checks before the wave (build-record-attempt2.md): logic-level swap + targeting test
26/26 PASS (cross-node phrase · visually wrapping phrase as one highlight · repeated
occurrences · missing phrase between valid ones consuming no timeline slot · config
clamping · hand-recomputed timelines) · purity grep 0 hits · inline script passes
`node --check`. **PIXEL-UNVERIFIED:** the headless render attempt failed at browser startup
(`Hatch WebGL domain policy is required for browser startup`, private port 9412, two
constructions) — no rendered geometry claim is made; the build carries an in-page
`RECREATION_GEOMETRY()` measurement surface for any rendered check.

### Findings carried forward (priced for attempt 3 — the attempt beats the floor, so no WHY is owed; these are the filed lens findings, not a plateau)

1. **Render-path index mismatch after a missing phrase (reusability 72 — a real defect in
   this build, caught by the lens, not by the own checks):** placed highlights keep their
   original highlight index, while the timeline/fill states are densely indexed by placed
   order — with a missing phrase in the middle, a later highlight's fill index has no
   corresponding fill state and it never fills in the render path (the logic test asserted
   slot counts, not the index-to-fill mapping). Attempt 3 head item: dense placed-highlight
   animation indices, plus a logic case asserting the mapping itself.
2. **Deferred cure 7 remains the reusability cap, as priced:** the reusability return names
   the loop-only playback contract (no once-mode, completion event, seek, or per-phrase
   onset times; `play` restarts rather than resumes) among its production gaps — consistent
   with the wave plan's written deferral. Attempt 3 carries cure 7 at its head (per the
   RUN.md deferral charge).
3. **Rotated stamp footprint vs the reserved zone (readability 86):** rotation increases
   the stamp's vertical footprint beyond its unrotated box; body/footer clearance at the
   settled scale is source-argued, not rendered-proven (PIXEL-UNVERIFIED above). A rendered
   phone-size hold check measuring the rotated stamp's clearance is owed.
4. **Config-coverage wording (purity 94):** some layout/motion constants remain in CSS or
   as literals (card width/padding, settle amplitude 0.045, fill proportions) — the build
   record's "every value" phrasing is broader than the coverage; promote the constants or
   narrow the phrasing in attempt 3.
5. **Timing note (timing 95):** the fully settled hold is 5760 ms of the 8770 ms cycle
   (endHoldMs includes 240 ms of post-contact impact effects); equal per-phrase sweep
   duration stands as an unverified hypothesis on the evidence, per the lens.
