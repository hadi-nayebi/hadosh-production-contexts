--- T96-one-palette-world/codex/attempt-2/lens-timing.md ---
Timing/tempo: **100/100**.

- Blue lead: 0–4.5 s.
- Gradual warm-up: 4.5–6.0 s (1.5 s).
- Dusk dwell: 6.0–13.0 s (7 s).
- Blue return, dinner cut and HUD 19:00 coincide at 13.0 s.
- Dinner remains visible through 14.0 s: 500 ms scene plus 500 ms end-hold.
- Scene shares: kitchen 10.71%, street 10.71%, exhibits 71.43%, dinner including hold 7.14%.

All measured anchors match the prescribed timing. The disclosed early-scene allocations introduce no timing contradiction. This lens passes; the five-lens result requires the other scores.

BODY-WRITE: Timing verdict supplied for `scores.md`; filesystem persistence failed because the tool host was unavailable.
SCORE: 100
--- T96-one-palette-world/codex/attempt-2/lens-motion.md ---
Motion fidelity passes: blue holds through 4.5 s; the sky warms continuously until 6 s; dusk persists until 13 s; dinner, blue return, and HUD 19:00 arrive together. Dinner then holds through 14 s, including the end hold. Half-open phase intervals prevent overlap, and buildings retain their blue palette throughout.

The kitchen/street sequence is disclosed allocation, not independently verified source timing. Verdict is source-only; playback remains unverified. This lens alone cannot establish the five-lens pass.

SCORE: 100
BODY-WRITE: Motion verdict supplied above; `scores.md` could not be updated because the execution tool failed to start.
--- T54-map-as-table-roster/codex/attempt-4/lens-timing.md ---
The camera follows basis B correctly: regional hold to 1100 ms, widening to 2000 ms, full framing through 6000 ms, and pan-away through 7000 ms. The coarser sampling does not justify a deduction. The 84,550 ms run has a continuous allocation through placement, regional passes, return, and the 25,300 ms final hold. Default placement spacing preserves full 120 ms pops with maximum concurrency two.

Deductions from 100:

- **−7 — Opening state sequence differs from the observed segment.** The evidence describes an already-built roster; this run starts empty and spends the opening and full-map dwell assembling it. Matching camera anchors therefore does not reproduce the segment’s temporal state sequence. **Cure:** preload the roster for the observed segment and allocate placement to a separately timed demonstration.
- **−5 — Completion gets only about 78 ms before departure.** The last pop settles at approximately 5922 ms, leaving roughly 78 ms before pan-away. The later final hold is real and substantial, but the opening completion beat is effectively a flash. **Cure:** reserve an expli
--- T91-qa-quote-cards/codex/attempt-2/lens-reusability.md ---
The build has useful reuse mechanisms, but production cannot yet safely supply arbitrary new content. The 74 passing checks cover selected cases; the source exposes gaps beyond that coverage.

- **List replacement is explicit and predictable.** `cardsReplace` and `schedule.replaceCards: true` replace the whole list; ordinary array overrides patch by index. Empty replacement lists are rejected. Replacing with fewer than three cards in default specimen mode also requires updating `specimenCard: 2`; validation names that invalid index.
- **Validation is incomplete.** Specimen reveal, hold, and free timings lack finite-number checks. Sequence exit/free timings and hold settings also lack comprehensive validation. Negative or string values can therefore produce invalid schedule arithmetic without an error. Null configuration groups such as `type`, `stage`, or `geom` can reach property accesses and throw instead of displaying an actionable message. Unknown-key warnings are exposed programmatically but never displayed.
- **The fit contract has a horizontal-overflow hole.** `wrapText` never splits or rejects an individual oversized word. A long unbroken quote, speaker name, or role token can pass the height and line-count checks while overflowing horizontally. Ordinary multiword text receives useful deterministic shrinking and attribution limits, but those checks do not establish safe 
--- T11-code-review-stamp-slam/codex/attempt-5/lens-readability.md ---
Readability is workable but small and uneven. Confidence is moderate at most: this is a source-only assessment, with no rendered phone-size evidence.

- **Title/number:** Bold 13 px text should remain decipherable at 360 px width. Ellipsis protects the layout but can hide distinguishing title endings on narrower screens.
- **Counter:** Settled 14 px digits in 17 px cells should read clearly without blur. Rolling ones advance roughly 106–241 digits per second on changing cards, making individual digits unreadable during travel. Some settled windows before the next whip are only 150–250 ms.
- **Checks/pills:** Semantic colors and explicit labels help, but 12 px rows and 11 px pills are small. At 360 px, the checks panel has about 128 px of inner width; the down-state row likely wraps. Flex wrapping accommodates this, though browser font metrics and narrow-screen pill overflow remain unverified.
- **Arch:** The approximately 138 × 188 px grid provides a visible silhouette, but 6.4 px glyphs read as texture. The opening begins abruptly below a broad upper mass; arch recognition is less assured than the filed geometry measurements imply.
- **Reviewers:** Approximately 24 px tall, with 9