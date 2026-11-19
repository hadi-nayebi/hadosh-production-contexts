Readability score: **86/100** (source review).

The default phrases are short, centered, single-line, and static throughout the hold. Red #ff4040 and white on #060606 provide strong contrast, with no competing elements. Stage-scaled sizing keeps both phrases proportionally large at phone width.

Three limits reduce the score:

- Canvas measurement excludes the element’s `letter-spacing: 0.01em`, so actual text exceeds the calculated width slightly.
- Long phrases shrink without a readability threshold. The 16px minimum eventually prevents further shrinking and can cause clipping, contradicting the “never overflow” claim.
- The requested 900 weight depends on installed fonts; the fallback does not guarantee a heavy display face. Phone rendering remains visually unverified.

Cures: bundle a verified heavy font, include letter spacing in fitting, and establish a minimum readable size that rejects overlong phrases with a clear instruction to shorten them. Verify both defaults and a boundary-length phrase at 360px stage width.

BODY-WRITE: Record in build-record.md and scores.md that default readability is strong, but fitting must account for letter spacing and reject phrases below a readable size; the 16px floor does not guarantee overflow prevention.
SCORE: 86
