**CONFIRMED-WITH-GAPS — T197’s source record is sufficient for Cycle 034 Wave 31 §1 Observe. The caption wording, speech-to-motion timing, and size and weight trajectory need firsthand verification.**

### Findings

1. **The packet, register, and family entry agree on the technique.** Packet #11 T08 and the T197 family entry agree on the 48–58 s window, the four evidence frames, the 50–57 s excerpt, and the unmeasured easing. The register confirms P11, DESCRIBED — OWED #93, and the same size and weight mechanics. The register leaves timestamps and frame references to the family entry. All four JPEGs opened, and the excerpt decoded. (`digest.md:56–59`; `TECHNIQUES.md:140`; `techniques-word-animation.md:133–136`.)

2. **The caption fragment is quoted as narration.** The 50 s still visibly reads “types sizes, weights and animation,” with “sizes” enlarged. The ASR gives “The system brings in varying type sizes, weights, and animation” as the first clause of the 48.24–56.80 s segment. The still establishes the visible wording and emphasis. The omitted words’ placement off-frame left is unverified. Observe should log the visible caption and check the spoken wording against the audio. (`digest.md:57`; `techniques-word-animation.md:135`; `ev/t050-types-sizes.jpg`; `transcript.json`, segment starting at 48.24 s.)

3. **“At its onset” conflates two timing references.** The packet and family place the visual growth around 55.3 s, roughly 0.66 s after the ASR start of “louder” at 54.64 s and within its ASR span through 55.76 s. The frame named `t055-louder-onset.jpg` shows an early change around the leading letter and does not show the enlarged peak. A sampled sequence from `source.mp4` shows the pronounced peak afterward, followed by the smaller “or softer” state visible in `t056-ramp-softer.jpg`. Observe should align the audio and frames, then record the speech onset, first visible change, peak, return to baseline, and the shrink onset and hold. It should measure size and visible stroke weight separately and track the concurrent white-to-yellow change. The sampled sequence establishes the ordering. Exact frame times, easing, and font-axis values remain unmeasured. (`digest.md:57–59`; `techniques-word-animation.md:130,135–136`; `transcript.json`, 48.24–56.80 s segment; `source.mp4`, sampled from 54.5 s; `ev/t055-line-before-ramp.jpg`, `ev/t055-louder-onset.jpg`, and `ev/t056-ramp-softer.jpg`.)

4. **The source window is available, with provenance limits.** `ffprobe` returned 113.734 s, 1920×1080, 24 fps, and 10,213,125 bytes for `source.mp4`. The 48–58 s window and the proposed 47.5–58.5 s handled window lie inside it. The handled range decoded without errors. The excerpt’s container duration is 7.014 s, consistent with its nominal seven-second label. The packet binds these observations to the trade-press upload and leaves fidelity to the submission version unverified. The UI documents the intended variable-font mapping. Automatic real-time behavior on arbitrary audio remains unverified. The fed provenance pointer groups this under §5/G1, while G1 concerns the film demonstrating itself and §5/B5 records the version-fidelity limit. (`digest.md:7–9,42,56–59,96,108`; `source.mp4`; `clips/050-volume-ramp-7s.mp4`.)

5. **Sibling score claims bind to the filed returns.** Each score below matches a `SCORE:` line in its corresponding lens file. No unbound numeric claim surfaced in the audited score tables.

   | Filing | Lenses | Recomputed result | History |
   |---|---:|---|---|
   | T137 attempt 1 | 5 | (92 + 95 + 100 + 80 + 88) / 5 = **91.0**, min **80**, PASS | Recreation `verdict-history.md:83` |
   | T12 attempt 1 | 5 | (83 + 64 + 94 + 74 + 62) / 5 = **75.4**, min **62**, FAIL | Recreation `verdict-history.md:12` |
   | T12 attempt 2 | 5 | (88 + 95 + 94 + 72 + 86) / 5 = **87.0**, min **72**, PASS. Change **+11.6**. | Practice `verdict-history.md:8`; style-library `verdict-history.md:13` |

   The fed “four-lens-era” label for T12 attempt 1 can describe the era, but this attempt has five filed lenses and a denominator of five. T137’s PASS is corroborated at the filed source and logic level, with pixel verification explicitly outstanding. (`T137-case-emphasis-stream/scores.md:4,8–17` and `codex/lens-*.md`; `T12-marker-highlight-sweep/scores.md:8–21,75–88` and `codex/lens-*.md`, `codex/attempt-2/lens-*.md`; `TECHNIQUES.md:84,97`.)

6. **T197 and T199 have no prior attempt in the inspected record.** T197’s artifact directory contains the Observe payload and an empty return placeholder, with no `scores.md` or lens returns. T199 has no matching artifact directory, and neither item appears in the inspected attempt histories. T199 remains DESCRIBED — OWED #94. Its roughly double-height shout peak belongs to the 67–75 s scene demonstration. T197’s peak ratio still needs measurement from its own window. (`T197-volume-ramp/codex/`; recreation and practice `verdict-history.md`; `TECHNIQUES.md:140–141`; `techniques-word-animation.md:133–146`; `digest.md:56–59,66–69`.)

**Limits.** CANNOT READ `runs/2026-11-18-cycle-034-wave-31/item-T197-observe-plan.md` — `No such file or directory`. Observe working memory is outside this guard’s scope. The audio onset and frame-by-frame motion curve remain unmeasured.

Body-write: none (read-only run)
