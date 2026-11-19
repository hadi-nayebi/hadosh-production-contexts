# T03 — Live-typed lyric text · scores · Cycle 003 Wave 1 · attempt 1 · 2026-11-14

Five-lens Codex wave (INSTRUCTION §5.4, Amendment A5 form). Returns filed verbatim in `codex/lens-<lens>.md`; instruction files `codex/instr-<lens>.txt`. Each run was separate; no lens saw another.

| Lens | Score | Return |
|---|---|---|
| motion | 83 | codex/lens-motion.md |
| timing | 55 | codex/lens-timing.md |
| purity | 100 | codex/lens-purity.md |
| reusability | 78 | codex/lens-reusability.md |
| readability | 80 | codex/lens-readability.md |

## Arithmetic
- Sum = 83 + 55 + 100 + 78 + 80 = 396
- Average = 396 / 5 = **79.2**
- Minimum = **55** (timing)
- Bar: average ≥85 AND minimum ≥70 → **FAIL** (both terms missed: 79.2 < 85; 55 < 70)
- Verdict: **FAIL** — T03 stays IN PROGRESS; re-attempt routes to the practice job (Amendment A3 division of labour).

## Own checks (before the wave)
- Swap test: PASS — altered words ["Bonjour le monde entier","Hola mundo bonito"], charMs 65→30, linePauseMs 700→250, accent #7ac74f→#ff2fb3; both lines typed fully, totalMs=2160 exactly as hand-computed (logic-level in node; full record in build-record.md).
- Purity grep: `segment.mp4|source.mp4|<video|<img>|.jpg|.png` in recreation.html → 0 hits. Asset inventory: code only.
- Comparison: labels + shared controls + phone stacking verified at source level.

## Priced gap / cures (for the practice-job re-attempt)
- **Timing 55 — primary cure (convergent with motion):** the performance ends at ~8.5 s inside the 14 s specimen window, leaving a long final idle hold; per-char cadence and line pauses are not stretched to the sung phrase lengths. Cure: price per-line durations from the window (e.g. line-level start offsets / slower charMs + longer linePauseMs summing to ~14 s), not a single global cadence.
- **Motion 83 + timing (convergent defect, Amendment A1 rule):** the cursor DOM node is rebuilt every animation frame, so its CSS blink clock restarts and blinking does not read during holds. Cure: persistent cursor element; update only the text node.
- **Reusability 78:** config covers the specimen family, but robust multilingual reuse (combining characters, RTL scripts, very many/long lines) still requires logic changes — slice-by-code-point typing and a max-visible-lines scroll/trim policy are the named cures.
- **Readability 80:** layout shifts as new lines appear and long content can exceed screen height. Cure: reserve final layout (wrapped heights + cursor space) before typing so revealed characters occupy stable positions.
- Gap to bar: average needs +5.8 with timing lifted ≥70; the timing cure alone (55→~80) would add ~+5 to the average, so the freeze risk sits in timing + the cursor cure, not in purity.

## Cross-instrument note
First five-lens wave for this item (no prior T03 attempt; no cross-wave delta). T15's filed average (78.5) was a FOUR-lens instrument — deltas across that boundary are labeled as different instruments per Amendment A5.4 and are not compared here.
Filing note: each Codex return states its own sandbox filesystem tooling failed; the returns were in fact captured verbatim by shell redirect into `codex/lens-<lens>.md` at run time — the BODY-WRITE lines inside the returns describe Codex's attempted in-sandbox writes, and the authoritative filings are the lens-*.md files themselves plus this scores.md.

---

# Attempt 2 — 2026-11-14 (practice Cycle 002 Wave 1)

Five-lens Codex re-score wave (practice INSTRUCTION §5). Returns filed verbatim in `codex/attempt-2/lens-<lens>.md`; instruction files `codex/attempt-2/instr-<lens>.txt`. Each run was separate; no lens saw another, and no payload carried prior scores or targets. Build record: `build-record-attempt2.md` (score-blind). Attempt-1 recreation preserved verbatim at `recreation-attempt-1.html`.

| Lens | Attempt 1 | Attempt 2 | Δ | Return |
|---|---|---|---|---|
| motion | 83 | 92 | +9 | codex/attempt-2/lens-motion.md |
| timing | 55 | 78 | +23 | codex/attempt-2/lens-timing.md |
| purity | 100 | 100 | 0 | codex/attempt-2/lens-purity.md |
| reusability | 78 | 68 | −10 | codex/attempt-2/lens-reusability.md |
| readability | 80 | 78 | −2 | codex/attempt-2/lens-readability.md |

## Arithmetic
- Attempt 2 sum = 92 + 78 + 100 + 68 + 78 = 416
- Attempt 2 average = 416 / 5 = **83.2**
- Signed delta vs prior average 79.2 = **+4.0** (attempt beats the floor; no floor-rule WHY is triggered)
- Attempt 2 minimum = **68** (reusability)
- Bar: average ≥85 AND minimum ≥70 → **FAIL** (83.2 < 85; 68 < 70)
- Verdict: **FAIL** — T03 stays IN PROGRESS.

## Own checks (before the wave)
- Node logic suite (functions extracted verbatim from the built file): 29/29 PASS — per-line checkpoint alignment vs the source checkpoint table (starts 300/4756/9974 ms, ends 3856/9074/13530 ms, each within the table by construction; the table itself is a proportional allocation model — the record carries no vocal anchors, uncertainty ±3 s class, printed in the build record), typing spans 13 530 of 14 000 ms with the final hold exactly the 470 ms window remainder, stateAt determinism, grapheme cases (decomposed accent e + U+0301 = 1 cluster; ZWJ family emoji = 1 cluster; flag pair = 1 cluster; no intermediate state splits a cluster), fallback swap arithmetic (2-line and 6-line sets fit the window). Fallback segmenter (Intl.Segmenter disabled): 3/3 PASS on the same grapheme cases.
- Cursor source census: exactly 1 cursor element creation; 0 innerHTML writes; per-frame updates touch text nodes only.
- Purity grep: `segment.mp4|source.mp4|<video|<img>|.jpg|.png|.mp4` in recreation.html → 0 hits.
- Syntax: extracted script passes `node --check`.
- PIXEL-UNVERIFIED: headless render attempted with /opt/meta-chromium/chrome (private port 9414); launch failed before page load (exit 13, "Hatch WebGL domain policy is required for browser startup"; dumped DOM 0 bytes). Geometry rests on the logic tests and the probe-reservation construction — a named limitation carried in the build record.

## What moved, and the reusability regression (recorded for the next attempt)
- Timing 55→78 and motion 83→92: the bundled timing + persistent-cursor cures landed; timing's return prices the remaining gap as the schedule being an allocation model rather than vocal-anchored evidence (unresolved source timing — the packet carries no timed transcript), not a failed mechanism.
- Reusability 78→68 — regression with priced causes in the return, all verified against the source by the seat: (1) the header comment documents a `?charMs=` override the code never parses — a documentation/code mismatch introduced this attempt; (2) `maxVisibleLines` trims only past lines — future lines' slots (prompt + reserved height) are all displayed from the start, so the policy does not cap the visible window for many-line configs; (3) fallback pause arithmetic has no overflow guard — with many lines, start offsets can run past the window while the typing budget clamps to zero; (4) RTL layout remains unimplemented (deferred in the governing plan; the return prices it as a standing reusability cap, as the plan's WHY scaffold anticipated). These are the head of the next attempt's cure list.
- Readability 80→78: reservation credited for vertical stability, but the return prices word-wrap reflow during reveal (a partially revealed word can jump rows as clusters arrive — reserved height does not fix intra-line reflow) and the probe's approximate cursor space; pixel evidence remains unavailable (PIXEL-UNVERIFIED above).

---

# Attempt 3 — 2026-11-17 (practice Cycle 021 Wave 20)

Five-lens Codex re-score wave (practice INSTRUCTION §5). Authoritative
return set, frozen before averaging: `codex/attempt-3/lens-motion-run2.md` ·
`codex/attempt-3/lens-timing.md` · `codex/attempt-3/lens-purity.md` ·
`codex/attempt-3/lens-reusability.md` · `codex/attempt-3/lens-readability.md`
(firing history, exclusions, and read scopes: `rescore-record-attempt3.md`).
Build record: `build-record-attempt3.md` (score-blind). Final source
sha256 1f182eac11d6afb4a02570526d4b0a26fcd96fdcda08381a298f0d12abff8b96.
Attempt-2 recreation preserved verbatim at `recreation-attempt-2.html`.

| Lens | Attempt 2 | Attempt 3 | Δ | Return |
|---|---|---|---|---|
| motion | 92 | 94 | +2 | codex/attempt-3/lens-motion-run2.md |
| timing | 78 | 82 | +4 | codex/attempt-3/lens-timing.md |
| purity | 100 | 100 | 0 | codex/attempt-3/lens-purity.md |
| reusability | 68 | 78 | +10 | codex/attempt-3/lens-reusability.md |
| readability | 78 | 91 | +13 | codex/attempt-3/lens-readability.md |

## Arithmetic
- Attempt 3 sum = 94 + 82 + 100 + 78 + 91 = 445
- Attempt 3 average = 445 / 5 = **89.0**
- Signed delta vs prior average 83.2 = **+5.8**
- Attempt 3 minimum = **78** (reusability)
- Bar: average ≥85 AND minimum ≥70 → **PASS**
- Verdict: **PASS** — T03 is eligible to leave the pool; the tier move
  is the style-library job's act, handed off with this entry as the
  pointer. No floor-rule WHY is owed (the attempt beats the prior
  average); no plateau call fires.

## Own checks (before the wave)
- Node logic suite (functions extracted verbatim from the built file;
  packet: `own-check-packet-attempt3.txt`): 135/135 PASS — schedule
  validation + containment under the unified contract (17-line case:
  compression engaged, effective pause 206 ms, last end exactly
  13 530 ms; degenerate window; empty content; oversized single line;
  invalid specimen table → fallback + diagnostic), visible-window
  model sweep (specimen progression 1→2→3; no future line displayed;
  prompt visibility exactly at activation), interval-override effect
  mapping (specimen 3 556→7 112 ms at 254 ms; invalid values leave the
  schedule identical), authored schedule (exact use; authored stands
  over the override with the ignore flag recorded), cursor boundary
  model in all four states, span concatenation identity, grapheme
  cases (primary + fallback segmenters 3/3), checkpoint-table
  regression (starts 300/4 756/9 974, ends 3 856/9 074/13 530).
- Legs on the new attempt, before the wave: `fit-table-attempt3.md`
  HITs 0 · `config-census-attempt3.md` HITs 0 (23/23 CONFIG keys
  consumed; literal census fully classified).
- Purity grep: 0 hits. Syntax: `node --check` passes.
- PIXEL-UNVERIFIED: headless render attempted (private port 9417);
  launch failed before page load (exit 13, "Hatch WebGL domain policy
  is required for browser startup"; dumped DOM 0 bytes).

## What moved, and what the returns still price
- Readability 78→91 and reusability 68→78: the span-reveal
  construction (full text laid out once, visibility-only reveal) and
  the window/validation/override/authored constructions landed;
  attribution across the five build stages files as BUNDLED (stage
  checkpoints in the build record).
- Timing 78→82: the lens independently re-derived the allocation
  (127 ms per cluster, first reveal 427 ms, exact window fit); the
  remaining cap is the standing evidence limit — the packet carries
  no vocal anchors, so synchronization is unverified, not mismatched.
- Motion 92→94: residuals priced — the cursor's empty-line anchor
  excludes the prompt's right margin (small jump at first reveal),
  and authored-schedule validation checks successive starts rather
  than preceding ends (an overlapping authored schedule could pass;
  not present in the configured playback).
- Reusability's remaining priced items: RTL layout still
  unimplemented (deferred in writing in the governing plan; its
  expiry condition was a reusability-stuck miss, which did not
  occur); an extreme many-line allocation (20,000 one-cluster lines)
  can drive the residual duration negative; authored validation
  accepts negative starts; no bounded height/resource policy for very
  long content; policy literals (validation defaults/bounds,
  pause-share cap, blink shape) remain outside CONFIG as classified
  policy constants. These head any future attempt's cure list if the
  item is ever re-opened.
