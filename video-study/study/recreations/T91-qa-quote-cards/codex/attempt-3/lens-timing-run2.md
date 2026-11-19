PASS for TIMING / TEMPO. Overall multi-lens passage cannot be determined from this lens alone.

- **Specimen window matches.** Source `resolveSchedule()` and `stateAt()` produce a settled card at t=0, reveal through 8s, full hold until 11s, fade until 11.6s, then 2.4s card-free: 8 + 3 + 0.6 + 2.4 = 14s. This satisfies the observed presence through about 10s and absence by 12s. The fade remains a disclosed allocation.
- **Reveal pacing follows the available anchors.** `revealTimes()` yields [0, 2, 5, 8] seconds for four lines; the 5s interpolation is appropriately distinguished from observation. At five lines it yields [0, 2, 4, 6, 8]. The final line receives 3s before fading, exceeding its disclosed 200-wpm reading requirement at either wrap.
- **Both modes provide sufficient reading time.** Sequence exits begin at local 6.4s, 5.9s, and 11.8s; post-reveal holds are therefore 2.4s, 2.4s, and 3.8s. Its cycle computes correctly: 7 + 6.5 + 12.4 + 2 = 27.9s. These are demonstration allocations, appropriately separate from the specimen-window claim.
- **Minor accounting corrections:** `tokenCount()` counts the standalone em dash in Berners-Lee’s quote, producing 18 total tokens and a 5.4s floor, rather than the record’s 17 and 5.1s. The schedule still accommodates this. Also, the construction statement “each slot = entrance 450 + reveal/hold + exit 600” is misleading: entrance overlaps the reveal clock in `stateAt()`. The record should describe that overlap explicitly.

Limits: Logic-level assessment of the supplied source; browser playback, actual font-dependent wrapping, and spoken-claim alignment remain unverified. The observed continuation beyond the reproduced first sentence also limits full-text tempo fidelity.

Body-write: none (read-only run)
SCORE: 92