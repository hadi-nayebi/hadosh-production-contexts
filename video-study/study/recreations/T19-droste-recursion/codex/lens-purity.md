Construction purity passes on the supplied source. No refusal-class defect is evident.

- **No specimen embedding:** `recreation.html` contains no media elements, image references, external asset loads, frame sequences, or screenshot-backed CSS. `buildScene` constructs the scene from DOM elements and CSS gradients.
- **Genuine recursion:** `interior.appendChild(buildScene(cfg, level + 1, stageWidthPx * cfg.levelScale))` calls the same renderer with the same configuration. `cfg.depth` controls termination; nested scenes are not separately authored copies. The direct recursive call establishes this more strongly than the reported node-count tests alone.
- **No evident traced geometry or glyphs:** the figure, candles, staff, curtains, and frame use ordinary boxes, rounded shapes, and gradients. The label and medallion use `textContent` with CONFIG strings and system-font glyphs. There are no specimen-derived paths, contour coordinates, or custom glyph outlines. Source inspection supports this finding but cannot independently establish authoring provenance.
- **CONFIG completeness is overstated:** the opening claim that “every shaping variable” lives in CONFIG conflicts with `buildScene`. Candle spacing and proportions, robe/hood/face geometry, button placement, gradient stops, fold spacing, border width, and label tracking contain fixed shaping values. These remain lawful construction; they are not evidence of tracing. **Cure:** move those values into named CONFIG groups or narrow the claim to distinguish configurable parameters from fixed construction constants.
- **Build-record census needs correction:** the declaration that all stage geometry is CONFIG-priced overlooks backdrop transition offset `G.drapeLeftPercent + 6`. The residual-shaping account also omits unitless `box(...)` geometry and values assembled into CSS strings. **Cure:** extend the census to numeric geometry arguments and generated styles, then reconcile its claims with the actual source.

Purity clears this lens. The deductions concern incomplete configuration coverage and inaccurate purity-account wording, not specimen reuse. This lens alone does not establish the five-lens tier.

SCORE: 92
BODY-WRITE: This return supplies codex/lens-purity.md with the construction-purity verdict, source-priced findings, and CONFIG/census cures for §5 Verify and cycle Condense.
