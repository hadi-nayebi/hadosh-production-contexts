# DIR-02 — "Close Meanings Sit Close" (Direction series, Batch 1)

Status: PRODUCING 2026-10-22 · flagship DRAFT lane (Hadi's gate) ·
iteration suffix rides in the Studio title.
Slate: files/direction-series-slate.md · Template: DIR-01 (map form).

## Design (before the build, per the titles-first correction)

- **Title:** "Close Meanings Sit Close" (4 words — the claim itself).
- **Cover:** the finished map, zoomed: two dots nearly touching up top
  ('cat', 'dog'), one dot far below ('car'); cover line burned on the
  upload frame pick: "CLOSE WORDS LIVE CLOSE". No other piece's cover
  resembles it.
- **Form:** MAP (series grammar from WS01/DIR-01): axes field, dots
  land as the narration names them; a short bracket measures cat–dog
  ("close"), a long dashed line measures car to the pair ("far").
- **Essence (≤8 words):** close directions, close meanings.
- **Hook (≤5 s):** a puzzle — why does the machine treat cat and dog
  as near-identical, and car as a stranger?

## Script (locked for i1)

1. (opener) "Your daily bite of agentic literacy."
2. (hook) "Why does the machine treat cat and dog as almost the same
   word — and car as a stranger?"
3. "Every word it reads becomes a direction."
4. "Words that keep the same company in sentences end up pointing
   almost the same way."
5. "Cat and dog live in the same sentences — pets, homes, fur. Their
   directions land close."
6. "Car lives in different sentences — roads, engines, fuel. Its
   direction lands far away."
7. "So closeness is not spelling, and not looks. It is a shared life
   in language."
8. (return) "Close directions, close meanings — that is how the
   machine knows what belongs together."
9. (closer) "Next: word arithmetic — king, minus man, plus woman."

Structure: W-01/W-02 ✓ · signpost "so" (7) ✓ · techniques: concrete
company lists (5, 6), contrast pair (close bracket vs far line),
return-and-name (8) ✓ · funnel: description routes to the Workshop
playlist + Toaster.

## Iteration log
- i1 (2026-10-22): produced via the DIR-01 fork; delivered −14.47 LUFS /
  TP −1.25 (twin −14.50 / −2.37); frames inspected — cluster grammar
  reads (hook ring, company dots, close bracket, far dash, two-arrow
  sphere finale). Noted for i2: one caption row ("Close directions,
  close meanings") runs wide toward the plate's left edge — cap row
  width or drop caption size for long rows. Uploaded as flagship Draft
  "Close Meanings Sit Close — i1".
- i2 (2026-10-23, overnight): word-animation rebuild on the intro-v3
  pipeline. Script change (one): the spoken series opener (old line 1)
  is DROPPED — the container card owns the opener and DIR-01 never
  carried it in-content (K-02); the remaining seven lines are the
  locked i1 lines renumbered. Visual fixes: bare unlabelled axes
  replaced by a labelled MEANING SPACE field (distance is the only
  claim — V-12); finale draws the arrows + small angle arc the slate
  promises ("relatedness IS angle") instead of the two-arrow sphere;
  the wide-row defect is removed structurally — the renderer's word
  blocks wrap at ≤860 px inside the safe rect. Audio: L7's TTS source
  measured ~2.5 dB under its siblings; sources normalized to −27.5 LUFS
  (the pipeline now does this for every piece — R-03 workflow fix in
  diranim.synth_lines); delivered segment spread 2.90 dB (residual dip
  diagnosed in the hunt log: A-08 chain dynamics on the high-crest
  closer, inside A-11's ~3 dB guide). Delivered:
  files/short-dir02-close-i2.mp4 (46.43 s; −14.48 LUFS / TP −1.32;
  alignment 96/96, 0 repairs) + twin + cover
  (files/short-dir02-close-i2-cover.png). Package:
  files/short-dir02-close-upload.md. Diagnosis + hunt log:
  hidden_files/dir-series-v2/.
