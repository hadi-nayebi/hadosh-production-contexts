Motion fidelity is strong in the typing and accumulation, but scrolling remains imperfect. This is a source-based assessment; rendered playback is unverified.

- Banner title, subline, and dialogue reveal character by character. The solid block cursor follows the current text endpoint and stays on the final line after completion.
- Completed dialogue remains in the log. Green chevrons and orange dots appear with their respective lines, preserving speaker differentiation as the conversation grows.
- The banner shares the translated log, so it scrolls away with the conversation.
- Scroll continuity is not guaranteed when easing windows overlap. At each new keyframe, `scrollYAt` starts from the previous **target**, rather than the offset actually reached. If the preceding transition is unfinished, this produces a positional jump. The reported logic checks do not establish rendered continuity.
- Scrolling anticipates overflow by 350 ms, and a separate line-index trigger forces banner removal. Both can move the log independently of the active text reaching the viewport edge, weakening the natural accumulating-terminal motion.

The next attempt should preserve character reveal and cursor behavior while making interrupted scroll transitions start from their actual reached position. Verify wrapped-row and line-start transitions in playback at both stage sizes.

SCORE: 83
BODY-WRITE: This review records the overlapping-scroll discontinuity and anticipatory banner-exit behavior as motion findings for the next build; rendered continuity remains unverified.
