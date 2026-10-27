# PHASE 6 — AUDIO: the clone programme over a continuous bed

**Status: LANDED.** Programme: `audio/programme.mp3` —
**−14.22 LUFS integrated / TP −1.50 dBTP**, measured on the file.
Content end 100.91 s; total 104.31 s (end card included). The audio-locked
scene (`audio/index.html` + `audio/scene.json`) is regenerated from the
measured timings; its plan and the phase-5 decision record are the same
object.

## Voice — fresh synthesis, one residual, honestly flagged

- **Reuse test first:** every settled line's sha256 was searched against
  every Pelican record on disk — zero matches (no job had ever existed
  for this piece; defect D7). All 14 lines are fresh.
- **Main job** `job_42f7e214a39143b98234a577ca89764d` (registered
  hadi-master, seeds from 8101; two takes on the long lines L5/L6/L9/
  L12/L14): 17 of 19 takes passed the server verifier. L14's take 2
  failed; take 1 (passed, 0.962) is the take of record. **L1's only take
  failed** — alignment 0.774, the verifier's number systematic: the ASR
  heard "five and a half thousand" as digits "5 500" (final words
  matched).
- **The one permitted ICL residual** for L1
  (`job_b8c133aa98a0439fbd53d17f67f5cc14`, reference = the verified L3
  take + its text): both takes passed at alignment 1.0; take 2 is used
  (pace 0.287 s/word, in the programme's family; take 1 ran 0.391).
  **L1 is named in the register (R-1) for the owner's ear** — his
  standing finding is that verification certifies words/fit/loudness,
  not voice-character consistency.
- Per-line checks, trims (silence-cluster-merge) and paces are in
  `audio/audio.json`. Pace spread across the programme: 0.19–0.45
  s/word — the lock absorbs durations; the gaps between lines are the
  delivery map's, unchanged.

## The lock

Starts are re-derived from the measured trims + the phase-3 pause map —
no projected start was carried forward unverified. The suspension (G2,
1,500 ms after the invite) and every other gap stand at their decided
sizes; phase 7 measures the delivered voice track against this map.

## Bed

Composed to the lane's constants (four-chord set stretched to the piece,
pluck pattern, peak 0.5), its slow envelope flattened by an
inverse-envelope construction, laid in with ONE constant scalar at voice
RMS −13 dB, unbroken under the whole piece including both cards. Pauses
are narration-only events; the bed never cuts, gates, or re-levels.

## Master — arithmetic, by construction

The mix's crest made −14 LUFS / TP −1.5 unreachable by any single scalar,
and loudnorm's dynamic mode was measured and **rejected** for this
master (two runs landed at −17.3 and −17.0 — a black-box gain-rider
cannot guarantee the property; the doctrine is guarantee-by-construction).
The chain that shipped, every step recorded in `audio.json`:

1. Per take: a gentle compressor (3:1 above −15 dBFS) + a −2 dBFS
   limiter ceiling (alimiter, `level=false`) — crest tamed where it
   lives, inter-line dynamics preserved.
2. Mix limited at a ceiling; measured; the ceiling lowered by the TP
   shortfall + 0.3 dB and re-limited from the original mix
   (−4.00 → −9.41 dBFS; the bed's peaks sit ~17 dB below the ceiling,
   so it touches voice peaks only).
3. ONE pure gain scalar: g = min(−14 − I, −1.5 − TP) = +4.93 dB.
4. Verified on the delivered programme file: **−14.22 / −1.50**.

One deviation from the sibling jobs' printouts, stated plainly: soa-01
and wd-02 report two-pass-loudnorm masters; this branch's master uses
the arithmetic construction instead, because on THIS material the
loudnorm path demonstrably missed the band twice. The property (the
measured numbers on the delivered file) is the same; the route is more
deterministic, and the reason is on record here, not hidden.
