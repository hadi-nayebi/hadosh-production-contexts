OpenAI Codex v0.164.0-alpha.9
--------
workdir: /home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T03-live-typed-lyric-text
model: gpt-6.1-sol
provider: openai
approval: never
sandbox: workspace-write [workdir, /tmp, $TMPDIR]
reasoning effort: none
reasoning summaries: none
session id: 01a1d971-dbfd-7b40-b689-d5645796c31d
--------
user
STANDING HEADER — Codex review run, practice job re-score wave.
(1) CONSUMER + DECISION: consumer is practice INSTRUCTION §5 (the re-score wave for technique T03, attempt 2); this run prices the TIMING lens only — its score feeds the attempt-2 tier decision and any cures for a next attempt.
(2) WORKING RECORD: this run builds from and writes to the artifact directory hidden_files/study/recreations/T03-live-typed-lyric-text/ — its codex/attempt-2/ folder (returns) and scores.md. Your full return is filed verbatim at codex/attempt-2/lens-timing.md.
(3) BODY-WRITE REQUIREMENT: your return MUST end with a line "BODY-WRITE: <what this return writes into the body — the codex/attempt-2/lens-timing.md filing and the scores.md attempt-2 timing entry>" and, on the line before it, "SCORE: <integer 0-100>". A return without those two lines is incomplete.

TECHNIQUE T03 — Live-typed lyric text. Catalogue mechanics: "sung text types in time with the vocal as depicted content (the song being written), never a caption plate." Specimen window P1 @ 0:21-0:35 (14 s). The typing cadence must feel synced to a sung vocal: steady per-unit interval, a hold when a line completes, then the next line; final line holds to the window's end. The build record carries a source checkpoint table for the window: it states what the record supports (window bounds, line order, one early frame) and what it cannot support (no timed transcript or vocal anchors exist), and derives a per-line schedule by proportional allocation over grapheme counts, with a separate fallback allocation for swapped text.

YOUR LENS — TIMING/TEMPO MATCH ONLY: judge the temporal design against the specimen window: per-unit cadence plausibility vs sung delivery, line-pause proportion, start delay, total performance duration vs the 14 s window (does it finish early and idle, overrun, or fit?), cursor blink tempo during holds, and the honesty/fit of the schedule derivation given the stated evidence limits. Do NOT score motion form, purity, parameterization, or legibility — other lenses own those.

Below is the recreation's full source (recreation.html), followed by its build record (build-record-attempt2.md) with the checkpoint table and diagnostic results. Return: priced findings for the timing lens, then SCORE and BODY-WRITE lines as specified. Score timing only, 0-100.
==== recreation.html ====
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>T03 — Live-typed lyric text (parameterized recreation)</title>
<style>
  html,body{margin:0;padding:0;height:100%;}
  body{display:flex;align-items:flex-end;box-sizing:border-box;padding:6vh 5vw;}
  #stage{width:100%;}
  .line{white-space:pre-wrap;word-break:break-word;line-height:1.5;box-sizing:border-box;}
  .prompt{margin-right:.6ch;}
  .cursor{display:inline-block;width:.62ch;margin-left:1px;vertical-align:baseline;animation:blink 1s steps(1) infinite;}
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
       source checkpoint table in build-record-attempt2.md; used only when
       CONFIG.lines exactly match the specimen lines.
   (b) FALLBACK policy — for any swapped text, per-line durations are derived
       from line count, grapheme counts, and CONFIG.windowMs. The fallback is
       an allocation policy, never specimen evidence.
   Typing reveals complete grapheme clusters. One persistent cursor element
   is created once; per-frame updates touch only text nodes.
   URL overrides for the swap test: ?line=TEXT ?charMs=N ?accent=HEX
   (?charMs scales the fallback/specimen per-cluster interval proportionally
   only in fallback mode; in specimen mode it is ignored so the priced
   schedule stays intact — set ?lines= to force fallback mode.) */
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
  prompt: ">",
  bg: "#060807",
  ink: "#e8ece7",
  accent: "#7ac74f",
  cursorColor: "#9aa79b",
  fontFamily: 'ui-monospace, "SF Mono", Menlo, Consolas, monospace',
  fontSizePx: 30
};
(function applyOverrides(){
  const q = new URLSearchParams(location.search);
  if (q.get("lines")) CONFIG.lines = q.get("lines").split("|");
  else if (q.get("line")) CONFIG.lines = [q.get("line")].concat(CONFIG.lines.slice(1));
  if (q.get("accent")) CONFIG.accent = q.get("accent");
  if (q.get("maxVisibleLines")) CONFIG.maxVisibleLines = Math.max(1, parseInt(q.get("maxVisibleLines"),10) || CONFIG.maxVisibleLines);
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

/* --- Schedule derivation --- */
function isSpecimen(lines){
  return lines.length === SPECIMEN_LINES.length &&
    lines.every(function(l, i){ return l === SPECIMEN_LINES[i]; });
}
function deriveSchedule(cfg){
  const clusters = cfg.lines.map(segmentGraphemes);
  if (isSpecimen(cfg.lines) && cfg.specimenSchedule &&
      cfg.specimenSchedule.length === cfg.lines.length){
    return { mode: "specimen", clusters: clusters,
      lines: cfg.specimenSchedule.map(function(s){
        return { startMs: s.startMs, durationMs: s.durationMs }; }),
      totalMs: cfg.windowMs };
  }
  /* FALLBACK policy: typing budget = window minus start delay, inter-line
     pauses, and the final-hold reserve; allocated per line in proportion
     to grapheme-cluster count. */
  const n = cfg.lines.length;
  const totalClusters = clusters.reduce(function(a,c){ return a + Math.max(1, c.length); }, 0);
  const pauses = cfg.linePauseMs * Math.max(0, n - 1);
  const budget = Math.max(0, cfg.windowMs - cfg.startDelayMs - pauses - cfg.finalHoldMs);
  let t = cfg.startDelayMs;
  const lines = clusters.map(function(c){
    const dur = totalClusters ? Math.round(budget * Math.max(1, c.length) / totalClusters) : 0;
    const s = { startMs: t, durationMs: dur };
    t += dur + cfg.linePauseMs;
    return s;
  });
  return { mode: "fallback", clusters: clusters, lines: lines, totalMs: cfg.windowMs };
}

/* Pure state model: state at elapsed ms depends only on elapsed. */
function stateAt(sched, elapsed){
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
  let active = -1;
  sched.lines.forEach(function(ls, li){
    if (elapsed >= ls.startMs) active = li;
  });
  return active;
}

/* --- DOM built once --- */
const stage = document.getElementById("stage");
document.body.style.background = CONFIG.bg;
stage.style.color = CONFIG.ink;
stage.style.fontFamily = CONFIG.fontFamily;
stage.style.fontSize = Math.min(CONFIG.fontSizePx, Math.max(16, window.innerWidth * 0.055)) + "px";

const SCHED = deriveSchedule(CONFIG);
const lineEls = [], textNodes = [];
const cursorEl = document.createElement("span");   /* created ONCE */
cursorEl.className = "cursor";
cursorEl.style.background = CONFIG.cursorColor;
cursorEl.textContent = "\u00A0";
let cursorHome = -1;

CONFIG.lines.forEach(function(text, li){
  const div = document.createElement("div");
  div.className = "line";
  const p = document.createElement("span");
  p.className = "prompt"; p.style.color = CONFIG.accent; p.textContent = CONFIG.prompt;
  div.appendChild(p);
  const txt = document.createElement("span");
  txt.textContent = "";
  div.appendChild(txt);
  stage.appendChild(div);
  lineEls.push(div); textNodes.push(txt);
});

/* Reserve final layout before typing: a hidden probe (never duplicate
   visible text: visibility:hidden + aria-hidden, removed after measuring)
   measures each line's full wrapped height including cursor space; every
   line slot is fixed to that height so revealed text never moves. */
function reserveLayout(){
  const probe = document.createElement("div");
  probe.setAttribute("aria-hidden", "true");
  probe.style.cssText = "visibility:hidden;position:absolute;left:0;top:0;pointer-events:none;" +
    "white-space:pre-wrap;word-break:break-word;line-height:1.5;box-sizing:border-box;" +
    "font-family:" + CONFIG.fontFamily + ";font-size:" + stage.style.fontSize + ";" +
    "width:" + stage.clientWidth + "px;";
  document.body.appendChild(probe);
  CONFIG.lines.forEach(function(text, li){
    probe.textContent = CONFIG.prompt + "\u00A0" + text + "\u00A0";
    lineEls[li].style.minHeight = probe.offsetHeight + "px";
  });
  probe.remove();
}
reserveLayout();
window.addEventListener("resize", reserveLayout);

let lastTrimStart = -1;
function render(elapsed){
  const st = stateAt(SCHED, elapsed);
  const active = activeLineAt(SCHED, elapsed);
  /* Trimming ONLY at line boundaries: the visible window changes only when
     the active line index changes, never mid-reveal. */
  const trimStart = Math.max(0, (active < 0 ? 0 : active) - CONFIG.maxVisibleLines + 1);
  if (trimStart !== lastTrimStart){
    lineEls.forEach(function(div, li){ div.style.display = li < trimStart ? "none" : ""; });
    lastTrimStart = trimStart;
  }
  st.forEach(function(s, li){
    const str = SCHED.clusters[li].slice(0, s.shown).join("");
    if (textNodes[li].textContent !== str) textNodes[li].textContent = str;
  });
  if (active >= 0 && cursorHome !== active){
    lineEls[active].appendChild(cursorEl);  /* same node, moved at boundary */
    cursorHome = active;
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
# T03 — Live-typed lyric text · build record · attempt 2 · 2026-11-14

Job: practice Cycle 002 Wave 1 (per-item Execute+Verify). Item: T03, Packet P1 @ 0:21–0:35.
This record is SCORE-BLIND by construction: construction facts, the source
checkpoint table, the viewport contract, and diagnostic results only.

## Construction facts
- Single self-contained HTML file; DOM typing; content, timing, and palette
  all from CONFIG at the top of the script. No external assets, no specimen
  media; specimen words appear only as CONFIG data.
- Typing unit is the grapheme cluster: `segmentGraphemes()` uses
  `Intl.Segmenter` with granularity "grapheme" where available; otherwise a
  documented fallback merges code points with combining marks, variation
  selectors, skin-tone modifiers, ZWJ sequences, and regional-indicator
  pairs (the fallback does not implement every UAX #29 rule, e.g. some Indic
  conjuncts — limitation recorded here).
- Sequencing is a pure function of elapsed time (`stateAt(sched, elapsed)`):
  the same elapsed always yields the same shown counts, on seek or on
  continuous play.
- Cursor: ONE cursor DOM element is created once at build; per-frame updates
  touch only line text nodes; the cursor node is moved to the active line's
  container only when the active line changes (a line boundary), and its CSS
  blink animation is never restarted by frame rendering. The stage is never
  rebuilt (no innerHTML writes anywhere in the file).
- Line slots are built once for every configured line before typing starts.

## Source checkpoint table (specimen window P1 @ 0:21–0:35, 14.0 s)
Evidence the record actually carries:
- The catalogue/build record establishes the window bounds (0:21–0:35) and
  that the window spans the three configured lyric lines in order, typed
  char-by-char with accumulation.
- One evidence frame (ev/t23.jpg, ≈0:23, i.e. ≈2 s into the window on the
  20.5 s cut offset) shows line 1 with the block cursor at its head. A single
  still cannot separate "line just completed" from "final cluster just
  revealed", so the frame anchors only that line 1 is the active line early
  in the window.
- The record carries NO timed transcript, ASR alignment, or vocal-beat
  anchors. Per-line start/end times in the specimen are therefore NOT
  derivable from the record; any per-line boundary below is an allocation
  model, not a measurement. Uncertainty on each intermediate boundary is
  large (±3 s class — bounded only by the window ends).

Derived specimen schedule (allocation model): typing budget = window
14 000 ms − start delay 300 ms − inter-line pauses 2 × 900 ms − final hold
470 ms = 11 430 ms, allocated per line in proportion to grapheme-cluster
count (28 / 34 / 28 = 90 clusters; ≈127 ms per cluster):

| Line | Clusters | Start (ms into window) | End (ms) | Basis |
|---|---|---|---|---|
| 1 "I made a song, I made a beat" | 28 | 300 | 3 856 | proportional allocation |
| 2 "I wrote the words, I feel the heat" | 34 | 4 756 | 9 074 | proportional allocation |
| 3 "I made a song, I made a beat" | 28 | 9 974 | 13 530 | proportional allocation |
| final hold | — | 13 530 | 14 000 | window remainder only (470 ms) |

Typing spans 13 530 of the 14 000 ms window; the final hold is exactly the
window remainder, with the full text and the blinking cursor held.

## Two-layer CONFIG schedule
- SPECIMEN layer: `CONFIG.specimenSchedule` (the table above) applies only
  when `CONFIG.lines` exactly matches the specimen lines.
- FALLBACK layer (labeled fallback, never evidence): for any swapped text,
  per-line durations are derived from line count, per-line grapheme counts,
  and `CONFIG.windowMs` — the same budget arithmetic (window − start delay −
  pauses − final-hold reserve) allocated in proportion to cluster counts.
  A swapped line set never silently inherits the specimen schedule.
- `CONFIG.maxVisibleLines` (default 3) bounds how many line slots are
  visible; see the viewport contract.

## Joint viewport contract (specified before the scoring wave)
- Every configured line owns a slot reserved BEFORE typing: a hidden probe
  element (visibility:hidden, aria-hidden="true", position:absolute, removed
  after measuring — never duplicate visible text) measures each line's full
  wrapped height including prompt and cursor space at the current stage
  width/font, and each slot's min-height is fixed to that measurement.
  Re-measured on resize.
- Phases: before line 1 starts, all slots stand reserved and empty; while
  line N types, slots 1..N are in the visible window and revealed characters
  occupy their reserved positions — a line's on-screen position cannot move
  during its own reveal, and earlier completed lines cannot move while a
  later line reveals.
- Trimming happens ONLY at line boundaries: when the active line index
  advances past `maxVisibleLines`, the oldest completed lines leave the
  visible window at that boundary moment. Trimming never occurs mid-reveal,
  so revealed text never moves while it is being read.
- Cursor space is reserved inside the active line's reserved height (the
  probe text includes a trailing cursor-width space), so the cursor never
  adds height or wraps onto a new visual line of its own.
- RTL layout mirroring is NOT implemented in this attempt (deferred in the
  governing plan); grapheme segmentation and maxVisibleLines are this
  attempt's multilingual provisions.

## Cure-to-evidence matrix
| Cure | Intended effect | Isolated diagnostic | Observed result | Evidence |
|---|---|---|---|---|
| Two-layer schedule from checkpoint table | Typing spans the window; each line starts at its table offset; final hold = remainder only | Node logic test: per-line start/end equality with the table, not-started-before-start, partial mid-reveal, complete-at-end, typing end = window − finalHold | All pass (see diagnostics) | test run in this record |
| Persistent cursor | Blink clock survives frames and holds; cursor rides the active line | Source census: exactly 1 cursor createElement, 0 innerHTML writes; per-frame path writes text nodes only | Pass at source level; DOM identity across frames is the same object by construction (single element, moved only at boundaries) | grep counts in this record |
| Reserved layout / viewport contract | No layout shift during reveal; no overflow from cursor wrap | Probe-reservation construction + logic determinism check | Construction in place; pixel-level position stability UNVERIFIED (see PIXEL status) | this record |
| Grapheme-cluster reveal | Combining characters and joined emoji reveal as one unit | Node tests: decomposed accent (e + U+0301) = 1 cluster; ZWJ family emoji = 1 cluster; flag pair = 1 cluster; sweep asserts no intermediate state splits a cluster; fallback segmenter (Intl.Segmenter disabled) passes the same three cases | All pass | test run in this record |
| Fallback schedule for swaps | Swapped text types fully inside the same window arithmetic | Node swap test: 2 swapped lines → fallback mode, total = window, typing ends at window − finalHold, pause arithmetic exact, both lines complete; 6-line fallback also fits the window | All pass | test run in this record |

Movement attribution note: the cures share one reveal loop, so any scoring
movement files as a BUNDLED outcome unless a diagnostic isolates a mechanism.

## Diagnostics (own checks, before the wave)
- Node logic suite (functions extracted verbatim from the built file):
  29 checks, 29 PASS, 0 FAIL — checkpoint alignment per line (start, end,
  not-started, mid-reveal partial, complete), typing end = 13 530 ms,
  total = 14 000 ms, stateAt determinism, grapheme cases, cluster-split
  sweep, fallback swap arithmetic (2-line and 6-line).
- Fallback segmenter suite (Intl.Segmenter disabled): accent, ZWJ sequence,
  flag pair — 3 PASS.
- Cursor source census: `cursorEl = document.createElement` count = 1;
  `innerHTML` count = 0.
- Purity grep on recreation.html
  (`segment.mp4|source.mp4|<video|<img>|.jpg|.png|.mp4`): 0 hits.
- Syntax: extracted script passes `node --check`.
- PIXEL-UNVERIFIED: headless render attempted with
  /opt/meta-chromium/chrome (private debugging port 9414, 960×540 target);
  launch failed before any page load — exit 13, stderr: "Hatch WebGL domain
  policy is required for browser startup"; dumped DOM = 0 bytes. Geometry
  claims therefore rest on the deterministic logic tests and the
  probe-reservation construction, not on rendered pixels. This is a named
  limitation, not a pass.
- comparison.html: NOT changed — its interface to the recreation is the
  iframe + postMessage controls, which are unchanged; the recreation's new
  CONFIG keys are internal. The comparison's ORIGINAL side is untouched.

## Preservation
- recreation-attempt-1.html created create-once before any write; its
  sha256 equals the seat baseline for the attempt-1 recreation.html.

warning: Codex could not find bubblewrap on PATH. Install bubblewrap with your OS package manager. See the sandbox prerequisites: https://developers.openai.com/codex/concepts/sandboxing#prerequisites. Codex will use the bundled bubblewrap in the meantime.
warning: Code Mode is unavailable because failed to spawn code-mode host /opt/hatch-image/bin/codex-code-mode-host: host executable was not found. Code mode will fail closed; enable `features.code_mode_host` and install `codex-code-mode-host`.
codex
I’ll check the timing arithmetic and evidence limits, then file the timing verdict and score in the attempt-2 records.
2026-11-14T09:44:51.058979Z ERROR codex_core::tools::router: error=failed to spawn code-mode host /opt/hatch-image/bin/codex-code-mode-host: No such file or directory (os error 2)
codex
Timing score: **78/100**. The schedule fits the window and offers a plausible typing rhythm; vocal synchronization remains unverified.

- **Cadence:** All three lines reveal at approximately 127 ms per grapheme (7.87 graphemes/second). This is steady and plausible for the lyrics, but uniform character timing cannot establish alignment with sung syllables or phrase accents.
- **Pauses:** Two 900 ms holds provide clear phrase breaks, totaling 12.9% of the window. Their musical fit is an allocation assumption rather than specimen evidence.
- **Start and finish:** The first character appears around **427 ms**, because the 300 ms start offset precedes the first reveal interval. Completion occurs at **13,530 ms**, leaving exactly **470 ms** of final hold. There is no substantial early idle or overrun.
- **Cursor tempo:** The persistent one-second blink cycle avoids resets during typing and line changes. It is reasonable during holds, although neither a 900 ms pause nor the final 470 ms hold guarantees a complete blink cycle.
- **Evidence honesty:** The record clearly distinguishes proportional allocation from measured vocal timing and names the missing anchors. That supports an honest approximation, not a demonstrated tempo match. The early still establishes only a weak checkpoint.
- **Fallback limit:** Ordinary swaps fit the budget, but sufficiently many lines exhaust it through pauses alone. With 17 lines, the last line starts at 14,700 ms, beyond the window.

The main cure is to obtain vocal phrase anchors and compare actual reveal boundaries against them. Until then, retain the schedule’s explicit approximation status.

Filing was blocked: the execution tool failed before filesystem access. No files were changed; this return is ready for verbatim filing.

SCORE: 78
BODY-WRITE: Intended filing: codex/attempt-2/lens-timing.md and the scores.md attempt-2 timing entry (78/100); neither was written because filesystem execution was unavailable.
tokens used
16,307
Timing score: **78/100**. The schedule fits the window and offers a plausible typing rhythm; vocal synchronization remains unverified.

- **Cadence:** All three lines reveal at approximately 127 ms per grapheme (7.87 graphemes/second). This is steady and plausible for the lyrics, but uniform character timing cannot establish alignment with sung syllables or phrase accents.
- **Pauses:** Two 900 ms holds provide clear phrase breaks, totaling 12.9% of the window. Their musical fit is an allocation assumption rather than specimen evidence.
- **Start and finish:** The first character appears around **427 ms**, because the 300 ms start offset precedes the first reveal interval. Completion occurs at **13,530 ms**, leaving exactly **470 ms** of final hold. There is no substantial early idle or overrun.
- **Cursor tempo:** The persistent one-second blink cycle avoids resets during typing and line changes. It is reasonable during holds, although neither a 900 ms pause nor the final 470 ms hold guarantees a complete blink cycle.
- **Evidence honesty:** The record clearly distinguishes proportional allocation from measured vocal timing and names the missing anchors. That supports an honest approximation, not a demonstrated tempo match. The early still establishes only a weak checkpoint.
- **Fallback limit:** Ordinary swaps fit the budget, but sufficiently many lines exhaust it through pauses alone. With 17 lines, the last line starts at 14,700 ms, beyond the window.

The main cure is to obtain vocal phrase anchors and compare actual reveal boundaries against them. Until then, retain the schedule’s explicit approximation status.

Filing was blocked: the execution tool failed before filesystem access. No files were changed; this return is ready for verbatim filing.

SCORE: 78
BODY-WRITE: Intended filing: codex/attempt-2/lens-timing.md and the scores.md attempt-2 timing entry (78/100); neither was written because filesystem execution was unavailable.
