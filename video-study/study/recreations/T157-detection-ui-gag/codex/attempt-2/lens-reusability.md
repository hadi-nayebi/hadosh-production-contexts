Verdict: REUSABILITY 94/100 — passes the individual minimum of 70 and exceeds 85. Overall tier remains NOT ASSESSED without the other four lens scores.

Findings:
- CONFIG covers the requested substitutions at real rendering sites: banner text through `bannerT.textContent`, badge position through circle/text coordinates and the transform pivot, colours through SVG attributes, scope geometry through `galaxyPoints`, and bar count through construction loops and calculated widths. The supplied swap checks support banner-text, badge-position, and banner-colour reuse.
- The supplied mutation census reports 103/103 keys consumed. This supports completeness, although consumption alone does not establish useful output across variants.
- Minor positioning constraint: `bannerPoints(cfg)` and `bannerT` both use `cfg.scope.cx`. Production cannot move the banner horizontally independently of the galaxy through CONFIG. Cure: add `banner.cx` and apply it to ribbon geometry and text anchoring.
- Variant safety remains limited: bar width can become nonpositive as count increases, and replacement banner text has no fit guard. Evidence: the `bw` calculation and fixed `banner.fontPx`/`banner.w`. Cure: validate count against panel capacity and add a text-fit check or documented CONFIG limits; demonstrate a changed bar count and longer banner text.

Limits: Stream-only review; no execution or pixel verification. Swap and census results are supplied evidence, not independently reproduced. The stated SHA-256 was not verified.

BODY-WRITE: none (read-only run)
SCORE: 94