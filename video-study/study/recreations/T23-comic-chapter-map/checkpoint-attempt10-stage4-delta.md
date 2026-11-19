# Checkpoint — attempt 10, stage 4 (delta form)

Predecessor: stage-3 source, sha256 `f98fa7a3430d0e35880f537452426ee1da4e28eabb4191ce4790f4f2b3e09201`.
Stage-4 source: `recreation.html` sha256 `ae227c05b60f7122ab44b34320b35177d1bbc1de4e08ed657edcd8e6118468d8`.
Reconstruction: apply deltas 1–3, then these edits in order.

1. validateInto feasibility: `const pw = (r.refW - cfg.gapPx * (cols + 1)) / cols;` → the computeLayout-mirroring form `const padPx = typeof cfg.layout.paddingPx === "number" ? cfg.layout.paddingPx : cfg.gapPx; const pw = (r.refW - padPx * 2 - cfg.gapPx * (cols - 1)) / cols;` (with its comment).
2. headerFitPx: before the wrap return insert the headerBreak gate — `if (cfg.headerBreak === "normal") return { px: absMinPx, fits: false, mode: "floor" };` (with its comment).
3. resolvedArtRect: bandH becomes `Math.min(Math.max(0, tabBandHeightPx(cfg, pol) - cfg.layout.tabOverlapPx), Math.max(0, innerH))` (with its comment).
4. validateInto: after the tabOverlapPx numGuard insert the band-priced overlap validation block (computes the smallest tab band at the fallback stage width via computeLayout/labelPolicy/tabBandHeightPx; an overlap meeting/exceeding it resets with a named warning).
5. render(): the panelArtSVG detail argument's artH `(lay.panelH - cfg.borderPx * 2) * 0.62` → `resolvedArtRect(cfg, lay, i).h`.
6. render(): tab anchor `tab.style.left = "auto"; tab.style.right = "0";` → `tab.style.alignSelf = "flex-end";`.
