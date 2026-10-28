# JOB GAP HUNT — soa-01 scenes+words film (v4): proactive decomposition audit

**Date:** 2026-10-28 · **Authority:** AGENTS.md ★ PROACTIVE GAP HUNT
(2026-10-28) — randomness is discovered by decomposition, not
flagged by the owner one category at a time. **Method:** the
deliverable (`soa01-scenes/full-film-v4.mp4` + plan + transcript +
audio + package) decomposed compartment by compartment; every
variable classified DECIDED (record + reason cited) /
ENTAILED-FORECLOSED / INHERITED-UNEXAMINED (carried from the old
style, trunk v2, the Academy programme, or tool defaults without
re-derivation for this film — counts as undecided) / UNDECIDED.
The two parallel jobs (word-layer enrichment, adjusted-style
specimen) were read as they stand; nothing of theirs was modified.
**State note:** at audit time the enrichment render was still in
flight — `full-film-v4.mp4` was mid-write (ffprobe: moov atom not
found, ~19:2x UTC) and neither the enrichment nor the specimen
job report had filed yet. Classifications below judge the plan
and the last completed render (pre-enrichment, preserved at
`work/full-film-v4-pre-enrichment.mp4`) plus the enrichment
revision as written into the plan.

---

## 1. Decomposition table — 176 variables

| Compartment | DECIDED | ENTAILED / FORECLOSED | INHERITED-UNEXAMINED | UNDECIDED |
|---|---|---|---|---|
| A. Metadata & publish package | 0 | 1 (lane: flagship, gated — owner ruling) | 1 (piece objective: exists upstream in the Academy programme, never carried into this tree) | **4 — title, description, thumbnail, playlist/end-screen: NO compartment exists anywhere in the tree** |
| B. Transcript & markup | 24 (21 line wordings — v4 file, 1 change with reason, 20 keeps with reasons · L8 marked text in-file · other lines' marked text decided in the Academy marked-text file · banned-word scan = 0) | 0 | 0 | 0 |
| C. Audio | 26 (21 take rows §8 · voice per owner ruling 2026-10-27 · L8 dash joint — deviation recorded, calibration rule applied · bed-patch method · mastering chain of record · measured master values −14.53/−1.23) | 0 | 4 (splice method · 1.20 s lead · per-line gap map · **bed track identity — unnamed anywhere in this tree**) | 0 |
| D. Cadence & transitions | 10 (Rule C-1: band/ceiling/floor/anchor rule/first-switch/exceptions = 7, evidence-cited · crossfades 0.40/0.25/1.00 = 3) | 0 | 0 | 0 |
| E. Image-style globals | 7 (rendering, framing, negative space, people rule, no-text rule, verbatim style block, acceptance check) | 1 (seed rule — decided but the pipeline exposes no seed parameter; foreclosed by tooling, consistency actually carried by the style block) | 1 (**palette — carried from trunk v2 by lineage**) | 0 |
| F. Scenes (33) | 33 (subject + window + switch anchor per row, §6) | 0 | 8 (**text-treatment for the writing-surface scenes S02, S05, S06, S12, S25, S28, S29, S31 — no per-scene decision; only S13 and S22 carry one**) | 1 (**subject-fidelity check — the variable does not exist in the plan**) |
| G. Word layer | 45 (34 event rows: text/seat/direction/scale/anchor/exit · 3-face font set with roles (enrichment revision) · ink rule · scale classes · zone grid · direction set + 4 expressive modes · entry/exit profiles · scrim rule · density rule · E17 image-asset prompt + keying) | 0 | 2 (**the renderer's 1000 px single-line cap — a code-catalogue rule never in the plan** · **scrim numeric threshold — invented by the build: bright-fraction ≥0.10 / quartile ≥0.55**) | 1 (**frame-fit rule — absent at plan closure; 11 events completed by the build's uniform rule, still unratified**) |
| H. Frame edges & safe zone | 0 | 2 (first frame — entailed by S1 row + first-switch rule, never treated as its own variable · safe zone — standing production law) + tail DECIDED via C-1(b) (counted in D) | 0 | 0 |
| I. Render pipeline | 1 (format 1080×1920@30) | 0 | 2 (codec settings x264 CRF 17 / preset medium — code-only values · pipeline choice PIL+ffmpeg) | 0 |
| J. Canon alignment | 0 | 0 | 1 (**canon consultation for the shipped film: NONE at plan closure — no cortex, no song, no site; lineage to v2 was the only grounding**) | 0 |
| K. Verification plan | 1 (§10, four gates) | 0 | 0 | 0 |
| **Totals** | **147** | **4** | **19** | **6** |

Realization defects (rows scored DECIDED whose shipped artifact
contradicts the score) are flagged inside §2(a): **3** — S12,
S28, E7.

**Completeness challenge to the plan's own audit:** scene-plan §9
claims the variable set is closed at UNDECIDED = 0 over 33 + 33 +
27 + 21 rows. The claim is true only of the variables the plan
listed. This hunt adds **5 compartments the plan never listed**
(package, subject fidelity, per-scene text-treatment, canon
consultation, render/codec) and **19 inherited variables inside
compartments the plan did list** — so the film's true undecided
count at build time was not 0 but ≈25 (19 inherited + 6
undecided), before counting the 3 realization defects.

---

## 2(a). DELIVERY-BLOCKING defects for #112

**A1 — E7 DISTILLED never appeared in the shipped build, and the
build's gate record said it did.** The renderer carried E7's exit
(27.22 s, transcribed from §7's "exits as E8 lands") before its
entry anchor ("distilled", 30.12 s in the v4 take), so the event
had zero on-screen life. The build report's gate (b) claims
"34/34 present at their seats" — a second false verification
record of the S13 class: the gates' presence probes were never
implemented; the count came from the render list. *Status:* the
enrichment revision (plan, appended 2026-10-28) names the defect,
corrects the exit to the L8 line end (32.324 s), and the enriched
render implements it (frame stills `work/enrich-check/e7-*.png`).
*Blocking because:* the enrichment job's own verification report
had not filed at audit time, and the STEERING freeze on #112
remains ACTIVE on disk (its S13 conditions are met, but only a
drift check clears it). #112's accounting must carry this defect
and its correction explicitly — the "34/34" claim may not be
repeated.

**A2 — S12 subject-fidelity failure (semantic, S13-class).**
Scored: "the conversation's words becoming visible notes drifting
toward a forming layer." Shipped image (viewed full-size in this
audit): hands at a keyboard with **sheet music and musical notes**
flying off the keys — the generator read "notes" as music. The
image carries no legible text, but it contradicts the scored
subject at the exact stretch (L8 clause 1) that sets up the
definition. No gate caught it because §10's acceptance measures
palette fraction, subject count, text, faces — **subject fidelity
is not a variable anywhere in the plan** (see §1F).

**A3 — S28 subject-fidelity failure.** Scored: "the layer spread
open on the owner's screen, every page readable, no locks
anywhere" (L17, NOTHING HIDDEN). Shipped image (viewed full-size):
a laptop displaying a **botanical sketchbook inside a graphics
editor** (watercolour leaves, layer panel with eye icons). No
legible text, but sound-off it tells no part of L17's story — it
is the film's clearest off-subject frame. Same missing gate as A2.

**A4 — The build report's scene-acceptance sentence is false as
written.** "No legible text anywhere (S06/S13 carry handwriting
*texture* — the scored subjects themselves; no words)"
(`jobs/2026-10-28-new-style-build.md`, Scenes section). The S13
half was false when written; the QA record and repair report
supersede it on disk, but the build report itself was never
amended. For the banking pass it must be explicitly superseded —
the drift log already flagged this once.

**A5 — Procedural:** the current `full-film-v4.mp4` is a new
(enriched) render with no filed verification report yet, written
over the frozen filename while STEERING's freeze is still ACTIVE
on disk. Delivery waits on: enrichment report filed → parent
verification of the finished file → drift check marks the
directive CLEARED.

## 2(b). INHERITED / UNDECIDED — named for the section pass & style revision

These do not block #112 individually, but **every one must be
named in #112's delivery accounting**; none may be silently
carried as "decided."

1. **Style rationale is inherited, not derived** — palette and
   the workshop world came from trunk v2 by lineage ("the family
   that scored 85"). The owner challenged exactly this
   (2026-10-28 ~15:13–15:25 ET); `style-reasoning.md` concedes
   "consistent, handsome, UNDERIVED." The adjusted-style specimen
   (canon-grounded: cortex web, information-keeping motifs) is
   the in-flight correction; the shipped film's style stays
   INHERITED-UNEXAMINED until the revision is judged.
2. **Canon consultation = none for the shipped film** — the
   plan's §2 cites only the v2 family. The Academy's governing
   art for this piece (Digital Cortex — canon.md §3–§5, the
   accepted cortex frames board, the hero reference, the song)
   was consulted only by the specimen job, after the owner's
   challenge, and the parallel canon+music study had not landed
   even there. A canon row is now in the standing model
   (appendix).
3. **Publish package does not exist** — no title, description,
   thumbnail, or playlist/end-screen decision anywhere in the
   tree. The film cannot publish on the flagship's gated lane
   without them; they are section-pass work, decided before any
   publish step.
4. **Piece objective not carried into this tree** — it lives in
   the Academy programme's records; the scenes tree opens with
   style + text of record only. The metadata-first layer for
   this tree is incomplete by its own standard.
5. **Audio inheritances (4)** — splice method, 1.20 s lead,
   per-line gap map, and the music bed's identity (the build's
   bed patch loops "the programme's own gap material"; what the
   bed *is* is recorded nowhere in this tree).
6. **Frame-fit rule unratified** — 11 of 34 events render at
   build-completed sizes, not their scored scale classes (worst:
   E13b cap 52→28, E21b 74→33). The build's uniform rule (fit
   inside a 40 px margin, never move the seat) is sound and
   recorded, but it is a build completion, not a plan decision;
   the section pass must ratify or replace it (the alternative
   — full scale, boxes shifted inward — is named in the build
   report).
7. **The 1000 px single-line cap** — a renderer-catalogue rule
   that silently binds before scale classes do (E13a/E13b/E21b,
   E20a at cap 95 of 120). Never in the plan; now in the standing
   model (appendix).
8. **Scrim threshold invented at build** — the plan decided the
   scrim (α 0.35) but no trigger value; the build's probe
   (bright fraction ≥0.10 at lum ≥0.42, or brightest quartile
   ≥0.55) put visible plates behind 15/34 events. Tool-made
   values until the section pass promotes or replaces them.
9. **Text-treatment decided for only 2 of 10 writing-surface
   scenes** — S13 (marks-only, revision) and S22 (blank tag).
   S02 (chat window), S05 (filed sessions), S06 (cards/notebook —
   rendered blank), S12 (notes — drifted semantically, A2), S25
   (pinned note), S28 (screen), S29 (edited page), S31 (map)
   carry no treatment decision; today's renders are benign
   *by generator outcome, not by decision* — the same posture
   that produced S13. The plan revision's blanket sentence
   ("all other scenes' subjects carry no writing surfaces") is
   inaccurate and should be corrected in the section pass.
10. **Seed discipline foreclosed by tooling** — plan decided
    seed = 4100 + scene #; the media pipeline exposes no seed
    parameter. Consistency is in fact carried by the verbatim
    style block alone; the record should say so plainly.
11. **Codec/pipeline values are code-only** — x264 CRF 17,
    preset medium, PIL+ffmpeg pipe: never decided, never
    promoted. (Format 1080×1920@30 is decided production law.)
12. **Weaker fidelity notes (decided rows, imperfect reads)** —
    S14's distilled layer reads as stacked paper sheets (the
    build itself flagged it for the owner's eye); S31's "layer
    as map" renders as fantasy cartography with a hooded
    figure — the scored metaphor, weakly bound to the layer;
    S33's warm pool sits in the bottom third (lum_bot 0.177 >
    lum_mid 0.151; passes the numbered checks, carries no word
    events).
13. **L8 dash joint above the markup band** — 0.53 s measured
    vs the standard's 0.15–0.45 s band; stands as calibration
    data point #1 under the standard's own rule (re-decide
    after two failures). Named, not a defect.
14. **First frame never treated as a variable** — it is whatever
    S1 + the first-switch rule entail. For a Shorts hook this
    deserves its own row in the next piece (appendix).

## 2(c). Completeness argument + additions to the standing decision model

**Why this decomposition is complete for a scenes+words film.**
A deliverable in this style is exhausted by asking, for every
second of the runtime and every artifact that reaches the
viewer, *what decides this?* The compartments above are that
question applied at every level the artifact exists: the text
(words + their synthesis markup), the sound (takes, joints,
bed, gaps, master), the pictures (style system, per-scene
subject, per-scene text-treatment), the joins (cadence,
anchors, fades), the word layer (system, per-event form, the
one image-asset word), the edges (first frame, tail, safe
zone), the carrier (format, codec, pipeline), the frame around
the film (metadata, objective, publish package), the authority
above the film (canon consultation), and the check that closes
the loop (verification plan + its actual coverage). Any pixel
on screen traces to exactly one of: a scene row, a word-event
row, a transition, or the codec; any second of sound traces to
a take row, a joint, the bed, or the master; anything the
viewer meets outside the runtime (title, thumbnail,
description) traces to the package compartment. The hunt's
own test — *could a viewer-visible property exist that no
compartment owns?* — is what surfaced the five unlisted
compartments; re-running the test over the enlarged map
returns nothing further for this style. (Motion inside scenes
and asset animation are foreclosed by the style's definition
and counted as such, not forgotten.)

**Additions written into the standing model** (dated appendix
in `soa01-scenes/scene-plan.md`): per-scene SUBJECT-FIDELITY
gate; per-scene TEXT-TREATMENT row for every writing surface;
PACKAGE compartment (objective carried in-tree, title,
description, thumbnail, playlist/end-screen); CANON row
(which canon/art governs, where consulted, dated); FRAME-FIT
rule + the 1000 px cap promoted into the plan layer; SCRIM
trigger as decided values; AUDIO INHERITANCES carried
explicitly (bed identity, gap map, lead, splice method);
CODEC row; FIRST-FRAME row; and a VERIFICATION rule that event
presence is proven by frame probes, never by render-list
counts — the E7 lesson.

*No pushes. No delivery. No changes to the film or the running
jobs' files; the only write besides this report is the plan
appendix the brief assigns.*
