**Verdict — 94/100 for construction purity.** The build constructs a genuine nested scene in a self-contained HTML file. Several literals outside `CONFIG` still control appearance or layout.

**Findings**

- **The scene is constructed in place.** The source nests `.content` inside `.screen` and creates the title, pill, and result rows from `CONFIG.inner`. `render()` scales the shared `world` and settles the same content throughout the move. The cursor is a CSS polygon built from `CONFIG.cursor.polygon`. The supplied source contains no specimen media, external assets, traced imagery, or captions. The distant text reported in the fit table is the same webpage content that appears at hold. (Recreation source, `construction` and `render()`; fit table, HIT-1 and HIT-2.)
- **−3 for the fit cap and measurement literals.** `Math.min(1, visibleH/naturalH, visibleW/naturalW)` sets the maximum content scale outside `CONFIG`. The two `400` arguments set the font weight used to measure pill and row widths, and the `0.52` fallback can affect the width budget when canvas measurement is unavailable. These values can shape the rendered layout even though the census whitelists them. (Recreation source, `text measurement` and `derived geometry`; config census, §2.)
- **−2 for fallback geometry and timing.** The validation code supplies hard-coded replacements for 11 distinct `CONFIG` fields, counted as four `screenRect` fields and seven top-level scale or timing fields. These values govern the rendered result when validation substitutes them. The deduction is limited because the supplied default configuration does not trigger those substitutions. (Recreation source, `validation`; own-check packet, `s2.default.errors-empty` and `validation.*`.)
- **−1 for page backdrop color.** The stylesheet sets `#111` directly on `html,body`. It is outside the scene stage, which makes it a minor deduction, but it is still a visible palette choice supplied outside `CONFIG`. (Recreation source, `<style>`; config census, §2.)

**Limits** — Scored from the complete source in the supplied packet. Browser checks and measurements were reported by the packet and were not independently rerun. The score applies only to construction purity.

**Body-write: none (read-only run)**

SCORE: 94