# JOB WORD-LAYER ENRICHMENT — report (2026-10-28)

**Result: the soa-01 scenes film's word layer is rebuilt under the widened
palette at the owner's 10–20% calibration. 7 of 34 events are now
expressive-kinetic; 27 stay calm and provably unchanged. One latent build
defect (E7 DISTILLED never appeared on screen) was found by frame evidence
and fixed. Scenes, switches, and audio are untouched.**

Drift gate, read first: drift-check/LOG.md + STEERING.md. The #112 freeze's
clear-condition is satisfied on disk by the S13 repair (corrected QA record,
build report, regenerated + re-verified S13, repair report
`jobs/2026-10-28-s13-repair.md`). This job delivers nothing to Hadi, pushes
nothing.

**Benchmark line (the standing instruction — state where it sits):** against
the reference's 100% (450 words, every one performing), the pre-enrichment
word layer sat at ≈0–5% (one face, six gentle entry directions, no event
performs); the enriched layer sits at ≈15% — the reference's grammar
(per-word sync; font/weight/scale as decided expression; one word become an
object in the scene) applied at low intensity to a decided minority, because
the scenes carry the story. Inside the owner's 10–20% band, at its middle.

## What was decided (plan revision, appended — history preserved)

`scene-plan.md` gained "Revision — 2026-10-28 (word-layer enrichment)" and
`scene-plan.json` mirrors it (`word_layer_enrichment` + a `revisions[]`
entry). Word-layer audit after the revision: **UNDECIDED = 0**; expressive
tally **7/34** (E22 = one event, three strikes; the mantra holds 3 of the 7).

Font set (3 faces, roles): BASE Noto Serif Display Bold (all calm events) ·
EXPRESSIVE Noto Sans Display Black (the verdict voice) · MANTRA Noto Serif
Display Black (the naming + mantra voice). New renderer modes, closed set:
STAMP-HARD · SWELL (three-point scale trajectory) · TRAVERSE · SETTLE
(image-asset entry). Justification axis for the dosage: the transcript's own
stress map — the verdict, the naming, the two-places verdict, the custody
climax, and the mantra; the opener E1 deliberately stays calm (orientation;
its scored HERO GROW already carries it).

## Planned vs realized — the seven expressive events (all frame-verified)

| Event | Planned form | Realized (frame evidence in `soa01-scenes/work/enrich-verify/`) |
|---|---|---|
| E6a NOTHING. (L6) | Emphasis strike, EXPRESSIVE face, 1.30→1.00 / 0.22 s, Z-C HERO | ✓ f-19.6: blunt sans-black slam seated at Z-C over the emptied room; scrim per probe. |
| E8 the HARNESS (L8) | SWELL, MANTRA face, 0.70→1.06 / 0.45 s + settle / 0.25 s, Z-TC HERO, HOLD | ✓ f-27.67 at peak (word spans the frame over the repaired S13 — marks-only notes, dials, no letterforms); f-28.4 at rest 1.00. |
| E9 TWO PLACES (L9) | TRAVERSE, EXPRESSIVE face, (240,480)→(540,480), 300 px / 0.55 s | ✓ f-34.56 mid-travel (ease front-loads: ~88% covered at midpoint, as scored); segments/ink preserved (TWO cream, PLACES gold). |
| E17 YOURS (L16) | IMAGE-ASSET word: generated carved-letter cutout, 600 px rest at Z-C, SETTLE entry, no scrim (decided) | ✓ f-66.72: the gold word-object sits over S27's strongbox, the scene's key touching its R. Asset: `work/wordasset-yours-cutout.png`. |
| E20a UNDERSTAND (L19) | SWELL, MANTRA face, 0.85→1.10 / 0.50 s + settle / 0.30 s, Z-TC HERO | ✓ f-75.64 at peak: full-frame width, glyphs complete (the scored ±10 px transient bleed at peak); calm E20b beneath, no collision. |
| E21a BUILD (L20) | TRAVERSE, MANTRA face, (90,800)→(300,800), 210 px / 0.50 s, HOLD | ✓ f-77.19 mid-travel (left of seat, sliding in); f-77.7 at rest at Z-ML; calm E21b beside it unchanged. |
| E22 KEEP→AN EYE→ON IT (L21) | Kinetic strikes, MANTRA face, each 0.80→1.08 / 0.30 s + settle / 0.15 s, diagonal Z-TL→Z-C→Z-LR, HOLD through tail | ✓ frame-wise: f-78.55 (KEEP landed, AN EYE not yet — sequence reads), f-79.3 (all three holding), f-80.4 (all three inside the final fade). |

## The image-asset word (E17) — generation record

Attempt 1 (letters on black) produced a beautiful but **unkeyable** asset:
measured face luminance (V ≈ 0.10 on the U/R faces) equals the background's
own glow (V ≈ 0.21 at the left edge) — no threshold separates them; two
keying methods (luminance key, flood-fill) both ate the faces, leaving gold
outlines (composites preserved in `work/enrich-verify/`… see
`work/enrich-check/`). Attempt 2 regenerated the same object on a **pure
white background** (prompt of record is written into the plan revision):
faces bright, sides dark wood, separable by construction. Keyed with
alpha = clip((0.93 − V)/0.06); the composite over S27 was viewed and
accepted — solid, exactly Y-O-U-R-S, palette-matched. Both sources are
preserved in `work/`.

## Defect found and fixed — E7 DISTILLED was never on screen

The build's renderer tuple carried E7's exit as 27.22 s — §7's "exits as E8
lands" transcribed literally — but in the v4 take "harness" (27.22) is
spoken **before** "distilled" (30.12), so the exit preceded the entry and
the event never drew. Frame evidence from the pre-enrichment film
(t = 30.6 / 31.2 / 32.0): Z-MR empty while E8 holds. The build report's
"34/34 rendered" counted the render list; the gates file's presence probes
were never implemented. Correction (recorded in the plan revision): exit =
32.324 s, the L8 line end — form otherwise calm and unchanged. Verified in
the enriched film: f-31.2 shows DISTILLED risen at Z-MR beside the holding
HARNESS. The build report's "34/34" line is superseded by this paragraph.

## Verification on the final MP4 (`soa01-scenes/full-film-v4.mp4`)

- (a) Expressive events frame-checked at midpoint/peak/rest + mantra
  frame-wise — table above; all as scored (font, trajectory direction,
  traversal path, cutout presence).
- (b) Calm events unchanged: frame diffs vs the pre-enrichment render are
  **0.000** at four sampled calm times (t = 5.6, 12.0, 47.0, 59.6) and
  ≤ 0.317 mean|diff| (0–255 scale) at two points downstream of changed
  events (t = 24.6, 71.6) — encoder reference drift, not content change.
- (c) No subtitle behaviour: events occupy seats across all three grid
  rows as scene elements (frame set); nothing parks in a caption band;
  the narration is never captioned.
- (d) Spine unchanged: switch audit worst offset **0.043 s** (gate ≤ 0.15,
  `gates_v4.py` re-run); loudness **−14.53 LUFS / −1.23 dBTP** — identical
  to the pre-enrichment build; duration **81.050 s**; 1080×1920@30; full
  decode pass error-free.
- (e) Phone-size (390×693) frames legible: mantra (79.3) and the
  image-asset event (66.72) — `work/enrich-verify/phone-*.png`.
- Pre-enrichment render preserved at `work/full-film-v4-pre-enrichment.mp4`;
  renderer at `work/render_v5.py` (v4 path preserved for calm events;
  overrides keyed by event id); the filmstrip beside the film was
  regenerated from the enriched render.

## Process note (recorded, not hidden)

A backgrounded wait command returned a completion notice claiming "render
done" with a byte count (29,990,301) that matches neither the pre-enrichment
file nor the final render — while the render was in fact still running and
the MP4 momentarily unprobeable (moov not yet written). I did not trust the
signal: completion was established from the render process's actual exit,
its log tail ("render done, exit 0"), and a fresh probe + full decode of
the finished file (29,135,143 bytes). Verification above is all post-hoc on
that confirmed-final file.

No pushes made. Not delivered to Hadi.
