# config-census — T204 (guard-config-census leg v3.1, A6) · final build sha256 8e1551ad…

Scan: all literals outside the CONFIG block of `recreation.html` counted and classified; every CONFIG key (51 top-level) resolved to its application site(s), nested/array keys included; CSS-variable setter check run.

## 1. Literal scan outside CONFIG

- **Hex/rgba colors outside CONFIG: 0.** Every color is a CONFIG value (`cellColor`, `groundColor`, `titleColor`, `bandBlocks[].c`).
- **Numeric literals outside CONFIG: 126 occurrences**, classified per constant:
  - `0` (58) · `1` (41) · `2` (10) — **structural**: loop bounds, indices, clamp bounds, array offsets. Exempt, printed.
  - `100` (4) — **structural**: percent conversion in the clip-path inset and speckle positioning. Exempt.
  - `1000` (2) — **structural**: the front-quantization constant in `frontsAt` (1/1000-cell snap, the epsilon cure — a precision identity, not a shaping value). Exempt.
  - `0.98` (1) — **structural-definition**: the BLACKENED threshold from plan-amendment A1 (the definition of the black state, fixed by the amendment, not a per-specimen shaping value). Exempt, printed per the guard's per-constant rule.
  - RNG/hash constants (`0x6D2B79F5`, 4294967296, shifts 15/7/61/14, hash multiplier 31, `1e-9`) — **structural**: mathematical identities of the mulberry32 generator and the state hash. Exempt.
  - **Subject-shaping literals outside CONFIG: 0.** (Pre-cure, the speckle count 240, speckle size/alpha coefficients, the speckle gain 8, and the title offsets 0.045/0.10 stood in code; all were moved into CONFIG — `groundSpeckleCount/SizeMin/SizeVar/AlphaMin/Gain`, `titleLeftFrac/titleTopFrac` — before this census was filed.)
- **String literals outside CONFIG:** DOM element ids and the keyframe field names (`colFrac`/`rowFrac`/`lastRowFrac`) read from CONFIG data — structural addressing, not content. The title text, font stack, and all palette strings live only in CONFIG.

## 2. CONFIG key → application-site resolution (51 keys; site = where the value flows into the subject's construction)

| Key(s) | Application site |
|---|---|
| `titleText` | `revealState` (prefix/clip) · renderer span text + canvas fit measure |
| `cols` / `rows` | `frontsAt` (front scaling) · `totalCells` · renderer cell loops · `geometry` pitch |
| `lastRowCells` | `frontsAt` (lastRowFront scaling) · `totalCells` · renderer partial-row loop |
| `lastRowOffsetCols` | `offsetUsed` → cell x positions (state + renderer) |
| `stageW` / `stageH` | `geometry` · band geometry in `stateAt` · renderer font/band sizing |
| `fieldLeftFrac/fieldTopFrac/fieldWidthFrac/fieldHeightFrac` | `geometry` (field rect, incl. origin-corner branch) |
| `cellFillFrac` | `geometry` (cell side = min(pitch) × fill) |
| `cellColor` | renderer cell background |
| `groundColor` | renderer ground background |
| `groundTextureOpacity/Scale/Contrast` | `textureSpeckles` (speckle alpha/size) |
| `groundSpeckleCount/SizeMin/SizeVar/AlphaMin` | `textureSpeckles` (count + jitter ranges) |
| `groundSpeckleGain` | renderer speckle opacity |
| `assembleStartMs` / `assembleMs` | `frontsAt` · `axisFullTime` · `stateAt` assemblyDone/band predicate |
| `growthKeyframes[]` (nested: `.f/.colFrac/.rowFrac/.lastRowFrac`) | `frontsAt` interpolation · `axisFullTime` inversion — every nested field read |
| `cellFadeMs` / `cellFadeFloor` | `stateAt` cell opacity (fade slope + newborn floor) |
| `fadeSettleMs` | `stateAt` `settled` flag (assemblyDone + fadeSettleMs) |
| `bandBlocks[]` (nested: `.c/.x/.y/.w/.h`) | renderer band block divs — every nested field read |
| `bandLeftFrac/bandTopFrac/bandWidthFrac/bandHeightFrac` | `stateAt` band rect + occlusion · renderer band geometry |
| `bandInMs` / `bandInStartMs` | `stateAt` bandStartEff predicate + band width fraction |
| `titleColor` / `titleFontFamily` | renderer span color/font · canvas fit measure font |
| `titleSizeFrac` | renderer base font size · `stateAt` fit-scale em computation |
| `titleFitInnerFrac` | renderer canvas fit rule · `stateAt` `titleFitScale` |
| `titleLeftFrac` / `titleTopFrac` | renderer span position |
| `revealStartMs` / `revealMs` | `revealState` clock · `stateAt` phase |
| `revealKeyframes[]` (nested: `.f/.chars`) | `revealState` char-fraction interpolation — both fields read |
| `glyphWidthEm` (nested: `.default` + per-char) | `glyphWidth` → `textWidthEm` → clip fraction + fit scale |
| `holdEndMs` | `stateAt` `phase` (hold/tail boundary) |
| `buildMs` | renderer/comparison clock bound |
| `seed` | `textureSpeckles` mulberry32 seed |
| `originCorner` | `geometry` (fromRight/fromBottom branch → field origin) |
| `growthAxes` | `frontsAt` (axis-swap branch → front assignment) |
| `revealDirection` | `revealState` (prefix vs suffix branch) |

Unapplied keys: **none** (pre-cure, `fadeSettleMs`, `holdEndMs`, `originCorner`, `growthAxes`, `revealDirection` had no site; each was wired into `stateAt`/`geometry`/`frontsAt`/`revealState` as tabled above before this census was filed).

## 3. CSS-variable setter check

The build declares **no CSS variables** and references none (`var(--…)` occurrences: 0) — no unset-variable reference can exist. CONFIG reaches CSS only through JS style assignments, each tabled in §2.

**HIT list: EMPTY (0 hits)** on the final build.
