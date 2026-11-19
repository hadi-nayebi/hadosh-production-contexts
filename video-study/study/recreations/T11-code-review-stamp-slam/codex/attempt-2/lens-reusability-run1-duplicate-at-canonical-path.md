**Reusability score: 6/10.** CONFIG covers the major technique families, and source inspection found no clearly dead keys. Cards, counters, checks, pills, timing, reviewers, arch geometry/glyphs, palette, and type sizes feed rendered or computed effects.

Deductions:

- **Validation is incomplete.** PR fields, check-row structure, pill tones, reviewer counts, most dimensions, and several timing values lack validation. For example, `stampHideMs: 0`, negative reviewer counts, or malformed PR approvals can pass. Null collections can throw during validation instead of triggering fallback.
- **Invalid URL inputs are silently normalized.** `cardMs=garbage` falls back, `cardMs=-1` becomes 300, and `cardMs=900junk` becomes 900. These inputs bypass the promised observable rejection.
- **Technique values remain outside CONFIG:** stamp position, border width and background; reviewer stroke thickness; arch pattern multipliers `7`/`13`; streak divisor `600`; font families; and several layout dimensions.
- **Swap support is useful but limited.** Titles, stamp text, interval, accent, and background are exposed. Title overrides replace existing slots only. When validation returns errors, restoration of the complete default configuration before rendering does provide atomic fallback.

This assessment uses the supplied source; no browser verification occurred. Filesystem tooling failed to start, so the build record and scores.md remain unchanged.

SCORE: 6
BODY-WRITE: This return records broad CONFIG consumption, remaining technique literals, limited URL swap coverage, and incomplete atomic rejection; filesystem filing remains pending because tooling was unavailable.