# T17 attempt 6 — config-census leg output (A-C008 leg 2, against attempt 6's OWN CONFIG)

Source: recreation.html sha256 96341c01696d67b0be4578ce81332258287cf7101b5ebe09acabc9fc916c9780 · Census against this attempt's own CONFIG (203 non-figure leaf keys walked; figure records are consumed through the geometry/state probe battery per figure).

## Method

Every CONFIG leaf was resolved by mutation census (mutate the leaf in a cloned CONFIG; assert a consumed computed effect changes across the probe battery: fit reports at 360/960, per-figure geometry, state curves incl. handoff samples at every figure boundary, counter text, transition state, badge/stamp metrics, bar rects, label bounds, validation outcomes) or, for DOM/CSS-var-only surfaces, by a textual consumption site outside the CONFIG block. Unconsumed leaves list as HITs.

## Result

- **Resolved by mutation: 116 leaves.**
- **Resolved by textual consumption site: 87 leaves** (palette/fonts/masthead strings, CSS-var-driven layout keys, and validation-bound keys whose consumption fires on violation — each bounds.* key is read by name in validateConfig, and the suite's violation probes (wide waffle, 500-char summary, 400-nines counter, string-typed duration, null group) demonstrate the consumption firing).
- **HITs (unconsumed leaves): 0.**

## Attempt-6 new/changed keys — consumption named

- `timing.transitionOutSpan / transitionInStart / transitionInSpan` — consumed by `transitionState` (the 0.55/0.45 literals no longer exist in source; separate CONFIG-move check in the build record).
- `timing.transitionFloorOpacity (0.35) / transitionFloorRelease (0.5)` — consumed by `transitionState`; suite asserts combined displayed opacity ≥0.35 at every handoff sample (measured minimum exactly 0.350).
- `timing.counterHoldSec (0.85)` — consumed by `holdSecFor`/`animFraction` for the counter figure only; FIG.24's displayed final-"1" hold measures 0.625s ≥ 0.6s.
- `timing.connectorDrawSpan (0.08)` — consumed by `orgState` connector fractions.
- `timing.preCliffDropMaxFrac (0.05)` — consumed by validateConfig's pre-cliff bound (the 0.05 literal no longer exists in validation).
- `layout.stampLetterSpacingEm (0.08)` — consumed by `stampMetrics` (matches the stamp CSS letter-spacing .08em).
- `layout.badgeClearancePx (16)` — consumed by `badgeMetrics`/`badgeCap` (cleared width = content width − 16).
- `layout.barLabelDescenderPx (6)` — consumed by the bar-label baseline in the stack factory.
- `layout.yLabelGapPx (6)` — consumed by `yAxisPad` (model + renderer share the derived pad).
- `formatting.badgeHandFont / badgeSansFont` — consumed by `badgeSegments`/`badgeFontPx` for per-font badge measurement.
- `bounds.maxSummaryChars / maxTitleChars / maxLabelChars / maxCardChars / maxStampChars / maxNoteChars / maxNodeChars / maxCeoChars` — consumed by validateConfig's per-field-class length bounds.
- `palette.muted` — disposition changed this attempt: beyond its CSS-var assignment it now has a RENDERED reader (the header meta line's color is set from it in scene assembly), closing the attempt-5 "written but unread" residue in rendered form as well as binding form.
