# Plan amendment — T195 · Cycle 035 Wave 32 (completion wave)
Filed BEFORE any build script (RUN §2b form). Authority: Cycle-034 item-T195-observe-plan.md AS AMENDED by this file. The Cycle-034 record is not retro-edited.

## 1. Gate charges applied
- **jev-plan-exit: RETURN-TO-OBSERVE (T195)** — primary class RETURN-TO-OBSERVE-ROOT. Verbatim substance (Cycle-035 RUN §2b): "G-µ micro-census first; then define how visual lag is represented, an exact endpoint rule so all letters reach exact endpoint colors at p = 1, and how transition exclusivity survives retiming; supply exact swap onsets; Class I checks use word roles that exist in the replacement sentence (checks keyed to `Caption`, `animation,`, `synchronized`, `is` cannot run unchanged against the proposed two chunks)."
- **jev-observe-exit charge (T195)** — carry G-µ as the filed prerequisite to finalizing the sweep (24 fps census at 41.50–42.00 s and 46.00–46.80 s, settling direction, softness, visual lag, lift); record sibling timing cures + dispositions from the cited filings, preserving the UNVERIFIED label on T03's practice result.
- Disposition of both: **APPLIED in full** — the cure is §§2–6 below; the micro-census findings file as the Observe addendum in build-record.md (frame hashes there).

## 2. The gate's two concrete contradictions — and their resolutions
Filed model (plan §2.6): p = clamp((t−onset)/((end−onset)×0.7)); lift settles 400 ms after visual fill completes.
- **Contradiction A (6,600 ms):** word `is` (onset 45560, end 46120, dur 560) — nominal fill duration 392 ms; at seg 6600 ms (source 46100) the sweep has run 540 ms → p clamps to 1 → fill = 1. Census f-46.1 shows `is` raised and WHITE; SF5 requires fill(is) < 0.5. **Resolution:** the visual schedule is its own CONFIG data (§3). Measured visual window for `is` is [46560, 46710] — at source 46100 fill(is) = 0 < 0.5 ✓ and lift(is) = liftPx > 0 ✓. SF5 holds by construction.
- **Contradiction B (7,600 ms):** `spoken.` nominal completion at seg 7334 ms leaves 266 ms of the 400 ms settle at seg 7600 ms, while SF7 requires lift = 0. **Resolution:** measured visual window for `spoken.` is [46560, 46750] and liftSettleMs is re-priced from the micro-census to **120 ms** (easeOut; bounds in build-record) → last settle ends 46750 + 120 = 46870 ≤ 47100 (seg 7600) ✓. SF7 holds by construction.

## 3. Visual lag representation (CONFIG)
Every word entry in CONFIG `lines` carries: `text`, `onsetSourceMs`, `endSourceMs` (ASR, transcript.json), and `visualOnsetSourceMs` / `visualEndSourceMs` (the VISUAL schedule the build actually renders). Two kinds:
- **Measured overrides** — windows measured by the §1.5 census + the Cycle-035 micro-census, each with bounds in build-record.md: Caption [40280,40750] · dynamic [41675,41860] · text [41930,42090] · animation, [42190,42400] · synchronized [43510,43700] · precisely [44170,44470] · is [46560,46710] · spoken. [46560,46750].
- **Derived** — all other words: `visualOnset = onset + visualLagMs` (120); `visualDur = max(minSweepMs 120, (end−onset) × sweepFraction)`; `visualEnd = min(visualOnset + visualDur, nextWord.visualOnset)` (tile-cap — §5). Derivation runs in the engine at load; a CONFIG timing swap (sweepFraction / visualLagMs) re-derives every derived window and moves every Class I evaluation instant with it.
No single (lag, fraction) pair fits the measured fronts within tight bounds (micro-census: dynamic lag ∈ (107,148] ms with fraction ∈ [0.35,0.58]; synchronized lag ≈ 0–40 ms; `is` lag ≈ +990 ms) — that variance is why the visual schedule is data, not a formula with silent defaults. The defaults (lag 120, fraction 0.55) are the bounded central values; measured words override them.

## 4. Exact endpoint rule (letter formula cure)
Per letter i (0-based) of a word with N letters, at visual progress p ∈ [0,1]:
`F = p × (N − 1 + frontSoftnessLetters)` · `fill_i = clamp((F − i) / frontSoftnessLetters, 0, 1)` · `color_i = lerp(unspokenColor, spokenColor, fill_i)`.
At p = 1: F = N − 1 + S, so the last letter (i = N−1) has fill = S/S = **exactly 1** and every earlier letter > 1 → clamped to 1. Every letter reaches its exact endpoint color at p = 1 — the filed formula's trailing-partial defect is cured by the (N − 1 + S) front range, not by an override branch. Word fill (assertions) = mean of letter fills. Front position for Class II assertions = F under this same definition.

## 5. Transition exclusivity under retiming
- Exactly one chunk mounted at a time: chunk i mounts at `firstWord.onset − chunkLeadMs` and unmounts at chunk i+1's mount (cut). The label card is a separate CONFIG block, never a chunk.
- Within a chunk, visual windows are ordered and non-overlapping by construction: derived windows are tile-capped at the next word's visual onset (§3); measured windows stand in speech order with gaps (checked in the harness). Retiming (sweepFraction / visualLagMs swaps) re-derives windows through the same tile-cap, so at most one word per chunk has 0 < fill < 1 at any instant, for any lawful CONFIG. Class I assertion I5 samples this mechanically.

## 6. Swap schedule — exact onsets (replaces plan §2.5's prose example)
Swap sentence (2 chunks), source-absolute ms, segmentStartS unchanged (39.5):
- L1: Reading 40180–40600 · follows 40600–41000 · the 41000–41180 · voice 41180–41560
- L2: exactly 41560–41960 · as 41960–42100 · it 42100–42220 · is 42220–42360 · spoken 42360–42960; hold to 47500.
No measured overrides in the swap CONFIG — all windows derive (§3). Timing swap: derivation `sweepFraction` 0.55 → 1.0. Palette swap: `spokenColor` #f0ff05 → #ff9f1c.

## 7. Class I assertions — re-keyed to roles that exist in BOTH schedules
Roles: FIRST = lines[0].words[0] · CHUNK2-FIRST = lines[1].words[0] · PENULT = last chunk's words[words.length − 2] (= `is` in the specimen L4 and in the swap L2, by position, never by literal text key).
- I1 (FIRST mid-sweep): instant = FIRST.visualOnset + 0.5 × FIRST.visualDur (CONFIG-derived). Assert meanFill(FIRST) ∈ (0.3, 0.95); every other word in chunk 1 has fill = 0.
- I2 (CHUNK2-FIRST mid-sweep + exclusivity): instant = CHUNK2-FIRST.visualOnset + 0.5 × its visualDur. Assert mounted chunk index = 1 (exactly one chunk mounted) and meanFill(CHUNK2-FIRST) ∈ (0.2, 0.8).
- I3 (lift ownership): instant = PENULT.onset + liftRiseMs. Assert lift(PENULT) = liftPx (rise complete, lift leads color), meanFill(PENULT) = 0 in the swap schedule (its visual window has not opened — in the specimen schedule assert meanFill(PENULT) < 0.5, its measured window opens at 46560), and lift(FIRST) = 0 (long settled).
- I4 (completion): instant = totalMs − 400 (segment-relative). Assert every word fill = 1 and every lift = 0.
- I5 (exclusivity under retiming): sample every 25 ms from first chunk mount to totalMs on the swap schedule (timing swap applied): exactly one chunk mounted at every sample; at most one word per mounted chunk with 0 < meanFill < 1.
Class II (source-fidelity, specimen CONFIG only, census instants unchanged): SF1 1100 · SF2 2800 · SF3 4100 · SF4 4900 · SF5 6600 · SF6 7100 · SF7 7600 — evaluated under the §4 formula; expected values recomputed in build-record.md.

## 8. Sibling timing cures + dispositions (jev-observe-exit charge; from the cited filings)
- **T03 (timing 55, attempt 1):** cure filed — price per-line durations from the window (line-level offsets / cadence summing to the window), not a single global cadence. **Disposition: APPLIED in form** — T195's schedule is per-word, segment-anchored, summing to the measured window; no global cadence exists in the build.
- **T03 practice attempt-3 (avg 89.0):** **UNVERIFIED in the fed record** (component scores not fed to Cycle 034) — the label is preserved exactly as charged; no disposition is priced from it.
- **T12 (timing 64):** cures filed — action-to-hold proportion (action ≈ ⅓, hold ≈ ⅔ of the window) and per-phrase duration verification before any per-character timing switch. **Disposition: APPLIED in part** — T195's end hold (last visual end 46750 → segment end 47500, plus per-chunk holds) and per-word measured windows carry the proportion lesson; the per-character question is settled by the micro-census (the front IS letter-scale, §4).
- **T12 (readability 62, convergent wrapped-phrase fill geometry):** **Disposition: NOT APPLICABLE, priced** — T195's chunks are single lines that never wrap (measured-width fit rule, plan §2.2); the defect class cannot occur in this construction.
- **T132 (timing 82 / reusability 76):** cures filed — audit the dwell table against the packet floor claim; move onset derivation into the engine so a table swap is CONFIG-only end to end. **Disposition: APPLIED** — T195's derivation rule lives in the engine (§3) and the swap (§6) is CONFIG-only; the ASR table was audited word-by-word against transcript.json at Plan (plan §2.1) and the visual table against the census/micro-census here.

## 9. Departures from the Cycle-034 Plan (priced here, evidence in build-record.md)
- D6 — derivation `sweepFraction` default 0.7 → **0.55** (micro-census front speeds; measured overrides govern the priced words regardless).
- D7 — `liftPx` 14 → **28** (micro-census: raised-word top 465 vs 493 ascender line ≈ 28 px; centroid shift ≈ 31 px; ≈ 0.35 em at the corrected font size) · `liftSettleMs` 400 → **120** (settle completes ∈ (46.75, 47.10] with fill ending 46.71–46.75; easeOut).
- D8 — colors re-priced from pixel samples: `unspokenColor` #ededed → **#dedede** (sample ≈ (222,222,222)) · `spokenColor` #f7e017 → **#f0ff05** (sample ≈ (240,255,5)).
- D9 — `fontPx` 54 → **82** (source glyph geometry: L4 advance ≈ 29 px/char and ascender-to-descender ≈ 75–80 px at the 1920 stage → font ≈ 76–88 px; 82 is the bounded central value; the measured-width fit rule still governs).
- D10 — `chunkLeadMs` 60 added (L2 already mounted at source 41.50, ≥ 60 ms before its first onset 41.56; bounds [0,100] — L4's cut brackets to ≈ 0–40 ms, ASR/bracket uncertainty recorded).
All other plan defaults stand (segment 39.50–47.50 · totalMs 8000 · frontSoftnessLetters 3.5 within the measured [3,4.5] band — plan value 3 superseded by the micro-census band centre, recorded here · liftRiseMs 120 · labelCard as filed · fitWidthFraction 0.92 · lineTopFraction 0.46).
