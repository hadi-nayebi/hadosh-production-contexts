# JOB LENS FULL-FILM BUILD — soa-01-lens, L1–L21 (2026-10-28)

## HEADLINE — pre-decided vs improvised accounting

- **Pre-decided: everything that moves.** The film was baked from the closed
  Director's Score (`soa01-lens/specimen/directors-score-L01-L21.md` + baked
  JSON): 279 elements across 8 scenes + the reticle frame scene, every element
  named for its score row, every motion a scored track (paths, easings,
  velocities, holds). **Improvised (realized-but-undecided motion): 0.**
- **Realization corrections: 10, all measured, none silent** — listed below.
  Each is a place where the score's numbers met a measured physical fact
  (a painting's aspect, a line's true width in the locked face, an opaque
  source file) and the staging yielded to the measurement (A-8 class), with
  the score's layout, seats, and proportions preserved.
- **Two of the corrections expose score-level inconsistencies** the parent
  should route back to the score: T-L2's cap 64 and the kept stack's cap 72
  are physically wider than the 1080 frame in the locked face (measured
  1,438/1,357 px and 1,248/1,230 px). The build reduced the caps uniformly;
  if the exact cap numbers are to remain law, the score must change face,
  size, or line breaks.

## DELIVERABLES

- Film: `soa01-lens/specimen/full-film-L01-L21.mp4` — 1080×1920@30,
  83.328 s, 2,500 frames.
- Filmstrip (3 s spacing, 28 frames):
  `soa01-lens/specimen/full-film-L01-L21-filmstrip.png`.
- Build machinery: `soa01-lens/specimen/full-film/` (`score_lens.py` baker,
  `render_lens.py` renderer, `assemble_audio.py`, `asr_measure.py`,
  `gate_framediff.py`, `assets/` + `assets-record.json`, `work/` records).

## DRIFT GATE (verified before rendering)

- Drift log read first: the only DRIFT naming soa-01 is the #108 type-ration
  incident, corrected in-window at score level (ration retired; closure
  audit UNDECIDED = 0). No unresolved DRIFT blocked this build.
- Score MD + JSON on disk; closure audit UNDECIDED = 0 / OWNER = 0
  (`jobs/2026-10-28-lens-score.md`); verification plan (six gates +
  sound-off contract) in score §9. Gate passed.

## AUDIO

- Assembled from the Lens tree's phase-4 performed takes with the R-5 L10
  take substituted (level-matched −0.55 dB to the superseded stem's
  −15.90 LUFS; bed patch looped from the programme's own bed-only gaps,
  0.30 s loop crossfades; joins 0.010 s splices). L11+ shift +1.651 s.
  Total 83.328 s.
- Master: one deterministic gain (+0.39 dB, TP-ceiling-bound) →
  −14.33 LUFS / −1.10 dBTP on the WAV.
- ASR gate: Whisper-measured anchors for all 21 lines, **every line
  fit ≥ 0.85** (range 0.857–1.0, digit-aware normalization); no
  re-synthesis needed. The word "lives" appears in no synthesis text.
  Bed continuous throughout (no gates in the bed).

## REALIZATION CORRECTIONS (measured, in the order found)

1. **Case staging (A-8).** The shared Case painting's aspect (0.4995)
   cannot fill the scored 620×760 box; staged w 470 (h ≈ 941) centred
   (540,1010). Glass interior measured (401,628)–(669,1353); chips
   re-seated inside it: Cards (455,905) w105 · Book (545,1045) w115 ·
   Folder (460,1180) w100. Case label re-based to (333,515).
2. **Kept-stack cap 72 → 55, uniform.** At cap 72 in Noto Serif Display
   Bold, "Understand the harness." measures 1,248 px and "Build your
   own harness." 1,230 px — wider than the frame. Uniform cap 55:
   lines measure 939 / 924 / 658 px, centred at x = 540, seats within
   10 px of scored (620 / 745 / 870). Stack proportions preserved.
3. **T-L2 address cap 64 → 42, uniform.** At cap 64 the two lines
   measure 1,438 / 1,357 px (Gate-5 phone frame caught the overflow).
   Uniform cap 42 → widest line 944 px; scored seats (540,560)/(540,660)
   unchanged. A systematic sweep of every text element in the bake
   confirmed T-L2 was the only overflow.
4. **T-L12 group centres re-laid by measurement.** The first bake
   hand-placed the five group centres (395/640; 380/540/712) and the
   groups overlapped by 113–125 px (caught on the filmstrip). Re-laid
   from measured widths, each line centred at x = 540 as scored:
   line 1 spans 164–916, line 2 spans 104–976.
5. **Opaque exhibit sources keyed/cropped.** work-plan.png and
   work-tool.png arrived fully opaque on black (visible black boxes at
   Gate 1): luminance-keyed with the cast key (black 10, soft 26, ^0.9)
   + trim. The two paper paintings are frame-filling close-ups, not
   cutouts: centre-cropped to pure-paper swatches for the w84 exhibits
   (no keying). All recorded in `assets-record.json`.
6. **Renderer/baker font alignment.** The renderer initially drew
   DejaVu Serif Bold while the baker measures with the locked faces
   (Noto Serif Display Bold / Noto Sans Mono Regular) — a +10% width
   error that overflowed the kept stack. Renderer aligned to the
   locked faces; whole-string drawing (kerning-correct) for
   unspaced type.
7. **Text vertical bias compensated.** PIL draws from the ascender
   box; cap centres sat +0.21 em below nominal. The drawer's baseline
   offset was corrected and verified by measurement (kept stack
   centres within 10 px of scored seats).
8. **Usage-stream dash phase stagger** (i×37 px per column): the 12
   limb streams share spawn groups; unstaggered they read as a dotted
   grid. Phase is a realization detail the score leaves open.
9. **Cast realizations from the shared set.** The Note node is the
   folder painting (established Academy realization). Thinker forms:
   bust (Profile) + master (Address/Working/Resolve/Worn) — the shared
   set holds exactly two paintings, so Resolve's crossfades are no-ops
   by construction. Door glow seated from the owner dome's measured
   door centroid (0.379, 0.637) → scene (705,1141). Dome glass scored
   α .18 realized as a second pass of the dome painting at α .18.
10. **Path geometry.** Rented Return = two bandpaths (out + reversed
    return, carrying no point). Retained Current path measures ≈422 px
    vs the scored ≈480 (chord geometry of the staged ellipse); its
    window and speed profile are as scored. L-F pooling node brights
    (Book 1.35 · Cards 1.20 · Folder 1.20) are carried on the node
    bright tracks keyed to the pool arrival times.

## GATES (score §9, measured on the final MP4)

1. **Staging / per-scene stills — viewed.** 3.0 (count) · 7.0 (address)
   · 12.0 (case) · 28.0 (mechanism) · 36.0 (transect) · 44.7 (swap
   mid-transit) · 47.0 (contrast) · 52.0 (replay) · 59.0 / 62.5
   (accumulation) · 70.0 (open field) · 76.0 (reveal) · 82.0 (close).
   Defects found and fixed at this gate: black-box exhibits (#5),
   kept-stack overflow (#2).
2. **Composition / never-cross.** Systematic text sweep over all 64
   text elements (ink box vs frame): only T-L2 overflowed → fixed
   (#3). L12 overlap found on the filmstrip → fixed (#4). Watched
   proximities hold: type stack vs web top, case label vs glass line,
   Watcher vs frame edge.
3. **Frame-difference (0.5 s sampling, 166 intervals).** **No
   zero-motion run ≥ 2.0 s.** Median diff 0.576. Smallest diffs are
   single intervals at scored slow/hold beats (L7 gap 26.0, L-G field
   67–74, tail stack 79.5–81.5). Observed: the opening 0–1.5 s is
   near-static (diff 0.003, three intervals — under the 2.0 s gate),
   carried by the scored speckle shimmer; narration enters at 1.2 s,
   first streams at 2.04 s.
4. **Movement audit.** Every rendered motion traces to a score row
   (279 elements, named per row; no orphan elements). Spot velocities,
   measured from the bake, all within ±10% of the score's figures:
   - Outflow head: 715 px over 24.33–25.30 → **740 px/s** (scored ≈700, +5.7%)
   - Swap cores: 452 px path over 0.50 s → **904 px/s** (scored ≈880, +2.7%)
   - Pull-back corner (r = 1000 from pivot): 150.0 px over 3.06 s →
     **49.0 px/s** (scored ≈49, exact). The pull window maps the
     score's 72.97–76.03 by the L19 shift → 74.62–77.68; the dissolve
     return runs 77.68–78.58 as scored.
5. **Phone-size 390×693.** Address (post-fix: full line inside frame,
   legible) · case verdict · transect · **reveal mid-drift at 76.2:
   already reads as a picture on glass** (frame border in, header
   legible, dome+web resolved inside) · kept stack tail (all three
   lines inside the frame, measured 71–1010 / 80–1004 / 212–870 at
   full size). Subjects whole in all five.
6. **Loudness / format on the delivered file.** 1080×1920@30,
   83.328 s; **−14.34 LUFS integrated, −1.05 dBTP** (AAC stage moved
   TP from −1.10 to −1.05; still ≤ −1). PASS.
- **Sound-off contract (§7), scene by scene.** L-A: the count over the
  lit planet, then the address — read ✓. L-B: everything inside
  someone else's case; the closing question hangs over the exhibits ✓.
  L-C: the pour unshaped, then the same stream combed once the layer
  gathers — HARNESS named over the ring ✓. L-D: two homes, one sealed
  one open; the emblems exchange on "different"; "Same intelligence. /
  Two different homes." ✓. L-E: the mechanism replays above the two
  homes; the rented pour returns, the retained current stays and pools ✓.
  L-F: SPECIMEN A — SPARSE becomes SPECIMEN B — ACCUMULATED · ASSET as
  the web gains nodes inside the owned dome ✓. L-G: the capability log
  (› OPEN › READ › CHANGE) over the working web ✓. L-H: the world
  pulls back into the Observatory Glass, the Watcher sits at the
  screen's edge, the screen dissolves and the recommendation stays —
  UNDERSTAND (re-seated) / BUILD / KEEP AN EYE held over the final
  specimen, glyph signature, HADOSH ACADEMY watermark, no spoken
  plug (Earth One rule) ✓.

## ASSETS

10 Lens-only assets produced to score spec in the locked engraved
family and QA'd (palette/geometry measured, contact sheet viewed):
Earth (disc Ø1140 centred on 1200², circular mask, speckle set
extracted), Watcher (pure silhouette, no face/species/gesture, single
dark value), Observatory Glass (frame inset 28, r 120, α ≤ .10, no
HUD markings), platform dome (blue glass, NO door), owner dome (green
glass, door lower-left, warm spill), interior plate, dial (72 ticks,
Ø880), glyph (gold ring Ø200), reticle (inset 36), cold-graded Case
(scored grade values exactly: saturation ×0.55, brightness ×0.92);
code-drawn: grid, stars (90 pts, seeded). Shared cast copied per the
Lens CAST manifest; band textures A/B/C as stream-shaped crops.
Full record: `full-film/assets-record.json` +
`full-film/cast-contact-sheet.png`.

## NOTES FOR THE PARENT

- No pushes made; nothing delivered to Hadi. The film is ready for
  the parent's own viewing and the delivery decision.
- The two score-level type inconsistencies (T-L2 cap 64, kept-stack
  cap 72 vs the locked face) are flagged in the headline — the score
  owner's call whether to amend the score or accept the build's
  uniform reductions as the standing realization.
- The Book node of the close-field web sits at the ring's top slot
  directly above the Thinker (scored geometry: web centred (540,1300)
  on the Thinker) — at still distance it can read as a hat; in motion
  with the ring's traffic it reads as the web. Named here so the
  parent's eye can judge it in the render rather than discover it.
