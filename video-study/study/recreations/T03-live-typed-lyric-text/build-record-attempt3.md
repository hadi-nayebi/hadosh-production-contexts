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
