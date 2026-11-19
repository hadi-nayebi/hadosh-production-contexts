Reusability is partial: CONFIG covers the three texts, camera labels, timestamp base, typing speeds, checkpoints, principal palette, overlay intensities, and some wall-fit inputs. URL overrides cover texts, timing, palette, camera identity, and date. However, the machinery does not safely accommodate substantially different content.

- **Checkpoint overrides lack coherence checks.** `wallAt=5000&followAt=2000` reverses the argument; `wallAt=9000` prevents the wall appearing within the default loop. Values are clamped only to zero, without ordering or duration validation.
- **Text completion is not protected.** Longer questions can continue typing after the wall starts; longer answers can remain unfinished when the follow-up starts or the loop resets. Ordered start checkpoints alone do not establish completion order.
- **Wall fit handles width only.** Font size is computed, but the wall width multiplier `0.58` lives outside CONFIG. There is no height constraint or line-count budget. Many short words create enough lines to overlap the TV or leave the stage; a long unbroken word shrinks without a readability floor.
- **Shaping literals remain outside CONFIG.** Room and text geometry, font stack and sizes, line heights, glow opacity and blur, shadow radii, TV border width, gradient stops, and scanline spacing/black alpha are hardcoded. These affect reuse directly; the build record’s claim of zero technique-shaping literals outside CONFIG is unsupported.

The reported swap test demonstrates one short substitution and one safe checkpoint change. It does not establish arbitrary-content reuse.

Required cures: move remaining shaping values into CONFIG; validate effective checkpoints against duration and actual text completion times; reject impossible configurations with explicit diagnostics or apply a documented scheduling policy. Fit wall text against configured width **and height**, with explicit long-word handling and a minimum readable font size. Add adversarial swaps covering reversed/out-of-window checkpoints, long questions, many-line answers, and unbroken words.

BODY-WRITE: Amend build-record.md and scores.md to record that CONFIG coverage is incomplete and reuse requires validated content-aware scheduling plus two-dimensional wall fitting; this review could not write files because the execution tool failed to start.
SCORE: 64
