# Naive-consumer test — Cycle-016, Packet #10 Watchtower of Turkey

Cold-open read of: `hidden_files/study/video-digests/2026-11-16-vimeo-watchtower/digest.md`
(+ `production-record.md` in the same directory). No RUN.md or guard files read.

## 1. Identity — PASS

- Specimen: "Watchtower of Turkey" (§1 heading and §1 bullet).
- Creator: Leonardo Dalessandri. End-card credits in §1 also read: directed by leonardo dalessandri · voice off meryem aboulouafa · music ludovico einaudi.
- Platform / ID: Vimeo, id 108018156. URL as queued: https://player.vimeo.com/video/108018156
- Duration: 212.68 s (3.54 min), by ffprobe (§1).
- Format: 1920×1080, 25 fps, H.264 video + AAC stereo audio, 124,588,071 B, ~4.69 Mbit/s (§1, citing probe.json).

A cold reader can identify the exact film, maker, length, and technical format from §1 alone.

## 2. Consumer — PASS

- Named consumer (§2): **DLC assembler — transition containers.**
- What it lacks today, per §2: the assembler's transition container carries Packet #5's six studio-demo forms (hard cut · dissolve · cut on action · match cut · dynamic zoom · morph) but "no in-camera/foreground occlusion form."
- What the consumer can do after this packet that it could not do before:
  - Specify a location/subject change without a visible edit by citing T09 / T07 mechanics — foreground passes that cover the frame at the cut (T09), occlusion-framed landings (T07), and foreground-arch framing (T06) — including "coverage, direction, edge behaviour, alignment" as the transition specification (§2).
  - Specify energy lawfully by citing T10's insert-montage density and T11's music-bridge condition: "the cut rate is only lawful over an unbroken music bed" (§2).
- Secondary consumer also named (§2): Hadosh Academy explainer production — opening/ending surfaces (T01 fade-from-black reveal, T12 card-over-final-shot ending).

The packet is not generic appreciation; it names a specific consumer, a specific gap, and a specific Observe use.

## 3. Technique usability — PASS

Two techniques rebuildable from the mechanics given, without seeing the film:

1. **T05 — Detail-to-wide match on action (cut at 81.8 s)**
   - Mechanics (§3, T05): "an extreme close-up of hands rolling dough (motion-blurred, frame-filling) cuts to the wide shot of the same activity — a woman making flatbread at her griddle. The action and subject are continuous; only the scale jumps." Inferred construction stated separately: "cut on the shared action, not on a cover."
   - Rebuild: shoot the detail and the wide of the same subject/action, match the action phase, cut detail → wide with no cover. Before/after evidence is also cited: ev/081-hand-detail.jpg (81.72 s) and ev/082-gozleme-wide.jpg (81.88 s), plus clip clips/081-match-action-1.4s.mp4.

2. **T07 — Occlusion-framed cut landing (cut at 102.40 s)**
   - Mechanics (§3, T07): "a panning townscape with minaret cuts to a dark interior where a guitarist is seen between passing foreground silhouettes — the new shot lands already occluded." Observable stated: "the landing shot's first frames are majority-dark foreground." Lesson L2 (§6) quantifies it further: incoming shot's first ~0.5 s majority-occluded by a photographed foreground.
   - Rebuild: cut into a new scene whose first frames are majority covered by dark foreground silhouettes, letting the subject become legible only after the cut. Evidence cited: ev/102-minaret-pan.jpg (before, 102.0 s), ev/103-guitar-occluded.jpg (after, 102.8 s), plus clip clips/100-occlusion-pass-3.5s.mp4.

Both give timestamps, subject/action, cut behaviour, and a construction rule sufficient to stage the technique independently.

## 4. Honesty — PASS

Bad priced, with timestamp — examples from §5.2 (six bads in total):

- **B1 (189.0 s):** "the BB-pistol insert (ev/189-gun-insert.jpg) is the montage's one sour note — a weapon close-up with no setup or payoff inside a warm portrait of a country; at insert speed it reads as provocation, not information."
- Other bads also timestamp-bound: B2 climax density sacrifices legibility (180–210 s), B3 voiceover mix / intelligibility risk (11.5–32.2 s), B4 end-card small credits low-contrast over bright dawn sky (209.9 s), B5 poster insert assumes the icon (20.5 s), B6 S2 landscape/craft sag risk (36–102 s).

Things the packet explicitly admits it could NOT verify:

- **Voiceover wording UNVERIFIED:** T02 (§3) — "ASR wording is garbled and is NOT quoted as transcript — the passage's exact words are UNVERIFIED at this packet's evidence level." Production record confirms faster-whisper small-model ASR garbled it.
- **Exact shot count NOT asserted:** §4 — cut censuses are "candidate detections, not a verified shot count"; 123 boundaries @0.35 and 309 candidates @0.20 bracket the true count as 124–310, and "the queue's '~280 shots' is inside the bracket, unverified."
- **Hidden cut in T09 NOT established:** T09 (§3) — "Whether the edit hides inside this pass is NOT established at this evidence level… the hidden-cut claim explicitly unmade."
- **Platform counts / upload date NOT DISPLAYED:** §1 and §8 — not displayed on the access route used (post.json).

The packet separates observable, inferred construction, and unverified claims instead of presenting all three as fact.

## 5. Reception — FAIL

- What the packet says (§8, in full): "reception: not yet run — charged to reception-analysis. Platform counts were NOT DISPLAYED on the access route used (post.json), so the reception record for this specimen starts from that absence."
- Production record confirms the same absence: access via embed route; counts/dates NOT DISPLAYED.

Verdict reasoning: this is an explicit, honest deferral — not a silent omission and not fabricated engagement data. But as a cold consumer I learn **nothing** about how the specimen was actually received: no views, likes, comments, shares, upload date, or audience response of any kind. On a consumer-usability test, a section that contains only a deferral does not deliver reception information, so this test fails on content while passing on honesty about the gap.

## Summary

1. Identity: PASS
2. Consumer: PASS
3. Technique usability: PASS — T05 Detail-to-wide match on action, T07 Occlusion-framed cut landing
4. Honesty: PASS — e.g. B1 BB-pistol insert at 189.0 s; unverified items include voiceover wording, exact shot count, and T09 hidden-cut claim
5. Reception: FAIL — no reception/engagement data; §8 states only "not yet run — charged to reception-analysis" and platform counts NOT DISPLAYED
