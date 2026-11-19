# T109 — Element morph / scene morph · build record (attempt 2, practice Cycle 020 Wave 19)

Governing plan: `study-jobs/practice/runs/2026-11-17-cycle-020-wave-19/plan-T109.md` AS REVISED (incl. its Plan-review consumption section). Gate precondition (§8.0): RUN.md §3 records the A-C015-1 skeleton read-back (HQ.json entry `lane-2026-11-17-cycle020-skeleton` + heartbeat beat 93, both read back, GATE SATISFIED) — read from RUN.md before the first Execute act.
Final build: recreation.html sha256 **29de77e18ca45eac75ecc70fd6ba331ffa42e88f61319f145629271f8a83a87d** (identical for all five lens runs; no post-wave source change). PIXEL-UNVERIFIED (A-C002-2 — no render route in this seat; geometry rests on the deterministic node-harness suites).
Schedule basis: **t=0 allocation** (standing basis from attempt 1; durations changed inside it, basis unchanged).

## 1. Preservation (Execute 1–2)

- Full baseline: `runs/2026-11-17-cycle-020-wave-19/preservation-baseline-T109-full.txt` — machine-written (sha256sum, write-first), 61 files, every hash 64 hex, count = inventory count.
- Content copies taken before any mutation: `recreation-attempt-1.html` (sha 773c2c12…, = baseline) + `comparison-attempt-1.html` (sha 4d723d64…, = baseline), fresh inodes ≠ working-file inode; re-verified AFTER the working file's first overwrite (both still baseline shas) and again at close census.
- Close census (split by class): immutable evidence byte-identical to baseline (61-file sha256sum -c: only the two intended mutable working paths differ — working recreation.html rewritten by the attempt, working comparison.html re-pointed); scores.md judged by byte-prefix after filing (§5).

## 2. Staged build (A-C012-4 gate — each stage's checkpoint filed create-once BEFORE the next stage began)

| Stage | Cures | Checkpoint source sha | Own-check output |
|---|---|---|---|
| S1 | C1 dispatch + C7 cycle/joiner/validation | 0b38fce5d0b0d93f75f72d642a1e429d112bace8806cfa11604def76ca0fe425 | checkpoint-S1-own-check.txt — 13 pass, 0 fail |
| S2 | C2 piecewise trajectory + C4 centre sink | 19df5b456e3c09dcf7a0ee4005778f954c8800bbec71fd44e97ddf2ade068fbc | checkpoint-S2-own-check.txt — S1 13 + S2 27, 0 fail |
| S3 | C3 morphMs 2000 + staged reveal + prep collapse | 5502c770edd1bdbac14cc88c762292c2c97f1e5f1e05a9fed1e5ca123940c50e | checkpoint-S3-own-check.txt — S2 27 + S3 18, 0 fail |
| S4 | C5 countdown band + C6 title geometry | 29de77e18ca45eac75ecc70fd6ba331ffa42e88f61319f145629271f8a83a87d (= final) | checkpoint-S4-own-check.txt — S2 27 + S3 18 + S4 10, 0 fail |

All checkpoint copies are content copies (inode ≠ working inode, asserted at filing). Final suite on the finished build (Execute 7–8): 54 pass, 0 fail — 95/95 CONFIG leaves consumed (mutation-tested effect mappings), literal census {0,1,2,3,5,7,16} all whitelisted structural, source-comment scan 0 comments, purity grep clean (no external asset/media/whole-scene opacity), self-start via the piece's own RAF path verified in the harness, phase exclusivity sampled across the cycle, swap test (title · morphMs · palette) + the attempt's new legs (mapping-change · field stagger · over-budget validation · reveal-fraction change) all asserted as effect mappings.

## 3. Plan-conflict resolution (printed, priced — not silent)

The plan's C2 formula completes each collapsing element's morph piece at P2 (= C2), while its C3 staged-reveal assertions (and Execute step 5) require webpage clearance complete BEFORE first-triangle visibility at the clearance boundary (30% of the morph). Both cannot hold under the printed denominator. Resolution taken: the morph piece's span is the clearance stage (`morphMs × reveal.clearanceEnd`), so clearance completes exactly at the boundary — satisfying every C2 *outcome* assertion (continuity at both joins · join value = prep fraction · terminal state at C2 · settle purity · forward/return mirror equality including the preparation portion — all re-verified at S3/S4 against the new duration) and every C3 ordered assertion. The deviation is from C2's printed denominator only; it is recorded here and in scores.md so the seat can price it. (The lenses' residual complaint was different — the FIELD's colour interpolation completes at morph end rather than by the clearance boundary; see §6.)

## 4. A-C008 pre-scoring legs (Execute 9 — on the NEW attempt, before the wave)

- `fit-table-attempt-2.md` — measured-fit leg: **0 HITs** (title ink ≈11.5 px ≥ floor at the new geometry, both titles single-line; countdown × cardLow disjoint at every step; searchBar × cardTop disjoint; cluster bounds inside stage).
- `config-census-attempt-2.md` — config-census leg: **0 HITs** (95 leaves, 0 unconsumed; literal whitelist per literal; 0 source comments).

## 5. Comparison (Execute 10)

`comparison.html` re-pointed only after own checks passed: iframe height 203 → 224 px for the new stage height; the ORIGINAL side (segment.mp4 figure) is byte-unchanged in content and role. `comparison-attempt-1.html` preserved first (§1).

## 6. Re-scoring wave (fed route, A-C019-2 session scope printed per lens)

Route for every firing: payload as the SOLE input stream (`cat <payload> | ~/workspace/codex-local/node_modules/.bin/codex exec - -s read-only -o <create-once return>`), cwd = the agent home (OUTSIDE the artifact directory), no --add-dir. Permitted read scope: the payload stream only. Payloads + returns preserved create-once under `codex/attempt-2/` before any subsequent source change (no source change followed). Payload manifest: `codex/attempt-2/payload-manifest.md` (allowlist + exclusions + anchor scan; two fit-leg prior-reference finds neutralized in the readability payload copy only, re-scan clean; headers carry the BAR only — no prior average or score anywhere).

| Lens | Payload fired | Return | Score | Session's actual additional reads beyond its payload |
|---|---|---|---|---|
| motion | payload-motion-run2.txt (run-1 payload preserved as payload-motion.txt) | lens-motion.md (run-1 non-assessment preserved verbatim as lens-motion-run1.md) | 82 | Run 1 session attempted on-disk searches (wrong path under the home dir; found no T109 artifact; did NOT read scores.md or prior returns — per its own return) and returned a non-assessment (SCORE 0, administrative). Preserved; re-fired once under A-C002-4 with an explicit stream-only assessment-basis line added (payload-motion-run2.txt). Run 2 assessed the stream; no additional reads reported. |
| timing | payload-timing-v2.txt (v1 preserved) | lens-timing.md | 80 | None reported (stream-only assessment stated in its limits). The v2 payloads carry the same stream-only basis line, added pre-firing after the motion run-1 behaviour. |
| purity | payload-purity-v2.txt | lens-purity.md | 100 | None reported (stream-only stated). |
| reusability | payload-reusability-v2.txt | lens-reusability.md | 88 | None reported; its limits note the stream-only basis explicitly. |
| readability | payload-readability-v2.txt | lens-readability.md | 84 | None reported (stream-only stated). |

No session read scores.md or a prior return: no A-C019-2 session contamination. All five final returns judge the IDENTICAL final sha256 (29de77e1…) named in every payload header.

Arithmetic (guard 1, recomputed from the filed returns): 82 + 80 + 100 + 88 + 84 = 434; average = 434 / 5 = **86.8**; minimum = **80** (timing). Signed delta vs prior average 82.4 = **+4.4**. Bar (average ≥ 85 AND minimum ≥ 70): **PASS**.

## 7. Attribution (two classes, never conflated — plan §4)

- Cure-specific own-check evidence (construction effects, credited per cure/stage): C1 — mapping-change swap legs pass (mode redirect, destination redirect, field-stagger delay); C7 — joiner mutation + over-budget validation + kind validation pass; C2 — continuity at both joins, terminal-at-C2, settle purity, mirror equality incl. preparation samples; C4 — centre monotonicity + exact 10 px sink travel on both collapsing cards; C3 — ordered staged-reveal assertions (R1 no-triangle sampled · clearance at boundary · lone-triangle interval at 3 interior points · cluster from R3 · full at C2) + reveal-fraction mutation; C5 — countdown × cardLow disjointness at every step; C6 — title ink height/width at the new geometry for both titles.
- BUNDLED final lens delta (whole attempt's movement per lens; no per-cure or per-stage split was measured): motion 81 → 82 (+1) · timing 82 → 80 (−2) · purity 94 → 100 (+6) · reusability 78 → 88 (+10) · readability 77 → 84 (+7).

## 8. Deviations

- D-T109-1 (plan conflict, §3): C2 printed denominator vs C3 clearance assertions — resolved toward the ordered assertions; every outcome assertion on both sides re-verified green.
- D-T109-2 (machinery): the first S1 source write to /tmp did not persist to the exec filesystem (file-tool write reported success; the file was absent at exec). The stage source was rewritten directly to the working file with the file tool; no content was lost and preservation copies (taken before) were unaffected. Recorded so the seat does not price /tmp writes as reliable in this seat.
- D-T109-3 (wave procedure): motion run-1 non-assessment + re-fire (§6) under A-C002-4; the stream-only basis line was added to all remaining payloads pre-firing as v2 copies (originals preserved untouched).
- Check-script corrections (not build defects): three own-check scripts were corrected mid-run where the CHECK mis-stated the expectation (attempt-1-schedule residual 2900 not 1900; mirror string-equality replaced by 1e-6 tolerance after diffs measured at 1e-13; clearance sampled at the exact boundary where the predicate is stated; ease/centroid/hex-vs-rgb sample points in the final suite). Each correction is visible in the checkpoint outputs' detail lines.

## 9. Residual queue for attempt 3 (from the filed returns, verbatim in substance)

- Field colour interpolation completes at morph end; motion + timing converge: complete the field's transition to black by the clearance boundary (timing prices black at morph onset) so triangles assemble on a cleared black field.
- D1 (deferred identity topology) is now the motion return's named handoff defect in its own words: the top card rounds/darkens and fades while triangles grow separately — "preserve a visible geometric correspondence through that handoff."
- Timing prices the preparatory collapse against the census's completed-webpage countdown (a basis dispute to resolve with evidence next attempt, both bases printed).
- Readability: white countdown text on the teal field (contrast) + the outline's top edge (y 38) crossing the search bar's footprint (to y 41) — a pair the fit census did not enumerate.
- Reusability: unknown modes silently skip; unsupported source names can throw; collapse handlers ignore entry.b — validation/registry hardening.
