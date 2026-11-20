# Production record — Packet #6 (Grow With Kaz, l2_pKB1EbMQ) · video-digestion Cycle-012

Built 2026-11-15 by video-digestion Cycle-012 (`runs/2026-11-15-cycle-012-kaz-documentary/RUN.md`). This record is the packet's build record; adoption is the same cycle's §5 act (the build and adoption are one cycle for a seat-built packet — the §5 panel + jev-packet firing stand in the RUN).

## Build steps (RUN §2 Execute checklist, in order)
1. Archive + probe ✓ — yt-dlp f399-class AV1 1920×1012 + Opus, stream-copy merged → source.mp4 (42,096,999 B); ffprobe → probe.json (638.494 s; meta 639 s — 0.5 s rounding, agrees).
2. post.json ✓ — platform metadata + both count captures (owner 83,334/2,375/113; re-read 86,679/2,485/114), confound sentence included.
3. Transcript ✓ (route changed — D1) — platform captions HTTP 429 (hard stop, not retried); local ASR (faster-whisper base, CPU) → asr-segments.json (120 segments) → transcript.txt (1,888 words, timestamped). ASR proper-noun errors noted on the packet's face (§1).
4. Segmentation + frames ✓ — spine re-derived from transcript + viewing (renumbering printed in digest §4); frames: net 64 (1/10 s @480w) + scene 8 (threshold 0.35 — screen content yields few full-frame cuts; priced) in frames/; evidence set 31 full-resolution frames in ev/.
5. Viewing pass ✓ — contact sheets (4) + full-res evidence viewing; goods/bads candidates logged with timestamps during viewing (P-B1).
6. Catalogue ✓ — 19 entries (P6-T01…T19) in three namespaces [ARC]×7 · [TUT]×7 · [PRD]×5 (P-A1); [ARC] attribution tags (P-A3); evidence binding per A4 clause 3.
7. digest.md ✓ — §3.3's eight sections in order; §2 consumer section written by the producer (P-B2); §5 goods/bads from the viewing log (P-B1); §4 tempo map from the re-derived spine + A3 length pricing (P-B3); §7 idea bank (P-B3).
8. Clips ✓ — per the clip table below (P-B4 rulings executed).
9. PDF ✓ — digest.html rendered from digest.md, digest.pdf printed from it (same source; parity census in the RUN §5).
10. Counts re-counted from disk at close ✓ (A5 clause 2) — techniques 19 · lessons 13 · ideas 7 · goods 7 · bads 6 · ev frames 35 (21 cited, 0 missing; +t311 training screen and +t314 strikethrough card added at Verify on the naive-consumer softness note and the deliverer's frame inspection — digest §1/§3 updated and PDF regenerated in the same act) · net frames 64 · scene frames 8 · clips 3. Lesson-class coverage census (A5 clause 1 / guards command 6): technique ✓ (L1, L2, L4, L10) · trick ✓ (L3, L13) · texture ✓ split per P-A1 (L8, L9 tutorial · L11 product) · storytelling pattern ✓ (L6, L7) · transcript device ✓ (L5; the absolutist-title device bound at P6-T16) · pacing principle ✓ (L12) — 6/6 classes tagged, no printed absences needed.
11. Hand-off — filed to style-library HQ.json by the RUN's §5 act; QUEUE.md digested move in the same act.

## Clip table (Amendment A6 — every motion/timing-claiming entry ruled)
| Entry | Ruling | Basis / file |
|---|---|---|
| P6-T04 assembly generation | CLIP | `clips/c335-assembly.mp4` (335–355 s) — the Claude Code session + completion card; stills cannot carry a generation's progression |
| P6-T05 revision round | CLIP | `clips/c475-revision-prompt.mp4` (475–495 s) — prompt card → session change; the round's motion is the mechanic |
| P6-T18 vintage 2D animation | CLIP | `clips/c545-2d-animation.mp4` (545–565 s) — animation is definitionally motion |
| P6-T01 filename convention | NO-CLIP | the mechanic is the naming (text), bound by transcript 02:56–03:35 + its visualised payoff ev/t205.jpg |
| P6-T02 plugin artefact | NO-CLIP | pre/post state cards (ev/t285.jpg, ev/t295.jpg) show the artefact and its install step; no continuous motion is claimed |
| P6-T06 link-list sourcing | NO-CLIP | the claim is the list's existence + the rights card — stills ev/t135.jpg, ev/t175.jpg suffice |
| P6-T08/T09/T11/T12/T13 card devices | NO-CLIP | card grammar is legible in stills (ev/t5, t45, t55, t285, t575); onset timing is priced in §4's tempo map from transcript timestamps, not from clip motion |
| P6-T15/T17 product exhibits | NO-CLIP | exhibit composition is a stills property (ev/t75, t85, t95, t425, t435); the slow-push claim is priced as presence-under-narration from the playback spans, not a motion mechanic |
| P6-T19 match card | NO-CLIP | a static diagram card — ev/t205.jpg is the whole mechanic |

## Deviation register (packet-level)
- **D1 — transcript route:** platform captions 429 (hard stop per fleet rule, not retried) → local ASR substitution. Consequence: transcript is ASR-grade (proper-noun errors stand, disclosed in digest §1); all packet quotations cross-checked against on-screen cards where cards exist.
- **D2 — scene census thin:** scene-change detection at 0.35 returned 8 frames (screen-recording content changes inside the screen). The A3 tier's safety net (1/10 s) carried segmentation instead; evidence frames were extracted at step boundaries per P-A2. No claim in the packet rests on the scene set.
