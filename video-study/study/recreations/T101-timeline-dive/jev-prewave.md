# T101 — Timeline dive · jev-prewave verdict (attempt 1, Cycle 016 Wave 14)

**Verdict: FIRE-WAVE**

## Dimension scores

| Dimension | Score |
|---|---|
| parameterization | 0.86 |
| purity pre-check | 0.95 |
| own-checks completeness | 0.88 |
| fidelity-plan honesty | 0.82 |

Primary rejection classification: **none** — no HOLD class applies. No dimension is below the 0.5 floor, and ASSERTED-CHECKS does not apply (see Finding 3).

## Priced findings

**1. Parameterization — genuine CONFIG drive, with residual secondary literals (0.86).**
The CONFIG block binds the subject-defining values: `clips[{color,w,h}]` · `card{brand,title,x,y,w,h}` · `curve{show,points[×4]}` · `panels{curve,toolbar}` · `dive{endScale,travelX}` · `palette{bg,toolbar,cardFrom,cardTo,ink}` · `layout{worldW,clipsX,clipsY,gap,panelBg,gridLine,curveStroke,curveStrokeW,gridDiv,gradAngle,flankGap,flankTopGap,clipBorder,clipBorderW}` · `graph{y,h,color,bg,lineW,span}` · `type{font,brandSize,titleSize}` · `diveMs/travelMs/holdMs` · `stage{width,height}`. The swap test re-drives the build from CONFIG (title, `clips[0].color`, `diveMs`), and config-census.md maps every CONFIG key to ≥1 application site with no unapplied key, recording 5 first-pass literal hits (gridDiv, gradAngle, flankGap/flankTopGap, clipBorder/clipBorderW, graph.span) cured pre-wave and re-verified. This is not a config costume. Discount: the census's literal scan is narrower than the artifact — CSS `.tool` 9×9 px, toolbar gap 6 px / padding 10 px, `.playhead` width 2 px, the JS flank height factor `c.h*2`, graph-bezier coefficients 0.3 / 0.05 / 0.6 / 0.95, and SVG grid stroke-width 1 sit outside CONFIG and are not listed as hits. They are secondary geometry, not subject-defining values, so HARDCODED-CONFIG does not trigger — but the record's "logic reads only CONFIG" claim is overstated at the margins.

**2. Purity pre-check — generation from parameters, no tracing/embedding step (0.95).**
Construction (§4) is DOM/SVG generated in code from CONFIG in one self-contained file; the asset inventory states recreation.html loads NO external assets. The purity grep is recorded with its exact pattern (`segment\.mp4|source\.mp4|video-digests|ev/|\.jpg|\.png|<video|<img>`) and result: **0 hits**; `segment.mp4` appears only in comparison.html as the labeled ORIGINAL. No tracing, embedding, or frame-copy step appears anywhere in the construction route. TRACING-STEP does not apply.

**3. Own-checks completeness — results recorded numerically, not asserted (0.88).**
§5 records, with values: swap test on a scratch copy using the exact charged values (title node = "DEEP DIVE" ✓ · orange clip present ✓ · phase-boundary jump 0.000 ✓ · card still fills frame ✓ · scratch cycle 12 800 ms with the holdMs semantics named, untouched groups named); purity grep 0 hits (above); `node --check` OK; harness on the default build (travel→dive jump 0.000 · dive→hold jump 0.000 · hold scale 2.6 · loop pose at 14 000 ms == pose at 0 · cycle 4200+2600+7200 = 14 000 ms exactly); card-fill derivation (196×126 → 509.6×327.6 px at endScale vs stage 360×203); contrast sweep at the card gradient (4.70:1 worst point, 6.41:1 midpoint, 7.10:1 end, all ≥ 4.5:1). Both A6 legs are filed with measured output: fit-table.md (ink widths/heights, margins, hierarchy ratio 1.87, legibility floor cleared — **0 HITs**) and config-census.md (**0 HITs** on the final build). Discount: `node --check` and the grep are reported as summary lines (OK / 0 hits) without raw log excerpts — but pattern, inputs, and measured outputs are all stated, which is recording, not assertion. ASSERTED-CHECKS does not apply.

**4. Fidelity-plan honesty — core mechanic implemented, main divergences named (0.82).**
Against digest §3 T03 / TECHNIQUES.md T101 (view pushes into a stylized editor timeline — colored clip blocks, easing-curve panel, "QUICK TIPS" title card riding the timeline — travelling along it until one card fills the frame; itself a dynamic-zoom transition): the build implements every element of that core — clip blocks, curve panel with CONFIG bezier points, QUICK TIPS card, TRAVEL → DIVE → HOLD pose function with measured phase continuity, derived card-fill end pose, playhead advancing with camera progress. The principal divergence is named twice, not hidden: the schedule basis line ("**t=0 allocation** — the dive lifecycle is re-based to build zero inside the 14 s cycle… never presented as measured") and §3 ("the Plan's wide → travel → card-fills-frame progression… is the named t=0 allocation… it does not claim the segment's exact camera path"). Scope limits are also stated (§2, plan-review disposition 5: panels/clips are static spatial cues, no independent panel animation, one title card), and the verification limit is disclosed on the face (PIXEL-UNVERIFIED — logic-level via node harness, repeated in fit-table.md). Discount: two segment-measured states in the §3 table — the card's dashed selection outline and the animating graph-strip bezier at seg 5.0, and the second card reading "TRANSITIONS" at seg 6.5 — are covered only by that aggregate static/one-card scope line, not item-named as deferrals. That is naming in aggregate rather than per-mechanic, so the score is not full — but with the core mechanic present and the scope stated in the record, SILENT-DEFERRAL does not trigger.

**Disposition:** The build's own record does not condemn it. The wave is earned; fire the scoring wave on T101 attempt 1.
