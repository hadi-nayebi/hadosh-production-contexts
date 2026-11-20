# Production record — Packet #8 (Kurzgesagt GDSf2h9_39I)

_Producer: video-digestion Cycle-014, 2026-11-16. This record is the packet's build record; the adoption record stands in the cycle's RUN.md._

## Archive + probe
- source.mp4 archived from YouTube via yt-dlp (exit 0): 80,456,541 B · AV1 1920×1080@60 · Opus 48 kHz stereo · 657.334 s (probe.json). Metadata read (meta.json): uploaded 2023-04-11 · 9,693,448 views · 295,514 likes · 15,000 comments (rounded) at capture.
- post.json: counts as displayed, provenance + capture date stated; comment figure's rounding named.

## Transcript
- From the platform en-GB subtitle track (source.en-GB.vtt, 114 cues) → transcript.txt: 100 sentences, 1,623 words, cue-anchored timestamps. (Word total corrected at Verify: the build script's first count, 1,611, split on a different token rule; the reconciled whitespace-token recount — the jev-packet judge's and the section partition's — is 1,623, and §1/§4 of the packet now both carry it.) Sentence timestamps are the start cue of each sentence's first word (stated rule).
- **Deviation D-PR1 (source-track defect):** the cue at 10:02.848 begins mid-sentence ("…of amazing space and science inspired products for you") — the sentence's start is absent from the en-GB track itself (verified against the raw VTT). Marked in transcript.txt at the line; no words were invented to complete it.

## Extraction (Amendment A3, >5 min tier: BEAT-LEVEL)
- Safety net: frames/ 66 frames at 1 frame / 10 s.
- Scene census: ffmpeg scene select. Pilot counts (grep lines): 44 @0.35 · 68 @0.20. **Reconciliation:** showinfo emits two log lines per selected frame in this ffmpeg build (verified arithmetically on both thresholds: 44 = 21×2 + 2 config · 68 = 33×2 + 2 config; and by a 120 s partial pass returning zero selections, consistent with the first boundary at 157.95 s). The packet's census is the DISTINCT-time count: **21 boundaries @0.35** (scene-times.txt) · 33 @0.20 sensitivity. Instrument fit (A8 clause 2): the yield is a specimen property (continuous dissolves/zooms, long animated takes), not an instrument failure — the fallback was not needed; the tempo map prints cuts as a floor and prices motion from the net.
- Evidence: ev/ 30 frames (26 cited in digest.md), including before/during/after triplets for T10 (272/280/288) and T16 (445/452/460).
- Clips (per-entry rulings below): clips/274-window-bars-build.mp4 (16 s, 317,902 B) · clips/446-expansion-front-growth.mp4 (10 s, 373,828 B). First encode attempt failed on an odd frame height (720×405, libx264) and was re-encoded at 720×404 — the failed files were deleted, never cited.
- No captions/subtitles are burned into any frame or clip; frames are clean video frames (the specimen's designed on-screen text is its content).

## Clip table (Amendment A6 — rulings against the frozen catalogue)
| Entry | Ruling | Ground |
|---|---|---|
| T01 scale cascade | NO-CLIP | Before/after pair + census (0 boundaries in S1) establishes the continuous-flow claim; the claim is the ABSENCE of cuts, a data-record binding |
| T02 thesis-as-spoiler | NO-CLIP | Verbal claim; binds to transcript timestamps (A4 clause 3) |
| T03 disclaimer gag | NO-CLIP | Single staged frame + transcript line; held beat, no rate claim |
| T04 question ladder | NO-CLIP | Verbal/card claims; transcript + card frames |
| T05 isometric path | NO-CLIP | State frames + net-frame returns (2:20 / 5:10 tiles); build rate not claimed |
| T06 platform menagerie | NO-CLIP | Single composed frame carries the claim |
| T07 candles field | NO-CLIP | Endpoint state frame; kindling rate not claimed |
| T08 timeline bands | NO-CLIP | Before/after pair (net tile + ev frame) shows the band state |
| T09 duration rows | NO-CLIP | Before/after pair (Sun single bar on the net · red-dwarf rows in ev) |
| T10 window build | **CLIP** | Rising/joining IS a rate claim → clips/274-window-bars-build.mp4 + triplet |
| T11 chapter cards | NO-CLIP | Held cards; frames show them as labelled |
| T12 village diorama | NO-CLIP | State frame + net tile for the launch |
| T13 detection UI | NO-CLIP | Single frame shows the alert state as labelled |
| T14 forest analogy | NO-CLIP | Before/during states on the net + ev frame; sequence spans minutes, no single rate claimed |
| T15 terraforming | NO-CLIP | Single diorama frame carries the claim |
| T16 expansion front | **CLIP** | Continuous growth IS the mechanic → clips/446-expansion-front-growth.mp4 + triplet |
| T17 pedestals | NO-CLIP | Composed frame + net tile |
| T18 race table | NO-CLIP | Single composed frame |
| T19 envelopment face | NO-CLIP | Single staged frame + transcript line |
| T20 council close | NO-CLIP | Single composed frame + transcript lines |
| T21 merch outro | NO-CLIP | State frames across the net + 2 ev frames; durations bind to the section table |

## Counts (re-counted from disk at packet close, A5 clause 2)
- Techniques 21 (digest.md headers = PDF headers, 21=21) · lessons 13 · ideas 7 · goods 7 · bads 6 · ev cited 26/26 present (30 on disk) · net frames 66 · clips 2/2 present and cited.
- Lesson-class coverage (A5 clause 1, at close): technique · trick · texture · storytelling pattern · transcript device · pacing principle — 6/6 tagged in §6.
- Face reconciliation (A8 clause 3): §1's evidence line states cited (26) and on-disk (30) counts separately; §4's per-section cuts sum to the stated census (0+1+4+8+3+4+1 = 21); §4's sentences sum to 100 and its durations to 657 s. **One failure, caught by jev-packet (G1), not by this record's first pass:** §1's word total (1,611, from the build script's counter) did not reconcile with §4's partition (1,623) — cured in the adopted version under the cycle's receipt amendment; this record's earlier blanket claim that every count reconciles was wrong as written and is corrected here. Scale/speed claims: delivery rates are measured (transcript words ÷ section duration); no unmeasured speed claim stands in the packet.

## Deviation register (packet-level)
- D-PR1 — en-GB track drops one sentence start at 10:02 (above); marked, not repaired by invention.
- D-PR2 — first clip encodes failed (odd height) and were deleted + re-encoded before any citation; no defective file was ever cited.
