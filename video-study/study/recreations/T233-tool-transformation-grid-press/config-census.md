# T233 — config-census (guard-config-census v3.1) · final build sha 0cac34f4…

Method: scripted all-literal scan of recreation.html outside the CONFIG block + key→application-site resolution (node scan, this run; counts below are its output). Two cure rounds preceded this filing (see build-record): the fit-font cure and the literal-binding cure (23 shaping keys added; `easeSettle` given a value-flowing site in `stateAt`).

## 1. Literal scan (outside CONFIG)
- Hex/rgba colours outside CONFIG: **0**.
- Numeric literals outside CONFIG after cures: {0 ×42 · 1 ×67 · 2 ×27 · 3 ×10 · 4 ×2 · 5 ×1 · 6 ×2 · 7 ×2 · 14 ×1 · 15 ×1 · 61 ×1 · 0.5 ×1 · 4294967296 ×1} + the digit string "2000" inside the SVG namespace identifier `http://www.w3.org/2000/svg` (an identifier, not a value).
- Classification per constant:
  - 0, 1, 2, 3, 4, 5, 6, 7 — **structural**: loop bounds, array indices, phase-clamp identities, `toFixed(3)` formatting precision, PIP_LAYOUTS grid coordinates (pip pattern geometry is data inside the layout table, indexed by the CONFIG-bound pip count), exponent/arithmetic identities in easing functions.
  - 0.5 — **structural**: the easeInOut midpoint identity (`p < 0.5`) and gather/boundary expressions read CONFIG durations; the one remaining code occurrence is the easing identity.
  - 14, 15, 61, 4294967296 — **structural**: mulberry32 algorithm constants (0x6D2B79F5 family rendered in decimal by the scan: 61 = shift, 4294967296 = 2^32 normalizer; 14/15 = bit shifts). Changing them changes the RNG algorithm, not the subject's appearance parameters — the seed itself is CONFIG (`rngSeed`).
  - Every subject-shaping value found by the first scan (stem travel 90/70 · stem anchor 0.55 · lift fraction 0.45 · occluder ramp 0.55 · bowl fractions 0.62/0.82/0.48/6 · prior-cube ring/size 0.45/18/0.5/0.4 · slot fractions 0.55/0.45/0.55 · pip spread 0.28 · board band 46 · seam angle 0.3 · stroke widths 2.5/3/4/7/2 · radii 5/8 · label offsets/halo 12/3/4) was **bound as a CONFIG key in the cure** (keys listed in §2) — none remains classified structural.

## 2. Key → application-site resolution (value-flowing sites; scan counts)
Every CONFIG key resolves to ≥1 site where its value flows into the subject/state it names:
- Geometry/stage: stageW ×3 · stageH ×3 · subjectCx ×14 · subjectCy ×13 · subjectR ×14 · seamCount ×2 · seamAngOff (seam line angle) · seamStrokePx (seam line stroke-width, render — the seam `<line>` elements' `stroke-width` in `render`) · cushionStrokePx (cushion circle stroke-width, render — the subject `<circle>`'s `stroke-width` in `render`) · pinRadiusPx ×1 · stemScale ×2 · stemTravelX (stem x-offset in state) · stemTravelY (stem y-offset in state) · stemAnchorF (star anchor) · stemStar (polygon points in render).
- Tool: gridCols ×4 · gridRows ×4 · cellPx ×11 · handleW ×3 · handleHPx ×4 · handleRxPx (handle rect rx) · pressTravelPx ×2 · liftTravelFraction (grid offset in state) · pressSquash ×3 · occluderMax ×2 · occluderRampStart (ramp in state) · gridStrokePx · gridFrameStrokePx.
- Output: cubeCols ×5 · cubeRows ×4 · cubeLayers ×2 · cubeGapPx ×3 (incl. derived cubePx = cellPx − cubeGapPx) · layerOffsetPx ×2 · revealStaggerFraction ×3 · cubeStrokePx · cubeRxPx · pipStyle ×3 (validator + cubeData branch — swapped-value receipt in build-record) · pipRadiusPx ×1 · pipSpreadF (pip offsets) · rngSeed ×2 (cubeData + prior-cube stream offset).
- Bowl: bowlCx ×4 · bowlCy ×4 · bowlR ×6 · bowlRyF · bowlInnerRxF · bowlInnerRyF · bowlInnerDyPx · bowlSlotInset ×1 · slotBaseF/slotVarF/slotYF (slot derivation) · priorCubes ×2 · priorRingF · priorCubePx · priorYF · priorAngOff · boardBandPx.
- Labels/type: labelFontPx ×2 · toolLabelFontPx ×1 · toolLabelDyPx · toolHaloPx · labelHaloPx ×2 · inputLabelDy ×1 · outputLabelDy ×1 · fontFamily ×3 · inputLabel ×1 · toolLabel ×1 · outputLabel ×1.
- Timing (all consumed by `schedule()` derivation + phase evaluations): tStemOffMs ×2 · stemOffDurMs ×2 · settleDurMs ×1 · pressDurMs ×2 · pressHoldMs ×2 · liftDurMs ×3 · slabHoldMs ×1 · gatherDurMs ×2 · holdMs ×1.
- Easings: easeStem ×1 · easeSettle ×1 (settleRaw→settleE in stateAt — the settle phase's evaluated value) · easePress ×1 · easeLift ×2 · easeGather ×1.
- palette.* (via `P = cfg.palette` in render): board · boardDark · cushion · cushionDark · seam · stem · pinColors (pin fill by `ci`) · grid · gridDark · handle · cube · cubeEdge · pip · bowl · bowlInner · priorCube · labelInk · labelHalo — each read at its named element's fill/stroke site.
- pins[].dx · pins[].dy · pins[].ci (via `p.`/`pn.` in stateAt + render): pins[].dx ×(pin x) · pins[].dy ×(pin y) · pins[].ci ×(pin colour index). stemStar[][0/1] via `pt[0]/pt[1]`.

## 3. CSS-variable setter check
No CSS variables are used (`var(--` absent); CONFIG reaches CSS only through the fixed stylesheet (stage sizing), which carries no CONFIG-promised values. No unset-variable references.

HIT list: **empty (0 HITs)** after the two cure rounds.

## 4. Cycle 041 completion re-run (A12.3 cure 3 — census completion)
Re-run on the unchanged final build (sha 0cac34f4…) at Cycle 041: §2 now carries explicit application-site entries for `seamStrokePx` (seam line stroke-width, render; 2 occurrences in recreation.html — CONFIG declaration + the seam `<line>` stroke-width site, pattern-verified) and `cushionStrokePx` (cushion circle stroke-width, render; 2 occurrences — declaration + the subject `<circle>` stroke-width site, pattern-verified). Mechanical reconciliation (node, this run): every CONFIG key extracted from the build — 103 keys incl. `palette.*` members and `pins[].dx` / `pins[].dy` / `pins[].ci` / `stemStar` — was checked by name against this census; first pass found 5 names carried only in combined notation (`stemTravelX/Y`, `pins[].dx/dy/ci`) or missing (`seamStrokePx`, `cushionStrokePx`); §2 was amended to name each key explicitly and the re-check prints **missing = [] (0)**. HIT list remains **empty (0 HITs)**.
