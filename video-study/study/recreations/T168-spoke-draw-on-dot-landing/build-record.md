# build-record — T168 Spoke draw-on with dot landing · attempt 1 · Cycle 026 Wave 23

Item: T168 · queue #82 · Packet #9 T03 · OWED first attempt. Spec: RUN.md §2 T168 AS AMENDED by §2c + §2d (the §2d REVISED schedule supersedes §2/§2c start values).
Artifact dir: hidden_files/study/recreations/T168-spoke-draw-on-dot-landing/
Final build SHA-256 (recreation.html): 267628f24bdb9bb28f2d6aa812674bc09d30c5994d98116a64a776173d80e5d2
Post-prewave cure (printed, not hidden): jev-prewave returned FIRE-WAVE with one non-blocking qualification — spoke.easing was a declared curve the code did not dispatch on. Cured after the firing: fractionAt now routes through applyEasing selected by CONFIG.spoke.easing (linear default unchanged; every own-check re-ran on the cured build with identical results, TOTAL FAILS=0, purity 0 hits). The wave below binds to the cured build's SHA; the prewave return stands verbatim as filed.

## Segment (evidence only)
- Source: hidden_files/study/video-digests/2026-11-16-vimeo-sixmap/source.mp4
- Window 1.44–1.92 s; cut 0.94–2.42 (±0.5 handles), re-encoded h264.
- ffprobe (raw): codec_name=h264 · width=1080 · height=1080 · r_frame_rate=25/1 · duration=1.480000
- segment.mp4: 33061 bytes · SHA-256 bffb19f978b971da47bfcff66f836cb3f440ac702f87061b113b4e24ef592e4d
- segment.mp4 is evidence only: it appears solely as the labeled ORIGINAL side of comparison.html; recreation.html contains no reference to it (purity grep below).

## Schedule basis + mapping
Schedule basis: **t=0 allocation** (RUN §2 T168, as revised §2d). Allocation starts = source segment-relative starts (500/1220/1820/2260/2700, segment start = source 0.94 s) under one constant −100 ms offset → **400/1120/1720/2160/2600**; durations preserved exactly (480/400/280/280/240, packet §4 bursts B02–B06); holds DERIVED (next start − start − dur) = 240/200/160/160, equal to the source holds; S5 ends 2840; end hold 2840–4200; cycleMs 4200.
Census-anchor mapping (by phase): source mid-draw state (source 1.60 s = segment-relative 660 ms, S1 at p=(660−500)/480=0.333, line ≈33%, NO dot) ↔ allocation S1 p=0.333 at t=560. Source spoke-before (1.40 s, hub alone) ↔ allocation t<400 (landed 0, line 0). Source landed (1.96 s, line complete + dot) ↔ allocation t≥880 (S1 landed).
Comparison sync: recreationMs = videoMs − 100 during segment playback (aligns every burst under the constant offset); after the segment ends the recreation continues free-running to 4200 ms. Face prints: "segment excerpt 1.48 s (first burst) vs allocation cycle 4.20 s (five bursts) — offset −100 ms, durations preserved".

## Mechanics implemented (packet §T03)
Thin white line (CONFIG spoke.w 1.5, colour #ffffff) extends from the hub toward each satellite over its burst; the satellite dot (r 21) materialises at the line's end ONLY as the draw completes (step at p=1 — no travel, no growth, no fade); mid-draw frames show the line with no dot; no arrowheads. Hub (482,484, r 32) stands full-size from t=0. Bursts serial, holds completely static. Easing: "linear" SUPPLIED (specimen easing UNMEASURED — registration limit; a constant-rate extension is the neutral curve, named in CONFIG).

## Construction
One self-contained recreation.html: CONFIG at top (stage 1080×1080 · hub · satellites[5] · spoke · timingScale{default 1} · palette · cycleMs 4200), SVG construction below. Per satellite: a line whose endpoint is hub + (satellite − hub) × lineFraction(ms), lineFraction a pure function of time (0 before start, proportional during draw, 1 after); the satellite circle's visibility is the step dotPresent = (fraction ≥ 1). stateAt(ms) is pure and deterministic (no Math.random/Date.now — grep-verified 0 hits). Exposed: window.__seek / window.__config / window.stateAt (+ module.exports {CONFIG, stateAt, scaledSatellites, __seek}); stateAt returns at least {landed, s1:{lineFraction, dotPresent}} plus the full per-satellite array. timingScale scales every start+duration uniformly; holds are derived, never literals. No external assets.
comparison.html: segment.mp4 + recreation iframe, ONE control set (Play/Pause/Restart), sync per the mapping above, labels "ORIGINAL — SixMap (nez&pez) @ 1.44–1.92" / "RECREATION — T168 Spoke draw-on with dot landing, parameterized", phone stacking (flex column ≤640px), buttons min-height 44px.

## Count assertion (A9.3)
Satellites built (CONFIG.satellites.length) = 5 vs RUN table = 5 — MATCH (raw harness line below).

## Fidelity plan — deferrals named
Implemented: draw-on line, dot materialisation at completion, serial bursts, static holds, hub standing, no arrowheads.
Deliberately excluded (named, lawful): the footer/name ticker (that is T170 — excluded by design; its synchrony with bursts is T171, not owed) · the remaining 17 satellites of the full 23-node fan (the technique is per-satellite; the allocation demonstrates five bursts — §8 split rule) · any easing curve beyond the supplied linear (specimen easing UNMEASURED).

## Asset inventory
segment.mp4 (evidence, comparison only) · recreation.html (code only, no assets loaded) · comparison.html (loads segment.mp4 + recreation.html only). No generated imagery; no external assets anywhere.

## Own checks — RAW output (final build, harness rc=0)
```
== CHECK 4 count ==
satellites built=5 RUN table=5
PASS count satellites 5 vs 5 MATCH :: 5
== CHECK 5 zero-state probes ==
stateAt(399).landed=0
PASS stateAt(399).landed==0 :: 0
stateAt(560).s1={"lineFraction":0.3333333333333333,"dotPresent":false}
PASS stateAt(560).s1.lineFraction~=0.333 :: 0.3333333333333333
PASS stateAt(560).s1.dotPresent==false
stateAt(879).s1={"lineFraction":0.9979166666666667,"dotPresent":false} stateAt(880).s1={"lineFraction":1,"dotPresent":true}
PASS stateAt(879).s1.dotPresent==false
PASS stateAt(880).s1.dotPresent==true
== CHECK 6 schedule invariant ==
timingScale=1 scaled=[[400,480],[1120,400],[1720,280],[2160,280],[2600,240]] invariant=true
PASS invariant ts=1
timingScale=0.5 scaled=[[200,240],[560,200],[860,140],[1080,140],[1300,120]] invariant=true
PASS invariant ts=0.5
== derived holds ==
holds=[240,200,160,160] expected=[240,200,160,160]
PASS holds equal source holds :: [240,200,160,160]
== CHECK 1 swap ==
swapped scaled satellites=[{"x":697,"y":451,"r":21,"drawStartMs":200,"drawDurMs":240},{"x":813,"y":131,"r":21,"drawStartMs":560,"drawDurMs":200},{"x":482.5,"y":676,"r":21,"drawStartMs":860,"drawDurMs":140}]
PASS swap satellites length 3 :: 3
PASS swap S1 start halved 400->200 :: 200
PASS swap S1 dur halved 480->240 :: 240
PASS swap spoke colour in state :: "#57c7e8"
PASS swap positions in state :: {"lineFraction":0,"dotPresent":false,"x":813,"y":131,"r":21,"drawStartMs":560,"drawDurMs":200}
PASS swap landed at 440 ==1 (S1 done) :: 1
PASS restored landed at 880 ==1 :: 1
TOTAL FAILS=0
HARNESS_RC=0
```
Swap EXACT values: satellites replaced by 3 entries from positions-final.json — (697,451) start 400 dur 480 · (813,131) start 1120 dur 400 · (482.5,676) start 1720 dur 280 (same §2d start/duration form) · timingScale 1→0.5 (S1 draw window halves: start 200, dur 240 — asserted) · spoke colour #ffffff→#57c7e8 (asserted in state). All swap assertions read from stateAt/scaledSatellites on the live CONFIG.
Purity grep (raw): pattern `segment\.mp4|source\.mp4|<video|<img|url\(|1235931636` over recreation.html → grep rc=1, **0 hits**.
Syntax (raw): `node --check` on the extracted inline script → **PASS**.
Determinism grep (raw): `Math\.random|Date\.now` over recreation.html → **0 hits**.

## A6 legs (on the FINAL build)
- fit-table.md — HITs 0. This item carries NO subject text; the fit table prints that fact as its row set.
- config-census.md — HITs 0. All-literal scan: 0 hex colours outside CONFIG; every remaining numeral/string classified structural; timingScale and every geometry value are CONFIG; every CONFIG key resolves to a value-flow application site; no CSS variables.

## Gate pointers
- jev-prewave: payload codex/payload-prewave.txt → return jev-prewave.md (artifact root). Disposition in scores.md.
- Five-lens wave: payloads codex/payload-{motion,timing,purity,reusability,readability}.txt → returns codex/lens-{motion,timing,purity,reusability,readability}.md, all bound to SHA 267628f2…e5d2 (identical in all five).
- Verdict: scores.md.
