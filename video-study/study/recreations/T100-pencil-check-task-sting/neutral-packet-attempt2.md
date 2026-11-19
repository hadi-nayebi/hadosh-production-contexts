# Neutral packet — T100 pencil-check task sting, attempt 2

## Technique facts (from segment evidence)
The technique is a textless drawn-mark sting inside a longer transitions video. Segment evidence (frames extracted from the 0–14 s comparison cut at 0.5 s steps, plus a finer 0.25 s re-observation between 3.25 s and 5.25 s):
- 3.25 s: large yellow pencil, diagonal from the top-right, tip inside a white square checkbox at centre; no tick yet.
- 3.5 s: pencil and checkbox present; a small cyan tick beginning inside the box.
- 3.75 s: box still present; cyan curved tick nearly complete; pencil at the tick's upper end.
- 4.0 s: pencil drawing a cyan curved check descending left; checkbox no longer visible.
- 4.25 s: red curved arrow with radiating red marks; no pencil, box, or tick.
- 4.5 s: red distressed curved arrow + red confetti on the indigo field; no pencil/box/tick.
- 4.75 s: red curved arrow alone.
- 5.0 s: green distressed curved arrow + green confetti; no pencil/box/tick.
- 5.25 s: green curved arrow alone.
- 5.5 s: white cursor arrow alone (a following device, outside this recreation's scope).
- 6.0 s: gradient field + cursor (transition out; outside scope).

## Three clocks
- Source technique window: 3–7 s in source coordinates.
- Comparison cut: 0–14 s (the ORIGINAL side of the comparison page).
- Recreation clock: 0–6000 ms, allocated as ENTER 800 ms + DRAW 700 ms + punctuation beat 1 650 ms + punctuation beat 2 650 ms + residual hold 3200 ms = 6000 ms, 0 ms unallocated. All recreation durations are ALLOCATION (an authored schedule), not measured durations; event ORDER, directions, colours and frame contents above are the measured claims.

## Both-bases neutral entry (required manifest item)
- Basis A — segment-length period: a 14,000 ms cycle modelled on the comparison cut's length, with the active beats allocated inside it and a 10,900 ms residual hold.
- Basis B — authored cycle (the build in front of you): a 6,000 ms authored cycle with a 3,200 ms residual hold.
- Governing observations: the segment frames show the pencil present from at or before 3.25 s, punctuation beats at about 4.5 s (red) and 5.0 s (green), and the source proceeding into cursor and transition beats by 5.5–6.0 s; no measured long static hold exists inside the technique window. The build adopts Basis B on those observations. The 6,000 ms figure is disclosed as an authored cycle, not a measured period. There is a standing disagreement over whether retaining the segment-length period (Basis A) is the more faithful choice; both bases are stated here so the schedule can be priced against either.
- Deferred source beats: the cursor beat (5.5 s) and the gradient transition-out (6.0 s) are OMITTED COVERAGE in this recreation — they belong to the following devices, and their omission is a stated scope boundary.

## Construction (what the source in front of you does)
- Single self-contained HTML file; all content values in one CONFIG object; a deep-merge override via a query parameter drives variants.
- Geometry derivation: the tick is a cubic curve whose control points are offsets from the checkbox centre, converted to an absolute path at build; the pencil's entry landing is the tick path's own start point (read from the path at run time), so ENTER and DRAW share one point by construction; the stage viewBox and field rectangle are set from CONFIG stage dimensions at build.
- Phases (exclusive, in order): ENTER (pencil slides from its configured corner to the tick start) → DRAW (pencil tip travels the curved tick path as the stroke reveals; the checkbox exits at a configured fraction of draw progress, 0.85; the tick completes, then clears at the end of DRAW) → punctuation beat 1 (red family: a curved arrow reveals by stroke draw-on while scattered confetti rectangles displace outward from a configured start fraction to their full offsets) → punctuation beat 2 (green family, same construction) → HOLD (empty indigo field; all transient marks cleared) → loop.
- Tick-clear timing specification: the tick is visible during ENTER (undrawn) and DRAW (revealing); its opacity is set to 0 in every phase after DRAW, so no tick is displayed during either punctuation beat or the hold.
- Beat elements are rebuilt at every loop boundary; no beat remnant persists into the hold or across cycles.
- Startup validation rejects, visibly (console + a dataset flag, animation not started): non-finite or non-numeric values in any numeric field, non-positive active durations, a non-integer or over-ceiling confetti count, an out-of-range box-exit fraction, and any phase total whose residual hold falls below the configured minimum (a zero residual is rejected explicitly).
- Colours (all in CONFIG): field #4148c0 · pencil #ffd94d · tick #00e5ff · checkbox #ffffff · beat 1 #ffc2c2 · beat 2 #3df063. Measured contrast ratios against the default field #4148c0: pencil 5.25:1 · tick 4.69:1 · beat 1 4.72:1 · beat 2 4.75:1 · checkbox 7.21:1. Against a dark-green variant field #173f35: pencil 8.50:1 · tick 7.59:1 · beat 1 7.64:1 · beat 2 7.70:1 · checkbox 11.67:1.
- Beat onset size: confetti rectangles are 20×6 px at a starting scale of 0.65, i.e. about 13.5×4.05 px displayed on the first visible frame; the arrow stroke is 7 px wide.
- The distressed/grunge texture visible in the source frames' arrows and confetti is not reproduced; the recreation's marks are flat geometric constructions.

## Own-check packet (check names and results on this source; logic level, node harness)
Stage checks: derived landing/viewBox/validation 7/7 · gesture continuity/curve/box-exit/tick-clear 7/7 · beat exclusivity/displacement/reveal/hold/wrap 10/10 · contrast pairs and onset dimensions 14/14.
Full suite 32/32, including: CONFIG consumption census (55 leaf keys, 0 unconsumed) · literal census (no colour literals outside CONFIG; numeric literals outside CONFIG limited to -1/0/1/2, each classified structural) · CSS declaration parse (8 declarations, all parse) · purity grep (0 hits for specimen-media patterns) · swaps: field colour, confetti count, draw duration, combined tick-path + entry-corner + pencil-shape + checkbox-layout swap with continuity, non-square stage swap (480×300) · ENTER→DRAW positional gap 0.091 px on the default path and 0.107 px on the swapped path · occlusion model over the ordered pair set (pencil-over-tick visible fraction 100% at draw p=0.5 and p=0.99 under the polygon model; checkbox is stroke-only) · validation adversarial set (non-finite, string-in-numeric, negative duration, over-ceiling count, null/absent groups, zero residual, override-path over-total) · self-start (animation schedules itself and reaches the hold unaided) · presented endpoint (hold state still presented at cycle end −1 ms) · wrap into the next cycle.
PIXEL-UNVERIFIED: no browser binary is available on this seat; all verification above is logic-level, and the comparison page is the render surface.
