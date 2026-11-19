The default titles look readable from the source: strong light-on-dark contrast, bold type, natural wrapping, and a distinct yellow “Slopcore” mark. Completed cards retain full text without fading as the stack grows. Modelled title sizes are 35.45px at 1916px, 14.00px at 360px, and 15.17px at 390px. Phone headers, badges, timestamps, and footers are approximately 11.02px and 11.93px respectively—legible but small. Timestamp opacity is no longer reduced; the badge’s stated contrast is supported by its configured colours.

Several readability guarantees exceed the evidence:

- **Wrapping is estimated, not bounded.** `0.58em` is not a worst-case glyph width. Grapheme-count division ignores word-boundary wrapping, font metrics, and mark padding. CSS imposes no two-line maximum, and validation displays a warning while continuing playback. Neither the 76-grapheme allowance nor “no silent clipping path” is established.
- **Header fitting is absent.** The model checks title lengths and estimated heights; it never measures handles, badges, timestamps, or their combined row width. The claim that handle/badge fitting participates in validation is unsupported.
- **Containment remains uncertain.** The narrow model reserves a fixed amount for the post instead of measuring its rendered height. The wide model leaves only about 52px of vertical slack at full size. Additional wrapping could consume that margin, with stage overflow hidden.
- **The phone caret is undersized.** At 360px it is approximately 1.8px wide × 5.76px high beside 14px text. Partial text signals progress, but this short caret weakens recognition of active typing.

The default content plausibly fits and remains followable at both phone widths. However, the DOM-stub checks establish model arithmetic rather than rendered legibility; actual wrapping and final-stack visibility remain unverified.

BODY-WRITE: Require rendered checks at 1916px, 360px, and 390px for title wrapping, header fit, and completed-stack containment; replace the claimed worst-case glyph bound with measured fitting and enlarge the phone caret.
SCORE: 77
