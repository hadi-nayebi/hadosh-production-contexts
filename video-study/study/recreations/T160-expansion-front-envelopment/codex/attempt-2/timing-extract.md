# Neutral timing extract — T160 expansion-front envelopment (scoring packet element)

## Specimen observations
Source frames: five frames extracted from the specimen segment at one-second intervals, stored as census/f447.jpg, census/f449.jpg, census/f452.jpg, census/f453.jpg, census/f455.jpg in the recreation Cycle 025 (Wave 22) run directory (sha256 prefixes: f447 02aa08a8 · f449 93f84040 · f452 4b21b26d · f453 87ff2a99 · f455 fbf2a132). Segment: 446–456 s of the source video; the segment file is an 11.000 s cut spanning 445.5–456.5 s (1920×1080).
Observed frame states (viewed directly; frontier positions measured by a colour-predicate pixel scan, gold territory R>150 G>100 B<120 at x>1300 frame px, purple territory B>170, 70<R<180, G<100 at x<600 frame px; frontier = per-row first matching pixel, averaged over rows):
- 447 s frame: a lone marked planet (magenta disc, green dashed ring, pin marker) in a starfield; no territory colours detected anywhere in the scanned regions.
- 449 s frame: same composition; no territory colours detected.
- 452 s frame: gold territory present at the right frame edge across the full height, wavy frontier; measured mean frontier 1854.8 frame px (per-row range 1784–1912). No purple territory detected.
- 453 s frame: gold territory advanced; measured mean frontier 1736.7 frame px (per-row range 1656–1824). No purple territory detected.
- 455 s frame: both territories present (purple from frame left, gold from frame right), planet between them, with a wide unclaimed region between the frontiers; the planet renders smaller in this frame than in the 447–453 s frames (framing differs).

## Time mapping
Window start 446 s = 0 ms in the recreation's cycle; a frame at video second N maps to (N − 446) × 1000 ms: 447 s → 1000 ms · 449 s → 3000 ms · 452 s → 6000 ms · 453 s → 7000 ms · 455 s → 9000 ms. The recreation cycle is 10000 ms. (A separate page-sync mapping used by the side-by-side comparison page is not part of this schedule basis.)

## Measurement limits
- Frames are one second apart: any onset is bracketed only to within the interval between the last absent frame and the first present frame.
- Frontier positions carry JPEG/predicate tolerance of roughly ±4 frame px.
- Frame-to-stage mapping (1920 frame px → 720 stage px, factor 0.375) is applicable only while framing is unchanged; the 455 s frame's framing differs (planet rendered smaller), so its pixel extents do not transfer to the recreation's fixed stage. That frame establishes presence of both territories, their left/right order around the planet, and a remaining gap — not a completion state or a gap size on the fixed stage.
- Between the 453 s and 455 s frames there is no observation of either front's position in unchanged framing; the purple front has no in-growth observation at all (absent at 453 s, present at 455 s in changed framing).
- The gold front's measured displacement between the 452 s and 453 s frames is 118.1 frame px in 1000 ms (= 44.2 stage px per 1000 ms at the 0.375 factor).

## Current-source observations
State-function probes of the recreation source in this packet (progress = growth progress of the named front; frontier = mean frontier position in stage px, stage 720 wide; the right front's end position is 415 and the left front's is 305 at full progress):
- 1000 ms: left progress 0 · right progress 0.
- 3000 ms: left progress 0 · right progress 0.
- 6000 ms: left progress 0 · right progress 0.0801, mean frontier 695.600.
- 7000 ms: left progress 0 · right progress 0.2725, mean frontier 636.978.
- 9000 ms: left progress 1 · right progress 1 · distance between mean frontiers 110.656.
- 9500 ms: identical frontier state to 9000 ms.
- Schedule as built (also in the source): left front start 7000 ms, duration 2000 ms, linear progress; right front start 4816 ms, duration 4184 ms, progress exponent 2; both reach full progress at 9000 ms; cycle 10000 ms.
