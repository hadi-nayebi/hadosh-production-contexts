# Production record — Packet #12 (Vox, Electoral College, ajavsMbCapY)

Built by video-digestion Cycle-019 (runs/2026-11-17-cycle-019-vox-electoral-college/RUN.md).

## Tier + counters
- Length tier (Amendment A3): 488.301 s > 5 min → BEAT-LEVEL evidence. Scene census (ffmpeg scene-select, DISTINCT pts_time values — A9 cl.1): 19 candidates @0.35, 30 @0.20 (scene035.txt / scene020.txt). The detector under-fires on flat animation (A8 cl.2 pricing): segmentation rests on narration pivots + the 49-frame 1/10 s net (frames/net-001..049.jpg) + 31 evidence frames (ev/) + 5 clips (clips/). True shot count: UNVERIFIED (printed so in digest §4).
- Transcript counter (A9 cl.2, ONE counter): whitespace tokens over the sentence texts built from the platform en-US caption track (127 cues → 90 sentences). Every word count in the packet comes from this counter: total 1,288 words; per-section S1 113 · S2 288 · S3 312 · S4 340 · S5 235 (sum = 1,288, reconciles on the face, A8 cl.3). ASR (faster-whisper base, array-fed) returned 122 segments / 1,324 words — corroboration only, never a packet count (its wording and count differ from the caption track; captions govern).
- Counts re-counted from disk at close (A5 cl.2): techniques 22 (digest.md "### T" headers) · lessons 12 · ideas 7 · goods 6 · bads 6 · ev frames on disk 33 · ev frames cited in the catalogue 33 (every ev file cited at least once; census at Verify, re-run after the jev-packet cures added ev/t235-swing-2016.jpg and ev/t135-wyoming-california.jpg) · net frames 49 · clips 5.

## Section boundaries (codex-plan-review Finding 1 cure — pivot + visual binding per boundary)
- S1→S2 at 37 s: narration pivot — first mechanism sentence ("It's made up of delegates from each US state", sentences.json t=37.0); visual: vote-to-grid diagram (ev/t52) replaces the hook's montage/bar system.
- S2→S3 at 139.2 s: narration pivot — "The winner of the presidential election is the candidate who gets 270 or more…" (t=139.2); visual: threshold grid-map formation begins (ev/t142, clip t08).
- S3→S4 at 260.5 s: narration pivot — "It doesn't seem very fair. But the Electoral College has always shifted power…" (t=260.5); visual: founding-era painting + colonial map replace the modern data charts (net sheet, ~260–270 s).
- S4→S5 at 390.3 s: narration pivot — "Today, the states that the Electoral College benefits have changed, but…" (t=390.3); visual: beneficiary tiles + demographic bars (ev/t405, ev/t400).

## Clip table (Amendment A6 — every motion/timing-claim entry ruled; codex-plan-review Finding 3 cure)
| Entry | Ruling | Claim stills cannot carry / stills-sufficiency reason |
|---|---|---|
| T03 grid build | CLIP clips/t03-grid-build.mp4 (28–36 s) | Assembly order of the dot field under the title — a sequence claim |
| T07 dot accumulation | CLIP clips/t05-dot-accumulation.mp4 (90–102 s) | Dots land timed to the spoken count — synchronisation claim |
| T09 grid-map formation | CLIP clips/t08-gridmap-formation.mp4 (139–148 s) | Outline draw order + the 270 post's arrival — sequence claim |
| T11 margin bars | CLIP clips/t10-margin-bars.mp4 (156–166 s) | Bar/extension growth order — sequence claim |
| T18 elector squares | CLIP clips/t19-elector-dots.mp4 (315–325 s) | Squares land to the counted totals 21/15 — synchronisation claim |
| T01, T02, T04, T05, T06, T08, T10, T12, T14, T15, T16, T17, T19, T20, T21, T22 | NO-CLIP | Mechanic is a state, a comparison, a chart, or a stated rule readable from the cited frame(s); no order/timing claim is made |
| T13 winner-take-all | NO-CLIP (special) | The rule is verbal (binding: transcript 2:43–2:52); its price is a static ranked bar (ev/t185). No flip animation exists in the specimen to extract — the absence is itself recorded in the entry |

## Workload / split statement (codex-plan-review Finding 6 cure)
One cycle covers this specimen: 5 sections, 22 catalogue entries, beat-level census, and the §5 panel all landed in Cycle-019 (RUN §3). No split; no continuation entry owed.

## Deviation register (packet-level)
- D1 (archive route): canonical download took ~9 min over a throttled link and merged as webm (VP9+Opus) rather than mp4; ffmpeg/ffprobe read it natively; no content consequence.
- D2 (captions): one subtitle variant (en-en-US) returned HTTP 429 and was not retried (hard stop); the en (word-timed) and en-US (punctuated) tracks landed and suffice — the transcript is built from en-US.
- D3 (ASR toolchain): faster-whisper's PyAV decode failed on the webm (Cycle-018 D2 form); cured by ffmpeg decode to wav + array-fed transcription with the locally cached base model (small.en snapshot incomplete in cache; HF download disconnected once and was not chased — base sufficed for timing corroboration).
- D4 (sponsor watermark): evidence frames carry the specimen's own "Presented by ABSOLUT" watermark — that is the specimen's frame content, not a produced caption; the no-captions guard (§6.3) concerns captions/subtitles burned into produced samples, and none were produced (frames are direct extractions; clips are re-encodes of the source picture only).

## Gate checks at build (manual §5 form; the adoption panel runs in the cycle RUN)
1. §3.3 sections 1–8 present in digest.md: PASS (grep census at Verify).
2. Every catalogue entry cites ≥1 ev frame that exists: census at Verify.
3. Goods/bads both present, timestamp-bound: 6/6, every item carries a timestamp.
4. Consumer named in-packet (§2): PASS.
5. Reception slot prints the charged line (§8): PASS.
6. Lesson-class coverage: technique · trick · texture · storytelling · transcript device · pacing all tagged in §6 (cmd 6 census at Verify).
7. No captions/subtitles in any produced frame/clip: PASS (direct extractions; D4 note).
