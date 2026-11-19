# T106 — Cut on action · jev-prewave verdict (attempt 1, Cycle 018 Wave 15 re-take)

**Verdict: FIRE-WAVE**

| Dimension | Score |
|---|---|
| parameterization | 0.93 |
| purity pre-check | 0.95 |
| own-checks completeness | 0.88 |
| fidelity-plan honesty | 0.87 |

**Primary rejection classification:** none

## Priced findings

### 1. Parameterization — 0.93

Genuine CONFIG-driven construction, not a config costume.

- The CONFIG block in `recreation.html` names the full variable set the build record §1 claims: `lid{fromDeg,toDeg,actionMs,len,thick,baseW,baseH,hingeX,baseY,screenOnDeg,screenFullDeg,screenInset}` · `cutAt` · `framingA{scale,x,y}` · `framingB{scale,x,y}` · `holdBeforeMs` · `openHoldMs` · `cycleMs` · `loopFadeMs` · `palette{field,fieldB,body,screen,ink,card,accent}` · `laptop{beamOpacity,beamW,beamH,beamDx,beamDy,deskW,deskH,deskGap,deskOpacity}` · `sceneB{headerH,hero{x,y,w,h},glyph{x,y,scale,screenAspect,baseGap},cards[{x,y,w,h}],bars{h,gap,opacity,count,inset}}` · `type{font}` · `stage{width,height}`. Ranges are sane for the technique, including `cutAt` as a 0–1 fraction.
- Construction reads those keys at the sites `config-census.md` §2 resolves, key by key, with no unapplied key: `thetaAt()` and `CUT_MS` derive from `lid` + `holdBeforeMs` + `cutAt × (actionMs + openHoldMs)`; `heroScreen` / glyph sizing derives from `lid.len` × `sceneB.glyph.scale`; `frameA` / `frameB` transforms derive from `framingA` / `framingB`; scene, desk, beam, header, hero, cards and bars are all sized, positioned and coloured from CONFIG.
- The swap test in build record §5 is the decisive proof: on a scratch copy, `cutAt 1.00 → 0.65` moved `cutMs 5600 → 4060`, `lid.toDeg 64 → 48` moved `θcut 64 → 48`, `palette.screen "#7fe7d2" → "#ffd23c"` changed the hero screen background, and `framingB.scale 1.45 → 1.25` changed the frame-B transform — each measured by the node harness, not described. A traced or hard-coded copy cannot regenerate this way.
- `config-census.md` §1 honestly prices the remaining literals outside CONFIG rather than hiding them: `#111` page backdrop, `0 50%` hinge transform-origin, the cubic-ease constants, the beam's triangular `clip-path` identity, and the `600` ms manual-drive handoff are classified structural / page chrome, and none shapes a subject element. Four first-pass subject-shaping literals it caught (hero aspect `0.62`, glyph base gap, desk gap, beam offsets) were moved into CONFIG pre-wave and re-verified. The small deduction is for those structural literals existing at all — priced and lawful, not costumed.

### 2. Purity pre-check — 0.95

The construction route describes generation from parameters, with no tracing or embedding step in the prose or in the file.

- Build record §4 and the HTML agree: one self-contained DOM file, CONFIG at top, all elements created in code via a single `el()` helper, one continuous `thetaAt(t)` function (closed hold → `easeInOutCubic` action 8°→64° → open hold), screen opacity as a CONFIG-bounded function of θ, an instant `display` swap at `cutMs` with no transition property, and a frozen scene-B glyph that is a static evaluation of the same θ function at `CUT_MS`, explicitly not a second animation.
- Purity grep recorded in §5 over `recreation.html` for `segment\.mp4|source\.mp4|video-digests|ev/|\.jpg|\.png|<video|<img`: **0 hits**. Direct read of the file confirms it: no external asset is loaded, no image, video, frame or source path is referenced. `segment.mp4` appears only in `comparison.html` as the labelled ORIGINAL, correctly scoped outside the recreation.
- No step in §3–§4 routes through the specimen media: the §3 census *measures* the source to price `cutAt` and θ, and the build then *generates* from those numbers — measurement feeding parameters is the lane's lawful route, not tracing.

### 3. Own-checks completeness — 0.88

Results are recorded with numbers, not asserted. This is not an ASSERTED-CHECKS case.

- **Purity grep** (guards.md command 1): pattern printed, result 0 hits — recorded in §5.
- **Swap test** (command 2): exact swapped values printed, including the honest re-pricing note that the `cutAt → 0.65` target is applied on the re-priced scale from §3, and harness-measured outcomes for all four geometry / colour / framing legs plus a re-run mechanism proof (`θ(4044) = θ(4076) = 48`, diff 0) and 14/14 harness checks PASS on the swap build — recorded in §5.
- **Syntax** (command 3): `node --check` on the extracted inline script recorded as OK in §5; the build is deterministic by construction (a pure θ function of the clock, no RNG in the file). Deduction: the record prints no separate seeded-RNG census line, and the syntax result is a bare OK with no output excerpt — terse, but the check it names is binary and the surrounding harness results are numeric.
- **Mechanism proof** (beyond the command list): configured velocity bound derived and printed (max slope 3 × 56° / 1800 ms = 0.0933°/ms → 2.99° per 32 ms, +1° tolerance) against measured `θ(5584) = θ(5616) = 64°`, diff 0°, and action smoothness `1.477° ≤ 1.493°` per-step bound — recorded in §5.
- **Harness, default build**: 14/14 PASS with specifics — cycle 14,000 ms exactly, `cutMs 5600`, scene flip `block,none → none,block` at `cutMs`, `heroScreen` present from construction, loop-fade opacity 0.0017 at cycle−1 ms — recorded in §5.
- **A6 legs filed as separate artifacts, not summaries**: `fit-table.md` carries measured containment rows for every subject shape at the 360×203 stage (lid tip at θ=64°, beam, desk, scene-B hero / card 1 / card 2 under the framing-B visible window, card-bar stack 18 px in a 22 px card), the 6.00:1 screen-on-body contrast, and two pre-wave cures its geometry found and CONFIG fixed (card-2 clipping, bar overflow), closing 0 HITs; `config-census.md` carries the all-literal scan and full key→site resolution, closing 0 HITs. The comparison check (exact labels, one control set driving both, 14.000 s segment vs 14,000 ms cycle, phone stacking) is also recorded in §5.
- The printed limitation — PIXEL-UNVERIFIED, no browser binary in this seat, verification logic-level via the node harness with the comparison page as render surface — matches the limitation guards.md itself prints for the swap test. It is disclosed, not concealed, and it does not convert recorded logic-level results into assertions.

### 4. Fidelity-plan honesty — 0.87

The catalogue-vs-measured divergence is named at the top of the record, priced from evidence, and built under a named alternative — not silently deferred. It will cost the wave's motion / timing lenses, which is the wave's job to score; it is not a pre-wave concealment.

- Catalogue mechanics, agreeing in both sources fed: digest §T08 and TECHNIQUES §T106 state the laptop lid's motion *starts in one framing and completes in the next; the cut lands mid-action so the motion vector carries the eye across the edit.*
- The build does **not** implement that form, and the record says so before its construction section, in its header and in §1: *"Build form: the MEASURED form — a COMPLETION + SCENE-CHANGE cut (RUN §2's priced alternative)… the specimen's cut does NOT land mid-action."*
- The measurement behind that decision is filed in §3 as a foreground census done before building: source ffprobe (1280×720, 30 fps, 80.994 s), segment ffprobe (14.000 s), 0.25 s census over 35.00–40.00 s (21 frames, viewed firsthand) plus 30 fps frame-level probes; teal-screen samples `0 → 773 → 2014 → 2410` at 36.53–36.60 s marking action completion; a static open hold at θ=64° from ≈36.60 to 38.75 s; and a frame-exact cut between 38.733 (mean diff 1.4) and 38.767 (mean diff 226.2). Cut fraction of the action span is computed as `(38.75 − 35.60) / (36.60 − 35.60) = 3.15` — outside the action entirely, ≈2.15 s after completion, at the completed angle of 64°.
- Consequences are carried through the paperwork, not dropped: `cutAt` is re-priced `0.45 → 1.00` with its semantics redefined executably as the fraction of the `(action + openHold)` window, the ≈2.15 s post-completion hold carried as `openHoldMs` (allocated 2600 ms), carried properties across the swap named and verified (θcut value, `palette.screen`, laptop centre into the scene-B hero as screen block + frozen θcut glyph), and the post-cut hold printed (`holdAfter = 8400 ms` including the 600 ms loop fade).
- Secondary divergences and limits are also named: the `t=0` allocation is printed as an allocation, never as measured; `ev/34.0` is corrected firsthand (the ladder/menu card, not a laptop mid-action frame — the digest parenthetical is priced, not inherited); the packet clip is printed as ending before the webpage cut, so the cut's placement cannot be priced from the clip alone; scene B is printed as deliberately minimal (header + hero + two cards); and the codex-plan-review disposition in §2 prints pre-wave predicted lens scores (motion 84 · timing 80 · purity 95 · reusability 82 · readability 88) with the predicted minimum, timing, explicitly tied to the `t=0` allocation and the measured-form divergence as the priced risks.
- Deductions: the packet clip's lid build-in sub-beats (dot → slab → tilting parallelogram → wedge), noted in §3's packet-clip line, are absorbed into a continuous eased action in the build without a separate deferral line naming that simplification; and the framing-completion half of the catalogue mechanic (action completing *in the next framing*) is superseded by the measured form as a whole rather than itemised as its own dropped mechanic. Both are visible from the record as filed — neither is hidden — but a stricter fidelity plan would name each in a deferral list.

## Disposition

Advisory verdict: **FIRE-WAVE** — no dimension falls below the 0.5 floor and no ASSERTED-CHECKS condition applies, so the build record earns its scoring wave on its own paperwork. The runner reviews this verdict, applies it or sets it aside with the miss recorded in Condense, and files this verdict with its classification (none) and disposition in the build record either way. The wave, not this call, prices the measured completion-cut form against the catalogue's mid-action technique — the record has already disclosed that divergence, its evidence, and its predicted timing cost.
