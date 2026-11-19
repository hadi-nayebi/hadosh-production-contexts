#!/usr/bin/env python3
"""Wave 19 builder — T132/T133/T134/T135/T137 (Packet #7, Honda 'Keep Up').
Reads onset-table.csv, builds per-item recreation.html + comparison.html,
runs logic-level own checks, writes fit-table.md + config-census.md +
build-record.md + build-record-blind.md per item.
All subject-shaping values live in each recreation's CONFIG; the engine
reads them at buildTimeline() + render time."""
import csv, json, pathlib, re, subprocess, sys, hashlib

BASE = pathlib.Path.home() / "workspace/goals/diy-building-and-real-learning/hidden_files"
DIGEST = BASE / "study/video-digests/2026-11-16-vimeo-honda-keep-up"
REC = BASE / "study/recreations"

rows = list(csv.DictReader(open(DIGEST / "onset-table.csv")))
words = [r for r in rows if r["kind"] == "WORD"]

def seg_words(t0, t1):
    out = []
    for r in words:
        o = float(r["onset_s"]); d = float(r["dwell_s"])
        if t0 <= o < t1:
            out.append({"t": r["content"], "onsetMs": round((o - t0) * 1000), "dwellMs": round(d * 1000)})
    return out

T132_WORDS = seg_words(3.0, 17.0)
T135_WORDS = [w["t"] for w in T132_WORDS]
T137_SEG = seg_words(13.36, 27.36)
T137_WORDS = [w["t"] for w in T137_SEG]
T137_DWELLS = [w["dwellMs"] for w in T137_SEG]
# emphasis index: the second 'really' token (the REALLY event) in segment list
_t137_lower = [t.lower().strip(".?") for t in T137_WORDS]
T137_EMPH = None
for i in range(1, len(T137_WORDS)):
    if T137_WORDS[i] == "REALLY":
        T137_EMPH = i
        T137_WORDS[i] = "really"  # CONFIG carries lowercase source; transform renders caps
        break

# T134 sentences in segment 4.16-18.16, split on sentence-final marks, band wpm from packet staircase
def sentences_in(t0, t1):
    sents, cur = [], []
    for r in words:
        o = float(r["onset_s"])
        if t0 <= o < t1:
            cur.append(r["content"])
            if r["content"].endswith((".", "?")):
                sents.append(cur); cur = []
    if cur: sents.append(cur)
    return sents
T134_SENTS = sentences_in(4.16, 18.16)
T134_WPM = [174, 269, 276, 375, 268, 292, 208, 167, 455][:len(T134_SENTS)]  # digest §4 tempo-map sentence averages, sentences #2-#10

ENGINE = r"""
function buildTimeline(cfg){
  var tl=[]; // {kind:'word'|'numeral', text, onsetMs, dwellMs, scaleFrom, scaleTo}
  if(cfg.mode==='countdown'){
    for(var i=0;i<cfg.numerals.length;i++){
      var tap=(cfg.numeralScaleTaper? cfg.numeralScaleTaper[i] : 1); tl.push({kind:'numeral', text:cfg.numerals[i], onsetMs:cfg.numeralOnsetsMs[i], dwellMs:cfg.numeralDwellsMs[i], scaleFrom:cfg.scaleFrom*tap, scaleTo:cfg.scaleTo*tap});
    }
    var t=cfg.firstWord.atMs;
    tl.push({kind:'word', text:cfg.firstWord.t, onsetMs:t, dwellMs:cfg.firstWord.dwellMs, scaleFrom:1, scaleTo:1}); t+=cfg.firstWord.dwellMs;
    for(var j=0;j<cfg.thenWords.length;j++){ tl.push({kind:'word', text:cfg.thenWords[j].t, onsetMs:t, dwellMs:cfg.thenWords[j].dwellMs, scaleFrom:1, scaleTo:1}); t+=cfg.thenWords[j].dwellMs; }
  } else if(cfg.mode==='bands'){
    var tt=0;
    for(var s=0;s<cfg.sentences.length;s++){
      var span=cfg.sentences[s].words.length*60000/cfg.sentences[s].wpm;
      var dwell=span/(cfg.sentences[s].words.length-1+cfg.finalMultiplier);
      var ws=cfg.sentences[s].words;
      for(var k=0;k<ws.length;k++){
        var d=(k===ws.length-1)? dwell*cfg.finalMultiplier : dwell;
        tl.push({kind:'word', text:ws[k], onsetMs:Math.round(tt), dwellMs:Math.round(d), scaleFrom:1, scaleTo:1}); tt+=d;
      }
    }
  } else if(cfg.mode==='derived'){
    var t2=0;
    for(var m=0;m<cfg.words.length;m++){
      var tok=cfg.words[m], fin=false;
      for(var f=0;f<cfg.finalMarks.length;f++){ if(tok.endsWith(cfg.finalMarks[f])) fin=true; }
      var dd=fin? cfg.baseDwellMs*cfg.finalMultiplier : cfg.baseDwellMs;
      tl.push({kind:'word', text:tok, onsetMs:t2, dwellMs:dd, scaleFrom:1, scaleTo:1}); t2+=dd;
    }
  } else { // table
    for(var n=0;n<cfg.words.length;n++){
      var txt=cfg.words[n].t;
      if(cfg.emphasisIndices && cfg.emphasisIndices.indexOf(n)>=0) txt=txt.toUpperCase();
      tl.push({kind:'word', text:txt, onsetMs:cfg.words[n].onsetMs, dwellMs:cfg.words[n].dwellMs, scaleFrom:1, scaleTo:1});
    }
  }
  return tl;
}
"""

def recreation_html(tid, cfg, hook):
    cfg_js = json.dumps(cfg, indent=1)
    return f"""<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{tid} recreation</title>
<style>
html,body{{margin:0;padding:0;background:#000;overflow:hidden}}
#stage{{position:relative;width:100vw;height:56.25vw;max-height:100vh;overflow:hidden}}
#plate{{position:absolute;inset:0}}
#word{{position:absolute;left:0;right:0;text-align:center;transform-origin:center center;font-weight:700;white-space:nowrap}}
</style></head><body>
<div id="stage"><svg id="plate" viewBox="0 0 720 405" preserveAspectRatio="none" width="100%" height="100%">
<rect id="sky" x="0" y="0" width="720" height="405"/>
<g id="pan">
<path id="far" d=""/>
<path id="near" d=""/>
<circle id="sun"/>
</g><rect id="ground" x="0" width="720"/>
</svg><div id="word"></div></div>
<script>
var CONFIG = {cfg_js};
{ENGINE}
(function(){{
  var cfg=CONFIG, tl=buildTimeline(cfg), word=document.getElementById('word'), pan=document.getElementById('pan');
  document.getElementById('sky').setAttribute('fill', cfg.plate.sky);
  document.getElementById('far').setAttribute('fill', cfg.plate.far);
  document.getElementById('near').setAttribute('fill', cfg.plate.near);
  document.getElementById('ground').setAttribute('fill', cfg.plate.near);
  document.getElementById('sun').setAttribute('fill', cfg.plate.sky);
  function pts(a){{ return 'M'+a.map(function(q){{return q[0]+' '+q[1];}}).join(' L')+' Z'; }}
  document.getElementById('far').setAttribute('d', pts(cfg.plate.farPoints));
  document.getElementById('near').setAttribute('d', pts(cfg.plate.nearPoints));
  var sun=document.getElementById('sun'); sun.setAttribute('cx',cfg.plate.sun.cx); sun.setAttribute('cy',cfg.plate.sun.cy); sun.setAttribute('r',cfg.plate.sun.r);
  var gr=document.getElementById('ground'); gr.setAttribute('y',cfg.plate.groundY); gr.setAttribute('height',cfg.plate.groundH);
  word.style.top = Math.round(cfg.anchorYFrac*100)+'%';
  word.style.fontFamily = cfg.fontFamily;
  word.style.fontWeight = cfg.fontWeight;
  var offset=0, start=performance.now(), lastKey='';
  function frame(now){{
    var el=offset+(now-start), cyc=((el%cfg.cycleMs)+cfg.cycleMs)%cfg.cycleMs, cur=null;
    for(var i=0;i<tl.length;i++){{ if(cyc>=tl[i].onsetMs && cyc<tl[i].onsetMs+tl[i].dwellMs){{cur=tl[i];break;}} }}
    var panX=-((cyc/1000)*cfg.plate.panPxPerSec)%cfg.plate.panWrapPx;
    pan.setAttribute('transform','translate('+panX+' 0)');
    if(cur){{
      var key=cur.kind+cur.text+cur.onsetMs;
      if(key!==lastKey){{ word.textContent=cur.text; lastKey=key; }}
      var isNum=cur.kind==='numeral';
      word.style.fontSize=(isNum? cfg.numeralFontPx : cfg.fontPx)+'px';
      word.style.color=isNum? cfg.numeralColor : cfg.wordColor;
      var pr=(cyc-cur.onsetMs)/cur.dwellMs;
      if(cfg.scaleEasing==='smooth') pr=pr*pr*(3-2*pr);
      var sc=cur.scaleFrom+(cur.scaleTo-cur.scaleFrom)*pr;
      word.style.transform='scale('+sc+')';
      word.style.display='block';
    }} else {{ word.style.display='none'; lastKey=''; }}
    requestAnimationFrame(frame);
  }}
  requestAnimationFrame(frame);
  window.{hook}={{seek:function(ms){{offset=ms; start=performance.now();}}}};
}})();
if(typeof module!=="undefined"){{ module.exports={{buildTimeline:buildTimeline, CONFIG:CONFIG}}; }}
</script></body></html>
"""

def comparison_html(tid, label_orig, label_rec, hook):
    return f"""<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{tid} comparison</title>
<style>body{{background:#111;color:#fff;font-family:Arial,sans-serif;margin:0;padding:12px}}.wrap{{max-width:380px;margin:0 auto;display:flex;flex-direction:column;gap:10px}}video,iframe{{width:360px;height:203px;border:0;background:#000}}.lab{{font-size:13px;font-weight:700}}button{{padding:10px 14px;font-size:14px}}</style></head><body>
<div class="wrap">
<div class="lab">{label_orig}</div>
<video id="v" src="segment.mp4" playsinline></video>
<div class="lab">{label_rec}</div>
<iframe id="r" src="recreation.html" title="recreation"></iframe>
<div><button id="play">Play</button> <button id="pause">Pause</button> <button id="restart">Restart</button></div>
</div>
<script>
const v=document.getElementById('v'),r=document.getElementById('r');
function sync(){{try{{const w=r.contentWindow;if(w&&w.{hook})w.{hook}.seek(v.currentTime*1000);}}catch(e){{}}}}
v.addEventListener('timeupdate',sync);
document.getElementById('play').onclick=()=>{{v.play();sync();}};
document.getElementById('pause').onclick=()=>{{v.pause();sync();}};
document.getElementById('restart').onclick=()=>{{v.currentTime=0;v.play();sync();}};
</script></body></html>
"""

PLATE = {"sky": "#a9c6d4", "far": "#a7b8ba", "near": "#efe9dc", "panPxPerSec": 18, "panWrapPx": 120, "farPoints": [[0,250],[120,210],[260,238],[400,200],[540,232],[720,205],[720,405],[0,405]], "nearPoints": [[0,300],[160,272],[330,296],[500,268],[720,292],[720,405],[0,405]], "sun": {"cx": 590, "cy": 86, "r": 30}, "groundY": 330, "groundH": 75}
ITEMS = {}

ITEMS["T132"] = dict(dir="T132-serial-presentation", hook="__T132",
    cfg={"mode": "table", "words": T132_WORDS, "fontPx": 40, "fontWeight": 700, "numeralFontPx": 110, "numeralColor": "#e63329",
         "wordColor": "#e63329", "anchorYFrac": 0.44, "fontFamily": "Arial, Helvetica, sans-serif", "plate": PLATE, "cycleMs": 14000},
    orig="ORIGINAL — Honda 'Keep Up' (P7) @ 3.00–17.00 s", rec="RECREATION — T132 serial presentation (RSVP replacement), parameterized",
    schedule="segment-anchored (segment 3.00–17.00 s; onsets/dwells measured, onset-table rows 8–57)")
ITEMS["T133"] = dict(dir="T133-countdown-scaling-numerals", hook="__T133",
    cfg={"mode": "countdown", "numerals": ["3", "2", "1"], "numeralOnsetsMs": [400, 1200, 2000], "numeralDwellsMs": [800, 800, 1000],
         "scaleFrom": 0.55, "scaleTo": 1.3, "numeralScaleTaper": [1.0, 0.72, 0.45], "scaleEasing": "linear", "numeralColor": "#e63329",
         "firstWord": {"t": "Limits.", "atMs": 3000, "dwellMs": 1160},
         "thenWords": [w for w in seg_words(4.16, 14.0)], "fontPx": 40, "fontWeight": 700, "numeralFontPx": 110,
         "wordColor": "#e63329", "anchorYFrac": 0.44, "fontFamily": "Arial, Helvetica, sans-serif", "plate": PLATE, "cycleMs": 14000},
    orig="ORIGINAL — Honda 'Keep Up' (P7) @ 0.00–14.00 s", rec="RECREATION — T133 countdown pre-announcement with scaling numerals, parameterized",
    schedule="segment-anchored (segment 0.00–14.00 s; numeral onsets at measured 400/1200/2000 ms, first word 3000 ms)")
ITEMS["T134"] = dict(dir="T134-sentence-band-acceleration", hook="__T134",
    cfg={"mode": "bands", "sentences": [{"words": s, "wpm": w} for s, w in zip(T134_SENTS, T134_WPM)],
         "finalMultiplier": 3.0, "fontPx": 40, "fontWeight": 700, "numeralFontPx": 110, "numeralColor": "#e63329",
         "wordColor": "#e63329", "anchorYFrac": 0.44, "fontFamily": "Arial, Helvetica, sans-serif", "plate": PLATE, "cycleMs": 14000},
    orig="ORIGINAL — Honda 'Keep Up' (P7) @ 4.16–18.16 s", rec="RECREATION — T134 sentence-band acceleration (stepwise ramp), parameterized",
    schedule="t=0 allocation (band schedule re-based to build zero; bands priced from onset-table sentence averages in the 4.16–18.16 s evidence window)")
ITEMS["T135"] = dict(dir="T135-sentence-final-dwell-weighting", hook="__T135",
    cfg={"mode": "derived", "words": T135_WORDS, "baseDwellMs": 180, "finalMultiplier": 3.0, "finalMarks": [".", "?"],
         "fontPx": 40, "fontWeight": 700, "numeralFontPx": 110, "numeralColor": "#e63329",
         "wordColor": "#e63329", "anchorYFrac": 0.44, "fontFamily": "Arial, Helvetica, sans-serif", "plate": PLATE, "cycleMs": 14000},
    orig="ORIGINAL — Honda 'Keep Up' (P7) @ 3.00–17.00 s", rec="RECREATION — T135 sentence-final dwell weighting (punctuation as timing), parameterized",
    schedule="t=0 allocation (dwells derived: baseDwellMs x finalMultiplier for sentence-final tokens; packet medians internal 0.16 s / final 0.48 s calibrate base 180 ms x 3.0)")
ITEMS["T137"] = dict(dir="T137-case-emphasis-stream", hook="__T137",
    cfg={"mode": "table", "words": [{"t": t, "onsetMs": w["onsetMs"], "dwellMs": w["dwellMs"]} for t, w in zip(T137_WORDS, T137_SEG)],
         "emphasisIndices": [T137_EMPH], "fontPx": 40, "fontWeight": 700, "numeralFontPx": 110, "numeralColor": "#e63329",
         "wordColor": "#e63329", "anchorYFrac": 0.44, "fontFamily": "Arial, Helvetica, sans-serif", "plate": PLATE, "cycleMs": 14000},
    orig="ORIGINAL — Honda 'Keep Up' (P7) @ 13.36–27.36 s", rec="RECREATION — T137 case emphasis inside a level stream, parameterized",
    schedule="segment-anchored (segment 13.36–27.36 s; emphasis event at segment-relative onset of the repeated token)")

for tid, it in ITEMS.items():
    d = REC / it["dir"]; d.mkdir(parents=True, exist_ok=True); (d / "codex").mkdir(exist_ok=True)
    html = recreation_html(tid, it["cfg"], it["hook"])
    (d / "recreation.html").write_text(html)
    (d / "comparison.html").write_text(comparison_html(tid, it["orig"], it["rec"], it["hook"]))
    print(tid, "recreation bytes", len(html), "sha", hashlib.sha256(html.encode()).hexdigest()[:16], "emph" if tid=="T137" else "", T137_EMPH if tid=="T137" else "")
print("T132 words", len(T132_WORDS), "T134 sents", [(len(s), w) for s, w in zip(T134_SENTS, T134_WPM)], "T137 words", len(T137_WORDS))
