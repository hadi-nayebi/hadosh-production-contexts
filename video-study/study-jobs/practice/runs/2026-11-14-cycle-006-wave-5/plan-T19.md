# T19 Attempt 2 — Cure Plan (item agent, Cycle 006 Wave 5)

Prior: motion 80 · timing 82 · purity 92 · reuse 74 · readability 58 → avg 77.2, min 58, FAIL. Bar: avg ≥85 AND no lens <70. Readability 58 is the blocking lens.
Preservation: recreation.html content-copied to recreation-attempt-1.html (cp, different inode, identical sha256 7105e4b5… verified before any working-file touch).

## Convergent cures first
- C1 (purity+reuse) CONFIG completeness: move candle spacing/height/flame geometry, robe/hood/face/button geometry, gradient stops, drape fold rhythm + transition offset, frame border, letter-spacing, medallion floor/factor, flicker divisor into named CONFIG groups (components.*, typography.*, flicker.*). Census v2 counts numeric box() geometry arguments + generated style strings outside CONFIG. Header claim corrected to: shaping defaults live in CONFIG; structural constants (0%/100% fills, centering offsets) are listed as structural, not claimed as shaping. Lawful alternative also used: structural constants explicitly distinguished.
- C2 (reuse+readability) label double-application: labelFontPx uses the stageWidthPx already scaled by the recursive call (single application). Effective sizes recorded per level at 360px (with new levelScale: L0, L1 floored, L2 raw).
- C3 (motion+timing) loop boundary: final interval renamed truthfully — phase "loopHold" (continued hold), and comparison face + record state HARD LOOP RESTART at durationMs (scale snaps 1.20→0.94; not an animated reset; source is an uninterrupted held shot).
- C4 (timing+reuse) checkpoint normalization: NO sorting / NO role reassignment. Policy CONFIG-priced: validate → repair-in-place with enforced minSeparationMs (forward clamp preserving supplied order and roles); if repair cannot fit, fall back to defaults and flag fallbackUsed. computeState returns effective checkpoints incl. effectiveAnchorMs + diagnostics; diagnostics surfaced during playback (window.__T19_DIAGNOSTICS, console, and an error-only badge element visible only when incoherent).

## Remaining priced inventory (RUN.md correction C3)
- Depth-1 header fitting: widen frame (frameWidthPercent 44→54, left 6→5, anchor X derived = centre 32%), header becomes a single-line flex row (medallion + label side by side), frameHeaderPercent 20→28, letter-spacing CONFIG-priced. Source-bound fit model asserts phrase width AND header height at 360/390px for levels 0–1.
- Deepest-level distinguishability: curtains 9%→5% per side (interior ratio rises), levelScale updated to the true interior ratio (0.54×0.90≈0.486), frame border scales with level (CONFIG borderPx + per-level floor 1px). Model asserts L2 candle-body and staff widths ≥1.5px at 360px at opening scale.
- Flicker policy: flickerAmp default 0.18→0 (no source support for synchronized flicker); per-candle phase via CONFIG flicker.phaseStepRad and period CONFIG-priced, so enabling amp desynchronizes by construction.
- Candle/button count machinery: spacing derived from count + available bounds (CONFIG step becomes a cap), so count swaps up to the validated max stay inside their groups.

## Deferred (with reasons)
- Pixel/render verification: agent-session Chrome route blocked fleet-wide (A-C002-2) — files as PIXEL-UNVERIFIED; geometry rests on source-bound displayed-state models (A-C003-3/A-C004-2).
- Paired playback at loop boundary: same render-route block; boundary is named + logic-asserted instead.
- No rebuild-from-scratch: convergent cures only (§8 split rule respected).

## Own checks (Verify)
Node logic suite asserting EFFECT MAPPINGS (A-C002-1): label px per level equals declared single-application values; checkpoint repair preserves roles + separation + effective anchor; flicker amp 0 → all flame opacities 1, amp>0 → per-candle phases differ; count swaps keep candles/buttons in bounds; swap test (label/depth/timing/palette); source-bound containment+legibility model at 360/390px on displayed state (header fit width+height, L2 detail widths); purity grep 0 hits; node --check.

## WHY scaffold
Slots per cure C1–C4 + header fit + deepest detail + flicker: outcome / lens moved / stuck-lens hypothesis (prior: readability stuck on geometry the renderer cannot widen without frame-geometry change — this attempt makes exactly that change; if readability stays <70, hypothesis: source-bound width model overestimates glyph fit vs rendered Georgia metrics).
