# T18 — Keynote stage + heckler chat · BUILD RECORD — Attempt 3

Technique: T18 (packet P1, "Look What I Can Do" @ 2:02–2:17) · Practice Cycle 012 Wave 11 · Attempt 3 · 2026-11-15
Artifact dir: `hidden_files/study/recreations/T18-keynote-stage-heckler-chat/`
Governing: practice INSTRUCTION §3 + §5 + amendments cited in plan-T18.md · plan-T18.md (binding) · RUN.md §1 + Plan gate W-G + W-T18 (binding).
Prior average 82.0 (seat record only; never fed to a lens). Target: 85.0 average = 15 aggregate lens points over the prior 410.

## §0 Preservation (E0 — completed BEFORE any mutation; content copies only, never hardlinks)

Baseline source: run `preservation-baseline.txt` (machine-written). Verified at E0:
- `recreation.html` sha `413321da7d9e3af6ba44def9de5ad8148b6f1559c20b310f988e0ae68a0028c8` = baseline ✓
- `comparison.html` sha `f129b80843ae7d037af508e01117b453e186f9fe1466d061cd387c15eb721f6e` = baseline ✓
- `scores.md` at attempt-2 CLOSE: baseline sha `d9af3b5cf4847a8a8aa3d8dd1b9dda5f5b25b4e0ba0c3ee2f3d0b190662c3ed2`. The live scores.md at E0 already carried the Plan step's WHY-scaffold append (sha `a42c84cd…`), so per W-T18 the two states are preserved separately:
  - `scores-attempt-2.md` (create-once) = attempt-2 CLOSE bytes, recovered exactly: live file truncated one byte before the scaffold header hashes to the baseline sha ✓ (inode 4952754, independent).
  - `scores-attempt3-planning.md` (create-once) = post-scaffold planning state, sha `a42c84cd4c71209557509e616e895d9f0c358b41ef24fdc4e8094e16d4ea2b5c` ✓ (inode 4952755). This copy is also the W-G(2) create-once preservation of the pre-drafted scaffold BEFORE any filling; the completed WHY (if owed) is appended to scores.md as a NEW section referencing it, never by editing the scaffold in place.
- `recreation-attempt-2.html` (create-once; destination verified free): sha `413321da…a0028c8` ✓ inode 4952752 ≠ source 4387238.
- `comparison-attempt-2.html` (create-once): sha `f129b808…15eb721f6e` ✓ inode 4952753 ≠ source 4387566.
- `recreation-attempt-1.html` + `comparison-attempt-1.html` already existed — untouched, never overwrite targets.
- Prior evidence set inventoried + hashed at E0 (45 entries: build records, all `codex/attempt-2/` payloads+returns, preserved copies, segment.mp4): run dir `t18-e0-inventory.txt`.
- Hardlink separation (W-G(3)): every artifact file carried nlink=2 at E0 (a second directory entry outside this dir). Before editing, the three working files (`recreation.html`, `scores.md`, `comparison.html`) were replaced by content-copy rename: new inodes 4952833/4952834/4952835, nlink=1, shas unchanged ✓. The preserved copies above were taken from the pre-detach entries and are inode-independent of both the old and new working entries.
- Post-first-overwrite census + close census: §7 (filed at close).

## §1 W-T18 bindings — how each is discharged in this build

1. **Glyph measurement method.** Font basis: Arial/Helvetica sans advance widths (standard AFM metrics for the CONFIG font stack), stored as `CONFIG.glyphWidths` (advance ÷ em). Per-glyph error bound ±15% (weight 900 vs regular metrics + renderer hinting). Conservative policy: (a) content-fit decisions use UPPER-bound widths (nominal × `fit.glyphErrorFactor` 1.15) — borderline content is REJECTED, never silently fitted; (b) sweep colour thresholds use nominal cumulative fractions, and the suite asserts them with the printed fraction-uncertainty bound (±0.04 for words ≤12 chars); a word containing a glyph outside the table uses the fallback ratio and is flagged in the fit table. Agreement between the fit model and the clamp model is NOT independent verification — both consume this one table; rendered coverage/containment remain **PIXEL-UNVERIFIED**.
2. **Duration-override density residual — CURED (not deferred).** Policy in §3 (T/DEN): duration-only overrides scale every checkpoint proportionally; table-bearing overrides face an event-density + ending check (idle tail after the last event's tail ≤ `CONFIG.maxIdleTailMs`, else atomic rejection).
3. **Fit/timing interaction decisions (executable).** Supported viewport heights at 360px width: `fit.supportedHeightsPx` [568, 640, 740, 844]; minimum supported height 568px. Supported config ranges are the validation ranges in §3. Recomputation trigger: the measured-fit model is a pure function of CONFIG, recomputed inside every validation (initial load, every override candidate, every swap) — no cached fit state exists. Rejection behaviour: when legibility floors and containment cannot coexist at the minimum supported height (measured chat stack or title block exceeds its region), validation REJECTS the config with a named error — no silent crop, no size reduction below the floors.
4. **scores-attempt-2.md contradiction** — resolved as written in §0 (close bytes and planning state preserved under separate names, both baseline-verified).
5. **Target arithmetic** — 82.0 → 85.0 needs 15 aggregate lens points; printed here and in scores.md, nowhere in a lens payload.

## §2 T2 evidence basis (A-C006-1 re-observation; A-C010-3 both bases printed)

Defined origin: recreation t=0 ↔ specimen window start (2:02 = 122.0s of the source reel) ↔ segment.mp4 file time 0.5s (segment cut 121.5–137.5s, ±0.5s handles per comparison.html). Recreation time t = (segment time − 0.5s). Frames extracted from segment.mp4 and read firsthand (run dir `t18-evidence/`):
- seg 4.5 (t=4000): line 1 mid-build — "THE GREATEST TRANSI…" typed so far; line 2 absent.
- seg 5.05 (t=4550): line 1 complete, white; line 2 absent.
- seg 5.25 (t=4750) + seg 5.4 (t=4900): "IN" present, fully yellow; "HUMAN" absent.
- seg 5.9 (t=5400): "IN HUMAN" complete, yellow.
- seg 6.15 (t=5650): full title; lines 2–3 yellow, line 1 white.
Priced basis (prior return): "IN" mid-build ≈5s into the window; recreation sweep finishes at 4.1s. Segment basis (this re-observation): line 2 lands in (4550, 4750], its build completes by 5400, mid-build ≈5000. The two bases agree that ≈5.0s is the mid-build moment; they disagree on the landing (priced basis implies the recreation's 3400 landing could stand with a longer sweep — rejected: a sweep-only fix needs ≈3200ms and would end at 6600, past the observed line-2 completion 5400 and past line 3's landing).
**Resolved basis (built):** line 2 record `tMs: 4600` with per-record sweep `highlightMs: 800` → mid-sweep at 5000 (the observed mid-build moment), sweep complete 5400 (the observed line-2 completion). Scoring risk printed per A-C010-3: the neutral facts fed to the lenses carry this resolved basis; a lens pricing the older 3400/700 form prices a build that no longer exists.
No premise amendment under A-C008-1: no event, order, or recurrence changes — line 2's timing basis only. Line 1 / line 3 landings are retained from the prior build (outside this item's priced scope) and print as residuals in §6.

## §3 Per-cure thresholds — COMMITTED BEFORE MUTATION (W-G(1))

Attribution prints BUNDLED unless a checkpoint suite isolates an effect. Each row: threshold fixed now, result filed after the stage build.

| ID | Construction change (family) | Threshold (fixed before building) |
|---|---|---|
| R1 | Secondary sizes re-derived THROUGH the perspective transform; opacity in CONFIG. New derivation family: `effectivePx = clampPx × minClampedFramingScale × perspectiveFactor` where perspectiveFactor = 900/(900+…) modelled as the worst vertical foreshortening of `perspective(900px) rotateX(2deg)` = 0.97 (printed constant in CONFIG.fit). | At 360px: effective chat body ≥13px · effective meta ≥11px · effective stat label ≥11px · effective stat value ≥14px, all at the WORST clamped framing scale (computed, not authored) · meta/stat-label opacity ≥0.90 from CONFIG · R3b vertical leg green at every supported height |
| R2 | Sweep width basis replaced: character-count → cumulative proportional glyph widths (`CONFIG.glyphWidths`). New width-basis family. | For target words incl. unequal-width cases ("IN": I-fraction in [0.24, 0.32]; a mixed swap word): no character dark at progress < its right-edge fraction − 0.001; every character dark at progress 1.0; thresholds strictly increasing, last = 1.0 |
| R3 | Clamp basis replaced: declared rectangle → measured content bounds; translation arithmetic corrected to the CSS composition `displayed = origin + scale × (point − origin + translate)`. New clamp-basis family. | Modelled displayed rect == direct composition for all 7 framings (initial + 6 cuts) AND the loop-boundary pair; clamped rect ⊆ [0,100]² stage for all 7; vertical leg: accumulated chat stack bottom ≤ screen bottom at heights 568/640/740/844 (360px wide), `#screen` clipping priced as failure |
| U1 | Every named outside-CONFIG shaping literal migrated into CONFIG (detail/fit keys); html/body background single-sourced from CONFIG.bg. | Literal census at CP-U and at close: remaining outside-CONFIG literals each whitelisted BY NAME in §5 as structural; zero content-carrying literals outside CONFIG |
| U2 | Measured content-fit policy in validation (upper-bound glyph widths at the 360px reference). | Overlong single token (word wider than its column at upper bound) rejected with named error · accepted-count-but-overlong chat text rejected · just-fits content accepted · default + comparison swap records accepted |
| U3 | Atomic strict URL parsing + validation completeness + defined delimiter escaping (backslash escapes `\~ \; \, \\` in URL text fields). | `popMs=bad`, `durationMs=bad`, blank numeric field each reject the WHOLE override set atomically with `__overrideErrors` non-empty and CONFIG unchanged · adversarial set (non-finite, null/absent groups, oversized token, resize/height recompute) all named-error rejections, no throws · escaped-delimiter text round-trips intact |
| T1 | Per-record durations: `titleLines[].highlightMs`, `chatMessages[].popMs` with CONFIG defaults as fallback. | Swap with per-record durations: state at mid-sweep/mid-pop follows the RECORD's duration, not the default · sweep completion ≤ next line landing (default records) · invalid per-record duration rejected |
| T2 | Line-2 re-anchor per §2. | computeState: line 2 sweep progress at t=5000 in [0.4, 0.6]; phase swept at t=5400 |
| DEN | Duration-scaling policy (W-T18 cure). | `durationMs` override ALONE scales all checkpoints ×factor (ratios preserved ±1ms) · table-bearing override with idle tail > maxIdleTailMs rejected atomically · default idle tail = 15000 − (13850+400) = 750 ≤ maxIdleTailMs |
| M1 | Loop boundary re-asserted, construction held. | Boundary framing delta (last cut → initial) ≥ framingMinDelta; state at wrap equals initial state |
| M2 | 100ms adjacency re-asserted, construction held. | t=7350: framing = 7300 cut AND chat[2] not visible · t=7450: chat[2] visible AND pop scale strictly between CONFIG endpoints (per-record popMs priced) |
| SELF | Self-start (A-C010-2). | Source starts playback on its own path (no external caller); state at durationMs−1 shows the final cut + all content landed |

Deferrals carried from the plan, unchanged: D1 full-line sweep · D2 pop shape / camera differentiation · D3 rendered verification (PIXEL-UNVERIFIED stands over R1/R2/R3/M1/M2) · D4 not triggered (segment evidence identified the moment, §2).

## §4 Build stages + checkpoints (A-C010-1a)
CP-R after Stage R · CP-U after Stage U · CP-MT after Stage M/T — each a create-once content copy with inode ≠ working file and sha frozen at filing, plus that stage's suite output. Filed at §6 as the stages land.


## §5 Literal census whitelist (A-C008-3 / A-C009-4 — per-literal, structural only)

Outside-CONFIG numeric literals in the script code (comments stripped, identifier-aware scan; suite-asserted): `0` (indices, identity, empty values) · `1` (indices, identity) · `2` (pair counts — pad pairs, two-sided padding) · `3` (record-field positions, print precision) · `4` (chat-record tMs field position) · `5` (field-count guards, popMs field position) · `6` (cut-record last field position) · `50` (stage-centre percent, the transform origin) · `100` (percent whole) · `255` (RGB channel maximum in colour validation) · `-1` (pre-first-cut index sentinel) · `-50` (translateX centring identity — half of the element's own width, speaker/spot). Style block: `0` (offsets/resets) · `100%` (full extent) · `50%` (circle radius / centre) · `1` (square aspect) · `-1` (highlight-bar layering). Colour literals outside CONFIG: none (script or style). Content-carrying literals outside CONFIG: none — configured wording occurs only inside the CONFIG block (suite-asserted). No content literal is whitelisted as structural.

## §6 Stage results, firing history, deviations

Stage suites are partitions of the single suite file (run dir `t18-suite-attempt3.js`), run against the combined build and re-run after every interacting change (the R3 fit-bound correction, the U3 parser correction, the CSS weight/margin migration, the in-cycle CSS cure). Final run on the scored source: **111/111 PASS**. Per-cure results against the §3 thresholds: R1 PASS (effective sizes 13.4 / 11.1 / 11.1 / 14.7 at the computed worst framing scale 0.95 × perspective factor 0.97) · R2 PASS (thresholds proportional; "IN" I-fraction 0.278; mixed-word rows green) · R3 PASS (composition equality for all 7 framings; vertical leg green at 568/640/740/844) · U1 PASS (census above; config-census leg 0 HITs) · U2 PASS for the named classes (residuals priced by the lens, scores.md) · U3 PASS for the named classes, PARTIAL on completeness (two list gaps verified in scores.md) · T1 PASS · T2 PASS (progress 0.5 at t=5000; swept at 5400) · DEN PASS for the default + ×2-scaled cases (residuals priced by the lens) · M1 PASS · M2 PASS (7350/7450 states) · SELF PASS (playing at load; ending state reached).

Checkpoints (A-C010-1a): `recreation-cpR-attempt3.html` (inode 4955877) · `recreation-cpU-attempt3.html` (4955878) · `recreation-cpMT-attempt3.html` (4955879) — content copies, inode-independent of the working file, all at sha c6d88d1afdd7a222817f1ed4caf05bea52130569fa798a6ee08cc80a766cab97 (the combined pre-cure build). The final scored source differs from the checkpoints by exactly the two-parenthesis CSS cure (diff-verified: one declaration line, two characters).

Firing history (A-C003-1, all preserved create-once under `codex/attempt-3/`): wave 1 against sha c6d88d1a… — motion 68 (`lens-motion-run1.md`) · timing 64 (`lens-timing-run1.md`) · purity 98 (`lens-purity-run1.md`, the return that named the CSS defect); payloads preserved as `payload-<lens>-run1.txt` (reusability/readability run1 payloads generated, never fired). In-cycle cure under A-C002-4 → wave 2 (final) against sha 35ffde9e… — motion 66 · timing 66 · purity 98 · reusability 83 · readability 83 (finals at `lens-<lens>.md`; payloads at `payload-<lens>.txt`, hashes in `payload-manifest-attempt3-final.md`). Arithmetic (seat-recomputed): 396/5 = 79.2 · delta −2.8 vs 82.0 · verdict FAIL (average + floor) · WHY filed in scores.md (new section; scaffold preserved untouched at `scores-attempt3-planning.md`).

Deviation register:
- **DEV-1 (A-C010-1a, staging form):** the source was authored in one continuous write sequence, so the three checkpoints were filed from the combined build rather than snapshotted mid-authoring; stage isolation rests on the suite partitions, and all lens attribution prints BUNDLED (scores.md). The checkpoint discipline's purpose — per-stage own-check evidence — is met by the partitioned suite runs recorded above; the snapshot timing is the deviation.
- **DEV-2 (suite gap, self-named):** the own-check suite carries no CSS-parse check, so the malformed `.stat` declarations introduced by the build's own CSS edit passed 111/111 and were caught by the purity lens instead. The cure landed in-cycle (DEV note, not a scored-source deviation); the suite gap itself is the deviation, carried to Condense as a candidate guard (a style-block parse/balance assertion belongs in the suite form).
- No other deviations. No premise amendment under A-C008-1 (no event/order/recurrence change; T2's both-bases record stands at §2). A-C011-3 compliance: R1/R2/R3 landed as construction-family changes (size derivation through the transform · count→proportional width basis · declared rectangle→measured bounds under the true composition) — no mere re-tune among them; the readability return's movement (73→83, with its size/threshold/clamp findings re-priced by name) is the filed evidence.

## §7 Preservation census at close

Against the run's `preservation-baseline.txt` (T18 entries, 56 files): **53 identical, 0 drifted**; the only changed files are the three working files, as designed — `recreation.html` (413321da… → 35ffde9e…, the scored build), `comparison.html` (f129b808… → 926cac0a…, recreation-side documentation only; ORIGINAL side byte-identical against `comparison-attempt-2.html`, verified in place), `scores.md` (baseline d9af3b5c… → 75f7830a…, scaffold append by Plan + Attempt-3 entry appended this filing; the close bytes and the planning state both preserved separately at §0). Post-first-overwrite census (run mid-build): all six preserved copies sha-verified OK. Attempt-3 outputs on disk: checkpoints ×3 · legs ×2 (+ run1 legs ×2) · manifests ×2 · payloads ×10 (5 run1 + 5 final) · returns ×8 (3 run1 + 5 final) · this build record. Final recreation.html sha256: **35ffde9edd21c62aa3e9d82d751ed4209a144a48192fc20016b3244d9ca0f896**.

**PIXEL-UNVERIFIED** stands over R1/R2/R3/M1/M2 (no render route in the agent environment, A-C002-2): every legibility, coverage, containment, loop-boundary, and adjacency claim in this record is a source-model claim, and the final returns price it as such.
