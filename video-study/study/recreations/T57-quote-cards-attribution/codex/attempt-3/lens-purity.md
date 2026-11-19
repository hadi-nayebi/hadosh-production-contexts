Construction purity is strong. Content, timing, palette, typography, anchors, and card geometry come from CONFIG. Quote lines are formed through canvas measurement and greedy wrapping, with no specimen line breaks. The source contains no embedded specimen media, screenshots, external assets, or traced geometry. Specimen-derived timing and anchor values remain editable construction parameters.

The remaining weakness is attribution wrapping: `chipWrap()` models character-level splitting of oversized tokens, but the rendered spans have no corresponding `overflow-wrap` rule or explicit measured line construction. Thus the model can predict wrapping that the browser does not perform. This is a small construction robustness deduction; pixel verification is outside this lens.

SCORE: 97
BODY-WRITE: Make rendered attribution wrapping match chipWrap’s oversized-token splitting, then verify a long unbroken speaker or occasion token in a real browser.