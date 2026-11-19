Timing score: **64/100**.

The cycle arithmetic is exact: `3 × 4200 + 1400 = 14000 ms`, matching the 14.000 s segment. The supplied phase function assigns boundaries consistently:

| Time | State |
|---|---|
| 0–450 ms | Schneier enters |
| 450–4200 ms | Schneier holds |
| 4200–4650 ms | Sal Khan enters |
| 4650–8400 ms | Sal Khan holds |
| 8400–8850 ms | Berners-Lee enters |
| 8850–14000 ms | Berners-Lee holds, including endhold |
| 14000 ms | Wrap to Schneier, entrance resets |

These are code-derived boundaries, not independently executed browser measurements.

The main weakness is temporal fidelity. The specimen sustains one card through approximately 10 s and removes it by 12 s. The recreation fits three cards into that window, giving Sal Khan only 3.75 s at full opacity. His 23-word quote alone implies approximately 368 words per minute during that settled interval, before reading the attribution. This compresses the authority-reading beat substantially.

The final card receives 5.6 s overall, versus 4.2 s for each preceding card. Endhold extends its ordinary hold without a visible phase change. The loop then replaces it with an initially transparent first card; there is no corresponding specimen exit or following graphic by 12 s.

The allocation is honestly labeled, but labeling does not establish fidelity. No claim-linked dialogue timing is supplied, so “cards read at the moment of the claim” remains unverified. The observed progressive text accumulation is also absent; its governing deferral explains the decision but does not recover that temporal behavior.

Next attempt must cure:

1. Provide a specimen-timed mode: Sal Khan present from the window start, sustained through approximately 10 s, gone by 12 s. Keep the three-card allocation separately identified.
2. Give each allocated quote a justified reading interval, including attribution, and justify the final card’s longer dwell.
3. Supply dialogue cue timestamps before claiming alignment with spoken claims.
4. Verify rendered boundary frames, wrap behavior, and comparison playback synchronization. Treat progressive text growth as a remaining fidelity gap while its deferral governs.

The execution tool failed before filesystem access, so the bound hash and runtime were not independently verified, and no file was written. The consumer should persist this return verbatim to `codex/lens-timing.md`.

BODY-WRITE: none (read-only run).
SCORE: 64
