# T232 — config-census leg (A6, v3.1) · final build sha bbe53950…

## Completion refile (Cycle 040 Wave 37, A12.3) — cured build sha a4ef82ac…
Re-run on the cured build (sha256 `a4ef82acf89d858d8decc0382acbe1ce4fffdd11d53dce7d0f779db28bfc4a1e`, 12,448 B). The only build change is the pipStyle binding cure (scores.md cure 3).
- **pipStyle — REAL application site (this refile prices it by value flow, per the Cycle 039 regression refinement):** `pipStyle` → the pip-drawing branch in the render script (`t232-render`, render loop): `if (cfg.pipStyle === "squares")` → pip rects · `else if (cfg.pipStyle === "diamonds")` → pip rects rotated 45° · else → pip circles. The key's value is READ at that branch and determines the element type created per pip. Proof is by evaluated state under swapped values, not by key listing: stub-DOM render receipts in build-record.md completion §2 — dots: 34 circle pips / 0 rect pips · squares: 0 circle / 34 rect · diamonds: 0 circle / 34 rect, all rotated45=34 (9 dice at 2500 ms, 34 pips total). **pipStyle is BOUND; disposition: bound with receipt.**
- **New literals introduced by the cure, classified:** `"squares"` / `"diamonds"` string literals in the render branch — the pipStyle value vocabulary the branch compares the CONFIG value against (the style CHOICE is CONFIG data; the branch does not hardcode a style) — structural vocabulary, not a shaping literal standing outside CONFIG · `45` (diamond rotation degrees) — structural geometry identity of the diamond form (a square at 45°), the pip size itself remains CONFIG (`pipRadiusFrac`) · `2 * pr` rect sizing — derived from `pr`, itself CONFIG-derived (`pipRadiusFrac`).
- All other rows in §§1–3 below stand unchanged for the cured build (no other literal, key, or CSS-variable state changed; re-grep receipt: `pipStyle` occurrences = CONFIG declaration + 2 branch comparisons in the render script).
## HIT list (completion refile)
**0 HITs** — pipStyle now resolves to a value-flowing application site proven under swapped values; every other CONFIG key's resolution below stands.

## §1 All-literal scan (outside the CONFIG block)
Literal count by class: hex colors outside CONFIG **0** (all fills/strokes read `palette.*`) · durations outside CONFIG **0** · geometry outside CONFIG: the constants below, each classified in print.

| Literal | Site | Classification |
|---|---|---|
| 0x6D2B79F5, 15, 7, 61, 14 (mulberry32 body) | logic RNG | structural — mathematical identities of the seeded RNG; changing them changes the stream, not a shaping decision (the seed itself is CONFIG) |
| 2π, 0.5, easing coefficients (2, −2) | EASE table + saw sin | structural — easing-function definitions; the easing CHOICE per phase is CONFIG (`easeSaw/easeChop/easeSettle`) |
| 777 (pip-face stream offset) | dieData | structural — stream separation constant; faces derive from CONFIG seed |
| 1, 6 (face range 1 + floor(rng×6)) | dieData | structural — the definition of a standard die's face range; pip style itself is CONFIG (`pipStyle`, `productKind`) |
| cols×2 perLayer, idx arithmetic | stackPos | structural — grid indexing identities; grid-shaping values (gaps, pitch, layer fraction) are CONFIG |
| +8, +6/−6 px (strip path arc endpoints) | render strip path | structural — path-join tolerances inside the strip construction; the strip's shaping values (domeR, stripCount, gap) are CONFIG |
| grain: 5 lines, 40/46/34 px steps, opacity 0.55, stroke-width 2 | render board grain | decorative background texture — fixed board dressing, identical for every drive of the CONFIG; it does not scale, move, or set intensity against the subject (A9.6 test: no lens can price grain geometry against the dice — it neither grows nor competes); classified decorative-structural, printed here |
| stroke-widths 6 (board edge), 2 (strip/knife), 1.5 (die edge), dasharray "5 4" | render | structural — fixed line weights of the drawing construction; the stitch's shaping fractions are CONFIG (`stitchRxFrac`, `stitchYFrac`) |
| pr minimum 1.2 px | render pip radius | structural — a legibility clamp (floor), the pip size itself is CONFIG (`pipRadiusFrac`) |
| +400 ms loop pad | render frame loop | structural — playback loop padding, not a phase timing (all phase timings are CONFIG) |
| PIP_LAYOUT coordinate table (−1/0/1) | render | structural — the standard pip geometry of a die face, indexed by the CONFIG-seeded face value |

Cured during Execute (moved into CONFIG before this census was filed): `stackRowPitchFrac` (was literal 0.92) · `pileCenterDyPx` (was −6) · `pipOffsetFrac` (was 0.26) · `stitchRxFrac`/`stitchYFrac` (were 0.72/0.42) · `scatterYFrac` (was 0.45, also the P4 bounds cure).

## §2 Key → application-site resolution (value-flowing sites)
- stageW/stageH → SVG viewBox + ground rect · boardX/boardY/boardW/boardH/boardRadiusPx → board rect in buildScene.
- domeCx/domeCy/domeR → stateAt knife saw position, stackPos, scatter center, strip path geometry · stripCount → strip path loop + stateAt strips.count · stripGapPx → stateAt stripGapPx (P-slice receipt).
- sliceDurMs → stateAt sliceP + knife ownership + validateConfig phase order · sawAmpPx/sawCycles → saw offset in stateAt · easeSaw → stripGap easing.
- knifeRestX/knifeRestY → rest pose + chop start pose · knifeBladeLenPx/knifeBladeHPx/knifeHandleLenPx/knifeHandleHPx → blade path + handle rect in buildScene · knifeAngleDeg → knife group transform · chopLeadMs → chop windows in stateAt + validator · chopTravelPx → chop y travel · easeChop → chop easing.
- settleFrac/settleDurMs/easeSettle → pile settle lerp in stateAt · holdMs → derive durationMs · seed → dieData streams A/B.
- productKind → stateAt productKind field (the swap's product identity) · pipStyle → **[SUPERSEDED at the Cycle 040 completion refile above — the Wave-36 claim on this line ("pip rendering branch data (dieData faces + PIP_LAYOUT selection)") was the false site the prewave priced; the real site is the render script's pip-drawing branch on `cfg.pipStyle`, proven under swapped values in the completion refile]** · dieBasePx → die sizes, stack cell, stackPos · dieRadiusPx → die rect rx · pipRadiusFrac → pip radius · pipOffsetFrac → pip positions · stackColGapPx/stackRowGapPx → stack cell pitch · stackLayerDyFrac/stackRowPitchFrac → stackPos y · scatterYFrac/pileCenterDyPx → pile positions in stateAt.
- passes[].tMs → stateAt active-pass selection + chop windows + validator · passes[].count → dice loop bound + count assertions · passes[].sizeFactor → dieData size · passes[].layout → position branch (stackPos vs scatter) · passes[].scatterRadiusPx → scatter ellipse radii.
- palette.* (13 keys, read through the `P = cfg.palette` alias in buildScene and render — grep receipt: exactly one `P.<key>` site per key) → ground → SVG ground rect fill · board → board rect fill · boardEdge → board rect stroke · boardGrain → grain line strokes · leather → strip path fill · stitch → stitch-dash path stroke · yarn → strip outline stroke · dice → die rect fill · diceEdge → die rect stroke · pip → pip circle fill · steel → knife blade path fill · steelDark → knife blade edge stroke · handle → knife handle rect fill. (Prewave cure round: `ring`/`core` were REMOVED from CONFIG — the cut-face interior is T08's deferred subject and the keys had no application site; `fontFamily` was REMOVED — the recreation carries no text and the comparison page's font stack is its own CSS, so no CONFIG key claims it.)

## §3 CSS-variable check
No CSS variables are used anywhere in recreation.html (no `var(--` occurrence) — no setter can be missing. **No HIT.**

## HIT list
**0 HITs** — every CONFIG key (nested `passes[]` keys included) resolves to a value-flowing site; every subject-shaping literal found in the first draft was moved into CONFIG during Execute and is listed in §1.
