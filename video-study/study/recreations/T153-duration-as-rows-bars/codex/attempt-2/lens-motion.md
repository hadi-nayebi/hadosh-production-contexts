Verdict: Motion lens passes at 93/100 and improves on the predecessor’s header-state defect. It supports RECREATED consideration; pool exit remains dependent on the complete five-lens result.

Findings:

- **Overflow continuation passes.** `recreation.html:32–39` derives each onset from the preceding segment’s completion. Independent execution confirmed continuous handoffs: one advancing front fills successive rows, without simultaneous independent sweeps.
- **Duration becomes persistent row count.** `recreation.html:43–46` clamps completed fills while later rows advance. Completion is `9800 + 2000 + 800 + 6×250 = 14100 ms`; all eight dwarf rows persist for `15000−14100 = 900 ms`. The Sun reaches 0.42 at `800+2200 = 3000 ms` and remains filled.
- **Header transition cures the predecessor’s motion defect.** `recreation.html:23,48` switches at 11000 ms during the first dwarf sweep. Executed states show the original header with dwarf fill 0.10 at 10000 ms, then the dwarf header with row 1 full and row 2 at 0.25 at 12000 ms. Both supplied census states are satisfied.
- **Residual motion concern: abrupt acceleration.** `recreation.html:26,37` changes sweep duration from 2000 to 800 to 250 ms—speed increases of 2.5× and then 3.2× across equal-width rows. Continuity survives, but the perceived advancing front changes speed sharply. This is a disclosed allocation, not an established specimen mismatch. Further-attempt cure: inspect playback across both speed changes and the final hold; adjust the later allocation only if the rapid rows cease to read as successive sweeps.
- **Completion dispute remains separate.** The supplied packet leaves the predecessor’s 12200 ms completion unresolved. This lens finds no intrinsic motion requirement for that endpoint and does not resolve its authority.

Limits: Source/logic assessment only; rendered pacing and perceptual continuity were not observed. The artifact SHA-256 matches the supplied hash. No complete attempt-2 five-lens result was assessed.

SCORE: 93
BODY-WRITE: none (read-only run); consumer to file this return verbatim as codex/attempt-2/lens-motion.md and extract SCORE into scores.md.