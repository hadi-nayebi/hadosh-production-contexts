Readability is mostly strong at 360px width, but the receipt has a height-dependent clipping risk that the geometry model misses.

The supplied source overrides the question’s older dimensions: below 520px, the left column and cards are **94% wide**, and the phone is **320px wide** at a 360px viewport.

| Text | Preferred `vw` size at 360px | Resolved size |
|---|---:|---:|
| LED line | 9.36px | **14px** |
| Receipt header | 10.08px | **15px** |
| Receipt rows | 8.64px | **14px** |
| Post card | 10.8px | **16px** |
| System title | 10.08px | **15px** |
| System reset | 8.64px | **14px** |
| Prompt bubble | 10.08px | **15px** |
| Reply bubble | 9.36px | **14px** |

None of this default substantive copy falls below a reasonable phone-reading floor. The 14px text is modest rather than generous; the receipt’s monospace face and 21px row spacing help.

**Horizontal fit:** the receipt has approximately **307px of text width**. Its default rows fit without wrapping. Rows use `white-space:normal` and `overflow-wrap:anywhere` at every breakpoint, so longer rows wrap rather than remain a clipped horizontal line. The default reply fits within approximately **248px of available text width**, naturally wrapping to roughly two lines. The prompt also fits.

**The receipt’s vertical fit is not guaranteed.** The default model produces 141px of paper, but the wrapper receives `141/430 = 32.79%` height. That percentage resolves against the actual left column, whose height is only **56% of the stage**. Consequently, the fully fed wrapper is just **18.36% of stage height**: approximately **117.5px at 360×640**. The actual receipt likely needs roughly 132–135px, depending on font metrics. Because the wrapper hides overflow, the final row can be cut during the completed receipt hold. Testing the model’s 141px against its modelled cap does not check this actual CSS relationship.

**Contrast is sufficient** for the default colors: dark ink on cream paper, amber on near-black LED, pale reply text on charcoal, and pale system text on dark gray. The reset’s 85% opacity still leaves strong contrast.

The receipt follows the torso in normal flex flow, so it does not cover torso text. At ordinary portrait heights, the cards sit below it. The phone intentionally covers the central card and receipt text after entry; those texts have an earlier unobstructed hold.

No rendered pixel check confirms font metrics, exact line breaks, clipping, or short-height collisions. Width alone cannot establish vertical readability.

BODY-WRITE: Replace the receipt wrapper’s model-derived percentage height with fed pixel height, or derive it from measured column geometry; verify the complete final row at 360×640 before claiming phone readability.
SCORE: 78
