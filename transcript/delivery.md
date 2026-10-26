# SOA-01 — delivery record + pause map (CAUSAL, phase 11; starts locked at phase 14)

Delivery is the second stage of the two-stage transcript model:
the content settled in `transcript/transcript.md`; this file
decides how it is timed and paused. The pattern was prescribed
in phase 9 (delivery_structure); this file sizes it.

## The gap plan (silence between one line's fitted end and the next line's start)

| Joint | Gap | Function |
|---|---|---|
| lead-in (bed + monument assemble) | L1 starts 1.20 s | The number monument assembles in near-silence over the bed before a word is spoken — the hook's first step is visual. |
| L1 → L2 | 0.55 s | The turn: fact stated, a beat, then it is about YOU. |
| L2 → L3 | 0.70 s | Mirror absorbed; the explanation begins. |
| L3 → L4 | 0.35 s | Inventory ticks follow the container closely. |
| L4 → L5 | 0.80 s | The inventory settles; the test is set up as a change of register. |
| L5 → L6 | **1.00 s — DESIGNED SILENCE** | The viewer answers the test themselves before the narration does. The piece's most expensive second; it is the mechanism of M3. |
| L6 → L7 | 0.70 s | Verdict absorbed; the naming begins. |
| L7 → L8 | 0.45 s | The two halves of the naming stay one thought. |
| L8 → L9 | 0.70 s | The alternative arrives as its own beat. |
| L9 → L10 | **1.00 s — DESIGNED SILENCE** | Pre-payoff: the verdict is not crowded by the alternative. |
| tail (after L10) | 2.40 s | Payoff held in cinematic type; the bridge card appears over bed only. |

Within-line delivery decisions: L4's three fragments are three
beats (each item lands as its object lands — the punctuation is
the delivery instruction); L6's two sentences are verdict then
ground ("Nothing." / "It was all rented."), the first landing
alone. All other lines are delivered as single statements at
the clone's natural pace — tempo is never forced beyond the fit
standard's arithmetic (phase 14's fit table: every line fits at
atempo 1.0 by construction of this map: each window = fitted
duration + its gap, and every gap ≥ 0.35 s exceeds the standard's
0.15 s guard + 0.02 s margin).

## Locking rule

Absolute starts are computed at the audio phase from the
measured, trimmed takes: start(L1) = 1.20; start(Ln+1) =
start(Ln) + fitted_duration(Ln) + gap(Ln→Ln+1). The locked
starts are recorded in `audio/audio.json` (phase 14) and in the
scene's PLAN (`scene/scene.json`, phase 12 — the scene is
authored against this same map, its word entries following the
media clock of the assembled programme).
