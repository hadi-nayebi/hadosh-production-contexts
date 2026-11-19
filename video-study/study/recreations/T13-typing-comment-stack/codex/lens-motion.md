Motion fidelity: **82/100**.

- Typing genuinely reveals configured text one grapheme at a time using elapsed time and `charMs`. Partial text and a caret clearly identify the active card; completion hides its caret.
- Default sequencing is guaranteed arithmetically: each next appearance starts after the preceding typing ends plus its hold. Cards finish and settle before another begins.
- Cards reveal progressively downward while completed cards remain visible, reproducing stack growth as progress.

Deductions and required cures:

- **Opening state differs from the evidence.** The supplied frame already shows card 1 complete and card 2 partly typed; this recreation opens empty and types card 1. Match that opening state with a documented timeline offset.
- **Replay can break progressive appearance.** `restart()` resets bookkeeping without removing existing `.on` classes. Previously visible cards can remain visible until their scheduled starts. Explicitly reset visibility and landing classes, then verify a complete second playback.
- **Entrance motion is inferred.** The 160 ms upward slide/fade is not established by the single frame. Neither scrolling nor displacement of existing cards can be confirmed; the fixed stack is plausible, but motion matching remains uncertain. Obtain consecutive frames before claiming those details faithfully reproduce the specimen.

The default forward run satisfies the central typing-and-sequencing mechanism. This score does not certify exact specimen choreography.

Filesystem tooling failed before inspection or writing; this return supplies the finding for the named consumer to file.

BODY-WRITE: Record that default sequencing is guaranteed, but cure replay visibility and the evidenced opening-state mismatch; label entrance translation and stack scrolling as unverified motion assumptions.
SCORE: 82
