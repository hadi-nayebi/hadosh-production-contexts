Timing/tempo lens — source-only assessment  
Bound artifact: `a30b374eb21468a89c058f7de6a47b752f7f7a4dea7f22960b8dcaa271f3a626`

The principal timing matches: stack 0 is complete at 0 s; stack 1 fades in as completed artwork during 2–2.5 s; both hold thereafter. The intended 2.5–14 s hold occupies 11.5 s, appropriately dominating the segment act. Extending past the original’s ~10 s cut follows the supplied recreation specification.

The allocation model is plausible and honestly distinguished from observed timing. Rows start every 220 ms, with 140 ms pops; tags follow completed rows. Stack 0 finishes its tag at 1.6 s; stack 1 starts at 2 s and finishes at 3.6 s. Adding the 4 s hold produces the stated 22.6 s overall runtime. Geometry supports the row order; it does not establish these numerical durations as measured facts.

Deductions and cures:

- **−8: The 14 s segment boundary is declarative, not enforced.** `durationMs` never controls playback or rendering. Segment artwork continues through 15 s, making the first act effectively 15 s. **Cure:** end the segment at 14 s and explicitly implement the 14–15 s inter-act interval.
- **−2: The demonstration resets without an explicit temporal handoff.** At 15 s, completed artwork abruptly disappears into the first row’s zero-opacity pop. **Cure:** use the inter-act interval to announce the allocation demonstration and establish its reset.

This lens clears the 70 floor; the overall tier requires the other lenses. Browser playback and pixels remain unverified.

Body-write: none (read-only run); consumer to persist this return verbatim at `hidden_files/study/recreations/T66-money-stacks-sourced-totals/codex/lens-timing.md`.
SCORE: 90
