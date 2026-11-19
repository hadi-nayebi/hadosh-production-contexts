Purity verdict: PASS — 96/100. Overall pool exit remains NOT ASSESSED without the other four lens scores.

- Construction follows CONFIG: `cfg.elements` generates every settlement instance; `gridToScreen` derives positions; tile boundaries and independent row/column loops derive geometry from configured dimensions.
- `glyphPath(kind,cfg)` supplies reusable, code-drawn glyphs with configured palettes and selected dimensions. Its fixed local shape coordinates define glyph types, rather than tracing individual scene instances. The static SVG contains only background and container scaffolding.
- Rocket geometry derives from configured dimensions and ratios. Cloud geometry, layer membership, opacity, and movement follow CONFIG. No specimen media, embedded imagery, or separately hardcoded scene instances appear in the supplied source.
- Minor deduction: several reusable geometry values remain outside CONFIG—for example tree dimensions, hut dimensions, pen stroke width, and rocket corner radius. These limit parameter coverage without constituting per-element literals.

Limits: Source-only review; supplied test claims were not independently executed, the hash was not verified, and rendered appearance was not assessed.

SCORE: 96
BODY-WRITE: none (read-only run); this advisory return is for the consumer to file in attempt-2/ and scores.md.