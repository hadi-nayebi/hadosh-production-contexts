# WD-02 — delivery record + pause map (phase 3; starts locked at phase 6)

Delivery is the second stage of the two-stage transcript model:
the content settled in `transcript/transcript.md`; this file
decides how it is timed and paused. The pattern was prescribed
in phase 2 (delivery_structure); this file sizes it. The sizes
agree with the pause map proposed inside Candidate B's draft
record — adopted here because each size re-derives from the
joint's function (below), not because the draft carried it.

## The gap plan (silence between one line's end and the next line's start)

| Joint | Gap | Function |
|---|---|---|
| lead-in (bed only) | L1 starts 0.40 s | Settle before the misconception — a definition opens at statement pace, not under a held breath. |
| L1 → L2 | **0.90 s — SUSPENSION** | The viewer-think beat: the flat picture hangs in the viewer's own terms before the correction lands. A correction in the same breath as the belief is heard as a quibble. |
| L2 → L3 | 0.60 s | Claim → concrete case: the definition is on the table; the performed example follows at statement pace. |
| L3 → L4 | 0.45 s | Inside the performed example — the tightest joint in the piece: the steering is one continuous act. |
| L4 → L5 | 0.70 s | Example → mechanism widen: the frame pulls back from the steering to the context underneath it. |
| L5 → L6 | 0.80 s | Mechanism → accumulation claim: the claim must arrive as a conclusion the mechanism has earned, not as the next sentence. |
| L6 → L7 | 0.60 s | Claim → the gathering move. |
| L7 → L8 | **1.00 s — DESIGNED SILENCE** | Pre-payoff: the mega prompt is held in the viewer's hand before the definition restates, or it reads as a vocabulary word instead of the answer. The piece's most expensive second. |
| tail (after L8) | 2.00 s | Payoff held; the bridge card appears over bed only. |

## Within-line delivery decisions

- **L2's two beats:** "It is not." lands alone, then the
  definition. The punctuation is the delivery instruction; the
  scene's C2 re-tag fires on the same words.
- **L4's fragments** ("warmer. Shorter.") are three steering
  beats, each landing as its card lands on the work-page (C3).
- **L5's em-dash joints** are breath points inside the piece's
  longest line — the mechanism is performed in one line with
  two internal rests, never rushed to fit.
- **L7's cadence** is an instruction performed ("Take … chain …
  you hold"): three verb beats, gathering speed, into the
  designed silence.
- All other lines are delivered as single statements at the
  clone's natural pace — tempo is never forced beyond the fit
  standard's arithmetic (phase 6's fit table: every line fits
  at atempo 1.000 by construction of this map: each window =
  trimmed duration + its planned gap, and every gap ≥ 0.45 s
  exceeds the standard's 0.15 s guard + margin).

## Locking rule

Absolute starts are computed at the audio phase from the
measured, trimmed takes: start(L1) = 0.40; start(Ln+1) =
start(Ln) + trimmed_duration(Ln) + gap(Ln→Ln+1). The locked
starts are recorded in `audio/audio.json` (phase 6) and in the
scene's PLAN (`scene/scene.json`, phase 4 — the scene is
authored against this same map, its word entries following the
media clock of the assembled programme). The music bed is
continuous throughout — pauses are narration events, never bed
cuts (the owner's standing rule).
