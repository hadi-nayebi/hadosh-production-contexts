"use strict";
const fs = require("fs");
const DIR = process.env.HOME + "/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T23-comic-chapter-map/";
function loadPure(file) {
  const src = fs.readFileSync(DIR + file, "utf8");
  const js = src.split("<script>")[1].split("</script>")[0];
  const mod = { exports: {} };
  new Function("module", "exports", js)(mod, mod.exports);
  return { M: mod.exports, src };
}
const { M } = loadPure(process.argv[2] || "recreation.html");
const cfg = M.resolveConfig("");
console.log("warnings:", JSON.stringify(cfg._warnings));
[240, 360].forEach(function (W) {
  const lay = M.computeLayout(cfg, W);
  console.log("WIDTH " + W + " cols=" + lay.cols + " panelW=" + lay.panelW.toFixed(2) + " panelH=" + lay.panelH.toFixed(2) + " headerMode=" + lay.headerMode + " headerPx=" + lay.headerPx);
  cfg.panels.forEach(function (p, i) {
    const innerW = lay.panelW - cfg.borderPx * 2, innerH = lay.panelH - cfg.borderPx * 2;
    const pol = M.labelPolicy(cfg, p.n, p.title, innerW, M.labelBasePx(cfg, innerW), innerH);
    const ra = M.resolvedArtRect(cfg, lay, i);
    console.log("  panel " + p.n + " mode=" + pol.mode + " px=" + pol.px.toFixed(2) + " lines=" + JSON.stringify(pol.lines) + " artH=" + ra.h.toFixed(2) + " bandH=" + ra.bandH.toFixed(2));
  });
});
console.log("easing dive f(0.75)=" + M.easingFraction(cfg.layout.diveEasing, 0.75).toFixed(4) + " f(0.5)=" + M.easingFraction(cfg.layout.diveEasing, 0.5).toFixed(4));
console.log("timeline total=" + M.buildTimeline(cfg).totalMs + " approach=" + cfg.approachMs + " dive=" + cfg.diveMs);
console.log("feasible paddingPx=100 probe: see stage checks");
