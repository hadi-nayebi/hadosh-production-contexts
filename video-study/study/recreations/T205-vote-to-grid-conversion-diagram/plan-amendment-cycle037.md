# T205 — Plan Amendment, Cycle 037 (Wave 34) — filed BEFORE any build script (A9.2)

Authority: item record `runs/2026-11-18-cycle-037-wave-34/item-T205-observe-plan.md` (NOT retro-edited; this amendment governs where it differs). Gates cured: jev-observe-exit ADVANCE-WITH-GAPS (variables 0.5) + jev-plan-exit REVISE / UNBOUND-SCHEDULE (param 0.74 · construction 0.90 · execute 0.82 · verify 0.78 · failure 0.72 · plateau 1.00). Charges cured: **9** (2 observe-exit + 3 plan-exit charge groups, expanded to 9 numbered cures below).

## Cure 1 — Census mapping completed with executable rows (plan-exit charge 1)
The §2.3 anchor table is EXTENDED to a 14-checkpoint executable mapping (segment-relative ms = sourceMs − 37000). Every row binds a CONFIG expression (phases[] lookup) as its evaluation instant in the build harness (A11):

| CP | Source t | Seg ms | CONFIG expression for instant | Prescribed state (stateAt) |
|---|---|---|---|---|
| CP01 | 37.0 | 0 | phases.outlineDraw.startMs | outlineProgress = 0.00 exactly (partial outlines: progress < 0.30 bound, value 0); layout=full; fill=0; disc absent |
| CP02 | 38.0 | 1000 | phases.outlineDraw.startMs + 1000 | outlineProgress ∈ (0.40, 0.95) — outlines nearly complete, draw not finished |
| CP03 | 39.0 | 2000 | phases.outlineDraw.endMs + 100 | outlineProgress = 1; layout=full; fill = 0 (zero-state anchor, guards cmd 8) |
| CP04 | 40.0 | 3000 | phases.layoutShift.endMs | layout=split; paperProgress = paper.stubFraction = 0.15 exactly (the stub); checkProgress = check.stubTick = 0.08 exactly (the tiny tick); connector = 0; fill = 0 |
| CP05 | 41.0 | 4000 | phases.checkDraw.startMs | paperProgress ∈ (0.50, 0.95) (paper taller); checkProgress ∈ [0, 0.50] (check drawing begins) |
| CP06 | 42.0 | 5000 | phases.checkDraw.endMs | paperProgress = 1; checkProgress = 1; checkColor = palette.checkIdle; connector = 0; fill = 0 (zero-state anchor) |
| CP07 | 43.0 | 6000 | phases.connectorExtend.startMs + 1000 | connectorProgress ∈ (0.30, 0.90); fill = 0 |
| CP08 | 43.2 | 6200 | phases.connectorExtend.endMs | connectorProgress = 1 (contact); paperProgress = 0 (cast complete); fill = 0 (zero-state anchor) |
| CP09 | 43.4 | 6400 | phases.blockWash.startMs | paperProgress = 1 (reappeared HIGH — paperLift = geom.paperLiftPx); fillProgress ∈ [0, 0.20] (wash onset); checkColor = palette.checkActive |
| CP10 | 43.6 | 6600 | phases.blockWash.startMs + 200 | fillProgress ∈ (0.20, 0.80) (graded, pale); checkColor = active |
| CP11 | 43.8 | 6800 | phases.blockWash.startMs + 400 | fillProgress ∈ (0.50, 0.95) (wash strengthening) |
| CP12 | 44.0 | 7000 | phases.blockWash.endMs | fillProgress = 1 for block "west"; connector = 1; checkColor = active |
| CP13 | 45.0 | 8000 | phases.convertedHold.startMs + 1000 | state identical to CP12 (fill=1, connector=1); fadeProgress = 0; diagramOpacity = 1 |
| CP14 | 46.0 | 9000 | phases.fadeOut.endMs | fadeProgress = 1; diagramOpacity = fade.residualOpacity = 0.25 exactly, bounded [0.15, 0.45] — the diagram is FADED, never vanished (cures the `opacity < 1` defect: a vanished diagram at opacity 0 FAILS this row) |

## Cure 2 — Initial partial outlines bound (plan-exit charge 1, sub-item)
CP01 binds outlineProgress to the explicit value 0 at t=0 with the partial-state bound progress < 0.30 across [0, 570 ms] (570 = 0.30 × outlineDraw duration, CONFIG-derived); the substrate is never prescribed complete before CP03.

## Cure 3 — 3000 ms paper stub + tick bound (plan-exit charge 1, sub-item)
New CONFIG keys `paper.stubFraction = 0.15` and `check.stubTick = 0.08`: during paperGrow the paper height fraction is stubFraction + (1 − stubFraction) × growProgress (so the stub exists at layout completion), and before checkDraw starts the check renders at stubTick progress (the tiny tick seen at census 40.0 s). Both values are asserted exactly at CP04.

## Cure 4 — Residual opacity at 9000 ms bound (plan-exit charge 1, sub-item)
New CONFIG key `fade.residualOpacity = 0.25`. diagramOpacity = 1 − (1 − residualOpacity) × fadeProgress. CP14 asserts the exact value 0.25 ∈ [0.15, 0.45] and > 0.

## Cure 5 — phases[] is the SOLE timing authority; durations derived by subtraction (plan-exit charge 2)
The legacy `timing.*Ms` duration keys are REMOVED from CONFIG. The only timing data is `phases[]` (id, startMs, endMs). Every duration named anywhere (parameter table, records, harness) is endMs − startMs. Corrected durations: **connectorExtend = 6200 − 5000 = 1200 ms** (was misprinted 1000) · **layoutShift = 3000 − 2500 = 500 ms** (was misprinted 600). Full amended schedule:

| Phase | startMs | endMs | Duration (derived) | Notes |
|---|---|---|---|---|
| outlineDraw | 0 | 1900 | 1900 | |
| substrateHold | 1900 | 2500 | 600 | |
| layoutShift | 2500 | 3000 | **500** | split complete at 3000 anchor |
| paperGrow | 3000 | 4500 | 1500 | |
| checkDraw | 4000 | 5000 | 1000 | declared overlap with paperGrow tail (500 ms) |
| connectorExtend | 5000 | 6200 | **1200** | |
| paperRetract | 5900 | 6200 | 300 | declared overlap with connectorExtend tail (300 ms) |
| paperReappear | 6200 | 6400 | 200 | paper returns HIGH (geom.paperLiftPx) |
| blockWash | 6400 | 7000 | 600 | GATED: starts only at max(connectorExtend.endMs, paperRetract.endMs) + 200 |
| convertedHold | 7000 | 8200 | 1200 | |
| fadeOut | 8200 | 9000 | 800 | |

## Cure 6 — Swap's moved contact traced through cast, probes, and hold redistribution (plan-exit charge 2)
Swap sets phases.connectorExtend.endMs 6200 → **6950** (duration 1200 → 1950, derived). Derivation rule (harness-implemented, CONFIG-schedule-driven): shift Δ = +750 ms applies to every phase boundary at or after the old contact instant EXCEPT fadeOut, whose start stays 8200. Resulting swapped schedule: paperRetract [6650, 6950] (duration preserved 300, ending at contact) · paperReappear [6950, 7150] · blockWash [7150, 7750] (duration preserved 600) · convertedHold [7750, 8200] — **the converted hold redistributes 1200 → 450 ms**, absorbing the shift so the segment still ends at 9000. Moved probes: CP08 instant 6200 → 6950 (contact/cast/zero-fill) · CP09 6400 → 7150 (wash onset) · CP10 6600 → 7350 · CP11 6800 → 7550 · CP12 7000 → 7750. The swap receipt must show CP09's moved instant 7150 evaluated from the swapped CONFIG expression phases.blockWash.startMs (A12).

## Cure 7 — Overlap entry gains the declared overlaps + wash gates (plan-exit charge 2)
The failure-point overlap entry is amended from "LOW — phases strictly sequential" to: **declared overlaps are (a) checkDraw ∩ paperGrow tail (500 ms, same ballot lifecycle, census 41–42 s) and (b) paperRetract ∩ connectorExtend tail (300 ms, census 43.2 s: connector full while paper drops). The block wash is GATED on two completed conditions — connector contact (connectorProgress = 1) AND cast completion (paperProgress = 0 at retract end) — plus the 200 ms reappear interval; fillProgress = 0 is asserted at both zero-state anchors CP06/CP08 and at CP07. Any other phase overlap is a defect.** The §2.6 failure table's overlap row is superseded by this entry.

## Cure 8 — Geometry/counts bound; 34×18 resolved; re-count at Execute with A9.3 halt (plan-exit charge 3)
- `grid.cols = 34`, `grid.rows = 18` describe the **FULL lattice** (612 cells). The item record's phrase "visible lattice in cropped view" is corrected here: the full-frame census views (37–39 s) show the full lattice; the split view CROPS it.
- Split viewport bound in CONFIG: `layout.splitFirstVisibleCol = 15` — the split view translates the full lattice so columns 15–33 are visible: **visible cells = (34 − 15) × 18 = 342**; clipped-cell rule: a cell counts visible iff its column index ≥ splitFirstVisibleCol (whole-column rule; no partial-column counting). Cell pitch is identical in both views (crop, never rescale): pitch = cellPx + gapPx = 24 px; full lattice 806 × 414 px at design scale.
- Check shape: ONE authoritative binding — `content.checkPath` (SVG path data in a 100×100 viewBox), rendered by the same path in specimen and swap states; colour is the only state change (idle → active at blockWash start).
- Paper reappearance: ONE authoritative binding — `geom.paperLiftPx = 46` (the reappeared paper's top sits 46 design px above its grown position); paperReappear phase [6200, 6400] raises lift 0 → paperLiftPx while height fraction returns 0 → 1.
- **Execute re-count (A9.3):** the builder re-counts the lattice from the census frames at Execute and prints source-count vs built-count in build-record.md; on any mismatch the item HALTS before the wave (no prewave spent).

## Cure 9 — Ballot cast + reappearance timings explicit in the parameter table (observe-exit charge 1, variables 0.5)
The parameter table gains explicit rows, all bound to phases[] (Cure 5): **ballot cast (paperRetract): start 5900 ms, end 6200 ms, duration 300 ms — the paper drops into the box, completing exactly at connector contact 6200 ms** · **ballot reappearance (paperReappear): start 6200 ms, end 6400 ms, duration 200 ms — the paper returns HIGH above the box (lift = geom.paperLiftPx) with its check, completing exactly at wash onset 6400 ms**. Anchor checks printed: 6200 ms (contact + cast complete + fill 0 — CP08) and 6400 ms (reappearance complete + wash onset — CP09). These rows close the variables-extracted 0.5 gap: retraction and reappearance timing are now first-class CONFIG-bound variables, not fine-probe prose.

## Observe-exit charge 2 — source-motion playback (disposition)
Continuous-playback verification is carried as an Execute step: the segment cut (37.0–46.0 s) is decoded and its duration + endpoint transition verified by ffprobe/ffmpeg frame probes at the cut boundaries (guards cmd 5 receipt in build-record.md), reconciling the fine probes against continuous decoded frames at 43.2/43.4/43.6/43.8 s equivalents inside the emitted clip. The census frames remain the evidence of record (the digest's cited evidence frame is defective per gap G-T205-2).

## Standing bindings carried unchanged
Schedule basis: segment-anchored (buildMs = sourceMs − 37000). Swap content/palette values per item record §2.4 plus palette.checkActive (Phase A amendment). Mirrored-layout + changed-partition renderer exercise per §2.4. A6 legs, A13 receipt index, V2b filled-vs-unfilled contrast check at 360 px — all as planned. Bar: PASS iff five-lens average ≥ 85 AND min ≥ 70.
