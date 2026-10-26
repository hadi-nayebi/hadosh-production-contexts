# WD-01 — delivery record + pause map (phase 3; starts locked at phase 6)

Delivery is the second stage of the two-stage transcript model:
the content settled in `transcript/transcript.md`; this file
decides how it is timed and paused. The pattern was prescribed
in phase 2 (delivery_structure, from the pause doctrine's
classes in `files/pause-transition-doctrine.md`); this file
sizes it. The sizes agree with the pause map inside Candidate
B's draft record — adopted here because each size re-derives
from its joint's function and doctrine class (below), not
because the draft carried it: the joints are the same joints
(the settled text follows the architecture both derive from),
and the doctrine's classes leave no other honest size for them.

## The gap plan (silence between one line's end and the next line's start)

| Joint | Class | Gap | Function |
|---|---|---|---|
| lead-in (bed only) | container | L1 starts 2.00 s | The monument assembles in the clear before the voice — the hook's visual half. The number must be SEEN at scale before it is heard; the opening is a delivery event, not dead air. |
| L1 → L2 | F1 | 0.50 s | Same idea continues: the number becomes the question about it, at statement pace. |
| L2 → L3 | F3 | **1.30 s — VIEWER-THINK BEAT** | The piece's one long pause, spent where the doctrine spends it: the entry question hangs — the viewer tries to answer "what is one token?" themselves — before the correction answers. A correction in the same breath as the question is heard as a quibble. |
| L3 → L4 | F1 | 0.50 s | The definition continues into the machine's-eye view. |
| L4 → L5 | F4 | **0.90 s — SUSPENSE** | Before the performed count: the payoff demonstration gets its beat; the viewer is about to be asked to DO something ("Count with me"). |
| L5 → L6 | F1 | 0.50 s | The count resolves into the stakes. |
| L6 → L7 | F2 | **1.00 s — CONCEPT SHIFT** | From what a token COSTS to what a token MEANS: the arc's hinge (consolidation §6). The turn must arrive as a change of register, not as the next sentence. |
| L7 → L8 | F4 | **0.90 s — SUSPENSE** | Before the bookend: the number returns as a payoff, not a recap. |
| tail (after L8) | packaging | 0.80 s hold, then the silent 3.00 s bridge over bed only | The earned close breathes; the pointer stays outside the arc (the owner's T-16 practice). |

## Within-line delivery decisions

- **L1's fragment joint:** the full stop after "quadrillion"
  is an F7 breath at the top of its range by design — the
  fragment lands ALONE (the monument's verbal half) before the
  anchor sentence completes it. Punctuation is the delivery
  instruction; the scene's C1 fires the anchor's source line on
  the same joint.
- **L5's performed rhythm:** each counted word is isolated by
  its periods (~350–600 ms engine gaps at the top of the F7
  range) — the count is performed, not read: "The. Machine.
  Reads. Tokens." The synthesis text carries the periods; the
  scene lands one piece per counted word on the same instants.
- **L6's list rhythm:** the four stakes land as four beats
  (reads / writes / pay / hold at once), each tile lighting on
  its beat (C6) — a list is delivered at tile pace, not prose
  pace.
- **L3's comma joints** are breath points inside the
  definition's single breath-group; the line is one sentence
  performed as one thought, with the cut happening on screen,
  not in the voice.
- All other lines are delivered as single statements at the
  clone's natural pace — tempo is never forced beyond the fit
  standard's arithmetic (phase 6's fit table: every line fits
  at atempo 1.000 by construction of this map: each window =
  trimmed duration + its planned gap, and every gap ≥ 0.50 s
  exceeds the standard's 0.15 s guard + margin).

## Locking rule

Absolute starts are computed at the audio phase from the
measured, trimmed takes: start(L1) = 2.00; start(Ln+1) =
start(Ln) + trimmed_duration(Ln) + gap(Ln→Ln+1). The locked
starts are recorded in `audio/audio.json` (phase 6) and in the
scene's PLAN (`scene/scene.json`, phase 4 — the scene is
authored against this same map, its word entries following the
media clock of the assembled programme). The music bed is
continuous throughout — pauses are narration events, never bed
cuts (the owner's standing rule).
