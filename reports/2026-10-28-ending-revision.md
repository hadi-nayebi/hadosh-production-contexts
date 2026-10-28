# JOB ENDING REVISION — soa-01 scenes film (2026-10-28)

**Task:** build a better ending with the Hadosh Academy connection, per
Hadi's #112 verdict ("very good example, we can publish this, but we
need a better ending and plug Hadosh Academy at the end — follow us to
learn more about the ways to bring more of the harness to your
control"). **Status: COMPLETE — built and verified. No pushes, no
publish, nothing delivered to Hadi.**

## The plug text, as built (exact)

- **L22:** "At Hadosh Academy, we teach you to bring the harness under your own control."
  Marked synthesis text: "At HADOSH ACADEMY, we teach you to bring the harness under your own control."
- **L23:** "Follow Hadosh Academy — build your own."
  Marked synthesis text: "Follow Hadosh Academy — build your OWN."

Both lines synthesized in the regular voice (avocado_v2:MAI_03) from
the marked text; banned-word scan 0. The plug satisfies the ENDING
STANDARD as designed: it names the onward step (follow the Academy),
states in the piece's own terms what the Academy teaches (bringing
the harness under your own control — Hadi's substance, nearly
verbatim), and a cold viewer who has just learned what the harness
is understands what the Academy is from L22 alone.

## Plan first (metadata before build)

A dated ENDING REVISION was appended to `scene-plan.md` and mirrored
into `scene-plan.json` (`ending_revision` key + revisions entry +
S34–S36/E23a/E23b/E24 rows) BEFORE any building: plug lines (clean +
marked, with intent), three closing scenes with subjects/reasons/
text treatments, three word events under the enriched palette
(E23a = the Academy name as an expressive poster, MANTRA face, SWELL;
dosage 8 expressive of 37 entries, realised intensity ≈15%, in the
10–20% band), the splice design, the consequential E22 exit change,
the C-1b tail-hold transfer (S33 → S36), and an audit of the ending
compartment at **UNDECIDED = 0** with a verification plan. Scenes are
in THIS film's §2 style (STYLE BLOCK verbatim), not the canon
candidate style.

## Build

- **Preserved:** `work/full-film-v4-pre-ending-revision.mp4` (the
  #112-verdict film, 81.050 s) before any work.
- **Takes:** `work/line-L22-v1.mp3`, `work/line-L23-v1.mp3` → 48k
  WAV; Whisper-measured (faster-whisper small): L22 dur 4.248 s,
  L23 dur 2.808 s; trimmed to voice end + 0.05 (3.79 / 2.37) so the
  scored gaps mean what they say.
- **Scenes:** S34/S35/S36 generated with the §2 STYLE BLOCK verbatim
  (media-generation, one attempt each — all passed acceptance):
  - S34 the layer of blank pages/cards opening toward the viewer off
    the desk — ink 0.732, subject PASS by eye, pages blank.
  - S35 hands taking hold of the opened layer's edges — ink 0.674,
    marks-only pages, PASS.
  - S36 evening room, the layer open on the desk, a door standing
    open with warm light beyond — ink 0.822, PASS.
  (Ink measured on a slightly stricter formula than the original QA
  pass — S33 computes 0.829 vs its recorded 0.895 — so all three pass
  the ≥0.55 gate with margin on either formula. QA entries appended
  to `work/scene-qa.json`.)
- **Audio:** `work/assemble_v5.py` (the Academy assembly method):
  v4 raw kept whole through L21's voice end (79.06, measured);
  block [breath 0.90 · L22 · gap 0.55 · L23 · tail 2.00] + bed patch
  looped from the programme's own gap material; takes RMS-matched to
  the shipped master's L8 span (gains +12.40 / +10.53 dB, family of
  L8's +12.48 dB); 0.010 s splice crossfade. `work/master_v5.py`
  (the deterministic chain of record): **−14.54 LUFS / −1.1 dBTP**.
- **Render:** `work/render_v6.py` (render_v5 path + ending): 36
  scenes, 38 event entries, final fade at the new end.
  **New runtime: 88.66 s** (was 81.05; +7.61). Film loudness as
  encoded: **−14.54 LUFS / −1.12 dBTP**, 1080×1920@30.

## Verification (on the final MP4)

- **Anchors locked from measurement** (Whisper on the v5 master,
  `work/anchors-v5.json`): L22 at 79.96 · "Hadosh" 80.20 · "bring"
  81.92 · "under" 82.56 · L23 "Follow" 84.22 · "build" 85.98 —
  within 0.07 s of the sample-exact construction everywhere.
- **ASR fit:** takes — L22 0.929, L23 1.000 (gate ≥ 0.85 ✓).
  Master-level — L22 0.929, L23 0.833; the L23 figure is a
  proper-noun artifact: Whisper-small spells "Hadosh" as "Hattish"
  in the full-mix pass (it heard "Hadosh" correctly on the isolated
  take). All six words present, in order, in both passes.
- **Presence by probe + eye:** numeric probe pass over all 38 event
  entries (probe fractions recorded in
  `work/ending-probe-results.json`), with the decisive check by eye
  on fresh frames — the fidelity pass's method, since the probe's
  wide boxes inflate control fractions wherever events co-reside:
  - E22a/b/c at t=79.50: the full KEEP → AN EYE → ON IT diagonal
    holding over S33 before its scored exit at 79.96. ✓
  - E23a at t=80.90: HADOSH ACADEMY poster, gold, MANTRA face, full
    width over S34 — legible, unmissable. ✓
  - E23b at t=83.30: UNDER YOUR CONTROL seated over S35, legible. ✓
  - E24 at t=86.70: BUILD YOUR OWN on its scrim over S36, the open
    door behind — the film's last type. ✓
  Upstream events ride the identical renderer path/timing as the
  fidelity-verified render (their probe fractions on this render
  are in the same table).
- **Switch audit, new joints** (`work/ending-switch-audit.json`):
  S34 offset −0.05 s, S35 −0.05 s, S36 −0.05 s (gate ≤ 0.15 ✓).
  Upstream joints carry the fidelity pass's audit (identical spine;
  worst 0.058 s). One full-probe run of the v6 film also completed
  and printed worst-overall 0.133 s, inside the gate; its results
  file was lost to a probe-cache race (two runs sharing one frame
  cache — a truncated cached frame later crashed a re-run), which
  is why the ending-specific numbers above were re-derived in a
  private pass. No numbers are claimed from the lost file beyond
  that printed summary.
- **Dwells realized:** S33 1.68 s · S34 1.96 s (clause block, above
  the 1.4 floor) · S35 2.30 s · S36 4.44 s incl. the 2.00 s tail
  (under the 5.0 ceiling; C-1b as transferred). All inside C-1.
- **Format/decode:** 1080×1920@30, duration 88.660 s, full decode
  clean.
- **Specimen:** `soa01-scenes/work/ending-specimen.mp4` — the final
  20.000 s (68.66 → 88.66), all layers (mantra close, breath, plug,
  follow, fade). Plug moment frame-checked at phone size
  (390×693): HADOSH ACADEMY fully legible
  (`work/ending-check/plug-phone-80.9.png`).

## Files

- Film of record: `soa01-scenes/full-film-v4.mp4` (88.66 s) ·
  rollback: `work/full-film-v4-pre-ending-revision.mp4`
- Plan: `scene-plan.md` ending revision + `scene-plan.json` mirror
  (incl. realized values)
- Audio: `work/assemble_v5.py`, `work/v5-raw.wav`,
  `work/master_v5.py`, `work/v5-master.wav`,
  `work/master-record-v5.json`, `work/ending-timeline.json`,
  `work/plug-takes-measure.json`, `work/anchors-v5.json`,
  `work/words-v5.json`
- Render/probe: `work/render_v6.py`, `work/render-log-ending.txt`,
  `work/probe_ending.py`, `work/ending-probe-results.json`,
  `work/ending-switch-audit.json`, `work/ending-check/` (frames)
- Scenes: `scenes/S34.png`, `S35.png`, `S36.png` (+ generation
  records in `work/ending-gen/`)
