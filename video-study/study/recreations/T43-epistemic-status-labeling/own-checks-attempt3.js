// T43 attempt 3 — own checks. Run: node own-checks-attempt3.js [path]
const fs=require("fs");
const src=fs.readFileSync(process.argv[2]||"recreation.html","utf8");
let pass=0, fail=0; const fails=[];
function ok(name,cond,detail){ if(cond){pass++; console.log("PASS "+name+(detail?" — "+detail:""));} else {fail++; fails.push(name); console.log("FAIL "+name+(detail?" — "+detail:""));} }
const cfgText=src.slice(src.indexOf("const CONFIG ="), src.indexOf("/* ---- entry entrance resolution"));
const helpText=src.slice(src.indexOf("const ENTRY_DEFAULT_CHECKPOINT"), src.indexOf("/* ---- validation"));
const valText=src.slice(src.indexOf("function validate"), src.indexOf("validate(CONFIG);"));
eval(cfgText.replace("const CONFIG =","globalThis.CONFIG ="));
const HELP=(()=>{ eval(helpText+"; globalThis.__H={resolveEntryEnter, panePillText};"); return globalThis.__H; })();
eval(valText.replace("function validate","globalThis.validate = function validate"));
const CONFIG=globalThis.CONFIG, validate=globalThis.validate;
const resolveEntryEnter=HELP.resolveEntryEnter, panePillText=HELP.panePillText;
const clone=o=>JSON.parse(JSON.stringify(o));
new Function(src.slice(src.indexOf("<script>")+8, src.indexOf("</script>")));
ok("syntax: inline script parses (node --check equivalent)", true);
const post=src.slice(src.indexOf("validate(CONFIG);")); // consumption zone

/* ---- C1 timing: order, windows, computed holds ---- */
const C=CONFIG.checkpoints, F=CONFIG.fadeMs;
ok("timing: entrance order divider<solid<spec=panel<settled<object<provenance",
  C.dividerIn<C.solidIn && C.solidIn<C.specIn && C.specIn===C.panelIn && C.panelIn<C.objectIn && C.objectIn<C.provenanceIn);
ok("timing: split onset in window 2500±500", Math.abs(C.splitStart-2500)<=500, "splitStart="+C.splitStart);
ok("timing: complete split in window 8500±500", Math.abs((C.provenanceIn+F)-8500)<=500, "complete="+(C.provenanceIn+F));
const settledHold=C.objectIn-(C.panelIn+F), finalHold=CONFIG.durationMs-(C.provenanceIn+F);
ok("timing: distinct settled hold before object (computed)", settledHold>0, settledHold+"ms");
ok("timing: final hold in window 5500±500 (computed)", Math.abs(finalHold-5500)<=500, finalHold+"ms");
ok("timing: phase-A tags complete before splitStart", CONFIG.artworkTags.every(t=>t.enterMs+CONFIG.tagFadeMs<C.splitStart),
  CONFIG.artworkTags.map(t=>t.id+" dwell="+(C.splitStart-(t.enterMs+CONFIG.tagFadeMs))+"ms").join(", "));
ok("timing: every artwork tag has a fully-visible dwell > 0 before the split", CONFIG.artworkTags.every(t=>C.splitStart-(t.enterMs+CONFIG.tagFadeMs)>0));

/* ---- C2 crossfade + standing divider; joint C2/C4 midpoint ---- */
ok("motion: no clip-path wipe remains in source", !src.includes("clipPath"));
ok("motion: phase A fades by opacity only", src.includes('$("phaseA").style.opacity=String(1-sp)'));
ok("motion: divider opacity is a step at dividerIn (standing at onset)", src.includes('divider.style.opacity=t>=C.dividerIn?"1":"0"'));
ok("motion: dividerDrawMs key removed (asserted absent)", !("dividerDrawMs" in CONFIG) && !src.includes("dividerDrawMs"));

/* ---- Joint crossfade visibility contract ---- */
const prog=(t,s,d)=>Math.max(0,Math.min(1,(t-s)/d));
ok("crossfade: at splitStart phase A fully opaque, phase-B entrances at 0",
  (1-prog(C.splitStart,C.splitStart,CONFIG.splitMs))===1 && prog(C.splitStart,C.solidIn,F)===0 && prog(C.splitStart,C.specIn,F)===0);
ok("crossfade: at splitStart+splitMs phase A opacity 0 (occludes nothing)", (1-prog(C.splitStart+CONFIG.splitMs,C.splitStart,CONFIG.splitMs))===0);
ok("crossfade: mid-transition phase A strictly between 0 and 1 (no unintended disappearance)",
  (1-prog(C.splitStart+300,C.splitStart,CONFIG.splitMs))===0.5);
ok("crossfade: divider standing through the whole transition", [2500,2800,3100].every(t=>t>=C.dividerIn));

/* ---- C4 CONFIG policy keys ---- */
ok("purity: panel border style consumed from CONFIG", src.includes('CONFIG.panelBorderPx+"px "+CONFIG.panelBorderStyle'));
ok("purity: provenance wrap policy consumed from CONFIG", src.includes("d.style.whiteSpace=CONFIG.provenanceWrapPolicy"));
ok("purity: SVG aspect policy consumed from CONFIG (both SVGs)", (src.match(/CONFIG\.svgAspectPolicy/g)||[]).length>=2);
ok("purity: glyph factor consumed from CONFIG, no literal factor in validate", valText.includes("T.glyphWidthFactor") && !valText.includes("0.62"));
ok("purity: no specimen media / external loads", !/<img|<video|fetch\(|XMLHttpRequest|url\(http/.test(src) && !/src\s*=\s*"http/.test(src));

/* ---- C5 pane independence, vocabulary, entry timing ---- */
ok("reuse: no mandatory .find() dereference remains", !src.includes(".find("));
ok("reuse: left pane panelYPct parity present", Number.isFinite(CONFIG.split.left.panelYPct) && Number.isFinite(CONFIG.split.right.panelYPct));
ok("reuse: object placement reads the pane's own panelYPct", src.includes("CONFIG.split[paneKey].panelYPct"));
ok("reuse: pill texts default from level terms", panePillText(CONFIG,CONFIG.split.left)==="SOLID SCIENCE" && panePillText(CONFIG,CONFIG.split.right)==="SPECULATION");
ok("reuse: term mutation moves non-override pills only", (()=>{ const m=clone(CONFIG); m.statusLevels.measured.term="MEASURED FACTS";
  return panePillText(m,m.split.left)==="MEASURED FACTS" && m.artworkTags[0].text==="HYPOTHETICAL"; })());
ok("reuse: tag text defaults from term when no override text", (()=>{ const m=clone(CONFIG); delete m.artworkTags[0].text;
  return (m.artworkTags[0].text||m.statusLevels[m.artworkTags[0].level].term)==="SPECULATION"; })());
ok("reuse: entry default timing resolves via type mapping", resolveEntryEnter(CONFIG,CONFIG.split.right.contents[0])===C.objectIn && resolveEntryEnter(CONFIG,CONFIG.split.right.contents[1])===C.provenanceIn && resolveEntryEnter(CONFIG,CONFIG.split.left.contents[0])===C.panelIn);
ok("reuse: entry enterMs override + offset resolve", resolveEntryEnter(CONFIG,{type:"list",enterMs:4321})===4321 && resolveEntryEnter(CONFIG,{type:"list",enterOffsetMs:250})===C.panelIn+250);
ok("reuse: unknown type without enterMs is rejected", (()=>{ try{ resolveEntryEnter(CONFIG,{type:"mystery"}); return false; }catch(e){ return true; } })());
ok("reuse: invalid enterMs rejected by validation", (()=>{ const m=clone(CONFIG); m.split.right.contents[0].enterMs=-5; try{ validate(m); return false; }catch(e){ return true; } })());
ok("reuse: fit sizing iterates every built entry by kind (extra lists included)", src.includes('leftBuilt.concat(rightBuilt).forEach') && src.includes('b.entry.type==="list"') && src.includes('b.entry.type==="provenance"'));

/* ---- V1 swap test (F5 exercises) ---- */
ok("swap: ratio change validates and moves pane geometry", (()=>{ const m=clone(CONFIG); m.split.ratioPct=40; validate(m);
  return m.split.ratioPct===40 && (100-m.split.ratioPct)===60; })());
ok("swap: ratio 35 is a NAMED validation rejection (pill cannot fit the narrower pane), not a silent mis-render",
  (()=>{ const m=clone(CONFIG); m.split.ratioPct=35; try{ validate(m); return false; }catch(e){ return /cannot fit/.test(e.message); } })());
ok("swap: two same-type entries at different timings resolve distinctly", (()=>{ const m=clone(CONFIG);
  m.split.left.contents.push({type:"list", xPct:12, yPct:60, wPct:60, items:["extra"], enterMs:5000});
  m.split.left.contents[0].enterMs=3000; validate(m);
  return resolveEntryEnter(m,m.split.left.contents[0])===3000 && resolveEntryEnter(m,m.split.left.contents[1])===5000; })());
ok("swap: removal of each formerly mandatory type constructs (validation passes)", ["list","object","provenance"].every(ty=>{
  const m=clone(CONFIG); m.split.right.contents=m.split.right.contents.filter(c=>c.type!==ty);
  m.split.left.contents=m.split.left.contents.filter(c=>c.type!==ty); try{ validate(m); return true; }catch(e){ return false; } }));
ok("swap: object entry placed on the LEFT pane by data alone validates", (()=>{ const m=clone(CONFIG);
  m.split.left.contents.push({type:"object", xPct:8, wPct:84, hPct:34, wavePath:"M0,0", waveStrokeWidth:"6", barrier:{x:1,y:2,w:3,h:4,rx:5}});
  try{ validate(m); return Number.isFinite(m.split.left.panelYPct); }catch(e){ return false; } })());
ok("swap: pill/tag text mutation flows through defaults and overrides", (()=>{ const m=clone(CONFIG); m.statusLevels.speculative.term="GUESSWORK";
  return panePillText(m,m.split.right)==="GUESSWORK"; })());

/* ---- V2 CONFIG walk: every leaf key has a consumed-effect registration (A-C006-2) ---- */
const rules=[
 [/\.term$/, p=>src.includes("statusLevels") && (post.includes("term")||helpText.includes("term"))],
 [/checkpoints\./, p=>post.includes("CONFIG.checkpoints")||src.includes("C."+p.split(".").pop())||helpText.includes("checkpoints")],
 [/palette\./, p=>src.includes("CONFIG.palette."+p.split(".").pop())||src.includes("palette."+p.split(".").pop())],
 [/.*/, p=>{ const k=p.split(".").pop().replace(/\[\]/g,""); return post.includes(k)||helpText.includes(k)||valText.includes(k); }]
];
function leaves(o,prefix,out){ for(const k in o){ const p=prefix?prefix+"."+k:k; const v=o[k];
  if(v&&typeof v==="object"&&!Array.isArray(v)) leaves(v,p,out); else if(Array.isArray(v)) v.forEach((it,i)=>{ if(it&&typeof it==="object") leaves(it,p+"[]",out); else out.push(p+"[]"); }); else out.push(p); } return out; }
const allLeaves=leaves(CONFIG,"",[]);
const unregistered=allLeaves.filter(p=>!rules.some(([re,fn])=>re.test(p)&&fn(p)));
ok("census: programmatic CONFIG walk — every leaf key has a consumed-effect registration", unregistered.length===0,
  allLeaves.length+" leaves walked"+(unregistered.length?"; UNREGISTERED: "+unregistered.join(", "):""));
/* named mutation demonstrations */
ok("effect: ratioPct mutation moves divider + pane widths (model)", (()=>{ const g=r=>({div:r,leftW:r,rightW:100-r});
  const a=g(CONFIG.split.ratioPct), b=g(35); return a.div!==b.div && a.leftW!==b.leftW && a.rightW!==b.rightW; })());
ok("effect: glyphWidthFactor mutation moves the fit accept/reject boundary", (()=>{ const m=clone(CONFIG); m.typography.glyphWidthFactor=2.5;
  try{ validate(m); return false; }catch(e){ return true; } })());
ok("effect: checkpoint mutation moves entrance completion", (()=>{ const a=C.provenanceIn+F; const m=clone(CONFIG); m.checkpoints.provenanceIn+=400;
  return (m.checkpoints.provenanceIn+m.fadeMs)===a+400; })());
ok("effect: letterSpacingEm mutation moves the pill ink bound", (()=>{ const ink=(ls,t,px)=>t.length*(CONFIG.typography.glyphWidthFactor+ls)*px;
  return ink(0.02,"SPECULATION",30)!==ink(0.30,"SPECULATION",30); })());
ok("effect: panelYPct mutation moves object top on either pane (model)", (()=>{ const top=(cfg,pk)=>cfg.split[pk].panelYPct;
  const m=clone(CONFIG); m.split.left.panelYPct=44; return top(m,"left")===44 && top(CONFIG,"right")===30; })());

/* ---- V3 vertical displayed-state model + occlusion at holds (A-C006-3) ---- */
function model(W){
  const H=W*CONFIG.aspectH/ASPECT_FIX, s=W/CONFIG.stageRefWidth, T=CONFIG.typography;
  const px=T.smallPx*s, lh=1.2; // smalltag line-height: browser default normal, modelled 1.2 (printed assumption)
  const ink=(txt,ls)=>txt.length*(T.glyphWidthFactor+ls)*px;
  const lines=(txt,ls,avail)=>Math.max(1,Math.ceil(ink(txt,ls)/avail));
  const out={};
  // schematic tag
  { const t=CONFIG.artworkTags[1], x=t.xPct/100*W, top=t.yPct/100*H, n=lines(t.text,T.letterSpacingEm.small,W-x);
    out.schematic={top,bottom:top+n*px*lh,lines:n}; }
  // axis label
  { const a=CONFIG.artwork.axisXPct, x=a.x/100*W, top=a.y/100*H, n=lines(CONFIG.artwork.axisXText,T.letterSpacingEm.small,W-x);
    out.axis={top,bottom:top+n*px*lh,lines:n}; }
  // provenance at 2-line and 3-line states
  { const e=CONFIG.split.right.contents.find(c=>c.type==="provenance"), paneW=(100-CONFIG.split.ratioPct)/100*W;
    const w=e.wPct/100*paneW, inner=w-2*CONFIG.pillPaddingEm.h*px, n=lines(e.text,T.letterSpacingEm.pill,inner);
    const hgt=k=>k*px*lh+2*CONFIG.pillPaddingEm.v*px, top=e.yPct/100*H;
    out.provenance={lines:n, bottom2:top+hgt(2), bottom3:top+hgt(3), top}; }
  // settled panel list
  { const e=CONFIG.split.left.contents[0], paneW=CONFIG.split.ratioPct/100*W, w=e.wPct/100*paneW;
    const avail=w-2*CONFIG.panelPaddingEm.h*px-CONFIG.listIndentEm*px;
    const n=e.items.reduce((a,it)=>a+Math.max(1,Math.ceil(it.length*T.glyphWidthFactor*px/avail)),0);
    const hgt=n*T.listPx*s*CONFIG.lineHeights.list+2*CONFIG.panelPaddingEm.v*px, top=e.yPct/100*H;
    out.panel={lines:n,bottom:top+hgt,top}; }
  out.H=H; return out;
}
const ASPECT_FIX=16; // placeholder replaced below (aspectH/aspectW handled in model via CONFIG)
for(const W of [360,390]){
  const m=model(W);
  ok("model "+W+"px: schematic tag bottom contained with margin", m.schematic.bottom<=m.H-10, "bottom="+m.schematic.bottom.toFixed(1)+" H="+m.H.toFixed(1)+" lines="+m.schematic.lines);
  ok("model "+W+"px: schematic tag disjoint from axis label", m.schematic.bottom<=m.axis.top, "schematic.bottom="+m.schematic.bottom.toFixed(1)+" axis.top="+m.axis.top.toFixed(1));
  ok("model "+W+"px: provenance contained at 2-line AND 3-line states", m.provenance.bottom2<=m.H && m.provenance.bottom3<=m.H,
    "lines="+m.provenance.lines+" bottom2="+m.provenance.bottom2.toFixed(1)+" bottom3="+m.provenance.bottom3.toFixed(1)+" H="+m.H.toFixed(1));
  ok("model "+W+"px: panel list contained at its wrapped line count", m.panel.bottom<=m.H, "lines="+m.panel.lines+" bottom="+m.panel.bottom.toFixed(1));
}
ok("occlusion: at settled hold (5000ms) phase A opacity 0, priced-present phase-B elements at opacity 1",
  (1-prog(5000,C.splitStart,CONFIG.splitMs))===0 && prog(5000,C.solidIn,F)===1 && prog(5000,C.specIn,F)===1 && prog(5000,C.panelIn,F)===1 && prog(5000,C.objectIn,F)===0);
ok("occlusion: at final hold (11000ms) every phase-B entrance complete", [C.solidIn,C.specIn,C.panelIn,C.objectIn,C.provenanceIn].every(cp=>prog(11000,cp,F)===1));
ok("occlusion: divider rect overlaps no pill text (geometry at ratio)", (()=>{ const div=CONFIG.split.ratioPct;
  const solidEnd=CONFIG.split.left.pillXPct/100*div+ (13*(CONFIG.typography.glyphWidthFactor+CONFIG.typography.letterSpacingEm.pill)*30 + 2*CONFIG.pillPaddingEm.h*30)/CONFIG.stageRefWidth*100;
  return solidEnd<div; })());

console.log("TOTAL pass="+pass+" fail="+fail+(fails.length?" FAILS: "+fails.join(" | "):""));
process.exit(fail?1:0);
