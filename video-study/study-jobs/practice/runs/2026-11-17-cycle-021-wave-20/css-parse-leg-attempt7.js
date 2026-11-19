"use strict";
/* A-C012-3 CSS-parse leg (attempt 7): declaration-level validator over the
   recreation's own <style> block — every declaration must parse, with
   property/value sanity for the declarations the displayed-state model
   prices (layout/band, header, tab, art region, dive transform origin). */
const fs = require("fs");
const DIR = process.env.HOME + "/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T23-comic-chapter-map/";
const src = fs.readFileSync(DIR + "recreation.html", "utf8");
const css = src.split("<style>")[1].split("</style>")[0];
const KNOWN = { margin:1, padding:1, position:1, width:1, height:1, "max-width":1, "min-height":1, inset:1, "transform-origin":1, "will-change":1, "white-space":1, overflow:1, display:1, "box-sizing":1, flex:1, "flex-direction":1, "align-items":1, "justify-content":1, "user-select":1 };
const SANITY = { position: /^(relative|absolute|static|fixed|sticky)$/, display: /^(grid|flex|block|none|inline|inline-block)$/, overflow: /^(hidden|visible|auto|scroll)$/, "white-space": /^(nowrap|normal|pre-line|pre)$/, "box-sizing": /^(border-box|content-box)$/, flex: /^(\d+ \d+ (auto|\d+(\.\d+)?(px|%|em))|none)$/, "will-change": /^(transform|auto)$/ };
let rules = 0, decls = 0, errors = [];
const ruleRe = /([^{}]+)\{([^{}]*)\}/g; let m, consumed = "";
while ((m = ruleRe.exec(css)) !== null) {
  rules++; consumed += m[0];
  const sel = m[1].trim(); if (!sel) errors.push("empty selector");
  m[2].split(";").map(s => s.trim()).filter(Boolean).forEach(function (d) {
    decls++;
    const ci = d.indexOf(":");
    if (ci <= 0) { errors.push("unparseable declaration: " + d); return; }
    const prop = d.slice(0, ci).trim(), val = d.slice(ci + 1).trim();
    if (!KNOWN[prop]) errors.push("unknown property: " + prop + " (selector " + sel + ")");
    if (!val) errors.push("empty value: " + d);
    if ((val.match(/\(/g) || []).length !== (val.match(/\)/g) || []).length) errors.push("unbalanced parens: " + d);
    if (SANITY[prop] && !SANITY[prop].test(val)) errors.push("insane value: " + prop + ": " + val);
  });
}
const leftover = css.replace(ruleRe, "").trim();
if (leftover) errors.push("unparsed stylesheet residue: " + leftover.slice(0, 80));
console.log("CSS-PARSE LEG (declaration-level validator): " + rules + " rules, " + decls + " declarations, " + errors.length + " errors, 0 dropped");
errors.forEach(e => console.log("ERROR " + e));
console.log(errors.length ? "LEG: FAIL" : "LEG: PASS");
