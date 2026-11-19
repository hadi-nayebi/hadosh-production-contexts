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
