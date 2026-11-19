# build-record — T186 Foreground pass, mid-coverage · attempt 1 · Cycle 028 Wave 25 (queue #88)

Item: T186 (Packet #10 T09) — a bright foreground body passes so close to the lens that at the census instant (source 189.32 s) the frame's right ~50% is white blur while the street scene continues legible at left. Consumer: DLC assembler — transition/opening surfaces. Schedule basis (A7): **segment-anchored** for the pass instant (midMs 1020 = source 189.32 − 188.30); entry/exit/direction are **ALLOCATIONS** (printed as such everywhere). Registration limit (binding): whether an edit hides inside the specimen's pass is NOT established — this build asserts NO hidden cut and performs NO scene swap behind the pass.

## 1. Segment facts
- Source: `hidden_files/study/video-digests/2026-11-16-vimeo-watchtower/source.mp4` (ffprobe duration 212.68 s, packet probe agrees).
- Cut: `ffmpeg -ss 188.30 -t 2.50` (re-encode libx264/yuv420p + aac) → `segment.mp4`.
- ffprobe on segment.mp4: duration 2.52 s · size 1,848,844 bytes · video h264 1920×1080 @ 25 fps · audio aac. The segment is EVIDENCE: it appears only as the labeled ORIGINAL side of comparison.html.

## 2. Plan basis consumed BEFORE the build (A9.2)
- Source-record audit points consumed: (1) the register entry carries no timestamp/evidence fields — the digest section + the wave RUN's census govern; (2) full-coverage language in the packet's general lesson text is a general proposition, NOT a specimen fact — the build prices MID-coverage only (~50%), no full wipe; (3) the sibling relation to the hard-cut family is a production-use analogy, never evidence of a state change in this specimen — no scene swap built; (4) segment arithmetic: 2.50 s window, checkpoint at 1020 ms.
- Plan-review cure APPLIED: parameterization completeness — the Plan's CONFIG list named no scene geometry, the likely hiding place for hardcoded accidents. This build puts ALL scene geometry in CONFIG (`scene.doorway`, `scene.standingFigure` incl. stripeCount/stripeColor, `scene.seatedFigure`, `scene.wallBand`, `scene.skyH/groundColor`, `pass.heightFrac/yFrac/cornerRx`); the config-census leg resolves every key to an application site, and the one remaining ornament-offset class is printed there as HIT-1 carried, not exempted. Particle-freeze / intensity-separation / phrase-exclusivity failure classes priced inapplicable (no particle field, no sequenced phrases), agreeing with the wave Plan §2c.7.
- Builders received the wave Plan AS AMENDED (passDirection "right-to-left"; passWidthFrac DERIVED as coverageFraction × stage width).

## 3. Construction
ONE self-contained `recreation.html` (8,191 bytes · SHA-256 `30cd54815848e7707ab9e2430e183a312fda0bb6a4716d0f8d6671a0727bb869`): CONFIG at top; an SVG street scene (standing striped figure at left, doorway, second seated figure — all geometry from CONFIG.scene) legible at t=0; ONE large rounded-rect foreground shape, fill passColor, SVG feGaussianBlur from CONFIG.blurPx, following the §2d.3 position function: centre eased (passEasing easeInOutQuad) over [midMs−entryMs, midMs] from W+w/2 to W·(1−coverageFraction)+w/2, then over [midMs, midMs+exitMs] to −w/2, where w = coverageFraction × W (derived equality). `window.__rec` API: play/pause/seek/time (+ render/centreAt/coverageAt/coveredRightMass/passRect/CONFIG for the harness). No rendered text, no captions, no external assets, no specimen media. NO scene swap behind the pass; the scene layer is never touched by the pass clock.
Count assertion (A9.3): Plan CONFIG keys = 12 top-level + 6 scene keys/groups + 3 pass keys; built CONFIG carries exactly those (harness CONFIG print in §5 below) — source-count == built-count, no halt.

## 4. Census-anchor mapping (A10.2)
Offset −188.30 s. Census states: 700 ms = preceding pistol insert (OUTSIDE the build's scene, printed so no lens prices it missing) · **1020 ms = MID-COVERAGE checkpoint (f189.32 = ev/190): right ~50% white blur, street legible at left — prescribed build state: coverage(1020) = coverageFraction ±0.07, covered mass right of centre** · prescribed additionally: street scene legible at t=0 (coverage <0.05) and again at duration end (coverage <0.05; exit is an ALLOCATION). Departures: none from the checkpoint; entry duration 620 ms, exit 480 ms, direction right-to-left are ALLOCATIONS around the single evidenced instant (RUN §1e/§1f: entry side and durations UNRESOLVED after playback).

## 5. Own checks — RAW output (A9.4, node harness on the final build; harness = the build's own __rec functions in a vm with a DOM stub)
```
recreation.html sha256: 30cd54815848e7707ab9e2430e183a312fda0bb6a4716d0f8d6671a0727bb869 bytes: 8191
PASS  syntax: inline script parses (node vm.Script)
CONFIG: {"midMs":1020,"durationMs":2500,"coverageFraction":0.5,"passColor":"#f2ede2","passDirection":"right-to-left","blurPx":18,"entryMs":620,"exitMs":480,"passEasing":"easeInOutQuad","streetColor":"#6b7a72","figureColor":"#274b52","accentLabel":"street","scene":{"stageW":800,"stageH":450,"skyH":300,"groundColor":"#4d5a52","doorway":{"x":300,"y":120,"w":130,"h":210,"color":"#3a3f3a","lintelColor":"#8a7f63"},"standingFigure":{"x":92,"y":150,"w":54,"h":190,"headR":17,"stripeCount":6,"stripeColor":"#e8e2d2","legColor":"#22303a"},"seatedFigure":{"x":520,"y":268,"w":62,"h":74,"headR":15,"color":"#7a3b2e"},"wallBand":{"y":96,"h":14,"color":"#5b6a60"}},"pass":{"heightFrac":1.12,"yFrac":-0.06,"cornerRx":60}}
PASS  width equality: passRect width == coverageFraction x W  [width=400 cov*W=400]
PASS  coverage(midMs) within ±0.07 of coverageFraction  [coverage(1020)=0.5000 target=0.5]
PASS  coverage(0) < 0.05  [coverage(0)=0.0000]
PASS  coverage(durationMs) < 0.05  [coverage(2500)=0.0000]
PASS  max coverage on 50ms grid <= coverageFraction + 0.08  [max=0.5000 at t=1000]
PASS  covered mass right of centre at midMs (majority)  [rightMassFrac=1.0000]
PASS  centre at midMs == W*(1-cov)+w/2  [centre=600]
SWAPPED CONFIG: {"passColor":"#f2c94c","midMs":700,"coverageFraction":0.35,"accentLabel":"harbour"}
PASS  swap applied: passColor/midMs/coverageFraction/accentLabel
PASS  SWAP coverage(midMs=700) within ±0.07 of 0.35  [coverage(700)=0.3500]
PASS  SWAP coverage(0) < 0.05  [coverage(0)=0.0000]
PASS  SWAP coverage(durationMs) < 0.05  [coverage=0.0000]
PASS  SWAP max coverage <= 0.35 + 0.08  [max=0.3500]
PASS  SWAP width equality: width == 0.35 x W  [width=280]
PASS  SWAP covered mass right of centre at swapped midMs  [rightMassFrac=1.0000]
PASS  comparison: one <video> (segment side)
PASS  comparison: recreation side present (iframe)
PASS  comparison: exactly ONE control set (3 buttons)  [buttons=3]
PASS  comparison: ORIGINAL label verbatim
PASS  comparison: RECREATION label verbatim
PASS  comparison: recreation clock slaved to video currentTime
PASS  comparison: @media (max-width: 640px) stacking rule
HARNESS RESULT: ALL PASS
```
Swap test (§2 + §2c.1e, exact altered values): passColor #f2ede2→#f2c94c · midMs 1020→700 · coverageFraction 0.50→0.35 · accentLabel "street"→"harbour" — every checkpoint assertion follows the swapped CONFIG (assertions are CONFIG-derived per §2c.6) and passes; the mid-pass state still reads (bright blur mass at right, scene legible at the uncovered left).
Purity grep (§2c.1a, RAW): `grep -nEi 'segment\.mp4|source\.mp4|<video|<img|108018156|watchtower|vimeo' recreation.html` → **0 hits** (grep exit 1).
Asset inventory (§2c.1b, RAW): `grep -oE '(src|href)="[^"]+"|url\(|@import|fetch\(' recreation.html` → one hit: `url(` — the in-file fragment reference `url(#passBlur)` to the build's own SVG blur filter, classified per guards.md Cycle-026 precision (an in-file fragment reference is NOT a specimen reference). **0 external references**; every asset is inline code in the one file.


## 5b. Interim-wave cure (identical-hash rule)
A first scoring firing on the interim build (preserved verbatim in the artifact's codex/ directory as interim returns, never entering the final average) converged on one defect named independently by two lenses: the pause() clock bug — pause() cleared `playing` before reading nowMs(), so pausing mid-transit jumped the pass back to the previous offset and end-of-playback re-rendered t=0. Cure applied: pause() now captures nowMs() BEFORE clearing `playing`, clamps and preserves it. Own checks re-run on the cured build: HARNESS RESULT: ALL PASS (identical assertions, new hash above). jev-prewave re-fired on the cured build (interim return preserved as jev-prewave-interim1.md) and the five-lens wave re-fired on the final build; only the final wave's scores enter scores.md.

## 6. A6 legs (final build)
- fit-table.md — **0 HITs** (text-fit priced N/A: text-free build, §2c.1e; pass geometry measured: coverage(1020)=0.5000, max 0.5000, width equality exact).
- config-census.md — **1 HIT carried, dispositioned** (HIT-1: buildScene ornament micro-offsets as code literals — stripe height 5, lintel 8/12, leg 20/42, seated rx 10; technique-shaping values all CONFIG; carried into the wave with the disposition printed).

## 7. Item faithfulness trace
- Trace: §1 Observe — packet §T09 + register line 117 + RUN §§1b/1c/1e/1f consumed; hidden-cut limit carried as a binding constraint. §2 Plan — RUN §2 T186 as amended by §2c.5 + §2d.3 (direction correction + derived width equality) followed exactly; codex-plan-review cure (scene geometry into CONFIG) applied. §3 Execute — segment cut at the prescribed window; recreation + comparison built to the amended Plan. §5 Verify — own checks raw above; A6 legs filed; jev-prewave §8 below; five-lens wave §9 below.
- Choice log (≥2): (1) Pass width DERIVED from coverageFraction (§2d.3 equality) vs the §2c.5 independent passWidthFrac 0.62 — chose derived: overshoot becomes impossible by construction and the max-coverage cap holds structurally. (2) Evaluator/harness binding: the coverage evaluator lives INSIDE the build (`__rec.coverageAt`, the §2c.5 grid) and the harness executes the build's own functions vs a harness-side re-implementation — chose in-build: the assertions then bind the shipped code, not a parallel copy. (3) Scene richness: minimal legible street scene (two figures + doorway) vs a detailed street — chose minimal: §8 size discipline, the technique is the pass, not the street.
- Deviations: NONE from the amended Plan. Carried dispositions (not deviations): config-census HIT-1 (ornament micro-offsets) · render-proof limitation (§2c.1d, printed in scores.md).
- Evidence binding: segment.mp4 ffprobe (duration 2.52 s · 1920×1080 · h264/aac) §1 · recreation.html SHA-256 `30cd54815848e7707ab9e2430e183a312fda0bb6a4716d0f8d6671a0727bb869` (8,191 bytes) — the identical hash bound in all five lens payloads · census checkpoint f189.32 = ev/190 byte-identical (RUN §1c, seat's record).
