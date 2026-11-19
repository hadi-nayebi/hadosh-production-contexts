# T100 — Pencil-check task sting · build record (attempt 1, Cycle 016 Wave 14)

## Observe gate-out
- **Consumer:** OPENING sting (task-contract sting before teaching; openings) — per wave RUN.md §1.
- **Schedule basis: `t=0 allocation`** (Amendment A7) — the sting lifecycle is re-based to build zero inside a 14 s cycle; no phase time is claimed as measured from the segment.
- **TEXTLESS:** T100 carries NO words — a drawn-mark device (§2b A-5/A-6/A-7). The §5.1 words-minimum swap is inapplicable by the technique's nature; the swap substitutes burst.count + field.color + tick.drawMs.
- **Guard firings at Observe/Plan:** codex-observe → **CONFIRMED-WITH-GAPS** (`codex/codex-observe.md`); codex-plan-review → **REVISE** (`codex/codex-plan-review.md`), dispositions below.

## codex-observe gaps — dispositions
1. *Evidence-frame conflict (cited frame shows arrow/confetti, not pencil/checkbox)* — CLOSED by firsthand segment-frame extraction (table below): the pencil/checkbox sub-beat EXISTS at ~3.5 s and the cited 5.0 s frame is the later green arrow/burst beat. Both devices are in the window; the catalogue's frame citation is mislabeled, its mechanics text is partly right.
2. *T08 sibling score unbound in the fed packet* — CARRIED: T08's 88.6/min 78 is used only as the RUN's named sibling lesson (one beat, one device, then hold), never as a priced baseline in this record's forecast.
3. *Segment facts unverified from packet* — CLOSED: source ffprobe 80.994 s (builder re-probed); segment cut and probed at 14.000 s (below).

## codex-plan-review — dispositions (REVISE, all points disposed before building)
1. *Burst ownership/lifetime* — APPLIED: burst marks are independently allocated per cycle, rebuilt at every loop boundary (`buildBurst()`), live only during the burst phase; hold and cycle boundaries carry no remnants (harness-verified: hold burst opacity 0).
2. *Intensity separation / contrast* — APPLIED + CURED: the Plan's tick/burst green `#22e04a` measures **4.06:1** on the filed field `#4148c0`, below Owner Cure 1's 4.5:1. The filed default is therefore lightened to **`#3df063` = 4.75:1** on `#4148c0` (and 7.70:1 on the swap field `#173f35`); checkbox white on indigo = **7.21:1**. This is a recorded deviation from the §2 table's hex, made to satisfy the binding Cure 1 in §2b charge 3 ("builder measures the filed palette pair"). Pencil `#2b2b2b` on indigo = 1.96:1 — recorded as a known gap: the pencil is a large silhouette mark present only during ENTER, and its color is Plan-prescribed; the lenses may price it.
3. *Cycle-duration invariant under the drawMs swap* — APPLIED: fixed-total invariant. `cycleMs: 14000` is a CONFIG key; the hold is the residual (cycleMs − enterMs − drawMs − burstMs). Default residual = 10900 = `endHoldMs` ✓. Under the swap (drawMs 1600) the residual re-derives to 10200 and the cycle stays exactly 14000 ms.
4. *Predicted minimum priced* — APPLIED: predicted minimum lens = **motion, ~76**. Forecast: motion 76 · timing 82 · purity 97 · reusability 84 · readability 88 (textless; marks-only legibility). Basis: the build is an intentional extraction (below) whose entry direction, pencil color, tick color and box persistence deviate from the measured frames — motion owns those; timing is allocation-labeled, not measured.
5. *Scope / extraction honesty* — APPLIED: arrows, cursor and timeline are excluded (T101's and later devices). What the build preserves from the measured window: indigo field · a pencil entering diagonally and drawing a check inside a white checkbox · a burst/arrow punctuation family after the check (abstracted to radial burst marks) · then a held checked state. Deviations are listed under ALLOCATION below, never priced as measured.

## Segment facts
- Cut: source (80.994 s ffprobe) 0–14 s → `segment.mp4`, re-encoded H.264/AAC, faststart. ffprobe duration **14.000 s**, size 1,158,494 bytes, sha256 `08f59439b6ce9c27632fbde352401bfdc47360bc4c702d65cb7123ab6b8581b8`.

## Measured frame table (0.5 s steps across 3–7 s, viewed firsthand by the builder)
| t (s) | What the frame actually shows | Device |
|---|---|---|
| 3.0 | Teal wipe shape + red triangle + white stars on indigo (previous scene exiting) | neither |
| 3.5 | **Large yellow pencil, diagonal from TOP-RIGHT, tip inside a white square checkbox at centre; small cyan tick beginning inside the box** | **pencil + checkbox PROVEN** |
| 4.0 | **Pencil (top-right) drawing a cyan CURVED check stroke descending left; checkbox no longer visible** | **pencil PROVEN, box gone** |
| 4.5 | Red distressed curved arrow + red confetti rectangles on indigo; no pencil/box | arrow/burst |
| 5.0 | Green distressed curved arrow + green confetti on indigo (the catalogue's cited "pencil-checkbox" frame) | arrow/burst |
| 5.5 | White cursor arrow alone on indigo | neither (cursor beat) |
| 6.0 | Purple-pink gradient field + white cursor | neither (transition out) |
| 6.5 | Timeline / "QUICK TIPS" scene | T101 device begins |

**Settled mechanics:** pencil/checkbox occupies only ≈3.5–4.0 s of the 3–7 s window; the arrow/burst beats (≈4.5–5.0 s, red then green) are separate punctuation that follows the pencil's exit. The digest's "pencil enters from top-left" is contradicted (top-right measured); its tick is cyan and curved (measured), not green/straight.

## ALLOCATION (build's own, Plan-prescribed — never priced as measured)
- `pencil.enterFrom "top-left"` and pencil color `#2b2b2b` (measured: top-right entry, yellow pencil) — governing §2/§2b CONFIG values, kept and labeled.
- Tick color green family (measured tick: cyan; green matches the measured 5.0 s arrow beat) and a straight check path inside the box (measured: curved, drawn by the pencil, box absent during most of the draw).
- Checkbox persists through draw/burst/hold (measured: visible only ≈3.5 s).
- Burst as radial marks around the box (measured punctuation: scattered confetti + a curved arrow, as separate beats after the pencil exits).
- All phase durations (enter 1400 · draw 900 · burst 800 · hold residual 10900) are `t=0 allocation`.

## Own checks (recorded, not asserted)
- **Swap test (exact §2 values, scratch copy):** field.color `#4148c0`→`#173f35` · burst.count 8→12 · tick.drawMs 900→1600. Node harness result: field fill re-driven to `#173f35` ✓ · burst marks 12, visible mid-burst (opacity 1) ✓ · tick draw slowed (dashoffset remaining 71.875 at the draw midpoint vs 50.0 default) ✓ · hold state clean in both (tick full, burst opacity 0) ✓ · cycle stays 14000 ms (residual hold 10200 under swap) ✓. **Untouched groups (named, §2b A-7):** pencil{color,path}, checkbox{size,stroke,color} — tick path re-drive is proven by the draw itself (dashoffset animates the CONFIG `tick.path`; pencil.path is rendered from CONFIG at build).
- **Purity grep** over recreation.html (patterns `segment\.mp4|source\.mp4|video-digests|ev/|\.jpg|\.png|<video|<img`): **0 hits**.
- **Asset inventory:** recreation.html loads NO external assets — DOM/SVG generated in code only (field, checkbox, tick path, pencil path, JS-generated burst rects). segment.mp4 appears only in comparison.html as the labeled ORIGINAL.
- **Syntax:** inline scripts of recreation.html and comparison.html extracted and `node --check` → OK.
- **Comparison check (logic level):** one control set drives the video and, via postMessage, the recreation's clock (play/pause/restart); labels exact per the wave charge; phone-width stacking via the ≤520 px media query; recreation cycle 14000 ms = segment 14.000 s. **PIXEL-UNVERIFIED** — no browser binary on this seat; the comparison page is the render surface.
- **Phase exclusivity (Owner Cure 2):** phase machine — enter [0,1400) → draw [1400,2300) → burst [2300,3100) → hold [3100,14000); each phase sets the other phases' elements explicitly; no overlap.

## jev-prewave — FIRE-WAVE (return `jev-prewave.md`)
Scores: parameterization 0.86 · purity pre-check 0.95 · own-checks completeness 0.92 · fidelity-plan honesty 0.88; no defect classification sustained. Its two priced deductions were CURED before the wave fired: (1) `pencil.enterFrom` was an inert label — the ENTER phase now reads it (corner signs derived from the string; geom offsets supply magnitude), so the census claim is now literally true; (2) the pencil rested at the tick end during DRAW — it now travels the tick path (`getPointAtLength` on the CONFIG tick path) as the tick draws, matching the measured pencil-draws-the-check mechanic. After the cures: syntax re-checked OK, swap harness re-run with identical passing numbers, purity grep re-run 0 hits, A6 census updated for the enterFrom site. Lens payloads were regenerated against the cured final build before any lens fired — no interim lens firing exists.

## Interim wave + cure (identical-hash rule)
The five-lens wave first fired on build `40972611…`: motion 62 · timing 78 · purity 100 · reusability 82 · readability 86 — preserved verbatim at `codex/lens-<lens>-interim1.md` (payloads at `codex/payload-<lens>-interim1.txt`), never averaged. Motion priced a real builder defect: ENTER ended at the tick's END point (205,181) while DRAW began at its START (160,198) — a ≈48 px pencil jump between phases. CURE: `geom.pencilTipX/Y` now names the tick START (160,198), so ENTER lands exactly where DRAW begins. Self-verify re-ran on the cured build (syntax OK · swap harness identical passing numbers · purity grep 0 hits) and all five lenses re-fired on the cured final build (`a8c80b2a…`), which is the only set scores.md averages.

## A6 legs
- guard-measured-fit → `fit-table.md` (TEXTLESS: no subject text elements; HIT list empty by scope, printed there).
- guard-config-census → `config-census.md` (HIT list empty after binding easePow + enterFadeGain into CONFIG geom).
