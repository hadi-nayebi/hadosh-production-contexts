Readability lens: FAIL — the bubble hides the ring marker’s entire head during the settled crowd.

- **Blocking occlusion:** `CONFIG` places the ring head at (428,98), radius 16: bounds x412–444, y82–114. The bubble rectangle spans x395–645, y71–117, fully enclosing that head. The SVG renders `bubbleG` after `markers`, so the opaque bubble covers the ring glyph through 9000 ms, including the seven-marker hold at 7000 ms. **Cure:** reposition the bubble or ring marker so the bubble rectangle and tail clear every head throughout their shared visibility.
- **Foreground separation is supported:** settled markers render at opacity 1; arms use 0.5 and reflection 0.18. The supplied speck formula yields opacity 0.15–0.50. These support separation from the reserve, although they cannot compensate for the occlusion.
- **Phone geometry supports basic identification, with fine-detail uncertainty:** at 360 px width, heads are 16 px across. `glyphSpecs` gives distinct silhouettes, but robot eyes are only 1.6 px across (`16 × 0.1 × 2 × 0.5`), making their rendered clarity uncertain.
- **Bubble fit is supported by the supplied measurement:** 110.4 px ink within 125 px leaves 14.6 px total horizontal clearance at effective font size 15 px. This measurement is supplied evidence, not independently verified here.

Limits: Text/source review only; no rendered phone-size pixels inspected. Overall five-lens passage is not assessed.

SCORE: 64
BODY-WRITE: none (read-only review); return designated for codex/attempt-2/lens-readability.md and SCORE extraction into scores.md.