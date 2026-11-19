CONFIG supports substantial reuse: content, palette, verdict, and timings are exposed; cross-source-line phrases and successive repeated occurrences are supported; wrapped highlights receive width-proportional segments. However, production still needs animation-logic changes:

- **Missing phrases break later highlights.** Placed highlights retain their original `hi`, while timeline starts are densely indexed. With `["one","missing","three"]`, “three” has `hi=2` but only two fill states exist, so it never fills. The no-slot test misses this rendering-path mismatch.
- **Playback always loops.** CONFIG has no play-once mode, completion event, seek interface, or phrase-specific onset times. `recreation:play` restarts rather than resumes. Spoken-onset synchronization requires additional machinery.
- **Valid timing configurations can fail.** `cardEnterMs=0` produces `NaN` at time zero. With `endHoldMs=0`, the cycle resets at contact, cutting off configured settle and shake effects; `total` does not include `actionEnd`.
- **Layout flexibility is partial.** Card width, padding, stamp font size, and stamp anchoring remain CSS constants. Long verdicts and rotated stamps can exceed the reserved zone; zone allocation alone does not guarantee containment across CONFIG values.
- **Scaling remains uniform per phrase.** Any number of phrases is accepted, but each gets the same sweep duration. There is no per-phrase duration or constant-speed mode.
- **Validation and overrides are incomplete.** URL validation warnings are discarded, and several CONFIG glyph/color/label keys lack URL overrides. Line-boundary whitespace can defeat normalized matching; reading order assumes left-to-right text, limiting multilingual reuse.

The supplied 26/26 logic checks support the basic parameterization, but do not establish these production contracts or rendered wrapping behavior.

BODY-WRITE: Require dense placed-highlight animation indices, zero-duration and complete-action timeline guards, configurable one-shot/onset playback, and measured long-verdict containment before marking T12 ready for production reuse.
SCORE: 72
