At 360 px, the formed cards use 14.4 px quote text and 14.04 px attribution text. Both are readable but small; the quote has little size hierarchy over the attribution. White quote and speaker text, plus gold italic occasion text, clear the recorded 4.5:1 contrast floor against the slate panel.

The supplied measurements support complete default cards, including the second attribution’s two-line wrap. Containment remains provisional: verification used a stand-in serif without browser pixels, and the second card sits close to the stage’s bottom edge.

Two source details weaken the fit guarantee. `#chip` inherits the surrounding font size, so its `line-height:1.3` need not equal the model’s attribution-size × 1.3 calculation. Also, the attribution estimator hard-splits oversized tokens, while the rendered spans lack matching CSS word-breaking. Long-token swaps can therefore overflow despite a passing model.

Next attempt should explicitly size the attribution container, align rendered wrapping with the estimator, and verify actual font bounds at 360 px. No default clipping is demonstrated; its absence is not pixel-verified.

SCORE: 83
BODY-WRITE: Require attribution line-box and word-breaking behavior to match the fit model, then verify both complete cards and long-attribution swaps in a 360 px browser render before declaring containment.