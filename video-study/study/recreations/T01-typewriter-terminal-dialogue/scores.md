# T01 — Typewriter Terminal Dialogue · SCORES

Technique: T01 (packet P1, "Look What I Can Do" @ 0:00–0:14) · Consumer: openings (cold-open-in-a-familiar-UI)
Artifacts: `recreation.html` · `comparison.html` (the face) · `segment.mp4` (ORIGINAL cut, evidence only, local) · `build-record.md`

## Attempt 1 — 2026-11-14 (recreation Cycle 003, Wave 1)

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 78 | codex/lens-motion.md |
| Timing / tempo match | 55 | codex/lens-timing.md |
| Construction purity | 100 | codex/lens-purity.md |
| Reusability / parameterization | 72 | codex/lens-reusability.md |
| Readability | 64 | codex/lens-readability.md |

**Arithmetic:** (78 + 55 + 100 + 72 + 64) / 5 = 369 / 5 = **73.8 average** · minimum lens **55**.
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: FAIL** — average misses by 11.2; two lenses sit under the floor (timing 55, readability 64). Tier: **IN PROGRESS**. Attempt 2 routes to the practice job (INSTRUCTION Amendment A3 division of labour).

### Self-verification (pre-wave, build-record §5)
Swap test (node, logic level): PASS 7/7 — swapped dialogue verbatim, charMs 55→20 rescaled duration 13,854→9,654 ms, palette swaps landed in CONFIG. Purity grep: **0 hits**. Segment: h264 960×540, 14.5 s.

### Priced gap (what attempt 2 must cure)

**CONVERGENT CURE (Amendment A1 — three lenses name it, so it is the primary cure): scroll arithmetic ignores real height.** Motion 78: shift increases in discrete 55 px jumps at line starts, not continuous tracking. Reusability 72: wrapping-aware scrolling required. Readability 64: each line counted as one 55 px unit regardless of wrapped height — wrapped lines can push the active line + cursor below the clipped viewport. Cure: derive scroll from measured content/active-line bounds (DOM offset measurements), move continuously, count wrapped height.

1. **Timing checkpoint lag (timing 55 — the floor lens):** total duration matches (13,854 ms) but allocation is wrong. At 3 s the original has line 3 mid-type; the recreation only starts line 1 at 3.014 s. At 8 s the original has line 7 mid-type; the recreation is halfway through line 5 (line 7 starts 9.969 s, ~2 s late). The 1.8 s end hold is unevidenced — the original types for the full 13.6 s. Cure: calibrate against the two frame anchors (line 3 typing @3 s · line 7 typing @8 s) — compress/overlap the banner phase, faster charMs and shorter pauses, drop or evidence the end hold.
2. **Readability at phone size (readability 64):** dialogue contrast is strong (14.2:1 user, 9.9:1 AI) but a 960-wide stage scaled to a 390 px phone makes dialogue ≈12 px, chrome ≈5 px; status/chrome contrast ~4:1 at fixed 13 px. Cure: stage-relative font sizing (chrome/status scale with the stage), stronger secondary-text contrast, whole-word wrapping preferred over `anywhere`.
3. **Cursor deserts the final line (motion 78):** after the last line's pause expires, `cursorTarget` falls back to the banner subline for the end hold. Cure: cursor stays on the final dialogue line (blinking) through the hold.
4. **Reusability hardening (reusability 72):** no config validation (zero/negative timings, empty lines array unguarded), speaker set is binary (a third speaker cannot be expressed), banner-gap 120 ms and line-unit constants are literals. Cure: validate/clamp config at load, speaker styles as a config map, promote remaining behavioral constants to CONFIG.

## Attempt 2 — 2026-11-14 (practice Cycle 002 Wave 1)

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 83 | codex/attempt-2/lens-motion.md |
| Timing / tempo match | 86 | codex/attempt-2/lens-timing.md |
| Construction purity | 100 | codex/attempt-2/lens-purity.md |
| Reusability / parameterization | 74 | codex/attempt-2/lens-reusability.md |
| Readability | 84 | codex/attempt-2/lens-readability.md |

**Arithmetic:** (83 + 86 + 100 + 74 + 84) / 5 = 427 / 5 = **85.4 average** · minimum lens **74**.
**Signed delta vs Attempt 1 average (73.8):** **+11.6**.
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: PASS** — average 85.4 clears the bar; minimum lens 74 (reusability) is above the floor. Tier: **RECREATED** — the tier move itself is style-library's act on the seat's hand-off at cycle close. Floor rule: the attempt beats the prior average, so no WHY is owed.

### Self-verification (pre-wave, build-record-attempt2.md)
Own logic suite (node, over the recreation's pure functions): **34 pass, 0 fail** — timing anchors (line 3 fraction 0.48 at 3000 ms · line 7 fraction 0.48 at 8000 ms · typing completes 13598 ms · end hold 200 ms), seek == play at three sampled times, subline rate consistency, banner fully out at 8.0 s at 960×540 and 390×219, cursor on the final line, containment + continuity at both widths, swap test with hand-computed timing, validation/clamping, contrast (status 8.36:1 · banner sub 11.91:1), effective dialogue size 19 px at 390 px width. Purity grep: **0 hits**. Syntax: `node --check` clean. **PIXEL-UNVERIFIED**: headless Chrome launches in this session failed before page load (`Hatch WebGL domain policy is required for browser startup`); geometry rests on the deterministic logic test — named limitation, carried in build-record-attempt2.md §5.

### Filing note — motion lens fired twice
The first motion run (preserved verbatim at `codex/attempt-2/lens-motion-run1.md`, SCORE 83) ran against an interim build and named two construction defects — subline revealed at the banner rate instead of its own CONFIG rate, and the banner not fully scrolled out at the 8.0 s state. Both were cured in the same cycle (rate consistency in `stateAt`; banner-exit keyframe + monotonic scroll targets; own suite re-run 34/34), the build record was updated to the final construction, and the motion lens was re-fired against the final source (`codex/attempt-2/lens-motion.md`, 83). All other lenses were fired once, against the final source only.

### Priced gap (what a further attempt would cure)
1. **Reusability 74 — CONFIG geometry is not authoritative in the DOM:** `chromeHeightPx`/`statusHeightPx`/padding/margin/banner geometry feed the layout model while the rendered CSS keeps fixed values, so a geometry swap can desynchronize scroll math from rendered content. Cure: bind the CONFIG geometry values to the DOM styles at build/resize. Secondary: validate nested speaker records + geometry keys, guard `seekTo` against non-finite input, account for explicit newlines/tabs and measured prompt widths in the wrap model.
2. **Motion 83 — overlapping ease windows:** `scrollYAt` restarts each transition from the previous target rather than the offset actually reached, so keyframes arriving inside an unfinished ease (possible with swapped content denser than the default) would produce a positional jump. Anticipatory (one-ease-early) keyframes and the banner-exit trigger are also named as motion simplifications. Cure: make the eased offset a continuous function across overlapping transitions and verify in playback.
3. **Timing 86 — closing-exchange proportions are model-fitted, not measured:** the finale rate (146 ms vs main 35.5 ms) and the 2600 ms closing pause were fitted to the anchor/window arithmetic for this line set; the lens asks that a further attempt measure the original's closing-exchange speed and final-line pause before retaining them.
4. **Readability 84 — phone status-row fit** is logic-verified only; rendered verification of secondary text, wrapping, and containment at phone size remains owed wherever a browser surface is available (see PIXEL-UNVERIFIED above).
