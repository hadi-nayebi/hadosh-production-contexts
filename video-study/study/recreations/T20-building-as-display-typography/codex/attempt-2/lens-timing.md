The default timing is internally consistent and matches the supplied evidence anchor.

- **Loop:** time wraps modulo 14,000 ms, resetting lighting and motion together.
- **Cadence:** 15 non-space glyphs, including “!”, create 14 intervals: `(11000 − 500) / 14 = 750 ms`.
- **Anchor:** at 6,499 ms, eight glyphs are lit; at 6,500 ms, nine are lit—“LOOK”, “WHAT”, and “I”—matching the measured frame.
- **Completion and hold:** the final glyph lights at exactly 11,000 ms. Full illumination holds for 3,000 ms before reset.
- **Marquee:** its 19 characters finish at **720 ms**, while only the facade’s first glyph is lit. The harness’s 6,500 ms check confirms continued completion, rather than determining its earliest completion.

The checkpoints specify **first and last glyph onsets**; intermediate onsets are evenly allocated between them. They do not independently establish the original’s reveal start, completion, or hold duration. Those remain model choices consistent with the single measured anchor.

The small reservation is evidentiary: source and harness support the arithmetic, but actual rendered cadence and the original’s unmeasured phase boundaries remain unverified.

BODY-WRITE: This return records the timing-lens assessment, checkpoint semantics, derived phase boundaries, and evidence limits for the Verify record and artifact scores file.
SCORE: 95