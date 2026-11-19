Verdict: 88/100 — attempt 3 beats 82.4 and passes on motion fidelity, with rendered behaviour unverified.

Findings:

- **Settled first frame and unified movement match.** In the supplied source, `resolveSchedule()` gives specimen mode `enterMs: 0`; `showCard()` populates attribution alongside the quote before animation begins. Sequence mode applies entrance opacity and translation to the parent `#card`, carrying frame, tag, mark, text, and attribution together. Its 450ms rise/fade is an allocation, not a verified specimen entrance.

- **The principal reveal anchors match at the reported 360px wrap.** `revealTimes()` yields `[0, 2000, 5000, 8000]` for four lines: one at t=0, two at t=2, four at t=8. Hidden lines retain their layout boxes in `showCard()`, preventing attribution drift. The 5000ms intermediate reveal is a reasonable disclosed interpolation.

- **Reveal fidelity remains incomplete.** Neutral specimen facts report about 39 words visible at t=8, continuing beyond the verified first sentence; `CONFIG.cards[2].quote` stops at that sentence. Consequently, the build reproduces the line-count anchors using a shorter textual progression. At the reported 320px wrap, five lines produce `[0, 2000, 4000, 6000, 8000]`, so the final anchor becomes five lines rather than the observed four. These are the main deductions; reproducing the evidenced continuation and preserving its reveal composition would clear them.

- **Exit and card-free timing fit the evidence bracket.** From the specimen configuration: exit begins at `8000 + 3000 = 11000ms`, ends at `11600ms`, and leaves `2400ms` card-free before the `14000ms` cycle repeats. This preserves the card through t=10 and removes it before t=12. `frame()` fades the whole card, then sets `display: none`; the HUD remains unchanged. The fade shape and 600ms duration receive credit as compatible allocations only.

- **No competing scheduled motion appears.** `frame()` animates only the card parent and changes line visibility. HUD, attribution placement, tag, and mark have no independent animation. Sequence mode remains a separately labeled demonstration; its timing does not establish fidelity to unobserved source transitions.

Limits: Assessment uses the supplied payload and source markers. Own-check results were not independently rerun. Pixel playback, actual Georgia wrapping, source entrance/exit shapes, and dialogue alignment remain unverified. No separate numerical passing threshold was supplied.

Body-write: none (read-only run)

SCORE: 88