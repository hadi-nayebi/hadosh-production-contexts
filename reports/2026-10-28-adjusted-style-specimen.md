# JOB ADJUSTED-STYLE SPECIMEN — report (2026-10-28)

**Deliverable:** one full-sample specimen of a story-fitted image style
for the soa-01 scenes film, built on the definition stretch (L7–L9).
**Status:** design + 5 adjusted scenes + assembled specimen clip, all
verified. Nothing pushed, nothing delivered to Hadi — the candidate
style awaits his judgment. It does **not** replace scene-plan §2.

## 1. Design reasoning, in brief

The shipped style (moody navy/gold workshop world) was inherited from
the 85-scoring v2's palette — consistent but underived for THIS story
(full audit in `soa01-scenes/style-reasoning.md`). The adjusted design
was written in two rounds:

- **v1 (information-keeping):** motifs from the story's own subject —
  letters as material, index/file cards, directory trees, blueprint
  grids, punch-card patterns — on the same ink-navy/gold/cream base.
- **v2 (canon grounding, main-agent steering ~15:25 ET):** the centre
  of gravity moved to the Academy's OWN image grammar, which the v1
  round under-weighted: the **digital cortex** (canon.md §3–§5; cortex
  frames board, accepted in direction 2026-10-27). The layer's
  portrait in canon is a **faceless thinker** (silhouette, flat cap,
  never a face) wearing a **growing luminous web whose nodes are
  files** — folders, clipped note stacks, cards — with transient
  connection lines and light travelling node to node; the model's
  brass engine pours light in at the web's edge (board line: *"If the
  model is the soul of the agent, the harness is its body"*).
  Information-keeping motifs and letters-as-material remain, demoted
  to the web's substance and field. Every rule (W1–W7) is traced to
  canon or story in the spec section of `style-reasoning.md`.

**Spec of record:** `soa01-scenes/style-reasoning.md`, section
"Adjusted style spec — CANDIDATE (2026-10-28…)" + "Canon grounding"
subsection carrying the governing **STYLE BLOCK v2** (exact string,
used verbatim in all five final prompts; palette/framing/negative
space unchanged from §2 so the candidate is judged on motif alone).

**Canon-study note:** the parallel canon + music-video digest had
**not** landed in `soa01-scenes/` when this job finished; the design
rests on canon.md + the cortex board + hero reference, per the
steering's stated fallback.

## 2. Scenes — definition stretch (S11–S15), acceptance

Scope = the scene-plan rows for L7 (S11), L8 (S12, S13, S14), L9 (S15).
Both rounds generated at 1152×2048, resized to the film canvas
1080×1920. Measured check = ink share (plan threshold ≥ 0.55) +
thirds luminance (dark top/bottom for the word layer), plus my own
eyes at full size (one subject, middle band, no legible prose, marks
never letterforms, no visible face).

**Final set (v2, cortex-web block)** — `work/adjusted-style/S11–S15.png`:

| Scene | Beat (unchanged from scored rows) | Ink | Top/Mid/Bot lum | Eyes verdict |
|---|---|---|---|---|
| S11 | L7 — the model supplies the intelligence | 0.577 | .071/.233/.133 | PASS — the board's brass engine orb pouring light into a rising file-node web over glowing punch-card plates; catalogue field; faceless thinker standing by, face black |
| S12 | L8 — your words becoming material | 0.827 | .046/.217/.040 | PASS — thinker at the keyboard; loose glyphs (letters as material, no words) streaming into a young web of file-nodes; face featureless |
| S13 | L8 — the three sources | 0.723 | .062/.162/.149 | PASS — blank clipped cards, cards corrected with red marks ONLY, brass-dial folder, each trailing light into the forming web |
| S14 | L8 — distilled (sharp-fade joint) | 0.710 | .062/.277/.063 | PASS — the distilled layer as a formed cortex web of file-nodes over catalogue drawers, faint blueprint grid |
| S15 | L9 — two places | 0.740 | .050/.245/.064 | PASS — the thinker wearing the web, standing between the corporate-tower doorway and the warm home doorway (canon claim 6 in one frame) |

Regenerations used in the final round: **0 of 5** (all passed first
attempt). Contact sheet: `work/adjusted-style/contact-sheet-adjusted-v2.png`.

**v1 set (preserved as design attempts):** `work/adjusted-style/S11–S15-v1.png`
+ `contact-sheet-adjusted.png` + `adjusted-qa.json` — all five passed
the same measured checks (ink 0.71–0.80) and eyes (subjects read
sound-off; one note: S13 v1's centre card carries a soft non-Latin
squiggle — glyph texture, no legible words). Superseded by the v2
canon-grounding revision before assembly, not by failure.

## 3. Specimen clip — assembled

The enriched word-layer revision (JOB WORD-LAYER ENRICHMENT) was on
disk at assembly time, so the clip was assembled per brief §3:

- **Path:** `soa01-scenes/work/adjusted-style/specimen-clip.mp4`
  (14.059 s, 1080×1920@30, video + audio).
- **Span:** film time 21.522 → 35.581 s — the full definition stretch:
  adjusted S11–S15 on the film's exact switch anchors (S12 @23.756,
  S13 @27.22, S14 @30.12 sharp 0.25 s, S15 @33.657; fades as scored).
- **Word events in enriched forms** (renderer = the build's own
  `render_v5.py` conventions, adapted in
  `work/adjusted-style/render_clip.py`): **E8 "the HARNESS"** — SWELL
  in the MANTRA face over S13→S14, HOLD to line end; **E7 "DISTILLED"**
  — calm RISE with the enrichment revision's corrected exit (32.324 s;
  in the shipped build it never appeared), scrim fired by the plan's
  own probe over the brighter adjusted S14 (brightFrac 0.233);
  **E9 "TWO PLACES"** — TRAVERSE in the EXPRESSIVE face into Z-TC over
  S15. L7 carries no event (foreclosed, as scored).
- **Audio:** the film's master (`work/v4-master.wav`) sliced to the
  same span — narration + bed exactly as in the film.
- **Frame-verified** (`work/adjusted-style/clip-check-sheet.png`):
  crossfade into S12 mid-blend; E8 seated and legible over S13; E8 +
  E7 co-resident and legible over S14; E9 seated over S15.

## 4. Files

- Spec: `soa01-scenes/style-reasoning.md` (candidate section + canon grounding + STYLE BLOCK v2 + rule→source trace)
- Final scenes: `soa01-scenes/work/adjusted-style/S11.png … S15.png`; QA `adjusted-qa-v2.json`; sheet `contact-sheet-adjusted-v2.png`
- Clip: `soa01-scenes/work/adjusted-style/specimen-clip.mp4`; renderer `render_clip.py`; audio slice `clip-audio.wav`; check sheet `clip-check-sheet.png`
- v1 attempts: `S11–S15-v1.png`, `contact-sheet-adjusted.png`, `adjusted-qa.json` (same folder)
