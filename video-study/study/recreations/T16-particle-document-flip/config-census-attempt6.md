# T16 — config-census leg · attempt 6 (guard-config-census)

Source: recreation.html sha256 `8455d83217bbba1938ab53f68cbe5313f6f70ccbccc4123a5d7f462ca13e93a7` (frozen). Method: literal scan of the whole script with comments stripped first, then strings stripped, outside the single CONFIG definition (DEFAULTS, lines 169–284); value-flow tracing per key; the swap test is the dynamic evidence (filed with the own-check outputs).

## Literal census (outside the CONFIG definition)

Numeric literals by class (value × occurrences in the animation logic):

- **0 (×222), 1 (×138), 2 (×31), −1 (×4):** indices, identity, sign and boolean arithmetic — structural.
- **Validation bounds and epsilons:** 0.0001 (×7), 0.001 (×12), 0.01, 0.05, 0.1, 0.6, 0.98 (×2), 0.99, 0.999, 3, 4, 6, 7, 8, 10, 50 (×3, incl. the 50 ms minimum phase-duration clamp), 100 (×20), 200, 250, 400 (×4), 900 (font-weight bound), 1000 (×12, ms↔s conversion), 4000 (×2), 10000 (×6), −10000 (×2), 100000 (×8), 600000 (×2 — the phase-duration magnitude bound added this attempt after the magnitude sweep hung the schedule scan at an uncapped flip window) — the rangeCheck domain table and unit conversions — structural.
- **Profile / construction constants:** 0.25-class blend and 0.3-class ramp values no longer appear as literals — they are CONFIG keys now (see the R4 note below). Remaining profile shape: 0.5 / −0.5 (×4/×3 — midpoint and symmetric scatter/velocity factors, and the smoothstep polynomial coefficients 3 and 2), 0.7 (×5 — the readable-onset fraction of the turn window, shared by the registration cap, the schedule's registration term and the fold profile's return point), 0.1 (×4 — the fold profile's hold fraction and validation epsilons), 1.05 (×5 — text-extent relationship bound and DOM line-height mirror), 1.2 (label line-height mirror in the counter group box), 16 (×2 — counter label group width allowance in px, DOM-mirroring), 60 (×2 — seconds→frames conversion in diagnostics and the seed-mixer shift), 140 (turn-window placeholder initial, overwritten from CONFIG at reset), 7919 (deterministic seed-mixing prime), 4294967296 (32-bit seed normalizer), −1e8 / −1e9 (×2/×7 — "never" sentinels for phase/turn start times) — structural: each is a profile shape, a bound, a unit conversion or a sentinel; none carries content, timing-of-record, colour-of-record or geometry-of-record (those all live in CONFIG).
- **The four policy literals this attempt moved into CONFIG are absent from their consumption sites** (grep-verified in the keys own-check, 0 hits each): the registration positivity floor (now `registrationFloorMs`), the turn-profile ramp fraction (now `turnRampFraction`), the release-derivative blend fraction (now `releaseBlendFraction`), and the frame cap (now `frameCapMs`). Same-valued occurrences elsewhere are the seed-mixer shift (15) and stylesheet sizes — structural, itemised here.
- **One further literal was found by this census and cured before freezing:** the outgoing fold's depth −0.12 stood as a bare literal in the fold profile while its sibling (the incoming face's minimum factor) was already a CONFIG key. It is now `foldMinFactor` in CONFIG, validated to [−1, 1), and the profile reads it; the frozen source's scan shows no −0.12 occurrence.
- **Colour literals in script outside DEFAULTS:** `"#fff"` ×5 — the sampling mask colour drawn to the off-screen measurement canvas only (never displayed; the sampling region is measured by alpha, colour-independent) — structural rendering mask.
- **Stylesheet hex:** `#000` ×1 (page background, overridden at init by CONFIG.background application), `#fff` ×1 (DOM text base, overridden per element from CONFIG colours at init), `#a9c6de` ×2 (DOM label/counter-label base colour, overridden at init from CONFIG.labelColor / CONFIG.counterLabelColor) — CSS presentation defaults; every one is overridden by a CONFIG value before display — structural.
- **Placeholder initials overwritten before any read:** the colour arrays cA/cB/cHalo initialise to the palette defaults ([246,249,253] / [147,167,189] / [255,217,138]) and are overwritten by `refreshColors()` from CONFIG before pool construction, sampling or drawing; `turnEffCur` initialises to the turn default and is reset from CONFIG in `resetRun`; per-particle `travel` (600) / `regDur` (300) / `relDur` (500) initials are overwritten by `startTravel` / `releaseParticle` before any read of a borrowed particle — structural placeholders with the overwrite site named.

**Unclassified content literals: 0. HIT list (content literals outside CONFIG): EMPTY.**

## CONFIG consumption census

123 keys defined once in DEFAULTS (attempt 5's 118, plus `registrationFloorMs`, `turnRampFraction`, `releaseBlendFraction`, `frameCapMs`, `foldMinFactor`; none retired). Every key has at least one value-flow application site outside the definition (line-referenced trace run on the frozen source):

- 122 keys are read as `CONFIG.<key>` at one or more application sites (geometry builders, schedule computation, validation, DOM application, draw).
- `minSettledHoldMs` is consumed through the schedule parameter object: `turnEffForInterval` reads `cc.minSettledHoldMs` (turn derivation) and `computeSchedule` reads `c.minSettledHoldMs` (budget need), with `CONFIG` passed as that object by every production caller — consumed, parameter-mediated.
- Swap surface: URL overrides move title text, page count, flip duration and palette (own-check: schedule swaps coherent; URL swap regenerates with unassigned 0).

**Unconsumed keys: 0. HIT list: EMPTY — PASS for this leg** (0 hits).

## CSS parse leg

The stylesheet block parses clean: 8 rules, brace balance 0, 0 malformed declarations, no external references (no `http`, `url(`, or `@import`). PASS.
