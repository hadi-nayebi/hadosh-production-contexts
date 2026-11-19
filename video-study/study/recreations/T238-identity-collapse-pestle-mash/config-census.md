# T238 — config-census (guard-config-census v3.1) · final build sha 3f6dba31…

Method: scripted all-literal scan of recreation.html outside the CONFIG block + key→application-site resolution (node/python scan, this run; counts below are its output). One cure round preceded this filing: 19 shaping keys bound (cornerBaseF · pipRadiusF · blendMaxF · objStrokePx · pestleTiltDeg · boardBandPx · slabStrokePx · labelHaloPx · unionBaseF · unionGrowF · blobCount · blobBaseF · blobSpanF · blobExtentF · blobOpacityF · houseBodyYF · houseBodyHF · houseRoofOverF · houseRoofApexF).

## 1. Literal scan (outside CONFIG, after cures)
- Hex colours outside CONFIG: `#241a10` ×1 — the CSS page background (page chrome, not subject; T219 body-chrome precedent). Classified chrome/structural.
- Numeric literals outside CONFIG: {0 ×65 · 1 ×50 · 2 ×20 · 3 ×9 · 4 ×2 · 5 ×3 · 6 ×1 · 7 ×1 · 8 ×1 · 0.25 ×34 · 0.5 ×5 · 0.92 ×2 · 14 ×1 · 15 ×1 · 16 ×3 · 61 ×1 · 100 ×1 · 2000 ×1 · 4294967296 ×1}.
- Classification per constant:
  - 0, 1, 2, 3, 4, 5, 6, 7, 8 — **structural**: loop bounds, array indices, clamp/phase identities, `toFixed` precision, substr offsets, PIP_LAYOUTS keys.
  - 0.25 ×34 — **structural (data)**: PIP_LAYOUTS pip-pattern coordinates — geometry data inside the layout table, indexed by the CONFIG-bound `pips` count (T233 PIP_LAYOUTS precedent).
  - 0.5 — **structural**: easeInOut midpoint identity (`p < 0.5`), the setup-half derivation (durations read from CONFIG), and the strokeCount=1 sweep midpoint (a derived centre, not a shaping value).
  - 0.92 — **structural (validation)**: validateConfig's bowl-bound constant; it validates CONFIG data, it does not shape the subject (the bound itself is printed in the Plan §2.1).
  - 14, 15, 16, 61, 4294967296 — **structural**: mulberry32 algorithm constants (shifts + 2^32 normalizer); the seed itself is CONFIG (`rngSeed`).
  - 100 — **structural**: CSS `width:100%` (page chrome). 2000 — the digit string inside the SVG namespace identifier `http://www.w3.org/2000/svg` (an identifier, not a value).
  - Every subject-shaping literal found by the first scan was bound as a CONFIG key in the cure round (keys listed in the header) — none remains classified structural.

## 2. Key → application-site resolution (value-flowing sites; scan counts)
- Stage/bowl: stageW ×3 · stageH ×3 · bowlCx ×16 · bowlCy ×13 · bowlRx ×3 · bowlRy ×3 · bowlWallPx ×1 · pasteInsetF ×2 · boardBandPx (board band rect).
- Pestle: pestleRx ×1 · pestleRy ×2 · pestleRestDx ×2 · pestleRestDy ×2 · pestleDipPx ×2 · pestleLiftPx ×1 (raisedY in stateAt) · pestleHandleLenPx ×2 · pestleHandleRxPx ×3 · pestleSweepPx ×5 · pestleTiltDeg (pestle group rotate).
- Clock/collapse: stepMs ×10 · pressSteps ×11 · pressLossShare ×5 (lossAtStep) · readableThresh ×3 · marksCutF ×2 · labelSwitchF ×1 · pasteStart ×4 · sinkPx ×1 · deformShrink ×2 · deformRound ×1 (via cornerF) · cornerBaseF (cornerF base).
- Paste/slabs: slabBaseScale ×1 · slabGrowScale ×1 · unionBaseF · unionGrowF (union ellipse radii) · slabStrokePx (slab stroke) · blobCount · blobBaseF · blobSpanF (blobs()) · blobExtentF · blobOpacityF (blob render) · fleckPx ×5 · **rngSeed ×1 — `mulberry32(cfg.rngSeed)` inside `blobs(cfg)` in the logic script: the seed values the paste-texture blob field (prewave-cure binding, reconciling guard 7).**
- Objects/render: pipRadiusF (pip circles) · blendMaxF ×2 (die + roof colour mixes) · objStrokePx (object rect stroke) · houseBodyYF ×2 · houseBodyHF · houseRoofOverF ×2 · houseRoofApexF (house render).
- Labels/type: labelFontPx ×2 · toolLabelFontPx ×1 · inputLabelDy ×1 · toolLabelDy ×1 · outputLabelDy ×1 · labelHaloPx (label halo stroke) · fontFamily ×1 · inputLabel ×1 · toolLabel ×1 · outputLabel ×1.
- Timing/easing: tSetupMs ×2 · setupDurMs ×4 · strokeCount ×10 · strokeDurMs ×10 · holdMs ×2 (schedule durationMs) · easeStroke ×1 (`EASE[cfg.easeStroke]` in stateAt — pressRaw→pressE + travel easing) · easeSetup ×1 (`EASE[cfg.easeSetup]` — liftP).
- palette.* (via `P = cfg.palette` in render): board · boardDark · bowl ×2 · bowlDark ×2 · paste ×4 · pasteDark ×2 · die · dieEdge · pip · house · houseRoof · minidie · minipip · cube · pestle · pestleDark · labelInk · labelHalo — each read at its named element's fill/stroke site.
- slabs[].x/y/rx/ry via `sl.` in render (×1 each; the array is consumed by the slab loop). objects[].kind ×8 · cs ×7 · x ×3 · y ×3 · s ×12 · rot ×3 · pips ×2 via `o.`/`cfg.objects` (×4) in stateAt + render.

## 3. CSS-variable setter check
No CSS variables are used (`var(--` count 0); CONFIG reaches CSS only through the fixed stylesheet (stage sizing + the classified page background), which carries no CONFIG-promised values. No unset-variable references.

HIT list: **empty (0 HITs)** after the cure round.

## Cycle 042 completion re-verification (2026-11-19, final build sha 3f6dba31… — build unchanged)
Fresh scan of the final build: hex colours outside CONFIG = `#241a10` ×1 only (the classified CSS page background) · `var(--` count 0 · `Math.random` count 0 · `rngSeed` application site present ×1 (`mulberry32(cfg.rngSeed)` in `blobs(cfg)`). No new subject-shaping literal; the §1 classifications and §2 key→site resolutions stand as filed. HIT list: **empty (0 HITs)** — re-verified.
