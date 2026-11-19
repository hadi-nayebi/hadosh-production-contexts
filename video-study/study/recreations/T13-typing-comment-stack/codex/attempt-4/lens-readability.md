Readability is promising but the source does not support the claimed phone-size floor or complete containment.

At 1916px, modelled titles are comfortably large (35.45px), with substantial horizontal space. Light text against the dark typing and landed backgrounds has strong contrast; the yellow “Slopcore” mark supports recognition. Partial text, a caret, and a distinct active-card tint make typing understandable.

At 360px and 390px, the long titles are modelled as two lines, but the model differs from CSS: descendant `cqw` units resolve against the stage’s **content box**, while `modelFor()` uses its full border-box width. After narrow-stage padding, supporting text is approximately **11.35px at 360px**, below the stated 12px floor, and **12.30px at 390px**. Titles are approximately 13.22px and 14.32px respectively. Validation at the nominal 360px model does not enforce the actual displayed floor.

Completed-stack containment also remains uncertain. The model applies configured header and footer line heights that the stylesheet does not consistently consume; several claimed weight bindings are likewise absent. The rotated stamp is checked for width, but not for overlap with post text. These gaps matter particularly with the wide stack’s limited vertical margin. Caret-only wrapping may separate the cursor from its partial title; the supplied logic checks do not establish how that reads visually.

The disclosed absence of rendered evidence appropriately limits confidence: full-title wrapping, intermediate caret states, and final-stack visibility at both phone widths remain unverified. The “HITS: 0” and complete joint-fitting claims exceed what the source supports.

BODY-WRITE: Correct the fitting model to use the CSS query container’s content width, bind modelled line heights and weights to their actual elements, and require rendered 360px/390px checks before claiming the phone floor and complete-stack legibility.
SCORE: 72