"use strict";
/* Attempt-10 legs: fit table, config census, literal census, CSS parse. Read-only, prints only. */
const fs = require("fs");
const src = fs.readFileSync(process.argv[2], "utf8");
function loadPure(s) { const m = s.match(/<script>([\s\S]*?)<\/script>/); const mod = { exports: {} };
  new Function("module", "exports", m[1].replace(/"use strict";/, "") + "\n;return module.exports;")(mod, mod.exports); return mod.exports; }
const P = loadPure(src);
const cfg = P.resolveConfig("");
console.log("## FIT TABLE");
[240, 360, 520, 960].forEach(function (w) {
  const lay = P.computeLayout(cfg, w);
  const innerW = lay.panelW - cfg.borderPx * 2, innerH = lay.panelH - cfg.borderPx * 2;
  const pol7 = P.labelPolicy(cfg, cfg.panels[6].n, cfg.panels[6].title, innerW, P.labelBasePx(cfg, innerW), innerH);
  const artH = P.resolvedArtRect(cfg, lay, 6).h;
  console.log("| " + w + " | " + lay.cols + " | " + lay.panelW.toFixed(1) + " | " + lay.panelH.toFixed(1) + " | " + lay.headerMode + " / " + lay.headerPx + " | " + pol7.mode + " @" + pol7.px.toFixed(2) + ", lines " + JSON.stringify(pol7.lines) + " | " + artH.toFixed(1) + " |");
});
[240, 360].forEach(function (w) {
  const lay = P.computeLayout(cfg, w);
  const innerW = lay.panelW - cfg.borderPx * 2, innerH = lay.panelH - cfg.borderPx * 2;
  const modes = cfg.panels.map(function (p) { const pol = P.labelPolicy(cfg, p.n, p.title, innerW, P.labelBasePx(cfg, innerW), innerH); return p.n + ":" + pol.mode + "@" + pol.px.toFixed(2); });
  console.log("MODES " + w + ": " + modes.join(" "));
});
console.log("## CONFIG CENSUS");
(function () {
  const leaves = [];
  (function walk(o, path) { Object.keys(o).forEach(function (k) { const v = o[k]; const p = path ? path + "." + k : k;
    if (v && typeof v === "object" && !Array.isArray(v)) walk(v, p); else leaves.push(p); }); })(P.CONFIG, "");
  /* consumption: the leaf's key name referenced in the script body outside the CONFIG literal,
     or (palette/artRegistry data) referenced as data. Panels/appearances entries are data consumed by iteration. */
  const scriptBody = src.slice(src.indexOf("function validateInto"));
  const unconsumed = [];
  leaves.forEach(function (p) {
    const key = p.split(".").pop();
    if (p.indexOf("palette.") === 0) { if (scriptBody.indexOf('"' + key + '"') === -1 && src.indexOf("$" + key) === -1 && scriptBody.indexOf("palette." + key) === -1 && !/palette\b/.test(scriptBody)) unconsumed.push(p); return; }
    if (p.indexOf("panels") === 0 || p.indexOf("appearances") === 0 || p.indexOf("artRegistry") === 0) return; /* data arrays consumed by iteration/lookup */
    if (scriptBody.indexOf(key) === -1) unconsumed.push(p);
  });
  console.log("leaves=" + leaves.length + " unconsumed=" + unconsumed.length + (unconsumed.length ? " :: " + unconsumed.join(", ") : ""));
  console.log("leaf paths: " + leaves.join(", "));
})();
console.log("## LITERAL CENSUS (numeric literals in code outside CONFIG, excluding 0/1/-1/2)");
(function () {
  const body = src.slice(src.indexOf("const TRUSTED_DEFAULTS"));
  const nums = {};
  const re = /(?<![\w.])(\d+\.?\d*)(?![\w])/g; let m;
  while ((m = re.exec(body)) !== null) { const v = m[1]; if (["0", "1", "2"].indexOf(v) !== -1) continue; nums[v] = (nums[v] || 0) + 1; }
  console.log(JSON.stringify(nums));
})();
console.log("## CSS PARSE");
(function () {
  const m = src.match(/<style>([\s\S]*?)<\/style>/);
  const css = m[1];
  let depth = 0, bad = false; for (const ch of css) { if (ch === "{") depth++; if (ch === "}") depth--; if (depth < 0) bad = true; }
  const rules = css.split("}").filter(function (r) { return r.trim(); }).length;
  console.log("balanced=" + (!bad && depth === 0) + " rules=" + rules + " bytes=" + css.length);
  const sels = Array.from(css.matchAll(/([.#\w][^{]*)\{/g)).map(function (x) { return x[1].trim(); });
  console.log("selectors: " + sels.join(" | "));
})();
