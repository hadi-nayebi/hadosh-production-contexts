# T12 — Marker Highlight Sweep (+ RECEIPT stamp) · BUILD RECORD

Technique: T12 · Packet P1 "Look What I Can Do" (@aditazzz.music) @ 1:05–1:14 · Cycle 003 Wave 1 (recreation job, INSTRUCTION §1–§6)
Artifact dir: `hidden_files/study/recreations/T12-marker-highlight-sweep/`
Wave record: `hidden_files/study-jobs/recreation/runs/2026-11-14-cycle-003-wave-1/RUN.md` (wave manifest + guards SKIPPED-WITH-REASON summary; this file carries the per-item record)

## Naming note (charged in the task, recorded here)
QUEUE.md names this item "Marker highlight sweep"; TECHNIQUES.md catalogues it as
"Marker highlight + RECEIPT stamp". BOTH parts are built: (1) the yellow marker sweep
across phrases in reading order on a post card, and (2) the red RECEIPT stamp pressing
the verdict onto the card. The artifact slug follows the QUEUE name; the build carries
the full TECHNIQUES mechanic.

## §1 — Observe
- **Catalogue:** TECHNIQUES.md T12 — "yellow marker sweeps phrases in reading order on a
  post card; a red stamp presses the verdict." Feeds: word animation · diagram.
  Digest.md T12 [1:05–1:14]: "A social post card builds in the center: phrases of the post
  get yellow marker highlights swept on in reading order ('Principal Slopcore Architect'),
  and a red 'RECEIPT' stamp presses onto the card. The card later docks into a profile
  header that assembles piece by piece at right." Why it works: the sweep directs the eye
  like a teacher's pen — the viewer reads exactly the phrase the joke needs, in order;
  the stamp turns 'proof' into a physical verdict prop.
- **Evidence viewed firsthand (this run):** `ev/t68.jpg` (t=1:08) — left half shows the
  white post card on a dark ground: header "aditazzz ✓ @adi… · 10/27/26" + X mark;
  body lines "Currently upskilling to transition / to a Principal Slopcore / Architect
  role." with **"Principal Slopcore"** filled solid yellow and **"Architect"** (the
  wrap-carried remainder of the same phrase) filled solid yellow — i.e. ONE phrase
  "Principal Slopcore Architect" highlighted across the line wrap, in reading order;
  a red, slightly rotated, double-bordered **RECEIPT** stamp sits over the card's
  right-middle, overlapping the text block; below: "Trying to stay ahead of the curve."
  and "Follow along and support my professional development."; footer icons with
  heart 5 and 169 views. The right half of t68 (dark comment cards, "Slopcore"
  highlighted there too) is T13's comment stack — NOT part of T12 (scope split below).
  `ev/t65.jpg` also viewed: it is the preceding T11 scene (stamp over ASCII arch), not T12.
- **Source segment in motion (Observe before cut):** source.mp4 is 1916×1078, 30 fps,
  198.41 s (ffprobe, this run). T12 window 1:05–1:14 (9 s): card present/settling at
  window head, highlight(s) sweep on during the window, stamp already pressed by
  t=1:08 (t68) — so sweep + stamp both complete early in the window and the card
  HOLDS with verdict on it for the remainder (the hold is part of the device: the
  verdict stays readable). Sub-beats (priced from digest + t68): card build/settle →
  sweep phrase in reading order (left→right fill, phrase by phrase) → stamp press
  (fast scale-down impact, slight rotation, stays) → long hold.
- **Variables (§1.3):** card author/handle/date · card lines (text + count) · highlight
  phrases + their order/count · sweep duration per phrase · gap between sweeps ·
  start delay · marker color + opacity · card palette (bg/text/muted) · page background ·
  stamp text · stamp color · stamp angle · stamp position · stamp press duration +
  impact scale + shake · footer counts · end hold duration.
- **Consumer:** word animation · diagram containers (DLC/multilingual lane) — highlight
  the taught word/phrase at its spoken onset in reading order; stamp = verdict moments
  (correct/complete) in review and ending containers.
- **Guards SKIPPED-WITH-REASON (per wave RUN.md):** codex-observe (BUILT-NOT-FIRED),
  jev-observe-exit (BUILT-NOT-FIRED), jev-plan-exit (BUILT-NOT-FIRED), codex-plan-review
  (BUILT-NOT-FIRED), jev-prewave (UNBUILT) — no armed phase-guard runner stands in this
  seat; the five-lens Codex scoring wave (§5.4) IS the armed deliverable gate and fires
  below. This paragraph is the per-item filing of that wave-level reason.

## §2 — Plan
### Parameter table (CONFIG in recreation.html — every variable a named key, specimen value as default)
| Key | Default | Meaning |
|---|---|---|
| authorName / authorHandle / dateLabel | "aditazzz" / "@aditazzz" / "10/27/26" | card header identity |
| lines | 5 lines (see recreation CONFIG) | card body text, in order |
| highlights | ["Principal Slopcore", "Architect"] | phrases swept, in reading order (the catalogue phrase "Principal Slopcore Architect" wraps across lines 2–3 of the specimen card, so it is two sweep targets in order) |
| sweepMs | 620 | marker fill duration per phrase |
| gapMs | 420 | pause between successive sweeps |
| startDelayMs | 800 | card settle time before first sweep |
| cardEnterMs | 450 | card fade/rise-in duration |
| holdBeforeStampMs | 550 | beat after last sweep before the stamp |
| stampText | "RECEIPT" | stamp verdict word |
| stampColor | "#c1272d" | stamp ink |
| stampAngleDeg | -7 | stamp rotation |
| stampPressMs | 190 | stamp scale-down press duration |
| stampFromScale | 2.6 | stamp start scale (falls from) |
| stampShakePx | 3 | card impact shake amplitude at press |
| markerColor | "#ffd81a" | highlighter fill |
| markerOpacity | 0.9 | fill opacity |
| cardBg / cardText / mutedColor / pageBg | "#ffffff" / "#14181d" / "#5b6770" / "#0d1117" | palette |
| likesLabel / viewsLabel | "5" / "169" | footer counts (config text, not media) |
| endHoldMs | 2600 | verdict hold before loop restart |

Timeline is COMPUTED from config (start_i = startDelayMs + i×(sweepMs+gapMs);
stampAt = last sweep end + holdBeforeStampMs; total = stampAt + stampPressMs + endHoldMs
≈ 800 + 620+420+620 + 550 + 190 + 2600 ≈ 5.8 s of choreography inside the 10 s segment
window, whose remainder is the original's dock/hold tail — disclosed on comparison face).

### Construction choice
**DOM construction:** the card is real DOM text. Each highlight phrase is wrapped at
build time in `<span class="hl">` containing an absolutely-positioned fill span (the
marker: background bar behind the text, height ≈ 88% of line, slight −1° skew, rounded
ends) whose width is driven 0%→100% by the JS clock in reading order, plus the text span
above it. The stamp is a DOM element (double border via border+outline, letter-spaced
uppercase text, distressed-ink opacity texture from CSS gradients only) that presses:
opacity 0→1 with scale stampFromScale→1 and ease-in (accelerating fall), a 1-frame
overshoot to 0.96, then settle at stampAngleDeg; at the press instant the card gets a
short translate shake (stampShakePx, decaying). One rAF clock computes all progress
from elapsed time (deterministic, pause/restart via postMessage for comparison sync).
- Rejected: canvas rendering of the card (text would be pixels, not DOM — worse
  reusability, and highlight-behind-text needs manual metrics per phrase).
- Rejected: CSS keyframe animations with hardcoded delays (timings would live in CSS,
  not in CONFIG — swap test could not retime from one config object).
- Rejected: background-size sweep on the text span itself without a fill element
  (cannot hold the marker's slight vertical inset/skew independently of the glyphs,
  and multi-word phrases wrapping mid-phrase break the gradient edge).
- Rejected: SVG stamp image / traced stamp artwork (purity: stamp must be type + CSS).

### Scope split (§8)
IN: post card + sequential marker sweeps + RECEIPT stamp press + verdict hold.
OUT: the comment stack at right in t68 (that is T13, queue #9, its own item) and the
later profile-header docking (a staging move of the specimen's scene, not of this
technique's mechanic — the catalogue mechanic ends at the stamped card).

### Execute checklist
1. Cut segment.mp4: `ffmpeg -ss 64.5 -i source.mp4 -t 10 -vf scale=960:-2 -c:v libx264 -an` (§3.1; 1:05–1:14 + handles), ffprobe-verify duration/size.
2. Build recreation.html: self-contained, CONFIG at top, DOM construction above, URL overrides, postMessage sync hooks, `window.RECREATION_TEST` surface for the logic test.
3. Build comparison.html: labels exactly "ORIGINAL — P1 @ 1:05–1:14" / "RECREATION — T12, parameterized", one shared control set (play/pause/restart + swap button), phone stacking (flex-wrap, min panel width, ≥48 px buttons).
4. Self-verify (§5 legs 1–3) and record below BEFORE any Codex run.

### Verify checklist
1. Swap test (node, logic level — T15 precedent; no browser binary stands in this
   session): stubbed-DOM harness runs the recreation's real script twice — default
   config and swapped config (different phrases, changed sweepMs, changed markerColor,
   changed stampText) — asserting highlight span texts/order, computed timeline order,
   applied marker color, stamp text. Pixel render not exercisable; comparison page is
   the render surface (printed limitation, as T15).
2. Purity grep on recreation.html for `segment\.mp4|source\.mp4|t68|\.jpg|\.png|<video|<img|http://|https://` → must be 0 hits; asset inventory = the file itself only.
3. Syntax: `node --check` on the extracted inline script.
4. Comparison check: labels, shared controls present in markup, durations stated.
5. Codex five-lens wave (motion · timing · purity · reusability · readability), one
   run per lens, standing header, verbatim returns in codex/, bar avg ≥85 AND min ≥70.

### Failure points (priced for this item)
- **Phrase overlap / wrap:** a highlight phrase spanning a line wrap (the specimen's
  own case) — mitigated by per-line phrase targets in reading order (two targets),
  and the builder searches each phrase in the full text in order, failing loudly
  (console + no wrap) if a phrase is absent.
- **Fitting limits:** long swapped phrases must wrap inside the card without widening
  it — fill is % of the phrase span, card width is fixed %; priced as a readability
  risk the swap test's long-phrase case probes at logic level (span present, order kept).
- **Stamp occlusion:** stamp overlaps body text by design (as in t68); it must not
  cover a highlighted phrase — position is config (right-middle, over the unhighlighted
  line area in the specimen layout) and angle/scale are bounded.
- **Render-proof limitation:** no pixel-level verification from this session (T15
  precedent) — logic-level swap test + comparison surface; printed, not hidden.
- **Convergent freeze / intensity collapse:** not applicable (no particle field);
  priced as N/A with reason rather than silently skipped.

## §3 — Execute (record)
- `segment.mp4` — cut with the charged command (`ffmpeg -ss 64.5 -i source.mp4 -t 10
  -vf scale=960:-2 -c:v libx264 -an`): ffprobe-verified h264, 960×540, **10.000 s**,
  1,516,714 B. Labeled ORIGINAL in comparison.html only.
- `recreation.html` (12,536 B) — self-contained DOM build per Plan: CONFIG at top
  (all keys from the parameter table), timeline computed from CONFIG, highlights as
  expanding fill spans behind the phrase text in reading order, stamp press =
  accelerating scale fall 2.6→1 with impact dip + decaying card shake, verdict hold,
  loop. URL overrides + postMessage play/pause/restart hooks + RECREATION_TEST surface.
  No external assets, no specimen media, no captions (card text IS the technique's subject).
- `comparison.html` (4,522 B) — labels exactly "ORIGINAL — P1 @ 1:05–1:14" /
  "RECREATION — T12, parameterized"; one shared control set (Play/Pause · Restart ·
  Swap test) driving the video element and the recreation clock together; panels
  flex-wrap to stacked on phone widths; buttons ≥48 px; choreography arithmetic and
  the swap values printed on the face.

## §5 — Verify, own legs (recorded BEFORE the wave)
1. **Swap test: PASS (logic level, node stubbed-DOM harness running the recreation's
   real script).** Default run: highlight spans ["Principal Slopcore","Architect"] in
   order, missing=[], timeline starts [800, 1840], stampAt 3010, total 5800; state
   probes — mid-sweep fills [0.5, 0], both fills 1 before stamp opacity 0, stamp
   mid-press scale 2.2 at progress 0.5, end-hold opacity 1 / scale 1; marker #ffd81a;
   stamp "RECEIPT"/#c1272d. Swapped run (different phrases + changed sweep timing +
   changed marker color, per charge): lines "Alpha beta gamma delta" / "Second line
   here", highlights ["beta gamma","Second"], sweepMs 300, markerColor #00e5ff,
   stampText VERIFIED, stampColor #00aa55 → spans in order, timeline starts
   [800, 1520], stampAt 2370, mid-sweep fills [0.5, 0], marker + stamp applied.
   **17/17 checks PASS.** LIMIT (printed, T15 precedent): pixel-level render not
   exercisable from this session (no browser binary); comparison page is the render surface.
2. **Construction purity: PASS.** grep of recreation.html for
   `segment\.mp4|source\.mp4|t68|\.jpg|\.png|<video|<img|http://|https://` = **0 hits**.
   Asset inventory: recreation.html itself only — zero external assets; the stamp is
   type + CSS borders, the avatar is a CSS circle with a config initial, all icons are
   text glyphs. Specimen media appears only as comparison.html's labeled ORIGINAL video.
3. **Syntax: PASS.** Extracted inline script passes `node --check`.
4. **Comparison check: PASS by markup inspection** — labels verbatim as charged,
   shared controls wired to both sides, durations stated on the face (segment 10.0 s;
   recreation cycle ≈5.8 s with the difference explained on the face).
5. **Codex wave:** fired after legs 1–4 — returns in `codex/`, verdict in `scores.md`.
