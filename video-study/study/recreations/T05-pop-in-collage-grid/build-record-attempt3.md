# T05 — Pop-in Collage Grid · BUILD RECORD — Attempt 3 (practice Cycle 014, Wave 13)

Technique: T05 (packet P1, "Look What I Can Do") · Artifact dir: `hidden_files/study/recreations/T05-pop-in-collage-grid/`
Consumer: transitions · diagram containers.
Final source: `recreation.html` · sha256 `7d4a5da7d12ec75d1d20ff06836cbc47a12efee30cbe0cbf72ea2b8e1d507cac` (FROZEN before the legs and the wave; every lens payload binds this sha)
Own checks: `own-check-attempt3.txt` — 86/86 assertions PASS (DOM-stub harness executing the real script). Legs: `fit-table-attempt3.md` (4 advisory hits, 0 container-fit) · `config-census-attempt3.md` (0 hits).
**PIXEL-UNVERIFIED** — no browser binary exists in the session; all rendered-pixel claims (font metrics, contrast, visible pop, displayed boundary interpolation) rest on modelled checks only.

## Construction form

Targeted rework of the retained construction: DOM loose grid, code-drawn panel contents (canvas + inline vector shapes), one elapsed-time clock with seek, a declarative configuration object read by all logic, an independently authored factory-defaults object as the only fallback source, and a normalization layer that corrects or atomically rejects invalid values before anything renders. The grid, clock, and rendering architecture are unchanged in kind.

## Schedule — source time → recreation time (unchanged from attempt 2; anchors re-observed at Plan, no conflict)

Evidence segment 0:23.5–0:35.5 (12 s); recreation t=0 = source 0:23.5. Initial state: waveform + sequencer (present at segment start). Animated arrivals: scene 1200 · room 2300 · planet 3400 · spiral 5600 ms → 5 panels at recreation 3500 ms (= source 0:27), 6 at 5600 ms. Loop 12000 ms; completed grid holds while lyric lines finish (last line completes ≈8160 ms).

**Cadence exception (filed, not hidden):** the planet→spiral gap is 2200 ms (3400 → 5600) against the ~1.1 s evidenced cadence of the first three arrivals. Plan-stage frame evidence bounds planet present by segment 3.5 s and spiral present by segment 5.6 s, so the true gap lies inside that window and sparse frames cannot settle its exact moment; the filed schedule retains the evidenced anchors rather than inventing an arrival time.

## Configuration surface — exact scope (attempt 3)

87 top-level keys + panel/lyric member keys. The surface declares: loop length, reset fade, the minimum loop length and its sane window, the full drawing palette; brand text/position/typography (family, reference size, minimum); pop start scale, durations, easings; grid geometry; panel list (label, type, arrival, initial flag); label/check typography (families, sizes, minimums, padding, line height, check text/position); lyric lines, character interval, layout, typography (family, weight, reference size, minimum), prompt text/color/margin, cursor dimensions/margin/alignment; canvas (320×180) and vector (160×96) design spaces; the responsive scale floor; the fit model's advance ratio and shrink step; the stage minimum height; and the deterministic seed. Vector shape coordinates inside the drawing routines are authored code in the 160×96 space and scale into the configured design space at build; every color those routines use is a configuration key. URL overrides cover labels, lyric text, per-panel arrival times and types, three palette entries, loop length, and seed — each validated (below).

## Validation — normalization order (binding form)

1. The minimum-duration window keys themselves (floor/ceiling sanity → factory pair), then `minDurationMs` against that window (→ factory 2000).
2. Colors (hex, or rgba with each channel range-checked 0–255 and alpha 0–1) → factory value per key.
3. Scalar numerics — finite + range per key (grid dimensions positive integers; duration ≥ the validated minimum; reset fade < duration; typography minimums ≤ references; seed a non-negative integer; design spaces positive integers; all remaining keys per the source table) → factory value per key; resolved-geometry containment asserted after resolution.
4. Structure — absent/null panel or lyric groups fall back whole from the factory (never throw); per-entry label/text/type/arrival/start validated.
5. Cross-field schedule — stranding priced on **effective arrival** (an initial panel's effective arrival is 0 whatever its stored time; initial panels are exempt from the clamp); an authored non-initial arrival that would strand is clamped to `durationMs − popMs` with the correction recorded.
6. Fit corrections (below) — the corrected values are what renders.

Overrides apply **after** normalization: an override that would strand a panel, break a line's completion, or drop the duration below the validated minimum is **rejected atomically** (prior valid value retained; rejection recorded in `window.T05_REJECTED_OVERRIDES` and the warnings list). Text overrides re-run the fit corrections. Every warning reaches both `window.T05_WARNINGS` and the console.

## Corrective handling + fit models + the fallback-guarantee resolution

One fit model, two consumers (validation and layout):
- Label room = panel width − 2×border − left padding − check reservation (check offset + check glyph advance at 0.6 em of the effective check size). At 360 px: 54.71 px.
- Lyric room = line width − prompt advance − prompt margin − cursor footprint (cursor width + cursor margin). At 360 px: 170.24 px.
- Labels: size steps down in configured 0.25 px steps to fit, never below the label minimum; at the floor, trailing words drop (the identifying head word survives longest). **Fallback-guarantee resolution (which guarantee wins): FIT WINS over identification** — if even the identifying word alone cannot fit at the minimum size, the word itself is truncated to fit (`LABEL_TRUNCATED_HARD` recorded); a fitting partial word renders, an overflowing full word does not.
- Lyrics: the shared lyric size steps down until every line fits its footprint; a line still wide at the lyric minimum is rejected from rendering (`LYRIC_REJECTED`), as is any line whose typing cannot complete inside the loop (`LYRIC_REJECTED_COMPLETION`) — never rendered overflowing under `nowrap` + stage clipping.
- Every correction asserts its RESULT (the rendered size/string/schedule after correction), not the warning's presence.

**Supported typography envelope (printed):** the fit models are valid for monospace font families whose advance matches the configured advance ratio (0.6 em). The shipped families (Courier New / monospace stacks) sit inside the envelope. A proportional family configured through the new family keys renders, but its fit is **model-only outside the envelope** — no containment claim is made for it. Combined-footprint evidence inside the envelope: longest label + largest check at reference width (90.0 ≤ 170.9) and longest lyric + prompt + cursor + margins at 360 px (own-check s2_fitmodel) both fit.

## Loop boundary (attempt-3 form)

Per-panel fade targets: initial panels hold fade 1 through the reset window and across the wrap; non-initial arrivals fade over `resetFadeMs`; the lyric block fades with the same window and its rows clear at the wrap while faded. A transition-suppression class covers (i) the initial render and (ii) the wrap frame, so state application and visual transition are separable. Displayed boundary behaviour (sampled targets vs actual interpolated opacity) remains browser-owed — PIXEL-UNVERIFIED.

## Named floors (fixed before scoring)

Label size at 360 px ≥ 8 px (modelled 8.25) · lyric size ≥ 9 px (modelled 9.35) · grid-to-lyric clearance ≥ 10 px (modelled 11.2) · label strip occupancy ≤ 40% (modelled 33.8%) · every panel rect inside the stage at 360×202.5 and 960×540 · arrival completion (180 ms transform / 120 ms opacity) shorter than the minimum arrival interval (1100 ms).

## Checkpoint ledger (A-C010-1a stages, A-C012-4 gate observed — each stage began only after the prior checkpoint was filed)

| Stage | Cures | Checkpoint (content copy) | sha256 | Inode vs working (4341542) | Stage own checks |
|---|---|---|---|---|---|
| 1 — validation core | U-1 · U-2 · U-3 | `checkpoint-attempt3-stage1.html` | afa0228f3206fe3b60b8a8773ad8a97fb49a71cbe06374d8bf136e7838681c38 | 5039698 ≠ | 24/24 |
| 2 — corrective + fit | U-4 · R-1 | `checkpoint-attempt3-stage2.html` | 0f54368417aefca3310308fc534aa216a7ac1005c6d225dc5434c4538cc965f3 | 5040577 ≠ | 42/42 cumulative |
| 3 — scope + semantics | U-5 · T-2 literal | `checkpoint-attempt3-stage3.html` | f25e6311592ec6cea1e1fde2940e743720633d64361dba08a764beb1f45e94c8 | 5041150 ≠ | 57/57 cumulative |
| 4 — boundary | M/T-1 · T-2 record | `checkpoint-attempt3-stage4.html` | 5095e81fa17fd51eb645e9173aa9028f71d896a389db42ab97acc1e4f7726a60 | 5041633 ≠ | 30/30 stage-scoped |

Post-stage-4 Verify cures (printed deviation from a pure stage freeze): the literal census (V-4) found three machinery literals outside CONFIG in the stage-4 source — the fit step (0.25), the minimum-duration window (500/60000), the stage minimum height (180) — plus the stylesheet's `var(--popFrom,.82)` fallback; all four were configured/removed in Verify, the full suite re-ran green (86/86) on the frozen sha above, and the legs ran on that sha. Stage checkpoints stand as the stage states; attribution below is BUNDLED regardless (plan §d(a)).

## Per-cure diagnostics (baseline = preserved attempt-2 source under the same probes · controls held · behaviour corrected ≠ lens score moved)

| Cure | Baseline diagnostic (attempt-2 source) | Attempt-3 result | Controls held |
|---|---|---|---|
| U-1 factory defaults + rgba range | authored rgba(999,0,0,1) accepted silently; fallback returned the invalid value itself | named BAD_COLOR; falls back to the independent factory value; in-range rgba accepted | same probe set; default config still zero warnings |
| U-2 registry safety | type `constructor` crashed the build ("renderer.svg is not a function"), URL and authored paths | prototype-free registry + own-property lookups; constructor/toString/hasOwnProperty fall back to the pattern renderer and render content | ordinary unknown types still fall back as before |
| U-3 numeric breadth | 9/9 malformed cases passed silently (fractional/Infinity grid, NaN duration, fractional seed, zero design space, zero char interval, NaN arrival, negative canvas) | 9/9 named + factory fallback; minimum-duration key itself validated first; URL values range-checked post-parse | valid values unchanged (default schedule/geometry identical) |
| U-4 corrective handling | warnings left offending values active (attempt-2 behaviour, per its filing) | corrected RESULT asserted per case: label fits at 11 chars × 8 px vs 54.71 avail after shrink+shorten; authored stranding clamped 11900→11820; stranding override rejected (arrival stays 1200, rejection recorded); incompletable line rejected and never renders | non-offending labels/lines render uncorrected, byte-identical text |
| U-5 scope + `initial` | families/weight/spacings/scale floor were stylesheet or inline literals; SVG viewBox changed without scaling artwork; `initial` never read | all named values are CONFIG keys applied from CONFIG (8 consumption assertions); artwork coordinates scale with the design space and stay in-bounds; initial panel on at t=0 under a 5000 ms arrival override, non-initial off | default families/values identical to attempt 2's literals |
| R-1 fit model | model claimed 49.6 px avail vs ≈47.6 actual; longest labels intruded into the check reservation | border-aware model: avail 54.71 px at the corrected panel width; all six default labels fit with ≥5.21 px margin; combined footprints fit (see envelope) | panel geometry and labels unchanged |
| M/T-1 boundary | reset faded every panel (fade targets sampled on the attempt-2 source form: all panels share one fade) | per-panel targets: initial = 1 at 11850 ms, arrivals = 0.5; lyrics opacity 0.5 in-window; suppression class present at load and at the wrap frame, lifted after the initial frame | arrival schedule, pop tracks, typing unchanged (core probes 15/15 on both sources) |
| T-2 exception + literal | `2000` stood as a bare literal in validation logic (the key did not exist in the attempt-2 source) | `minDurationMs` is a CONFIG key read by validation; the exception is filed above with its evidence bound | duration value unchanged (12000; minimum 2000) |

Attribution: **BUNDLED** — checkpoints isolate stage-level behaviour (each stage's probes turned green at its stage), but lens-score movement, if any, attributes to the attempt, not to individual cures.

## Own-check summary (86 assertions, `own-check-attempt3.txt`)

Effect mappings (arrivals at 0/1199/1200/3500/5600 · per-panel reset targets · `initial` override effect · every correction's corrected result · registry fallback rendering · scaled-coordinate bounds) · consumption census (93/93 CONFIG keys resolve to application sites; behavioral consumption asserted per key family) · adversarial validation set (non-finite values · null/absent groups · warning display on both paths · single-oversized-token overflow for label and lyric · resize recompute 360→960→360) · literal census (0 color/duration literals outside CONFIG; per-constant classification in `config-census-attempt3.md`) · plan-semantics assertions (initial pair displayed arrived at t=0 and through the reset · corrected labels inside their strips under the model · rejected lyric line absent) · displayed-state model (border-inclusive fit at 360/390 · wrapped states: labels/lyrics are single-line `nowrap` by construction, enumerated as the only reachable wrap state) · CSS parse leg (40 declarations, all parse) · purity scan 0 hits · self-start asserted (playback advances with no external caller — no external-start limitation). **PIXEL-UNVERIFIED** stands over every rendered claim.

## Deviations (printed)

- D-A3-1 (stage assignment): `responsiveScaleFloor`, `promptMarginEm`, `cursorMarginPx` keys landed in Stage 2 (fit-model dependencies) ahead of their Stage-3 consumption wiring; Stage 3 completed their wiring. No stage's gate was skipped.
- D-A3-2 (evidence handling): the first capture of `own-check-attempt3.txt` contained a module-not-found crash after the session's /tmp harness file was cleaned mid-run; the harness was recreated (probe-identical except one tautological registry sub-assertion dropped: 87 → 86 assertions) and the file was replaced with the real 86/86 output before the freeze was consumed anywhere. Checkpoint own-check files in this directory were unaffected (filed as content copies at each stage).
- D-A3-3 (post-checkpoint Verify cures): see the checkpoint ledger note — four literal-census cures landed after the Stage-4 checkpoint, before the freeze; disclosed here, suite re-run, legs on the frozen sha.

## Outcome branches (closing procedure, all three states)

- **Beats 82.4 AND avg ≥85 AND every lens ≥70 → PASS:** scores.md Attempt 3 files scores + delta + PASS; tier hand-off filed to the style-library board with the scores.md pointer (the tier move is style-library's act).
- **Beats 82.4 but avg <85 or a lens <70 → FAIL (improved, below bar):** scores.md files scores + delta + verdict; no WHY owed (the attempt beat its predecessor); priced gaps carry to attempt 4.
- **Does not beat 82.4 → FAIL + WHY owed:** scores.md carries the WHY from the plan's pre-drafted scaffold (cure-by-cure outcomes, stuck lens, next-attempt line) before the cycle may close; `jev-plateau` fires at close (seat judging while transport is unbound, printed as such).

## comparison.html

Not re-pointed: the override interface (keys + semantics for valid values) is unchanged — the comparison page's swap URL remains lawful; invalid-value handling changed underneath it (correction/rejection), which the swap test does not exercise. The attempt-2 comparison copy stands preserved; the live comparison's sha is re-verified in the closing census.
