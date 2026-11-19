# T66 — Money stacks with sourced totals · scores (attempt 1, Cycle 013 Wave 11)
Bound build: recreation.html sha256 a30b374eb21468a89c058f7de6a47b752f7f7a4dea7f22960b8dcaa271f3a626 (identical for all five final lens runs; no post-wave source change).
Feeding: score-blind allowed packet per lens (lens instruction with standing header + neutral technique facts + recreation.html); scores.md never fed; no lens saw a prior score or another lens's return. Interim firings on superseded builds are preserved verbatim and NEVER averaged: codex/lens-motion-interim1.md (76, build 1a067ddf…) · codex/lens-motion-interim2.md (85, build 5513a091…) · codex/lens-timing-interim1.md (76, same build). Each interim defect was cured and the wave re-fired in full on the final build (identical-hash rule).
Pre-wave gate: jev-prewave FIRE-WAVE (parameterization 0.90 · purity pre-check 1.00 · own-checks completeness 0.90 · fidelity-plan honesty 0.95) — jev-prewave.md. A6 legs: fit-table.md (0 hits on the final build; 2 pre-cure hits cured and re-measured) · config-census.md (0 hits on the final build).

| Lens | Score | Return |
|---|---|---|
| motion | 92 | codex/lens-motion.md |
| timing | 90 | codex/lens-timing.md |
| purity | 97 | codex/lens-purity.md |
| reusability | 72 | codex/lens-reusability.md |
| readability | 93 | codex/lens-readability.md |

Arithmetic (shown, no rounding up): sum = 92 + 90 + 97 + 72 + 93 = 444; average = 444 / 5 = 88.8; minimum = 72.
Bar: average ≥ 85 AND minimum ≥ 70 → 88.8 ≥ 85 ✓ · 72 ≥ 70 ✓.
**VERDICT: PASS — tier RECREATED.**

## Priced cures for the next attempt (practice job) — convergent defects first (Amendment A1)
1. CONVERGENT (purity −3 + reusability −3): font family (Arial/Helvetica in CSS) and the pop easing exponent (hardcoded 3) stand outside CONFIG — the census classified them structural; two lenses price them as shaping residue. Cure: expose type.fontFamily + motion easing as CONFIG keys consumed at render; correct the census classification rule for font stack + easing identity.
2. CONVERGENT (timing −8 + reusability −3): durationMs is declarative — Act 1's artwork continues until lifecycle.startMs (15 s), so the 14–15 s inter-act interval is undefined and the segment boundary is not enforced in playback. Cure: define/render the inter-act interval explicitly (Act 1 ends at durationMs; the interval is a named state) and bind the segment end in the frame loop.
3. Reusability (−12, single lens): configuration validation is not enforced at startup — checkpointsOk is never called by the browser init, validation runs after layout computation (and can throw on malformed input), and integer/finiteness/bounds checks are incomplete; malformed URL JSON silently falls back. Cure: validate before layout/DOM construction with explicit errors, then enforce bounds (the jev-prewave qualification named the same gap).
4. Reusability (−6, single lens): URL-override deepMerge retains trailing default array entries, so runtime overrides cannot reduce stack cardinality (the node-harness CONFIG-edit path replaces wholesale; this binds the browser override path — the same T53 cure). Cure: array-replacement semantics for overrides; verify 0/1/3-stack cases through effectiveConfig.
5. Reusability (−4, single lens): Act 1's segment entry is coupled to the specimen's two-stack shape — every stack after index 0 shares segment.stack1EnterMs/stack1EnterDurMs. Cure: per-stack segment entry keys (enterMs/duration/initial visibility) with checks derived across all entries.
6. Reusability (−3, single lens): geom.tagPadRightPx is a fit-bound only — it governs no rendered text width (recorded honestly in the census as the fit container bound; the lens prices it as an ineffective control). Cure: apply explicit text bounds in render or rename the key to its fit-bound role.
7. Motion (−8, single lens): Act 1's second stack fades in at a fixed position instead of entering with the camera-pan translation the specimen shows. Cure: translate the completed second stack + tag into place during 2.0–2.5 s with the source-observed direction/displacement, verified against the segment.
8. Timing (−2, single lens): the Act 2 reset at 15 s is abrupt (completed artwork vanishes into the build with no handoff). Cure: use the inter-act interval (cure 2) to establish the demonstration's reset.
9. Readability (−4/−3, single lens): sponsor ink clears the ~11 px floor by only 0.5 px (11.5 measured) — enlarge sponsor type with a widened text area, verified together; bundle silhouettes separate modestly from the ground (band contrast 2.07) — add a darker outer contour or raise bundle/ground lightness separation.

## Limitations carried
PIXEL-UNVERIFIED (no exercisable browser in this seat): all lens verdicts are source-based; fit evidence is the measured-fit leg's geometry model (fit-table.md) + the comparison page as render surface. Act 2's row cadence (rowMs 220, popMs 140, tagMs 500) is a labeled ALLOCATION MODEL — the in-window segment shows only completed states; Act 1 reproduces the measured 638–652 s window anchors (stack 0 complete at 0 s, stack 1 arriving complete at 2.0–2.5 s, hold to 14 s). The counter chip is CONFIG-gated off by default (its evidence, ev/t625.jpg, sits outside the segment window).
