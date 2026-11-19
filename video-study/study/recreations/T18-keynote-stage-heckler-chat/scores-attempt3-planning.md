# T18 — Keynote stage + heckler chat · SCORES

Technique: T18 (packet P1, "Look What I Can Do" @ 2:02–2:17) · Consumer: openings / diagrams (stage slide-build with live audience chat layer)
Artifacts: `recreation.html` · `comparison.html` (the face) · `segment.mp4` (ORIGINAL cut 121.5–137.5 s, evidence only, local)

## Attempt 1 — 2026-11-14 (recreation Cycle 006, Wave 4)

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 68 | codex/lens-motion.md |
| Timing / tempo match | 78 | codex/lens-timing.md |
| Construction purity | 94 | codex/lens-purity.md |
| Reusability / parameterization | 58 | codex/lens-reusability.md |
| Readability | 58 | codex/lens-readability.md |

**Arithmetic:** (68 + 78 + 94 + 58 + 58) / 5 = 356 / 5 = **71.2 average** · minimum lens **58**.
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: FAIL** — average is 13.8 under the bar and THREE lenses sit under the 70 floor (motion 68, reusability 58, readability 58). Tier: **IN PROGRESS** (attempt 2 routes to the practice job).

### Priced gap (what the next attempt — practice job — must cure)

**CONVERGENT (Amendment A1 — three lenses name it; primary cure): highlight construction is specimen-bound and incomplete.** Motion (68): highlight bars sweep only 'GREATEST' and 'IN' — 'HISTORY' (and every line beyond the first two) has no sweep, though the technique is a sweep per line as it lands. Purity (94) + reusability (58) both name the same root: highlight selection is hardcoded (`li === 0` with `highlightWordIndex`, `li === 1` word 0) instead of CONFIG data. Cure: highlight targets as complete CONFIG records `{lineIndex, wordIndex}` for EVERY title line, validated against each line's words; the sweep fires per line at its checkpoint.

**CONVERGENT 2 (motion 68 + timing 78): the cut count is five, not six.** Both lenses name: `cutTimesMs` holds six framing STATES but the 0 ms entry initializes the first framing, leaving five internal hard cuts; the sixth jump is the loop reset at 15000 ms, outside the stated 14.5 s interval. Motion adds: only the screen transforms — speaker, spotlight and audience stay fixed, weakening the broadcast camera-switch read; and the loop boundary wipes all content simultaneously, reading as replay rather than a motivated stage cut. Cure: six actual cut events after an initial framing (seven table entries or an explicit initial-state + cut-list split), whole-stage framing (speaker/spot/audience move with the framing), and a designed loop-boundary cut.

1. **Phone readability (readability 58):** chat body text resolves to the 8 px clamp floor and sender/time to 6 px at 360 px — fit is proven, legibility is not; stat labels sit at 7 px. The 1.22× and 1.16× framings crop content at the stage edges (`overflow:hidden`; chat's right edge reaches ~370 px in a 360 px stage). White text over the yellow sweep is ~1.66:1 contrast during the sweep. Cure: a phone layout with larger chat/stat text (explicit minimum sizes), framing constrained by content bounds so no framing crops title/chat, dark text during the yellow sweep, wider title/chat column separation, and a rendered 360 px verification of every framing + highlight state.
2. **Cardinality + override coherence (reusability 58, timing 78):** swaps cannot change counts — extra title lines appear at t=0 (`||0` fallback), extra chat texts are discarded and fewer retain specimen messages, >6 cuts silently recycle framings by modulo; checkpoint tables accept unordered/negative/out-of-window values; `durationMs=1000` suppresses most content with no defined behaviour; chat pop duration (220 ms) and its scale endpoints are hardcoded in the logic. Cure: complete records for title lines / chat messages / cuts (`{text,tMs,…}` / `{tMs,scale,x,y}`), checkpoint validation (ordered, in-range, table-length-checked), pop duration + endpoints in CONFIG, and cardinality-changing swap tests (1 and 5 title lines, 0 and 6 messages, 1 and 8 cuts, malformed tables).
3. **Record correction (timing 78):** the build record's first-printed nearest chat/cut gap (550 ms) was wrong — the 7400 ms chat follows the 7300 ms cut by 100 ms. Corrected in build-record.md at Verify; the collision risk is a named defect for attempt 2's table design.
4. **Config-census correction (purity 94, reusability 58):** the build record's "non-trivial outside-CONFIG literals: 0" claim is overstated — CSS geometry, the title clamp bounds (13 px/44 px) and the 220 ms pop duration live outside CONFIG. They are construction parameters, not specimen assets (purity holds at 94), but attempt 2's census must print them as outside-CONFIG construction literals, not as zero.

Own checks before the wave (build-record.md §5): swap test PASS 18/18 at logic level (new title lines + new chat texts + highlight `#37c8ff` + earlier title timing + cut-table override to 4 cuts, all asserted) · purity grep zero hits · syntax compile PASS · segment ffprobe-verified (960×540, 16.000 s). Pixel render not exercisable from the build seat (no Chrome binary) — the comparison page is the render surface; phone rendering is visually unverified, as the readability return also notes.

## Attempt 2 — 2026-11-14 (practice Cycle 005, Wave 4)

Final recreation.html sha256: **413321da7d9e3af6ba44def9de5ad8148b6f1559c20b310f988e0ae68a0028c8** — all five final returns below judge this identical sha. Full firing history (every payload + return preserved create-once under `codex/attempt-2/`, interims run-tagged, per A-C003-1): motion run1 78 → run2 80 → run3 84 → run4 (final) 83 · timing run1 84 → run2 84 → run3 (final) 82 · purity run1 94 → run2 94 → run3 (final) 94 · reusability run1 66 → run2 78 → run3 (final) 78 · readability run1 73 → run2 (final) 73. Three lawful in-cycle cure batches (A-C002-4) landed between firings, each triggered by a real defect a lens named in an interim build: (1) highlight bar held behind the swept word + weak framing differentiation; (2) non-atomic overrides, unreachable zero-message override, throwing validator, tokenization mismatch, undefined capacity policy, unenforced framing floor, CSS detail outside CONFIG; (3) whole-word darkening during the sweep + null-cut dereference + partial-string numeric parsing. Build record: `build-record-attempt2.md` (per-cure diagnostic ledger, thresholds fixed before building).

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 83 | codex/attempt-2/lens-motion.md |
| Timing / tempo match | 82 | codex/attempt-2/lens-timing.md |
| Construction purity | 94 | codex/attempt-2/lens-purity.md |
| Reusability / parameterization | 78 | codex/attempt-2/lens-reusability.md |
| Readability | 73 | codex/attempt-2/lens-readability.md |

**Arithmetic:** (83 + 82 + 94 + 78 + 73) / 5 = 410 / 5 = **82.0 average** · minimum lens **73**.
**Delta vs Attempt 1:** 82.0 − 71.2 = **+10.8** (signed, one decimal). Per lens: motion 68→83 (+15) · timing 78→82 (+4) · purity 94→94 (0) · reusability 58→78 (+20) · readability 58→73 (+15).
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: FAIL** — the floor now passes on every lens (minimum 73 ≥ 70, vs three sub-70 lenses in Attempt 1), but the average is 3.0 under the bar. Tier stays **IN PROGRESS**; Attempt 3 routes to the practice job. Floor rule: the attempt BEATS the prior average (+10.8), so no WHY is owed.

Own checks before the wave (build-record-attempt2.md §3/§5): effect-mapping suite **88/88 PASS** (per-line landing-to-sweep diagnostics incl. per-character sweep colours · six cut events after a separate initial framing · framing-transition magnitudes 0.29–0.72 vs the 0.04 floor · 100ms chat/cut adjacency states at 7350/7450ms · pop start/mid/end priced from CONFIG · displayed-state containment for all 7 framings + legibility floors at 360px · cardinality 1/5 lines, 0/6 messages, 1/8 cuts · malformed + adversarial validation classes · purity grep 0 hits) + override behaviour tests 4/4 (complete-record swap · zero messages · stats/counter/pop overrides · atomic rejection). **PIXEL-UNVERIFIED** (A-C002-2): no Chrome/Chromium binary in the agent environment; geometry rests on the source-bound displayed-state model.

Preservation: `recreation-attempt-1.html` content copy sha256 c2350e0184c1455e93f1e0938a2a36a4ad50f3c9406f6b6e0f4ed509e7876f54 = baseline, re-verified after the working file's first overwrite and at close · `comparison-attempt-1.html` preserved create-once before any comparison edit (e7e8ae46…); comparison.html changed only on the recreation side (record-based interface), ORIGINAL side byte-identical in place.

Private cure → neutral-check mapping (seat ledger, never fed to a lens): highlight records → ledger H1–H3 · cut restructure → C1–C3 · 100ms adjacency (DECISION: RETAIN, priced + state-tested) → A1–A3 · pop parameterization → P1 · phone layout + framing clamp → G1–G3 · cardinality/validation → K1–K3, V1–V16 · census honesty → build record §4 · in-cycle batches → H3 bar-clearance + char-colour rows, V9–V16, SWEEP rows.

Residual gaps the next attempt must price (from the final returns): readability 73 is the binding lens — chat body ~11.2px and sender/time + stat labels ~9px at 360px remain effortful (sizes precede the screen's perspective transform; secondary text also sits at 75% opacity); per-character sweep thresholds use character counts, not proportional glyph widths, so a character can turn dark marginally before the bar visually covers it; the framing clamp protects a declared content rectangle, not measured text bounds, and its translation arithmetic vs the scaled translate remains a named modelling gap — all three want a rendered 360px verification route (PIXEL-UNVERIFIED stands). Reusability 78: residual outside-CONFIG literals (perspective/shadows, stat background/border, avatar size, speaker proportions, transform origin) and no measured content-fit policy for accepted-but-long content (capacity limits bound table counts, not text length). Motion 83 / timing 82: loop-boundary read and tight-adjacency handling remain source-judged, unverified in playback.

## Attempt 3 — WHY scaffold (pre-drafted, practice C012)

Pre-drafted at Plan (practice Cycle 012 Wave 11, plan-T18.md §5) under the floor rule: if Attempt 3's average does NOT beat 82.0, this scaffold is completed cure-by-cure and filed as the WHY before the cycle closes — a non-beating filing without it is PLATEAU-UNNAMED. If the attempt beats 82.0, this section is marked NOT-OWED and left as the planning record. Outcome slots stay empty until Verify prices the filed returns.

**Cure-by-cure outcome slots** (per cure: attempted as planned? · lens(es) it targeted · filed movement with return citation · if unmoved, the observed reason):
- R1 secondary-text sizes through the perspective transform + opacity in CONFIG (target: readability): …
- R2 proportional-glyph-width sweep thresholds (target: readability): …
- R3 framing clamp on measured text bounds, true scale→translate composition + vertical chat leg at declared viewport height (target: readability): …
- U1 outside-CONFIG literal migration + honest census (targets: reusability, purity claim): …
- U2 measured content-fit policy for long content (target: reusability): …
- U3 atomic URL rejection + validation completeness (target: reusability): …
- T1 per-record sweep/pop durations (target: timing): …
- T2 "IN" mid-build re-anchor on re-observed segment evidence, or D4 fallback filed (target: timing): …
- M1/M2 loop-boundary + 100ms adjacency re-assertions, construction held (targets: motion, timing): …

**Deferral outcomes** (was the priced risk the one that fired?):
- D1 full-line sweep deferred (motion risk priced): …
- D2 pop shape / camera differentiation deferred (motion risk priced): …
- D3 rendered verification unavailable — PIXEL-UNVERIFIED stood (readability/motion/timing risk priced): …
- D4 "IN" anchor deferred if segment evidence unidentifiable (timing risk priced): …

**Stuck-lens hypothesis (pre-committed):** readability is the hypothesized stuck lens — it has priced perception against source proxies for two consecutive attempts (58 → 73; A-C011-3 trigger MET, see plan-T18.md §3), so correct source-level cures under R1–R3 may still not move it without a rendered 360px route. Alternative hypothesis if a different lens sticks: … (name the lens, the cure that targeted it, and why the construction did not price).

**jev-plateau evidence slots** (the evidence the plateau call will need, named in advance):
- Causal specificity: which single construction property, if changed, would change the stuck lens's priced finding — stated as a mechanism, not a wish: …
- Lens attribution: the stuck lens's own return wording (quoted, with the return's file path under `codex/attempt-3/`): …
- Consequence: what the next attempt does differently (construction-family change or a render route, per A-C011-3) — or why the technique should rest: …
- Evidence citation: checkpoint shas (CP-R / CP-U / CP-MT), the A-C008 legs (`fit-table.md`, `config-census.md`), and the payload manifest path that bind the scored source to its returns: …
