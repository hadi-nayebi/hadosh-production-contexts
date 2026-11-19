"use strict";
/* Stage-3 probes: trusted defaults, route parity corpus, validate-before-commit,
   detail-group consumption, dispatch kind-list lock. Read-only. */
const fs = require("fs");
const src = fs.readFileSync(process.argv[2], "utf8");
let fails = 0, checks = 0;
function ok(name, cond, detail) { checks++; if (!cond) fails++; console.log((cond ? "PASS " : "FAIL ") + name + (detail !== undefined ? " :: " + detail : "")); }
function loadPure(s) { const m = s.match(/<script>([\s\S]*?)<\/script>/); const mod = { exports: {} };
  new Function("module", "exports", m[1].replace(/"use strict";/, "") + "\n;return module.exports;")(mod, mod.exports); return mod.exports; }
const P = loadPure(src);
const cfg = P.resolveConfig("");
ok("default resolve clean", cfg._warnings.length === 0, JSON.stringify(cfg._warnings));
ok("CONFIG deep-frozen", Object.isFrozen(P.CONFIG) && Object.isFrozen(P.CONFIG.layout) && Object.isFrozen(P.CONFIG.panels[0]) && Object.isFrozen(P.CONFIG.artRegistry), "");
ok("TRUSTED snapshot equals CONFIG", JSON.stringify(P.TRUSTED_DEFAULTS) === JSON.stringify(P.CONFIG), "");
ok("detail group present with defaults", cfg.detail && cfg.detail.textCutoffUnits === 14 && cfg.detail.graphEdgeMultiplier === 2 && cfg.detail.graphNodeMultiplier === 1.6 && cfg.detail.fallbackEdgeWidth === 1 && cfg.detail.fallbackNodeRadius === 4, JSON.stringify(cfg.detail));
ok("artViewBox origin present", cfg.artViewBox.x === 0 && cfg.artViewBox.y === 0, "");
/* both-routes corpus: each case via cfg: route AND direct route; outcomes must agree in kind */
function warnsFor(search) { return P.resolveConfig(search)._warnings; }
function hasWarn(search, frag) { return warnsFor(search).some(function (w) { return w.indexOf(frag) !== -1; }); }
ok("negative duration cfg: route warns+resets", hasWarn("?cfg:layout.minStagePx=240", "") === false && P.resolveConfig("?approachMs=-5").approachMs === 365 && hasWarn("?approachMs=-5", "approachMs"), JSON.stringify(warnsFor("?approachMs=-5")));
ok("approachFromScale unvalidated before, now guarded (route)", P.resolveConfig("?approachFromScale=5").approachFromScale === 0.88 && hasWarn("?approachFromScale=5", "approachFromScale"), "");
ok("approachFromScale in-range honored", P.resolveConfig("?approachFromScale=0.5").approachFromScale === 0.5, "");
ok("null group no-throw", (function () { try { const c = P.resolveConfig(""); c.layout = null; const w = []; P.validateInto(c, w); return w.some(function (x) { return x.indexOf("layout") === 0; }); } catch (e) { return "THREW " + e.message; } })() === true, "");
ok("whitespace header resets (validateInto)", (function () { const c = P.resolveConfig(""); c.headerText = "   "; const w = []; P.validateInto(c, w); return c.headerText === P.CONFIG.headerText; })(), "");
ok("whitespace title placeholder (validateInto)", (function () { const c = P.resolveConfig(""); c.panels[0].title = "  "; const w = []; P.validateInto(c, w); return c.panels[0].title.indexOf("CHAPTER") === 0; })(), "");
ok("whitespace separator resets (validateInto)", (function () { const c = P.resolveConfig(""); c.labels.separator = "   "; const w = []; P.validateInto(c, w); return c.labels.separator === P.CONFIG.labels.separator; })(), "");
ok("cfg:cut.mode route lands", P.resolveConfig("?cfg:cut.mode=hold").cut.mode === "hold", "");
ok("cfg:detail route lands", P.resolveConfig("?cfg:detail.textCutoffUnits=20").detail.textCutoffUnits === 20, "");
ok("cfg:detail negative rejected like direct", P.resolveConfig("?cfg:detail.textCutoffUnits=-3").detail.textCutoffUnits === 14, "");
ok("boolean padded value trims consistently", P.resolveConfig("?cfg:handoff.holdOnComplete=%20true%20").handoff.holdOnComplete === true, JSON.stringify(warnsFor("?cfg:handoff.holdOnComplete=%20true%20")));
ok("headerBreak route lands + validates", P.resolveConfig("?headerBreak=normal").headerBreak === "normal" && P.resolveConfig("?headerBreak=bogus").headerBreak === "break-word", "");
ok("artDetailMinPx route lands", P.resolveConfig("?artDetailMinPx=45").artDetailMinPx === 45, "");
ok("artViewBox origin route lands", P.resolveConfig("?cfg:artViewBox.x=5").artViewBox.x === 5, "");
/* validate-before-commit */
ok("filled=999 preserves appearances", (function () { const c = P.resolveConfig("?filled=999"); return c.appearances.length === 3 && hasWarn("?filled=999", "filled: out of range"); })(), JSON.stringify(warnsFor("?filled=999")));
ok("filled in-range commits", P.resolveConfig("?filled=5").appearances.length === 1 && P.resolveConfig("?filled=5").appearances[0].filled === 5, "");
ok("registry bad replacement restores prior", (function () { const bad = encodeURIComponent('tiles:[{"t":"bogus"}]'); const c = P.resolveConfig("?registry=" + bad); return !!c.artRegistry.tiles && hasWarn("?registry=" + bad, "prior entry restored"); })(), "");
ok("registry good replacement commits", (function () { const good = encodeURIComponent('tiles:[{"t":"rect","x":1,"y":1,"w":5,"h":5}]'); const c = P.resolveConfig("?registry=" + good); return c.artRegistry.tiles.primitives.length === 1; })(), "");
/* detail consumption: graph below threshold uses detail multipliers/fallbacks */
ok("detail branch consumes CONFIG.detail", (function () {
  const c = P.resolveConfig("");
  const reg = { g: { primitives: [{ t: "graph", nodes: [[0, 0], [10, 10]], edges: [[0, 1]] }] } };
  const out = P.panelArtSVG({ n: "01", title: "X", art: "g" }, c.palette, true, reg, c.artViewBox, "g",
    { strokeWidth: 1, textWeight: "normal", defaultFill: "$ink", defaultStroke: "$ink" },
    { artH: 10, threshold: 30, detailCfg: c.detail });
  return out.indexOf('stroke-width="2"') !== -1 && out.indexOf('r="6.4"') !== -1;
})(), "");
ok("viewBox origin consumed", P.panelArtSVG({ n: "01", title: "X", art: "tiles" }, cfg.palette, true, cfg.artRegistry, { x: 5, y: 7, w: 160, h: 100, preserveAspectRatio: "none" }, "tiles", null, null).indexOf('viewBox="5 7 160 100"') !== -1, "");
/* dispatch lock: PRIM_KINDS == primSVG branch kinds == validPrim case kinds */
(function () {
  const branchKinds = Array.from(new Set(Array.from(src.matchAll(/p\.t === "([a-zA-Z]+)"/g)).map(function (m) { return m[1]; }))).sort();
  const caseKinds = Array.from(new Set(Array.from(src.matchAll(/pr\.t === "([a-zA-Z]+)"/g)).map(function (m) { return m[1]; }))).sort();
  const kinds = (P.PRIM_KINDS || []).slice().sort();
  ok("PRIM_KINDS exported", kinds.length === 9, kinds.join(","));
  ok("renderer branches == PRIM_KINDS", JSON.stringify(branchKinds) === JSON.stringify(kinds), branchKinds.join(","));
  ok("validator cases == PRIM_KINDS", JSON.stringify(caseKinds) === JSON.stringify(kinds), caseKinds.join(","));
  ok("unknown kind renders empty", P.primSVG({ t: "bogus" }, cfg.palette, null) === "", "");
})();
console.log("== stage3 probes: " + checks + " checks, " + fails + " fails ==");
