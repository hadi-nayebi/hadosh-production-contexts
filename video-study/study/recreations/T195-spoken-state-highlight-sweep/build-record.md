# Build record — T195 spoken-state highlight sweep · attempt 1 · recreation Cycle 035 Wave 32
Item: queue #91 · Packet #11 ("Caption with Intention") technique P11-T06 · window 38–48 s.
Plan authority: Cycle-034 `item-T195-observe-plan.md` AS AMENDED by `plan-amendment-cycle035.md` in this directory (jev-plan-exit RETURN-TO-OBSERVE + jev-observe-exit charge, both APPLIED — amendment filed before any build script).
Schedule basis: **segment-anchored** (segment = source 39.50–47.50 s; CONFIG stores source-absolute ms + segmentStartS 39.5, single authority).
Render-proof limitation (guards.md command 2): **PIXEL-UNVERIFIED** — no browser binary in this seat; own checks are source/logic-level (node harness on the build's own state function); comparison.html is the render surface.

## Segment binding (guards.md command 5)
Cut in Execute: source.mp4 (1920×1080, AV1, 24 fps, 113.734 s, 10,213,125 B) at 39.50–47.50 s → `segment.mp4`, re-encoded h264/yuv420p + AAC, faststart.
ffprobe (verbatim): codec_name=h264 · width=1920 · height=1080 · avg_frame_rate=24/1 · codec_name=aac · duration=8.000000 · size=376556.
segment.mp4 SHA-256: d0d9132a9dd778e6671781293e61cbd3f4391f5c0ef1be1010dadb8998608bff (376,556 B). Evidence only; labeled ORIGINAL in comparison.html; referenced nowhere in recreation.html (purity grep below).

## OBSERVE ADDENDUM — G-µ 24 fps micro-census (Execute step 1, the RETURN-TO-OBSERVE cure)
Extraction: ffmpeg fps=24 from source.mp4 into this directory's `micro-census/` (a-f01…a-f12 = source 41.500–41.958 s; b-f01…b-f19 = source 46.000–46.750 s). Every frame viewed firsthand by the builder; per-letter yellowness (R+G−2B over bright pixels) and y-centroids computed over the same frames as the measurement instrument. Cross-checks: a-f04 hash = Cycle-034 census f-41.6 hash (26204017…) · b-f04 hash = census f-46.1 hash (c83ca54a…) — the micro-census frames are the census frames' own sequence.
Frame SHA-256:
```
a-f01 e7ec943ee3876a66c8decdf3ccb744830353ad20b993b710f87b897d477db9bb  a-f02 771fd83c02cc2443b469cd5958922fe8dd7258e337c45b67fc0d200af3a6c3a6
a-f03 b46bc3fa03ab87fb15834731d6e577850018e6f9523a8ad5286c30598c347ee0  a-f04 2620401792eff26039e432fb6ee111c7443e519c6cb67b1335d080732d4d8fc5
a-f05 9167452468ab9a7408db48876877bde62f3b3cc2b1d1f5957b1e532849e44885  a-f06 765c5e2010e9c22d1cf0dfb2022a201d2ab72d7d2ad32013c1873150c19a7d4e
a-f07 176837fa4aac3016b9cd65181ffb98c514c1f03b2c6ca6eb5a23e65660277408  a-f08 74c383c62ff2756a581a41a6bf0f8fa0944bc7dd28c0e873538b48bb23c84cff
a-f09 bd6d7fca28fe52c52ab65affd2e9cae9e05076445bda34ba42dfd7c886ef8a27  a-f10 13ee443d692a9c5b07d0c33c563b14fa2b234b0d193f447fbb8151e9dbd32006
a-f11 ac0d4d5ecb8db7aef655315fa09cdf73802675e0935b68c90bf9eb5135685c6c  a-f12 8d12be42010b9562db678c428fb6dd4df33dbcc77002c64ea986b3a85840823e
b-f01 95e7b77f03453b598c73aa14bdff22d9f9d7c7e165dc43ceb846d578cc346a2e  b-f02 11278a3ec1e3a4ae52e8b2d415751c0a57ffa1a49989913eb0e8ae04033c784c
b-f03 17dcace3db79931422c217d5cf665d29d5db004be1cbb81aac85f17965b426e4  b-f04 c83ca54ab83e1a757ef27599f929202acfa4f850524fd2b900ef57e531d28649
b-f05 829d50ad09069449b05fe72e99da3bf7f5f9e84e01bc73a607d47e9603a46a9f  b-f06 0f8bfe8fac95716f55531744f32d4b641b4cd5d24c20bed5669055ce7c312da6
b-f07 c4768bc6a5054717e3477e59ed8cc78dd5f6a56111c405011426c7b836fd742b  b-f08 6f0c2092b309604c9dc8b3694d854f8d83b4b3a699754c9b1a763817ca3d448a
b-f09 ce67942a7659b47621c86426ecba81798e31690a1a11045241bf2e6345c5bc83  b-f10 f2c017b4fc83f060127c4c3c215de93999243392184c8cba6a5aa1e9d6e36014
b-f11 c1955c5db9378eba60d1c13640da0a523d54c4d02818cea516e3ab3d087e3d56  b-f12 09132ce4c278c3d112fbd26ec9bc0dfde1edbd28f80dce5d63b7eb0cffc840a4
b-f13 8cbcb7e02ee73e6d3f7326a7ecbbc16ba4018db4bec79c93cbb5b3f7b94835e3  b-f14 fbb0bba7c635470a3938bc650947c82969f996d4f5b87b03a5a56bc07c0f77de
b-f15 ca56b5f3e033d95104b579008e92181d372626deb9107c85771b706ad78d8521  b-f16 6d578ce3b2b3e35eac50300363af34a889c9ec8848e547243e325ba3690d1a3b
b-f17 81178a818602895fe4a459994212d07690d9e6dc60052b6cc645b4112cd5bade  b-f18 a1fff7d0da1032ba20bfa8d4d754e44e63916a9d8a3e5cb5df157c1b4ae42a36
b-f19 148dbc2ef648f35be0da6eafe26449fe987777c808e76b360183d3defa36e493
```
Findings (settled, with bounds where the evidence bounds rather than settles):
1. **Direction: left→right, settled.** In window A the fill front crosses `dynamic` strictly left→right (mean word fill 0 → 0.13 → 0.33 → 0.65 → 0.87 → 1.0 across a-f06…a-f10) and enters `text` at a-f12. No right→left or whole-word-flip state exists in either window.
2. **Front softness: a gradient band ≈ 3–4.5 letters wide, settled as a band.** At a-f08 the per-bin yellowness descends 356 → 290 → 242 → 110 across the front (≈ 3 bins ≈ 4 letters at 43 px/letter); CONFIG frontSoftnessLetters = 3.5 (band centre).
3. **Visual lag: NOT a single constant — bounded per word, hence the visual schedule is CONFIG data (amendment §3).** `dynamic`: first fill at a-f06 (41.708), previous frame all-white → visual start ∈ (41.667, 41.708], lag ∈ (107, 148] ms after ASR onset; completion ∈ (41.833, 41.875] → sweep duration ∈ [125, 210] ms, fraction ∈ [0.35, 0.58] of the 360 ms ASR duration. `text`: tint already present at 41.958 (38 ms after onset) → lag ≈ 0–40 ms. `is`: fill stays 0 through b-f14 (46.542) and runs b-f15…b-f17 → visual window ∈ start (46.542, 46.583], complete (46.667, 46.750] — a lag of ≈ +990 ms against its ASR onset, i.e. `is` is held white (and lifted) and fills in one fast pass together with `spoken.` (spoken fill start ∈ (46.542, 46.583], complete ≈ 46.750, ≈ 440 ms BEFORE its ASR end). Measured windows + derivation defaults (lag 120, fraction 0.55, both bounded central values) are filed in the amendment §3 table; no quantity is silently defaulted.
4. **Lift-to-fill relationship: lift LEADS color and OUTLASTS the speech window, settled.** `is` is already raised at b-f01 (46.000, ASR onset 45.560) while its fill is 0; it stays raised through b-f16 (fill running) and its y-centroid recovers ≈ 85% by b-f19 (46.750), baseline restored by census f-47.1. Lift magnitude: raised-word top at y=465 vs the line's ascender line y≈493 → ≈ 28 px; per-bin centroid shift ≈ 31 px; at the corrected font size ≈ 0.35 em → CONFIG liftPx 28, bounds [22, 36]. Settle: fill completes ∈ (46.667, 46.750] and baseline is restored ∈ (46.750, 47.100] → settle duration ∈ [80, 390] ms; CONFIG liftSettleMs 120 with easeOut (centroid ≈ 85% recovered 40 ms after the b-f19 sample is consistent with an easeOut settle, not a linear one). Window A shows no large lift (≤ ~9 px residual centroid shift on the just-completed `dynamic` at a-f10 — a settle in progress, consistent with the same per-word envelope).
5. **The f-41.6 trailing tint (gap G-µ's anomaly): a faint, transient, non-monotonic artifact — NOT part of the fill front.** The last letter of `dynamic` measures yellowness 26 (of ≈ 340 full) at a-f04 (41.625), 0 at a-f05 (41.667), 22 at a-f06–a-f07 while the true front is at the word's left, then the front arrives. A ≈ 7%-of-full, on-off-on trace on one letter, ahead of the front, is recorded as a codec/render artifact bound; no schedule claim is built on it (plan departure D5 stands).
6. **Chunk mount lead:** L2 stands fully mounted and all-white at 41.500, ≥ 60 ms before its first onset (41.560) → chunkLeadMs 60, bounds [0, 100] (amendment D10).
7. **Colors (pixel samples):** spoken yellow ≈ RGB (240, 255, 5) → spokenColor #f0ff05 · unspoken white ≈ (222, 222, 222) → unspokenColor #dedede (amendment D8). Source glyph geometry → fontPx 82, bounds [76, 88] (D9).

## Construction (as amended)
One self-contained HTML file; CONFIG at top; DOM per-letter spans in per-word wrappers in one mounted chunk; single rAF clock; state a pure function of segment-relative time (`stateAt`, exported for the harness). Per-word lift envelopes independent (rise at speech onset over liftRiseMs, hold while fill < 1, easeOut settle over liftSettleMs after visual completion). Endpoint rule: front F = p × (N − 1 + frontSoftnessLetters), fill_i = clamp((F − i)/S) — every letter exactly at its endpoint color at p = 1 (harness ENDPOINT check). Label card: CONFIG-gated non-core block, opacity dissolve (named approximation, plan §2.7 finding 5).
recreation.html SHA-256: f328d783d1ee5d9c2a908106add3bbcd92f071b8e39bae083bdff799b482c17b · 12,145 B (final build; the first draft's hash was 1c35804a… and the pre-cure hash bf2fd515… — the only post-draft change is fontPx 82 → 86 inside the amendment D9 bounds, made under the jev-prewave HOLD cure in §Prewave below; every own check re-ran on the final build).
comparison.html SHA-256: 7bbb4abe5ae38c663ae22daf4c7acde50112f4abb5421f850271f7f644a0f867 · 2,939 B.

## Count assertion (A9.3)
CONFIG word count vs built span count (harness, raw line): `COUNT | CONFIG words=17 chunks=4 builtWordSpans=17 builtLetterSpans=98` — 17 = 17, 4 chunks, no mismatch, no halt.

## Census-checkpoint → assertion mapping (A11) — checkpoint · assertion · CONFIG expression · evaluated result
Every evaluation instant is a CONFIG expression, evaluated on the CURRENT schedule. Class II instants derive as `sourceAnchorMs − segmentStartS×1000` (the anchor is the census source time; the offset moves when segmentStartS mutates — harness SF-MUT receipt below). Class I instants derive from the schedule windows / lift / total parameters each probe reads; the timing input each probe reads is named in its row, and the harness MUT receipts show each input's controlled mutation moving the instant (before → after). Swap derived windows (segment-relative, sweepFraction 1.0): `Reading[800,1220] follows[1220,1620] the[1620,1800] voice[1800,2180] | exactly[2180,2580] as[2580,2720] it[2720,2840] is[2840,2980] spoken[2980,3580]`; at sweepFraction 0.55 the same derivation gives Reading[800,1031] and exactly[2180,2400] — the I1/I2 instants move accordingly (915.5 → 1010 · 2290 → 2380).
| checkpoint | assertion | CONFIG expression (timing input named) | result |
|---|---|---|---|
| I1 FIRST mid-sweep | meanFill(FIRST) ∈ (0.3,0.95); chunk-1 others = 0 | FIRST.vOn + 0.5×(FIRST.vEnd−FIRST.vOn) — reads the schedule derivation (sweepFraction on derived windows; measured window data on specimen) | specimen t=1015 fill=0.500 PASS · swap@0.55 t=915.5 PASS · swap@1.0 t=1010 PASS · MUT receipt: 915.5 → 1010 |
| I2 CHUNK2-FIRST + exclusivity | mounted = 1; meanFill ∈ (0.2,0.8) | CHUNK2-FIRST.vOn + 0.5×(vEnd−vOn) — same input as I1 | specimen t=2267.5 mounted=1 fill=0.500 PASS · swap@0.55 t=2290 PASS · swap@1.0 t=2380 PASS · MUT: 2290 → 2380 |
| I3 lift ownership (PENULT role = last chunk words[len−2]) | lift(PENULT) = liftPx; fill(PENULT) = 0 (swap) / < 0.5 (specimen); lift(FIRST) = 0 | PENULT.onset + liftRiseMs — reads liftRiseMs + the word's onset (schedule data) | specimen t=6180 lift=28 fill=0.000 PASS · swap t=2840 word=is lift=28 fill=0 PASS · MUT liftRiseMs 120→240: 2840 → 2960, lift at moved instant = liftPx PASS |
| I4 completion | every fill = 1; every lift = 0 | totalMs − 400 — reads totalMs | specimen + both swaps t=7600 PASS · MUT totalMs 8000→9000: 7600 → 8600 PASS |
| I5 exclusivity under retiming | exactly one chunk mounted; ≤ 1 transitioning word, 25 ms sampling | swap schedule with timing swap applied (sweepFraction 1.0) | PASS |
| SF1 (Caption) | 0 < front < 7; L1 others fill 0 | 40600 − segmentStartS×1000 = 1100 | front=6.47 PASS |
| SF2 (animation,) | front ∈ [3,7] of 9 | 42300 − segmentStartS×1000 = 2800 | front=6.55 PASS |
| SF3 (synchronized) | front ∈ [3,7] of 12 | 43600 − segmentStartS×1000 = 4100 | front=6.87 PASS |
| SF4 (precisely) | front ∈ [5,9] of 9 | 44400 − segmentStartS×1000 = 4900 | front=8.82 PASS |
| SF5 (is) | lift > 0 AND meanFill < 0.5 | 46100 − segmentStartS×1000 = 6600 | lift=28.0 fill=0.000 PASS |
| SF6 (spoken.) | meanFill ∈ (0.1,0.6); lift(is) > 0 | 46600 − segmentStartS×1000 = 7100 | fill=0.122 lift(is)=28.0 PASS |
| SF7 (all) | every fill = 1; every lift = 0 | 47100 − segmentStartS×1000 = 7600 | PASS |
| SF-MUT | segmentStartS 39.5 → 40.0 moves every SF offset −500 while the source anchors stay fixed; states at the moved offsets identical | mutation of segmentStartS | PASS (SF1 1100→600 · SF2 2800→2300 · SF3 4100→3600 · SF4 4900→4400 · SF5 6600→6100 · SF6 7100→6600 · SF7 7600→7100) |

## Own checks — RAW harness output (A9.4; node harness on the build's own exported state function)
First-draft harness (v1) ran 20 checks, all PASS, on the first draft; its receipt is superseded by the v2 receipt below because jev-prewave priced three defects in the v1 evidence form (a tautological timing line counted in its summary · SF instants filed without their CONFIG expressions · Class I instant-movement claimed without mutation receipts). Harness v2 removes the tautology, files the expressions, and adds the mutation receipts; it ran on the FINAL build. The block below is the complete, unedited v2 output — its PASS-line count (28) equals its SUMMARY by construction.
```
COUNT | CONFIG words=17 chunks=4 builtWordSpans=17 builtLetterSpans=98
PASS | A9.3 count | 17 words / 4 chunks expected
PASS | SF1 @1100 (anchor 40600 - segmentStartS*1000) | front(Caption)=6.47 of 7; others 0
PASS | SF2 @2800 (anchor 42300 - segmentStartS*1000) | front(animation,)=6.55 of 9
PASS | SF3 @4100 (anchor 43600 - segmentStartS*1000) | front(synchronized)=6.87 of 12
PASS | SF4 @4900 (anchor 44400 - segmentStartS*1000) | front(precisely)=8.82 of 9
PASS | SF5 @6600 (anchor 46100 - segmentStartS*1000) | lift(is)=28.0 fill(is)=0.000
PASS | SF6 @7100 (anchor 46600 - segmentStartS*1000) | fill(spoken.)=0.122 lift(is)=28.0
PASS | SF7 @7600 (anchor 47100 - segmentStartS*1000) | all fills=1 and all lifts=0
PASS | SF-MUT segmentStartS 39.5->40.0 moves every SF offset -500, states invariant | SF1: 1100->600 SF2: 2800->2300 SF3: 4100->3600 SF4: 4900->4400 SF5: 6600->6100 SF6: 7100->6600 SF7: 7600->7100
PASS | ENDPOINT p=1 | all 17 words reach exact endpoint at their vEnd
PASS | I1-specimen | instant = FIRST.vOn + 0.5*(FIRST.vEnd-FIRST.vOn) from the CONFIG schedule; t=1015 fill(FIRST)=0.500
PASS | I2-specimen | instant = CHUNK2-FIRST.vOn + 0.5*(vEnd-vOn) from the CONFIG schedule; t=2267.5 mounted=1 fill=0.500
PASS | I3-specimen | reads liftRiseMs + PENULT.onset; t=6180 word=is lift=28 fill=0.000 lift(FIRST)=0
PASS | I4-specimen | reads totalMs; t=7600 all fills=1: true; all lifts=0: true
PASS | I1-swap055 | instant = FIRST.vOn + 0.5*(FIRST.vEnd-FIRST.vOn) from the CONFIG schedule; t=915.5 fill(FIRST)=0.500
PASS | I2-swap055 | instant = CHUNK2-FIRST.vOn + 0.5*(vEnd-vOn) from the CONFIG schedule; t=2290 mounted=1 fill=0.500
PASS | I3-swap055 | reads liftRiseMs + PENULT.onset; t=2840 word=is lift=28 fill=0.000 lift(FIRST)=0
PASS | I4-swap055 | reads totalMs; t=7600 all fills=1: true; all lifts=0: true
PASS | I1-swap | instant = FIRST.vOn + 0.5*(FIRST.vEnd-FIRST.vOn) from the CONFIG schedule; t=1010 fill(FIRST)=0.500
PASS | I2-swap | instant = CHUNK2-FIRST.vOn + 0.5*(vEnd-vOn) from the CONFIG schedule; t=2380 mounted=1 fill=0.500
PASS | I3-swap | reads liftRiseMs + PENULT.onset; t=2840 word=is lift=28 fill=0.000 lift(FIRST)=0
PASS | I4-swap | reads totalMs; t=7600 all fills=1: true; all lifts=0: true
PASS | MUT I1 sweepFraction 0.55->1.0 moves instant | I1 instant 915.5 -> 1010
PASS | MUT I2 sweepFraction 0.55->1.0 moves instant | I2 instant 2290 -> 2380
PASS | MUT I3 liftRiseMs 120->240 moves instant | I3 instant 2840 -> 2960; lift at moved instant = liftPx
PASS | MUT I4 totalMs 8000->9000 moves instant | I4 instant 7600 -> 8600
PASS | I5-swap exclusivity | 25 ms sampling under sweepFraction 1.0: one chunk mounted, <=1 transitioning word
PASS | SWAP palette | endpoint color specimen=rgb(240,255,5) swap=rgb(255,159,28)
SUMMARY | pass=28 fail=0
```

## Swap test (§5 leg 1) — exact altered values + result
Altered sentence: L1 `Reading follows the voice` / L2 `exactly as it is spoken` with the exact onsets in amendment §6 · timing: derivation sweepFraction 0.55 → 1.0 · palette: spokenColor #f0ff05 → #ff9f1c. Result: **PASS** — all Class I assertions hold on the swap schedule (I1–I5 above), the endpoint color under the swap palette is rgb(255,159,28) vs the specimen's rgb(240,255,5), and exclusivity survives the retiming (I5). The technique reads from CONFIG alone; no code change.

## Purity (§5 leg 2) — raw grep output
Pattern (guards.md command 1 / plan §2.5) over recreation.html: `segment\.mp4|source\.mp4|<video|<img|\.jpg|\.mp4` → **grep exit 1, zero hits** (both pattern forms run; no url(#id) hits exist to classify). Asset inventory: recreation.html loads NOTHING external — no fonts, images, scripts, or media; every asset is code in the one file. comparison.html loads segment.mp4 (the labeled ORIGINAL side) + recreation.html (iframe) only.

## Comparison check (§5 leg 3)
comparison.html: video (segment.mp4, 8.000 s) beside the live recreation iframe; ONE control set (Play/Pause + Restart in the comparison only — the recreation's own bar is its standalone form); the recreation is slaved to the video's currentTime via its T195.seek hook on a shared rAF tick (shared start on Play/Restart); labels exactly `ORIGINAL — Caption with Intention @ 0:40–0:47` / `RECREATION — T195 spoken-state highlight sweep, parameterized`; durations matched (both 8000 ms); phone stacking via @media (max-width:700px) column layout with the control bar below, buttons ≥ 48 px. Verified at source level (PIXEL-UNVERIFIED limitation above).
Syntax: `node --check` on the recreation's extracted inline script — OK. Recreation script contains no RNG (deterministic pure state function; seeded-RNG census not applicable).

## A6 legs (pre-wave, on the final build)
- fit-table.md — HITs 0 in its cured form: post-fit rendered-geometry measurements (PIL/Liberation Sans instrument named in the table): ink widths 113.12–238.75 px vs the 331.2 px bound at the 360 px stage, full ink height 15.00 px and cap height 11.12 px, both ≥ the ~11 px floor. (First-filed form: formula-model rows — priced HITs by jev-prewave and replaced; see §Prewave.)
- config-census.md — HITs 0 (all keys resolved to value-flow sites; no CSS variables exist to strand; no subject-shaping literal outside CONFIG — two draft-stage exceptions cured into CONFIG before the census ran, recorded in the census).
Both outputs are fed verbatim into the jev-prewave payload (A10.1).

## Prewave (INSTRUCTION §5 leg 3b) — HOLD → cure → re-fire
First firing (payload codex/payload-prewave.txt, 54,290 B): **HOLD**, primary classification ASSERTED-CHECKS; dimensions parameterization 1.0 · purity pre-check 1.0 · own-checks completeness 0.25 · fidelity-plan honesty 1.0. Raw return filed verbatim at artifact-root `jev-prewave.md` (156,514 B; the transport duplicated the verdict section inside the raw file — priced as ONE return, the Cycle-035 wave-gate pattern). Three findings, all APPLIED:
1. A11 evidence — SF instants filed as "census instant" without their CONFIG expressions, and Class I instant-movement unsupported for I3/I4. Cure: expressions filed per row in the mapping above (`sourceAnchorMs − segmentStartS×1000` for SF; the named timing input for each Class I probe) + harness v2 mutation receipts (SF-MUT · MUT I1–I4) with before→after instants.
2. Measured fit — the fit table's rows were formula-model products, HITs under guard-measured-fit check 2. Cure: fit-table re-measured as post-fit rendered geometry (PIL/Liberation Sans, instrument + limit printed in the table); fontPx raised 82 → 86 (inside the amendment D9 measured bounds [76,88]) so the cap-height reading of the floor also clears (11.12 px ≥ ~11).
3. Harness receipt — v1's printed block carried 19 PASS lines against SUMMARY 20 (the excluded tautological line). Cure: harness v2 (tautology removed; the complete raw output is filed above; 28 PASS lines = SUMMARY pass=28).
Disposition: cures executed, own checks re-run on the final build (SUMMARY 28/0), A6 legs re-filed, prewave re-fired once on the cured record.

## Deviations / departures recorded
- D6–D10: amendment §9 (defaults re-priced from the micro-census).
- D11 (found in Execute, recorded here): the measured windows of `is` [46560,46710] and `spoken.` [46560,46750] OVERLAP — the film fills the final two words in one continuous front pass (micro-census finding 3). The amendment §5's "measured windows stand with gaps" wording therefore holds for 15 of 17 words; the tail pair is the priced exception, and transition exclusivity is asserted where the amendment asserts it — on derived/retimed schedules (I5) — while the specimen's tail overlap is the measured source state, not a construction defect.
- Packet prose departures D1–D5 stand from the Plan (lift exists · completion at 47.1 · four chunks · fraction+softness as CONFIG slack · trailing tint no-claim) — D4/D5 are now settled by the micro-census as filed above.

## Wave + consolidation (after the prewave re-fire)
Prewave re-fire: **FIRE-WAVE**, all four dimensions 1.0 (return filed verbatim at `jev-prewave-refire.md`, 252,536 B; payload `codex/payload-prewave-refire.txt`, 60,806 B). Five-lens Codex scoring wave fired on the final build (SHA-256 f328d783d1ee5d9c2a908106add3bbcd92f071b8e39bae083bdff799b482c17b, identical in every payload and return): motion 83 · timing 86 · purity 100 · reusability 86 · readability 88 → average 88.6, minimum 83 → **PASS**. Consolidation, arithmetic and priced cures (including the rebutted reusability instance with its mechanical receipt) live in `scores.md`.
