**CONFIRMED-WITH-GAPS — T196’s source record is sufficient for §1 Observe. The archive confirms pre-lighting within caption rows. The Intonation census needs corrected visual boundaries, row divisions, and speech alignment before Plan.**

### Findings

1. **The packet, register, and family entry agree on the mechanism.** Packet #11 §T07 and the T196 family entry give the same 38–67 s demonstration range, the same two evidence stills, and the same sync clip. The register confirms P11, DESCRIBED — OWED #92, and onset-driven changes to already-visible text. It carries no independent timing or frame references. Both stills show white future words beside a yellow spoken prefix. The 55 s still also shows the ramp words at baseline size. The sync clip decoded and measures 7.014 s, consistent with its nominal 40–47 s range. The archive probe matches the packet’s 113.734 s, 1920×1080, 24 fps, byte count, and SHA-256 prefix. (`digest.md:8,46–59`; `TECHNIQUES.md:138–140`; `techniques-word-animation.md:123–136`; `source.mp4`; `clips/040-sync-highlight-7s.mp4`; `ev/t044-sync-highlight-mid.jpg`; `ev/t055-line-before-ramp.jpg`.)

2. **The archive closes the first-row appearance bracket and corrects the 49 s clipping claim.** The filed `t048.3.jpg` is zero bytes. Direct decoding shows the Intonation header at **48.750 s** and “This system brings in varying” at **48.792 s**, with yellow already present on “This” and future words visible in white. That first row appears about **0.55 s after** the transcript’s 48.24 s marker. The visible lettering fits within the frame at first appearance and in `pf050` at 49 s. The lines extending across the frame are layout guides. The packet’s separate warning about later horizontal exits in §5.2 B3 does not establish clipping at 49 s. (`source.mp4`, consecutive frames at 48.750 and 48.792 s; `census/T196/t048.3.jpg`, `pf049.jpg`, `pf050.jpg`; `transcript.json`, 48.24–56.80 s segment; `digest.md:106`.)

3. **The proposed window is usable as a transcript-based cut, but its endpoint labels and two-row description conflict with the images.** The 47.76–58.32 s span is **10.56 s**. In the decoded source, the Intonation header first appears at **47.625 s** and Character Identification first appears at **57.167 s**. The transcript assigns Character Identification **56.80–58.32 s**, so 58.32 s marks the start of the following narration in that record. The Intonation sentence has **21 ASR words** across spans of **10 + 11**, but the archive shows an intervening caption card, “types sizes, weights and animation,” between “This system brings in varying” and “so you can feel when my voice gets louder or softer.” The final card appears complete and white at **52.792 s**, just before the 52.82 s ASR marker. By `t052.9.jpg`, “so” is yellow. The final card also survives in `t056.9.jpg`. `pf063` supports the same pre-light mechanism in green, with “speaking” still white. The `pf045` and `pf063` hashes match the packet’s `t044` and `t062` exhibits, respectively. (`source.mp4`, adjacent frames around 47.625, 52.792, and 57.167 s; `transcript.json`, 47.76–62.92 s; `digest.md:62,87`; `census/T196/`; packet `ev/`.)

4. **The baseline supersession note is confirmed.** Each scored attempt has **five lenses**. Every value below, in motion, timing, purity, reusability, readability order, matches its filed `SCORE:` return. The verdict bar is average ≥85 and minimum ≥70.

   | Filing | Recomputed average | Minimum | Verdict |
   |---|---:|---:|---|
   | T03 attempt 1 | (83 + 55 + 100 + 78 + 80) / 5 = **79.2** | 55 | FAIL |
   | T03 attempt 2 | (92 + 78 + 100 + 68 + 78) / 5 = **83.2** | 68 | FAIL |
   | T03 attempt 3 | (94 + 82 + 100 + 78 + 91) / 5 = **89.0** | 78 | PASS |
   | T132 attempt 1 | (76 + 82 + 100 + 76 + 82) / 5 = **83.2** | 76 | FAIL |
   | T132 attempt 2 | (96 + 100 + 100 + 78 + 80) / 5 = **90.8** | 78 | PASS |

   “T03 FAIL 79.2” identifies the historical baseline, including its window-fit, cursor persistence, multilingual reuse, and layout findings. T03 and T132 are both currently registered RECREATED. T132 carries the filed pixel-verification limit. No unbound numeric score surfaced. T195, T196, and T197 have no scored attempt in the inspected artifact directories or histories. (T03 and T132 `scores.md` and cited `codex/` lens returns, including T03 `attempt-3/lens-motion-run2.md`; recreation `verdict-history.md:8,79`; practice `verdict-history.md:10,76–77`; `TECHNIQUES.md:80,94,138–140`.)

### Gaps Observe must close before Plan

- **Bind the selected cut to visual events.** Record the first and last visible frames of each actual caption card, including the intervening card, and identify any real viewport clipping separately from guide lines. If the 47.76–58.32 s cut is retained, describe it as transcript-based and state which header frames it includes. (`source.mp4`; `digest.md:87,106`; `census/T196/`.)
- **Bind styling changes to audible speech.** Check the audio directly around the first row’s already-yellow entry, the final row’s white entry, and the later color and size changes. Record visual onset and audible onset separately. The first row supports pre-reading of future words within that row. The final row provides the stronger example of a complete white line at entry. (`source.mp4`; `transcript.json`, 48.24–56.80 s; `digest.md:51–59`.)

**Limits:** Exact audible onsets and continuous viewport clearance were not assessed. The archive is the trade-press re-upload. Submission-version fidelity and automatic real-time operation remain unverified (`digest.md:7–9,108`). **CANNOT READ — NOT ASSESSED:** the wave’s `item-T196-observe-plan.md` and `RUN.md` both returned `No such file or directory`. The supplied run header names the item record for persistence, while the on-disk guard names the wave’s `RUN.md`.

BODY-WRITE: none (read-only run)
