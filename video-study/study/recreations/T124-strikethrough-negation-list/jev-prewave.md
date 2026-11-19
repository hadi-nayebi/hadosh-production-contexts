# JEV-PREWAVE — T124 Strikethrough Negation List
Cycle 020 · Wave 17 · Attempt 1

**VERDICT: FIRE-WAVE**

**Classification:** FIRE-WAVE — no HOLD taxonomy applies
**Primary rejection (if HOLD):** none

## Dimension scores

1. **PARAMETERIZATION: 0.95**
2. **PURITY PRE-CHECK: 0.95**
3. **OWN-CHECKS COMPLETENESS: 0.90**
4. **TECHNIQUE FIDELITY PLAN: 0.90**

No dimension < 0.50. No ASSERTED-CHECKS finding.

## Priced findings

### 1. PARAMETERIZATION — 0.95

Genuinely CONFIG-driven, not hard-coded with a config costume.

`recreation.html` CONFIG names all content, timing, geometry, type and palette fields: `headline` / `flipHeadline` spans, `tasks`, `atMs: [5000, 7000, 10000]`, `headlineAtMs: 4000`, `strikeDelayMs: 800`, `strikeMs: 700`, `flipAtMs: 11500`, `cycleMs: 14000`, `enterMs: 350`, `flipFadeMs: 400`, `card {w, h, padX, gap, radius}`, `strike {thicknessPx, overshootPx, yFracOfLine}`, `strikeColor`, `stage {w, h}`, `grid.cellPx`, `layout`, `type`, `palette`.

`config-census.md` (v3.1 leg) resolves every key, including `atMs[]` array members individually, to an application site in `stateAt` / `layoutModel` / `build()`, with **HIT list EMPTY** and no CSS variables. Literals outside CONFIG are classified and priced: page/error chrome (`#070a1a`, `#fff` / `#a00`, `12px monospace`), the `1px` grid hairline unit, and the `CHAR_W` / ink-ratio measurement model — structural, not subject-shaping. No durations or stage geometry outside CONFIG are claimed, and inspection of the construction sections confirms schedule and geometry read from CONFIG only, with `?cfg=` override via `resolveConfig`.

The former `cardMs: 2600` is not silently dropped: build-record disposition 4 names it as superseded by the §2b per-card `atMs` anchors. That is a named supersession, not HARDCODED-CONFIG.

Minor deduction only for the measurement-model constants living outside CONFIG — lawfully classified as structural in the census, as they measure ink rather than shape the piece.

### 2. PURITY PRE-CHECK — 0.95

Construction route is generation from parameters, with no tracing / embedding step hiding in the prose.

Build is described and coded as: DOM construction from CONFIG, stage ground as CSS gradients from `palette` / `grid.cellPx`, cards mounted from `tasks`, strike as a `div` rule inside a text-only wrapper whose endpoints derive from `layoutModel` — `strikeFullW = inkW + 2 × overshootPx`, `strikeX = textX − overshootPx`, vertical centre at `lineH × yFracOfLine 0.54`. No traced coordinates, no embedded frame, no external asset load in `recreation.html`.

Purity grep recorded in the build record over `recreation.html` for `segment\.mp4|source\.mp4|<video|<img|url\(|l2_pKB1EbMQ|t[0-9]+\.jpg` = **0 hits**, with asset inventory stating no `src`/`href` loads. `comparison.html` legitimately referencing `segment.mp4` + `recreation.html` is correctly excluded from the purity grep. No TRACING-STEP finding.

### 3. OWN-CHECKS COMPLETENESS — 0.90

Mechanical guards' results are recorded with exact values, not asserted. This is not ASSERTED-CHECKS.

- **(1) Purity grep:** pattern set and 0-hit result recorded — see Dimension 2.
- **(2) Swap test, exact values:** words — task 1 `"Arrange the images"` → `"Sync the audio clips"`, re-measured ink 156.4 px against 222 px inner width, strike full width re-derives to 162.4 px; timing — `strikeMs 700 → 300`, `stateAt`: card 1 `strikeP = 0.50` at strike start +150 ms, mode struck at +300 ms; palette — `blue "#3b82f6" → "#ffd23c"`, headline operative span recolours while `strikeColor` stays `"#3b82f6"` and `cardEdge` stays `"#3b82f6"`, both named as separate CONFIG keys by §2b design. Result recorded: **PASS** — re-derives from CONFIG alone on all three legs.
- **(3) Syntax + determinism:** `node --check` on both inline scripts recorded clean, plus schedule harness assertions with numbers: `enterMs < strikeDelayMs` ✓ · strike 3 completes exactly at `flipAtMs` (10000 + 800 + 700 = 11500) ✓ · all cards struck and visible at t=11499 (card 3 `strikeP = 0.999`) ✓ · list opacity 0 by t=11900 ✓ · headline flips at exactly 11500 ✓ · `stateAt(14000).u = 0`.
- **(5) Segment binding:** ffprobe facts recorded — source 638.494 s; segment 308–322 s, **14.000 s**, 1920×1012, h264 + aac, 1317878 bytes; 56 frames at 0.25 s steps with a measured beat table.
- **(6) Measured-fit leg:** `fit-table.md` filed pre-wave — headline 271.2 px, flip headline 285.5 px, card inks 143.7 / 139.3 / 202.1 px, swap row 156.4 px, strike-alignment rows (full widths 149.7 / 145.3 / 208.1 px, strikeY 80.3 / 124.3 / 168.3 px), hierarchy ratio 1.27:1, **HIT list EMPTY**.
- **(7) Config-census leg:** `config-census.md` v3.1 filed pre-wave, **HIT list EMPTY**.

Deduction: comparison and fit legs are explicitly LOGIC-level, PIXEL-UNVERIFIED (no browser binary in this seat). That limitation is disclosed in both records rather than hidden, so it prices the wave's visual lenses, not this pre-wave completeness score to HOLD.

### 4. TECHNIQUE FIDELITY PLAN — 0.90

The record states which packet mechanics the build implements and which it deliberately defers. No SILENT-DEFERRAL finding.

Implemented, per packet T124 (P6 T12, ≈05:08–05:19, ev/t314.jpg) and digest narration *"You don't need to manually arrange the images, create animations, or edit anything on a timeline"*: headline under the T122 grammar — `"You don't need to manually…"` with blue on `"don't"` landing at `headlineAtMs`; task cards accumulating vertically and staying; blue strike rule drawing left→right across each card's text item by item, selling automation by deleting the viewer's to-do list; headline flip at `flipAtMs` to `"Claude handles all of that"` with the operative span in a white chip; list clearing over `flipFadeMs`.

Wording priced, not fudged: card 3 carries the on-screen card text `"Add anything on a timeline"` (frames seg-033 / seg-037, viewed firsthand), distinct from the digest's narration wording — different channels, recorded separately in codex-observe disposition 1.

Deferrals / exclusions are all named: (a) the post-flip Claude / plugin tile scene is out of scope under §8, with the deviation register stating the segment's last ~3.5 s has no recreation counterpart by design; (b) `cardMs` supersession — see Dimension 1; (c) timing reconciliation is carried named — the builder's 0.25 s census places card 3 and the flip up to ~1.5 s earlier than the §2b anchors, the §2b anchors stand as the Plan of record per plan-review disposition 5, and the refinement is filed as evidence for the timing lens and Condense/practice to price, not silently substituted mid-Execute.

Watch items carried on the face, not hidden: card ink 11.25 px vs the ~11 px legibility floor (margin 0.25 px, printed as a watch in `fit-table.md`), and the anchor-vs-census timing delta above. Both are scorable questions for the wave, not pre-wave blocks, because both are named in the paperwork.

## Disposition

Advisory verdict: **FIRE-WAVE.** The paperwork shows a recreation ready to be scored — CONFIG genuinely drives content, timing, geometry and palette with an empty census HIT list; construction is parametric generation with a 0-hit purity grep and no tracing step; own-checks are recorded with exact swap values, grep pattern, `node --check` result and numeric harness assertions, backed by filed measured-fit and config-census legs and ffprobe segment binding; and the fidelity plan implements the headline, the three struck tasks, the strike draw, the flip and the clear, with its only exclusions (tile scene, `cardMs`, timing-anchor reconciliation) named in the record.

The wave should price, in its own lenses, the two disclosed risks this gate does not cure: the ~1.5 s §2b-anchor vs 0.25 s-census timing delta on card 3 / flip, and the 0.25 px card-ink legibility margin. Neither is a pre-wave HOLD ground — a deferral named is lawful, and a measured watch is not a silent defect.
