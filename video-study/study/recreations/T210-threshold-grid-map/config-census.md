# T210 — config-census (guard-config-census leg v3.1, A6/A9.6)

Build bound: recreation.html sha256 `254add09d9893154b845977434d620affb04b635146c56f3705ef806085e5df5` (16,597 B; re-scanned after the prewave-HOLD cure round — the cure added one renderer site for `tGridSettleMs`, row updated below; no new literal outside CONFIG was introduced).
Method: all-literal scan of everything outside the CONFIG block (script extraction + regex census, run by the builder's check harness) + CONFIG key→application-site resolution (token census over the logic + render scripts, sites named by the construction they feed) + CSS-variable setter check.

## 1. Literal scan outside CONFIG
- Hex colours outside CONFIG: `#e9e6de`, `#1a1a1a` — both in the page-chrome CSS (`body` background / text colour) OUTSIDE the SVG stage. Classification: **structural (page chrome)** — the stage's own ground is painted by the SVG ground rect from `palette.ground`; no subject colour is set by these literals. Disposition: printed, not a HIT (the subject surface is fully CONFIG-painted; the chrome wraps it).
- Numbers outside CONFIG (unique set): `0 · 0.5 · 1 · 1.0 · 1.3 · 2 · 2.1 · 8 · 9 · 100 · 1000 · 2000 · 270`. Classification per group:
  - `0, 1, 2` — loop bounds, clamp bounds, centering divisors (`/2`), array indices: **structural**.
  - `0.5` and the `2` coefficients inside `EASINGS.easeInOut` — the named easing function's own definition; CONFIG selects the function by name (`easing` key): **structural-by-selection** (changing the curve means naming a different CONFIG value, not editing logic).
  - `1000` — ms→s unit conversion in the clock readout (×2 sites): **structural**.
  - `100` — CSS `width:100%` page layout: **structural**.
  - `270, 2000, 1.3, 2.1, 8, 9` — occurrences inside the document `<title>`, HTML comments, and code comments (e.g. "road to 270", section references): **non-construction text**, not code literals.
- Path-data literals: **none** — region geometry exists only as `regions[].cells` CONFIG data; outline paths/edges are derived by `boundaryEdges()` at runtime. No traced geometry exists to classify.
- Font stacks: the renderer's SVG text carries no font-family literal (inherits the page stack); the page CSS font stack (Georgia/serif) is page chrome, printed here: **structural (page chrome)**, same disposition as the chrome colours.

## 2. Key → application-site resolution (every CONFIG key; nested/array included)
| CONFIG key | Application site (value flows into) |
|---|---|
| `total` | `derive()` postXFraction + `validateConfig()` threshold/sum constraints |
| `threshold` | `derive()` postXFraction + thresholdLabel |
| `stageW` / `stageH` | renderer viewBox + `derive()` fieldW |
| `marginPx` | `derive()` fieldX/fieldY/fieldW |
| `gridCols` / `gridRows` | renderer cell loops · `stateAt()` gridCells/neverClaimed · validation grid bounds |
| `gapRatio` | `derive()` cellPx/gapPx |
| `palette.ground` | renderer ground rect fill |
| `palette.cell` | renderer grid cell rects fill |
| `palette.sideA` / `palette.sideB` | renderer fill rects + outline strokes (side-selected per region) |
| `palette.post` | renderer post rect fill + plate stroke |
| `palette.plate` | renderer plate rect fill (opacity 1.0) |
| `palette.plateInk` | renderer plate text fill |
| `fillOpacity` | renderer fill rects opacity |
| `outlineWidthPx` / `outlineOpacity` | renderer outline line stroke-width / opacity |
| `easing` | `stateAt()` fill interpolation via `EASINGS[cfg.easing]` |
| `postWidthPx` / `postOverhangPx` | renderer post rect geometry |
| `plateWPx` / `plateHPx` | renderer plate rect geometry + plate text position |
| `labelFontPx` | renderer plate text font-size |
| `labelMinPx` | `validateConfig()` floor check (labelFontPx ≥ labelMinPx, rejects loudly) |
| `tGridSettleMs` | `derive()` completeAtMs max() term + `stateAt()` gridProgress, bound in the renderer to the grid group's opacity (the visible SB-A settle) |
| `drawDurMs` / `fillDelayMs` | `fillStartMs()` + draw intervals in `stateAt()` |
| `tPostMs` / `postDurMs` | `stateAt()` postProgress + `derive()` postEnd |
| `holdMs` | `derive()` durationMs = completeAtMs + holdMs |
| `accumulationDirection` | `effStartMs()` stagger mirroring |
| `regions` | all construction (cells/fills/outlines/tallies) |
| `regions[].id` | dispatch identity in renderer views + `stateAt()` region map (never value-dispatched) |
| `regions[].side` | palette selection + credited tally side in `stateAt()` |
| `regions[].weight` | credited tallies in `stateAt()` (credited only at fillEnd) |
| `regions[].cells` | renderer fill rects + grid ownership + `boundaryEdges()` outline derivation |
| `regions[].startMs` | `effStartMs()` draw/fill schedule |
| `regions[].fillEndMs` | `fillDurMs()`/`fillEndMs()` + credit instant in `stateAt()` |

Derived-not-stored (no key, by amendment C6): `fillStartMs · fillDurMs · completeAtMs · durationMs · thresholdLabel · postXFraction · cellPx · gapPx · field geometry` — computed in `derive()`/`fillStartMs()` from the inputs above.
Plan departure printed: the record's `platePadPx` derivation key is NOT carried — plate size is direct CONFIG (`plateWPx`/`plateHPx`) and pad adequacy is discharged by the fit leg's measured margins (fit-table rows 1–2: 9.0/10.0 px at stage size), which is a measurement, not a formula claim.

## 3. CSS-variable setter check
No CSS variables are used (`var(--` occurrences: 0 · `setProperty` occurrences: 0) — no setter can be missing. PASS by absence, printed.

## HIT list
**0 HITs** — every CONFIG key resolves to a value-flowing application site (nested/array keys included); no subject-shaping literal stands outside CONFIG.
