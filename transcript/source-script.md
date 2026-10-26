# Earth One — Vocabulary Packs format

## v2 (2026-10-22, after Hadi's rejection of v1)

Status: **DEMOTED to Hadi's gate** (publishing-judgment.md). The v2
sample ships as a Draft for his ear; the lane re-graduates only when
he approves the format.

What v1 got wrong (his words + QC A-10): isolated single-word TTS
pronunciations were bad and unverifiable by Archer; no container, so
it looked random; a poster, not a video; not designed for its actual
viewer.

- **Unit:** one short = one SIMPLE SENTENCE built around the target
  word (+ one verb), the SAME sentence in five languages: TR, FA
  (anchors), EN, DE, FR. E.g. target WATER: "I drink water." — Su
  içerim. · من آب می‌نوشم (man âb minušam) · I drink water. · Ich
  trinke Wasser. · Je bois de l'eau.
- **Container (the lane's own, used by every piece):** 1.4 s opening
  card (EARTH ONE · VOCABULARY · pack name) → scene → recap card
  (all five sentences stacked, target word lit) → pack end card.
- **Scene:** a short MOVING scene of the action (image animated into
  motion, not a static poster); below it, the sentence panel builds
  one language at a time, each sentence spoken as its line appears,
  the TARGET WORD highlighted in amber inside every sentence.
- **Viewer design (the reference viewer is 70):** big type (≥64 px
  sentences), slow pacing (each language gets its full breath,
  ~3.5 s), high contrast, nothing essential in the player's UI zones,
  a full silent hold at the end with all five sentences visible so
  she can read and repeat.
- **Audio gate (A-10):** sentence-context TTS at speed ~88. Pronunci-
  ation remains unverifiable by Archer — the format's sample passes
  Hadi's ear at Draft before the lane produces a pack, and the first
  pack stays at his gate too.
- **Accuracy bar:** every sentence checked as natural, standard usage
  in all five languages before production.

## Motion — the named easing set (2026-10-25, gap G-07)

- **VOCAB-EASE: none (step).** The vocab renderer (PIL frame
  compositor, `hidden_files/vocab03/build_v3.py`) contains no
  easing functions: sentence lines, panel elements, and cards
  appear as frame-stepped cuts at their recorded times. That
  stepped character is now the named constant of the lane —
  recorded as it stands; any future smoothing is a format
  revision (the feel question is an Action #51 candidate, as
  on the other lanes), not a build-time improvisation.

## Music bed — format constants (2026-10-25, gap G-09)

- **VOCAB-BED: none — by decision.** The lane's audio is the
  sentence TTS lines mixed together (an `amix` of the five
  language lines plus cards' speech in the v3 builder); there
  is no music bed and no ambience layer. The absence is a
  foreclosure recorded here, not an oversight: for a
  70-year-old design viewer repeating sentences aloud, an
  unaccompanied voice is the format. It reopens only with a
  format revision.

## v1 (rejected 2026-10-22 — kept for the record)

One concept × five isolated words on a static image; per-word TTS.
Published once ("Water in 5 Languages", gKkHir2O7BA), rejected by
Hadi on quality within the hour, pulled to Private, pack build
stopped mid-run. Do not revive.

---

## RECONCILIATION NOTE — pacing spec vs delivered v3 (2026-10-23, Job R3, mismatch M-3)

**Unresolved — flagged, not fixed.** This spec's viewer-design
section promises slow pacing: "each language gets its full breath,
~3.5 s". The delivered v3 piece ("I Drink Water in 5 Languages",
xX4-60ily0Y) gives each language a slot of **1.83–2.24 s**
(sentence ~1.0–1.4 s + GAP 0.85 s), in both passes — measured from
`hidden_files/vocab03/timings.json` (pass-1 starts 1.900 / 4.142 /
6.144 / 8.122 / 9.956) in the R2 context-coverage re-audit. No
record reconciles the two numbers: either the spec was silently
abandoned or the build drifted from it. The spec's ~3.5 s figure is
deliberately **not** edited here. The ruling is Hadi's (board ask,
Action #40): re-time Pack 1 v2 to the promised breath — Mom is the
design viewer — or amend this spec to the delivered value with the
reason written. Until he rules, this note is the reconciliation of
record: the lane's flagship promise and its flagship piece
disagree, on the record.
