# T128 — build record · attempt 3 (Practice Cycle-030, Wave 29)

SEAT FILING — never packet content (plan Verify 6 frozen allowlist). Bound build: recreation.html sha256 `61771d823dfe0e624ac73773e4d379db1e6141c88823999ee851fe4df7c7d1b1` (working file recreation-attempt-3-working.html, identical sha; published last per plan §2.6, full suite re-run on the live file: 50 checks, 0 fails — `checkpoints-attempt-3/stage-F-checks-live.txt`).
PIXEL-UNVERIFIED — no render route in this seat; all geometry is logic-level (node harness over the source's own functions).

## Census basis
Segment 385–399 s, t=0 = segment start (attempt-2 resolved basis, unchanged). Exhibit 0–4600 · exit 4600–4800 · eyebrow 5450–6470 · strike 7600–8000 · main 9250–9740 · displayed hold [9740, 13140) · cycle 13540 · segment window 14000.
Hold basis (seat filing only): the displayed hold is the evidenced 3400 ms ([9740, 13140)); that basis governs this build. (The packet carries the measured window as a neutral fact only.)

## Per-stage changes (working file; live file untouched until publish)
- Stage 0 — preservation (baseline 105 files, manifest filed) + a2 source checkpointed; the attempt-3 suite halts on a2 at its first attempt-3-only export (recorded in stage-0-checks.txt).
- Stage A — the exhibit onset key is removed from CONFIG and from the validator schema; the exhibit is present from cycle t=0 by definition (source comment, neutral wording). Own checks assert the key's absence and that an override carrying it is rejected as an unknown key, atomically.
- Stage B — validator depth: darken-denominator guard (0 ≤ fadeTo < 1, endpoint rejected) · contours/contourO equal lengths · the two ordering constraints on DERIVED completions (eyebrowComplete < strikeAt; strikeComplete < mainAt) · single-glyph main re-admitted (completion == onset lawful). Route contract: the override route clone-validates and returns the original on any failure; the direct-edit route is boot-validated through the same validator (validateConfig/resolveBoot) and a malformed direct edit falls back to the built-in validated default CONFIG, with the rejection recorded. Intake census enumerated mechanically from the exported SCHEMA: 69 fields × 2 routes; generative sweep 434 cases (value-type × route × boundary), 0 failures.
- Stage C — map label split out of the contour fade under ONE shared reveal gate (gate = 0 before 4800, rising over revealMs 200 from 4800; label opacity = gate × map.labelO, contour opacity = gate × contourO × mapFade, vignette = gate × vignetteStrength; field darkening is a separate term driven by mapFade). fitRows().mapLabel now includes the configured tracking (model convention: tracking applied per glyph by measureText): 217.60 advances + 23 × 2 tracking = 263.60 px.
- Stage D — exit translation extended (exitDxPx −280, exitDyPx −160, derived from stage 360×203, card 300×128, scale 0.5, tilt −2°, rotation-inclusive corners): transformed terminal bounds x [−176.1, −23.9], y [−93.1, −23.9] — zero stage intersection with opacity forced to 1. Vignette: radial edge-weighted darkening on the map ground, CONFIG-bound (vignetteStrength 0.55, stops 55%/100%), driven by the shared gate.
- Stage E — map reveal decoupled from the exhibit exit (nothing map-visible before 4800, asserted at 4799/4800). Tail: segmentStateAt holds the terminal state through the segment window [13540, 14000) — no exhibit restart in-window; standalone playback beyond the segment window is unverified continuation. Hold asserted unchanged at 3400 ms.
- Stage F — shaping surface bound: SVG contour stroke-width (map.strokeWidthPx 1.25, applied to every path via mapSvg) · map-label font-weight + line-height (type.mapLabelWeight 700, type.mapLabelLineHeight 1.2, applied at the label setters) · exhibit-sub font-weight + line-height (type.exhibitSubWeight 700, type.exhibitSubLineHeight 1.3, applied at the sub setters). renderSpec() exposes every setter value for consumption assertions. Literal census re-run (see config-census.md). Intake census re-enumerated on the final source (69 fields) and the generative sweep re-run there (434 cases, 0 failures). Label contrast re-checked after Stage F against the LOCAL vignette background with the final type metrics: minimum 14.41:1 across the reading window [5000, 13540) — floor 4.5:1 holds at every sample.
- Post-checkpoint-F suite corrections (filed as stage-F-checks-final.txt, create-once; checkpoint F itself untouched): the fit model's mapLabel row was aligned to the model's per-glyph tracking convention (263.60 reproduced); segmentMs is now consumed by segmentStateAt (terminal hold inside the segment window, cycle state beyond it); the suite's contrast window starts at reveal completion (5000) and its state samples include the 13240 exit instant. Final suite on the working file and on the published live file: 50/50 PASS both times.

## Per-change probe table (same input, preserved a2 source → attempt-3 source → Stage-F re-run)
| Probe | a2 | a3 | Stage-F (live) |
|---|---|---|---|
| B1 fadeTo=1 override | accepted (NaN state reachable) | rejected | rejected |
| B1 fadeTo=0.999 / 0 | accepted | accepted | accepted |
| B2 contours length +1 | accepted | rejected | rejected |
| B2 contourO length +1 | accepted | rejected | rejected |
| B3 eyebrowCharMs=200 (completion 8850) | accepted | rejected | rejected |
| B3 strikeMs=2000 (completion 9600) | accepted | rejected | rejected |
| B4 mainText="A" | rejected | accepted, completion == onset | accepted |
| Census: exhibit onset-key override | accepted, silently ignored | rejected as unknown key | rejected |
| D1 exit intersection @ exit end, opacity 1 | 7011.1 px² | 0.0 px² | 0.0 px² |
| D2 vignette | absent | present, gated, CONFIG-bound | present |
| E1 map at 4700 | mapO 0.500 (visible during exit) | gate 0, label 0, contours 0 | gate 0 |
| E2 segment tail at 13600 | exhibit restarted (exhibitO 1, EXHIBIT) | TAIL-HOLD, exhibitO 0 | TAIL-HOLD |
| C label contrast floor | ~1.85:1 (a2 filing) | ≥4.5:1 provisional | 14.41:1 min, local vignette background, final metrics |
| C mapLabel width | 217.60 (tracking omitted) | 263.60 | 263.60 |

## Checkpoints (create-once, content copies; inode ≠ working file asserted at filing)
stage-0 `d6b9e473…15f` · stage-A `5ee145df…4919` · stage-B `dc09875a…fa17` · stage-C `20238990…ba0a` · stage-D `0f21a056…3f0e` · stage-E `07479707…eb5` · stage-F `eec15c9c…db5` (+ stage-F-checks-final.txt and stage-F-checks-live.txt as additional create-once check files; no checkpoint was overwritten).

## Own checks (final, on the published live file)
50 checks, 0 fails (`checkpoints-attempt-3/stage-F-checks-live.txt`): effect mappings + CONFIG consumption for every key · census-derived generative sweep (69 fields, 434 cases, both routes) · literal census · displayed-state incl. typed partial states (eyebrow 6/12 glyphs, main 1/4 glyphs) · final composited label contrast vs local vignette background throughout the reading window with final type metrics · CSS parse · self-start (requestAnimationFrame under the file's own startup path, segment-aware) · purity (no external assets, no specimen media, no captions).
Census spot-check (Verify 1): all 69 CONFIG leaf keys varied individually; every key produced an observable change in its intended output — 0 NO-EFFECT keys. The full per-key log is the SPOT section of stage-F-checks-live.txt.
Swap test: wider swap accepted (exhibit text, eyebrow "NOT JUST A WAR.", 16-glyph main, stage 400 wide) with derived completions asserted (eyebrow 6150, main 10150 under swapped intervals); single-glyph main accepted; an ordering-violating swap input rejected atomically.
Comparison: interface unchanged in the comparison's terms (no re-point); ORIGINAL side resolves to segment.mp4 in place, hash-verified at close. The replayable attempt-2 comparison (comparison-attempt-2-replayable.html) resolves its recreation side to recreation-attempt-2.html.

## Deviations
- D-A/B-SUITE-HALT: at Stages A and B the comprehensive suite halted partway (it calls exports first introduced in Stage B / C). Each stage's filed checks record the sections that ran (Stage A: BASE + A all PASS; Stage B: through the B probes). The full 50-check suite runs green from Stage C onward and on the final live file. Printed per the plan's deviation rule; no stage began without its predecessor's checkpoint filed.
- No other deviations: every Execute checklist step 0–13 was performed in order (skeleton gate read back clean: board entry lane-2026-11-18-cycle030-skeleton, heartbeat beat 127, both in planned state).
