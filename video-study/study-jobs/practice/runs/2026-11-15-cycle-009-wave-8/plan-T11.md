# PLAN — T11 code-review stamp slam · Attempt 3 · practice Cycle 009 Wave 8 (2026-11-15)

Governing: practice INSTRUCTION.md §1–§5, §8 + amendments A-C002-1/2, A-C003-1/3, A-C004-1/2, A-C005-1/2, A-C006-1/2/3, A-C007-1, A-C008-1/2/3/4 + A-C008 pre-scoring legs. Bar (unchanged instrument): five lenses (motion · timing · purity · reusability · readability), average ≥85 AND no lens <70.

## 0. Prior vector + target
Prior attempt 2 (Cycle 008): motion 64 · timing 76 · purity 100 · reuse 76 · readability 68 = 384/5 = **76.8**, min 64. VERDICT FAIL.
Target attempt 3: **beat 76.8; aim ≥85, no lens <70** — needs +41 lens-points (425/5). Aim vector (planning aim only, never fed to a lens): motion 86 · timing 87 · purity 100 · reuse 87 · readability 85.

## 1. Full-record read list (R-OBS-1 — RUN.md §1 jev-observe-exit D3 gap)
Read firsthand in this Plan phase:
1. practice INSTRUCTION.md §0–§10 + all amendments incl. A-C008 legs text.
2. RUN.md (Cycle 009 Wave 8) §1–§2 — pool, T11 cure inventory (= attempt 2 WHY "next attempt would do differently", verbatim in force), Codex Observe receipt, jev-observe-exit seat judging (R-OBS-1 carried into Plan).
3. Artifact scores.md IN FULL — attempt 1 (80.4), attempt 2 (76.8) + attempt 2 WHY with cure-by-cure CA-W1 separation + competing hypotheses.
4. ALL prior Codex lens returns under artifact codex/attempt-2/: lens-motion (64) · lens-timing (76) · lens-purity (100) · lens-readability (68) · lens-reusability-run2 (76 — the FILED return) · lens-reusability-run1-superseded (SCORE 6 on self-declared 0–10 scale — history only, NOT averaged, NOT the filed return).
5. build-record-attempt2.md — esp. §1 segment re-observation (anchor evidence, below) + §2 construction + §4 deviations (D2: terminal-only premise contradicted by segment evidence).
6. build-record.md (attempt 1) §1–§2 — original parameter table + t61 firsthand note.
7. Packet evidence: digest T11 entry (P1 @ 0:56–1:05) in video-digests/2026-11-13-ig-dfk4sfvvjjq/digest.md — mechanics + why-it-works + evidence frame t61.
8. Guards: practice guards/jev-plan-exit.md (§2.4 standing failure points a–g) · recreation guards/guard-measured-fit.md · recreation guards/guard-config-census.md · practice guards/codex-rescore-wave.md (allowlist, final-sha binding, scale line).
9. Attempt-2 recreation.html source in full (18,732 B) — CONFIG, stateAt, stranded literals (streak /600, arch ×7/×13, stamp left/top 50%/46%, border 4px, figure strokes 1.4px/2px, rgba literal), CSS-transition stamp retargeting, shallow validateConfig, silent URL normalization.

## 2. STARTING PREMISE (A-C008-1) + evidence
**Premise: the stamp sequence is RECURRING — a stamp slams per merged card — with card dwell ≈2s.** Evidence (identifiable, filed): build-record-attempt2.md §1 segment re-observation at 2 fps from segment.mp4 (segment-relative, origin = segment start): stamp ALREADY slammed on card #1111 at ≈2.5s sample; no stamp on #1112 (≈3.5s) or #1113 (≈4.5s); card #1115 unstamped at ≈6.5s (approvals 700) and stamped/"Merged" at ≈7.5s (approvals 799); card dwell ≈2s sampled (#1115 spans ≥6.5–7.5s; successive distinct cards at successive ~1–2s samples). Attempt 2's WHY + RUN.md §1 carry the same filing. Construction therefore binds: cardIntervalMs 2000, per-card merged flags in CONFIG data, stamp slam late in each merged card's dwell (offset 1400ms = counter completion), stamp for card idx3 lands at 6000+1400 = 7400ms ≈ filed ≈7.5s; card idx0 stamp at 1400ms held to 1750ms (the ≈2.5s sample reads the first merged card's stamped state within the 0.5s sampling tolerance + hold — priced as sampling tolerance, not exact anchor). **Mid-cycle premise amendment clause:** if Execute's own re-observation contradicts this, file a MID-CYCLE PREMISE AMENDMENT in build-record-attempt3.md and build to the evidence. No re-observation contradicting it was performed this cycle; the filed Cycle-008 evidence stands as the anchor.

## 3. Cure plan (convergent first; each cure → named construction change)
- **K1 (CONVERGENT motion+timing — recurring stamps + dwell):** timeline rebuilt around cardIntervalMs=2000 / loopMs=10000 / 5 cards; `prs[].merged` data flags (idx 0,3 merged); per-merged-card stamp events derived in computeTimeline (stampAt = cardStart + stampOffsetMs 1400, hide completes before the next whip window opens); checks pill shows merged state while stamped. Terminal-only sequence removed.
- **K2 (motion — digit-roll counter, deferred D-1 of attempt 2, now built):** approvals rendered as digit columns (CONFIG counterDigits=3); each column is a 0–9 strip translated by −digit×counterDigitPx purely from phase; stateAt returns approvals + digits[]; counter blur removed entirely (roll carries the spin read; settle exact).
- **K3 (motion+timing — stamp scale purely from phase):** stamp transform computed only in stateAt/render from phase; CSS transition on the stamp REMOVED (transition:none invariant asserted); stampHideMs=100 ≤ stampHideLeadMs (per-card hide completes ≥250ms before whip; loop-final hide asserted hideMs ≤ hide lead in own-checks).
- **K4 (reuse — stranded literals → CONFIG + literal census, A-C008-3):** whip streak divisor → whipStreakDivisor; arch dark multipliers 7/13 → arch.darkMulX/darkMulY; stamp position → stamp.leftPct/topPct (CSS vars); stamp border → stamp.borderPx; figure strokes → figure.strokePx/legsStrokePx; stamp background → stamp.bg; font stacks → type.fontStack / stamp.fontStack. Own-checks scan all numeric/color literals outside CONFIG against a named structural whitelist; unlisted = FAIL.
- **K5 (reuse — nested-shape validation):** validateConfig deep-validates every nested shape (prs entries field types + approval ordering, checksCycle rows [string, state-enum, string], statusPills tone enum, pillTones/checkStates hex recursively, reviewersPerCard non-negative ints, arch numeric ranges, type/stage positive numbers) inside try/catch — malformed values REJECT (atomic fallback + observable REJECTED entry), never throw. URL overrides strict: cardMs must match ^\d+$ else rejected observably (no parseInt-junk acceptance, no silent clamp).
- **K6 (readability — arch rework + recognition-priced check):** arch legGap 0.16→0.34, legStart 0.62→0.55 (wider, taller leg opening), glyph fontPx 4.6→6.4, archCols 44→36 / archRows 34→28 (larger glyphs). Recognition check in own-checks: modelled opening width fraction ≥0.30 of arch width at leg rows, opening height fraction ≥0.40, glyph ink height ≥6px at 360px stage — asserted from the shape function itself, not containment alone.
- **K7 (readability — fit model extended to wrapped check rows, A-C006-3):** fit model computes check-row heights at BOTH single-line and wrapped states (longest row "prod / prod is down" at checksPx in the CONFIG panel width at 360px wraps to 2 lines) and asserts total displayed height ≤300px at both states; header wrap states retained.
- **K8 (motion — whip streak strengthening, secondary):** streak uses CONFIG divisor + skew component (whipSkewDeg from phase envelope) for directional read; opacity 1 invariant retained.
Deferred: NONE of the six RUN.md cures are deferred. Pixel render remains PIXEL-UNVERIFIED if no browser route exists (A-C002-2 standing limitation, priced in §5).

## 4. Execute checklist
- [ ] Preservation: cp recreation.html → recreation-attempt-2.html (CONTENT copy, create-once; STOP on existing mismatching destination); sha equality verified after copy and re-verified after first overwrite.
- [ ] Rebuild recreation.html per K1–K8: CONFIG-first, parameterized, no specimen media, no captions, DOM/CSS/JS only; source comments neutral (no cure codes/amendment labels — A-C008-4 scan before payloads).
- [ ] build-record-attempt3.md filed in artifact dir (score-blind; no prior scores, no cure-to-lens commentary).
- [ ] comparison.html: update ONLY if interface changed (it does not — same play/pause/restart + swap params); ORIGINAL side never touched.
- [ ] Own checks (own-checks-T11.js in run dir): swap test logic level + EFFECT mappings (A-C002-1); consumed-effect mapping for EVERY CONFIG key (A-C006-2); literal census (A-C008-3); displayed-state assertions incl. wrapped check rows + stamp-phase assertions per merged card (A-C004-2/A-C006-3); hideMs ≤ hide-lead; digit-roll digit mapping; arch recognition model; purity grep; node --check.

## 5. Verify checklist
- [ ] Pre-scoring legs (A-C008, non-skippable): guard-measured-fit → fit-table.md in artifact dir; guard-config-census → config-census.md in artifact dir; hit counts reported.
- [ ] Five-lens Codex wave: allowlist payloads only (lens instruction with standing header + "Scores are integers from 0 to 100" + closing SCORE/BODY-WRITE lines + neutral technique facts + score-blind build record + final recreation.html); payloads preserved create-once at codex/attempt-3/instr-<lens>.txt; returns verbatim at codex/attempt-3/lens-<lens>.md via -o; all five bound to identical final sha256 (recorded); a self-declared non-0–100-scale return is preserved as superseded and re-fired ONCE with scale clarified.
- [ ] scores.md Attempt 3 filing: five scores, average (1dp), minimum, signed delta vs 76.8, verdict vs bar (PASS = avg ≥85 AND min ≥70); WHY from §6 scaffold if average does not beat 76.8.
- [ ] Mechanical: delta arithmetic recomputed from filed returns; preservation census (attempt-1 + attempt-2 shas unchanged); PIXEL-UNVERIFIED printed if no render route.

## 6. Failure-point evaluation (jev-plan-exit §2.4 standing points)
- (a) Big-rebuild unattributability: PRICED — K1 restructures the timeline and touches motion+timing together; mitigated by cure-by-cure own-check assertions (each K has a named assertion family) and the WHY scaffold's per-cure slots, so a regression can be attributed per cure family even if lenses move bundled.
- (b) Cure interaction: PRICED — dwell 1300→2000ms changes counter span, whip spacing, and stamp offsets simultaneously; digit-roll removes counter blur (readability interaction, expected positive); larger arch glyphs change fit totals (K7 model re-run). Timeline invariants asserted at default AND cardMs=900-equivalent (interval override) configurations.
- (c) Prior-attempt overwrite / early comparison re-point: RULED OUT by construction — preservation in Plan before any touch (create-once, sha-verified); comparison not re-pointed (interface unchanged).
- (d) Anchor leak: RULED OUT — payloads allowlist-only, source-comment scan (A-C008-4), no scores/RUN/WHY text in any payload; delta computed by the seat-side filing, never by a lens.
- (e) Instrument change: RULED OUT — same five lenses, same bar as attempt 2; attempt 1 also five-lens. No cross-instrument delta.
- (f) Fan-out cross-contamination: RULED OUT — this agent writes only T11's artifact dir + plan-T11.md/own-checks-T11.js in the run dir; RUN.md/HQ.json/verdict-history untouched (seat files those).
- (g) Size-split evasion (§8): PRICED — the cure set is six named cures, all attempted; the rebuild reuses attempt 2's absolute-timeline skeleton rather than starting from scratch; no silent drops (deferred list in §3 is explicit and empty).

## 7. WHY scaffold (pre-drafted; completed at filing if the average does not beat 76.8 — full scaffold also appended to scores.md)
Per-cure outcome slots K1–K8 (effect verified / lens observation / attribution). Stuck-lens hypothesis + COMPETING hypotheses: see scores.md "Attempt 3 — plan scaffold" (appended this Plan phase).
