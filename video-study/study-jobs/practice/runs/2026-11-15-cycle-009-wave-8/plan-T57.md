# T57 Attempt 2 — Plan (item agent, Cycle 009 Wave 8, 2026-11-15)

Technique: T57 quote cards with named attribution (packet P3-T09, Epochs in Ink, YouTube o1FsB1nyEWI). Consumer: DLC assembler quote-card surface via the style library.
Artifact dir: `hidden_files/study/recreations/T57-quote-cards-attribution/` · Run dir: this directory.

## R-OBS-1 — Full-record read list (all read firsthand this cycle, in full)
1. practice INSTRUCTION.md §0–§10 + amendments A-C002-1/2, A-C003-1/2/3, A-C004-1/2, A-C005-1/2, A-C006-1/2/3/4, A-C007-1/2, A-C008-1/2/3/4 + A-C008 pre-scoring legs.
2. This run's RUN.md §1 (pool, picks, T57 cure inventory + delta target) + §2 seat record.
3. T57 scores.md IN FULL (attempt 1: motion 68 · timing 58 · purity 100 · reuse 68 · readability 74 → 73.6, min 58, FAIL; six priced cures).
4. ALL five attempt-1 Codex lens returns under the artifact's `codex/` (lens-motion/timing/purity/reusability/readability.md) — full findings, not the scores.md summary.
5. Prior build-record.md (attempt 1) in full.
6. Prior recreation.html source in full; comparison.html.
7. Packet evidence: digest P3-T09 catalogue entry (mechanics + instances + ev/t505.jpg citation) in `hidden_files/study/video-digests/2026-11-14-yt-o1fsb1nyewi/digest.md`.
8. Segment re-observation firsthand (this agent): segment.mp4 extracted at 2 fps (28 frames), frames f001/f002/f003/f017/f018/f019/f020/f021/f022/f023/f024/f026/f028 viewed directly (see anchor table below).
9. Guards: `guards/jev-plan-exit.md` (§2.4 standing failure points), recreation `guards/guard-measured-fit.md` + `guards/guard-config-census.md` (A-C008 legs), practice `guards/codex-rescore-wave.md` (feeding contract).

## Prior vector + delta target
Attempt 1: **73.6** (motion 68 · timing 58 · purity 100 · reuse 68 · readability 74), min 58. Target: beat 73.6; aim ≥85 with no lens <70 (needs +57 lens-points: timing +12 and reuse +2 just to clear floors; the convergent entrance/lifecycle cures carry motion+timing, the precompute cure carries reuse, type/contrast cures carry readability; purity must hold at/near 100).

## A-C006-1 / A-C008-1 — Anchor + event-sequence re-observation (identifiable segment evidence)
Method: `ffmpeg -vf fps=2` on the artifact's segment.mp4 → frames f001–f028 (frame N = (N−1)/2 s). Event sequence observed:
| seg t | frame | state |
|---|---|---|
| 0.0 | f001 | 1971 scene stands; NO quote card |
| 0.5 | f002 | Card present bottom-right, MID-FADE (all quote lines + attribution together, text dim) — unit entrance in progress |
| 1.0 | f003 | Card fully opaque, complete (quote + "— Associated Press on Byrd") |
| 8.0 | f017 | Card still fully present (scene badge now 31) |
| 8.5 | f018 | Scene zoom-out/blur transition; card exits WITH the scene |
| 9.0–11.0 | f019–f023 | Ballot-arc board only; NO quote card |
| 11.5 | f024 | Second card FAINT, entering bottom-left (low opacity) |
| 12.5 | f026 | Second card fully present: "Range far beyond his public ones." — **Semafor** on Schumer's private commitments (FULLY legible at full size) |
| 13.5 | f028 | Second card holds |

**Resolutions against the priced anchors (A-C006-1: segment evidence wins):**
- Unit landing ≈0.5s: CONFIRMED with nuance — card substantially present at 0.5s, entrance completes between 0.5–1.0s. Build binds entrance duration 500ms starting at t=0 (complete at 500ms, inside the evidenced window's early edge; the residual ≤500ms uncertainty is printed, not hidden).
- First-card exit ≈8.5s: CONFIRMED — exit window 8.0–8.5s. Build binds exitStart 8000ms + exitDur 500ms.
- Second card ≈10.0s: **CONTRADICTED** — no card at 10.0/10.5/11.0s; entrance begins ≈11.0–11.5s, complete by 12.5s. Build binds second-card startAt 11500ms. This is a priced-anchor correction, filed here and in scores.md's plan section.
- Second-card attribution "explicitly unresolved": **CONTRADICTED** — at f026/f028 the attribution reads in full: Semafor, "on Schumer's private commitments". Build binds the second quote with that attribution resolved. (Attempt 1's "partially legible" note priced a small/early frame; the settled hold frame is legible.)
- Event sequence (A-C008-1): card-1 unit entrance → long static hold → exit with scene → gap (other scene furniture, excluded) → card-2 unit entrance → hold to window end. No line-stagger event exists in the sequence at 0.5s resolution.

## Cure plan (convergent first)
- **C1 (CONVERGENT motion+timing; scores.md cure 1+6) — unit entrance as default.** Construction: `entranceMode: "unit"` default — card, glyph, all quote lines and attribution share ONE entrance progress (fade + scale from `entranceScaleFrom` to 1, no translateY). `entranceMode: "staggered"` retains the per-line reveal as an optional variant only. Entrance duration = `cardEnterMs` 500.
- **C2 (CONVERGENT motion+timing; cure 2) — specimen lifecycle.** Construction: per-quote `startAtMs` + `exitStartMs`/`exitDurMs` in CONFIG; default sequence = quote 1 (AP on Byrd) start 0, exit 8000–8500; quote 2 (Semafor line, attribution resolved per re-observation) start 11500, holds to durationMs 14000. `lifecycleMode: "specimen"` default; `"hold"` mode = indefinite terminal hold retained as the explicit reusable alternative.
- **C3 (reuse; cure 3 — the attempt-1 build bug) — precompute.** Construction: at init (and on resize / fonts.ready) EVERY quote is wrapped and ALL start times are computed into a frozen timeline table BEFORE any playback; renderAt reads only the table (no lazy cache, no history dependence). Own checks assert seek-vs-sequential equivalence with mixed-length quotes.
- **C4 (reuse; cure 4) — duration/fit/literals.** Construction: required duration derived from the timeline; if `durationMs` is short, the effective duration extends to the requirement and the extension is recorded in an observable diagnostics object. Vertical fit prices the COMPLETE card (padding + glyph + gaps + quote lines + possibly-wrapped chip lines) against `cardMaxHeightFrac`; re-measure on resize. Contrast fallback becomes a CONFIG policy (`contrastFallback: "lighten"` — deterministic lightening toward white until the floor clears, no hidden specimen-color substitution). `pageBg` applied at the document root. Remaining literals (entrance scale, shadow geometry/alpha, card-height fraction, occasion gap) move into CONFIG; A-C008-3 literal census in own checks.
- **C5 (readability; cure 5) — type + contrast.** Construction: `chipFrac` raised so attribution ≥13–14px at 360px stage (0.039 → 14.0px); card widened (`cardWidthFrac` 0.62→0.72) so the attribution fits one line at phone width; text contrast floors priced for text — ink/chipInk/occasion all ≥4.5:1 vs the card (occasion gold lightened within its family to clear 4.5:1, exact value verified by the suite's contrast computation); the 2:1 decorative floor survives only for the non-text accent (rule/glyph share the occasion hue family but are not text — the suite asserts the TEXT floor separately).
- **Deferred:** finer-than-0.5s entrance sampling (evidence resolution limit, printed in attempt 1 and unchanged); pixel verification (no browser route — PIXEL-UNVERIFIED stands); scene furniture (excluded by the technique's definition, not a deferral of a cure).

## Execute checklist
1. Preservation: `cp` recreation.html → recreation-attempt-1.html (content copy, create-once; STOP on pre-existing mismatching destination); verify sha equality + distinct inode.
2. Rebuild recreation.html per C1–C5 (CONFIG-first, parameterized, no specimen media, no captions; source comments neutral — no cure codes/labels, per A-C008-4).
3. File build-record-attempt2.md (score-blind: neutral technique facts + construction + own-check results + segment re-observation; NO prior scores, NO cure-to-lens commentary).
4. Own checks (own-checks-T57.js in this run dir): effect mappings per A-C002-1 (incl. seek-vs-sequential equivalence with mixed-length quotes), consumed-effect mapping for every CONFIG key per A-C006-2, literal census outside CONFIG per A-C008-3, displayed-state assertions per A-C004-2 (complete-card vertical fit incl. wrapped chip states per A-C006-3; attribution size at 360px; unit-mode simultaneity; lifecycle states at 0.5/8.25/10/12/14s), purity grep, syntax check.
5. Comparison check: interface changed (new CONFIG keys + second default quote) → update comparison.html labels/duration note only if needed; ORIGINAL side never changes.
6. A-C008 legs: guard-measured-fit → fit-table.md; guard-config-census → config-census.md (both in artifact dir, on the NEW file).
7. Lens wave: five Codex lenses, allowlist payloads only, create-once instr/return preservation under artifact `codex/attempt-2/`, identical final-sha binding, scale line in every instruction.
8. File scores.md Attempt 2 (scores · average · minimum · signed delta vs 73.6 · verdict; WHY from the scaffold below if non-beating).

## Verify checklist
Swap test (logic level; PIXEL-UNVERIFIED printed) · purity grep + asset inventory · comparison check · five-lens wave per codex-rescore-wave.md · delta arithmetic recomputed from filed returns · preservation census (attempt-1 copy sha re-verified AFTER the working file's overwrite) · floor-rule gate (WHY owed iff avg ≤ 73.6) · A-C008 legs filed before the wave.

## Failure-point evaluation (jev-plan-exit §2.4 standing points)
- (a) Big-rebuild attribution risk: PRICED — C1+C2+C3 all touch the timeline; if motion/timing regress, cure-by-cure attribution uses the own-check state assertions (unit simultaneity vs lifecycle anchors are separate assertions) plus the WHY scaffold's competing hypotheses.
- (b) Cure interaction: PRICED — widening the card (C5) changes wrap line counts, which changes staggered-variant spans (C3's table absorbs this by construction); raising chip size raises complete-card height, which the C4 fit loop must absorb by shrinking quote size only, never the chip below its floor.
- (c) Prior-attempt overwrite: RULED OUT by Execute step 1 (create-once content copy + post-overwrite census).
- (d) Anchor leak: RULED OUT — lens payloads are allowlist-only; prior scores live only in this plan + scores.md, never in a payload; source comments scanned per A-C008-4.
- (e) Instrument change: RULED OUT — same five lenses, same bar as attempt 1.
- (f) Fan-out cross-contamination: RULED OUT — this agent writes only T57's artifact dir + this run dir's T57-named files.
- (g) Size split evaded: RULED OUT — the cure set is five bounded construction changes to one file, not a rebuild-from-scratch; nothing deferred except the printed evidence-resolution limits above.

## WHY scaffold (pre-drafted; completed at filing only if avg ≤ 73.6)
Filed in scores.md's plan section with cure-by-cure outcome slots (effect-verified / lens-observation / attribution), stuck-lens slot, and COMPETING hypotheses:
- H1: the unit entrance reads as a fade of a small lower-third card, and lenses price the recreation's centered isolation as a different surface regardless of entrance mode.
- H2: the corrected second-card anchor (11.5s) is itself mispriced by lenses anchored on the attempt-1 record's ~10s claim, which the score-blind packet cannot correct because the packet's neutral facts carry the re-observed anchors.
- H3: readability gains from type size are offset by the wider card's changed proportions / longer occasion line at other widths.
- H4: reuse remains bound by the explicit-startAt specimen mode being read as less general than a purely span-derived timeline.
