The 3000 ms total correctly matches the handled segment, 53.5–56.5 s; the technique’s 2 s window does not require a 2000 ms loop.

Default phase timing closely matches the measured anchors: locator full at 999 ms and present at 1500; dive 2000–2450; locator exits 2200–2300; status fades 2325–2450. Separate checkpoints and span-derived fades govern these events, rather than one global cadence. Duration-only rescaling preserves their proportions, subject to millisecond rounding.

Override coherence remains incomplete. Normalization accepts negative fade durations and does not enforce locator exit during the dive or status completion by `diveEnd`. For example, `statusFadeMs=500` is accepted but delays full status visibility until 2825 ms. Atomic fallback handles detected errors, but these incoherent candidates escape detection.

The recorded independent override assertions support timing as data; the supplied source confirms separate timing dependencies. I have not independently executed that suite. The hard reset at 3000 ms is honestly disclosed as an excerpt reset, with no seamless specimen-loop claim. Opening immediately on the settled wall loses the measured arrival phase, slightly weakening the segment’s opening tempo.

BODY-WRITE: Preserve the measured default checkpoints; the next attempt must validate positive fades and cross-phase endpoint relationships, with independent rejection tests proving invalid timing overrides fall back atomically and record their rejection.
SCORE: 87