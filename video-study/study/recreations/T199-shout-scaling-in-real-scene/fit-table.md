# fit-table — T199 · attempt 1 (guard-measured-fit) — recreation Cycle 036 Wave 33, RE-FILED Cycle 037 Wave 34 completion (A12.3)

Build: recreation.html SHA-256 1cde8d927e67215821d834b6e08bcd31e14a1d42cae596186ed2ce5cd19d14a9 (14,978 B; completion build — CONFIG gained the `censusAnchors` table for cure 1; rendering geometry/palette unchanged from edad0b81…). Prior filing (Wave 33) measured the edad0b81… build; this filing re-measures the final build.
Method: POST-FIT MEASUREMENT of rendered geometry, A12.2 form (ii) — every row rendered with PIL/ImageFont in **Liberation Sans Bold** (the CONFIG fontStack's named measurable stand-in; Roboto Flex is NOT installed in this seat — instrument limit printed), supersampled ×4; ink width/height are the rendered glyphs' actual ink bounding boxes. Base size comes from the build's own rule (stageH × baseSizePctOfStage 5.6%): 360×202.5 stage → 11.34 px; 1920×1080 stage → 60.48 px. Peak rows are measured AT PEAK STATE (fontPx = base × peakScale, envelope value 1) — this item's binding fit rows. Slot width = the word's measured BASE ink width (the build's reserved-slot rule, canvas-measured in-page; PIL values here are the same quantity on the stand-in font). Instrument: /tmp/t199-fit2.py (PIL), run on the final build.
**Overlap form (completion cure 3):** overlap rows are INTERSECTIONS computed from positioned bounds after layout — slot positions accumulate base ink widths + the CONFIG gap (`wordGapEm 0.28` × basePx = 3.175 px at 360; 16.934 px at 1920); a peaked word's ink is centred on its slot (peakBounds = slot centre ± peakInk/2); each neighbour's ink bounds are its slot bounds; INTERSECTION = the overlap length of peakBounds with the neighbour's ink bounds, printed in px and as % of the neighbour's ink width. The Wave-33 overhang-ratio rows are SUPERSEDED by this form (an overhang ratio can exceed the neighbour's width; an intersection cannot).

## 360 px stage (reference stage; base 11.34 px; gap 3.175 px)
| element | container | measured ink W (px) | container bound (px) | fitted size (px) | ink H (px) | positioned bounds / intersections | flag |
|---|---|---|---|---|---|---|---|
| L0 line base "GUMP!" | stage line, bound 96% stage W | 36.2 | 345.6 | 11.34 | 7.75 | margin 309.3 | |
| L0 PEAK GUMP! @800 (1.35×) | slot 36.2 [0.0,36.2] | 49.0 | — | 15.31 | 11.00 | peakBounds [−6.4,42.6]; no neighbours | |
| L1 line base (7 words) | stage line | 206.6 | 345.6 | 11.34 | ≤10.00 per-word max | margin 139.0 | |
| L1 PEAK your @1900 (1.50×) | slot 24.2 [39.4,63.7] | 36.8 | — | 17.01 | 12.75 | peakBounds [33.2,69.9] · ∩ What's [0.0,36.2] = 3.1 px = 8.5% · ∩ sole [66.9,88.9] = 3.1 px = 14.0% (≤40%) | |
| L1 PEAK purpose @2900 (1.50×) | slot 43.5 [92.0,135.5] | 65.5 | — | 17.01 | 12.75 | peakBounds [81.0,146.5] · ∩ sole [66.9,88.9] = 7.8 px = 35.6% (≤40%) · ∩ in [138.7,147.5] = 7.8 px = 89.4% (>40%) | HIT-OV (in only) |
| L1 PEAK this @3500 (1.60×) | slot 19.8 [150.6,170.4] | 31.8 | — | 18.14 | 13.50 | peakBounds [144.6,176.4] · ∩ in [138.7,147.5] = 2.8 px = 32.3% · ∩ army? [173.6,206.6] = 2.8 px = 8.6% (≤40%) | |
| L2 line base (8 words) | stage line | 221.2 | 345.6 | 11.34 | ≤10.00 per-word max | margin 124.4 | |
| L2 PEAK Drill @6000 (1.45×) | slot 20.5 [147.1,167.6] | 30.0 | — | 16.44 | 12.00 | peakBounds [142.3,172.3] · ∩ me, [125.6,143.9] = 1.6 px = 8.6% · ∩ Sergeant. [170.7,221.2] = 1.6 px = 3.1% (≤40%) | |
| L3 line base (2 words) | stage line | 97.2 | 345.6 | 11.34 | ≤10.00 per-word max | margin 248.4 | |
| L3 PEAK Goddamnit @7500 (2.00×) | slot 59.0 [0.0,59.0] | 119.2 | — | 22.68 | 16.75 | peakBounds [−30.1,89.1] · ∩ Gump! [62.2,97.2] = 26.9 px = 77.0% (>40%) | HIT-OV |
| L3 PEAK Gump! @8000 (1.50×) | slot 35.0 [62.2,97.2] | 52.8 | — | 17.01 | 15.50 | peakBounds [53.3,106.1] · ∩ Goddamnit [0.0,59.0] = 5.7 px = 9.7% (≤40%) | |

## 1920 px stage (design stage; base 60.48 px; gap 16.934 px) — direct per-state measurements from the same instrument run (raw output below)
L0 base 193.8 / bound 1843.2 · L1 base 1102.6 · L2 base 1178.8 · L3 base 520.4 — all inside bound. Peak intersections at 1920: your 15.4 px = 8.0% / 13.2% OK · purpose ∩ sole 41.2 px = 35.1% OK, ∩ in 41.2 px = 89.5% HIT-OV · this 14.3 px = 31.1% / 8.1% OK · Drill 7.7 px = 7.9% / 2.8% OK · Goddamnit ∩ Gump! 141.1 px = 75.4% HIT-OV · Gump! ∩ Goddamnit 29.8 px = 9.4% OK. Peak ink heights 57.75–89.00 px.

## CP11 rendered band measurement — JOINED receipt stands in build-record.md (completion section, cure 4)
The CP11 receipt is filed as ONE joined block in build-record.md's completion section: a single instrument run printing the evaluated CONFIG expression `lines[3].words[0].onsetMs+attackMs = 7300+200 = 7500`, the state sampled at that instant, and the band samples for that state together. Its values agree with this leg's prior PIL computation: worst band luminance 0.0164 ≤ 0.35 (ceiling = CONFIG scenePlate.plateMaxLuminance) · worst contrast 7.39 ≥ 4.5 (speakerB over the column backdrop #454d57 → band #1f2327). Per-backdrop rows: #3a4149→#1a1d21 lum 0.0121, contrasts 15.11/10.19/7.90 · #2b3036→#131618 lum 0.0078, 16.23/10.94/8.49 · #1d2126→#0d0f11 lum 0.0047, 17.15/11.57/8.97 · #454d57→#1f2327 lum 0.0164, 14.13/9.52/7.39.

## HIT list (2 HIT classes, dispositions printed)
- **HIT-OV (peak intersection > peakOverlapMaxPct 40) ×2 neighbour intersections** (purpose→"in" 89.4% at 360 / 89.5% at 1920 · Goddamnit→"Gump!" 77.0% / 75.4%): positioned intersections computed from peak + neighbour ink bounds after layout (cure-3 form). The intersections the overhang form overstated are corrected in the open: purpose→sole is 35.6% (was printed 50.0% as an overhang ratio) and this→in is 32.3% (was 67.1%) — both now under the bound; the two remaining OVER intersections are concentrated on the narrow neighbour "in" (8.8 px ink — a 7.8 px intersection covers most of it) and on the shout pair. DISPOSITION — carried into the wave printed: the overlap is the technique's OBSERVED form (census frames + the Execute motion montage show purpose/this glyphs crossing both neighbours and Goddamnit crossing into "Gump!" while it stays white and legible at its onset edge); the peaked word paints above neighbours (z-index while env>0) exactly as the film's peak glyph occludes. The 40% figure was a Plan estimate, not a source measurement; the intersections themselves are specimen-true and do not move (Plan failure point 1: "the ratio is the source's"). Neighbour words remain fully rendered beneath; no neighbour is reflowed or wrapped (reserved slots).
- **HIT-FLOOR (guard check 3 reading):** base-state ink height measures ≤10.00 px per word at the 360 stage (line-aggregate 7.75–8.25 px in the Wave-33 run), below the guard's ~11 px ink-height floor, while the Plan's own binding floor — `minBasePxAt360` = 11 px FONT size — passes (11.34 ≥ 11). DISPOSITION — carried printed: the two floors are different quantities (font px vs glyph ink height; Liberation Bold cap height ≈0.73 em). Every PEAK state (the technique subject) measures 11.00–16.75 px ink height, above the floor; base words are the pre-light/supporting state. Raising base size further would depart from the amended Plan's priced 5.6% (plan-review finding 5's cure) — not done unilaterally.
- **Weight evidence limit (not a HIT, a printed limit):** this seat carries only static Liberation faces (Regular/Bold); Roboto Flex is not installed, so intermediate `wght` values cannot be rendered/measured here — the continuous-weight claim prints **UNVERIFIED on this stack** (Plan's priced risk, construction section). The build sets `font-variation-settings 'wght'` from CONFIG every frame; on a variable-font stack the axis is live.

## RAW INSTRUMENT OUTPUT VERBATIM (completion run — /tmp/t199-fit2.py on the final build 1cde8d92…)
```
== STAGE 360x202.5 basePx=11.34 gapPx=3.175 bound=345.6 ==
L0 BASE lineInk=36.2px bound=345.6 margin=309.3 baseInkH=7.75 slots=['36.2']
L0 PEAK "GUMP!" scale=1.35 fontPx=15.3 inkW=49.0 inkH=11.00 slotW=36.2 slotBounds=[0.0,36.2] peakBounds=[-6.4,42.6]
L1 BASE lineInk=206.6px bound=345.6 margin=139.0 baseInkH=10.00 slots=['36.2', '24.2', '22.0', '43.5', '8.8', '19.8', '33.0']
L1 PEAK "your" scale=1.5 fontPx=17.0 inkW=36.8 inkH=12.75 slotW=24.2 slotBounds=[39.4,63.7] peakBounds=[33.2,69.9] | neighbour[What's] inkBounds=[0.0,36.2] inkW=36.2 INTERSECTION=3.1px = 8.5% of neighbour ink (allowed 40%) OK | neighbour[sole] inkBounds=[66.9,88.9] inkW=22.0 INTERSECTION=3.1px = 14.0% of neighbour ink (allowed 40%) OK
L1 PEAK "purpose" scale=1.5 fontPx=17.0 inkW=65.5 inkH=12.75 slotW=43.5 slotBounds=[92.0,135.5] peakBounds=[81.0,146.5] | neighbour[sole] inkBounds=[66.9,88.9] inkW=22.0 INTERSECTION=7.8px = 35.6% of neighbour ink (allowed 40%) OK | neighbour[in] inkBounds=[138.7,147.5] inkW=8.8 INTERSECTION=7.8px = 89.4% of neighbour ink (allowed 40%) OVER
L1 PEAK "this" scale=1.6 fontPx=18.1 inkW=31.8 inkH=13.50 slotW=19.8 slotBounds=[150.6,170.4] peakBounds=[144.6,176.4] | neighbour[in] inkBounds=[138.7,147.5] inkW=8.8 INTERSECTION=2.8px = 32.3% of neighbour ink (allowed 40%) OK | neighbour[army?] inkBounds=[173.6,206.6] inkW=33.0 INTERSECTION=2.8px = 8.6% of neighbour ink (allowed 40%) OK
L2 BASE lineInk=221.2px bound=345.6 margin=124.4 baseInkH=10.00 slots=['12.5', '13.0', '49.0', '19.5', '15.8', '18.2', '20.5', '50.5']
L2 PEAK "Drill" scale=1.45 fontPx=16.4 inkW=30.0 inkH=12.00 slotW=20.5 slotBounds=[147.1,167.6] peakBounds=[142.3,172.3] | neighbour[me,] inkBounds=[125.6,143.9] inkW=18.2 INTERSECTION=1.6px = 8.6% of neighbour ink (allowed 40%) OK | neighbour[Sergeant.] inkBounds=[170.7,221.2] inkW=50.5 INTERSECTION=1.6px = 3.1% of neighbour ink (allowed 40%) OK
L3 BASE lineInk=97.2px bound=345.6 margin=248.4 baseInkH=10.00 slots=['59.0', '35.0']
L3 PEAK "Goddamnit" scale=2.0 fontPx=22.7 inkW=119.2 inkH=16.75 slotW=59.0 slotBounds=[0.0,59.0] peakBounds=[-30.1,89.1] | neighbour[Gump!] inkBounds=[62.2,97.2] inkW=35.0 INTERSECTION=26.9px = 77.0% of neighbour ink (allowed 40%) OVER
L3 PEAK "Gump!" scale=1.5 fontPx=17.0 inkW=52.8 inkH=15.50 slotW=35.0 slotBounds=[62.2,97.2] peakBounds=[53.3,106.1] | neighbour[Goddamnit] inkBounds=[0.0,59.0] inkW=59.0 INTERSECTION=5.7px = 9.7% of neighbour ink (allowed 40%) OK
-- SWAP GEOMETRY stage 360 (base 11.34px, gap 3.175px) --
L0s SWAP lineInk=31.2px bound=345.6 inside=True slots=['31.2']
L1s SWAP lineInk=230.7px bound=345.6 inside=True slots=['24.0', '25.2', '24.2', '32.2', '34.5', '8.8', '19.8', '39.8']
L2s SWAP lineInk=256.8px bound=345.6 inside=True slots=['16.5', '32.8', '16.5', '47.8', '36.5', '37.2', '50.5']
L3s SWAP lineInk=113.8px bound=345.6 inside=True slots=['26.2', '30.0', '8.5', '39.5']
== STAGE 1920x1080 basePx=60.48 gapPx=16.934 bound=1843.2 ==
L0 BASE lineInk=193.8px bound=1843.2 margin=1649.4 baseInkH=42.75 slots=['193.8']
L0 PEAK "GUMP!" scale=1.35 fontPx=81.6 inkW=261.5 inkH=57.75 slotW=193.8 slotBounds=[0.0,193.8] peakBounds=[-33.9,227.6]
L1 BASE lineInk=1102.6px bound=1843.2 margin=740.6 baseInkH=54.75 slots=['193.5', '130.0', '117.2', '233.0', '46.0', '104.8', '176.5']
L1 PEAK "your" scale=1.5 fontPx=90.7 inkW=194.8 inkH=67.75 slotW=130.0 slotBounds=[210.4,340.4] peakBounds=[178.1,372.8] | neighbour[What's] inkBounds=[0.0,193.5] inkW=193.5 INTERSECTION=15.4px = 8.0% of neighbour ink (allowed 40%) OK | neighbour[sole] inkBounds=[357.4,474.6] inkW=117.2 INTERSECTION=15.4px = 13.2% of neighbour ink (allowed 40%) OK
L1 PEAK "purpose" scale=1.5 fontPx=90.7 inkW=349.2 inkH=67.75 slotW=233.0 slotBounds=[491.6,724.6] peakBounds=[433.4,782.7] | neighbour[sole] inkBounds=[357.4,474.6] inkW=117.2 INTERSECTION=41.2px = 35.1% of neighbour ink (allowed 40%) OK | neighbour[in] inkBounds=[741.5,787.5] inkW=46.0 INTERSECTION=41.2px = 89.5% of neighbour ink (allowed 40%) OVER
L1 PEAK "this" scale=1.6 fontPx=96.8 inkW=167.2 inkH=71.00 slotW=104.8 slotBounds=[804.4,909.2] peakBounds=[773.2,940.4] | neighbour[in] inkBounds=[741.5,787.5] inkW=46.0 INTERSECTION=14.3px = 31.1% of neighbour ink (allowed 40%) OK | neighbour[army?] inkBounds=[926.1,1102.6] inkW=176.5 INTERSECTION=14.3px = 8.1% of neighbour ink (allowed 40%) OK
L2 BASE lineInk=1178.8px bound=1843.2 margin=664.4 baseInkH=55.00 slots=['66.8', '69.5', '261.8', '103.2', '82.8', '96.8', '109.5', '270.0']
L2 PEAK "Drill" scale=1.45 fontPx=87.7 inkW=158.8 inkH=63.50 slotW=109.5 slotBounds=[782.4,891.9] peakBounds=[757.7,916.5] | neighbour[me,] inkBounds=[668.7,765.4] inkW=96.8 INTERSECTION=7.7px = 7.9% of neighbour ink (allowed 40%) OK | neighbour[Sergeant.] inkBounds=[908.8,1178.8] inkW=270.0 INTERSECTION=7.7px = 2.8% of neighbour ink (allowed 40%) OK
L3 BASE lineInk=520.4px bound=1843.2 margin=1322.8 baseInkH=54.75 slots=['316.5', '187.0']
L3 PEAK "Goddamnit" scale=2.0 fontPx=121.0 inkW=632.5 inkH=89.00 slotW=316.5 slotBounds=[0.0,316.5] peakBounds=[-158.0,474.5] | neighbour[Gump!] inkBounds=[333.4,520.4] inkW=187.0 INTERSECTION=141.1px = 75.4% of neighbour ink (allowed 40%) OVER
L3 PEAK "Gump!" scale=1.5 fontPx=90.7 inkW=280.5 inkH=82.00 slotW=187.0 slotBounds=[333.4,520.4] peakBounds=[286.7,567.2] | neighbour[Goddamnit] inkBounds=[0.0,316.5] inkW=316.5 INTERSECTION=29.8px = 9.4% of neighbour ink (allowed 40%) OK
-- SWAP GEOMETRY stage 1920 (base 60.48px, gap 16.934px) --
L0s SWAP lineInk=167.2px bound=1843.2 inside=True slots=['167.2']
L1s SWAP lineInk=1230.8px bound=1843.2 inside=True slots=['128.8', '133.8', '130.0', '172.2', '183.8', '46.0', '104.8', '213.0']
L2s SWAP lineInk=1370.6px bound=1843.2 inside=True slots=['87.8', '174.0', '88.2', '255.2', '194.8', '199.0', '270.0']
L3s SWAP lineInk=606.8px bound=1843.2 inside=True slots=['140.2', '159.0', '46.0', '210.8']
FONTS: LiberationSans-Bold at /usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf
```
