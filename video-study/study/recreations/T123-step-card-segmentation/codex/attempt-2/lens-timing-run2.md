Verdict: TIMING 85/100 — clears this lens’s 70 floor; the overall five-lens pass is NOT ASSESSED here.

1. **Record 2 is a defensible governing basis.** The build restores the observed sequence: headline 1 → tile 01 → tile 02 under headline 1 → headline 2. All three bracketed onsets fall inside their supplied brackets. Record 1 remains incompatible: its second-step window is approximately 12–13 s, versus tile 02 at 6.5 s and headline 2 at 8.0 s. The explicit amendment resolves which record governs, without proving the underlying discrepancy away. Evidence: `scores.md`, “Attempt 2 — Stage 0”; `codex/attempt-2/instr-timing.txt`, “Neutral technique facts.”

2. **Onset compliance is stronger than settled-state fidelity.** From `recreation.html:31–38`, adding each 600 ms entrance gives:

   | Event | Onset | Fully visible |
   |---|---:|---:|
   | Headline 1 | 2.00 s | 2.60 s |
   | Tile 01 | 3.25 s | 3.85 s |
   | Tile 02 | 6.50 s | 7.10 s |
   | Headline 2 | 8.00 s | 8.60 s |

   “Present” in the census does not establish “fully visible,” so these completion times do not themselves contradict it. However, headline 1 has zero opacity at exactly 2.00 s, whereas the census says it is already present by then (`recreation.html`, `enterP` and `applyFrame`). The next attempt needs a tighter headline-1 onset bracket and separately measured entrance durations; shifting anchors merely to match closing frames would substitute another assumption.

3. **Residual bracket uncertainty limits precision.** The supplied onset windows span 0.75 s, 2.00 s and 1.50 s respectively. The chosen anchors are permissible late-bracket picks, not measured exact onsets. Independent duration controls are useful, but both 600 ms defaults remain unverified measurements. Evidence: `build-record-attempt-2.md`, Stage 0. Cure: narrow each absent/present bracket and measure transition completion before retuning.

4. **Opening and closing treatments retain adaptation costs.** The grid-only opening occupies 2/14 = **14.3%** of the cycle, preserving elapsed time while omitting the insert’s activity. The closing hold adds 1.5/14 = **10.7%** after the specimen changes headline at 12.50 s. Both are honestly declared scope treatments; neither reproduces the segment’s complete tempo. The next attempt could end the technique presentation at 12.50 s and keep any demonstration hold explicitly separate. Evidence: payload “Opening and closing treatment”; `recreation.html:38` and `stateAt` modulo wrap.

Limits: Local source hash matches the binding. Assessment uses source logic and supplied timing records; source playback, narration alignment and rendered frame timing were not independently verified. Other lens scores were not assessed.

SCORE: 85
Body-write: none (read-only run)