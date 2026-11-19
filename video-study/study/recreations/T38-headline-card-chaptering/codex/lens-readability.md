Readability does **not pass** this lens: the Einstein card has a substantial text collision, and the fit evidence does not establish separation between elements.

- **Card 2, formula and legend:** at 360px, the formula begins at y≈55px and the legend at y≈61px. The centered 28.8px formula occupies the same horizontal region as the right-aligned legend, particularly its first two lines. Both use bright ink with no separating background. Cure: allocate distinct formula and legend regions, then check their rendered bounds.
- **Card 1, headline/provenance:** the reported measurements leave only about **5.5px** between headline ink and chip ink. That is fragile because PIL DejaVu does not verify the declared Segoe UI/Arial/Helvetica browser font stack. Cure: reserve an explicit gap or place provenance on a separate row.
- **Fit evidence:** individual ink widths fitting nominal boxes do not prove that positioned elements avoid one another. The takeaway’s reported 320px ink width plus 18.72px horizontal padding fits within 360px, but actual browser layout remains unverified.

The configured sizes meet the approximate 11px floor at 360px. White/lavender text against violet and dark ink on the colored pills provide strong palette contrast. Those strengths do not cure the competing formula and legend.

Verification limitation: no rendered frame was available; the attempted environment inspection failed because the tool host could not start. This judgment uses the supplied CSS and measurements.

SCORE: 68
BODY-WRITE: This return supplies the readability verdict and prioritized cures for codex/lens-readability.md; no file was written directly.
