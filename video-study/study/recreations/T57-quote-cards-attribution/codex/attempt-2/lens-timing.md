The recreation preserves the event order and 14.0 s window, but compresses both entrances and ends the first card too early.

- **First entrance:** implemented at 0.0–0.5 s; already fully opaque at 0.5 s, when the reference is mid-fade. Reference completion is 1.0 s.
- **First hold and exit:** implemented hold is 0.5–8.0 s, followed by exit at 8.0–8.5 s. The reference remains fully present at 8.0 s and is exiting at 8.5 s. The implementation is already invisible at that sample.
- **Gap:** implemented at 8.5–11.5 s. This covers the confirmed reference gap at 9.0–11.0 s, but begins early.
- **Second entrance:** implemented at 11.5–12.0 s. At 11.5 s opacity is exactly zero, versus faintly visible in the reference; completion is 0.5 s earlier than the observed 12.5 s.
- **Final hold:** correctly continues through 14.0 s.

The 2 fps evidence limits exact boundary claims, but the implemented states contradict several sampled anchors. Use those anchors to constrain entrance and exit intervals rather than treating the first visible sample as an animation start.

SCORE: 80
BODY-WRITE: Constrain timing to sampled states: first card partial at 0.5 s, complete at 1.0 s, full at 8.0 s and exiting at 8.5 s; second card faint at 11.5 s and complete at 12.5 s.