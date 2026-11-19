Verdict: **Reusability passes at 88/100.** CONFIG supports a different piece without source edits. Overall attempt passage remains NOT ASSESSED until all five lens scores are combined.

1. **CONFIG binding is substantially complete.** `recreation.html` CONFIG, `build()`, `renderHeadlineInto()`, `gridCSS()`, and `enterP()` bind content, separate headline/tile timings, geometry, typography, line-heights, palette, and easing. `stepAnchors()` preserves shared `atMs` defaults. No material subject-shaping literal was found outside CONFIG; measurement constants and diagnostic chrome are reasonable structural exceptions.

2. **Array replacement and step generalization are supported.** `deepMerge()` replaces arrays wholesale, including headline spans. An independent Node probe confirmed a one-step override leaves exactly one step and derives both anchors from `atMs:100`. The packet’s S3 atomic checks and S4 three-step/style-swap checks support broader reuse. The demonstrated row fits arithmetically: `3×104 + 2×8 = 328 ≤ 360`.

3. **Validation is useful but incomplete—the principal remaining defect.** `recreation.html:80–123` rejects the named anchor, duration, step-content, and row-capacity errors. However, independent probes found:
   - `{"stage":null}` throws before returning structured errors.
   - `{"stage":{"width":"bad"}}`, `{"geom":{"tileH":-1}}`, and `{"type":null}` are accepted.
   - An unknown `enterEasing` is accepted and silently uses cubic easing (`enterP()`, lines 128–133).

   **Next-attempt cure:** validate nested object shapes before dereferencing; validate finite dimensions, font sizes, line-heights, geometry ranges, and supported easing/style values. Return every failure through `{cfg:null, errors:[...]}` so the existing banner path can display it. Add regression cases for these exact overrides.

4. **Swap evidence is credible but bounded.** The packet explicitly covers words, timing, palette, changed operative style, and three steps. Its “64 leaves / zero unconsumed” and full-suite totals remain supplied evidence rather than independently reproduced census results.

Limits: Disk SHA-256 matches the binding. Assessment used source inspection and targeted Node probes; browser rendering, visible error-banner behavior, and pixel fit were not independently verified. No files were changed.

SCORE: 88
Body-write: none (read-only run)