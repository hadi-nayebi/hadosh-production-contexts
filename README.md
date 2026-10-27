# PHASE 4 — VISUAL STORYTELLING: the illustrated world, performed

**Status: LANDED** (scene built to the phase-2 prescription; frames viewed by
the building agent's own eyes; the audio-locked final scene lands at phase 6
from the same generator).

## What this phase built

One self-contained HTML file — `scene/index.html` (≈7.0 MB with the final
timings) — holding every visual decision of the piece in six compartments
(phase 2's decomposition): C0 the plates, C1 the actors, C2 the performed
transformations, C3 the word animation, C4 the labels, C5 the cards + bug,
plus the editor layer. `scene/scene.json` is the element-by-element record
(66 elements, each with its compartment, its reason, and its moment). The
audio programme is NOT in this file (the lane embeds audio at phase 6 in its
published-HTML form; this branch's phase 6 carries the programme beside the
locked scene — the deviation, if any, is the phase-6 record's to state).

## The plate form — absent by construction

There is **no caption-band element anywhere in the file**: no element spans
the frame's width at the bottom carrying text across lines. Narration text
exists only as per-line word groups (`.words`), each anchored in its beat's
planned negative space (y 430–640, inside the safe rect), at most 3 words on
screen, cleared before the next phrase. Defect D1 is answered by
construction and verified on rendered frames at phase 7 (including a
bottom-band inspection of the delivered MP4).

## Performed transformations (C2) — as built

- **T-copy:** inside L5, at the copy sentence ("When the animal had
  young…"), the lion plate crossfades to the generational row — one body
  becomes three generations at the words that say it.
- **T-route:** on the water plate, 24 dots draw themselves from the calf to
  the pool across "copied by watching, and by walking it, again and again",
  then the pool ripples. The dots fade out WITH their plate (a defect caught
  in QA — dots surviving into the dusk and end-card frames — fixed and
  re-verified).
- **T-light:** a shade layer deepens across the fatal rule; the dusk plate's
  push-in HALTS across the sting — motion itself stops for "There was no
  backup."
- **T-dawn:** the finale plate (the opening light, returned) crossfades in
  for the epitaph; the title's payoff is lettered in two steps.
- **The still body (C1):** the piece's one true cutout — the spotted deer
  lying still, eyes closed — fades in as the fatal rule speaks, holds
  through the sting, leaves across the plain statement.

## Artwork — evidence, routed honestly

The scene's art is the piece's own generated artwork (the v3 generation's
plates + the still-body cutout), embedded as data URIs. Three plates carry
generation damage, and the scene answers for each on the record:

- **figure plate — NOT USED.** Its centre is smeared through. The figure
  beat is re-cast onto the generational row plate; the human figure never
  appears (the rebuild's world is the animals' — the only humans implied
  are the viewers).
- **dusk plate — zoomed ≥1.15** so its shattered foreground band stays out
  of frame; verified on QA frames.
- **water plate — centre damage** (the mother's neck dissolves, with a
  floating fragment). The scene lays the mother's soft ground-shadow over
  the junction and tightens the frame (zoom 1.06→1.12). The damage is
  muted, not erased — a plate regeneration is the real fix and stands open
  in the register (R-5) rather than being hidden.

The lane's other "cutouts" were audited and rejected as actors: the
herd/lion/row element files are rectangular multi-animal tiles, not
single-animal cutouts (viewed, recorded at phase 2's amendment) — so the
copy is performed by the generational crossfade, not by a pasted sticker.

## Type

Patrick Hand throughout — the lane's hand lettering — embedded as a
woff2 @font-face extracted from the piece's own v3 scene file (286 KB), so
the scene never depends on a network font. (First QA pass caught the
fallback serif when the font was loaded from a CDN link in the headless
renderer; the embedded face is the fix, verified on re-captured frames.)

## QA (frames viewed by the building agent)

Captured at true 1080×1920 (device-metrics override + captureBeyondViewport)
on a private Chrome port, at 18 timestamps across the piece. Defects found
and fixed in this phase: (1) route dots never cleared (survived into dusk +
end card) → windowed to their plate; (2) font fell back to serif → embedded
face; (3) word-group stacking (two groups visible at once, 5 words) → group
tails shortened to 0.12 s; (4) the EARTH ONE bug washed out on light plates
→ dark outline shadow stack; (5) water-plate damage → the shadow repair
above. The sting frame, the epitaph frame, the copy crossfade, the route
mid-draw, the opening and end cards were each viewed and pass.

## Coverage at this phase

Scaffold 10/10 (carried). Scene elements 66/66 homed. Words: the scene's
plan carries all 259 words with per-word timing slots and principal marks;
the per-word DECISION record lands at phase 5, generated from this plan so
the record and the shipped file cannot drift.
