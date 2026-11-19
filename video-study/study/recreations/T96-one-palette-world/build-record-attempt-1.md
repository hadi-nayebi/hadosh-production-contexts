# T96 — One-palette world · build record (attempt 1, recreation Cycle 015 Wave 13)

Artifact dir: `hidden_files/study/recreations/T96-one-palette-world/` · Queue #45 · Packet #4 (The Good Takeoff, jkDBk8QFcyY), technique P4-T23 · Segment 294–308 s.
Consumer: DLC assembler's whole-piece style layer (the palette system a production piece adopts at its Tab-0/style decision; owning lane: production/DLC via style-library consumption).
Final build: recreation.html sha256 44ff698dee7af1d1e950f86fdaf0998cde0e3d9cb65955308b372aa9707701c6 · PIXEL-UNVERIFIED (no browser binary; logic-level node harness + comparison page as render surface).

## 1. Observe gate-out
Mechanics: the entire day is drawn in ONE register — flat code-built illustration in deep blues with warm amber light sources; daytime is never bright; the SINGLE palette break is the dusk frame at the structural turn (exhibits → dinner). Evidence viewed firsthand: ev/t300.jpg (orange-peach sky, sun disc right, buildings stay BLUE under the dusk sky, HUD 2037 / 16:00) + segment frames in §3.
Variables (all CONFIG-bound): scenes[{name,clock}] · palette{sky,building,ink,amber} · breakPalette{sky,sun} · break{atScene,label,offsetMs} · sceneMs · breakMs · endHoldMs · hud{year,dayLine} · type{font} · stage{width} · intensity{lights,field,label} · geom{…} (generator geometry in CONFIG per §2b G-T96-1).
Schedule basis (A7): **segment-anchored** for the break (measured in §3); scene order is a labeled **allocation**.

## 2. Guard dispositions
- **codex-observe** (FIRST, one stream): CONFIRMED-WITH-GAPS — verbatim at codex/codex-observe.md. Gaps closed firsthand: frames viewed (ev/t300 + segment contact sheet) · segment contents measured (§3) · atScene resolved as ZERO-BASED index 2 = exhibits (RUN §2 scenes order) · sibling arithmetic recomputed (T83 453/5=90.6, T75 426/5=85.2 from filed scores.md).
- **codex-plan-review** (one stream): REVISE (advisory) — verbatim at codex/codex-plan-review.md. APPLIED: (1) ONE phase resolver phaseAt(t) returning exactly one state, half-open intervals, break offset named (break.offsetMs=0, slot start) · (2) cycle DERIVED as scenes.length×sceneMs+endHoldMs (swap → 9200 ms, harness-verified; the pinned default stays exactly 14000) · (3) predicted minimum named: reusability ≈78–82 (four scene bodies + ornament literals are the risk), motion second — priced against scene family T83 90.6 · (4) size discipline: scenes are minimal silhouettes, ornament deferred. SET ASIDE with reason: the review's claim that changing only sky+sun leaves the break a "background swap" — the measured dusk frame itself keeps buildings/lights blue under the orange sky (ev/t300 viewed firsthand); the break in the original IS sky+sun over a blue world, so the construction matches the technique; the whole-world register claim rests on every OTHER layer holding blue in all modes, which the build does. Timing reconciliation (review's required correction): the pinned §2b.4 machine compresses the segment's ~7 s warm passage into a 1200 ms break inside one slot — an intentional abstraction of a whole-film system into the 14 s window, recorded here and in scores.md; the alternative (re-basing the whole cycle on the segment's local timing) would contradict the seat-pinned phase machine.
- **jev-observe-exit / jev-plan-exit** (wave level, RUN §2b): T96 EXECUTE with G-T96-1/2/3 bound — generator geometry in CONFIG (geom) · register verified IN MOTION across the break (§3 palette sampling) · consumer line above.
- **A6 legs** (final build): fit-table.md — 0 HITs (2 cured pre-wave: labelPx/scenePx 15/13→17 for the ~11px ink floor) · config-census.md — 0 HITs (interior ornament coordinates named in the open as structural-context).
- **jev-prewave** (one stream via Codex): **FIRE-WAVE** — parameterization 0.85 · purity pre-check 0.95 · own-checks completeness 0.85 · fidelity-plan honesty 0.95; return at jev-prewave.md. Its swap-coverage note was APPLIED as the §6 sentence cure before the wave.

## 3. Segment facts + MEASURED break window (OBSERVED vs ALLOCATION) — filed BEFORE the lens wave
Segment: cut from source.mp4 at 294 s, 14 s, libx264/aac faststart → segment.mp4; ffprobe **14.000 s**; sha256 b82ddb768c4d574f22b519929a845d46fa56008a13bbcf6717ef5a3a40bf9e5f.
Frames at ~1/s viewed as a contact sheet + sky-pixel sampling at 0.5 s steps (R−B warmth at frame top-center):
- **OBSERVED — blue register, segment 0–~4.5 s:** exhibits skyline scene, HUD 16:00, deep-blue sky (warmth ≈ −100 to −60).
- **OBSERVED — transition ~4.5–6 s:** sky warms progressively (warmth −36 → −3 → +16).
- **OBSERVED — dusk palette stands ~6–12.5 s:** orange sky over the skyline (warmth +29 to +55); buildings remain blue; sun low; HUD still 16:00.
- **OBSERVED — blue returns at ~13 s:** cut to the dinner interior, HUD 19:00, deep blue (frame 13 warmth −32 at sky sample; interior scene).
- **ALLOCATION — recreation schedule:** the 4-scene day (kitchen/street/exhibits/dinner) is re-based to build zero as a CONFIG scenes list; the break sits inside scene index 2's slot per the pinned machine (1200 ms at slot start). The recreation therefore proves the REGISTER + SINGLE BREAK + RETURN inside the window, not the segment's local 7 s dwell.

## 4. Construction
DOM/SVG, one self-contained recreation.html; CONFIG at top; phaseAt(t) single resolver; scenes generated (seeded skyline generator + minimal per-scene silhouette furniture from geom); HUD persists across all scenes with the scene's clock; break changes sky+sun only, by measured design (§2). Phase exclusivity: exactly one scene and one palette mode own the stage at any t. Intensity separation: intensity.lights 1.0 vs intensity.field 0.6.
Rejected alternatives (RUN §2): canvas pixel fields · video/frame embedding (refusal-class) · traced SVG (refusal-class).

## 5. Fidelity plan
Implemented: whole-world blue register (sky+buildings+amber lights+HUD) across 4 scenes · exactly one dusk break at the structural turn (exhibits, the last exhibit before dinner) · blue returns inside the same slot · end hold · persistent HUD · parameterized palette/break/scene/timing.
Named deferrals: the original's gradual ~2 s sky warm-up (the recreation's break is a hard palette replacement per the pinned machine) · per-scene interior detail beyond generic silhouettes · the segment's camera drift.

## 6. Own checks (node DOM-stub harness, 14 assertions ×2 configs)
- Swap test (EXACT RUN §2 values via ?cfg=): scenes[0].clock "06:15"→"05:45" · break.label "DUSK"→"TURN" · hud.year 2037→2041 · sceneMs 3200→2000 (cycle re-derives 14000→9200) · palette.sky "#1d3f8f"→"#16283f" · breakPalette.sky "#e8955a"→"#c93f2e" · type.font →"Arial, sans-serif". **ALL PASS** — CONFIG groups touched: scenes, break, hud, timing (sceneMs), palette, breakPalette, type. Named untouched: stage (the phone-stage constant, census-classified), geom and intensity (structural/generator groups; their application sites are census-resolved in config-census.md — jev-prewave noted the earlier broader claim as an overstatement and this sentence is its cure).
- Default assertions: cycle exactly 14000 · break dusk at [6400,7600) and blue at 7600 · buildings keep palette.building during the break · endHold from 12800. **ALL PASS (14/14 both configs)** — re-run on the final cured build.
- Purity grep for `segment.mp4|source.mp4|ev/|t502|t392|t492|t582|t592|t300|<video|<img`: **0 hits**. Asset inventory: recreation.html loads NO external assets (code only); comparison.html loads segment.mp4 (ORIGINAL side only) + recreation.html.
- Comparison check: ONE control set driving the video and slaving render() to its currentTime; durations matched (14.000 s segment; 14000 ms cycle, loops at the segment point); labels "ORIGINAL — The Good Takeoff @ 294–308s" / "RECREATION — T96 One-palette world, parameterized"; phone stacking via flex-wrap, 360px figures, controls above.
- node --check on the extracted script: **clean**.

## 7. Wave outcome
Interim wave (sha 54b912f3…): 65 · 45 · 98 · 78 · 72 = 71.6 — readability's dusk-contrast finding cured (dusk text plates; intensity.field 0.6→0.85), legs re-run (0 HITs), wave re-fired on the final build (sha 44ff698d…, harness 14/14 re-passed). Final wave: motion 72 · timing 50 · purity 97 · reusability 76 · readability 74 = **73.8, min 50 → FAIL / IN PROGRESS** (scores.md). Convergent timing+motion finding: the pinned §2b.4 slot machine vs the measured ~7 s dusk dwell — priced cures in scores.md; the cure is a seat-level re-pin or re-scope, not a builder grind.
