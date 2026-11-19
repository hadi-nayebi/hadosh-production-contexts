# T43 — Epistemic status labeling · build record (Cycle 008 Wave 6, attempt 1)

Artifact dir: `hidden_files/study/recreations/T43-epistemic-status-labeling/`
Segment: `segment.mp4` — cut 1130–1144 s (18:50–19:04) from Packet-2 source, re-encoded h264/aac, ffprobe: duration **14.000 s**, 1920×1080, 30 fps, 1,060,973 bytes.
recreation.html sha256 (final, binding all five Codex returns): **f9b550d2065fb9be921f20a00a593328224bb03961d60addaf474ee19148d168**

## §1 Observe
Mechanics (digest T18, Packet 2 — Infinite Physics, YouTube Rkb3IG46sQo): uncertainty is tagged at three levels, in narration wording AND drawn onto the artwork itself (measured / inferred / speculative). Specimen tags: **HYPOTHETICAL · SCHEMATIC POTENTIAL · STYLIZED, NOT A LIKENESS · NOT TO SCALE**. Narration anchors: "leading explanation, not a closed case" (16:04); "This is where solid science ends and speculation begins" (18:52). At ~19:00 the screen physically splits **SOLID SCIENCE | SPECULATION** across a dashed line.
Frames viewed firsthand by the builder this run:
- `ev/t872.jpg` (14:32): headline "The inflaton field", purple pill tag "HYPOTHETICAL" attached to the artwork itself (the potential curve), small print "SCHEMATIC POTENTIAL" bottom-right. The tag sits ON the object it qualifies — it is part of the artwork, not a caption bar.
- `ev/t1142.jpg` (19:02): dashed vertical divider; left green pill "SOLID SCIENCE" over a rounded panel listing settled items ("Conservation · expansion · CMB · inflation's successes"); right purple pill "SPECULATION" over a wave-through-barrier object and a cyan provenance pill "1982 · VILENKIN · QUANTUM TUNNELING".
Sub-beats: (a) artwork holds while status tags attach to it one by one; (b) the epistemic border is drawn — divider appears; (c) two status panels populate, each with its own pill, content and provenance.
Variables: tag vocabulary per status level · tag colors · tag placement (on-object / panel / split) · split ratio + divider style · left/right panel content · artwork object · entrance timing of divider and tags · palette · typography.
Consumer: status-tag overlay system for all DLC assembler containers (Academy form: proven / shown / claimed).

## §2 Plan
### CONFIG parameter table (every variable = a named key; specimen value = default)
| Key | Specimen default | Swap role |
|---|---|---|
| `durationMs` | 14000 | timeline length |
| `checkpoints.*` | artworkIn 0 · titleIn 400 · hypoTag 1600 · schematicTag 3200 · stylizedTag 4800 · scaleTag 6200 · splitStart 8200 · dividerIn 8600 · solidIn 9600 · specIn 10400 · provenanceIn 11600 | all entrances |
| `artworkTags[]` | HYPOTHETICAL (pill, purple) · SCHEMATIC POTENTIAL (small print) · STYLIZED, NOT A LIKENESS (pill, cyan) · NOT TO SCALE (pill, yellow); each with bg/fg/xPct/yPct/kind | vocabulary + placement per status level |
| `artwork.*` | title "The inflaton field", subtitle, SVG area/curve paths, axis geometry + stroke widths, axis label | the object tags attach to |
| `split.ratioPct / dividerWidthPx` | 50 / 3 (dashed, palette.divider) | split geometry |
| `split.left.*` | pill SOLID SCIENCE (green), panel items (settled list) | solid panel |
| `split.right.*` | pill SPECULATION (purple), wave path + barrier rect, provenance pill text/colors | speculation panel |
| `palette.*` | bg #0d0620 · bg2 #2a1052 · solid #4dffb8 · spec/hypo #b79cff · cyan #5ee7f2 · yellow #ffd94d · curve #8b6fe8/#ffd94d | all colors |
| `typography.*` | title 60 · all tags/pills/list/small 30 (px at 960 ref) | legibility |
| `fadeMs/tagFadeMs/dividerDrawMs`, gradient, aspect, radii, padding, weights, line-heights | 600/500/900 etc. | motion + shaping |

**Timing uncertainty — LABELED ALLOCATION MODEL:** only anchor frames are timed (t872: artwork + HYPOTHETICAL + SCHEMATIC tags present by 14:32, outside the segment; narration split line 18:52; t1142: split complete by 19:02 = 12 s into the segment). Intermediate tag checkpoints (1600–6200 ms) are an ALLOCATION across the segment's first phase, uncertainty ±1500 ms; splitStart 8200 ms is allocated between the 18:52 narration line and the 19:02 completed-split frame, uncertainty ±800 ms. These are model values in CONFIG data, never measured fact.

**Construction choice:** DOM/CSS/SVG — code-drawn potential-curve artwork (SVG paths from CONFIG) acquiring CONFIG status tags at CONFIG placements, ending in the split state (divider draws in via scaleY, two CONFIG panels). Rejected: canvas particle field (no field mechanic in this technique; DOM text is crisper for tags) · CSS keyframes (timings would leave CONFIG) · traced specimen frame (refusal-class, §6.1).

**Execute checklist:** segment cut + ffprobe ☐ · recreation.html CONFIG-driven ☐ · comparison.html synced controls ☐.
**Verify checklist:** swap test (vocabulary + panel content + 1 timing + 1 palette) · purity grep + asset inventory · config-census · checkpoint postconditions · measured-fit at 360 px · node --check · five-lens Codex wave.
**Failure points priced:** phone-width pill overflow (provenance pill wraps by CONFIG width) · config leaks (SVG axis geometry — cured into CONFIG during self-verify) · checkpoint incoherence · render-proof limitation (PIXEL-UNVERIFIED, below).

## §3 Execute record
Built per Plan: segment cut (14.000 s) · recreation.html (DOM/CSS/SVG, one CONFIG, rAF clock + `__T43.setTime` slave API) · comparison.html (video currentTime slaves the recreation; one Play/Pause + Restart set; stacks under 640 px). Self-verify found and cured two defects before Codex: (1) typography failed the ~11 px-at-360 floor (pill 7.5 px) → all subject typography raised to 30 px at 960 ref (= 11.25 px at 360); (2) shaping literals outside CONFIG (SVG axis geometry, stroke widths, gradient angle, font weights, line-heights, paddings) → moved into CONFIG.

## §5 Self-verify (legs 1–3, BEFORE Codex) — all recorded from harness runs this run
- **(a) Swap test — PASS (logic level).** Scratch copy `/tmp/t43swap/recreation.html` with exact altered values: HYPOTHETICAL→CLAIMED · SCHEMATIC POTENTIAL→SHOWN SKETCH · STYLIZED, NOT A LIKENESS→PROVEN DIAGRAM · SOLID SCIENCE→PROVEN · SPECULATION→CLAIMED · left item→"Atoms · charge · spectra ·" · provenance→"2026 · STUDIO · BENCH TEST" · hypoTag 1600→2400 ms · solid pill #4dffb8→#ffb84d · hypo pill #b79cff→#7fd0ff. Node harness: all 7 checks true — vocabulary/panel/timing/palette changes take effect purely from CONFIG, checkpoints remain ordered, tag/list rendering loops read CONFIG. Technique (tags attaching to artwork, then split) still reads because every rendered word/color/list item is CONFIG-fed.
- **(b) Purity — PASS.** Grep of recreation.html for `segment.mp4`, `source.mp4`, `Rkb3IG46sQo`, `t1142`, `t872`, `<video`, `<img`: **0 hits each**. Asset inventory: recreation.html loads NO external assets (no src/href to media); all visuals are code-drawn SVG/DOM from CONFIG. segment.mp4 appears only in comparison.html, labeled ORIGINAL.
- **(c) Config-census — PASS with 3 explained non-shaping hits.** Hex outside CONFIG: 0 · rgba(): 0 · duration literals: 0 · unapplied CONFIG keys: 0. Remaining numeric literals outside CONFIG: `8` (charset utf-8), `2000` (SVG namespace URI year), and structural 0/1/100 in JS math — identifiers, not shaping values.
- **(d) Checkpoint postconditions — PASS.** 11 checkpoints ordered, strictly increasing (0 < 400 < 1600 < 3200 < 4800 < 6200 < 8200 < 8600 < 9600 < 10400 < 11600), all within durationMs 14000, all finite.
- **(e) Measured-fit at 360 px — harness-measured, formula-bounded.** Font scale at 360 px stage: every subject text class = **11.25 px** (floor ~11 px — PASS). Ink estimates (0.62 × fontPx × chars, bold-cap bound): HYPOTHETICAL 83.7 px ≤ 345.6 avail · STYLIZED, NOT A LIKENESS 167.4 ≤ 345.6 · NOT TO SCALE 83.7 ≤ 144 · SOLID SCIENCE 90.7 ≤ 180 · SPECULATION 76.7 ≤ 180 · provenance 244.1 > 180 single-line → cured by CONFIG-width wrapping pill (white-space normal, width = panelWPct) so it wraps inside its panel instead of overflowing.
- **(f) Syntax — PASS.** `node --check` on both inline scripts (recreation + comparison): clean.
- **Limitation — PIXEL-UNVERIFIED:** headless Chrome (`/opt/meta-chromium/chrome`) refuses startup in this seat ("Hatch WebGL domain policy is required for browser startup"), so no pixel render, screenshot, or live DOM measurement was exercisable. DOM-level fit is harness-computed as above; the comparison page is the render surface. Printed honestly, not claimed.

Pre-wave Jev / phase guards: BUILT-NOT-FIRED / UNBUILT per guards.md — SKIPPED-WITH-REASON (not armed executables in this seat; the five-lens wave is the armed deliverable gate).
