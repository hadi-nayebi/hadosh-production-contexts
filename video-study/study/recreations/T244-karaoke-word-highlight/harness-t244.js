"use strict";
/* T244 harness — loads CONFIG + pure logic from recreation.html, asserts A11 census checkpoints. */
const fs = require("fs");
const html = fs.readFileSync(__dirname + "/recreation.html", "utf8");
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
const pure = script.split("/* ---- renderer")[0];
const { CONFIG, stateAt, deriveWordOnsets, lerpColor } = eval(pure + "\n;({ CONFIG, stateAt, deriveWordOnsets, lerpColor })");
let pass = 0, fail = 0;
function chk(name, expr, instant, raw, ok){
  console.log((ok ? "PASS" : "FAIL") + " " + name + " | expr: " + expr + " | instant: " + instant + " | raw: " + raw);
  ok ? pass++ : fail++;
}
function prefixOK(fills){ for (let i = 1; i < fills.length; i++) if (fills[i] > fills[i-1] + 1e-9) return false; return true; }
function fullCount(fills){ return fills.filter(f => f >= 1).length; }
const C = CONFIG;
// CP0 — carry-in line L0 active before L1 onset; instant derived from lines[1].onsetMs
let inst = C.lines[1].onsetMs - C.segmentStartMs - 250;
let st = stateAt(C, inst);
chk("CP0", "lines[1].onsetMs - segmentStartMs - 250", inst, "activeLine=" + st.activeLine + " fills=" + st.fills.map(f=>f.toFixed(2)).join(","), st.activeLine === 0 && prefixOK(st.fills) && fullCount(st.fills) >= 1);
// CP1 — census f-74.5: L1 bright prefix exactly 2 full words
inst = C.lines[1].onsetMs - C.segmentStartMs + 500; st = stateAt(C, inst);
chk("CP1", "lines[1].onsetMs - segmentStartMs + 500 (census f-74.5)", inst, "activeLine=" + st.activeLine + " fills=" + st.fills.map(f=>f.toFixed(2)).join(","), st.activeLine === 1 && fullCount(st.fills) === 2 && prefixOK(st.fills));
// CP2 — L2 onset instant derived from lines[2].onsetMs
inst = C.lines[2].onsetMs - C.segmentStartMs; st = stateAt(C, inst);
chk("CP2", "lines[2].onsetMs - segmentStartMs", inst, "activeLine=" + st.activeLine, st.activeLine === 2);
// CP3 — census f-76.5: L2 mid-sweep
inst = C.lines[2].onsetMs - C.segmentStartMs + 1000; st = stateAt(C, inst);
chk("CP3", "lines[2].onsetMs - segmentStartMs + 1000 (census f-76.5)", inst, "activeLine=" + st.activeLine + " fills=" + st.fills.map(f=>f.toFixed(2)).join(","), st.activeLine === 2 && fullCount(st.fills) >= 1 && fullCount(st.fills) < st.fills.length && prefixOK(st.fills));
// CP4 — L2 complete during hold; instant derived from lines[2].displayEndMs
inst = C.lines[2].displayEndMs - C.segmentStartMs - 50; st = stateAt(C, inst);
chk("CP4", "lines[2].displayEndMs - segmentStartMs - 50", inst, "activeLine=" + st.activeLine + " fills=" + st.fills.map(f=>f.toFixed(2)).join(","), st.activeLine === 2 && fullCount(st.fills) === st.fills.length);
// CP5 — census f-78.5: L3 mid-sweep
inst = C.lines[3].onsetMs - C.segmentStartMs + 500; st = stateAt(C, inst);
chk("CP5", "lines[3].onsetMs - segmentStartMs + 500 (census f-78.5)", inst, "activeLine=" + st.activeLine + " fills=" + st.fills.map(f=>f.toFixed(2)).join(","), st.activeLine === 3 && fullCount(st.fills) >= 1 && fullCount(st.fills) < st.fills.length && prefixOK(st.fills));
// CP6 — census f-79.5: L3 complete or L4 active
inst = C.lines[4].onsetMs - C.segmentStartMs + 20; st = stateAt(C, inst);
chk("CP6", "lines[4].onsetMs - segmentStartMs + 20 (census f-79.5)", inst, "activeLine=" + st.activeLine + " fills=" + st.fills.map(f=>f.toFixed(2)).join(","), (st.activeLine === 3 && fullCount(st.fills) === st.fills.length) || st.activeLine === 4);
// CP7 — census f-80.5: L4 bright head, rest dim (prefix property)
inst = C.lines[4].onsetMs - C.segmentStartMs + 1020; st = stateAt(C, inst);
chk("CP7", "lines[4].onsetMs - segmentStartMs + 1020 (census f-80.5)", inst, "activeLine=" + st.activeLine + " fills=" + st.fills.map(f=>f.toFixed(2)).join(","), st.activeLine === 4 && fullCount(st.fills) >= 1 && fullCount(st.fills) < st.fills.length && prefixOK(st.fills));
// CP8 — census f-81.5: L4 near-complete
inst = C.lines[4].endMs - C.segmentStartMs - 80; st = stateAt(C, inst);
chk("CP8", "lines[4].endMs - segmentStartMs - 80 (census f-81.5)", inst, "activeLine=" + st.activeLine + " fills=" + st.fills.map(f=>f.toFixed(2)).join(","), st.activeLine === 4 && fullCount(st.fills) >= 4);
// GAP — blank inter-line gap: instant derived from lines[2].displayEndMs + 200 (census h-77.60 band empty)
inst = C.lines[2].displayEndMs - C.segmentStartMs + 200; st = stateAt(C, inst);
chk("GAP", "lines[2].displayEndMs - segmentStartMs + 200", inst, "activeLine=" + st.activeLine, st.activeLine === -1);
// PREVIEW — all-dim preview: instant derived from lines[4].onsetMs - previewMs + 50 (census h-80.40 all-dim state class)
inst = C.lines[4].onsetMs - C.previewMs - C.segmentStartMs + 50; st = stateAt(C, inst);
chk("PREVIEW", "lines[4].onsetMs - previewMs - segmentStartMs + 50", inst, "activeLine=" + st.activeLine + " fills=" + st.fills.map(f=>f.toFixed(2)).join(","), st.activeLine === 4 && fullCount(st.fills) === 0);
// SWEEP-MOVE — CONFIG timing swap (brightenMs 120->360) moves the transition midpoint of L1 word 2
const line1 = C.lines[1], on2 = deriveWordOnsets(C, line1)[2];
const midDefault = (on2 - C.segmentStartMs) + C.brightenMs / 2;
const C2 = JSON.parse(JSON.stringify(C)); C2.brightenMs = 360;
const midSwap = (deriveWordOnsets(C2, C2.lines[1])[2] - C2.segmentStartMs) + C2.brightenMs / 2;
const stMid = stateAt(C2, midSwap);
chk("SWEEP-MOVE", "deriveWordOnsets(lines[1])[2] - segmentStartMs + brightenMs/2", midDefault + " -> " + midSwap, "delta=" + (midSwap - midDefault) + " fill@midSwap(word2)=" + stMid.fills[2].toFixed(2), midSwap - midDefault === 120 && Math.abs(stMid.fills[2] - 0.5) < 1e-9);
// SWAP — different words + timing + palette (CONFIG-only swap)
const S = JSON.parse(JSON.stringify(C));
S.dir = "ltr"; S.brightenMs = 300; S.spokenColor = "#ffd23f"; S.dimColor = "#3d5a80";
S.lines = [
  { words: ["hope","is","not","failure"], onsetMs: 74000, endMs: 76200, displayEndMs: 76600 },
  { words: ["it","is","borrowed","light"], onsetMs: 76600, endMs: 78800, displayEndMs: 79200 },
  { words: ["and","it","returns"], onsetMs: 79200, endMs: 81200, displayEndMs: 81600 }
];
const sInst = S.lines[0].onsetMs - S.segmentStartMs + 1100;
const sSt = stateAt(S, sInst);
chk("SWAP-WORDS", "swap lines[0].onsetMs - segmentStartMs + 1100", sInst, "activeLine=" + sSt.activeLine + " fills=" + sSt.fills.map(f=>f.toFixed(2)).join(","), sSt.activeLine === 0 && prefixOK(sSt.fills) && fullCount(sSt.fills) >= 1);
chk("SWAP-PALETTE", "lerpColor(swap dimColor, swap spokenColor, 1)", "n/a", lerpColor(S.dimColor, S.spokenColor, 1), lerpColor(S.dimColor, S.spokenColor, 1) === "rgb(255,210,63)" && lerpColor(C.dimColor, C.spokenColor, 1) === "rgb(255,255,255)");
console.log("SUMMARY: " + pass + " PASS / " + fail + " FAIL");
process.exit(fail ? 1 : 0);
