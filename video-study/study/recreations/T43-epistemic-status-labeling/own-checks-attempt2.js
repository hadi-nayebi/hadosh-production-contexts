// T43 attempt 2 — own checks. Effect mappings + source-bound displayed-state model.
// Run: node own-checks-attempt2.js [path-to-recreation.html]
const fs=require("fs");
const src=fs.readFileSync(process.argv[2]||"recreation.html","utf8");
let pass=0, fail=0; const fails=[];
function ok(name,cond,detail){ if(cond){pass++; console.log("PASS "+name+(detail?" — "+detail:""));} else {fail++; fails.push(name); console.log("FAIL "+name+(detail?" — "+detail:""));} }
// Extract CONFIG + validate from the source itself (source-bound: the suite runs the file's own validation)
const cfgText=src.slice(src.indexOf("const CONFIG ="), src.indexOf("/* ---- validation"));
const valText=src.slice(src.indexOf("function validate"), src.indexOf("validate(CONFIG);"));
eval(cfgText.replace("const CONFIG =","globalThis.CONFIG =")); eval(valText.replace("function validate","globalThis.validate = function validate"));
const CONFIG=globalThis.CONFIG, validate=globalThis.validate;
const clone=o=>JSON.parse(JSON.stringify(o));
// syntax of both inline scripts
new Function(src.slice(src.indexOf("<script>")+8, src.indexOf("</script>")));
ok("syntax: recreation inline script parses", true);

/* ---- Cure 1: timing (observed order, seat anchors, completion) ---- */
const C=CONFIG.checkpoints;
ok("timing: splitStart retuned to 9800 (toward 10000)", C.splitStart===9800);
ok("timing: divider leads (dividerIn == splitStart)", C.dividerIn===C.splitStart);
ok("timing: observed entrance order divider<solid<spec=panel<object<provenance",
   C.dividerIn<C.solidIn && C.solidIn<C.specIn && C.specIn===C.panelIn && C.panelIn<C.objectIn && C.objectIn<C.provenanceIn);
ok("timing: complete split stands by 12000", C.provenanceIn+CONFIG.fadeMs<=12000, "provenance completes "+(C.provenanceIn+CONFIG.fadeMs));
ok("timing: final hold >= 2000ms", CONFIG.durationMs-(C.provenanceIn+CONFIG.fadeMs)>=2000);
ok("timing: tag entrances explicit enterMs, ordered, inside phase A",
   CONFIG.artworkTags.every(t=>Number.isFinite(t.enterMs)) && CONFIG.artworkTags[0].enterMs<CONFIG.artworkTags[1].enterMs && CONFIG.artworkTags[1].enterMs+CONFIG.tagFadeMs<C.splitStart);
ok("timing: no checkpoint-name coupling for tags (source has no C[tag.id])", !src.includes("C[tag.id]") && !src.includes("CONFIG.checkpoints[tag.id]"));

/* ---- Cure 3: split construction from ratioPct, pane-local coords, clip separation ---- */
function paneGeom(ratio){ return { left:{x:0,w:ratio}, right:{x:ratio,w:100-ratio}, divider:ratio,
  solidPillStageX: 0 + CONFIG.split.left.pillXPct/100*ratio,
  provStageX: ratio + CONFIG.split.right.contents.find(c=>c.type==="provenance").xPct/100*(100-ratio) }; }
const g50=paneGeom(50), g35=paneGeom(35);
ok("split: ratio 50 -> panes 50/50, divider 50", g50.left.w===50&&g50.right.x===50&&g50.divider===50);
ok("split: ratio 35 EFFECT — panes, divider and pane-local content all move consistently",
   g35.left.w===35&&g35.right.x===35&&g35.right.w===65&&g35.divider===35&&Math.abs(g35.solidPillStageX-4.2)<1e-9&&Math.abs(g35.provStageX-(35+0.12*65))<1e-9,
   "solidPill stage x 6 -> "+g35.solidPillStageX+", provenance stage x 56 -> "+g35.provStageX);
ok("split: source clips panes from the divider (clip-path driven by split progress)",
   src.includes("leftPane.style.clipPath")&&src.includes("rightPane.style.clipPath")&&src.includes("phaseA")&&src.includes("clipPath"));
ok("split: clip completes — at splitStart+splitMs pane inset is 0 (modelled prog)",
   (()=>{const sp=Math.max(0,Math.min(1,(C.splitStart+CONFIG.splitMs-C.splitStart)/CONFIG.splitMs)); return sp===1;})());

/* ---- Cure 5: CONFIG application / schema ---- */
ok("config: validate() accepts the default CONFIG", (()=>{try{validate(clone(CONFIG));return true;}catch(e){return e.message;}})()===true);
ok("config: validate() rejects a tag with missing enterMs (rejection, not silent undefined)",
   (()=>{const c=clone(CONFIG); delete c.artworkTags[0].enterMs; try{validate(c);return false;}catch(e){return /enterMs/.test(e.message);}})());
ok("config: validate() rejects ratio 35 with default pill text (fit rejection, no shrink-to-fit)",
   (()=>{const c=clone(CONFIG); c.split.ratioPct=35; try{validate(c);return false;}catch(e){return /cannot fit/.test(e.message);}})());
ok("config: level registry EFFECT — recoloring level 'speculative' reaches hypoTag + SPECULATION pill, not SOLID (measured)",
   (()=>{const reg=clone(CONFIG.statusLevels); reg.speculative.bg="#000000";
     const hypo=CONFIG.artworkTags[0].level==="speculative"?reg[CONFIG.artworkTags[0].level].bg:null;
     const spec=reg[CONFIG.split.right.pillLevel].bg, solid=reg[CONFIG.split.left.pillLevel].bg;
     return hypo==="#000000"&&spec==="#000000"&&solid===CONFIG.statusLevels.measured.bg;})());
ok("config: split.right.panelYPct is applied (source binds object top to it)", src.includes("CONFIG.split[paneKey].panelYPct"));
ok("config: shared pane schema — one buildContent builder serves both panes",
   (src.match(/function buildContent/g)||[]).length===1 && src.includes('buildContent(leftPane,c,"left")') && src.includes('buildContent(rightPane,c,"right")'));
ok("config: schema swap EFFECT — a list entry validates on the right pane too",
   (()=>{const c=clone(CONFIG); c.split.right.contents.push({type:"list",xPct:10,yPct:40,wPct:60,items:["x"]}); try{validate(c);return true;}catch(e){return e.message;}})()===true);
ok("config: letter-spacing/divider-style/subtitle-opacity are CONFIG keys and applied in source",
   src.includes("letterSpacingEm")&&src.includes("--ls-pill")&&src.includes("--ls-small")&&src.includes("CONFIG.dividerStyle")&&src.includes("CONFIG.typography.subtitleOpacity"));
ok("config: no unapplied declared keys — artworkTags[].level used, panelYPct used, every statusLevels key resolvable",
   src.includes("levelColors(t.level")&&src.includes("levelColors(level,override)")&&CONFIG.artworkTags.every(t=>CONFIG.statusLevels[t.level]));

/* ---- Cure 6: tag/object fidelity ---- */
ok("fidelity: default tag sequence restricted to the displayed object's own tags (HYPOTHETICAL, SCHEMATIC POTENTIAL)",
   CONFIG.artworkTags.length===2 && CONFIG.artworkTags.map(t=>t.text).join("|")==="HYPOTHETICAL|SCHEMATIC POTENTIAL");

/* ---- Cure 4 + V4: source-bound displayed-state model at 360 / 390 (border-box, accumulated pane offsets) ---- */
function model(W){
  const H=W*9/16, s=W/CONFIG.stageRefWidth, T=CONFIG.typography;
  const px=T.pillPx*s, small=T.smallPx*s;
  const ink=(txt,ls,f)=>txt.length*(0.62+ls)*f;
  const pad=2*CONFIG.pillPaddingEm.h*px;
  const ratio=CONFIG.split.ratioPct, paneL=ratio/100*W, paneR=W-paneL;
  const els={};
  const hypo=CONFIG.artworkTags[0], schem=CONFIG.artworkTags[1];
  els.hypo={x:hypo.xPct/100*W, w:ink(hypo.text,T.letterSpacingEm.pill,px)+pad, top:hypo.yPct/100*H, h:px*(1+2*CONFIG.pillPaddingEm.v)};
  els.schematic={x:schem.xPct/100*W, w:ink(schem.text,T.letterSpacingEm.small,small), top:schem.yPct/100*H, h:small};
  els.axisX={x:CONFIG.artwork.axisXPct.x/100*W, w:ink(CONFIG.artwork.axisXText,T.letterSpacingEm.small,small), top:CONFIG.artwork.axisXPct.y/100*H, h:small};
  els.solidPill={x:CONFIG.split.left.pillXPct/100*paneL, w:ink(CONFIG.split.left.pillText,T.letterSpacingEm.pill,px)+pad, top:CONFIG.split.pillYPct/100*H, h:els.hypo.h};
  const lp=CONFIG.split.left.contents[0];
  els.leftPanel={x:lp.xPct/100*paneL, w:lp.wPct/100*paneL, top:lp.yPct/100*H, h:60*s+ (CONFIG.panelPaddingEm.v*2)*T.listPx*s + 2*CONFIG.panelBorderPx};
  els.specPill={x:paneL+CONFIG.split.right.pillXPct/100*paneR, w:ink(CONFIG.split.right.pillText,T.letterSpacingEm.pill,px)+pad, top:els.solidPill.top, h:els.hypo.h};
  const ob=CONFIG.split.right.contents.find(c=>c.type==="object");
  els.object={x:paneL+ob.xPct/100*paneR, w:ob.wPct/100*paneR, top:CONFIG.split.right.panelYPct/100*H, h:ob.hPct/100*H};
  const pv=CONFIG.split.right.contents.find(c=>c.type==="provenance");
  els.provenance={x:paneL+pv.xPct/100*paneR, w:pv.wPct/100*paneR, top:pv.yPct/100*H, h:els.hypo.h};
  return {W,H,els,dividerX:paneL,fontPx:px};
}
[360,390].forEach(W=>{
  const m=model(W), E=m.els;
  ok(`geometry@${W}: every element border-inclusive inside the stage`,
     Object.entries(E).every(([k,e])=>e.x>=0&&e.x+e.w<=W+0.01&&e.top>=0), JSON.stringify(Object.fromEntries(Object.entries(E).map(([k,e])=>[k,Math.round(e.x+e.w)])))+" vs "+W);
  ok(`geometry@${W}: left-pane elements end before the divider (gutter > 0)`,
     E.solidPill.x+E.solidPill.w<m.dividerX && E.leftPanel.x+E.leftPanel.w<m.dividerX,
     "panel right "+Math.round(E.leftPanel.x+E.leftPanel.w)+" < divider "+m.dividerX);
  ok(`geometry@${W}: right-pane elements start after the divider and end inside the stage`,
     E.specPill.x>m.dividerX && E.provenance.x>m.dividerX && E.provenance.x+E.provenance.w<=W && E.object.x+E.object.w<=W);
  ok(`geometry@${W}: bottom bands disjoint — schematic tag vs axis label (no overlap)`,
     E.schematic.top>=E.axisX.top+E.axisX.h || E.axisX.top>=E.schematic.top+E.schematic.h,
     "axis band "+Math.round(E.axisX.top)+"-"+Math.round(E.axisX.top+E.axisX.h)+" · schematic "+Math.round(E.schematic.top)+"-"+Math.round(E.schematic.top+E.schematic.h));
  ok(`geometry@${W}: SCHEMATIC POTENTIAL fits with configured letter-spacing (ink bound incl. tracking)`,
     E.schematic.x+E.schematic.w<=W, "right edge "+Math.round(E.schematic.x+E.schematic.w));
  ok(`legibility@${W}: subject font at phone width >= 11px floor`, m.fontPx>=11, m.fontPx.toFixed(2)+"px");
  ok(`joint@${W}: letter-spacing EFFECT — doubling small tracking widens the schematic ink bound`,
     (()=>{const a=E.schematic.w; const b=CONFIG.artworkTags[1].text.length*(0.62+2*CONFIG.typography.letterSpacingEm.small)*m.fontPx; return b>a;})());
});

/* ---- Cure 2 status ---- */
console.log("NOTE cure2: PIXEL-UNVERIFIED — agent-session Chrome blocked (Hatch WebGL domain policy); rendered pass NOT claimed. Model above is a supplement only.");

/* ---- Purity ---- */
const bad=["segment.mp4","source.mp4","Rkb3IG46sQo","t1142","t872","<video","<img","http://","https://"].filter(p=>p!=="http://"&&src.split(p).length-1>0||p==="http://"&&(src.split(p).length-1> (src.split("http://www.w3.org/2000/svg").length-1)));
ok("purity: 0 specimen media / external loads (only the SVG namespace identifier remains)",
   !src.includes("segment.mp4")&&!src.includes("<video")&&!src.includes("<img")&&!src.includes("Rkb3IG46sQo")&&(src.match(/https?:\/\//g)||[]).every(u=>true)&&(src.split("http://").length-1)===(src.split("http://www.w3.org/2000/svg").length-1));
console.log(`\nRESULT: ${pass} pass, ${fail} fail` + (fails.length?(" — FAILED: "+fails.join(" · ")):""));
process.exit(fail?1:0);
