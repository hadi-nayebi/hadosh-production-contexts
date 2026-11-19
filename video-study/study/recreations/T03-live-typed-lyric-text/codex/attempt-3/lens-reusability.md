OpenAI Codex v0.169.0
--------
workdir: /tmp/t03a3/lensrun
model: gpt-6.1-sol
provider: openai
approval: never
sandbox: read-only
reasoning effort: none
reasoning summaries: none
session id: 01a1e9eb-a465-7dc3-a946-6299cb7f0b7a
--------
user
STANDING HEADER — Codex review run, practice job re-score wave.
(1) CONSUMER + DECISION: consumer is practice INSTRUCTION §5 (the re-score wave for technique T03, attempt 3); this run prices the REUSABILITY lens only — its score feeds the attempt-3 tier decision. The bar for the attempt is: average ≥85 AND no lens <70, across five lenses. Scores are integers from 0 to 100.
(2) WORKING RECORD: this run builds from and writes to the artifact directory hidden_files/study/recreations/T03-live-typed-lyric-text/ — its codex/attempt-3/ folder (returns) and scores.md. Your full return is filed verbatim at codex/attempt-3/lens-reusability.md.
(3) BODY-WRITE REQUIREMENT: your return MUST end with a line "BODY-WRITE: <what this return writes into the body — the codex/attempt-3/lens-reusability.md filing and the scores.md attempt-3 reusability entry>" and, on the line before it, "SCORE: <integer 0-100>". A return without those two lines is incomplete.

TECHNIQUE T03 — Live-typed lyric text. Catalogue mechanics: "sung text types in time with the vocal as depicted content (the song being written), never a caption plate." Reusability law: content, timing, and palette come from config; a recreation that only works with the specimen's exact words is a copy. The build record documents the schedule construction (authored, specimen, and fallback modes under one validation contract), grapheme-cluster typing with a documented segmentation fallback, an interval override, and a visible-window policy. Note: direction (RTL) layout mirroring is named in the build record as not implemented in this build.

YOUR LENS — REUSABILITY/PARAMETERIZATION ONLY: judge whether every variable (lines/count, per-unit interval, pauses, prompt, palette, font, size, visible-line policy) is a config key with no literals leaking into the animation logic; whether a production job could reuse this for a different language/length without editing logic; what breaks at extremes (very long lines, many lines, combining-character or joined-emoji scripts, RTL scripts) insofar as the code shows it. Do NOT score motion fidelity, timing match to the specimen, purity, or legibility — other lenses own those. The consumer surface is DLC/multilingual word animation: production must lift this machinery for other words, other languages, other timings by config alone.

Below is the recreation's full source (recreation.html), followed by its build record (build-record-attempt3.md) with construction facts and diagnostic results, including logic-level swap tests, and its own-check packet. Return: priced findings for the reusability lens, then SCORE and BODY-WRITE lines as specified. Score reusability only, 0-100.

==== recreation.html ====
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>T03 — Live-typed lyric text (parameterized recreation)</title>
<style>
  html,body{margin:0;padding:0;height:100%;}
  body{display:flex;align-items:flex-end;box-sizing:border-box;}
  #stage{width:100%;position:relative;}
  .line{white-space:pre-wrap;word-break:break-word;box-sizing:border-box;position:relative;}
  .cursor{position:absolute;}
  @keyframes blink{0%,55%{opacity:1}56%,100%{opacity:0}}
</style>
</head>
<body>
<div id="stage" aria-live="off"></div>
<script>
"use strict";
/* T03 — Live-typed lyric text. All content/timing/palette from CONFIG.
   Timing has two layers:
   (a) SPECIMEN schedule — per-line start offsets/durations derived from the
       source checkpoint table recorded with this recreation; used only when
       CONFIG.lines exactly match the specimen lines.
   (b) FALLBACK policy — for any swapped text, per-line durations are derived
       from line count, grapheme counts, and CONFIG.windowMs. The fallback is
       an allocation policy, never specimen evidence.
   Typing reveals complete grapheme clusters: the full text of every line
   is laid out once as one span per cluster, and revealing toggles span
   visibility only, so word wrap is computed on the complete text and a
   partially revealed word can never change rows. One persistent cursor
   element is created once; it sits outside the text flow and is
   positioned at the revealed grapheme boundary of the active line.
   URL overrides: ?lines=A|B ?line=TEXT ?charMs=N ?accent=HEX
   ?maxVisibleLines=N. The charMs override sets the per-cluster typing
   interval directly: derived schedules (specimen and fallback) rescale
   around it, preserving the start delay and the inter-line pauses; if
   the rescaled performance runs past the window, the schedule records
   the overrun instead of clamping it. An authored schedule
   (CONFIG.lineSchedule) is used exactly as given and is never rescaled. */
const SPECIMEN_LINES = [
  "I made a song, I made a beat",
  "I wrote the words, I feel the heat",
  "I made a song, I made a beat"
];
const CONFIG = {
  lines: SPECIMEN_LINES.slice(),
  windowMs: 14000,
  startDelayMs: 300,
  linePauseMs: 900,
  finalHoldMs: 470,
  specimenSchedule: [
    { startMs: 300,  durationMs: 3556 },
    { startMs: 4756, durationMs: 4318 },
    { startMs: 9974, durationMs: 3556 }
  ],
  maxVisibleLines: 3,
  charMs: null,
  lineSchedule: null,
  prompt: ">",
  bg: "#060807",
  ink: "#e8ece7",
  accent: "#7ac74f",
  cursorColor: "#9aa79b",
  fontFamily: 'ui-monospace, "SF Mono", Menlo, Consolas, monospace',
  fontSizePx: 30,
  fontMinPx: 16,
  fontVwFactor: 0.055,
  lineHeight: 1.5,
  promptGapCh: 0.6,
  cursorWidthCh: 0.62,
  cursorBlinkMs: 1000,
  stagePadding: "6vh 5vw"
};
(function applyOverrides(){
  const q = new URLSearchParams(location.search);
  if (q.get("lines")) CONFIG.lines = q.get("lines").split("|");
  else if (q.get("line")) CONFIG.lines = [q.get("line")].concat(CONFIG.lines.slice(1));
  if (q.get("accent")) CONFIG.accent = q.get("accent");
  if (q.get("charMs")){
    const cm = parseFloat(q.get("charMs"));
    if (isFinite(cm) && cm > 0) CONFIG.charMs = Math.min(1000, Math.max(10, cm));
  }
  if (q.get("maxVisibleLines")){
    const mv = parseInt(q.get("maxVisibleLines"), 10);
    if (isFinite(mv)) CONFIG.maxVisibleLines = Math.max(1, mv);
  }
})();

/* --- Grapheme segmentation: complete clusters only --- */
function segmentGraphemes(text){
  if (typeof Intl !== "undefined" && typeof Intl.Segmenter === "function"){
    const seg = new Intl.Segmenter(undefined, { granularity: "grapheme" });
    return Array.from(seg.segment(text), function(s){ return s.segment; });
  }
  /* Documented fallback (no Intl.Segmenter): code points merged with
     combining marks, variation selectors, skin-tone modifiers, ZWJ
     sequences, and regional-indicator pairs. Approximation: it does not
     implement every UAX #29 rule (e.g. some Indic conjuncts). */
  const cps = Array.from(text);
  const out = [];
  let joinNext = false;
  for (let i = 0; i < cps.length; i++){
    const cp = cps[i];
    const code = cp.codePointAt(0);
    const isExtender = /[\p{M}\uFE00-\uFE0F]/u.test(cp) ||
      (code >= 0x1F3FB && code <= 0x1F3FF) || code === 0x20E3;
    const isZWJ = code === 0x200D;
    const isRI = code >= 0x1F1E6 && code <= 0x1F1FF;
    if (out.length && (isExtender || isZWJ || joinNext ||
        (isRI && Array.from(out[out.length-1]).length % 2 === 1 &&
         (()=>{ const p=Array.from(out[out.length-1]); const c=p[p.length-1].codePointAt(0); return c>=0x1F1E6&&c<=0x1F1FF; })()))){
      out[out.length-1] += cp;
    } else {
      out.push(cp);
    }
    joinNext = isZWJ;
  }
  return out;
}

/* --- Schedule derivation ---
   One validation order governs every mode: configuration values are
   validated/defaulted first, then exactly one mode is selected
   (authored schedule, then specimen match, then the fallback
   allocation), then the base schedule for that mode is built and
   checked for containment inside the window, then an explicit
   per-cluster interval override may rescale a derived schedule, and
   any overrun past the window is recorded rather than clamped. A
   derived schedule's base always ends inside the window: when the
   inter-line pauses alone would exhaust the typing span, the
   effective pause is compressed so pauses take at most a quarter of
   the span and a positive typing budget remains. Authored timings are
   used exactly as given; the interval override never rescales them. */
function isSpecimen(lines){
  return lines.length === SPECIMEN_LINES.length &&
    lines.every(function(l, i){ return l === SPECIMEN_LINES[i]; });
}
function deriveSchedule(cfg){
  const diagnostics = [];
  const clusters = cfg.lines.map(segmentGraphemes);
  const n = cfg.lines.length;
  /* (1) value validation / defaulting */
  let windowMs = cfg.windowMs;
  if (typeof windowMs !== "number" || !isFinite(windowMs) || windowMs <= 0){
    windowMs = 14000; diagnostics.push("windowMsDefaulted");
  }
  let startDelayMs = cfg.startDelayMs;
  if (typeof startDelayMs !== "number" || !isFinite(startDelayMs)){
    startDelayMs = 300; diagnostics.push("startDelayMsDefaulted");
  }
  if (startDelayMs < 0) startDelayMs = 0;
  let linePauseMs = cfg.linePauseMs;
  if (typeof linePauseMs !== "number" || isNaN(linePauseMs)){
    linePauseMs = 900; diagnostics.push("linePauseMsDefaulted");
  }
  if (linePauseMs < 0) linePauseMs = 0;
  let finalHoldMs = cfg.finalHoldMs;
  if (typeof finalHoldMs !== "number" || !isFinite(finalHoldMs)){
    finalHoldMs = 470; diagnostics.push("finalHoldMsDefaulted");
  }
  if (finalHoldMs < 0) finalHoldMs = 0;
  const base = { clusters: clusters, totalMs: windowMs, overflow: false,
    overrun: false, degenerate: false, charMsIgnoredAuthored: false,
    diagnostics: diagnostics,
    effectivePauseMs: (n > 1 && isFinite(linePauseMs)) ? linePauseMs : 0,
    effectiveStartMs: startDelayMs };
  if (n === 0){
    return Object.assign(base, { mode: "fallback", lines: [] });
  }
  /* Per-cluster interval override: valid only as a finite number > 0,
     clamped to [10, 1000]; anything else is ignored and the schedule
     is identical to the no-override schedule. */
  const charMsPresent = cfg.charMs !== null && cfg.charMs !== undefined;
  const charMsValid = typeof cfg.charMs === "number" && isFinite(cfg.charMs) && cfg.charMs > 0;
  const charMs = charMsValid ? Math.min(1000, Math.max(10, cfg.charMs)) : null;
  /* Authored schedule: a content-independent per-line schedule, used
     exactly as given when it is valid for the current line count
     (finite, monotonic starts, every end inside the window). An
     invalid one falls back with a diagnostic. */
  if (cfg.lineSchedule){
    let authoredOk = Array.isArray(cfg.lineSchedule) &&
      cfg.lineSchedule.length === n &&
      cfg.lineSchedule.every(function(s, i){
        if (!s || !isFinite(s.startMs) || !isFinite(s.durationMs) || s.durationMs < 0) return false;
        if (s.startMs + s.durationMs > windowMs) return false;
        if (i > 0 && s.startMs < cfg.lineSchedule[i - 1].startMs) return false;
        return true;
      });
    if (authoredOk){
      base.charMsIgnoredAuthored = charMsPresent;
      return Object.assign(base, { mode: "authored",
        lines: cfg.lineSchedule.map(function(s){
          return { startMs: s.startMs, durationMs: s.durationMs }; }) });
    }
    diagnostics.push("lineScheduleInvalidFallback");
  }
  /* Rescaling step for derived schedules: durations rescale around the
     override interval, starts recompute sequentially preserving the
     first start and the base inter-line pauses. */
  function finish(result){
    if (result.degenerate || !charMsValid) return result;
    const totalClusters = clusters.reduce(function(a, c){ return a + c.length; }, 0);
    if (totalClusters === 0 || result.lines.length === 0) return result;
    const gaps = [];
    for (let i = 1; i < result.lines.length; i++){
      gaps.push(result.lines[i].startMs -
        (result.lines[i - 1].startMs + result.lines[i - 1].durationMs));
    }
    let newLines;
    if (result.mode === "fallback"){
      newLines = result.lines.map(function(l, i){
        return { startMs: 0, durationMs: Math.round(clusters[i].length * charMs) };
      });
    } else {
      const baseDur = result.lines.reduce(function(a, l){ return a + l.durationMs; }, 0);
      const scale = charMs / (baseDur / totalClusters);
      newLines = result.lines.map(function(l){
        return { startMs: 0, durationMs: Math.round(l.durationMs * scale) };
      });
    }
    let t = result.lines[0].startMs;
    newLines.forEach(function(l, i){
      l.startMs = t;
      t += l.durationMs + (i < gaps.length ? gaps[i] : 0);
    });
    result.lines = newLines;
    const lastL = newLines[newLines.length - 1];
    const end = lastL.startMs + lastL.durationMs;
    if (end > windowMs){
      result.overrun = true;
      result.totalMs = end + finalHoldMs;
    }
    return result;
  }
  /* (2)+(3)+(4) specimen base schedule: validated for finiteness,
     monotonic non-overlap and containment; an invalid table falls back
     to the allocation with a diagnostic, never to a silent bad schedule. */
  let specimenOk = false;
  if (isSpecimen(cfg.lines) && cfg.specimenSchedule &&
      cfg.specimenSchedule.length === n){
    specimenOk = cfg.specimenSchedule.every(function(s, i){
      if (!isFinite(s.startMs) || !isFinite(s.durationMs) || s.durationMs < 0) return false;
      if (s.startMs + s.durationMs > windowMs) return false;
      if (i > 0){
        const p = cfg.specimenSchedule[i - 1];
        if (s.startMs < p.startMs || s.startMs < p.startMs + p.durationMs) return false;
      }
      return true;
    });
  }
  if (specimenOk){
    return finish(Object.assign(base, { mode: "specimen",
      lines: cfg.specimenSchedule.map(function(s){
        return { startMs: s.startMs, durationMs: s.durationMs }; }) }));
  }
  if (isSpecimen(cfg.lines) && cfg.specimenSchedule){
    diagnostics.push("specimenScheduleInvalidFallback");
  }
  /* Fallback allocation: typing budget = window minus start delay,
     inter-line pauses, and the final-hold reserve; allocated per line
     in proportion to grapheme-cluster count, with the rounding residual
     on the last line that carries clusters, so the final line ends at
     windowMs - finalHoldMs exactly. An empty-text line takes a zero
     duration at its sequential start and keeps its pause slot. */
  const span = windowMs - startDelayMs - finalHoldMs;
  const effectiveStartMs = Math.min(startDelayMs, Math.max(0, windowMs - finalHoldMs));
  base.effectiveStartMs = effectiveStartMs;
  if (span <= 0){
    /* Degenerate window: no typing span remains. Every line takes a
       zero duration at the effective start, the schedule is flagged,
       and the state model reveals nothing for it. */
    base.degenerate = true; base.overflow = true;
    return finish(Object.assign(base, { mode: "fallback",
      lines: clusters.map(function(){
        return { startMs: effectiveStartMs, durationMs: 0 }; }) }));
  }
  const pausesCount = Math.max(0, n - 1);
  let effectivePauseMs = linePauseMs;
  let overflow = false;
  if (pausesCount > 0 && pausesCount * linePauseMs >= span){
    effectivePauseMs = Math.min(linePauseMs,
      Math.floor(0.25 * Math.max(0, span) / pausesCount));
    overflow = true;
  }
  base.effectivePauseMs = effectivePauseMs; base.overflow = overflow;
  const budget = span - pausesCount * effectivePauseMs;
  const weights = clusters.map(function(c){ return c.length; });
  const totalW = weights.reduce(function(a, b){ return a + b; }, 0);
  let lastWeighted = -1;
  weights.forEach(function(w, i){ if (w > 0) lastWeighted = i; });
  let t = effectiveStartMs, allocated = 0;
  const lines = clusters.map(function(c, i){
    let dur = 0;
    if (totalW > 0 && weights[i] > 0){
      dur = (i === lastWeighted) ? budget - allocated
        : Math.round(budget * weights[i] / totalW);
      allocated += dur;
    }
    const s = { startMs: t, durationMs: dur };
    t += dur + effectivePauseMs;
    return s;
  });
  return finish(Object.assign(base, { mode: "fallback", lines: lines }));
}

/* Pure state model: state at elapsed ms depends only on elapsed. */
function stateAt(sched, elapsed){
  if (sched.degenerate){
    return sched.lines.map(function(){
      return { shown: 0, active: false, done: false }; });
  }
  return sched.lines.map(function(ls, li){
    const count = sched.clusters[li].length;
    if (elapsed < ls.startMs) return { shown: 0, active: false, done: false };
    if (ls.durationMs <= 0 || elapsed >= ls.startMs + ls.durationMs)
      return { shown: count, active: elapsed < ls.startMs + ls.durationMs + 1, done: true };
    const shown = Math.min(count, Math.floor((elapsed - ls.startMs) / ls.durationMs * count));
    return { shown: shown, active: true, done: false };
  });
}
function activeLineAt(sched, elapsed){
  if (sched.degenerate) return -1;
  let active = -1;
  sched.lines.forEach(function(ls, li){
    if (elapsed >= ls.startMs) active = li;
  });
  return active;
}

/* --- Visible-window model (pure) ---
   The visible set is an active-anchored window: a line is displayed
   exactly when trimStart <= li <= active; before the first line starts
   only line 0's slot stands (empty). Future lines are not displayed, so
   they contribute no prompt and no height on stage. A line's prompt is
   visible exactly when the line has activated (li <= active); its
   layout width is retained either way, so activation never shifts the
   line. The window slides only when the active line changes. */
function visibleWindow(active, n, maxVisible){
  const mv = Math.max(1, Math.floor(maxVisible) || 1);
  const high = active < 0 ? 0 : active;
  const trimStart = Math.max(0, high - mv + 1);
  const displayed = [];
  for (let li = 0; li < n; li++) displayed.push(li >= trimStart && li <= high);
  return { trimStart: trimStart, high: high, displayed: displayed };
}
function promptVisibleAt(li, active){ return li <= active; }
/* The stage's reserved height is the largest total of any sliding
   window of per-line measured heights. */
function maxWindowHeightFor(heights, maxVisible){
  const mv = Math.max(1, Math.floor(maxVisible) || 1);
  let best = 0;
  for (let s = 0; s < heights.length; s++){
    let sum = 0;
    for (let i = s; i < Math.min(heights.length, s + mv); i++) sum += heights[i];
    if (sum > best) best = sum;
  }
  return best;
}
/* Model tops of the displayed lines, stacked from the stage top in
   measured-height order. */
function modelTopsFor(heights, displayed){
  const tops = [];
  let y = 0;
  for (let li = 0; li < heights.length; li++){
    tops.push(displayed[li] ? y : null);
    if (displayed[li]) y += heights[li];
  }
  return tops;
}

/* --- Cursor boundary model (pure) ---
   The cursor sits at the revealed grapheme boundary of the active
   line: immediately after the last revealed cluster, or at the
   prompt's right edge when nothing of the line is revealed yet.
   Metrics are per-span right edges and tops measured against the line
   box, so a boundary that falls on a continuation row carries that
   row's top. */
function cursorPosFor(metrics, promptMetric, shown){
  if (shown > 0){
    const b = metrics[shown - 1];
    return { left: b.right, top: b.top };
  }
  return { left: promptMetric.right, top: promptMetric.top };
}

/* --- DOM built once --- */
const stage = document.getElementById("stage");
document.body.style.background = CONFIG.bg;
document.body.style.padding = CONFIG.stagePadding;
stage.style.color = CONFIG.ink;
stage.style.fontFamily = CONFIG.fontFamily;
stage.style.fontSize = Math.min(CONFIG.fontSizePx, Math.max(CONFIG.fontMinPx, window.innerWidth * CONFIG.fontVwFactor)) + "px";

const SCHED = deriveSchedule(CONFIG);
stage.dataset.scheduleOverflow = SCHED.overflow ? "true" : "false";
stage.dataset.scheduleOverrun = SCHED.overrun ? "true" : "false";
const lineEls = [], promptEls = [], spanEls = [];
const cursorEl = document.createElement("span");   /* created ONCE */
cursorEl.className = "cursor";
cursorEl.style.background = CONFIG.cursorColor;
cursorEl.style.width = CONFIG.cursorWidthCh + "ch";
cursorEl.style.animation = "blink " + CONFIG.cursorBlinkMs + "ms steps(1) infinite";
cursorEl.style.height = "1em";
cursorEl.style.display = "none";
let cursorHome = -1;

CONFIG.lines.forEach(function(text, li){
  const div = document.createElement("div");
  div.className = "line";
  div.style.lineHeight = CONFIG.lineHeight;
  const p = document.createElement("span");
  p.className = "prompt"; p.style.color = CONFIG.accent; p.textContent = CONFIG.prompt;
  p.style.marginRight = CONFIG.promptGapCh + "ch";
  p.style.visibility = "hidden";
  div.appendChild(p);
  promptEls.push(p);
  const spans = SCHED.clusters[li].map(function(cluster){
    const sp = document.createElement("span");
    sp.textContent = cluster;
    sp.style.visibility = "hidden";
    div.appendChild(sp);
    return sp;
  });
  stage.appendChild(div);
  lineEls.push(div); spanEls.push(spans);
});

/* Unified layout measurement: one off-screen measurement pass supplies
   every height the stage relies on. Each line is laid out in a
   measurement stage sharing the live stage's width, font size,
   line-height and wrapping (no element in it is display:none), its
   full-layout height is recorded, and the live stage's reserved height
   is the largest total of any visible window of those heights. Future
   lines are display:none on the live stage and supply nothing there. */
let probeHeights = [];
function measureLayout(){
  const probe = document.createElement("div");
  probe.setAttribute("aria-hidden", "true");
  probe.style.cssText = "visibility:hidden;position:absolute;left:-10000px;top:0;pointer-events:none;" +
    "white-space:pre-wrap;word-break:break-word;box-sizing:border-box;" +
    "line-height:" + CONFIG.lineHeight + ";" +
    "font-family:" + CONFIG.fontFamily + ";font-size:" + stage.style.fontSize + ";" +
    "width:" + stage.clientWidth + "px;";
  document.body.appendChild(probe);
  probeHeights = CONFIG.lines.map(function(text){
    probe.textContent = "";
    const p = document.createElement("span");
    p.style.marginRight = CONFIG.promptGapCh + "ch"; p.textContent = CONFIG.prompt;
    probe.appendChild(p);
    probe.appendChild(document.createTextNode(text));
    return probe.offsetHeight;
  });
  probe.remove();
  stage.style.minHeight =
    maxWindowHeightFor(probeHeights, CONFIG.maxVisibleLines) + "px";
}
measureLayout();

let currentElapsed = 0;
/* One invalidation handler governs font and resize: the clamped font
   size is recomputed first, then the measurement pass re-runs, the
   reserved height resets, and the frame re-renders under the new
   metrics. A stale measurement is never reused after either event. */
function relayout(){
  stage.style.fontSize = Math.min(CONFIG.fontSizePx, Math.max(CONFIG.fontMinPx, window.innerWidth * CONFIG.fontVwFactor)) + "px";
  measureLayout();
  render(currentElapsed);
}
window.addEventListener("resize", relayout);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(relayout);

function render(elapsed){
  currentElapsed = elapsed;
  const st = stateAt(SCHED, elapsed);
  const active = activeLineAt(SCHED, elapsed);
  const win = visibleWindow(active, SCHED.lines.length, CONFIG.maxVisibleLines);
  lineEls.forEach(function(div, li){
    div.style.display = win.displayed[li] ? "" : "none";
    promptEls[li].style.visibility = promptVisibleAt(li, active) ? "visible" : "hidden";
  });
  st.forEach(function(s, li){
    const spans = spanEls[li];
    for (let i = 0; i < spans.length; i++){
      const v = i < s.shown ? "visible" : "hidden";
      if (spans[i].style.visibility !== v) spans[i].style.visibility = v;
    }
  });
  if (active >= 0){
    if (cursorHome !== active){
      lineEls[active].appendChild(cursorEl);  /* same node, moved at boundary */
      cursorHome = active;
    }
    cursorEl.style.display = "";
    const lineRect = lineEls[active].getBoundingClientRect();
    const metrics = spanEls[active].map(function(sp){
      const r = sp.getBoundingClientRect();
      return { right: r.right - lineRect.left, top: r.top - lineRect.top };
    });
    const pr = promptEls[active].getBoundingClientRect();
    const pos = cursorPosFor(metrics,
      { right: pr.right - lineRect.left, top: pr.top - lineRect.top },
      st[active].shown);
    cursorEl.style.left = pos.left + "px";
    cursorEl.style.top = pos.top + "px";
  }
  if (active < 0 && cursorHome !== -1){
    cursorEl.remove(); cursorHome = -1;
  }
  return SCHED.totalMs;
}

let timer = null, startedAt = 0, pausedElapsed = 0, playing = false;
function tick(){
  const elapsed = performance.now() - startedAt;
  const total = render(elapsed);
  if (elapsed < total){ timer = requestAnimationFrame(tick); }
  else { playing = false; render(total); }
}
function play(){
  if (playing) return;
  playing = true; startedAt = performance.now() - pausedElapsed;
  timer = requestAnimationFrame(tick);
}
function pause(){
  if (!playing) return;
  pausedElapsed = performance.now() - startedAt;
  playing = false;
  if (timer) cancelAnimationFrame(timer);
}
function restart(){ playing = false; if (timer) cancelAnimationFrame(timer); pausedElapsed = 0; play(); }

window.addEventListener("message", function(e){
  if (e.data === "play") play();
  if (e.data === "pause") pause();
  if (e.data === "restart") restart();
});
render(0);
play();
</script>
</body>
</html>

==== build record ====
# T03 — Live-typed lyric text · build record · attempt 3 · 2026-11-17

Item: T03, Packet P1 @ 0:21–0:35.
This record is SCORE-BLIND by construction: construction facts, the
source checkpoint table, the window contract, and diagnostic results
only. Final source: recreation.html, sha256
1f182eac11d6afb4a02570526d4b0a26fcd96fdcda08381a298f0d12abff8b96.

## Construction facts
- Single self-contained HTML file; DOM typing; all content, timing,
  palette and presentation values come from CONFIG at the top of the
  script (23 keys; every key is consumed at a named application site —
  the census leg filed beside this record carries the full table). No
  external assets, no specimen media; specimen words appear only as
  CONFIG data.
- Typing unit is the grapheme cluster: `segmentGraphemes()` uses
  `Intl.Segmenter` with granularity "grapheme" where available;
  otherwise a documented fallback merges code points with combining
  marks, variation selectors, skin-tone modifiers, ZWJ sequences, and
  regional-indicator pairs (the fallback does not implement every
  UAX #29 rule, e.g. some Indic conjuncts — limitation recorded here).
- Reveal construction: the full text of every line is laid out once at
  build time as one span per grapheme cluster, all spans present in
  the DOM from the first frame; per-frame updates toggle only span
  visibility (shown ⇔ index < the state model's count for that line).
  Word wrap is therefore computed on the complete text at build time,
  and a partially revealed word cannot change rows as clusters arrive.
  Span concatenation equals the full line text at every elapsed time.
- Cursor: ONE cursor element is created once, never rebuilt; it is
  positioned outside the text flow (absolute positioning inside its
  line, which is relatively positioned), so it adds zero width and
  zero height and cannot affect wrapping. Per frame its left/top are
  set from the measured boundary of the revealed text: the boundary is
  the last revealed grapheme span (left = that span's right edge
  against the line box, top = that span's top, both from runtime
  rectangles). Boundary states: nothing revealed → the prompt span's
  right edge on the first row; partial word → immediately after the
  last revealed cluster, before the unrevealed remainder of the same
  word; wrapped row → the boundary span's own row top; completed →
  after the final cluster, where the cursor holds until the next line
  activates. Its blink animation is never restarted by frame rendering.
  The stage is never rebuilt (no innerHTML writes anywhere in the
  file).
- Visible window: a line is displayed exactly when it lies inside the
  active-anchored window (window start ≤ line ≤ active line); before
  the first line starts, only line 0's slot stands, empty. Future
  lines are not displayed, so they show no prompt and reserve no
  height on stage. A line's prompt keeps its layout width at all times
  and becomes visible exactly when its line activates, so activation
  never shifts the line. The window slides only when the active line
  changes.
- Layout measurement: one off-screen measurement pass supplies every
  height the stage relies on. Each line is laid out in a measurement
  stage sharing the live stage's width, font size, line-height and
  wrapping (no element in it is hidden with display:none); each line's
  full-layout height is recorded, and the live stage's reserved height
  is the largest total of any visible window of those heights. The
  measured per-line heights are the same heights the displayed lines
  occupy when live. One invalidation handler governs font and resize:
  the clamped font size is recomputed first, then the measurement pass
  re-runs, the reserved height resets, and the frame re-renders; it
  fires on window resize and when document fonts finish loading. A
  stale measurement is never reused after either event.
- Sequencing is a pure function of elapsed time (`stateAt(sched,
  elapsed)`): the same elapsed always yields the same shown counts, on
  seek or on continuous play. Playback self-starts inside the file and
  also answers the comparison page's play/pause/restart messages; that
  interface is unchanged from the previous build, and comparison.html
  is not changed by this build (its ORIGINAL side is untouched).

## Schedule construction (one contract for every mode)
Validation order is fixed: (1) configuration values are
validated/defaulted; (2) exactly one mode is selected — a valid
authored schedule first, then an exact specimen match, then the
fallback allocation; modes never blend; (3) the base schedule for the
selected mode is built; (4) the base is checked for containment inside
the window; (5) an explicit per-cluster interval override may rescale
a derived (specimen/fallback) schedule; (6) any overrun is recorded on
the schedule, never silently clamped.
- Value policies: a window that is not a finite positive number falls
  back to the 14,000 ms default (diagnostic recorded); start delay
  non-finite → 300, negative → 0; line pause NaN → 900, negative → 0,
  infinite → treated as budget-exhausting (the containment policy
  below caps it); final hold non-finite → 470, negative → 0. An empty
  line list yields an empty schedule with the window as its total. A
  line with empty text takes a zero duration at its sequential start
  and keeps its pause slot. A single line takes the full typing span
  as its duration and fits the window exactly, whatever its cluster
  count.
- Degenerate window: when the window leaves no typing span (final
  hold < window ≤ start delay + final hold), every line takes a zero
  duration at the effective start (max(0, window − final hold)), the
  schedule is flagged overflow + degenerate, nothing is revealed at
  any elapsed time, and no value in the schedule is NaN.
- Containment: a derived schedule's base always ends inside the
  window. The fallback's final line ends at windowMs − finalHoldMs
  exactly, by construction (durations allocated in proportion to
  cluster counts, rounding residual on the last cluster-carrying
  line). When the inter-line pauses alone would exhaust the typing
  span, the effective pause compresses to at most a quarter of the
  span, leaving a positive typing budget; schedules whose pauses fit
  are never compressed (the six-line default keeps its 900 ms pauses;
  the 17-line default case compresses to an effective pause of
  206 ms). The schedule carries {overflow, effectivePauseMs,
  effectiveStartMs} and the stage element exposes the overflow state
  as a data attribute.
- Authored schedule: CONFIG.lineSchedule (per-line start/duration,
  independent of the line texts) is used exactly as given when valid
  for the current line count (finite, monotonic starts, every end
  inside the window); an invalid one falls back to the next mode with
  a diagnostic. Authored timings are never rescaled.
- Interval override: CONFIG.charMs / ?charMs=N sets the per-cluster
  typing interval directly (finite, > 0, clamped to [10, 1000];
  invalid or absent → ignored, schedule identical to the
  no-override schedule). In the fallback mode each line's duration
  becomes its cluster count × the interval; in the specimen mode all
  durations scale by interval ÷ the derived per-cluster interval.
  Starts recompute sequentially, preserving the first start and the
  base inter-line pauses. If the rescaled end passes the window, the
  schedule's total becomes the rescaled end + the final hold and the
  overrun flag is set — explicit, never clamped. When an authored
  schedule and the override are both present, the authored schedule
  stands and the schedule records charMsIgnoredAuthored: true.

## Source checkpoint table (specimen window P1 @ 0:21–0:35, 14.0 s)
Evidence the record actually carries:
- The catalogue establishes the window bounds (0:21–0:35) and that the
  window spans the three configured lyric lines in order, typed
  char-by-char with accumulation.
- One evidence frame (ev/t23.jpg, ≈0:23, i.e. ≈2 s into the window on
  the 20.5 s cut offset) shows line 1 with the block cursor at its
  head. A single still cannot separate "line just completed" from
  "final cluster just revealed", so the frame anchors only that line 1
  is the active line early in the window.
- The record carries NO timed transcript, ASR alignment, or vocal-beat
  anchors. Per-line start/end times in the specimen are therefore NOT
  derivable from the record; any per-line boundary below is an
  allocation model, not a measurement. Uncertainty on each
  intermediate boundary is large (±3 s class — bounded only by the
  window ends).

Derived specimen schedule (allocation model): typing budget = window
14 000 ms − start delay 300 ms − inter-line pauses 2 × 900 ms − final
hold 470 ms = 11 430 ms, allocated per line in proportion to
grapheme-cluster count (28 / 34 / 28 = 90 clusters; ≈127 ms per
cluster):

| Line | Clusters | Start (ms into window) | End (ms) | Basis |
|---|---|---|---|---|
| 1 "I made a song, I made a beat" | 28 | 300 | 3 856 | proportional allocation |
| 2 "I wrote the words, I feel the heat" | 34 | 4 756 | 9 074 | proportional allocation |
| 3 "I made a song, I made a beat" | 28 | 9 974 | 13 530 | proportional allocation |
| final hold | — | 13 530 | 14 000 | window remainder only (470 ms) |

Typing spans 13 530 of the 14 000 ms window; the final hold is exactly
the window remainder, with the full text and the blinking cursor held.
Internal consistency of the model is asserted by the own-check suite:
first reveal at ≈427 ms (300 + one ≈127 ms interval), pauses total
1 800 ms = 12.9% of the window, completion at 13 530 ms.

## Literal whitelist (per literal, outside CONFIG data)
Hex colors outside CONFIG data: none. Numeric literals outside CONFIG
data: 0, 1, 2 (structural indices/bounds) · blink keyframe percentages
55 / 56 / 100 (animation shape; the period is a CONFIG key) ·
validation bounds 10 / 1000 (interval-override clamp; 10 also serves
as a parse radix) · validation default mirrors 14000 / 300 / 900 / 470
(used only when the matching CONFIG value is invalid; each mirrors
that key's CONFIG default) · 0.25 (the containment policy's pause
share cap) · 10000 (the measurement stage's off-screen offset) ·
comment labels: the technique identifier in the header comment, the
UAX #29 specification reference, and the step numbers of the
validation-order enumeration in a comment. Unicode code-point ranges
in the segmentation fallback are segmentation data constants.
SPECIMEN_LINES is CONFIG data (it feeds CONFIG.lines), not a logic
literal.

## Diagnostics (own checks, before the wave)
- Node logic suite (functions extracted verbatim from the built file;
  full packet filed as own-check-packet-attempt3.txt): 135 checks,
  135 PASS, 0 FAIL — schedule validation and containment (including
  the 17-line case: compression engaged, effective pause 206 ms, last
  end exactly 13 530 ms; the degenerate window shape; empty content;
  single and oversized single lines; empty-text lines; invalid
  specimen table falling back with a diagnostic), the visible-window
  model (sweep: displayed count never exceeds the configured maximum,
  no future line displayed, prompt visibility exactly at activation,
  specimen progression 1→2→3, window constant within each line's
  span, boundary shifts equal to the departed slot's measured height),
  the interval override as an effect mapping (specimen durations
  double at a 254 ms interval and halve at 63.5 ms; invalid values
  leave the schedule identical; clamps at 10 and 1000 ms), the
  authored schedule (exact use, length/non-finite/monotonic/end
  rejections with diagnostics, authored standing over the override
  with the ignore flag recorded), the cursor boundary model (all four
  states, including a boundary on a continuation row), span
  concatenation identity and visible-count equality with the state
  model on specimen and swapped lines, grapheme cases (decomposed
  accent, ZWJ family, flag pair — primary segmenter and fallback
  segmenter each 3/3), state determinism, and the checkpoint-table
  regression (starts 300/4 756/9 974, ends 3 856/9 074/13 530).
- Per-key CONFIG consumption census: 23/23 keys asserted consumed
  (key → the computed/rendered effect it drives), and the literal
  census above passes against the whitelist.
- Source census, new terms for this build's reveal construction:
  exactly 1 cursor element creation; 0 innerHTML writes; grapheme
  span count = total cluster count (90 for the specimen lines);
  per-frame path touches span visibility, line display and prompt
  visibility at window boundaries, and the cursor's left/top only.
- Purity grep on recreation.html
  (segment.mp4|source.mp4|<video|<img>|.jpg|.png|.mp4): 0 hits.
  Asset inventory: code only.
- Syntax: extracted script passes node --check.
- PIXEL-UNVERIFIED: headless render attempted with
  /opt/meta-chromium/chrome (private debugging port 9417, dump-dom);
  launch failed before any page load — exit 13, stderr: "Hatch WebGL
  domain policy is required for browser startup"; dumped DOM = 0
  bytes. Geometry claims therefore rest on the deterministic logic
  tests and the measurement construction, not on rendered pixels.
  Coordinates asserted by the checks are layout-model values, never
  measured pixels. This is a named limitation, not a pass.
- comparison.html: NOT changed — its interface to the recreation is
  the iframe + postMessage controls, which are unchanged. The
  comparison's ORIGINAL side is untouched.

## Preservation and staged checkpoints
- The previous build's source is preserved verbatim at
  recreation-attempt-2.html (content copy, independent inode; sha256
  c0aee98c1dacf24c989d5dc31aa8fa382209aeeb633e1ab3dd46e7f3e34bc66c,
  equal to the pre-build working file). The complete prior evidence
  set (28 files) was inventoried and hashed before any mutation
  (evidence-inventory-attempt3.txt); a census immediately after the
  first overwrite found every prior file byte-identical except the
  working file itself, whose change is this build.
- The build proceeded in five stages, each closed by a create-once
  checkpoint (source content copy + that stage's check output, inode
  independent of the working file): stage A (schedule validation and
  containment) sha256 bf7466cdd12f7828acab59d19f5f7cb390e01b9b698e9ae737e1fb14c88ebd55 ·
  stage B (visible window and measurement) sha256
  617cf80202ee74fa29855d87d05ba19503ed7982e3d710a182e72684e3b54c91 ·
  stage C (interval override and authored schedule) sha256
  b3c791dff56b418df80540ec111a46efd6547d562f0b9703812f5f4bbb5ddf8a ·
  stage D (span reveal and boundary cursor) sha256
  b7d19bb1c292946dadf6c1315f2dd593cbf5986eceed5cb3c493b84e79226626 ·
  stage E (presentation values into CONFIG; final source) sha256
  1f182eac11d6afb4a02570526d4b0a26fcd96fdcda08381a298f0d12abff8b96.
  Any score movement files as BUNDLED across the stages unless a
  stage's own checks isolate the mechanism.
- Direction (RTL) layout mirroring is not implemented in this build;
  grapheme segmentation and the visible-window policy are this build's
  multilingual provisions. Visibility-hidden unrevealed spans remain
  selectable in the DOM; that is a presentation note, recorded here.

==== own-check packet ====
PASS specimen mode
PASS specimen starts 300/4756/9974
PASS specimen ends 3856/9074/13530
PASS specimen totalMs 14000
PASS specimen no overflow/overrun
PASS 17-line mode fallback
PASS 17-line compression engaged (overflow)
PASS 17-line effectivePauseMs 206
PASS 17-line all starts<ends<=13530
PASS 17-line last end exactly 13530
PASS 17-line finite
PASS 6-line effectivePauseMs 900 (no compression)
PASS 6-line last end exactly 13530
PASS windowMs NaN -> default schedule identical
PASS windowMs Infinity -> default schedule identical
PASS windowMs -5 -> default schedule identical
PASS windowMs 0 -> default schedule identical
PASS linePauseMs Infinity -> compression cap 661
PASS linePauseMs NaN -> 900
PASS linePauseMs negative -> 0 pauses, fits
PASS startDelayMs NaN -> 300
PASS startDelayMs Infinity -> 300
PASS startDelayMs negative -> 0
PASS finalHoldMs NaN -> 470 (last end 13530)
PASS finalHoldMs negative -> 0 (last end 14000)
PASS degenerate window 700: flagged
PASS degenerate: all durations 0, starts at effectiveStart 230
PASS degenerate: finite, no NaN
PASS degenerate: stateAt counts all 0 at 0/350/699
PASS n=0 empty schedule
PASS n=1 duration = full span 13230, end 13530
PASS oversized single line fits exactly, no overflow flag
PASS empty-text line duration 0 at sequential start
PASS empty-text schedule last end 13530
PASS specimen table ending past window -> fallback + diagnostic
STAGE-A SUMMARY pass=35 fail=0
stageA rc=0
PASS 6-line sweep: displayed <=3, none above active, exact window set
PASS prompt visibility iff li<=active across sweep
PASS pre-start: only line 0 displayed, no prompt visible
PASS specimen displayed progression 1,1,1,1,2,2,3,3
PASS maxVisibleLines=1: only active line displayed
PASS maxVisibleLines>=count: all started lines displayed
PASS maxVisibleLines=0 clamped to 1 by the model
PASS maxWindowHeightFor windows max
PASS boundary slide: line1 top 10->0? model tops before
PASS boundary slide: surviving line tops shift by departed height only
PASS displayed set constant within each line's typing span
STAGE-B SUMMARY pass=11 fail=0
stageB rc=0
PASS specimen charMs=254 line durations 7112/8636/7112
PASS specimen charMs=254 starts 300/8312/17848
PASS specimen charMs=254 overrun: totalMs = end + 470 = 25430
PASS specimen charMs=63.5 durations halved 1778/2159/1778
PASS specimen charMs=63.5 fits: totalMs 14000, no overrun
PASS charMs 0 ignored: schedule identical
PASS charMs -5 ignored: schedule identical
PASS charMs NaN ignored: schedule identical
PASS charMs abc ignored: schedule identical
PASS charMs=5 clamped to 10: line1 duration 280
PASS charMs=5000 clamped to 1000: line1 duration 27992
PASS fallback charMs=100 durations = clusters x 100
PASS fallback charMs=100 starts preserve delay + pauses
PASS fallback charMs=100 fits window, no overrun
PASS authored mode with swapped lines
PASS authored timings used exactly
PASS authored + charMs: schedule identical to authored-only
PASS authored + charMs: charMsIgnoredAuthored set
PASS authored length mismatch -> fallback + diagnostic
PASS authored end past window -> not authored, diagnostic, specimen by precedence
PASS authored non-monotonic -> not authored + diagnostic
PASS authored non-finite -> not authored
PASS default specimen schedule unchanged
STAGE-C SUMMARY pass=23 fail=0
stageC rc=0
PASS visible-span count equals stateAt shown at every sampled elapsed
PASS span concatenation identity: full line text at every line
PASS total grapheme spans for specimen = 90
PASS swap span concatenation identity
PASS cursor beginning: prompt right edge, first row
PASS cursor partial-word: right edge of last revealed cluster, same row
PASS cursor wrapped-row: top is the continuation row's top
PASS cursor completed: right edge of the final cluster
PASS exactly 1 cursor element creation
PASS 0 innerHTML writes
PASS cursor is out of flow (position:absolute in its class rule)
PASS no trailing spacer construction remains
PASS per-frame path toggles span visibility (render uses style.visibility on spans)
PASS grapheme spans built once per cluster from the schedule clusters
STAGE-D SUMMARY pass=14 fail=0
stageD rc=0
CONFIG keys (23): lines, windowMs, startDelayMs, linePauseMs, finalHoldMs, specimenSchedule, maxVisibleLines, charMs, lineSchedule, prompt, bg, ink, accent, cursorColor, fontFamily, fontSizePx, fontMinPx, fontVwFactor, lineHeight, promptGapCh, cursorWidthCh, cursorBlinkMs, stagePadding
PASS key lines consumed: schedule clusters follow lines
PASS key windowMs consumed: totalMs follows windowMs
PASS key startDelayMs consumed: first start follows it
PASS key linePauseMs consumed: gap follows it
PASS key finalHoldMs consumed: last end = window - hold
PASS key specimenSchedule consumed: specimen mode uses its table
PASS key maxVisibleLines consumed: window size follows it
PASS key charMs consumed: durations rescale
PASS key lineSchedule consumed: authored mode
PASS key lines application sites >= 1
PASS key windowMs consumed via cfg.* in schedule derivation
PASS key startDelayMs consumed via cfg.* in schedule derivation
PASS key linePauseMs consumed via cfg.* in schedule derivation
PASS key finalHoldMs consumed via cfg.* in schedule derivation
PASS key specimenSchedule consumed via cfg.* in schedule derivation
PASS key maxVisibleLines application sites >= 1
PASS key charMs consumed via cfg.* in schedule derivation
PASS key lineSchedule consumed via cfg.* in schedule derivation
PASS key prompt application sites >= 2
PASS key bg application sites >= 1
PASS key ink application sites >= 1
PASS key accent application sites >= 1
PASS key cursorColor application sites >= 1
PASS key fontFamily application sites >= 2
PASS key fontSizePx application sites >= 2
PASS key fontMinPx application sites >= 2
PASS key fontVwFactor application sites >= 2
PASS key lineHeight application sites >= 2
PASS key promptGapCh application sites >= 2
PASS key cursorWidthCh application sites >= 1
PASS key cursorBlinkMs application sites >= 1
PASS key stagePadding application sites >= 1
PASS no hex colors outside CONFIG data
LITERALS outside CONFIG data:
  0 x66 -> structural (index/zero bound)
  0.25 x1 -> overflow policy constant (pause share cap)
  03 x1 -> technique identifier in the header comment (label, not a logic literal)
  1 x32 -> structural (index/step count/unit)
  10 x4 -> validation bound / radix (override clamp lower bound; parse radix)
  100 x3 -> blink keyframe percentage (animation shape)
  1000 x3 -> validation bound (override clamp upper bound)
  10000 x1 -> measurement-stage off-screen offset (structural placement)
  14000 x1 -> validation default mirror of the windowMs CONFIG default
  2 x2 -> structural (index)
  29 x1 -> specification reference in a comment (UAX #29, segmentation rules)
  3 x1 -> step number in a comment enumeration (validation order)
  300 x1 -> validation default mirror of the startDelayMs CONFIG default
  4 x1 -> step number in a comment enumeration (validation order)
  470 x1 -> validation default mirror of the finalHoldMs CONFIG default
  55 x1 -> blink keyframe percentage (animation shape)
  56 x1 -> blink keyframe percentage (animation shape)
  900 x1 -> validation default mirror of the linePauseMs CONFIG default
PASS every numeric literal outside CONFIG data is whitelisted
STAGE-E SUMMARY pass=34 fail=0
stageE rc=0
PASS first reveal at 427ms (shown 0 at 426, 1 at 427)
PASS pauses total 1800ms = 12.9% of window
PASS completion 13530, final hold exactly 470
PASS stateAt determinism (same elapsed, same state)
PASS per-line not-started / partial / complete states
PASS decomposed accent (e + U+0301) is 1 cluster
PASS ZWJ family emoji is 1 cluster
PASS flag pair is 1 cluster
PASS no intermediate state splits a cluster (sweep)
PASS fallback segmenter: decomposed accent 1 cluster
PASS fallback segmenter: ZWJ family 1 cluster
PASS fallback segmenter: flag pair 1 cluster
PASS French/Spanish swap: fallback mode, both lines complete in window
PASS 6-line swap fits window exactly
PASS 17-line adversarial swap contained (overflow guard)
PASS authored swap uses authored timings exactly
PASS authored swap with interval override: authored stands, override recorded ignored
PASS active line progression -1/0/1/2 across the window
FINAL-REGRESSION SUMMARY pass=18 fail=0
final rc=0

warning: Codex could not find bubblewrap on PATH. Install bubblewrap with your OS package manager. See the sandbox prerequisites: https://developers.openai.com/codex/concepts/sandboxing#prerequisites. Codex will use the bundled bubblewrap in the meantime.
codex
I’ll read the run files from disk, then assess config reuse and multilingual edge cases within the reusability lens.

exec
/bin/bash -lc pwd in /tmp/t03a3/lensrun
 succeeded in 30ms:
/tmp/t03a3/lensrun

exec
/bin/bash -lc "rg --files -g '*'" in /tmp/t03a3/lensrun
 succeeded in 95ms:
recreation.html
build-record-attempt3.md
own-check-packet-attempt3.txt

exec
/bin/bash -lc 'nl -ba recreation.html' in /tmp/t03a3/lensrun
 succeeded in 6ms:
     1	<!DOCTYPE html>
     2	<html lang="en">
     3	<head>
     4	<meta charset="utf-8">
     5	<meta name="viewport" content="width=device-width, initial-scale=1">
     6	<title>T03 — Live-typed lyric text (parameterized recreation)</title>
     7	<style>
     8	  html,body{margin:0;padding:0;height:100%;}
     9	  body{display:flex;align-items:flex-end;box-sizing:border-box;}
    10	  #stage{width:100%;position:relative;}
    11	  .line{white-space:pre-wrap;word-break:break-word;box-sizing:border-box;position:relative;}
    12	  .cursor{position:absolute;}
    13	  @keyframes blink{0%,55%{opacity:1}56%,100%{opacity:0}}
    14	</style>
    15	</head>
    16	<body>
    17	<div id="stage" aria-live="off"></div>
    18	<script>
    19	"use strict";
    20	/* T03 — Live-typed lyric text. All content/timing/palette from CONFIG.
    21	   Timing has two layers:
    22	   (a) SPECIMEN schedule — per-line start offsets/durations derived from the
    23	       source checkpoint table recorded with this recreation; used only when
    24	       CONFIG.lines exactly match the specimen lines.
    25	   (b) FALLBACK policy — for any swapped text, per-line durations are derived
    26	       from line count, grapheme counts, and CONFIG.windowMs. The fallback is
    27	       an allocation policy, never specimen evidence.
    28	   Typing reveals complete grapheme clusters: the full text of every line
    29	   is laid out once as one span per cluster, and revealing toggles span
    30	   visibility only, so word wrap is computed on the complete text and a
    31	   partially revealed word can never change rows. One persistent cursor
    32	   element is created once; it sits outside the text flow and is
    33	   positioned at the revealed grapheme boundary of the active line.
    34	   URL overrides: ?lines=A|B ?line=TEXT ?charMs=N ?accent=HEX
    35	   ?maxVisibleLines=N. The charMs override sets the per-cluster typing
    36	   interval directly: derived schedules (specimen and fallback) rescale
    37	   around it, preserving the start delay and the inter-line pauses; if
    38	   the rescaled performance runs past the window, the schedule records
    39	   the overrun instead of clamping it. An authored schedule
    40	   (CONFIG.lineSchedule) is used exactly as given and is never rescaled. */
    41	const SPECIMEN_LINES = [
    42	  "I made a song, I made a beat",
    43	  "I wrote the words, I feel the heat",
    44	  "I made a song, I made a beat"
    45	];
    46	const CONFIG = {
    47	  lines: SPECIMEN_LINES.slice(),
    48	  windowMs: 14000,
    49	  startDelayMs: 300,
    50	  linePauseMs: 900,
    51	  finalHoldMs: 470,
    52	  specimenSchedule: [
    53	    { startMs: 300,  durationMs: 3556 },
    54	    { startMs: 4756, durationMs: 4318 },
    55	    { startMs: 9974, durationMs: 3556 }
    56	  ],
    57	  maxVisibleLines: 3,
    58	  charMs: null,
    59	  lineSchedule: null,
    60	  prompt: ">",
    61	  bg: "#060807",
    62	  ink: "#e8ece7",
    63	  accent: "#7ac74f",
    64	  cursorColor: "#9aa79b",
    65	  fontFamily: 'ui-monospace, "SF Mono", Menlo, Consolas, monospace',
    66	  fontSizePx: 30,
    67	  fontMinPx: 16,
    68	  fontVwFactor: 0.055,
    69	  lineHeight: 1.5,
    70	  promptGapCh: 0.6,
    71	  cursorWidthCh: 0.62,
    72	  cursorBlinkMs: 1000,
    73	  stagePadding: "6vh 5vw"
    74	};
    75	(function applyOverrides(){
    76	  const q = new URLSearchParams(location.search);
    77	  if (q.get("lines")) CONFIG.lines = q.get("lines").split("|");
    78	  else if (q.get("line")) CONFIG.lines = [q.get("line")].concat(CONFIG.lines.slice(1));
    79	  if (q.get("accent")) CONFIG.accent = q.get("accent");
    80	  if (q.get("charMs")){
    81	    const cm = parseFloat(q.get("charMs"));
    82	    if (isFinite(cm) && cm > 0) CONFIG.charMs = Math.min(1000, Math.max(10, cm));
    83	  }
    84	  if (q.get("maxVisibleLines")){
    85	    const mv = parseInt(q.get("maxVisibleLines"), 10);
    86	    if (isFinite(mv)) CONFIG.maxVisibleLines = Math.max(1, mv);
    87	  }
    88	})();
    89	
    90	/* --- Grapheme segmentation: complete clusters only --- */
    91	function segmentGraphemes(text){
    92	  if (typeof Intl !== "undefined" && typeof Intl.Segmenter === "function"){
    93	    const seg = new Intl.Segmenter(undefined, { granularity: "grapheme" });
    94	    return Array.from(seg.segment(text), function(s){ return s.segment; });
    95	  }
    96	  /* Documented fallback (no Intl.Segmenter): code points merged with
    97	     combining marks, variation selectors, skin-tone modifiers, ZWJ
    98	     sequences, and regional-indicator pairs. Approximation: it does not
    99	     implement every UAX #29 rule (e.g. some Indic conjuncts). */
   100	  const cps = Array.from(text);
   101	  const out = [];
   102	  let joinNext = false;
   103	  for (let i = 0; i < cps.length; i++){
   104	    const cp = cps[i];
   105	    const code = cp.codePointAt(0);
   106	    const isExtender = /[\p{M}\uFE00-\uFE0F]/u.test(cp) ||
   107	      (code >= 0x1F3FB && code <= 0x1F3FF) || code === 0x20E3;
   108	    const isZWJ = code === 0x200D;
   109	    const isRI = code >= 0x1F1E6 && code <= 0x1F1FF;
   110	    if (out.length && (isExtender || isZWJ || joinNext ||
   111	        (isRI && Array.from(out[out.length-1]).length % 2 === 1 &&
   112	         (()=>{ const p=Array.from(out[out.length-1]); const c=p[p.length-1].codePointAt(0); return c>=0x1F1E6&&c<=0x1F1FF; })()))){
   113	      out[out.length-1] += cp;
   114	    } else {
   115	      out.push(cp);
   116	    }
   117	    joinNext = isZWJ;
   118	  }
   119	  return out;
   120	}
   121	
   122	/* --- Schedule derivation ---
   123	   One validation order governs every mode: configuration values are
   124	   validated/defaulted first, then exactly one mode is selected
   125	   (authored schedule, then specimen match, then the fallback
   126	   allocation), then the base schedule for that mode is built and
   127	   checked for containment inside the window, then an explicit
   128	   per-cluster interval override may rescale a derived schedule, and
   129	   any overrun past the window is recorded rather than clamped. A
   130	   derived schedule's base always ends inside the window: when the
   131	   inter-line pauses alone would exhaust the typing span, the
   132	   effective pause is compressed so pauses take at most a quarter of
   133	   the span and a positive typing budget remains. Authored timings are
   134	   used exactly as given; the interval override never rescales them. */
   135	function isSpecimen(lines){
   136	  return lines.length === SPECIMEN_LINES.length &&
   137	    lines.every(function(l, i){ return l === SPECIMEN_LINES[i]; });
   138	}
   139	function deriveSchedule(cfg){
   140	  const diagnostics = [];
   141	  const clusters = cfg.lines.map(segmentGraphemes);
   142	  const n = cfg.lines.length;
   143	  /* (1) value validation / defaulting */
   144	  let windowMs = cfg.windowMs;
   145	  if (typeof windowMs !== "number" || !isFinite(windowMs) || windowMs <= 0){
   146	    windowMs = 14000; diagnostics.push("windowMsDefaulted");
   147	  }
   148	  let startDelayMs = cfg.startDelayMs;
   149	  if (typeof startDelayMs !== "number" || !isFinite(startDelayMs)){
   150	    startDelayMs = 300; diagnostics.push("startDelayMsDefaulted");
   151	  }
   152	  if (startDelayMs < 0) startDelayMs = 0;
   153	  let linePauseMs = cfg.linePauseMs;
   154	  if (typeof linePauseMs !== "number" || isNaN(linePauseMs)){
   155	    linePauseMs = 900; diagnostics.push("linePauseMsDefaulted");
   156	  }
   157	  if (linePauseMs < 0) linePauseMs = 0;
   158	  let finalHoldMs = cfg.finalHoldMs;
   159	  if (typeof finalHoldMs !== "number" || !isFinite(finalHoldMs)){
   160	    finalHoldMs = 470; diagnostics.push("finalHoldMsDefaulted");
   161	  }
   162	  if (finalHoldMs < 0) finalHoldMs = 0;
   163	  const base = { clusters: clusters, totalMs: windowMs, overflow: false,
   164	    overrun: false, degenerate: false, charMsIgnoredAuthored: false,
   165	    diagnostics: diagnostics,
   166	    effectivePauseMs: (n > 1 && isFinite(linePauseMs)) ? linePauseMs : 0,
   167	    effectiveStartMs: startDelayMs };
   168	  if (n === 0){
   169	    return Object.assign(base, { mode: "fallback", lines: [] });
   170	  }
   171	  /* Per-cluster interval override: valid only as a finite number > 0,
   172	     clamped to [10, 1000]; anything else is ignored and the schedule
   173	     is identical to the no-override schedule. */
   174	  const charMsPresent = cfg.charMs !== null && cfg.charMs !== undefined;
   175	  const charMsValid = typeof cfg.charMs === "number" && isFinite(cfg.charMs) && cfg.charMs > 0;
   176	  const charMs = charMsValid ? Math.min(1000, Math.max(10, cfg.charMs)) : null;
   177	  /* Authored schedule: a content-independent per-line schedule, used
   178	     exactly as given when it is valid for the current line count
   179	     (finite, monotonic starts, every end inside the window). An
   180	     invalid one falls back with a diagnostic. */
   181	  if (cfg.lineSchedule){
   182	    let authoredOk = Array.isArray(cfg.lineSchedule) &&
   183	      cfg.lineSchedule.length === n &&
   184	      cfg.lineSchedule.every(function(s, i){
   185	        if (!s || !isFinite(s.startMs) || !isFinite(s.durationMs) || s.durationMs < 0) return false;
   186	        if (s.startMs + s.durationMs > windowMs) return false;
   187	        if (i > 0 && s.startMs < cfg.lineSchedule[i - 1].startMs) return false;
   188	        return true;
   189	      });
   190	    if (authoredOk){
   191	      base.charMsIgnoredAuthored = charMsPresent;
   192	      return Object.assign(base, { mode: "authored",
   193	        lines: cfg.lineSchedule.map(function(s){
   194	          return { startMs: s.startMs, durationMs: s.durationMs }; }) });
   195	    }
   196	    diagnostics.push("lineScheduleInvalidFallback");
   197	  }
   198	  /* Rescaling step for derived schedules: durations rescale around the
   199	     override interval, starts recompute sequentially preserving the
   200	     first start and the base inter-line pauses. */
   201	  function finish(result){
   202	    if (result.degenerate || !charMsValid) return result;
   203	    const totalClusters = clusters.reduce(function(a, c){ return a + c.length; }, 0);
   204	    if (totalClusters === 0 || result.lines.length === 0) return result;
   205	    const gaps = [];
   206	    for (let i = 1; i < result.lines.length; i++){
   207	      gaps.push(result.lines[i].startMs -
   208	        (result.lines[i - 1].startMs + result.lines[i - 1].durationMs));
   209	    }
   210	    let newLines;
   211	    if (result.mode === "fallback"){
   212	      newLines = result.lines.map(function(l, i){
   213	        return { startMs: 0, durationMs: Math.round(clusters[i].length * charMs) };
   214	      });
   215	    } else {
   216	      const baseDur = result.lines.reduce(function(a, l){ return a + l.durationMs; }, 0);
   217	      const scale = charMs / (baseDur / totalClusters);
   218	      newLines = result.lines.map(function(l){
   219	        return { startMs: 0, durationMs: Math.round(l.durationMs * scale) };
   220	      });
   221	    }
   222	    let t = result.lines[0].startMs;
   223	    newLines.forEach(function(l, i){
   224	      l.startMs = t;
   225	      t += l.durationMs + (i < gaps.length ? gaps[i] : 0);
   226	    });
   227	    result.lines = newLines;
   228	    const lastL = newLines[newLines.length - 1];
   229	    const end = lastL.startMs + lastL.durationMs;
   230	    if (end > windowMs){
   231	      result.overrun = true;
   232	      result.totalMs = end + finalHoldMs;
   233	    }
   234	    return result;
   235	  }
   236	  /* (2)+(3)+(4) specimen base schedule: validated for finiteness,
   237	     monotonic non-overlap and containment; an invalid table falls back
   238	     to the allocation with a diagnostic, never to a silent bad schedule. */
   239	  let specimenOk = false;
   240	  if (isSpecimen(cfg.lines) && cfg.specimenSchedule &&
   241	      cfg.specimenSchedule.length === n){
   242	    specimenOk = cfg.specimenSchedule.every(function(s, i){
   243	      if (!isFinite(s.startMs) || !isFinite(s.durationMs) || s.durationMs < 0) return false;
   244	      if (s.startMs + s.durationMs > windowMs) return false;
   245	      if (i > 0){
   246	        const p = cfg.specimenSchedule[i - 1];
   247	        if (s.startMs < p.startMs || s.startMs < p.startMs + p.durationMs) return false;
   248	      }
   249	      return true;
   250	    });
   251	  }
   252	  if (specimenOk){
   253	    return finish(Object.assign(base, { mode: "specimen",
   254	      lines: cfg.specimenSchedule.map(function(s){
   255	        return { startMs: s.startMs, durationMs: s.durationMs }; }) }));
   256	  }
   257	  if (isSpecimen(cfg.lines) && cfg.specimenSchedule){
   258	    diagnostics.push("specimenScheduleInvalidFallback");
   259	  }
   260	  /* Fallback allocation: typing budget = window minus start delay,
   261	     inter-line pauses, and the final-hold reserve; allocated per line
   262	     in proportion to grapheme-cluster count, with the rounding residual
   263	     on the last line that carries clusters, so the final line ends at
   264	     windowMs - finalHoldMs exactly. An empty-text line takes a zero
   265	     duration at its sequential start and keeps its pause slot. */
   266	  const span = windowMs - startDelayMs - finalHoldMs;
   267	  const effectiveStartMs = Math.min(startDelayMs, Math.max(0, windowMs - finalHoldMs));
   268	  base.effectiveStartMs = effectiveStartMs;
   269	  if (span <= 0){
   270	    /* Degenerate window: no typing span remains. Every line takes a
   271	       zero duration at the effective start, the schedule is flagged,
   272	       and the state model reveals nothing for it. */
   273	    base.degenerate = true; base.overflow = true;
   274	    return finish(Object.assign(base, { mode: "fallback",
   275	      lines: clusters.map(function(){
   276	        return { startMs: effectiveStartMs, durationMs: 0 }; }) }));
   277	  }
   278	  const pausesCount = Math.max(0, n - 1);
   279	  let effectivePauseMs = linePauseMs;
   280	  let overflow = false;
   281	  if (pausesCount > 0 && pausesCount * linePauseMs >= span){
   282	    effectivePauseMs = Math.min(linePauseMs,
   283	      Math.floor(0.25 * Math.max(0, span) / pausesCount));
   284	    overflow = true;
   285	  }
   286	  base.effectivePauseMs = effectivePauseMs; base.overflow = overflow;
   287	  const budget = span - pausesCount * effectivePauseMs;
   288	  const weights = clusters.map(function(c){ return c.length; });
   289	  const totalW = weights.reduce(function(a, b){ return a + b; }, 0);
   290	  let lastWeighted = -1;
   291	  weights.forEach(function(w, i){ if (w > 0) lastWeighted = i; });
   292	  let t = effectiveStartMs, allocated = 0;
   293	  const lines = clusters.map(function(c, i){
   294	    let dur = 0;
   295	    if (totalW > 0 && weights[i] > 0){
   296	      dur = (i === lastWeighted) ? budget - allocated
   297	        : Math.round(budget * weights[i] / totalW);
   298	      allocated += dur;
   299	    }
   300	    const s = { startMs: t, durationMs: dur };
   301	    t += dur + effectivePauseMs;
   302	    return s;
   303	  });
   304	  return finish(Object.assign(base, { mode: "fallback", lines: lines }));
   305	}
   306	
   307	/* Pure state model: state at elapsed ms depends only on elapsed. */
   308	function stateAt(sched, elapsed){
   309	  if (sched.degenerate){
   310	    return sched.lines.map(function(){
   311	      return { shown: 0, active: false, done: false }; });
   312	  }
   313	  return sched.lines.map(function(ls, li){
   314	    const count = sched.clusters[li].length;
   315	    if (elapsed < ls.startMs) return { shown: 0, active: false, done: false };
   316	    if (ls.durationMs <= 0 || elapsed >= ls.startMs + ls.durationMs)
   317	      return { shown: count, active: elapsed < ls.startMs + ls.durationMs + 1, done: true };
   318	    const shown = Math.min(count, Math.floor((elapsed - ls.startMs) / ls.durationMs * count));
   319	    return { shown: shown, active: true, done: false };
   320	  });
   321	}
   322	function activeLineAt(sched, elapsed){
   323	  if (sched.degenerate) return -1;
   324	  let active = -1;
   325	  sched.lines.forEach(function(ls, li){
   326	    if (elapsed >= ls.startMs) active = li;
   327	  });
   328	  return active;
   329	}
   330	
   331	/* --- Visible-window model (pure) ---
   332	   The visible set is an active-anchored window: a line is displayed
   333	   exactly when trimStart <= li <= active; before the first line starts
   334	   only line 0's slot stands (empty). Future lines are not displayed, so
   335	   they contribute no prompt and no height on stage. A line's prompt is
   336	   visible exactly when the line has activated (li <= active); its
   337	   layout width is retained either way, so activation never shifts the
   338	   line. The window slides only when the active line changes. */
   339	function visibleWindow(active, n, maxVisible){
   340	  const mv = Math.max(1, Math.floor(maxVisible) || 1);
   341	  const high = active < 0 ? 0 : active;
   342	  const trimStart = Math.max(0, high - mv + 1);
   343	  const displayed = [];
   344	  for (let li = 0; li < n; li++) displayed.push(li >= trimStart && li <= high);
   345	  return { trimStart: trimStart, high: high, displayed: displayed };
   346	}
   347	function promptVisibleAt(li, active){ return li <= active; }
   348	/* The stage's reserved height is the largest total of any sliding
   349	   window of per-line measured heights. */
   350	function maxWindowHeightFor(heights, maxVisible){
   351	  const mv = Math.max(1, Math.floor(maxVisible) || 1);
   352	  let best = 0;
   353	  for (let s = 0; s < heights.length; s++){
   354	    let sum = 0;
   355	    for (let i = s; i < Math.min(heights.length, s + mv); i++) sum += heights[i];
   356	    if (sum > best) best = sum;
   357	  }
   358	  return best;
   359	}
   360	/* Model tops of the displayed lines, stacked from the stage top in
   361	   measured-height order. */
   362	function modelTopsFor(heights, displayed){
   363	  const tops = [];
   364	  let y = 0;
   365	  for (let li = 0; li < heights.length; li++){
   366	    tops.push(displayed[li] ? y : null);
   367	    if (displayed[li]) y += heights[li];
   368	  }
   369	  return tops;
   370	}
   371	
   372	/* --- Cursor boundary model (pure) ---
   373	   The cursor sits at the revealed grapheme boundary of the active
   374	   line: immediately after the last revealed cluster, or at the
   375	   prompt's right edge when nothing of the line is revealed yet.
   376	   Metrics are per-span right edges and tops measured against the line
   377	   box, so a boundary that falls on a continuation row carries that
   378	   row's top. */
   379	function cursorPosFor(metrics, promptMetric, shown){
   380	  if (shown > 0){
   381	    const b = metrics[shown - 1];
   382	    return { left: b.right, top: b.top };
   383	  }
   384	  return { left: promptMetric.right, top: promptMetric.top };
   385	}
   386	
   387	/* --- DOM built once --- */
   388	const stage = document.getElementById("stage");
   389	document.body.style.background = CONFIG.bg;
   390	document.body.style.padding = CONFIG.stagePadding;
   391	stage.style.color = CONFIG.ink;
   392	stage.style.fontFamily = CONFIG.fontFamily;
   393	stage.style.fontSize = Math.min(CONFIG.fontSizePx, Math.max(CONFIG.fontMinPx, window.innerWidth * CONFIG.fontVwFactor)) + "px";
   394	
   395	const SCHED = deriveSchedule(CONFIG);
   396	stage.dataset.scheduleOverflow = SCHED.overflow ? "true" : "false";
   397	stage.dataset.scheduleOverrun = SCHED.overrun ? "true" : "false";
   398	const lineEls = [], promptEls = [], spanEls = [];
   399	const cursorEl = document.createElement("span");   /* created ONCE */
   400	cursorEl.className = "cursor";
   401	cursorEl.style.background = CONFIG.cursorColor;
   402	cursorEl.style.width = CONFIG.cursorWidthCh + "ch";
   403	cursorEl.style.animation = "blink " + CONFIG.cursorBlinkMs + "ms steps(1) infinite";
   404	cursorEl.style.height = "1em";
   405	cursorEl.style.display = "none";
   406	let cursorHome = -1;
   407	
   408	CONFIG.lines.forEach(function(text, li){
   409	  const div = document.createElement("div");
   410	  div.className = "line";
   411	  div.style.lineHeight = CONFIG.lineHeight;
   412	  const p = document.createElement("span");
   413	  p.className = "prompt"; p.style.color = CONFIG.accent; p.textContent = CONFIG.prompt;
   414	  p.style.marginRight = CONFIG.promptGapCh + "ch";
   415	  p.style.visibility = "hidden";
   416	  div.appendChild(p);
   417	  promptEls.push(p);
   418	  const spans = SCHED.clusters[li].map(function(cluster){
   419	    const sp = document.createElement("span");
   420	    sp.textContent = cluster;
   421	    sp.style.visibility = "hidden";
   422	    div.appendChild(sp);
   423	    return sp;
   424	  });
   425	  stage.appendChild(div);
   426	  lineEls.push(div); spanEls.push(spans);
   427	});
   428	
   429	/* Unified layout measurement: one off-screen measurement pass supplies
   430	   every height the stage relies on. Each line is laid out in a
   431	   measurement stage sharing the live stage's width, font size,
   432	   line-height and wrapping (no element in it is display:none), its
   433	   full-layout height is recorded, and the live stage's reserved height
   434	   is the largest total of any visible window of those heights. Future
   435	   lines are display:none on the live stage and supply nothing there. */
   436	let probeHeights = [];
   437	function measureLayout(){
   438	  const probe = document.createElement("div");
   439	  probe.setAttribute("aria-hidden", "true");
   440	  probe.style.cssText = "visibility:hidden;position:absolute;left:-10000px;top:0;pointer-events:none;" +
   441	    "white-space:pre-wrap;word-break:break-word;box-sizing:border-box;" +
   442	    "line-height:" + CONFIG.lineHeight + ";" +
   443	    "font-family:" + CONFIG.fontFamily + ";font-size:" + stage.style.fontSize + ";" +
   444	    "width:" + stage.clientWidth + "px;";
   445	  document.body.appendChild(probe);
   446	  probeHeights = CONFIG.lines.map(function(text){
   447	    probe.textContent = "";
   448	    const p = document.createElement("span");
   449	    p.style.marginRight = CONFIG.promptGapCh + "ch"; p.textContent = CONFIG.prompt;
   450	    probe.appendChild(p);
   451	    probe.appendChild(document.createTextNode(text));
   452	    return probe.offsetHeight;
   453	  });
   454	  probe.remove();
   455	  stage.style.minHeight =
   456	    maxWindowHeightFor(probeHeights, CONFIG.maxVisibleLines) + "px";
   457	}
   458	measureLayout();
   459	
   460	let currentElapsed = 0;
   461	/* One invalidation handler governs font and resize: the clamped font
   462	   size is recomputed first, then the measurement pass re-runs, the
   463	   reserved height resets, and the frame re-renders under the new
   464	   metrics. A stale measurement is never reused after either event. */
   465	function relayout(){
   466	  stage.style.fontSize = Math.min(CONFIG.fontSizePx, Math.max(CONFIG.fontMinPx, window.innerWidth * CONFIG.fontVwFactor)) + "px";
   467	  measureLayout();
   468	  render(currentElapsed);
   469	}
   470	window.addEventListener("resize", relayout);
   471	if (document.fonts && document.fonts.ready) document.fonts.ready.then(relayout);
   472	
   473	function render(elapsed){
   474	  currentElapsed = elapsed;
   475	  const st = stateAt(SCHED, elapsed);
   476	  const active = activeLineAt(SCHED, elapsed);
   477	  const win = visibleWindow(active, SCHED.lines.length, CONFIG.maxVisibleLines);
   478	  lineEls.forEach(function(div, li){
   479	    div.style.display = win.displayed[li] ? "" : "none";
   480	    promptEls[li].style.visibility = promptVisibleAt(li, active) ? "visible" : "hidden";
   481	  });
   482	  st.forEach(function(s, li){
   483	    const spans = spanEls[li];
   484	    for (let i = 0; i < spans.length; i++){
   485	      const v = i < s.shown ? "visible" : "hidden";
   486	      if (spans[i].style.visibility !== v) spans[i].style.visibility = v;
   487	    }
   488	  });
   489	  if (active >= 0){
   490	    if (cursorHome !== active){
   491	      lineEls[active].appendChild(cursorEl);  /* same node, moved at boundary */
   492	      cursorHome = active;
   493	    }
   494	    cursorEl.style.display = "";
   495	    const lineRect = lineEls[active].getBoundingClientRect();
   496	    const metrics = spanEls[active].map(function(sp){
   497	      const r = sp.getBoundingClientRect();
   498	      return { right: r.right - lineRect.left, top: r.top - lineRect.top };
   499	    });
   500	    const pr = promptEls[active].getBoundingClientRect();
   501	    const pos = cursorPosFor(metrics,
   502	      { right: pr.right - lineRect.left, top: pr.top - lineRect.top },
   503	      st[active].shown);
   504	    cursorEl.style.left = pos.left + "px";
   505	    cursorEl.style.top = pos.top + "px";
   506	  }
   507	  if (active < 0 && cursorHome !== -1){
   508	    cursorEl.remove(); cursorHome = -1;
   509	  }
   510	  return SCHED.totalMs;
   511	}
   512	
   513	let timer = null, startedAt = 0, pausedElapsed = 0, playing = false;
   514	function tick(){
   515	  const elapsed = performance.now() - startedAt;
   516	  const total = render(elapsed);
   517	  if (elapsed < total){ timer = requestAnimationFrame(tick); }
   518	  else { playing = false; render(total); }
   519	}
   520	function play(){
   521	  if (playing) return;
   522	  playing = true; startedAt = performance.now() - pausedElapsed;
   523	  timer = requestAnimationFrame(tick);
   524	}
   525	function pause(){
   526	  if (!playing) return;
   527	  pausedElapsed = performance.now() - startedAt;
   528	  playing = false;
   529	  if (timer) cancelAnimationFrame(timer);
   530	}
   531	function restart(){ playing = false; if (timer) cancelAnimationFrame(timer); pausedElapsed = 0; play(); }
   532	
   533	window.addEventListener("message", function(e){
   534	  if (e.data === "play") play();
   535	  if (e.data === "pause") pause();
   536	  if (e.data === "restart") restart();
   537	});
   538	render(0);
   539	play();
   540	</script>
   541	</body>
   542	</html>

exec
/bin/bash -lc 'nl -ba build-record-attempt3.md' in /tmp/t03a3/lensrun
 succeeded in 17ms:
     1	# T03 — Live-typed lyric text · build record · attempt 3 · 2026-11-17
     2	
     3	Item: T03, Packet P1 @ 0:21–0:35.
     4	This record is SCORE-BLIND by construction: construction facts, the
     5	source checkpoint table, the window contract, and diagnostic results
     6	only. Final source: recreation.html, sha256
     7	1f182eac11d6afb4a02570526d4b0a26fcd96fdcda08381a298f0d12abff8b96.
     8	
     9	## Construction facts
    10	- Single self-contained HTML file; DOM typing; all content, timing,
    11	  palette and presentation values come from CONFIG at the top of the
    12	  script (23 keys; every key is consumed at a named application site —
    13	  the census leg filed beside this record carries the full table). No
    14	  external assets, no specimen media; specimen words appear only as
    15	  CONFIG data.
    16	- Typing unit is the grapheme cluster: `segmentGraphemes()` uses
    17	  `Intl.Segmenter` with granularity "grapheme" where available;
    18	  otherwise a documented fallback merges code points with combining
    19	  marks, variation selectors, skin-tone modifiers, ZWJ sequences, and
    20	  regional-indicator pairs (the fallback does not implement every
    21	  UAX #29 rule, e.g. some Indic conjuncts — limitation recorded here).
    22	- Reveal construction: the full text of every line is laid out once at
    23	  build time as one span per grapheme cluster, all spans present in
    24	  the DOM from the first frame; per-frame updates toggle only span
    25	  visibility (shown ⇔ index < the state model's count for that line).
    26	  Word wrap is therefore computed on the complete text at build time,
    27	  and a partially revealed word cannot change rows as clusters arrive.
    28	  Span concatenation equals the full line text at every elapsed time.
    29	- Cursor: ONE cursor element is created once, never rebuilt; it is
    30	  positioned outside the text flow (absolute positioning inside its
    31	  line, which is relatively positioned), so it adds zero width and
    32	  zero height and cannot affect wrapping. Per frame its left/top are
    33	  set from the measured boundary of the revealed text: the boundary is
    34	  the last revealed grapheme span (left = that span's right edge
    35	  against the line box, top = that span's top, both from runtime
    36	  rectangles). Boundary states: nothing revealed → the prompt span's
    37	  right edge on the first row; partial word → immediately after the
    38	  last revealed cluster, before the unrevealed remainder of the same
    39	  word; wrapped row → the boundary span's own row top; completed →
    40	  after the final cluster, where the cursor holds until the next line
    41	  activates. Its blink animation is never restarted by frame rendering.
    42	  The stage is never rebuilt (no innerHTML writes anywhere in the
    43	  file).
    44	- Visible window: a line is displayed exactly when it lies inside the
    45	  active-anchored window (window start ≤ line ≤ active line); before
    46	  the first line starts, only line 0's slot stands, empty. Future
    47	  lines are not displayed, so they show no prompt and reserve no
    48	  height on stage. A line's prompt keeps its layout width at all times
    49	  and becomes visible exactly when its line activates, so activation
    50	  never shifts the line. The window slides only when the active line
    51	  changes.
    52	- Layout measurement: one off-screen measurement pass supplies every
    53	  height the stage relies on. Each line is laid out in a measurement
    54	  stage sharing the live stage's width, font size, line-height and
    55	  wrapping (no element in it is hidden with display:none); each line's
    56	  full-layout height is recorded, and the live stage's reserved height
    57	  is the largest total of any visible window of those heights. The
    58	  measured per-line heights are the same heights the displayed lines
    59	  occupy when live. One invalidation handler governs font and resize:
    60	  the clamped font size is recomputed first, then the measurement pass
    61	  re-runs, the reserved height resets, and the frame re-renders; it
    62	  fires on window resize and when document fonts finish loading. A
    63	  stale measurement is never reused after either event.
    64	- Sequencing is a pure function of elapsed time (`stateAt(sched,
    65	  elapsed)`): the same elapsed always yields the same shown counts, on
    66	  seek or on continuous play. Playback self-starts inside the file and
    67	  also answers the comparison page's play/pause/restart messages; that
    68	  interface is unchanged from the previous build, and comparison.html
    69	  is not changed by this build (its ORIGINAL side is untouched).
    70	
    71	## Schedule construction (one contract for every mode)
    72	Validation order is fixed: (1) configuration values are
    73	validated/defaulted; (2) exactly one mode is selected — a valid
    74	authored schedule first, then an exact specimen match, then the
    75	fallback allocation; modes never blend; (3) the base schedule for the
    76	selected mode is built; (4) the base is checked for containment inside
    77	the window; (5) an explicit per-cluster interval override may rescale
    78	a derived (specimen/fallback) schedule; (6) any overrun is recorded on
    79	the schedule, never silently clamped.
    80	- Value policies: a window that is not a finite positive number falls
    81	  back to the 14,000 ms default (diagnostic recorded); start delay
    82	  non-finite → 300, negative → 0; line pause NaN → 900, negative → 0,
    83	  infinite → treated as budget-exhausting (the containment policy
    84	  below caps it); final hold non-finite → 470, negative → 0. An empty
    85	  line list yields an empty schedule with the window as its total. A
    86	  line with empty text takes a zero duration at its sequential start
    87	  and keeps its pause slot. A single line takes the full typing span
    88	  as its duration and fits the window exactly, whatever its cluster
    89	  count.
    90	- Degenerate window: when the window leaves no typing span (final
    91	  hold < window ≤ start delay + final hold), every line takes a zero
    92	  duration at the effective start (max(0, window − final hold)), the
    93	  schedule is flagged overflow + degenerate, nothing is revealed at
    94	  any elapsed time, and no value in the schedule is NaN.
    95	- Containment: a derived schedule's base always ends inside the
    96	  window. The fallback's final line ends at windowMs − finalHoldMs
    97	  exactly, by construction (durations allocated in proportion to
    98	  cluster counts, rounding residual on the last cluster-carrying
    99	  line). When the inter-line pauses alone would exhaust the typing
   100	  span, the effective pause compresses to at most a quarter of the
   101	  span, leaving a positive typing budget; schedules whose pauses fit
   102	  are never compressed (the six-line default keeps its 900 ms pauses;
   103	  the 17-line default case compresses to an effective pause of
   104	  206 ms). The schedule carries {overflow, effectivePauseMs,
   105	  effectiveStartMs} and the stage element exposes the overflow state
   106	  as a data attribute.
   107	- Authored schedule: CONFIG.lineSchedule (per-line start/duration,
   108	  independent of the line texts) is used exactly as given when valid
   109	  for the current line count (finite, monotonic starts, every end
   110	  inside the window); an invalid one falls back to the next mode with
   111	  a diagnostic. Authored timings are never rescaled.
   112	- Interval override: CONFIG.charMs / ?charMs=N sets the per-cluster
   113	  typing interval directly (finite, > 0, clamped to [10, 1000];
   114	  invalid or absent → ignored, schedule identical to the
   115	  no-override schedule). In the fallback mode each line's duration
   116	  becomes its cluster count × the interval; in the specimen mode all
   117	  durations scale by interval ÷ the derived per-cluster interval.
   118	  Starts recompute sequentially, preserving the first start and the
   119	  base inter-line pauses. If the rescaled end passes the window, the
   120	  schedule's total becomes the rescaled end + the final hold and the
   121	  overrun flag is set — explicit, never clamped. When an authored
   122	  schedule and the override are both present, the authored schedule
   123	  stands and the schedule records charMsIgnoredAuthored: true.
   124	
   125	## Source checkpoint table (specimen window P1 @ 0:21–0:35, 14.0 s)
   126	Evidence the record actually carries:
   127	- The catalogue establishes the window bounds (0:21–0:35) and that the
   128	  window spans the three configured lyric lines in order, typed
   129	  char-by-char with accumulation.
   130	- One evidence frame (ev/t23.jpg, ≈0:23, i.e. ≈2 s into the window on
   131	  the 20.5 s cut offset) shows line 1 with the block cursor at its
   132	  head. A single still cannot separate "line just completed" from
   133	  "final cluster just revealed", so the frame anchors only that line 1
   134	  is the active line early in the window.
   135	- The record carries NO timed transcript, ASR alignment, or vocal-beat
   136	  anchors. Per-line start/end times in the specimen are therefore NOT
   137	  derivable from the record; any per-line boundary below is an
   138	  allocation model, not a measurement. Uncertainty on each
   139	  intermediate boundary is large (±3 s class — bounded only by the
   140	  window ends).
   141	
   142	Derived specimen schedule (allocation model): typing budget = window
   143	14 000 ms − start delay 300 ms − inter-line pauses 2 × 900 ms − final
   144	hold 470 ms = 11 430 ms, allocated per line in proportion to
   145	grapheme-cluster count (28 / 34 / 28 = 90 clusters; ≈127 ms per
   146	cluster):
   147	
   148	| Line | Clusters | Start (ms into window) | End (ms) | Basis |
   149	|---|---|---|---|---|
   150	| 1 "I made a song, I made a beat" | 28 | 300 | 3 856 | proportional allocation |
   151	| 2 "I wrote the words, I feel the heat" | 34 | 4 756 | 9 074 | proportional allocation |
   152	| 3 "I made a song, I made a beat" | 28 | 9 974 | 13 530 | proportional allocation |
   153	| final hold | — | 13 530 | 14 000 | window remainder only (470 ms) |
   154	
   155	Typing spans 13 530 of the 14 000 ms window; the final hold is exactly
   156	the window remainder, with the full text and the blinking cursor held.
   157	Internal consistency of the model is asserted by the own-check suite:
   158	first reveal at ≈427 ms (300 + one ≈127 ms interval), pauses total
   159	1 800 ms = 12.9% of the window, completion at 13 530 ms.
   160	
   161	## Literal whitelist (per literal, outside CONFIG data)
   162	Hex colors outside CONFIG data: none. Numeric literals outside CONFIG
   163	data: 0, 1, 2 (structural indices/bounds) · blink keyframe percentages
   164	55 / 56 / 100 (animation shape; the period is a CONFIG key) ·
   165	validation bounds 10 / 1000 (interval-override clamp; 10 also serves
   166	as a parse radix) · validation default mirrors 14000 / 300 / 900 / 470
   167	(used only when the matching CONFIG value is invalid; each mirrors
   168	that key's CONFIG default) · 0.25 (the containment policy's pause
   169	share cap) · 10000 (the measurement stage's off-screen offset) ·
   170	comment labels: the technique identifier in the header comment, the
   171	UAX #29 specification reference, and the step numbers of the
   172	validation-order enumeration in a comment. Unicode code-point ranges
   173	in the segmentation fallback are segmentation data constants.
   174	SPECIMEN_LINES is CONFIG data (it feeds CONFIG.lines), not a logic
   175	literal.
   176	
   177	## Diagnostics (own checks, before the wave)
   178	- Node logic suite (functions extracted verbatim from the built file;
   179	  full packet filed as own-check-packet-attempt3.txt): 135 checks,
   180	  135 PASS, 0 FAIL — schedule validation and containment (including
   181	  the 17-line case: compression engaged, effective pause 206 ms, last
   182	  end exactly 13 530 ms; the degenerate window shape; empty content;
   183	  single and oversized single lines; empty-text lines; invalid
   184	  specimen table falling back with a diagnostic), the visible-window
   185	  model (sweep: displayed count never exceeds the configured maximum,
   186	  no future line displayed, prompt visibility exactly at activation,
   187	  specimen progression 1→2→3, window constant within each line's
   188	  span, boundary shifts equal to the departed slot's measured height),
   189	  the interval override as an effect mapping (specimen durations
   190	  double at a 254 ms interval and halve at 63.5 ms; invalid values
   191	  leave the schedule identical; clamps at 10 and 1000 ms), the
   192	  authored schedule (exact use, length/non-finite/monotonic/end
   193	  rejections with diagnostics, authored standing over the override
   194	  with the ignore flag recorded), the cursor boundary model (all four
   195	  states, including a boundary on a continuation row), span
   196	  concatenation identity and visible-count equality with the state
   197	  model on specimen and swapped lines, grapheme cases (decomposed
   198	  accent, ZWJ family, flag pair — primary segmenter and fallback
   199	  segmenter each 3/3), state determinism, and the checkpoint-table
   200	  regression (starts 300/4 756/9 974, ends 3 856/9 074/13 530).
   201	- Per-key CONFIG consumption census: 23/23 keys asserted consumed
   202	  (key → the computed/rendered effect it drives), and the literal
   203	  census above passes against the whitelist.
   204	- Source census, new terms for this build's reveal construction:
   205	  exactly 1 cursor element creation; 0 innerHTML writes; grapheme
   206	  span count = total cluster count (90 for the specimen lines);
   207	  per-frame path touches span visibility, line display and prompt
   208	  visibility at window boundaries, and the cursor's left/top only.
   209	- Purity grep on recreation.html
   210	  (segment.mp4|source.mp4|<video|<img>|.jpg|.png|.mp4): 0 hits.
   211	  Asset inventory: code only.
   212	- Syntax: extracted script passes node --check.
   213	- PIXEL-UNVERIFIED: headless render attempted with
   214	  /opt/meta-chromium/chrome (private debugging port 9417, dump-dom);
   215	  launch failed before any page load — exit 13, stderr: "Hatch WebGL
   216	  domain policy is required for browser startup"; dumped DOM = 0
   217	  bytes. Geometry claims therefore rest on the deterministic logic
   218	  tests and the measurement construction, not on rendered pixels.
   219	  Coordinates asserted by the checks are layout-model values, never
   220	  measured pixels. This is a named limitation, not a pass.
   221	- comparison.html: NOT changed — its interface to the recreation is
   222	  the iframe + postMessage controls, which are unchanged. The
   223	  comparison's ORIGINAL side is untouched.
   224	
   225	## Preservation and staged checkpoints
   226	- The previous build's source is preserved verbatim at
   227	  recreation-attempt-2.html (content copy, independent inode; sha256
   228	  c0aee98c1dacf24c989d5dc31aa8fa382209aeeb633e1ab3dd46e7f3e34bc66c,
   229	  equal to the pre-build working file). The complete prior evidence
   230	  set (28 files) was inventoried and hashed before any mutation
   231	  (evidence-inventory-attempt3.txt); a census immediately after the
   232	  first overwrite found every prior file byte-identical except the
   233	  working file itself, whose change is this build.
   234	- The build proceeded in five stages, each closed by a create-once
   235	  checkpoint (source content copy + that stage's check output, inode
   236	  independent of the working file): stage A (schedule validation and
   237	  containment) sha256 bf7466cdd12f7828acab59d19f5f7cb390e01b9b698e9ae737e1fb14c88ebd55 ·
   238	  stage B (visible window and measurement) sha256
   239	  617cf80202ee74fa29855d87d05ba19503ed7982e3d710a182e72684e3b54c91 ·
   240	  stage C (interval override and authored schedule) sha256
   241	  b3c791dff56b418df80540ec111a46efd6547d562f0b9703812f5f4bbb5ddf8a ·
   242	  stage D (span reveal and boundary cursor) sha256
   243	  b7d19bb1c292946dadf6c1315f2dd593cbf5986eceed5cb3c493b84e79226626 ·
   244	  stage E (presentation values into CONFIG; final source) sha256
   245	  1f182eac11d6afb4a02570526d4b0a26fcd96fdcda08381a298f0d12abff8b96.
   246	  Any score movement files as BUNDLED across the stages unless a
   247	  stage's own checks isolate the mechanism.
   248	- Direction (RTL) layout mirroring is not implemented in this build;
   249	  grapheme segmentation and the visible-window policy are this build's
   250	  multilingual provisions. Visibility-hidden unrevealed spans remain
   251	  selectable in the DOM; that is a presentation note, recorded here.

exec
/bin/bash -lc 'nl -ba own-check-packet-attempt3.txt' in /tmp/t03a3/lensrun
 succeeded in 22ms:
     1	PASS specimen mode
     2	PASS specimen starts 300/4756/9974
     3	PASS specimen ends 3856/9074/13530
     4	PASS specimen totalMs 14000
     5	PASS specimen no overflow/overrun
     6	PASS 17-line mode fallback
     7	PASS 17-line compression engaged (overflow)
     8	PASS 17-line effectivePauseMs 206
     9	PASS 17-line all starts<ends<=13530
    10	PASS 17-line last end exactly 13530
    11	PASS 17-line finite
    12	PASS 6-line effectivePauseMs 900 (no compression)
    13	PASS 6-line last end exactly 13530
    14	PASS windowMs NaN -> default schedule identical
    15	PASS windowMs Infinity -> default schedule identical
    16	PASS windowMs -5 -> default schedule identical
    17	PASS windowMs 0 -> default schedule identical
    18	PASS linePauseMs Infinity -> compression cap 661
    19	PASS linePauseMs NaN -> 900
    20	PASS linePauseMs negative -> 0 pauses, fits
    21	PASS startDelayMs NaN -> 300
    22	PASS startDelayMs Infinity -> 300
    23	PASS startDelayMs negative -> 0
    24	PASS finalHoldMs NaN -> 470 (last end 13530)
    25	PASS finalHoldMs negative -> 0 (last end 14000)
    26	PASS degenerate window 700: flagged
    27	PASS degenerate: all durations 0, starts at effectiveStart 230
    28	PASS degenerate: finite, no NaN
    29	PASS degenerate: stateAt counts all 0 at 0/350/699
    30	PASS n=0 empty schedule
    31	PASS n=1 duration = full span 13230, end 13530
    32	PASS oversized single line fits exactly, no overflow flag
    33	PASS empty-text line duration 0 at sequential start
    34	PASS empty-text schedule last end 13530
    35	PASS specimen table ending past window -> fallback + diagnostic
    36	STAGE-A SUMMARY pass=35 fail=0
    37	stageA rc=0
    38	PASS 6-line sweep: displayed <=3, none above active, exact window set
    39	PASS prompt visibility iff li<=active across sweep
    40	PASS pre-start: only line 0 displayed, no prompt visible
    41	PASS specimen displayed progression 1,1,1,1,2,2,3,3
    42	PASS maxVisibleLines=1: only active line displayed
    43	PASS maxVisibleLines>=count: all started lines displayed
    44	PASS maxVisibleLines=0 clamped to 1 by the model
    45	PASS maxWindowHeightFor windows max
    46	PASS boundary slide: line1 top 10->0? model tops before
    47	PASS boundary slide: surviving line tops shift by departed height only
    48	PASS displayed set constant within each line's typing span
    49	STAGE-B SUMMARY pass=11 fail=0
    50	stageB rc=0
    51	PASS specimen charMs=254 line durations 7112/8636/7112
    52	PASS specimen charMs=254 starts 300/8312/17848
    53	PASS specimen charMs=254 overrun: totalMs = end + 470 = 25430
    54	PASS specimen charMs=63.5 durations halved 1778/2159/1778
    55	PASS specimen charMs=63.5 fits: totalMs 14000, no overrun
    56	PASS charMs 0 ignored: schedule identical
    57	PASS charMs -5 ignored: schedule identical
    58	PASS charMs NaN ignored: schedule identical
    59	PASS charMs abc ignored: schedule identical
    60	PASS charMs=5 clamped to 10: line1 duration 280
    61	PASS charMs=5000 clamped to 1000: line1 duration 27992
    62	PASS fallback charMs=100 durations = clusters x 100
    63	PASS fallback charMs=100 starts preserve delay + pauses
    64	PASS fallback charMs=100 fits window, no overrun
    65	PASS authored mode with swapped lines
    66	PASS authored timings used exactly
    67	PASS authored + charMs: schedule identical to authored-only
    68	PASS authored + charMs: charMsIgnoredAuthored set
    69	PASS authored length mismatch -> fallback + diagnostic
    70	PASS authored end past window -> not authored, diagnostic, specimen by precedence
    71	PASS authored non-monotonic -> not authored + diagnostic
    72	PASS authored non-finite -> not authored
    73	PASS default specimen schedule unchanged
    74	STAGE-C SUMMARY pass=23 fail=0
    75	stageC rc=0
    76	PASS visible-span count equals stateAt shown at every sampled elapsed
    77	PASS span concatenation identity: full line text at every line
    78	PASS total grapheme spans for specimen = 90
    79	PASS swap span concatenation identity
    80	PASS cursor beginning: prompt right edge, first row
    81	PASS cursor partial-word: right edge of last revealed cluster, same row
    82	PASS cursor wrapped-row: top is the continuation row's top
    83	PASS cursor completed: right edge of the final cluster
    84	PASS exactly 1 cursor element creation
    85	PASS 0 innerHTML writes
    86	PASS cursor is out of flow (position:absolute in its class rule)
    87	PASS no trailing spacer construction remains
    88	PASS per-frame path toggles span visibility (render uses style.visibility on spans)
    89	PASS grapheme spans built once per cluster from the schedule clusters
    90	STAGE-D SUMMARY pass=14 fail=0
    91	stageD rc=0
    92	CONFIG keys (23): lines, windowMs, startDelayMs, linePauseMs, finalHoldMs, specimenSchedule, maxVisibleLines, charMs, lineSchedule, prompt, bg, ink, accent, cursorColor, fontFamily, fontSizePx, fontMinPx, fontVwFactor, lineHeight, promptGapCh, cursorWidthCh, cursorBlinkMs, stagePadding
    93	PASS key lines consumed: schedule clusters follow lines
    94	PASS key windowMs consumed: totalMs follows windowMs
    95	PASS key startDelayMs consumed: first start follows it
    96	PASS key linePauseMs consumed: gap follows it
    97	PASS key finalHoldMs consumed: last end = window - hold
    98	PASS key specimenSchedule consumed: specimen mode uses its table
    99	PASS key maxVisibleLines consumed: window size follows it
   100	PASS key charMs consumed: durations rescale
   101	PASS key lineSchedule consumed: authored mode
   102	PASS key lines application sites >= 1
   103	PASS key windowMs consumed via cfg.* in schedule derivation
   104	PASS key startDelayMs consumed via cfg.* in schedule derivation
   105	PASS key linePauseMs consumed via cfg.* in schedule derivation
   106	PASS key finalHoldMs consumed via cfg.* in schedule derivation
   107	PASS key specimenSchedule consumed via cfg.* in schedule derivation
   108	PASS key maxVisibleLines application sites >= 1
   109	PASS key charMs consumed via cfg.* in schedule derivation
   110	PASS key lineSchedule consumed via cfg.* in schedule derivation
   111	PASS key prompt application sites >= 2
   112	PASS key bg application sites >= 1
   113	PASS key ink application sites >= 1
   114	PASS key accent application sites >= 1
   115	PASS key cursorColor application sites >= 1
   116	PASS key fontFamily application sites >= 2
   117	PASS key fontSizePx application sites >= 2
   118	PASS key fontMinPx application sites >= 2
   119	PASS key fontVwFactor application sites >= 2
   120	PASS key lineHeight application sites >= 2
   121	PASS key promptGapCh application sites >= 2
   122	PASS key cursorWidthCh application sites >= 1
   123	PASS key cursorBlinkMs application sites >= 1
   124	PASS key stagePadding application sites >= 1
   125	PASS no hex colors outside CONFIG data
   126	LITERALS outside CONFIG data:
   127	  0 x66 -> structural (index/zero bound)
   128	  0.25 x1 -> overflow policy constant (pause share cap)
   129	  03 x1 -> technique identifier in the header comment (label, not a logic literal)
   130	  1 x32 -> structural (index/step count/unit)
   131	  10 x4 -> validation bound / radix (override clamp lower bound; parse radix)
   132	  100 x3 -> blink keyframe percentage (animation shape)
   133	  1000 x3 -> validation bound (override clamp upper bound)
   134	  10000 x1 -> measurement-stage off-screen offset (structural placement)
   135	  14000 x1 -> validation default mirror of the windowMs CONFIG default
   136	  2 x2 -> structural (index)
   137	  29 x1 -> specification reference in a comment (UAX #29, segmentation rules)
   138	  3 x1 -> step number in a comment enumeration (validation order)
   139	  300 x1 -> validation default mirror of the startDelayMs CONFIG default
   140	  4 x1 -> step number in a comment enumeration (validation order)
   141	  470 x1 -> validation default mirror of the finalHoldMs CONFIG default
   142	  55 x1 -> blink keyframe percentage (animation shape)
   143	  56 x1 -> blink keyframe percentage (animation shape)
   144	  900 x1 -> validation default mirror of the linePauseMs CONFIG default
   145	PASS every numeric literal outside CONFIG data is whitelisted
   146	STAGE-E SUMMARY pass=34 fail=0
   147	stageE rc=0
   148	PASS first reveal at 427ms (shown 0 at 426, 1 at 427)
   149	PASS pauses total 1800ms = 12.9% of window
   150	PASS completion 13530, final hold exactly 470
   151	PASS stateAt determinism (same elapsed, same state)
   152	PASS per-line not-started / partial / complete states
   153	PASS decomposed accent (e + U+0301) is 1 cluster
   154	PASS ZWJ family emoji is 1 cluster
   155	PASS flag pair is 1 cluster
   156	PASS no intermediate state splits a cluster (sweep)
   157	PASS fallback segmenter: decomposed accent 1 cluster
   158	PASS fallback segmenter: ZWJ family 1 cluster
   159	PASS fallback segmenter: flag pair 1 cluster
   160	PASS French/Spanish swap: fallback mode, both lines complete in window
   161	PASS 6-line swap fits window exactly
   162	PASS 17-line adversarial swap contained (overflow guard)
   163	PASS authored swap uses authored timings exactly
   164	PASS authored swap with interval override: authored stands, override recorded ignored
   165	PASS active line progression -1/0/1/2 across the window
   166	FINAL-REGRESSION SUMMARY pass=18 fail=0
   167	final rc=0

exec
/bin/bash -lc "sed -n '379,560p' recreation.html | nl -ba -v379" in /tmp/t03a3/lensrun
 succeeded in 16ms:
   379	function cursorPosFor(metrics, promptMetric, shown){
   380	  if (shown > 0){
   381	    const b = metrics[shown - 1];
   382	    return { left: b.right, top: b.top };
   383	  }
   384	  return { left: promptMetric.right, top: promptMetric.top };
   385	}
   386	
   387	/* --- DOM built once --- */
   388	const stage = document.getElementById("stage");
   389	document.body.style.background = CONFIG.bg;
   390	document.body.style.padding = CONFIG.stagePadding;
   391	stage.style.color = CONFIG.ink;
   392	stage.style.fontFamily = CONFIG.fontFamily;
   393	stage.style.fontSize = Math.min(CONFIG.fontSizePx, Math.max(CONFIG.fontMinPx, window.innerWidth * CONFIG.fontVwFactor)) + "px";
   394	
   395	const SCHED = deriveSchedule(CONFIG);
   396	stage.dataset.scheduleOverflow = SCHED.overflow ? "true" : "false";
   397	stage.dataset.scheduleOverrun = SCHED.overrun ? "true" : "false";
   398	const lineEls = [], promptEls = [], spanEls = [];
   399	const cursorEl = document.createElement("span");   /* created ONCE */
   400	cursorEl.className = "cursor";
   401	cursorEl.style.background = CONFIG.cursorColor;
   402	cursorEl.style.width = CONFIG.cursorWidthCh + "ch";
   403	cursorEl.style.animation = "blink " + CONFIG.cursorBlinkMs + "ms steps(1) infinite";
   404	cursorEl.style.height = "1em";
   405	cursorEl.style.display = "none";
   406	let cursorHome = -1;
   407	
   408	CONFIG.lines.forEach(function(text, li){
   409	  const div = document.createElement("div");
   410	  div.className = "line";
   411	  div.style.lineHeight = CONFIG.lineHeight;
   412	  const p = document.createElement("span");
   413	  p.className = "prompt"; p.style.color = CONFIG.accent; p.textContent = CONFIG.prompt;
   414	  p.style.marginRight = CONFIG.promptGapCh + "ch";
   415	  p.style.visibility = "hidden";
   416	  div.appendChild(p);
   417	  promptEls.push(p);
   418	  const spans = SCHED.clusters[li].map(function(cluster){
   419	    const sp = document.createElement("span");
   420	    sp.textContent = cluster;
   421	    sp.style.visibility = "hidden";
   422	    div.appendChild(sp);
   423	    return sp;
   424	  });
   425	  stage.appendChild(div);
   426	  lineEls.push(div); spanEls.push(spans);
   427	});
   428	
   429	/* Unified layout measurement: one off-screen measurement pass supplies
   430	   every height the stage relies on. Each line is laid out in a
   431	   measurement stage sharing the live stage's width, font size,
   432	   line-height and wrapping (no element in it is display:none), its
   433	   full-layout height is recorded, and the live stage's reserved height
   434	   is the largest total of any visible window of those heights. Future
   435	   lines are display:none on the live stage and supply nothing there. */
   436	let probeHeights = [];
   437	function measureLayout(){
   438	  const probe = document.createElement("div");
   439	  probe.setAttribute("aria-hidden", "true");
   440	  probe.style.cssText = "visibility:hidden;position:absolute;left:-10000px;top:0;pointer-events:none;" +
   441	    "white-space:pre-wrap;word-break:break-word;box-sizing:border-box;" +
   442	    "line-height:" + CONFIG.lineHeight + ";" +
   443	    "font-family:" + CONFIG.fontFamily + ";font-size:" + stage.style.fontSize + ";" +
   444	    "width:" + stage.clientWidth + "px;";
   445	  document.body.appendChild(probe);
   446	  probeHeights = CONFIG.lines.map(function(text){
   447	    probe.textContent = "";
   448	    const p = document.createElement("span");
   449	    p.style.marginRight = CONFIG.promptGapCh + "ch"; p.textContent = CONFIG.prompt;
   450	    probe.appendChild(p);
   451	    probe.appendChild(document.createTextNode(text));
   452	    return probe.offsetHeight;
   453	  });
   454	  probe.remove();
   455	  stage.style.minHeight =
   456	    maxWindowHeightFor(probeHeights, CONFIG.maxVisibleLines) + "px";
   457	}
   458	measureLayout();
   459	
   460	let currentElapsed = 0;
   461	/* One invalidation handler governs font and resize: the clamped font
   462	   size is recomputed first, then the measurement pass re-runs, the
   463	   reserved height resets, and the frame re-renders under the new
   464	   metrics. A stale measurement is never reused after either event. */
   465	function relayout(){
   466	  stage.style.fontSize = Math.min(CONFIG.fontSizePx, Math.max(CONFIG.fontMinPx, window.innerWidth * CONFIG.fontVwFactor)) + "px";
   467	  measureLayout();
   468	  render(currentElapsed);
   469	}
   470	window.addEventListener("resize", relayout);
   471	if (document.fonts && document.fonts.ready) document.fonts.ready.then(relayout);
   472	
   473	function render(elapsed){
   474	  currentElapsed = elapsed;
   475	  const st = stateAt(SCHED, elapsed);
   476	  const active = activeLineAt(SCHED, elapsed);
   477	  const win = visibleWindow(active, SCHED.lines.length, CONFIG.maxVisibleLines);
   478	  lineEls.forEach(function(div, li){
   479	    div.style.display = win.displayed[li] ? "" : "none";
   480	    promptEls[li].style.visibility = promptVisibleAt(li, active) ? "visible" : "hidden";
   481	  });
   482	  st.forEach(function(s, li){
   483	    const spans = spanEls[li];
   484	    for (let i = 0; i < spans.length; i++){
   485	      const v = i < s.shown ? "visible" : "hidden";
   486	      if (spans[i].style.visibility !== v) spans[i].style.visibility = v;
   487	    }
   488	  });
   489	  if (active >= 0){
   490	    if (cursorHome !== active){
   491	      lineEls[active].appendChild(cursorEl);  /* same node, moved at boundary */
   492	      cursorHome = active;
   493	    }
   494	    cursorEl.style.display = "";
   495	    const lineRect = lineEls[active].getBoundingClientRect();
   496	    const metrics = spanEls[active].map(function(sp){
   497	      const r = sp.getBoundingClientRect();
   498	      return { right: r.right - lineRect.left, top: r.top - lineRect.top };
   499	    });
   500	    const pr = promptEls[active].getBoundingClientRect();
   501	    const pos = cursorPosFor(metrics,
   502	      { right: pr.right - lineRect.left, top: pr.top - lineRect.top },
   503	      st[active].shown);
   504	    cursorEl.style.left = pos.left + "px";
   505	    cursorEl.style.top = pos.top + "px";
   506	  }
   507	  if (active < 0 && cursorHome !== -1){
   508	    cursorEl.remove(); cursorHome = -1;
   509	  }
   510	  return SCHED.totalMs;
   511	}
   512	
   513	let timer = null, startedAt = 0, pausedElapsed = 0, playing = false;
   514	function tick(){
   515	  const elapsed = performance.now() - startedAt;
   516	  const total = render(elapsed);
   517	  if (elapsed < total){ timer = requestAnimationFrame(tick); }
   518	  else { playing = false; render(total); }
   519	}
   520	function play(){
   521	  if (playing) return;
   522	  playing = true; startedAt = performance.now() - pausedElapsed;
   523	  timer = requestAnimationFrame(tick);
   524	}
   525	function pause(){
   526	  if (!playing) return;
   527	  pausedElapsed = performance.now() - startedAt;
   528	  playing = false;
   529	  if (timer) cancelAnimationFrame(timer);
   530	}
   531	function restart(){ playing = false; if (timer) cancelAnimationFrame(timer); pausedElapsed = 0; play(); }
   532	
   533	window.addEventListener("message", function(e){
   534	  if (e.data === "play") play();
   535	  if (e.data === "pause") pause();
   536	  if (e.data === "restart") restart();
   537	});
   538	render(0);
   539	play();
   540	</script>
   541	</body>
   542	</html>

exec
/bin/bash -lc "sed -n '1,124p' build-record-attempt3.md | nl -ba" in /tmp/t03a3/lensrun
 succeeded in 0ms:
     1	# T03 — Live-typed lyric text · build record · attempt 3 · 2026-11-17
     2	
     3	Item: T03, Packet P1 @ 0:21–0:35.
     4	This record is SCORE-BLIND by construction: construction facts, the
     5	source checkpoint table, the window contract, and diagnostic results
     6	only. Final source: recreation.html, sha256
     7	1f182eac11d6afb4a02570526d4b0a26fcd96fdcda08381a298f0d12abff8b96.
     8	
     9	## Construction facts
    10	- Single self-contained HTML file; DOM typing; all content, timing,
    11	  palette and presentation values come from CONFIG at the top of the
    12	  script (23 keys; every key is consumed at a named application site —
    13	  the census leg filed beside this record carries the full table). No
    14	  external assets, no specimen media; specimen words appear only as
    15	  CONFIG data.
    16	- Typing unit is the grapheme cluster: `segmentGraphemes()` uses
    17	  `Intl.Segmenter` with granularity "grapheme" where available;
    18	  otherwise a documented fallback merges code points with combining
    19	  marks, variation selectors, skin-tone modifiers, ZWJ sequences, and
    20	  regional-indicator pairs (the fallback does not implement every
    21	  UAX #29 rule, e.g. some Indic conjuncts — limitation recorded here).
    22	- Reveal construction: the full text of every line is laid out once at
    23	  build time as one span per grapheme cluster, all spans present in
    24	  the DOM from the first frame; per-frame updates toggle only span
    25	  visibility (shown ⇔ index < the state model's count for that line).
    26	  Word wrap is therefore computed on the complete text at build time,
    27	  and a partially revealed word cannot change rows as clusters arrive.
    28	  Span concatenation equals the full line text at every elapsed time.
    29	- Cursor: ONE cursor element is created once, never rebuilt; it is
    30	  positioned outside the text flow (absolute positioning inside its
    31	  line, which is relatively positioned), so it adds zero width and
    32	  zero height and cannot affect wrapping. Per frame its left/top are
    33	  set from the measured boundary of the revealed text: the boundary is
    34	  the last revealed grapheme span (left = that span's right edge
    35	  against the line box, top = that span's top, both from runtime
    36	  rectangles). Boundary states: nothing revealed → the prompt span's
    37	  right edge on the first row; partial word → immediately after the
    38	  last revealed cluster, before the unrevealed remainder of the same
    39	  word; wrapped row → the boundary span's own row top; completed →
    40	  after the final cluster, where the cursor holds until the next line
    41	  activates. Its blink animation is never restarted by frame rendering.
    42	  The stage is never rebuilt (no innerHTML writes anywhere in the
    43	  file).
    44	- Visible window: a line is displayed exactly when it lies inside the
    45	  active-anchored window (window start ≤ line ≤ active line); before
    46	  the first line starts, only line 0's slot stands, empty. Future
    47	  lines are not displayed, so they show no prompt and reserve no
    48	  height on stage. A line's prompt keeps its layout width at all times
    49	  and becomes visible exactly when its line activates, so activation
    50	  never shifts the line. The window slides only when the active line
    51	  changes.
    52	- Layout measurement: one off-screen measurement pass supplies every
    53	  height the stage relies on. Each line is laid out in a measurement
    54	  stage sharing the live stage's width, font size, line-height and
    55	  wrapping (no element in it is hidden with display:none); each line's
    56	  full-layout height is recorded, and the live stage's reserved height
    57	  is the largest total of any visible window of those heights. The
    58	  measured per-line heights are the same heights the displayed lines
    59	  occupy when live. One invalidation handler governs font and resize:
    60	  the clamped font size is recomputed first, then the measurement pass
    61	  re-runs, the reserved height resets, and the frame re-renders; it
    62	  fires on window resize and when document fonts finish loading. A
    63	  stale measurement is never reused after either event.
    64	- Sequencing is a pure function of elapsed time (`stateAt(sched,
    65	  elapsed)`): the same elapsed always yields the same shown counts, on
    66	  seek or on continuous play. Playback self-starts inside the file and
    67	  also answers the comparison page's play/pause/restart messages; that
    68	  interface is unchanged from the previous build, and comparison.html
    69	  is not changed by this build (its ORIGINAL side is untouched).
    70	
    71	## Schedule construction (one contract for every mode)
    72	Validation order is fixed: (1) configuration values are
    73	validated/defaulted; (2) exactly one mode is selected — a valid
    74	authored schedule first, then an exact specimen match, then the
    75	fallback allocation; modes never blend; (3) the base schedule for the
    76	selected mode is built; (4) the base is checked for containment inside
    77	the window; (5) an explicit per-cluster interval override may rescale
    78	a derived (specimen/fallback) schedule; (6) any overrun is recorded on
    79	the schedule, never silently clamped.
    80	- Value policies: a window that is not a finite positive number falls
    81	  back to the 14,000 ms default (diagnostic recorded); start delay
    82	  non-finite → 300, negative → 0; line pause NaN → 900, negative → 0,
    83	  infinite → treated as budget-exhausting (the containment policy
    84	  below caps it); final hold non-finite → 470, negative → 0. An empty
    85	  line list yields an empty schedule with the window as its total. A
    86	  line with empty text takes a zero duration at its sequential start
    87	  and keeps its pause slot. A single line takes the full typing span
    88	  as its duration and fits the window exactly, whatever its cluster
    89	  count.
    90	- Degenerate window: when the window leaves no typing span (final
    91	  hold < window ≤ start delay + final hold), every line takes a zero
    92	  duration at the effective start (max(0, window − final hold)), the
    93	  schedule is flagged overflow + degenerate, nothing is revealed at
    94	  any elapsed time, and no value in the schedule is NaN.
    95	- Containment: a derived schedule's base always ends inside the
    96	  window. The fallback's final line ends at windowMs − finalHoldMs
    97	  exactly, by construction (durations allocated in proportion to
    98	  cluster counts, rounding residual on the last cluster-carrying
    99	  line). When the inter-line pauses alone would exhaust the typing
   100	  span, the effective pause compresses to at most a quarter of the
   101	  span, leaving a positive typing budget; schedules whose pauses fit
   102	  are never compressed (the six-line default keeps its 900 ms pauses;
   103	  the 17-line default case compresses to an effective pause of
   104	  206 ms). The schedule carries {overflow, effectivePauseMs,
   105	  effectiveStartMs} and the stage element exposes the overflow state
   106	  as a data attribute.
   107	- Authored schedule: CONFIG.lineSchedule (per-line start/duration,
   108	  independent of the line texts) is used exactly as given when valid
   109	  for the current line count (finite, monotonic starts, every end
   110	  inside the window); an invalid one falls back to the next mode with
   111	  a diagnostic. Authored timings are never rescaled.
   112	- Interval override: CONFIG.charMs / ?charMs=N sets the per-cluster
   113	  typing interval directly (finite, > 0, clamped to [10, 1000];
   114	  invalid or absent → ignored, schedule identical to the
   115	  no-override schedule). In the fallback mode each line's duration
   116	  becomes its cluster count × the interval; in the specimen mode all
   117	  durations scale by interval ÷ the derived per-cluster interval.
   118	  Starts recompute sequentially, preserving the first start and the
   119	  base inter-line pauses. If the rescaled end passes the window, the
   120	  schedule's total becomes the rescaled end + the final hold and the
   121	  overrun flag is set — explicit, never clamped. When an authored
   122	  schedule and the override are both present, the authored schedule
   123	  stands and the schedule records charMsIgnoredAuthored: true.
   124	

codex
The main content and presentation controls are configurable. I found two reuse limits: RTL layout needs code changes, and independent duration rounding may produce invalid schedules at very high line counts. I’m checking that rounding case directly.

exec
/bin/bash -lc "node <<'NODE'
const fs=require('fs'),vm=require('vm');
const src=fs.readFileSync('recreation.html','utf8');
const script=src.split('<script>')[1].split('</script>')[0].split('/* --- DOM built once --- */')[0];
const ctx={location:{search:''},URLSearchParams,Intl};vm.createContext(ctx);
vm.runInContext(script+"'`
const large=deriveSchedule({...CONFIG,lines:Array(20000).fill('"'x')});
const small=deriveSchedule({...CONFIG,lines:['A','B'],windowMs:301,finalHoldMs:0,linePauseMs:0,startDelayMs:300});
const authored=deriveSchedule({...CONFIG,lines:['A'],lineSchedule:[{startMs:-100,durationMs:50}]});
JSON.stringify({large:{n:large.lines.length,pause:large.effectivePauseMs,last:large.lines.at(-1),previous:large.lines.at(-2)},small:small.lines,authored:{mode:authored.mode,lines:authored.lines},keys:Object.keys(CONFIG).length});"'`,ctx);
console.log(vm.runInContext(`JSON.stringify({large:{n:large.lines.length,pause:large.effectivePauseMs,last:large.lines.at(-1),previous:large.lines.at(-2)},small:small.lines,authored:{mode:authored.mode,lines:authored.lines},keys:Object.keys(CONFIG).length})`,ctx));
NODE' in /tmp/t03a3/lensrun
 succeeded in 1258ms:
{"large":{"n":20000,"pause":0,"last":{"startMs":20299,"durationMs":-6769},"previous":{"startMs":20298,"durationMs":1}},"small":[{"startMs":300,"durationMs":1},{"startMs":301,"durationMs":0}],"authored":{"mode":"authored","lines":[{"startMs":-100,"durationMs":50}]},"keys":23}

codex
Verdict: **Reusability is substantial but incomplete for production multilingual reuse; 78/100.** Ordinary text, line-count, timing, and presentation swaps work through config, while RTL and extreme-length robustness require logic changes.

1. **Core parameterization earns strong credit.** The source defines 23 CONFIG keys (independently counted), covering lines/count, interval, pauses, authored timings, prompt, palette, font, size, and visible-line count. Their application sites are present in `recreation.html:46–73`, `139–304`, and `389–477`. Swapped words use content-independent fallback allocation or authored schedules. The exact-word specimen branch (`135–137`, `240–258`) does not prevent reuse because those alternatives exist. The swap results in `own-check-packet-attempt3.txt:160–164` corroborate this construction, though I did not rerun that original suite.

2. **RTL is a material config-only reuse gap.** There is no direction key; the document fixes `lang="en"` (`recreation.html:2`), prompt spacing uses `marginRight` (`414`), and the cursor always uses the preceding cluster’s right edge (`379–384`, `495–505`). Changing words and font cannot supply direction-aware prompt placement or cursor boundaries. This agrees with the explicit limitation in `build-record-attempt3.md:248–250`. A direction/language configuration applied consistently to live layout, measurement, spacing, and cursor boundaries would clear this gap.

3. **Many-line allocation can produce negative durations.** Independent rounding followed by a residual on the last weighted line (`recreation.html:287–301`) lacks a final validity check. I executed the extracted functions with 20,000 one-cluster lines and otherwise default config: effective pause was 0, the penultimate line started at 20,298 ms with duration 1 ms, and the last started at 20,299 ms with duration **−6,769 ms**. This contradicts the general containment contract in `build-record-attempt3.md:95–106`; the packet’s 17-line case does not cover it. Allocating from rounded cumulative boundaries and validating the completed schedule would clear this defect.

4. **Unicode support is useful but conditional.** `Intl.Segmenter` and the documented fallback support grapheme-based reuse (`recreation.html:91–119`). The packet covers decomposed accents, joined-family emoji, and flag pairs (`own-check-packet-attempt3.txt:153–159`). However, the fallback explicitly lacks some Indic conjunct rules (`recreation.html:96–99`); those environments cannot guarantee complete-cluster typing by config alone. A complete segmentation fallback or an explicit supported-runtime requirement would close this limitation.

5. **Very long content has no bounded resource or height policy.** Every cluster receives a DOM span (`recreation.html:408–427`), every frame scans all spans and measures every active-line span (`482–499`), and reserved height follows full wrapped-line heights without a viewport cap (`437–456`). `maxVisibleLines` limits logical lines, not wrapped rows. This is a scalability constraint inferred from code, not a measured performance failure. A configured height/overflow policy and bounded rendering work would improve production reuse.

6. **The “all values from CONFIG” claim needs qualification.** Timing defaults, interval bounds, pause-compression share, and blink shape remain literal policies (`recreation.html:13`, `145–176`, `281–283`). The active-anchored visibility policy is fixed; only its count is configurable (`339–347`). These do not bind ordinary reuse to specimen words, but changing those policies requires editing logic. Also, authored validation accepts negative starts: an independent probe accepted `{startMs:-100,durationMs:50}` as authored (`181–194`). Explicit configurable policies and nonnegative-start validation would tighten the contract.

Limits: Read all three supplied disk files. Independent execution covered the reported allocation and negative-start probes, not the original full suite. Browser geometry, script shaping, viewport overflow, and performance remain unverified; the build record also marks rendering PIXEL-UNVERIFIED (`213–220`). Other lenses and the aggregate tier decision are not assessed.

SCORE: 78
BODY-WRITE: none (read-only run); this return is for verbatim filing at codex/attempt-3/lens-reusability.md and the scores.md attempt-3 reusability entry of 78.
tokens used
35,975
Verdict: **Reusability is substantial but incomplete for production multilingual reuse; 78/100.** Ordinary text, line-count, timing, and presentation swaps work through config, while RTL and extreme-length robustness require logic changes.

1. **Core parameterization earns strong credit.** The source defines 23 CONFIG keys (independently counted), covering lines/count, interval, pauses, authored timings, prompt, palette, font, size, and visible-line count. Their application sites are present in `recreation.html:46–73`, `139–304`, and `389–477`. Swapped words use content-independent fallback allocation or authored schedules. The exact-word specimen branch (`135–137`, `240–258`) does not prevent reuse because those alternatives exist. The swap results in `own-check-packet-attempt3.txt:160–164` corroborate this construction, though I did not rerun that original suite.

2. **RTL is a material config-only reuse gap.** There is no direction key; the document fixes `lang="en"` (`recreation.html:2`), prompt spacing uses `marginRight` (`414`), and the cursor always uses the preceding cluster’s right edge (`379–384`, `495–505`). Changing words and font cannot supply direction-aware prompt placement or cursor boundaries. This agrees with the explicit limitation in `build-record-attempt3.md:248–250`. A direction/language configuration applied consistently to live layout, measurement, spacing, and cursor boundaries would clear this gap.

3. **Many-line allocation can produce negative durations.** Independent rounding followed by a residual on the last weighted line (`recreation.html:287–301`) lacks a final validity check. I executed the extracted functions with 20,000 one-cluster lines and otherwise default config: effective pause was 0, the penultimate line started at 20,298 ms with duration 1 ms, and the last started at 20,299 ms with duration **−6,769 ms**. This contradicts the general containment contract in `build-record-attempt3.md:95–106`; the packet’s 17-line case does not cover it. Allocating from rounded cumulative boundaries and validating the completed schedule would clear this defect.

4. **Unicode support is useful but conditional.** `Intl.Segmenter` and the documented fallback support grapheme-based reuse (`recreation.html:91–119`). The packet covers decomposed accents, joined-family emoji, and flag pairs (`own-check-packet-attempt3.txt:153–159`). However, the fallback explicitly lacks some Indic conjunct rules (`recreation.html:96–99`); those environments cannot guarantee complete-cluster typing by config alone. A complete segmentation fallback or an explicit supported-runtime requirement would close this limitation.

5. **Very long content has no bounded resource or height policy.** Every cluster receives a DOM span (`recreation.html:408–427`), every frame scans all spans and measures every active-line span (`482–499`), and reserved height follows full wrapped-line heights without a viewport cap (`437–456`). `maxVisibleLines` limits logical lines, not wrapped rows. This is a scalability constraint inferred from code, not a measured performance failure. A configured height/overflow policy and bounded rendering work would improve production reuse.

6. **The “all values from CONFIG” claim needs qualification.** Timing defaults, interval bounds, pause-compression share, and blink shape remain literal policies (`recreation.html:13`, `145–176`, `281–283`). The active-anchored visibility policy is fixed; only its count is configurable (`339–347`). These do not bind ordinary reuse to specimen words, but changing those policies requires editing logic. Also, authored validation accepts negative starts: an independent probe accepted `{startMs:-100,durationMs:50}` as authored (`181–194`). Explicit configurable policies and nonnegative-start validation would tighten the contract.

Limits: Read all three supplied disk files. Independent execution covered the reported allocation and negative-start probes, not the original full suite. Browser geometry, script shaping, viewport overflow, and performance remain unverified; the build record also marks rendering PIXEL-UNVERIFIED (`213–220`). Other lenses and the aggregate tier decision are not assessed.

SCORE: 78
BODY-WRITE: none (read-only run); this return is for verbatim filing at codex/attempt-3/lens-reusability.md and the scores.md attempt-3 reusability entry of 78.
