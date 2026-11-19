Reusability: **80/100**, source-only. CONFIG controls ballot content, choice count, palette, geometry, and timing without source edits. Generated SVG and seekable rendering support reuse; no tracing or embedded assets appear.

Deductions:

- **−10: Text fitting can silently lose content.** Width estimation uses character count rather than font measurements. At `fitMinPx`, overlong choices remain clipped by `overflow: hidden` and `white-space: nowrap`.
- **−6: Container height ignores ballot height.** Stage height derives solely from backdrop geometry. More choices or wrapped organization/prompt text can push the card beyond the stage and be clipped.
- **−4: Invalid overrides silently restore the original specimen.** A production caller receives no rejection status or explanation, so an incompatible timing or geometry change can unexpectedly render the default ballot.

**Verdict:** The default specimen is parameterized, but production reuse needs stronger content-fit guarantees. Next attempt should measure actual text, wrap or explicitly reject overflow, derive stage height from both card and backdrop, and expose configuration validation results.

I could not file this assessment: the execution tool failed before filesystem access. This response is the only assessment record; `scores.md` remains unmodified.

SCORE: 80
BODY-WRITE: None filed; filesystem execution unavailable.
