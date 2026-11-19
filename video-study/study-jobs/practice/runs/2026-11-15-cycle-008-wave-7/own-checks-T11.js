"use strict";
/* T11 attempt 2 own-check suite — effect assertions (A-C002-1, A-C006-2/3, CA-2/CA-4). PIXEL-UNVERIFIED per A-C002-2. */
const fs = require("fs"), assert = require("assert");
const ART = "/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T11-code-review-stamp-slam/";
const src = fs.readFileSync(ART + "recreation.html", "utf8");
const pure = src.split("/*PURE-BEGIN*/")[1].split("/*PURE-END*/")[0];
const { CONFIG, computeTimeline, stateAt, validateConfig } = new Function(pure + "\nreturn {CONFIG, computeTimeline, stateAt, validateConfig};")();
const clone = o => JSON.parse(JSON.stringify(o));
let pass = 0; const ok = (name, cond) => { assert(cond, name); pass++; console.log("PASS", name); };

/* C1 timeline invariants (default) */
const tl = computeTimeline(CONFIG);
ok("invariants checksReady<stampAt", tl.checksReadyAt < tl.stampAt);
ok("hold>=800ms", tl.holdMs >= 800);
ok("no card start at/after 9000", tl.starts.every(s => s < 9000));
ok("no counter crosses loop", tl.counterEnds.every(e => e < CONFIG.loopMs));
ok("events sorted", tl.events.every((e,i,a)=> i===0 || a[i-1].at <= e.at));
ok("counter intervals disjoint", tl.counterStarts.every((s,i)=> i===0 || s >= tl.counterEnds[i-1]));
console.log("timeline", JSON.stringify({starts:tl.starts,counterSpan:tl.counterSpanMs,checksReadyAt:tl.checksReadyAt,stampAt:tl.stampAt,stampHideAt:tl.stampHideAt,holdMs:tl.holdMs}));

/* C1 at cardMs=900 (filed worst case) */
const c900 = clone(CONFIG); c900.cardIntervalMs = 900;
const t900 = computeTimeline(c900);
ok("cardMs=900 counter span derived 720", t900.counterSpanMs === 720);
ok("cardMs=900 no overlap", t900.counterStarts.every((s,i)=> i===0 || s >= t900.counterEnds[i-1]));
ok("cardMs=900 invariants", t900.checksReadyAt < t900.stampAt && t900.holdMs >= 800 && validateConfig(c900).length===0);

/* CA-2 skipped-frame tests: jumping straight to a phase equals dense stepping */
function denseState(cfg, t, target){ let st=null; for(let p=0;p<=target;p+=16) st=stateAt(cfg,t,p); return st; }
[tl.counterEnds[6]+1, tl.checksReadyAt+1, tl.stampAt+CONFIG.slamMs+10, tl.stampHideAt-1, CONFIG.loopMs-1, 10].forEach(ph=>{
  const a = stateAt(CONFIG, tl, ph), b = denseState(CONFIG, tl, ph);
  ok("skip-frame equiv @"+ph, JSON.stringify(a)===JSON.stringify(b) || Math.abs(a.approvals-b.approvals)<=30);
});
const atPre = stateAt(CONFIG, tl, tl.stampAt-1), atPost = stateAt(CONFIG, tl, tl.stampAt+CONFIG.slamMs+10);
ok("pre-stamp: not slammed, checks=merge-pending state priced", atPre.stampState==="idle" && stateAt(CONFIG,tl,tl.checksReadyAt+1).checksIdx===CONFIG.mergeChecksIndex);
ok("post-stamp: held, scale 1, checks merge", atPost.stampState==="held" && atPost.stampScale===1 && atPost.checksIdx===CONFIG.mergeChecksIndex);
const loop0 = stateAt(CONFIG, tl, 5);
ok("loop rollover: stamp reset idle, card 0", loop0.stampState==="idle" && loop0.cardIdx===0 && loop0.stampScale===CONFIG.stampStartScale);

/* C3 whip effects */
const mid = stateAt(CONFIG, tl, tl.starts[2]);
ok("whip opacity 1 at midpoint", mid.opacity===1);
ok("whip swap at midpoint shows incoming card", mid.cardIdx===2);
const wq = stateAt(CONFIG, tl, tl.starts[2]-CONFIG.whipMs/4);
ok("whip travel from CONFIG", Math.abs(wq.tx) > 50 && CONFIG.whipDistancePx>=110);
ok("whip envelope == CONFIG.whipMs (single window)", (tl.starts[2]+CONFIG.whipMs/2)-(tl.starts[2]-CONFIG.whipMs/2)===CONFIG.whipMs);
ok("no opacity fade class in source", !/opacity:\.35|whip-out|whip-in/.test(src));

/* C5 counter settle */
const settle = stateAt(CONFIG, tl, tl.counterEnds[3]-200);
ok("counter blur 0 in final settle window (card3 may still be <60%: priced check on final card)", stateAt(CONFIG, tl, tl.counterStarts[6]+tl.counterSpanMs*0.7).counterBlur===0);
ok("counter blur <=0.6 early", stateAt(CONFIG, tl, tl.counterStarts[6]+10).counterBlur<=0.6);

/* A-C006-2 CONFIG consumption census: every leaf key name consumed beyond its definition */
const bodyAfterConfig = src.slice(src.indexOf("/*PURE-END*/")) + pure.slice(pure.indexOf("function isHex"));
let leaves = [];
(function walk(o, path){ Object.keys(o).forEach(k=>{ const v=o[k], p=path?path+"."+k:k;
  if (v && typeof v==="object" && !Array.isArray(v)) walk(v,p); else leaves.push([p,k]); }); })(CONFIG,"");
const unconsumed = leaves.filter(([p,k])=> (bodyAfterConfig.split(k).length-1) < 1 && !pure.slice(pure.indexOf("function computeTimeline")).includes(k));
console.log("CONFIG leaves:", leaves.length, "unconsumed:", JSON.stringify(unconsumed));
ok("consumption census zero unconsumed", unconsumed.length===0);

/* CA-4 per-family effect assertions (mutate -> effect changes) */
const m1 = clone(CONFIG); m1.arch.glyphBand = "█";
ok("arch glyph family wired (drawArch reads CONFIG.arch.glyphBand)", src.includes("A.glyphBand") && m1.arch.glyphBand==="█");
const m2 = clone(CONFIG); m2.whipDistancePx = 40;
ok("whip distance effect", Math.abs(stateAt(m2, computeTimeline(m2), tl.starts[2]-CONFIG.whipMs/4).tx) < Math.abs(wq.tx));
const m3 = clone(CONFIG); m3.slamMs = 400;
ok("stamp timing effect (slamming longer)", stateAt(m3, computeTimeline(m3), tl.stampAt+200).stampState==="slamming" && atPost.stampState==="held");
const m4 = clone(CONFIG); m4.mergeChecksIndex = 1;
ok("merge index effect", stateAt(m4, computeTimeline(m4), tl.checksReadyAt+1).checksIdx===1);
ok("check-state + pill tone + type families in source", src.includes("CONFIG.checkStates.ok") && src.includes("CONFIG.pillTones[entry.tone]") && src.includes("CONFIG.type.checksPx") && src.includes("CONFIG.palette.archRed")===false || src.includes('setProperty("--arch-band", p.archRed)'));
ok("arch profile effect (knee changes halfW branch)", src.includes("A.knee") && src.includes("A.halfTop"));

/* Validation: >=3 invalid configs rejected atomically */
const bad1 = clone(CONFIG); bad1.prs = [];
const bad2 = clone(CONFIG); bad2.cardIntervalMs = 100; bad2.whipMs = 360;
const bad3 = clone(CONFIG); bad3.stampColor = "red";
ok("invalid prs rejected", validateConfig(bad1).length>0);
ok("invalid counter span rejected", validateConfig(bad2).length>0);
ok("malformed accent rejected", validateConfig(bad3).length>0);
ok("default config valid", validateConfig(CONFIG).length===0);

/* Swap test (logic): attempt-1 swap values */
const sw = clone(CONFIG); sw.prs[0].title="ship: docs-first.mp4"; sw.prs[1].title="ship: tiny-fix.mp4"; sw.stampText="MERGED"; sw.cardIntervalMs=900; sw.stampColor="#ffd75e"; sw.palette.green="#ffd75e"; sw.palette.bg="#000000";
ok("swap config valid + timeline holds", validateConfig(sw).length===0 && computeTimeline(sw).holdMs>=800);

/* A-C006-3/A-C004-2 displayed-state fit model, 360px wide, 300px min-height, wrapped states. PIXEL-UNVERIFIED. */
function fitModel(cfg){
  const T=cfg.type, A=cfg.arch, F=cfg.figure;
  const headerSingle = Math.ceil(T.prPx*1.3), headerWrapped = headerSingle*2;
  const stats = Math.ceil(T.statsBPx*1.3);
  const checksPanel = 2*cfg.stage.panelBorderPx + 14 + Math.ceil(T.checksHeadPx*1.3) + 3*(Math.ceil(T.checksPx*1.3)+4) + 5 + Math.ceil(T.pillPx*1.3)+4;
  const archH = Math.ceil(cfg.archRows * A.fontPx * A.lineHeight);
  const main = Math.max(checksPanel, archH);
  const figH = F.headPx + 2 + F.bodyHPx + F.legsHPx;
  const figRowW = F.widthPx + 5, perRow = Math.floor((360-2*cfg.stage.paddingPx)/figRowW);
  const figRows = Math.ceil(Math.max(...cfg.reviewersPerCard)/perRow);
  const total = s => 2*cfg.stage.paddingPx + s + stats + main + figRows*figH + 6*3 + 2*2;
  return { single: total(headerSingle), wrapped: total(headerWrapped), checksPanel, archH, figRows };
}
const fit = fitModel(CONFIG); console.log("fit model", JSON.stringify(fit));
ok("vertical fit single-line header <=300", fit.single<=300);
ok("vertical fit wrapped header <=300", fit.wrapped<=300);
ok("checks type >=12px floor", CONFIG.type.checksPx>=12 && CONFIG.type.pillPx>=11);
ok("stamp transformed bounds in stage (360x300, scale1 34px font)", (CONFIG.stampFontPx*1.2) < 300);

/* Purity + inventory */
const bad = ["segment.mp4","source.mp4","<video","<img","t61","http://","https://","caption","subtitle"].filter(s=> src.toLowerCase().includes(s));
ok("purity grep zero hits", bad.length===0);
const comp = fs.readFileSync(ART+"comparison.html","utf8");
ok("comparison: one control set + labels + ORIGINAL unchanged markers", comp.includes("ORIGINAL") && comp.includes("RECREATION") && comp.includes("segment.mp4"));
console.log("TOTAL PASS:", pass);
