**Reusability / parameterization: 79/100.** CONFIG covers the main dialogue, cut position, timing, and palette. Every declared CONFIG key is used. URL overrides support all current keys, including JSON `contextLines`.

Defects and priced cures:

- **Hardcoded prompt content:** `speakerPrompt()` embeds `●` and `❯`. Producers cannot replace these through CONFIG. **Cure: low cost** — add `aiPrompt` and `userPrompt` keys.
- **Incomplete fit guarantee:** shrink-to-fit exists, but its height check uses the slam container’s full height, ignoring its padding. The 6px floor also permits sufficiently long text to remain oversized. **Cure: medium cost** — measure the actual padded content area and define an explicit overflow policy.
- **Unconfigurable presentation values:** terminal font, text scale, spacing, and slam sizing rules remain CSS or logic literals. **Cure: medium cost** — expose producer-facing typography and layout controls through CONFIG and CSS variables.
- **Timing ambiguity:** interruption occurs one `typeMs` interval after the last visible character. **Cure: low cost** — make that pause explicit in CONFIG or interrupt immediately after the final character.
- **Fragile context override:** JSON accepts any array; malformed entries can break playback. **Cure: low cost** — validate speaker/text entries before applying the override.

The supplied swap test supports ordinary substitutions; it does not establish unrestricted long-text fitting. This lens falls below 85; the overall tier decision requires the other lens scores.

Filesystem tooling failed to start, so I could not persist the review or update `scores.md`.

SCORE: 79
BODY-WRITE: None; filesystem tool startup failed. Review returned in chat only.
