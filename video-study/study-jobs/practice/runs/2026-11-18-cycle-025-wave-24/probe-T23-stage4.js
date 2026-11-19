"use strict";
/* Stage-4 probes: feasibility mirror, headerBreak, overlap accounting, resolved artH. Read-only. */
const fs = require("fs");
const src = fs.readFileSync(process.argv[2], "utf8");
let fails = 0, checks = 0;
function ok(name, cond, detail) { checks++; if (!cond) fails++; console.log((cond ? "PASS " : "FAIL ") + name + (detail !== undefined ? " :: " + detail : "")); }
function loadPure(s) { const m = s.match(/<script>([\s\S]*?)<\/script>/); const mod = { exports: {} };
  new Function("module", "exports", m[1].replace(/"use strict";/, "") + "\n;return module.exports;")(mod, mod.exports); return mod.exports; }
const P = loadPure(src);
const cfg = P.resolveConfig("");
ok("default resolve clean", cfg._warnings.length === 0, JSON.stringify(cfg._warnings));
/* feasibility mirror: paddingPx=100 at fallback width must be caught */
(function () {
  const c = P.resolveConfig("?cfg:layout.paddingPx=100");
  const lay = P.computeLayout(c, 240);
  ok("paddingPx=100 produces warnings (infeasible caught)", c._warnings.length > 0, JSON.stringify(c._warnings.slice(0, 3)));
  ok("post-validation layout at 240 is feasible or geometry restored", lay.panelW - c.borderPx * 2 >= c.layout.minInnerWPx || c.layout.paddingPx !== 100, "panelW=" + lay.panelW.toFixed(2) + " paddingPx=" + c.layout.paddingPx);
})();
/* headerBreak: normal forbids the wrap fallback */
(function () {
  const long = "X".repeat(110);
  const bw = P.headerFitPx(cfg, long, 240, 11);
  const cN = P.resolveConfig("?headerBreak=normal");
  const nm = P.headerFitPx(cN, long, 240, 11);
  ok("break-word permits wrap mode", bw.mode === "wrap", bw.mode);
  ok("normal forbids wrap mode", nm.mode !== "wrap", nm.mode);
  const hh = P.headerHeightFor(cN, 240, nm);
  ok("normal header height does not grow", hh.lines === 1, JSON.stringify(hh));
})();
/* overlap accounting in resolvedArtRect */
(function () {
  const lay = P.computeLayout(cfg, 360);
  const r0 = P.resolvedArtRect(cfg, lay, 6);
  const cO = P.resolveConfig("?cfg:layout.tabOverlapPx=5");
  const layO = P.computeLayout(cO, 360);
  const rO = P.resolvedArtRect(cO, layO, 6);
  ok("overlap raises art rect origin by the overlap", Math.abs((r0.y - rO.y) - 5) < 0.001 && Math.abs((rO.h - r0.h) - 5) < 0.001, "y " + r0.y.toFixed(2) + "->" + rO.y.toFixed(2) + " h " + r0.h.toFixed(2) + "->" + rO.h.toFixed(2));
  ok("overlap beyond band resets with warning", (function () { const c = P.resolveConfig("?cfg:layout.tabOverlapPx=60"); return c.layout.tabOverlapPx === 0 && c._warnings.some(function (w) { return w.indexOf("tabOverlapPx") !== -1; }); })(), "");
})();
/* C-10-14: detail branch priced on the resolved art height, not the proxy */
(function () {
  const lay = P.computeLayout(cfg, 360);
  const p7 = cfg.panels[6];
  const resolvedH = P.resolvedArtRect(cfg, lay, 6).h;
  ok("panel 07 resolved artH is the band-cleared height (~26.28)", Math.abs(resolvedH - 26.28) < 0.6, resolvedH.toFixed(2));
  const defs = { strokeWidth: 1, textWeight: "normal", defaultFill: "$ink", defaultStroke: "$ink" };
  /* shipped-registry fact: panel 07's inscription is size 21, above the
     detail cutoff — the branch cannot change shipped output for it.
     Discrimination therefore uses a detail-sensitive synthetic kind
     priced at panel 01's slot (resolved 22.53 < threshold 30 < proxy 37.71). */
  const synReg = { syn: { primitives: [{ t: "text", x: 10, y: 10, size: 9, content: "SMALL" }, { t: "graph", nodes: [[0, 0], [10, 10]], edges: [[0, 1]] }] } };
  const synPanel = { n: "01", title: "X", art: "syn" };
  const viaResolved = P.panelArtSVG(synPanel, cfg.palette, true, synReg, cfg.artViewBox, "syn", defs, { artH: P.resolvedArtRect(cfg, lay, 0).h, threshold: cfg.artDetailMinPx, detailCfg: cfg.detail });
  const viaProxy = P.panelArtSVG(synPanel, cfg.palette, true, synReg, cfg.artViewBox, "syn", defs, { artH: (lay.panelH - cfg.borderPx * 2) * 0.62, threshold: cfg.artDetailMinPx, detailCfg: cfg.detail });
  ok("resolved-height detail output differs from proxy output (branch engages)", viaResolved !== viaProxy, "resolved " + viaResolved.length + "B vs proxy " + viaProxy.length + "B");
  ok("small inscription suppressed at resolved height, kept at proxy height", viaResolved.indexOf("SMALL") === -1 && viaProxy.indexOf("SMALL") !== -1, "");
  ok("render() consumes resolvedArtRect for artH (source)", src.indexOf("artH: resolvedArtRect(cfg, lay, i).h") !== -1, "");
  ok("tab anchor uses alignSelf (source)", src.indexOf('tab.style.alignSelf = "flex-end"') !== -1 && src.indexOf('tab.style.right = "0"') === -1, "");
})();
console.log("== stage4 probes: " + checks + " checks, " + fails + " fails ==");
