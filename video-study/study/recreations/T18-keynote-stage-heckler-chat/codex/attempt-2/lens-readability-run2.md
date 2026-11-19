Readability is adequate for the title, marginal for chat, and weak for secondary labels. This is a source-level assessment; the logic checks do not establish rendered phone legibility.

At 360px width, the configured type resolves to:

| Element | CSS size | With framing scale 0.95–1.04 |
|---|---:|---:|
| Title | 18.72px | 17.78–19.47px |
| Chat body | 11.16px | 10.60–11.61px |
| Sender/time | 9.36px | 8.89–9.73px |
| Stat values | 14px | 13.30–14.56px |
| Stat labels | 9px | 8.55–9.36px |

The bold title has strong contrast. Chat body text is decipherable but small; sender/time text and widely spaced stat labels require effort, particularly with their 75% opacity. These sizes precede the screen’s perspective transform.

The title and chat columns have approximately 13.82px of horizontal separation before framing: sufficient for their declared boxes. Actual title wrapping still needs browser verification.

White text against the dark screen and yellow text after the sweep provide strong contrast. During the sweep, however, each character becomes dark when the bar reaches its character-index threshold, before necessarily covering that glyph. Equal character-count segments also ignore proportional glyph widths. This can briefly expose dark lettering against the dark screen.

The framing clamp protects a declared rectangle, not measured content. Its translation calculation also differs from CSS: `scale(...) translate(...)` scales the translation. More substantially, accumulated chat height can exceed the screen at short viewport heights; `#screen` then clips it regardless of the stage clamp. Width alone cannot establish containment.

Residual defects: undersized metadata and stat labels, transient sweep contrast loss, and unverified wrapping/vertical containment. Require rendered 360px checks at a declared viewport height before clearing these.

BODY-WRITE: Carry forward a readability gate requiring rendered 360px holds, measured content bounds, larger secondary text, and glyph-safe sweep colouring; modelled geometry alone cannot clear readability.
SCORE: 73
