**Reusability / parameterization: 78/100.** This lens clears the 70 floor; it cannot determine the five-lens tier decision.

Dialogue, reply, cut position, principal timings, and palette use CONFIG. Every declared key is consumed; none is dead. URL overrides cover every key by name, and resize triggers slam refitting.

Defects and priced cures:

- **Hardcoded content and styling.** Speaker glyphs (`●`, `❯`), terminal font, and slam sizing constants live outside CONFIG. Producers cannot fully restyle the machinery through configuration. **Cure: small** — expose prompts, terminal typography, and fit settings.
- **Overrides lack type validation.** Invalid `contextLines` JSON leaves a string installed, which can crash playback. `interruptAtFraction=null` becomes the string `"null"`, producing an invalid cut calculation. Invalid numbers and negative timings also pass through. **Cure: medium** — parse overrides against an explicit schema, preserve defaults on errors, and clamp numeric ranges.
- **Shrink-to-fit is bounded, not guaranteed.** It stops around 10px even if text still overflows. Its width threshold allows 94% of the stage, while slam padding leaves 92%. **Cure: small** — measure the actual inner container and define a verified overflow policy for extreme text.
- **Cut bounds are inconsistent.** Character cuts have an upper bound; fractional cuts have neither bound. Values above 1 can prolong typing after the reply ends. **Cure: small** — normalize either input to an integer within `[0, replyText.length]`.

The supplied swap test supports ordinary reuse. Robust override parsing and guaranteed fit are the main next-attempt cures.

Filesystem tooling failed before execution, so I could not file `scores.md`; this assessment uses the appended source only.

SCORE: 78
BODY-WRITE: None — filesystem tool unavailable; scores.md was not written.
