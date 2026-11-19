Timing is driven by per-line, per-message and per-cut records, with independently evaluated events. Four chat pops span 1.2–10.6s; six cuts occur by 13.85s. The 100ms cut→chat separation remains distinct, and 220ms pops and 700ms sweeps fit the fast-cut tempo.

The principal title states match: first line partial at 4000ms; “IN” alone through 5075ms; second line complete at 5360ms; full title complete at 5620ms. Residual checkpoint mismatches remain:

- First-line reveal produces about 17 characters at 3950ms and 21 at 4075ms, versus approximately 19 and 26 evidenced.
- HISTORY shows five characters at 5575ms and completes at 5620ms, missing completion by 5575ms.
- The first-line sweep runs 4250–4950ms, temporarily darkening covered letters at 4550ms when the evidenced line is already complete and white.
- Duration-only scaling is coherent, and replacement tables retain absolute checkpoints with validation. However, legacy `titleMs` overrides change `tMs` without changing `revealStartMs`, so valid changed times are rejected.
- For replacement lines containing three or more words with a nonzero hold, `wordOnsets()` adds the hold only to the second word’s onset, while later completion times include it. This can accelerate later words and break the promised uniform reveal.

Assessment is source-level; the supplied harness report does not establish rendered playback tempo.

BODY-WRITE: Carry the dense title checkpoints into timing regression checks; correct first-line pacing and sweep placement, finish HISTORY by 5575ms, synchronize titleMs aliases, and apply the word hold consistently to every subsequent word.
SCORE: 86