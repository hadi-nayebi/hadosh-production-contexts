"use strict";
/* T23 attempt 8 — STAGE 3 suite (C4 panelsJson route · C5 maxLines restriction branch). */
const fs = require("fs");
const DIR = process.env.HOME + "/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T23-comic-chapter-map/";
function loadPure(file) {
  const src = fs.readFileSync(DIR + file, "utf8");
  const js = src.split("<script>")[1].split("</script>")[0];
  const mod = { exports: {} };
  new Function("module", "exports", js)(mod, mod.exports);
  return { M: mod.exports, src };
}
let pass = 0, fail = 0; const fails = [];
function ck(name, cond) { if (cond) { pass++; console.log("PASS " + name); } else { fail++; fails.push(name); console.log("FAIL " + name); } }
const fin = loadPure("recreation.html"); const M = fin.M, cfg = M.resolveConfig("");
const prev = loadPure("recreation-attempt-7.html"); const P7 = prev.M;
/* C4 */
(function () {
  const titles = ["A|B", "C@D", "  Spaced  Title  ", "MiXeD | @ Both", "semi;colon & <tag>"];
  const c = M.resolveConfig("?panelsJson=" + encodeURIComponent(JSON.stringify(titles)));
  ck("S3 C4 panelsJson: reserved characters | and @, whitespace, case, punctuation all survive verbatim in one title each",
    titles.every(function (t, i) { return c.panels[i].title === t; }) && c.panels.length === 12);
  const obj = M.resolveConfig("?panelsJson=" + encodeURIComponent(JSON.stringify([{ title: "Obj | Title", art: "ship", n: "99" }])));
  ck("S3 C4 panelsJson object entry: title verbatim, art + number land", obj.panels[0].title === "Obj | Title" && obj.panels[0].art === "ship" && obj.panels[0].n === "99");
  const bad = M.resolveConfig("?panelsJson=" + encodeURIComponent("{not json"));
  ck("S3 C4 malformed panelsJson warns by name, defaults intact", bad._warnings.some(function (w) { return w.indexOf("panelsJson") >= 0; }) && bad.panels[0].title === cfg.panels[0].title);
  const legacy = M.resolveConfig("?panels=" + encodeURIComponent("Alpha|Beta@ship"));
  ck("S3 C4 legacy panels route unchanged: | splits entries, @ splits title/art (documented contract)",
    legacy.panels[0].title === "Alpha" && legacy.panels[1].title === "Beta" && legacy.panels[1].art === "ship");
  ck("S3 C4 before (attempt 7): panelsJson was an unknown key", P7.resolveConfig("?panelsJson=" + encodeURIComponent('["A|B"]'))._warnings.some(function (w) { return w.indexOf("panelsJson") >= 0 && w.indexOf("unknown") >= 0; }));
})();
/* C5 — restriction branch (no render route; stage-0 discovery filed) */
(function () {
  [3, 4].forEach(function (n) {
    const c = M.resolveConfig("?cfg:labels.maxLines=" + n);
    ck("S3 C5 maxLines=" + n + " rejected by name, surface restricted to the implemented 2",
      c.labels.maxLines === 2 && c._warnings.some(function (w) { return w.indexOf("maxLines") >= 0; }));
  });
  const lay = M.computeLayout(cfg, 360);
  const innerW = lay.panelW - cfg.borderPx * 2, innerH = lay.panelH - cfg.borderPx * 2;
  const text07 = cfg.panels[6].n + cfg.labels.separator + cfg.panels[6].title;
  const pol2 = M.labelPolicy(cfg, text07, innerW, M.labelBasePx(cfg, innerW), innerH);
  const c1 = M.resolveConfig("?cfg:labels.maxLines=1");
  const pol1 = M.labelPolicy(c1, text07, innerW, M.labelBasePx(c1, innerW), innerH);
  ck("S3 C5 exposed capability == implemented capability: maxLines 2 lays out two lines; maxLines 1 forbids them",
    pol2.mode === "two-line" && pol2.lines.length === 2 && pol1.mode !== "two-line");
  ck("S3 C5 default query still warning-free after the restriction", cfg._warnings.length === 0);
})();
console.log("STAGE3 TOTAL: " + pass + " pass / " + fail + " fail");
if (fails.length) console.log("FAILS: " + fails.join(" | "));
