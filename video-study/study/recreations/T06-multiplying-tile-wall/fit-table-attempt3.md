# T06 attempt 3 — Measured-fit leg (A-C008) on the NEW source

Source: `recreation.html` sha256 dbae736f1d496348e251f78ac558478dae49e33d2115ed387f9e58d6b7540080 · Method: source-bound geometry model (`RECREATION.geometryAt(W)`, executed in a Node harness over the real source — the model mirrors the displayed-size functions: container-relative sizes floored in px via max()). PIXEL-UNVERIFIED stands: no rendered-pixel verification is claimed; all sizes are modelled from the source's own configuration and functions.

## Modelled sizes per element per displayed state

| Element | @360px | @390px | @960px | Floor | States priced |
|---|---|---|---|---|---|
| Phase-1 numeral | 41.4px | 44.9px | 110.4px | ≥41.4 @360 (F-NUM1) PASS | every phase-1 wave + cleared state (numeral empty, size function unchanged) |
| Phase-1 label | 11.0px (floor) | 11.0px (floor) | 19.2px | ≥11px (F-LABEL) PASS | all phase-1 states incl. cleared pre-500ms state (label shown alone) |
| Phase-2 numeral | 17.0px (floor) | 17.94px | 44.2px | ≥17 @360 (F-NUM2) PASS | all phase-2 waves |
| Phase-2 label | 11.0px (floor) | 11.0px (floor) | 12.0px | ≥11px (F-LABEL) PASS | all phase-2 waves |
| Hero name | 10.0px (floor) | 10.0px (floor) | 11.0px | ≥10px PASS | 24+4 state |
| Tile tag | 3.4px (hidden at this density) | 3.7px (hidden) | 9.1px (shown) | density-gated | phase-1 dense @360/390: simplified interior, tag hidden; full elsewhere |
| Tile initials | 4.9px | 5.3px | 13.0px | retained in all modes | both phases, all densities |

## Fit and separation assertions (harness-executed on the real source)

| Assertion | @360 | @390 | @960 |
|---|---|---|---|
| F-FIT phase-1 label one line (97.2px modelled width vs badge zone 135.0 / 146.3 / 360.0px) | PASS | PASS | PASS |
| F-FIT wrapped state enumerated (two lines, height 68.6px, bottom 101.0px @360, horizontal separation unchanged) | PASS (modelled) | PASS (modelled) | n/a |
| F-SEP small-width reserved band: badge-2 bottom (54.3 / 55.9px) < wall-2 top (60.8 / 65.8px) | PASS | PASS | n/a (large-width form) |
| F-SEP badge-2 bottom < heroes top (74.9 / 81.2 / 199.8px) | PASS | PASS | PASS |
| F-SEP badge-1 right edge < wall-1 left edge | PASS | PASS | PASS |
| Hero hierarchy: area ratio vs phase-2 cell (target ≥2.0×) | 3.63× PASS | 3.63× PASS | 2.66× PASS |
| Hero hierarchy: height ratio (target ≥1.30×) | 1.80× PASS | 1.80× PASS | 1.32× PASS |
| Hero fallback 56% (plan addendum: both ratios + separation @360/390) | area 3.50×, height 1.74× PASS | PASS | not invoked |

Note on the large-width badge/wall relation: at >480px the phase-2 badge keeps its attempt-2 backed-panel form over the wall's top corner (opaque backing, padding, radius — the separation priced at that width is badge-bottom < heroes-top, which passes); the reserved band is the small-width state, where the floored type needs the space.

## Density / interior modes (effect mapping, modelled cell sizes)

| Phase | Cell @360 | Cell @390 | Cell @960 | Interior mode @360/390 | @960 |
|---|---|---|---|---|---|
| Phase 1 (32 tiles) | 31.2×25.7px | 33.8×27.8px | 83.1×68.5px | simplified (cell < 40px: tag hidden, motif bars cell-relative, count ×0.6) | full |
| Phase 2 (24 tiles) | 42.9×31.3px | 46.5×33.9px | 114.5×113.7px | full | full |

Heroes at 24+4 occlude wall tiles by design (foreground panels stand in front of the wall); heroes container covers 50% × 58% at the bottom-right, i.e. the occluded fraction of the phase-2 wall area at the 24+4 state is ≈ (0.50 × 0.58) / (0.94 × 0.66) ≈ 47% of the small-width wall rectangle's area (modelled, @360 small-width wall) — printed so the lens wave's number is on the record.

## Schedule / state checkpoints (harness, real source)

Cleared pre-500ms state (counter null, 0 tiles) PASS · counter 1 @500ms (phase 1, 8 tiles) PASS · counter 24 @16500ms (phase 2, 24 tiles, heroes active) PASS · built counts 32 / 24 / 4 PASS.

**Leg result: all modelled floors, fit, separation, and hierarchy assertions PASS at 360/390 (and 960 where the large-width form applies). Hit count: 18 harness assertions PASS, 0 FAIL (full suite in own-checks-attempt3-final.txt).**
