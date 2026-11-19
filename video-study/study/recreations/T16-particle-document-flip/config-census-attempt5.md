# T16 — config-census leg · attempt 5 (guard-config-census)

Source: recreation.html sha256 `f912ebe273604baa47c96835f4a50bc3e78fbc5ff0b82ecd2e675820bf9ede0e` (frozen). Method: literal scan of the whole script with strings/comments stripped, outside the single CONFIG definition (DEFAULTS); value-flow tracing per key; the swap test is the dynamic evidence (filed with the own-check outputs).

## Literal census (outside the CONFIG definition)

Numeric literals by class (value × occurrences in the animation logic):

- **0 (×189), 1 (×127), 2 (×29), −1 (×3):** indices, identity, sign and boolean arithmetic — structural.
- **Validation bounds and epsilons:** 0.0001 (×7), 0.001 (×12), 0.01, 0.05, 0.1, 0.6, 0.98, 0.99, 0.999, 3, 4, 6, 7, 8, 10, 50 (×4, incl. the 50 ms minimum phase-duration clamp), 100 (×15), 200, 400 (×4), 500-range bounds, 900 (font-weight bound), 1000 (×12, ms↔s conversion), 10000 (×6), −10000 (×2) — the rangeCheck domain table and unit conversions — structural.
- **Profile / construction constants named by the build's construction record:** 0.25 (×2 — release-derivative blend window fraction and its end-point form), 0.3 (turn-profile ramp fraction), 0.5 / −0.5 (×3 each — midpoint and symmetric scatter/velocity factors), 1.05 (×4 — text-extent relationship bound and DOM line-height mirror), 1.2 (label line-height mirror in the counter group box), 15 (registration positivity floor inside the span-derived registration clamp), 16 (counter label group width allowance in px, DOM-mirroring), 60 (seconds→frames conversion in diagnostics), 4000 (×2 — validation caps), 7919 (deterministic seed-mixing prime), 4294967296 (32-bit seed normalizer), −1e8 / −1e9 (×7 — "never" sentinels for phase/turn start times) — structural: each is a profile shape, a bound, a unit conversion or a sentinel; none carries content, timing-of-record, colour-of-record or geometry-of-record (those all live in CONFIG).
- **Colour literals in script outside DEFAULTS:** `"#fff"` ×4 — the sampling mask colour drawn to the off-screen measurement canvas only (never displayed; the sampling region is measured by alpha, colour-independent) — structural rendering mask.
- **Stylesheet hex:** `#000` ×1 (page background, overridden at init by CONFIG.background application), `#fff` ×1 (DOM text base, overridden per element from CONFIG colours at init), `#a9c6de` ×2 (DOM label/counter-label base colour, overridden at init from CONFIG.labelColor / CONFIG.counterLabelColor) — CSS presentation defaults; every one is overridden by a CONFIG value before display — structural.
- **Placeholder initials overwritten before any read:** the colour arrays cA/cB/cHalo initialise to the palette defaults and are overwritten by `refreshColors()` from CONFIG before pool construction, sampling or drawing; `turnEffCur` initialises to the turn default and is reset from CONFIG in `resetRun`; per-particle `travel` / `relDur` / `regDur` initials are overwritten by `startTravel` / `releaseParticle` before any read of a borrowed particle — structural placeholders with the overwrite site named.

**Unclassified content literals: 0. HIT list (content literals outside CONFIG): EMPTY.**

## CONFIG consumption census

118 keys defined once in DEFAULTS. Every key has at least one value-flow application site outside the definition (line-referenced trace run on the frozen source):

- 117 keys are read as `CONFIG.<key>` at one or more application sites (geometry builders, schedule computation, validation, DOM application, draw).
- `minSettledHoldMs` is consumed through the schedule parameter object: `turnEffForInterval` reads `cc.minSettledHoldMs` (turn derivation) and `computeSchedule` reads `c.minSettledHoldMs` (budget need), with `CONFIG` passed as that object by every production caller — consumed, parameter-mediated.
- Retired this attempt: `jitterReleaseDecayMs` — its only consumer was the removed release-jitter term; the key was deleted from DEFAULTS and validation in the same change, so no dead key remains.
- Swap surface: URL overrides move title text, page count, flip duration and palette (own-check: schedule swaps coherent; URL swap regenerates with unassigned 0).

**Unconsumed keys: 0. HIT list: EMPTY — PASS for this leg** (0 hits).
