# Condense evidence excerpts — Cycle 016 Wave 15

## T107 timing (A-C014-1 risk-price miss)
Timing/tempo clears this lens’s threshold on the supplied source evidence.

- **Push:** 625 ms fits the measured 500–750 ms range. Cubic ease-in concentrates 87.5% of displacement in the final half, giving the required accelerating approach.
- **Cut:** The hard scene swap occurs at the approach’s maximum velocity, with no intervening pause or blend.
- **After-cut motion:** Growth reaches 2× in 500 ms with ease-out cubic. The independent wordmark finishes at +1000 ms, matching the measured arrival. Motion continues through the first 500 ms labelled “holdB”; the actual timing remains correct.
- **Deduction — hold proportions (−8):** Hold-A occupies 9875 ms, or 70.5% of the cycle. After the wordmark finishes, only 1900 ms remain fully opaque before the closing fade. This makes repeated playback heavily weighted toward anticipation.

Next cure: redistribute idle time toward the completed logo state while preserving the push, cut, growth, and wordmark timings. Absolute cut placement receives no penalty under the named allocation basis.

This is a source-level assessment; perceived playback tempo remains pixel-unverified.

BODY-WRITE: none (read-only run)
SCORE: 92

## T107 motion (risk-price miss)
Motion fidelity passes this lens’s RECREATED threshold.

- **Accelerating push:** 625 ms cubic ease-in concentrates movement near the cut; velocity peaks immediately before the swap.
- **True cut and continuity:** scene visibility switches instantly at 10500 ms. Shared construction preserves the limiting anchor rect, triangle geometry, and label across the cut without a dissolve.
- **Post-cut movement:** the mark grows to 2× over 500 ms with a fast-start ease-out. The wordmark independently slides from the left, completing at +1000 ms.
- **Exclusivity and reset:** the outline disappears before the push; only one scene displays at a time. The 600 ms fade on each side of the loop hides the reset at zero opacity.
- **Deduction −7:** the preparatory gesture traces the tile rather than the specimen’s whole page and omits its cursor. The perimeter draw works, but changes the gesture’s spatial scope and attention cue.

Next cure: reproduce the page-scale outline and cursor while preserving their clearance before the push. Browser playback remains unverified; this verdict evaluates the supplied source and packet.

BODY-WRITE: none (read-only run)
SCORE: 93

## T16 reusability (validation completeness movement)
The build has broad parameter coverage, but several legal configurations break the guarantees claimed in the record. I price reusability at **76/100**. The supplied checks support default operation, dense simultaneous title/ring demand, URL swaps, and restart determinism; I could not independently execute them.

The priced findings and inherited cure list are:

1. **Technique constants remain outside CONFIG.** `startTravel()` imposes a literal `15` ms registration floor; turn compression uses a literal `0.3` ramp fraction; release derivative blending uses a literal `0.25` window; `frame()` caps elapsed time at `50` ms. These govern motion and timing rather than mere arithmetic. Cost: meaningful variants still require editing animation logic. Move these policies into validated configuration.

2. **Short release phases can silently lose title or ring targets.** `releaseAll(simT)` uses `releaseScatterMs`, independently of `releaseMs`. A legal `releaseMs=50` with the default `releaseScatterMs=500` starts formation while page particles remain unavailable. `buildPool()` budgets the maximum of page demand and title-plus-ring demand, excluding concurrent releasing demand. `borrowFresh()` truncates to available particles, while the scheduler sets `titleBorrowed` or `haloBorrowed` true regardless of assignment completeness. Cost: partial formations persist without retry. Enforce release/formation compatibility or size and verify the overlapping demand.

3. **Budget feasibility does not guarantee completed registration.** `enforceFormation()` includes travel and stagger but excludes `registrationMs`. A ring can finish travelling immediately before the seam and never reach its registered state. Page budgeting similarly omits the hardcoded 15 ms registration floor: at short interval

## T105 reusability (score-blind record overstatements priced)
**86/100 — strong CONFIG-driven reuse, with incomplete validation and a contradicted literal census.**

- **Coverage is broad.** Content, durations, stage size, typography, scene colours, geometry, counts, and four structural builders are configurable. No unapplied CONFIG key is apparent. The reported label, 2000 ms dissolve, palette, and structural swaps provide useful reuse evidence.
- **Timing adapts correctly.** Phase boundaries derive from CONFIG; remaining cycle time becomes the residual A hold. The 2000 ms dissolve fits the cycle and preserves the midpoint. Forward and return durations are independently configurable.
- **Palette coverage has one literal escape.** CSS hardcodes `background:#111` outside CONFIG. It affects the surrounding page, so the “no colour literals outside CONFIG” census claim is false.
- **Invalid configurations do not fully stop execution.** Validation gates builder calls, but stage styling, both layer constructions, initial rendering, and the animation loop still execute. The record overstates refusal behaviour.
- **Validation leaves production gaps.** Infinite stage/type sizes pass; most geometry is unchecked; unknown easing silently becomes linear. Transparent `fieldB` values are accepted even though the rendered-weight guarantee depends on an opaque incoming field.
- **Structural reuse is demonstrated within a bounded vocabulary.** CONFIG can select and reshape the supplied scene templates. Entirely new scene structures require builder code. Swap evidence is logic-level and explicitly pixel-unverified; the separate census file was summarized rather than supplied.

**Next cure:** configure the page background; gate all construction and playback on validation; validate finite geometry, supported easing, and opaque incoming fields; correct

## T20 motion (orbit deferral cost)
Motion fidelity is strong for the reveal and hold, but limited for the camera movement.

- Facade glyphs switch on discretely in reading order, with each glyph’s window cells lighting together. The 750 ms allocation matches the sole anchor: eight glyphs before 6.5 s, nine exactly at 6.5 s.
- The title completes at 11 s and remains fully lit for the final three seconds.
- The marquee completes around 0.68 s, remaining complete through most of the partial-facade reveal. Its typing entrance is an unsupported addition, though compatible with the anchor.
- The principal shortfall is the orbit: rigid horizontal translations provide differential drift without changing perspective, visible tower faces, or facade geometry. At 360 px, total movement is only approximately 1.13 px for the hero, 1.88 px for far towers, and 4.13 px for mid towers. This weakly approximates an orbit.
- The loop abruptly resets both lighting and position; a seamless camera return is absent.

The harness supports timing consistency, not perceptual equivalence. Browser glyph sampling and apparent movement remain unverified.

BODY-WRITE: This return records the source-only motion-fidelity assessment, anchor consistency, and camera-motion limitations for the artifact’s Verify record and scores file.
SCORE: 79
