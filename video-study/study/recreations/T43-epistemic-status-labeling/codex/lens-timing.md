Timing is plausible as an illustrative sequence, but insufficiently matched to the specimen to earn RECREATED under this lens.

- **Split begins early.** `checkpoints.splitStart:8200` maps to **18:58.2**, versus the supplied ~19:00 anchor. The 1.8 s lead exceeds the disclosed ±800 ms uncertainty. `phaseA` disappears completely by **18:58.8**, so the artwork phase ends before the specimen’s stated split onset.
- **Completion slightly misses the firm anchor.** Divider finishes at 9.5 s; solid content at 10.2 s; speculation content at 11 s; provenance at **12.2 s / 19:02.2** (`provenanceIn + fadeMs`). The complete split should be present **by 19:02**. Beginning an entrance before that deadline does not satisfy completion.
- **Phase proportions are weakly grounded.** The reconstruction allocates 8.2 s to the artwork phase and 5.8 s to the split transition/hold. The supplied anchors instead suggest approximately 10 s before splitting and 4 s for transition/hold. The final fully populated state holds only **1.8 s**.
- **Tag cadence is invented, transparently.** Entrances at 1.6, 3.2, 4.8 and 6.2 s create a regular instructional rhythm. The record offers no observations within this segment supporting that cadence; the 14:32 frame establishes presence elsewhere, not entrance timing here. Ordered checkpoints verify coherence, not tempo fidelity.

**Priced cure list:** observe the segment’s actual tag entrances and split onset/completion; record timestamps or bounded intervals. Retune `checkpoints.splitStart` toward 10000 ms and coordinate `dividerIn`, `solidIn`, `specIn`, `provenanceIn` with their fade/draw durations so the entire split is complete by 12000 ms. Recheck phase proportions against those observations rather than merely compressing the current staircase.

PIXEL-UNVERIFIED receives no separate timing deduction. The missing evidence here is temporal comparison, not pixel appearance.

SCORE: 64
BODY-WRITE: This return records the timing-only verdict, calculated entrance/completion times, unsupported cadence assumptions, and CONFIG-level cures for the next attempt.
