# WD-02 — delivery record + pause map, ITERATION 3 (phase 14; starts locked at the audio phase)

Delivery is the second stage of the two-stage transcript
model: the content settled in `transcript/transcript.md`; this
file decides how it is timed and paused. **Iteration 3 changes
no gap size and no delivery decision**: the phase-13
architecture map condemned two joints' LOGIC (J5's missing
hinge; the ending's recall coverage) and no joint's TIMING.
Iteration 2's map therefore stands entire — every joint keeps
its gap and its function; the absolute starts after L7 shift
because L7's and L12's takes measure longer, and the starts
below are recomputed from the measured takes under the locking
rule. The music bed is continuous throughout — pauses are
narration events, never bed cuts (the owner's standing rule).

## The gap plan (unchanged from iteration 2) and the locked starts

| Joint | Gap | Function (carried) | Line start (locked) |
|---|---|---|---|
| lead-in (bed only) | L1 starts 0.40 s | Settle before the misconception. | L1 0.400 |
| L1 → L2 | **0.90 s — SUSPENSION** | The viewer-think beat before the correction. | L2 4.964 |
| L2 → L3 | 0.60 s | Claim → concrete case. | L3 9.299 |
| L3 → L4 | 0.45 s | Inside the performed example — the tightest joint. | L4 14.168 |
| L4 → L5 | 0.70 s | Example → mechanism widen. | L5 19.994 |
| L5 → L7 | 0.70 s | Mechanism → the gathering: in v4 the hinge sentence now OPENS L7, so this joint delivers the viewer to the claim ("Nothing you steer is lost") before the machinery — the gap's size was already the merged joint's size in iteration 2; its function completes. | L7 28.589 |
| L7 → L8 | 0.55 s | Chain → extraction: one instrument, picked up and turned. | L8 37.379 |
| L8 → L9 | 0.70 s | Extraction → naming: the aspects land before the name. | L9 45.698 |
| L9 → L10 | 0.55 s | Naming → use, at working pace. | L10 52.248 |
| L10 → L11 | 0.60 s | Use → the vista: a breath sized for the scale change. | L11 60.608 |
| L11 → L12 | **1.00 s — DESIGNED SILENCE** | Pre-payoff: the vista settles; then the verdict — now carrying the recall clause — restates. | L12 68.677 |
| tail (after L12) | 2.00 s | Payoff held; the bridge card (the Direction plug) appears over bed only. | total 78.588 |

Measured on the assembled voice track (phase 14 audio record):
every designed gap survives whole — speech-free gaps
0.401 / 0.986 / 0.679 / 0.451 / 0.741 / 0.722 / 0.610 / 0.708 /
0.579 / 0.642 / 1.001 / 2.003 s against the plan above (the
L7→L8 joint measures 0.610 speech-free against 0.55 designed —
the new take's tail breath, inside the family's measured
behavior from iteration 2); first-phrase onset +1 ms.

## Within-line delivery decisions (iteration 3's deltas only)

- **L7's hinge beat (NEW):** the line now opens with a full
  stop after "lost." — a complete sentence, given its own
  weight before the mechanism sentence begins ("As the session
  runs…"). The take itself carries the sentence break (four
  speech segments measured: hinge / chain clause / fold
  clause / tail); no editorial pause was inserted — the
  delivery is the take's own, as with every line. The two fold
  beats inside the mechanism sentence are iteration 2's,
  carried (the scene's fold events fire on "folds" and on the
  line's tail, re-anchored to the new take's word times at
  phase 15).
- **L12's recall clause (NEW):** the clause rides the payoff's
  existing fall — "…, gathered into one mega prompt." is
  delivered inside the verdict's cadence, not as a tag after
  it: the take's segmentation shows the line as one arc (five
  segments, no sentence break before "gathered"). The designed
  silence before the line and the 2.00 s tail after it are
  unchanged.
- All other within-line decisions are iteration 2's, carried
  (L2's two beats; L4's fragments; L5's em-dash breath points;
  L8's three level list beats; L9's colon; L10's colon verdict;
  L11's semicolon + em-dash).

## Locking rule

Unchanged from iterations 1–2: absolute starts are computed
at the audio phase from the measured, trimmed takes:
start(L1) = 0.40; start(Ln+1) = start(Ln) +
trimmed_duration(Ln) + gap(Ln→Ln+1). Locked starts are
recorded in `audio/audio.json` (phase 14) and in the scene's
PLAN (`scene/scene.json`, phase 15 — the scene is authored
against this same map).
